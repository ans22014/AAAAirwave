# Hero video

`public/video/hero.webm` is the compressed version (~1.3MB) used for the hero background. The original uncompressed export lives at the project root as `herosection1.webm` (~13MB) if you ever need to re-encode from source, e.g. with a different bitrate:

```bash
brew install ffmpeg   # one-time, if not already installed
ffmpeg -i ../herosection1.webm -vf scale=1920:-2 -b:v 2M -c:v libvpx-vp9 -c:a libopus public/video/hero.webm
```
