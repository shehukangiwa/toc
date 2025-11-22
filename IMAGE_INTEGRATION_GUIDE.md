# Image Integration Guide - ÒRÌKÌ Royal Dining Experience

## Overview
This guide provides detailed instructions for integrating actual event photos into the Nigerian culturally-branded website. All image placements are designed to honor the prestigious nature of the event while maintaining the authentic Nigerian aesthetic.

---

## Color Palette Reference

Use these colors when editing/processing images for consistency:

```css
/* Primary Colors */
Orange: #E65C2E   /* Energy, warmth, celebration */
Teal: #2D9B9B     /* Prosperity, harmony */
Green: #1B5E20    /* Heritage, growth, Nigerian flag */
Red: #C62828      /* Royalty, prestige, passion */
Gold: #D4AF37     /* Wealth, excellence */
White: #FFFFFF    /* Purity, unity */
```

---

## Image Requirements

### General Guidelines
- **Format**: WebP (preferred) or JPEG for compatibility
- **Optimization**: Use tools like ImageOptim, Squoosh, or TinyPNG
- **Responsive**: Provide 2-3 sizes (mobile, tablet, desktop)
- **Accessibility**: Always include descriptive alt text
- **Cultural Sensitivity**: Ensure images represent Nigerian culture authentically

### Recommended Sizes
```
Hero Images: 1920x1080px (16:9)
Feature Cards: 800x600px (4:3)
Gallery Grid: 600x600px (1:1)
Event Highlights: 1200x800px (3:2)
Thumbnails: 400x400px (1:1)
```

---

## Image Placement Locations

### 1. Hero Section (Welcome.tsx, Line 144-211)

**Current State**: Gradient background with cultural patterns

**Recommended Addition**:
- **Hero Background Image** - Presidential table setting or Eagle Square setup
- **Placement**: Behind the ÒRÌKÌ title
- **Treatment**:
  - Apply dark overlay (opacity: 0.6-0.7)
  - Add subtle orange/gold gradient overlay for warmth
  - Blur slightly (2-3px) to keep focus on text

**Implementation**:
```tsx
{/* Add after line 94 - Background image */}
<div className="absolute inset-0 -z-5">
    <img
        src="/images/hero-eagle-square.jpg"
        alt="Eagle Square Abuja - ÒRÌKÌ Royal Dining Experience"
        className="h-full w-full object-cover opacity-20 blur-sm"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/90"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-[#E65C2E]/10 to-[#C62828]/10"></div>
</div>
```

**Suggested Images**:
- Eagle Square aerial view during setup
- Presidential dining table setup
- Sunset over the venue with cultural decorations

---

### 2. 7 FLAVORS Section (Welcome.tsx, Line 221-258)

**Current State**: Icon-based cards with emojis

**Recommended Addition**:
- **Background images** for each flavor card
- **Photos needed** (7 images, 600x600px each):

| Flavor | Suggested Image | Alt Text |
|--------|----------------|----------|
| **FOOD** | Traditional Nigerian dishes (Jollof, Suya, Pounded Yam) | "Authentic Nigerian cuisine - ÒRÌKÌ 2025" |
| **LIFESTYLE** | Guests in traditional attire (Agbada, Gele) | "Nigerian cultural elegance and lifestyle" |
| **ARTS** | Traditional crafts, Adire fabric, pottery | "Nigerian traditional craftsmanship and arts" |
| **VIBES** | Live music performance, dancing guests | "Energetic cultural atmosphere at ÒRÌKÌ" |
| **ORIGINS** | Cultural artifacts, Nigerian heritage symbols | "Celebrating Nigerian heritage and origins" |
| **ROOTS** | Elderly storyteller, ancestral symbols | "Nigerian ancestral traditions and roots" |
| **SOUNDS** | Talking drums, live band performance | "Traditional Nigerian music and sounds" |

**Implementation** (Update each flavor card):
```tsx
<div
    key={flavor.name}
    className={`group relative overflow-hidden rounded-2xl border ${flavor.borderColor} ${flavor.bgColor} p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl ${flavor.hoverShadow}`}
>
    {/* Background image */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
        <img
            src={`/images/flavors/${flavor.name.toLowerCase()}.jpg`}
            alt={`${flavor.name} - ${flavor.description}`}
            className="h-full w-full object-cover"
        />
    </div>

    {/* Existing card content... */}
</div>
```

---

### 3. GWR Record Section (Welcome.tsx, Line 268-337)

**Current State**: Text-based with emoji icons

**Recommended Addition**:
- **Visualization of the table setup**
- **Photos needed**:
  1. **Main image** (1200x800px): Aerial view of the longest table attempt
  2. **Comparison image** (800x600px): Current Cairo record holder (optional)

