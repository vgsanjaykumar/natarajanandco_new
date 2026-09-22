# Site logo

`icon.png` is the square "N" building mark shown in the navbar and footer
(`src/components/art/Logo.jsx`) and used as the source for the favicons and
app icons in `public/` (favicon.ico, favicon-32.png, apple-touch-icon.png,
icon-192.png, icon-512.png) plus the inline splash-screen icon in
`index.html`.

To update the logo: replace this file with a square image (ideally 1000px+,
with ~10% padding around the artwork so it isn't cropped tight against the
edges), then regenerate the favicon/app-icon files from it at 16/32/48
(favicon.ico), 32 (favicon-32.png), 180 (apple-touch-icon.png), 192
(icon-192.png) and 512 (icon-512.png) px, and re-embed a ~96px version as the
base64 `data:` URI used by `#splash .sp-logo` in `index.html`.
