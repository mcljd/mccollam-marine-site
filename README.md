# McCollam Marine — Website Redesign

A brand-new **static, multi-page website** for McCollam Marine, a marine
surveying and naval architecture business (live site: <https://mccollammarine.com>).

This project reuses the **content, logo, brand colours, and business details**
from the existing site, presented in a fresh design. No design work is started
until the source material in `reference/` has been extracted and reviewed.

## Project structure

```
.
├── pages/            # HTML pages (one file per site page)
├── assets/
│   ├── css/          # Stylesheets
│   └── images/       # Logo, photography, icons
├── reference/        # Extracted source material from the current live site
│   ├── *.md          # One markdown file per source page (content)
│   ├── brand.md      # Colours, fonts, logo URL, business + certification details
│   └── images.md     # All image URLs found, grouped by page
└── README.md
```

## Source pages (to extract into `reference/`)

| Page                | URL |
|---------------------|-----|
| Home                | <https://mccollammarine.com/> |
| About               | <https://mccollammarine.com/about-mccollam-marine/> |
| Services            | <https://mccollammarine.com/services/> |
| Passenger Boat Coding | <https://mccollammarine.com/passenger-boat-coding/> |
| Boat Surveys        | <https://mccollammarine.com/boat-surveys/> |
| Stability Book      | <https://mccollammarine.com/stability-book/> |
| Fishing Vessels     | <https://mccollammarine.com/fishing-vessels/> |
| Boat Design         | <https://mccollammarine.com/boat-design/> |
| Contact             | <https://mccollammarine.com/contact-us/> |
| Gallery             | <https://mccollammarine.com/gallery/> |

## Status

- [x] Project scaffold (folders, `.gitignore`, `README`)
- [x] Full page content extracted to `reference/` (verbatim, via WordPress.com MCP)
- [x] Brand colours, fonts, logo URL, and all image URLs captured
- [x] Terms of Business captured verbatim (LOCKED — see below)
- [ ] Source material reviewed and approved
- [ ] Design build

> **Extraction method:** Direct fetching of `mccollammarine.com` is blocked by
> this environment's network policy, but the site is connected via the
> **WordPress.com MCP connector** (site ID 140823608), so all page content,
> brand tokens (Astra theme inline CSS), the logo, and the full media library
> were pulled directly and verbatim.
>
> **⚠️ Terms of Business is LOCKED:** `reference/tob.md` must be reproduced
> word-for-word in the redesign (insurance/legal requirement). Styling may
> change; wording may not.
