# Feature 05: Dynamic Theme Generator

## Overview

| Property | Value |
|----------|-------|
| **Feature ID** | 05 |
| **Feature Name** | Dynamic Theme Generator |
| **Status** | Specification Complete |
| **Priority** | Medium |
| **Estimated Complexity** | High |

---

## Purpose

Create a Material Design-inspired dynamic theme generator that allows users to generate complete color schemes from a single brand color. The generator automatically calculates complementary colors, ensures WCAG contrast compliance, and provides both light and dark mode variations.

---

## Design References

| Source | Contribution |
|--------|--------------|
| **Material Design 3** | Dynamic color generation, tonal palettes |
| **Google Material Theme Builder** | Color scheme generation algorithm |
| **Adobe Color** | Color harmony rules |
| **WCAG 2.1** | Contrast ratio requirements |
| **Tailwind CSS** | Color scale generation |

---

## Key Features

### 1. Brand Color Input
- Color picker for primary brand color
- Hex/RGB/HSL input fields
- Preset brand colors gallery

### 2. Automatic Color Generation
- **Primary palette** - 10 shades from brand color
- **Secondary palette** - Complementary color
- **Accent palette** - Triadic color
- **Neutral palette** - Desaturated grays
- **Semantic colors** - Success, warning, error, info

### 3. Contrast Verification
- Real-time contrast ratio calculation
- WCAG AA/AAA compliance indicators
- Auto-adjustment for accessibility

### 4. Theme Preview
- Live preview of generated theme
- Sample UI components
- Light/dark mode toggle

### 5. Export Options
- CSS variables
- Tailwind config
- JSON tokens
- Figma tokens

---

## Files Modified/Created

### Theme Generator Page
**Path:** `app/design-system/theming/page.tsx`

| Part File | Lines | Description |
|-----------|-------|-------------|
| `ASSEMBLY-GUIDE.md` | - | How to assemble the page |
| `IMPORTS.md` | 1-50 | Client directive, imports |
| `COLOR-UTILS.md` | 51-150 | Color conversion and generation functions |
| `STATE-HANDLERS.md` | 151-250 | State management |
| `COLOR-PICKER-SECTION.md` | 251-350 | Brand color input |
| `PALETTE-DISPLAY.md` | 351-480 | Generated color palettes |
| `PREVIEW-SECTION.md` | 481-580 | Live theme preview |
| `EXPORT-SECTION.md` | 581-650 | Export options |
| `FOOTER.md` | 651-700 | Closing tags |

---

## Color Generation Algorithm

### Step 1: Extract HSL
```tsx
function hexToHSL(hex: string): { h: number; s: number; l: number }
```

### Step 2: Generate Tonal Palette
```tsx
function generateTonalPalette(hue: number, saturation: number): string[] {
  // Returns 10 shades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
  const lightnesses = [95, 90, 80, 70, 60, 50, 40, 30, 20, 10]
  return lightnesses.map(l => hslToHex(hue, saturation, l))
}
```

### Step 3: Calculate Complementary
```tsx
function getComplementary(hue: number): number {
  return (hue + 180) % 360
}
```

### Step 4: Verify Contrast
```tsx
function meetsWCAG(foreground: string, background: string, level: "AA" | "AAA"): boolean {
  const ratio = getContrastRatio(foreground, background)
  return level === "AA" ? ratio >= 4.5 : ratio >= 7
}
```

---

## Generated Theme Structure

```typescript
interface GeneratedTheme {
  name: string
  colors: {
    primary: Record<string, string>    // 50-900
    secondary: Record<string, string>  // 50-900
    accent: Record<string, string>     // 50-900
    neutral: Record<string, string>    // 50-900
    success: string
    warning: string
    error: string
    info: string
  }
  semantic: {
    light: {
      background: string
      foreground: string
      card: string
      border: string
      muted: string
    }
    dark: {
      background: string
      foreground: string
      card: string
      border: string
      muted: string
    }
  }
}
```

---

## Verification Checklist

After implementing this feature:

- [ ] Page loads at `/design-system/theming`
- [ ] Color picker works
- [ ] Primary palette generates 10 shades
- [ ] Secondary (complementary) palette generates
- [ ] Contrast ratios display correctly
- [ ] WCAG indicators update in real-time
- [ ] Light/dark preview toggles
- [ ] CSS export works
- [ ] Tailwind config export works
- [ ] JSON export works

---

## Directory Structure

```
specs/05-dynamic-theming/
├── 00-FEATURE-OVERVIEW.md (this file)
└── files/
    └── app-design-system-theming-page.tsx/
        ├── ASSEMBLY-GUIDE.md
        ├── IMPORTS.md
        ├── COLOR-UTILS.md
        ├── STATE-HANDLERS.md
        ├── COLOR-PICKER-SECTION.md
        ├── PALETTE-DISPLAY.md
        ├── PREVIEW-SECTION.md
        ├── EXPORT-SECTION.md
        └── FOOTER.md

Total: 9 part files
```

