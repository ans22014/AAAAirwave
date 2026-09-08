# Hero videos

The hero rotates through three background videos in `public/video/`, each with its own poster in `public/images/`:

| Video | Poster | Source (project root) |
|---|---|---|
| `hero.webm` (~1.3MB) | `hero-establishing.jpg` | `hero-compressed-bright.webm` (color-graded from `hero-compressed.webm`; original `herosection1.webm` deleted from the working tree, recover from git history if needed) |
| `hero-crane.webm` (~1.8MB) | `hero-crane-poster.jpg` | `craneremovingoldunitherosection.webm` |
| `hero-measuring.webm` (~2.9MB) | `hero-measuring-poster.jpg` | `measuringherosection.webm` |

All three were compressed with `ffmpeg` (now installed via Homebrew) using the same settings:

```bash
brew install ffmpeg   # one-time, if not already installed
ffmpeg -i <source>.webm -vf scale=1920:-2 -b:v 2M -c:v libvpx-vp9 -c:a libopus public/video/<name>.webm
```

**`hero.webm` is additionally color-graded** (brighter + more saturated) so the red AAA Airwaves logo/van stay legible under the hero's navy overlay gradient (`components/Hero.tsx`) — without that boost, the overlay crushed the reds to near-illegibility. The grade was applied before scaling:

```bash
ffmpeg -i hero-compressed.webm -vf "eq=brightness=0.08:saturation=1.3:contrast=1.05,scale=1920:-2" -b:v 2M -c:v libvpx-vp9 -c:a libopus hero-compressed-bright.webm
```

Only `hero.webm` gets this treatment — `hero-crane.webm` and `hero-measuring.webm` are unmodified. If the overlay ever changes, or another clip needs the same treatment, reuse this `eq` filter (adjust `saturation`/`brightness` as needed) rather than touching the overlay CSS.

Posters were extracted with:

```bash
ffmpeg -i public/video/<name>.webm -vframes 1 -ss 00:00:02 public/images/<name>-poster.jpg
```

To add, remove, or reorder clips in the rotation, edit the `clips` array in `components/Hero.tsx` — each entry needs a `src` and matching `poster`. The component cross-fades between clips as each one finishes (`onEnded`) and respects `prefers-reduced-motion` by falling back to the first poster as a static background.
