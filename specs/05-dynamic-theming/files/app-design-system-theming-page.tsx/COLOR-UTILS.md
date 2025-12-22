# Part: COLOR-UTILS

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 2 of 8 |
| **Lines** | 53-152 |
| **Purpose** | Color conversion functions, palette generation, contrast calculation |

---

## What This Code Does

This section contains the core color manipulation algorithms:

1. **hexToHSL** - Converts hex color (#RRGGBB) to HSL (Hue, Saturation, Lightness)
2. **hslToHex** - Converts HSL values back to hex format
3. **generateTonalPalette** - Creates 10 shades from a single hue (50-900 scale like Tailwind)
4. **getContrastRatio** - Calculates WCAG contrast ratio between two colors
5. **getLuminance** - Helper for contrast calculation (relative luminance per WCAG)

---

## Design References

| Reference | Application |
|-----------|-------------|
| **Material Design 3** | Tonal palette generation with consistent lightness steps |
| **WCAG 2.1** | Contrast ratio formula for accessibility compliance |
| **Tailwind CSS** | 50-900 shade scale convention |

---

## Code Block

```tsx

// ============================================================================
// COLOR UTILITY FUNCTIONS
// Based on Material Design 3 tonal palette generation
// ============================================================================

// Convert hex color to HSL
function hexToHSL(hex: string): { h: number; s: number; l: number } {
  // Remove # if present
  hex = hex.replace(/^#/, "")
  
  // Parse RGB values
  const r = parseInt(hex.substring(0, 2), 16) / 255
  const g = parseInt(hex.substring(2, 4), 16) / 255
  const b = parseInt(hex.substring(4, 6), 16) / 255
  
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2
  
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6
        break
      case g:
        h = ((b - r) / d + 2) / 6
        break
      case b:
        h = ((r - g) / d + 4) / 6
        break
    }
  }
  
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  }
}

// Convert HSL to hex color
function hslToHex(h: number, s: number, l: number): string {
  s /= 100
  l /= 100
  
  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs((h / 60) % 2 - 1))
  const m = l - c / 2
  
  let r = 0, g = 0, b = 0
  
  if (h >= 0 && h < 60) { r = c; g = x; b = 0 }
  else if (h >= 60 && h < 120) { r = x; g = c; b = 0 }
  else if (h >= 120 && h < 180) { r = 0; g = c; b = x }
  else if (h >= 180 && h < 240) { r = 0; g = x; b = c }
  else if (h >= 240 && h < 300) { r = x; g = 0; b = c }
  else if (h >= 300 && h < 360) { r = c; g = 0; b = x }
  
  const toHex = (n: number) => {
    const hex = Math.round((n + m) * 255).toString(16)
    return hex.length === 1 ? "0" + hex : hex
  }
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

// Generate 10-shade tonal palette from a hue
// Follows Tailwind's 50-900 scale
function generateTonalPalette(hue: number, saturation: number): Record<string, string> {
  const shades = {
    "50": hslToHex(hue, Math.max(saturation - 30, 10), 97),
    "100": hslToHex(hue, Math.max(saturation - 20, 15), 94),
    "200": hslToHex(hue, Math.max(saturation - 10, 20), 86),
    "300": hslToHex(hue, saturation, 77),
    "400": hslToHex(hue, saturation, 66),
    "500": hslToHex(hue, saturation, 55),
    "600": hslToHex(hue, saturation, 45),
    "700": hslToHex(hue, saturation, 35),
    "800": hslToHex(hue, Math.max(saturation - 10, 20), 25),
    "900": hslToHex(hue, Math.max(saturation - 20, 15), 15),
  }
  return shades
}

// Calculate relative luminance (WCAG formula)
function getLuminance(hex: string): number {
  hex = hex.replace(/^#/, "")
  const r = parseInt(hex.substring(0, 2), 16) / 255
  const g = parseInt(hex.substring(2, 4), 16) / 255
  const b = parseInt(hex.substring(4, 6), 16) / 255
  
  const toLinear = (c: number) => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b)
}

// Calculate contrast ratio between two colors (WCAG 2.1)
function getContrastRatio(color1: string, color2: string): number {
  const l1 = getLuminance(color1)
  const l2 = getLuminance(color2)
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  return (lighter + 0.05) / (darker + 0.05)
}

// Get WCAG compliance level
function getWCAGLevel(ratio: number): { level: string; passes: boolean } {
  if (ratio >= 7) return { level: "AAA", passes: true }
  if (ratio >= 4.5) return { level: "AA", passes: true }
  if (ratio >= 3) return { level: "AA Large", passes: true }
  return { level: "Fail", passes: false }
}
```

---

## Algorithm Explanations

### Tonal Palette Generation

The `generateTonalPalette` function creates 10 shades by varying lightness while keeping hue constant:

| Shade | Lightness | Use Case |
|-------|-----------|----------|
| 50 | 97% | Backgrounds, subtle highlights |
| 100 | 94% | Hover states on light backgrounds |
| 200 | 86% | Borders, dividers |
| 300 | 77% | Disabled states |
| 400 | 66% | Secondary text |
| 500 | 55% | Primary brand color |
| 600 | 45% | Hover states on primary |
| 700 | 35% | Active/pressed states |
| 800 | 25% | High contrast text |
| 900 | 15% | Dark mode backgrounds |

### WCAG Contrast Levels

| Ratio | Level | Application |
|-------|-------|-------------|
| 7:1+ | AAA | Enhanced accessibility |
| 4.5:1+ | AA | Normal text |
| 3:1+ | AA Large | Large text (18pt+) |
| <3:1 | Fail | Does not meet WCAG |

---

## Verification

- [ ] `hexToHSL` function is defined
- [ ] `hslToHex` function is defined
- [ ] `generateTonalPalette` returns 10 shades (50-900)
- [ ] `getContrastRatio` uses WCAG formula
- [ ] `getWCAGLevel` returns correct levels

---

**Next part:** `STATE-HANDLERS.md`


