# Casablanca Media Guide

## Drop files here when you have real assets:

### Images
- `images/logo.png` — Brand logo (used in navbar + footer)
- `images/gallery/01.jpg` ... `12.jpg` — Gallery photos (used in horizontal strip + lightbox)
- `images/hero-poster.jpg` — Hero section poster (shown before video loads)
- `images/story-poster.jpg` — Story section poster
- `images/cafe-hero.jpg` — Café menu page hero background
- `images/restaurant-hero.jpg` — Restaurant menu page hero background
- `images/ambiance.jpg` — Features section image
- `images/menu/cafe/` — Individual café menu item photos (named by item, e.g. `espresso.jpg`)
- `images/menu/restaurant/` — Individual restaurant menu item photos

### Video
- `video/hero.mp4` — Hero section background video (720p minimum, H.264)
- `video/story.mp4` — Story section video card

## After dropping files, update these src attributes:

**index.html**
- Hero video: `<source src="assets/video/hero.mp4"` and `poster="assets/images/hero-poster.jpg"`
- Story video: `<source src="assets/video/story.mp4"` and `poster="assets/images/story-poster.jpg"`
- Gallery: Change `GALLERY_IMAGES` array to use `assets/images/gallery/01.jpg` etc.
- Café card: `src="assets/images/cafe-hero.jpg"`
- Restaurant card: `src="assets/images/restaurant-hero.jpg"`
- Features: `src="assets/images/ambiance.jpg"`

**cafe-menu.html / restaurant-menu.html**
- Hero background: `<img src="assets/images/cafe-hero.jpg"` / `restaurant-hero.jpg`
- Menu items: each item's `image` field in MENU_DATA, or serve from Django `/media/`