**Implementation**:
```tsx
{/* Replace the 🌟 emoji div (line 316) */}
<div className="mb-4 rounded-lg overflow-hidden border-2 border-[#D4AF37]/30">
    <img
        src="/images/gwr-table-aerial.jpg"
        alt="Guinness World Record - Longest Table in Africa at Eagle Square"
        className="w-full h-48 object-cover"
    />
</div>
<h3 className="mb-2 text-2xl font-bold text-white">Be Part of History</h3>
```

**Suggested Images**:
- Aerial drone shot of the 3.5-4km table setup
- Wide-angle view showing the scale
- Surveyor measuring the table
- Guinness World Record official documentation

---

### 4. Event Highlights Section (Welcome.tsx, Line 347-382)

**Current State**: Three cards with emoji icons

**Recommended Addition**:
- **Background images** for each highlight card
- **Photos needed** (3 images, 800x600px each):

| Highlight | Suggested Image | Alt Text |
|-----------|----------------|----------|
| **Live Entertainment** | Traditional dancers, live band on stage | "Live entertainment at ÒRÌKÌ Royal Dining" |
| **Media Coverage** | TV cameras, journalists, broadcast setup | "Extensive media coverage reaching millions" |
| **Global Recognition** | Presidential guests, international dignitaries | "Global recognition and prestige at ÒRÌKÌ" |

**Implementation** (similar to FLAVORS section):
```tsx
{/* Add to each highlight card */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500">
    <img
        src="/images/highlights/live-entertainment.jpg"
        alt="Live Entertainment - Traditional Nigerian performances"
        className="h-full w-full object-cover"
    />
</div>
```

---

### 5. Gallery Section (NEW - Recommended Addition)

**Location**: Add after Event Highlights section (after line 382)

**Purpose**: Showcase past event photos and venue setup

**Photos needed**: 8-12 images (600x600px, square format)

**Implementation**:
```tsx
{/* Add new Gallery Section */}
<section className="relative px-4 py-20 sm:px-6 lg:px-8">
    <PatternOverlay pattern="circular" opacity={0.04} />

    <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black text-white sm:text-5xl md:text-6xl">
                Event Gallery
            </h2>
            <p className="text-lg text-gray-300">
                A glimpse into previous Tastes of Culture celebrations
            </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryImages.map((image, index) => (
                <div
                    key={index}
                    className="group relative aspect-square overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/30"
                >
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-sm font-semibold text-white">{image.caption}</p>
                        </div>
                    </div>
                    <CornerOrnament position="top-left" className="absolute left-2 top-2 w-6 h-6 opacity-0 group-hover:opacity-60 transition-opacity" />
                </div>
            ))}
        </div>
    </div>
</section>

{/* Add Decorative Border after gallery */}
<div className="relative px-4">
    <div className="mx-auto max-w-5xl">
        <DecorativeBorder className="my-8" />
    </div>
</div>
```

**Suggested Gallery Images**:
1. Presidential guests arriving
2. Traditional Nigerian dishes plated beautifully
3. Guests in cultural attire networking
4. Live band performing
5. Sunset over Eagle Square
6. Chef preparing signature dishes
7. Cultural dancers in action
8. Wide shot of decorated venue
9. VIP table settings
10. Beer village and longest bar
11. Food tasting moments
12. Crowd enjoying the event

---

## Image Processing Guidelines

### For Hero Images
1. **Color Grading**: Add warm orange/gold tones (+10-15% saturation)
2. **Contrast**: Increase by 15-20% for visual pop
3. **Shadows**: Lift slightly to maintain detail
4. **Highlights**: Protect to avoid blown-out areas

### For Card Background Images
1. **Desaturation**: Reduce saturation by 30-40% for subtle backgrounds
2. **Blur**: Apply 1-2px Gaussian blur
3. **Opacity**: Set to 15-25% in CSS
4. **Color Overlay**: Add corresponding flavor color as overlay

### For Gallery Images
1. **Consistent Cropping**: All images should be square (1:1)
2. **Color Harmony**: Adjust white balance for consistency
3. **Sharpening**: Apply moderate sharpening for clarity
4. **Border Treatment**: Optional: Add subtle cultural pattern border

---

## Recommended Tools

### Online Tools
- **Squoosh.app** - Image compression and format conversion
- **Photopea.com** - Free online Photoshop alternative
- **Canva.com** - Quick edits and overlays

### Desktop Tools
- **Adobe Lightroom** - Batch processing and color grading
- **ImageOptim** (Mac) - Lossless compression
- **GIMP** - Free open-source image editor

### CLI Tools (for developers)
```bash
# Convert to WebP with quality 85
cwebp -q 85 input.jpg -o output.webp

# Generate responsive sizes
convert input.jpg -resize 1920x1080 output-desktop.jpg
convert input.jpg -resize 768x432 output-tablet.jpg
convert input.jpg -resize 390x220 output-mobile.jpg
```

---

## Implementation Checklist

