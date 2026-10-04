# GRANI website preview

Static preview of `grani-modern-website-v2.zip`, deployed from this repository's `main` branch to the Vercel project `grani-preview`.

The site root contains `index.html`, the other HTML pages, `assets/` and local copies of the referenced public photographs in `images/`. No framework, dependency installation or build command is required.

Preview pages send `X-Robots-Tag: noindex, nofollow, noarchive`; `robots.txt` disallows crawling. Canonical metadata identifies the original website. Vercel redirects `/pertners.html` to `/partners.html` and serves the included `404.html` for missing pages.

The enquiry form opens an email draft in the visitor's email application. It does not send messages through a backend.

The original Apache `.htaccess` and deployment instructions are omitted from the preview. No changes to `gran-i.com`, its hosting, DNS, mailboxes or existing content are part of this project.
