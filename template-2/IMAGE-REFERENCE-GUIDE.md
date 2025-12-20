# Image Reference Guide
## Planetary Party Website - Template 1

This guide shows the reorganized image structure with descriptive names and clear folder organization.

---

## New Folder Structure

Images are now organized into themed folders for easy navigation:

```
images/
├── diagrams/          # Infographics with text labels explaining concepts
├── networks/          # Network and bioregional tree visualizations
├── spirals/           # Spiral and regenerative cycle imagery
└── abstract/          # Additional nature and abstract imagery (47 images)
```

---

## Images Currently Integrated in Pages

### Homepage (index.html)
- **Line 205**: `../images/diagrams/guilds-network.jpg`
  - Section: How We Operate (Bioregional Network illustration)
  - Shows: What the guilds are - network diagram
  - Former name: Gemini_Generated_Image_t6x5tut6x5tut6x5.jpg

### Theory of Change Page (theory-of-change.html)
- **Line 104**: `../../images/diagrams/protocol-badge.jpg`
  - Section: Bioregional Activation
  - Shows: Planetary Party Protocol badge with earth and celebration
  - Former name: Gemini_Generated_Image_5legoh5legoh5leg.jpg

### Protocol Page (protocol.html)
- **Line 51**: `../../images/diagrams/join-guild.jpg`
  - Section: Introduction - Living Architecture Spiral
  - Shows: How to join a guild infographic
  - Former name: Gemini_Generated_Image_t9u2ret9u2ret9u2.jpg

- **Line 121**: `../../images/diagrams/protocol-vision.jpg`
  - Section: Phase 1: SENSE — The Roots
  - Shows: Protocol vision and framework diagram
  - Former name: Gemini_Generated_Image_yi8cylyi8cylyi8c.jpg

- **Line 207**: `../../images/spirals/guilds-spiral.jpg`
  - Section: Phase 2: SEE — Mycelial Map
  - Shows: Guild spiral with all 9 guilds labeled
  - Former name: Gemini_Generated_Image_gge9ongge9ongge9.jpg

- **Line 274**: `../../images/diagrams/upcoming-parties.jpg`
  - Section: Phase 3: FLOW — Water Table
  - Shows: Upcoming planetary parties calendar
  - Former name: Gemini_Generated_Image_vxxt9pvxxt9pvxxt.jpg

- **Line 363**: `../../images/networks/bloom-bioregions-map.jpg`
  - Section: Phase 4: CELEBRATE — The Bloom
  - Shows: Bloom Network bioregions map
  - Former name: Gemini_Generated_Image_ycx34ycx34ycx34y.jpg

- **Line 488**: `../../images/diagrams/why-guilds-work.jpg`
  - Section: Phase 5: REGENERATE — The Spiral
  - Shows: Why guilds make PPP work diagram
  - Former name: Gemini_Generated_Image_ps9rq8ps9rq8ps9r.jpg

### Guilds Page (guilds.html)
- **Line 567**: `../../images/diagrams/prosocial-framework.jpg`
  - Section: The Anchor Circle
  - Shows: ProSocial framework principles
  - Former name: Gemini_Generated_Image_boa11boa11boa11b.jpg

### Communities Page (communities.html)
- **Line 51**: `../../images/spirals/regenerative-spiral-primary.jpg`
  - Section: Introduction - Global Bioregional Network
  - Shows: Regenerative spiral with protocol phases
  - Former name: Gemini_Generated_Image_xjias0xjias0xjia.jpg

- **Line 119**: `../../images/diagrams/protocol-engagement.jpg`
  - Section: Costa Rica Pilot
  - Shows: Planetary Party Protocol engagement process
  - Former name: Gemini_Generated_Image_lzj2c1lzj2c1lzj2.jpg

- **Line 200**: `../../images/networks/bloom-network-tree.jpg`
  - Section: Southern California Pilot
  - Shows: Bloom Network tree with all bioregions
  - Former name: Gemini_Generated_Image_ml9hwhml9hwhml9h.jpg

- **Line 253**: `../../images/spirals/regenerative-spiral-alt.jpg`
  - Section: The Andes Pilot
  - Shows: Alternative regenerative spiral visualization
  - Former name: Gemini_Generated_Image_gw8ru7gw8ru7gw8r.jpg

---

## Additional Organized Images Available

### Diagrams Folder
High-quality infographics ready to use:
- `diagrams/step-into-weave.jpg` - Onboarding pathway diagram
- `diagrams/bioregion-journey-circular.jpg` - Circular journey map
- `diagrams/bioregion-journey-detailed.jpg` - Detailed journey steps
- `diagrams/intelligence-dashboards.jpg` - Dashboard components breakdown

### Networks Folder
Network and tree visualizations:
- `networks/mycelium-bioregions.jpg` - Mycelium network of bioregions
- `networks/bloom-bioregions-map.jpg` - Bloom bioregions map (in use)
- `networks/bloom-network-tree.jpg` - Bloom network tree (in use)