- [ ] Collect high-resolution event photos (minimum 1920px width)
- [ ] Process images with Nigerian color grading
- [ ] Optimize all images (target: < 200KB per image)
- [ ] Generate responsive sizes (mobile, tablet, desktop)
- [ ] Convert to WebP format with JPEG fallback
- [ ] Place images in `/public/images/` directory structure:
  ```
  /public/images/
  ├── hero/
  │   ├── eagle-square.webp
  │   └── presidential-table.webp
  ├── flavors/
  │   ├── food.webp
  │   ├── lifestyle.webp
  │   ├── arts.webp
  │   ├── vibes.webp
  │   ├── origins.webp
  │   ├── roots.webp
  │   └── sounds.webp
  ├── highlights/
  │   ├── live-entertainment.webp
  │   ├── media-coverage.webp
  │   └── global-recognition.webp
  ├── gwr/
  │   └── table-aerial.webp
  └── gallery/
      ├── gallery-01.webp
      ├── gallery-02.webp
      └── ... (up to 12 images)
  ```
- [ ] Add alt text to all images
- [ ] Test responsive behavior on mobile, tablet, desktop
- [ ] Verify loading performance (use Lighthouse)
- [ ] Implement lazy loading for below-fold images

---

## Performance Optimization

### Lazy Loading
```tsx
<img
    src="/images/gallery/image.webp"
    alt="Description"
    loading="lazy"  // Browser-native lazy loading
    className="..."
/>
```

### Responsive Images
```tsx
<picture>
    <source
        srcSet="/images/hero-mobile.webp 390w,
                /images/hero-tablet.webp 768w,
                /images/hero-desktop.webp 1920w"
        type="image/webp"
    />
    <img
        src="/images/hero-desktop.jpg"
        alt="Eagle Square - ÒRÌKÌ Royal Dining"
        className="h-full w-full object-cover"
    />
</picture>
```

### Blur-Up Technique (Progressive Loading)
```tsx
{/* Tiny placeholder (base64) loads first */}
<div className="relative">
    <img
        src="data:image/svg+xml;base64,..."
        className="absolute inset-0 blur-lg"
    />
    <img
        src="/images/high-res.webp"
        alt="Description"
        className="relative z-10"
        onLoad={(e) => e.currentTarget.previousElementSibling?.remove()}
    />
</div>
```

---

## Cultural Considerations

### DO:
✅ Use images showing authentic Nigerian culture
✅ Highlight traditional attire (Agbada, Gele, Kaftan)
✅ Feature Nigerian cuisine prominently
✅ Show diversity of Nigerian ethnic groups
✅ Capture the prestige and royal nature of the event
✅ Include images of Eagle Square and Abuja landmarks

### DON'T:
❌ Use generic "African" stock photos
❌ Rely on stereotypical imagery
❌ Oversaturate colors to the point of distortion
❌ Use images that don't represent Nigerian culture specifically
❌ Include copyrighted images without permission

---

## Accessibility Best Practices

### Alt Text Guidelines
```tsx
// ✅ GOOD - Descriptive and context-aware
<img
    src="/images/flavors/food.jpg"
    alt="Traditional Nigerian jollof rice, suya, and pounded yam served at ÒRÌKÌ Royal Dining Experience"
/>

// ❌ BAD - Too generic
<img
    src="/images/flavors/food.jpg"
    alt="Food"
/>
```

### ARIA Labels for Decorative Images
```tsx
{/* Decorative patterns don't need alt text */}
<img
    src="/images/patterns/decorative-border.svg"
    alt=""
    role="presentation"
    aria-hidden="true"
/>
```

---

## Testing Checklist

- [ ] Images display correctly on all screen sizes
- [ ] Alt text is present and descriptive
- [ ] Page load time is acceptable (< 3 seconds)
- [ ] Images maintain aspect ratio (no distortion)
- [ ] Lazy loading works properly
- [ ] WebP images load with JPEG fallback
- [ ] Color grading matches Nigerian cultural palette
- [ ] Images convey prestige and cultural authenticity

---

## Contact for Images

If you need assistance sourcing or editing images:
1. **Event Organizers**: Request official event photos from NIHOTOUR
2. **Professional Photographers**: Commission cultural photoshoots
3. **Stock Resources**:
   - Shutterstock Nigeria collection
   - Getty Images (Nigerian culture tag)
   - Unsplash (limited but free)
   - Pexels (limited but free)

---

## Final Notes

This image integration strategy is designed to:
- **Enhance** the Nigerian cultural authenticity
- **Maintain** the royal, prestigious brand image
- **Improve** user engagement through visual storytelling
- **Optimize** performance without sacrificing quality

The combination of traditional African patterns, Nigerian color palette, and authentic event photography will create a cohesive, culturally-rich experience that honors the prestige of ÒRÌKÌ Royal Dining Experience.

---

**Last Updated**: 2025-11-22
**Version**: 1.0
**Author**: Claude Code - Nigerian Cultural Branding Transformation
