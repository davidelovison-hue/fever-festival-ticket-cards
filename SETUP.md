# New Venue Setup Instructions

## Quick Start

1. **Rename the project** (if needed):
   - Update `name` in `package.json`
   - Update `homepage` in `package.json` 
   - Update `base` in `vite.config.ts`

2. **Install dependencies**:
   ```powershell
   npm install
   ```

3. **Start dev server**:
   ```powershell
   npm run dev
   ```

---

## What You Need to Provide

### 1. Venue Map (SVG)
Export your venue map from Figma as SVG. The SVG should have:
- Each clickable zone as a separate element with a unique `id`
- Example: `id="vip-area"`, `id="dance-floor"`, `id="bar-section"`

**How to get SVG element IDs:**
1. Open the SVG file in a text editor
2. Search for `id="` to find all element IDs
3. Note down the IDs for each clickable zone

### 2. Zone Information
For each zone, you'll need:
- **id**: Must match the SVG element ID exactly
- **name**: Display name (e.g., "VIP Lounge")
- **shortName**: Short version for mobile
- **price**: Price in euros
- **capacity**: Number of people
- **description**: Zone description
- **features**: Array of included features
- **color**: Zone accent color (hex)
- **image**: Image URL for the card

### 3. Hero Image
A main venue image for the hero section.

---

## Files to Update in App.tsx

### 1. ZONES Array (around line 130)
```tsx
const ZONES: ZoneData[] = [
  {
    id: 'your-svg-element-id',  // Must match SVG!
    name: 'Zone Name',
    shortName: 'Short',
    price: 1500,
    capacity: 8,
    description: 'Description text...',
    features: ['Feature 1', 'Feature 2'],
    color: '#d49bb9',
    image: 'https://images.pexels.com/photos/...',
  },
  // Add more zones...
];
```

### 2. ORIGINAL_COLORS in InteractiveMap (around line 527)
```tsx
const ORIGINAL_COLORS: Record<string, string> = {
  'your-svg-element-id': '#hexcolor',  // Match each SVG element
  // Add all clickable zones...
};
```

### 3. ID_TO_ZONE_MAP in InteractiveMap (around line 540)
```tsx
const ID_TO_ZONE_MAP: Record<string, string> = {
  'svg-element-id': 'zone-id',  // Maps SVG IDs to ZONES IDs
  // Usually these are the same, but allows flexibility
};
```

### 4. SVG URL in InteractiveMap (around line 598)
```tsx
<object
  ref={svgRef}
  type="image/svg+xml"
  data="YOUR_SVG_URL_HERE"  // <-- Update this
  ...
```

### 5. HERO_IMAGE (around line 175)
```tsx
const HERO_IMAGE = 'https://your-hero-image-url.jpg';
```

---

## Deploying

### First time (create GitHub repo):
```powershell
git init
git add .
git commit -m "Initial commit"
gh repo create fever-venue-name --public --push
```

### Subsequent deploys:
```powershell
npm run deploy
```

---

## Checklist Before Starting

- [ ] SVG map exported from Figma
- [ ] List of SVG element IDs noted
- [ ] Zone details prepared (name, price, capacity, etc.)
- [ ] Zone images ready (Pexels URLs work well)
- [ ] Hero image URL ready

---

## Common Issues

### Map zones not clickable
- Check that SVG element IDs in `ORIGINAL_COLORS` match exactly (case-sensitive)
- Verify `ID_TO_ZONE_MAP` maps to valid ZONES IDs

### Images not loading
- Use reliable CDN URLs (Pexels, Unsplash direct links)
- Avoid URLs with complex query parameters

### Styling looks off
- Primary color is `#8a1343` - keep consistent
- Use European price format: `1.500,00 €`
