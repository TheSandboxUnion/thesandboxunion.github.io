# Tool logos

Every logo in this folder was **supplied by the team** in the `logo/` folder at the
project root. Each was copied here byte for byte by `node scripts/sync-logos.mjs --write`,
with no recolouring, cropping, redrawing or resizing. No logo here was downloaded
from the internet.

**The team is responsible for following each brand's logo-usage rules** (permission,
clear space, colours, no implied endorsement) wherever these logos appear.

| Tool | File | Source |
|---|---|---|
| Lovable | `lovable.png` | Supplied by the team (`logo/Lovable_Logo.png`) |
| Google AI Studio | `google-ai-studio.png` | Supplied by the team (`logo/google ai studio logo.png`) |
| Manus AI | `manus-ai.webp` | Supplied by the team (`logo/manus ai logo.webp`) |
| Antigravity | `antigravity.webp` | Supplied by the team (`logo/google-antigravity-logo-png.webp`) |
| Botpress | `botpress.png` | Supplied by the team (`logo/botpress logo.png`) |
| Landbot | `landbot.png` | Supplied by the team (`logo/lanbot logo.png`) |
| Power BI | `power-bi.png` | Supplied by the team (`logo/power bi logo.png`) |
| Gemini Notebook | `gemini-notebook.png` | Supplied by the team (`logo/gemini-notebook-logo.png`) |
| Overleaf | `overleaf.png` | Supplied by the team (`logo/overleaf logo.png`) |
| LaTeX | `latex.png` | Supplied by the team (`logo/latex-logo-png.png`) |
| Suno | `suno.png` | Supplied by the team (`logo/suno ai.png`) |
| ElevenLabs | `elevenlabs.png` | Supplied by the team (`logo/eleven labs - logo.png`) |

## Tiles without a logo

- **Tableau:** no file in `logo/` yet. Add e.g. `logo/tableau.png`, run the sync script,
  then set `logo` on the Tableau tool in `src/data/aiTools.ts`.

## Adding or replacing a logo

1. Put the file in `logo/` (any name containing the tool's name, e.g. `Tableau logo.png`).
2. Run `node scripts/sync-logos.mjs` to preview the match, then `--write` to copy it.
3. Set `logo: LOGO_DIR + '<tool-id>.<ext>'` on the tool in `src/data/aiTools.ts`.
