# Made in Canada

Made in Canada is a browser extension for Google Chrome that helps users identify when they're on a site that sells Canadian-made goods or services.

## Installation

Download a .zip of the repository. Then, open Google Chrome and enter development mode using [these instructions](https://developer.chrome.com/extensions/faq#:~:text=You%20can%20start%20by%20turning,a%20packaged%20extension%2C%20and%20more.). Finally, load the zip you downloaded as an "unpacked extension".

## Usage

Visit any site listed in the repository's manifest.json and see the topbar described in infobar.js!

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

To add or edit a site, only `sites.json` needs to change — it's the single source of truth for both the info page table and the extension's match list. After editing it, run `npm run build` to regenerate `manifest.json`'s `matches` array before committing.

A weekly GitHub Action (`.github/workflows/link-check.yml`, backed by `scripts/check-links.js`) checks that every domain in `sites.json` is still reachable and fails if one is genuinely dead (DNS/connection failure), so run `npm run check-links` locally if you want to check before opening a PR.


## Authors and acknowledgment
Made in Canada was ideated by [Meaghan Johns](https://github.com/meaghanjohns) and coded by [Dan Siegel](https://github.com/danielmaxsiegel).
