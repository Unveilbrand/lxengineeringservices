# Effra font files

This project uses **Effra** (licensed Dalton Maag typeface). Drop the webfont
files in this directory using these exact names — the `@font-face` rules in
`src/app/globals.css` already point at them:

| File                  | Weight used for        |
| --------------------- | ---------------------- |
| `effra-regular.woff2` | 400 — body, captions   |
| `effra-medium.woff2`  | 500 — nav links, CTA   |
| `effra-bold.woff2`    | 700 — hero heading     |

Until the files are added the stack falls back to Segoe UI / Helvetica / Arial.