### Spirals Folder
Regenerative cycle imagery:
- `spirals/regenerative-spiral-primary.jpg` - Main spiral (in use)
- `spirals/regenerative-spiral-alt.jpg` - Alternative spiral (in use)
- `spirals/guilds-spiral.jpg` - Guilds in spiral form (in use)

### Abstract Folder
47 additional images for future use, organized as `abstract/image-01.jpg` through `abstract/image-36.jpg` and `abstract/unnamed-12.jpg` through `abstract/unnamed-15.jpg`.

---

## Placeholders for Team Photos & Partner Logos

### About Page (about.html)

#### Team Photo Placeholders

**Syd Harvey Griffith (Line 53-57):**
```html
<div style="width: 300px; height: 300px; margin: 0 auto 1.5rem; background: linear-gradient(135deg, #2d5f4f, #8fbc8f); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem;">
    Photo of Syd<br/>Harvey Griffith
</div>
```
**To replace:** Delete this div, add:
```html
<img src="path/to/syd-photo.jpg" alt="Syd Harvey Griffith" style="width: 300px; height: 300px; border-radius: 50%; object-fit: cover; margin: 0 auto 1.5rem;">
```

**Additional Team Member Placeholders (Lines 102-107, 119-124, 136-141):**
- Same structure as above, using 200px sizing
- Replace gradient div with `<img>` tag

#### Partner Logo Placeholders

**6 Partner Categories (Lines 170-245):**
Each category has a placeholder div. To replace:
```html
<div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; padding: 1rem; background: #f5f0e8; border-radius: 8px;">
    <img src="path/to/partner-logo1.png" alt="Partner Name" style="height: 60px; width: auto;">
    <img src="path/to/partner-logo2.png" alt="Partner Name" style="height: 60px; width: auto;">
    <!-- Add more as needed -->
</div>
```

---

## How to Add/Replace Images

### Method 1: Replace Existing Images
1. Find the image reference in HTML (use line numbers above)
2. Replace with your chosen image from organized folders
3. Example: Change `diagrams/guilds-network.jpg` to `diagrams/your-new-image.jpg`

### Method 2: Add New Images
1. Place your image in the appropriate folder:
   - `/images/diagrams/` for infographics
   - `/images/networks/` for network visualizations
   - `/images/spirals/` for cycle/spiral imagery
   - `/images/abstract/` for nature/abstract photos
2. Reference in HTML:
```html
<img src="../../images/diagrams/your-image.jpg" alt="Description" loading="lazy">
```

### Image Path Reference
- **From homepage** (index.html): `../images/folder/filename.jpg`
- **From any page** folder (pages/*.html): `../../images/folder/filename.jpg`

---

## Image Optimization Tips

Before adding images:

1. **Resize appropriately:**
   - Hero images: 1920px width max
   - Feature card images: 800px width max
   - Team photos: 400px x 400px
   - Partner logos: 300px width max

2. **Compress for web:**
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: < 500KB for large images, < 100KB for cards/photos

3. **Use appropriate formats:**
   - Photos: JPEG (or WebP for modern browsers)
   - Logos: PNG (transparent) or SVG (vector)
   - Icons: SVG preferred

4. **Add alt text:**
   - Every image needs descriptive alt text
   - Example: `alt="Community members gathering in circle during bioregional party"`

---

## Quick Reference: Image Integration Status

| Page | Total Images | Status | Notes |
|------|--------------|--------|-------|
| Homepage | 1 | ✅ Complete | Guilds network diagram |
| Theory of Change | 1 | ✅ Complete | Protocol badge |
| Protocol | 6 | ✅ Complete | All phases covered |
| Guilds | 1 | ✅ Complete | Anchor Circle framework |
| Communities | 4 | ✅ Complete | All bioregions visualized |
| About | 0 | ⚠️ Needs: | Team photos + partner logos |

**Total:** 13 images integrated, 47 available for future use

---

## Benefits of New Organization

✅ **Descriptive Names** - Instantly know what each image shows
✅ **Logical Folders** - Find images by category easily
✅ **Easy Maintenance** - Update images without hunting through cryptic filenames
✅ **Better Collaboration** - Team members can quickly locate and add images
✅ **Scalable** - Simple to add more images in appropriate folders

---

## Next Steps

1. **Add team photos** to About page (4 placeholders ready)
2. **Add partner logos** to About page (6 category placeholders ready)
3. **Review unused images** in abstract folder - categorize if needed
4. **Consider adding** more images to:
   - Homepage hero background
   - Guild cards (individual guild imagery)
   - Feature card headers
   - Section dividers

---

**Last Updated:** December 2024
**Total Images:** 58 (13 integrated + 5 available diagrams/networks + 40 in abstract folder)
