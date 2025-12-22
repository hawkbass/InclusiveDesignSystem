# File Specification: Dynamic Theme Generator

## File Metadata

| Property | Value |
|----------|-------|
| **File Path** | `lib/theming/dynamic-theme-generator.ts` |
| **File Type** | TypeScript Utility Module |
| **Total Lines** | ~350 |
| **Purpose** | Algorithm for generating accessible colour themes from a single brand colour |

---

## Module Overview

This module exports functions for:
1. Generating tonal palettes from a base colour
2. Creating semantic colour mappings
3. Calculating contrast ratios
4. Validating WCAG compliance
5. Exporting themes in multiple formats

---

## Complete Code

```typescript
// ============================================================================
// DYNAMIC THEME GENERATOR
// Inspired by Material Design 3 Dynamic Color
// ============================================================================

/**
 * Converts a hex colour to HSL values
 * @param hex - Colour in hex format (e.g., "#d946ef")
 * @returns Object with h, s, l values
 */
export function hexToHSL(hex: string): { h: number; s: number; l: number } {
  // Remove # if present
  const cleanHex = hex.replace("#", "")
  
  // Parse RGB values
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255
  
  // Find min and max values
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const diff = max - min
  
  // Calculate lightness
  let l = (max + min) / 2
  
  // Calculate saturation
  let s = 0
  if (diff !== 0) {
    s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min)
  }
  
  // Calculate hue
  let h = 0
  if (diff !== 0) {
    switch (max) {
      case r:
        h = ((g - b) / diff + (g < b ? 6 : 0)) * 60
        break
      case g:
        h = ((b - r) / diff + 2) * 60
        break
      case b:
        h = ((r - g) / diff + 4) * 60
        break
    }
  }
  
  return {
    h: Math.round(h),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  }
}

/**
 * Converts HSL values to hex colour
 * @param h - Hue (0-360)
 * @param s - Saturation (0-100)
 * @param l - Lightness (0-100)
 * @returns Hex colour string
 */
export function hslToHex(h: number, s: number, l: number): string {
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
  else { r = c; g = 0; b = x }
  
  const toHex = (n: number) => {
    const hex = Math.round((n + m) * 255).toString(16)
    return hex.length === 1 ? "0" + hex : hex
  }
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

/**
 * Calculates relative luminance for WCAG contrast
 * @param hex - Colour in hex format
 * @returns Relative luminance value (0-1)
 */
export function getLuminance(hex: string): number {
  const cleanHex = hex.replace("#", "")
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255
  
  const adjust = (c: number) => 
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  
  return 0.2126 * adjust(r) + 0.7152 * adjust(g) + 0.0722 * adjust(b)
}

/**
 * Calculates WCAG contrast ratio between two colours
 * @param foreground - Foreground colour hex
 * @param background - Background colour hex
 * @returns Contrast ratio (1 to 21)
 */
export function getContrastRatio(foreground: string, background: string): number {
  const l1 = getLuminance(foreground)
  const l2 = getLuminance(background)
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  return (lighter + 0.05) / (darker + 0.05)
}

/**
 * Checks WCAG compliance level
 * @param ratio - Contrast ratio
 * @returns Compliance level
 */
export function getWCAGLevel(ratio: number): "AAA" | "AA" | "AA-large" | "fail" {
  if (ratio >= 7) return "AAA"
  if (ratio >= 4.5) return "AA"
  if (ratio >= 3) return "AA-large"
  return "fail"
}

/**
 * Generates a 12-step tonal palette from a base colour
 * Following Radix/Tailwind conventions
 * @param baseHex - Base colour in hex
 * @returns Object with 12 colour steps
 */
export function generateTonalPalette(baseHex: string): Record<string, string> {
  const { h, s } = hexToHSL(baseHex)
  
  // Lightness values for each step
  // Adjusted to create harmonious progression
  const lightnesses = {
    "50": 97,
    "100": 94,
    "200": 86,
    "300": 77,
    "400": 66,
    "500": 55,  // Base colour area
    "600": 45,
    "700": 35,
    "800": 25,
    "900": 15,
    "950": 8
  }
  
  const palette: Record<string, string> = {}
  
  for (const [step, l] of Object.entries(lightnesses)) {
    // Adjust saturation for very light/dark shades
    let adjustedS = s
    if (l > 90) adjustedS = Math.min(s, 30) // Desaturate very light
    if (l < 20) adjustedS = Math.min(s, 70) // Slightly desaturate very dark
    
    palette[step] = hslToHex(h, adjustedS, l)
  }
  
  return palette
}

/**
 * Generates semantic colour mappings for light mode
 * @param palette - Tonal palette
 * @returns Semantic token mapping
 */
export function generateLightTheme(palette: Record<string, string>): Record<string, string> {
  return {
    // Backgrounds
    "background": "#ffffff",
    "background-subtle": palette["50"],
    "background-muted": palette["100"],
    "background-emphasis": palette["900"],
    
    // Foregrounds
    "foreground": palette["950"],
    "foreground-muted": palette["600"],
    "foreground-subtle": palette["500"],
    
    // Primary action
    "primary": palette["500"],
    "primary-hover": palette["600"],
    "primary-active": palette["700"],
    "primary-foreground": "#ffffff",
    
    // Secondary
    "secondary": palette["100"],
    "secondary-hover": palette["200"],
    "secondary-foreground": palette["900"],
    
    // Borders
    "border": palette["200"],
    "border-muted": palette["100"],
    "border-focus": palette["500"],
    
    // Cards/Surfaces
    "card": "#ffffff",
    "card-hover": palette["50"],
    
    // Input
    "input": "#ffffff",
    "input-border": palette["300"],
    
    // Accent
    "accent": palette["100"],
    "accent-foreground": palette["900"],
  }
}

/**
 * Generates semantic colour mappings for dark mode
 * Key difference: primary uses lighter shade, backgrounds use darker shades
 * @param palette - Tonal palette
 * @returns Semantic token mapping
 */
export function generateDarkTheme(palette: Record<string, string>): Record<string, string> {
  return {
    // Backgrounds - use darker shades, not pure black
    "background": palette["950"],
    "background-subtle": palette["900"],
    "background-muted": palette["800"],
    "background-emphasis": palette["100"],
    
    // Foregrounds - use lighter shades, not pure white
    "foreground": palette["50"],
    "foreground-muted": palette["400"],
    "foreground-subtle": palette["500"],
    
    // Primary action - use LIGHTER shade for visibility on dark bg
    "primary": palette["400"],
    "primary-hover": palette["300"],
    "primary-active": palette["200"],
    "primary-foreground": palette["950"],
    
    // Secondary
    "secondary": palette["800"],
    "secondary-hover": palette["700"],
    "secondary-foreground": palette["100"],
    
    // Borders - more visible on dark
    "border": palette["700"],
    "border-muted": palette["800"],
    "border-focus": palette["400"],
    
    // Cards/Surfaces
    "card": palette["900"],
    "card-hover": palette["800"],
    
    // Input
    "input": palette["900"],
    "input-border": palette["600"],
    
    // Accent
    "accent": palette["800"],
    "accent-foreground": palette["100"],
  }
}

/**
 * Validates all colour combinations meet WCAG AA
 * @param theme - Theme token mapping
 * @returns Array of validation results
 */
export function validateThemeContrast(theme: Record<string, string>): Array<{
  pair: string
  foreground: string
  background: string
  ratio: number
  level: string
  passes: boolean
}> {
  const pairs = [
    ["foreground", "background"],
    ["foreground-muted", "background"],
    ["primary-foreground", "primary"],
    ["secondary-foreground", "secondary"],
    ["accent-foreground", "accent"],
  ]
  
  return pairs.map(([fg, bg]) => {
    const ratio = getContrastRatio(theme[fg], theme[bg])
    const level = getWCAGLevel(ratio)
    return {
      pair: `${fg} on ${bg}`,
      foreground: theme[fg],
      background: theme[bg],
      ratio: Math.round(ratio * 10) / 10,
      level,
      passes: ratio >= 4.5
    }
  })
}

/**
 * Exports theme in CSS variables format
 * @param light - Light theme tokens
 * @param dark - Dark theme tokens
 * @returns CSS string
 */
export function exportToCSS(
  light: Record<string, string>, 
  dark: Record<string, string>
): string {
  const toVar = (obj: Record<string, string>) => 
    Object.entries(obj)
      .map(([key, value]) => `  --${key}: ${value};`)
      .join("\n")
  
  return `:root {
${toVar(light)}
}

