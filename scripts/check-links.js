#!/usr/bin/env node
// Checks that every domain in sites.json is still reachable. Only flags
// domains that are genuinely dead (DNS/connection failures) — sites that
// block scripted requests with 403/429 are left alone, since those work
// fine for a real browser and aren't the kind of breakage this list rot
// is actually about.

const fs = require('fs');
const path = require('path');

const sitesPath = path.join(__dirname, '..', 'sites.json');
const sites = JSON.parse(fs.readFileSync(sitesPath, 'utf8'));

const TIMEOUT_MS = 15000;
const RETRIES = 2;

// Codes that mean the domain itself is unreachable — no DNS record, nothing
// listening, connection actively refused/reset, or it never responded.
// TLS chain/cert codes are deliberately excluded: Node's fetch validates
// strictly and doesn't fetch missing intermediates the way real browsers
// do, so a site can be broken here but working fine for actual visitors.
const DEAD_CODES = new Set([
  'ENOTFOUND',
  'ECONNREFUSED',
  'ECONNRESET',
  'EAI_AGAIN',
  'ETIMEDOUT',
  'UND_ERR_CONNECT_TIMEOUT',
  'UND_ERR_HEADERS_TIMEOUT',
]);

async function attempt(domain) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(`https://${domain}`, {
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (made-in-canada link checker)' },
    });
    return { domain, ok: true, status: response.status, finalUrl: response.url };
  } catch (err) {
    const code = err.cause && err.cause.code;
    return { domain, ok: false, dead: DEAD_CODES.has(code) || !code, code, error: err.message };
  } finally {
    clearTimeout(timeout);
  }
}

async function checkDomain(domain) {
  let result;
  for (let i = 0; i <= RETRIES; i++) {
    result = await attempt(domain);
    if (result.ok || !result.dead) return result;
  }
  return result;
}

async function main() {
  const jobs = [];
  for (const entry of sites) {
    for (const domain of entry.domains || [entry.site]) {
      jobs.push({ name: entry.name, domain });
    }
  }

  const results = await Promise.all(
    jobs.map(async (job) => ({ ...job, ...(await checkDomain(job.domain)) }))
  );

  const dead = results.filter((r) => !r.ok && r.dead);
  const flaky = results.filter((r) => !r.ok && !r.dead);

  for (const r of results) {
    if (r.ok) {
      console.log(`OK    ${r.domain} (${r.status})`);
    } else if (r.dead) {
      console.log(`DEAD  ${r.domain} [${r.name}] — ${r.error}`);
    } else {
      console.log(`WARN  ${r.domain} [${r.name}] — ${r.error} (not treated as dead)`);
    }
  }

  if (dead.length > 0) {
    console.error(`\n${dead.length} dead domain(s) found:`);
    for (const r of dead) {
      console.error(`  - ${r.name}: ${r.domain} (${r.error})`);
    }
    process.exit(1);
  }

  const okCount = results.length - dead.length - flaky.length;
  console.log(`\n${okCount}/${results.length} domains reachable${flaky.length ? `, ${flaky.length} flagged as WARN (see above)` : ''}.`);
}

main();
