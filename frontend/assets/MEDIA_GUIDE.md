# Casablanca Media Guide

All image/video references in the HTML now point to LOCAL paths.
When a file doesn't exist, the page falls back to `images/placeholder.svg` (dark gold placeholder — no network needed).

## Drop your real files here:

### Images (`frontend/assets/images/`)
| File | Used in |
|------|---------|
| `logo.png` | Navbar + footer (already exists) |
| `hero-poster.jpg` | Hero section — shown before/instead of hero video |
| `story-poster.jpg` | Story section video card poster |
| `cafe-card.jpg` | "Choose Your Experience" café card background |
| `restaurant-card.jpg` | "Choose Your Experience" restaurant card background |
| `ambiance.jpg` | Features / ambiance section left image |

### Gallery (`frontend/assets/images/gallery/`)
Drop 12 photos named exactly `g01.jpg` through `g12.jpg`.
They appear in the horizontal scroll strip and the lightbox.
Recommended: 900×1200 px, JPEG, under 300 KB each.

### Video (`frontend/assets/video/`)
| File | Used in |
|------|---------|
| `hero.mp4` | Full-screen hero background video |
| `story.mp4` | Story section video card |
Recommended: 720p, H.264, under 8 MB. If file is missing, the poster image shows instead.

## Nothing else to update in the HTML
All `src` attributes already point to these local paths. Just drop the files and refresh.

## Admin panel uploads
Menu item images are managed through the admin panel at `/c4z4bl4nc4-x9k2/`.
Uploaded images are stored by Django under `backend/media/menu_images/` and served at `/media/`.
