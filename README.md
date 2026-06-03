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
- [ ] Source content extracted to `reference/` *(blocked: see note below)*
- [ ] Source material reviewed and approved
- [ ] Design build

> **Note on extraction:** Fetching the live pages requires outbound web access
> to `mccollammarine.com`. In a session whose network policy blocks that host,
> the `reference/` files remain stubs. Run the extraction from a session with
> egress to the site allowed. See the network-policy docs:
> <https://code.claude.com/docs/en/claude-code-on-the-web>