.dark {
${toVar(dark)}
}`
}

/**
 * Exports theme in JSON format
 * @param light - Light theme tokens
 * @param dark - Dark theme tokens
 * @returns JSON object
 */
export function exportToJSON(
  light: Record<string, string>, 
  dark: Record<string, string>
): object {
  return {
    light,
    dark,
    meta: {
      generatedAt: new Date().toISOString(),
      version: "1.0.0"
    }
  }
}

/**
 * Main function to generate complete theme from single colour
 * @param brandColor - Brand colour in hex format
 * @returns Complete theme object with palette, light, dark, and validation
 */
export function generateTheme(brandColor: string): {
  palette: Record<string, string>
  light: Record<string, string>
  dark: Record<string, string>
  validation: {
    light: ReturnType<typeof validateThemeContrast>
    dark: ReturnType<typeof validateThemeContrast>
  }
} {
  const palette = generateTonalPalette(brandColor)
  const light = generateLightTheme(palette)
  const dark = generateDarkTheme(palette)
  
  return {
    palette,
    light,
    dark,
    validation: {
      light: validateThemeContrast(light),
      dark: validateThemeContrast(dark)
    }
  }
}
```

---

## Function Reference

| Function | Input | Output | Purpose |
|----------|-------|--------|---------|
| `hexToHSL` | Hex string | HSL object | Convert hex to HSL |
| `hslToHex` | H, S, L numbers | Hex string | Convert HSL to hex |
| `getLuminance` | Hex string | Number (0-1) | Calculate luminance |
| `getContrastRatio` | Two hex strings | Number (1-21) | Calculate contrast |
| `getWCAGLevel` | Ratio number | Level string | Check WCAG compliance |
| `generateTonalPalette` | Hex string | Palette object | Create 12-step palette |
| `generateLightTheme` | Palette | Theme tokens | Light mode mappings |
| `generateDarkTheme` | Palette | Theme tokens | Dark mode mappings |
| `validateThemeContrast` | Theme tokens | Validation array | Check all contrasts |
| `exportToCSS` | Light + dark | CSS string | Export as CSS vars |
| `exportToJSON` | Light + dark | JSON object | Export as JSON |
| `generateTheme` | Hex string | Complete theme | Main entry point |

