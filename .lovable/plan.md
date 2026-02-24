

# Fix Video Playback and Reduce Hero Font Size

## Issues
1. **Video not playing**: The video URL is a large UHD file (2560x1440 @ 30fps) which may fail to load or autoplay. The fix involves adding a `useRef` + `useEffect` to programmatically trigger playback, switching to a smaller/more reliable video file, and adding a poster fallback.
2. **Hero font too large**: The headline is currently `text-6xl sm:text-7xl lg:text-[7rem]` which is very large.

## Changes (all in `src/components/Hero.tsx`)

### Video Fix
- Add `useRef` and `useEffect` to programmatically attempt autoplay with fallback logic
- Use a smaller, more reliable Pexels video (SD/HD instead of UHD) to improve loading
- Keep `autoPlay`, `muted`, `loop`, `playsInline` attributes
- Add a poster image so there's always a visual even if video fails

### Font Size Reduction
- Headline: `text-6xl sm:text-7xl lg:text-[7rem]` changed to `text-4xl sm:text-5xl lg:text-6xl`
- Subtitle: `text-xl lg:text-2xl` changed to `text-lg lg:text-xl`

## Technical Details
- The `useEffect` will call `video.play()` and catch any errors, retrying with `muted = true` as a fallback
- The video source URL will be changed to a smaller resolution version (e.g., HD instead of UHD) for faster loading and better browser compatibility
- No other files need changes

