(function () {
  if (document.getElementById('made-in-canada-infobar-host')) {
    return;
  }

  var host = document.createElement('div');
  host.id = 'made-in-canada-infobar-host';

  // Inline + !important so no page stylesheet can hide or resize the host
  // element. Deliberately left in normal document flow (not fixed/high
  // z-index) so it pushes the page's own content down instead of
  // overlaying it — an overlay would cover the site's real navbar, which
  // is worse than the banner occasionally landing behind a fixed header.
  // `all: initial` resets display to its CSS-initial value of `inline`, so
  // it has to be set back to `block` explicitly or the bar won't span the
  // page width.
  host.style.cssText =
    'all: initial !important;' +
    'display: block !important;' +
    'position: relative !important;' +
    'width: 100% !important;';

  // Everything past this point lives in a shadow root, so the page's CSS
  // can never bleed in (or be bled into) regardless of how it's written.
  var shadow = host.attachShadow({ mode: 'open' });

  var style = document.createElement('style');
  style.textContent =
    '.bar {' +
    '  box-sizing: border-box;' +
    '  width: 100%;' +
    '  padding: 6px 12px;' +
    '  background: #ffffff;' +
    '  color: #1a1a1a;' +
    '  font: 14px/1.4 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;' +
    '  text-align: center;' +
    '  border-bottom: 2px solid #d52b1e;' +
    '}';

  var bar = document.createElement('div');
  bar.className = 'bar';
  bar.textContent = 'This site features goods or services that are produced in Canada 🇨🇦';

  shadow.appendChild(style);
  shadow.appendChild(bar);

  document.body.prepend(host);
})();