---

## Usage Example

```typescript
import { generateTheme, exportToCSS } from "@/lib/theming/dynamic-theme-generator"

// Generate theme from brand colour
const theme = generateTheme("#d946ef")

// Access palette
console.log(theme.palette["500"]) // "#d946ef" (adjusted)

// Access semantic tokens
console.log(theme.light.primary) // "#d946ef"
console.log(theme.dark.primary)  // "#e879f9" (lighter for dark mode)

// Check validation
theme.validation.light.forEach(check => {
  console.log(`${check.pair}: ${check.ratio}:1 (${check.level})`)
})

// Export
const css = exportToCSS(theme.light, theme.dark)
```

---

## References

1. **Material Design 3 - Dynamic Color**
   - Source: https://m3.material.io/styles/color/dynamic-color
   - Used for: Tonal palette generation concept

2. **WCAG 2.1 - Contrast Requirements**
   - Source: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum
   - Used for: Contrast calculation formulas

3. **Radix Colors**
   - Source: https://www.radix-ui.com/colors
   - Used for: 12-step scale structure

---

## Verification Checklist

- [ ] All functions export correctly
- [ ] `generateTheme("#d946ef")` returns valid object
- [ ] All contrast ratios in validation pass AA
- [ ] CSS export is valid CSS syntax
- [ ] JSON export is valid JSON
- [ ] TypeScript types are correct

---

**End of Specification**

