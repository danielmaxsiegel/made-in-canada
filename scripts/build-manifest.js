#!/usr/bin/env node
// Regenerates the content_scripts matches in manifest.json from sites.json,
// which is the single source of truth for the company list.

const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const sitesPath = path.join(rootDir, 'sites.json');
const manifestPath = path.join(rootDir, 'manifest.json');

const sites = JSON.parse(fs.readFileSync(sitesPath, 'utf8'));
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

// Reduces a hostname to its registrable domain (last two labels), e.g.
// "shop.lululemon.com" -> "lululemon.com". This is a simple heuristic that
// assumes single-label TLDs (.com, .ca, etc.) — every domain in sites.json
// today fits that, but a future entry on a multi-part TLD (e.g. .co.uk)
// would need to be listed under `domains` with the correct base explicitly.
function baseDomain(host) {
  return host.split('.').slice(-2).join('.');
}

const bases = new Set();
for (const entry of sites) {
  for (const domain of entry.domains || [entry.site]) {
    bases.add(baseDomain(domain));
  }
}

// `*.domain.tld` matches the bare domain itself plus any subdomain, so one
// pattern per company survives future www/non-www/regional-subdomain
// changes instead of needing to be updated (or silently going stale) every
// time a site's hostname shifts.
const matches = [...bases].sort().map((base) => `*://*.${base}/*`);

manifest.content_scripts[0].matches = matches;

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');

console.log(`Wrote ${matches.length} match patterns for ${sites.length} sites to manifest.json`);
