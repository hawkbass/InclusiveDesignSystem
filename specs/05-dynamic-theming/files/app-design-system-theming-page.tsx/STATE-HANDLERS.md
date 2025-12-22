# Part: STATE-HANDLERS

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 3 of 8 |
| **Lines** | 153-252 |
| **Purpose** | Component state, theme generation, preset colors |

---

## What This Code Does

This section defines:

1. **Preset brand colors** - Gallery of common brand colors to start from
2. **Component declaration** - The main `ThemingPage` function component
3. **State variables** - Brand color, generated theme, UI state
4. **Theme generation logic** - useMemo hook that generates full theme from brand color
5. **Copy handler** - Utility to copy generated code to clipboard

---

## Design References

| Reference | Application |
|-----------|-------------|
| **Material Design 3** | Dynamic color scheme from single seed color |
| **Google Material Theme Builder** | Complementary and accent color derivation |
| **Color Theory** | Complementary (180°), Triadic (120°) color relationships |

---

## Code Block

```tsx

// ============================================================================
// PRESET BRAND COLORS
// Common brand colors for quick selection
// ============================================================================

const presetColors = [
  { name: "Fuchsia", hex: "#d946ef", description: "Vibrant magenta" },
  { name: "Purple", hex: "#a855f7", description: "Royal purple" },
  { name: "Blue", hex: "#3b82f6", description: "Classic blue" },
  { name: "Cyan", hex: "#06b6d4", description: "Ocean cyan" },
  { name: "Green", hex: "#22c55e", description: "Fresh green" },
  { name: "Orange", hex: "#f97316", description: "Warm orange" },
  { name: "Red", hex: "#ef4444", description: "Alert red" },
  { name: "Slate", hex: "#64748b", description: "Neutral slate" },
]

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function ThemingPage() {
  // State
  const [brandColor, setBrandColor] = useState("#d946ef")
  const [copied, setCopied] = useState(false)
  const [exportFormat, setExportFormat] = useState<"css" | "tailwind" | "json">("css")
  const [previewMode, setPreviewMode] = useState<"light" | "dark">("light")
  
  // Generate complete theme from brand color
  const generatedTheme = useMemo(() => {
    const hsl = hexToHSL(brandColor)
    
    // Primary palette - direct from brand color
    const primary = generateTonalPalette(hsl.h, hsl.s)
    
    // Secondary palette - complementary hue (180° opposite)
    const secondaryHue = (hsl.h + 180) % 360
    const secondary = generateTonalPalette(secondaryHue, Math.max(hsl.s - 20, 30))
    
    // Accent palette - triadic hue (120° offset)
    const accentHue = (hsl.h + 120) % 360
    const accent = generateTonalPalette(accentHue, Math.max(hsl.s - 10, 40))
    
    // Neutral palette - desaturated version of brand
    const neutral = generateTonalPalette(hsl.h, 10)
    
    // Semantic colors
    const semantic = {
      success: "#22c55e",
      warning: "#f59e0b",
      error: "#ef4444",
      info: "#3b82f6",
    }
    
    // Light mode semantic assignments
    const light = {
      background: neutral["50"],
      foreground: neutral["900"],
      card: "#ffffff",
      cardForeground: neutral["900"],
      primary: primary["500"],
      primaryForeground: "#ffffff",
      secondary: secondary["100"],
      secondaryForeground: secondary["900"],
      muted: neutral["100"],
      mutedForeground: neutral["500"],
      accent: accent["100"],
      accentForeground: accent["900"],
      border: neutral["200"],
    }
    
    // Dark mode semantic assignments
    const dark = {
      background: neutral["900"],
      foreground: neutral["50"],
      card: neutral["800"],
      cardForeground: neutral["50"],
      primary: primary["400"],
      primaryForeground: neutral["900"],
      secondary: secondary["800"],
      secondaryForeground: secondary["100"],
      muted: neutral["800"],
      mutedForeground: neutral["400"],
      accent: accent["800"],
      accentForeground: accent["100"],
      border: neutral["700"],
    }
    
    return {
      brandColor,
      hsl,
      palettes: { primary, secondary, accent, neutral },
      semantic,
      light,
      dark,
    }
  }, [brandColor])
  
  // Copy to clipboard handler
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
```

---

## State Variables Explained

| Variable | Type | Purpose |
|----------|------|---------|
| `brandColor` | `string` | The seed color in hex format |
| `copied` | `boolean` | Shows checkmark after copy |
| `exportFormat` | `"css" \| "tailwind" \| "json"` | Selected export format |
| `previewMode` | `"light" \| "dark"` | Preview theme mode |

---

## Theme Generation Logic

The `generatedTheme` useMemo computes:

1. **Primary palette** - 10 shades from brand color's hue
2. **Secondary palette** - Complementary color (180° hue rotation)
3. **Accent palette** - Triadic color (120° hue rotation)
4. **Neutral palette** - Desaturated brand (10% saturation)
5. **Light mode** - Semantic color assignments for light theme
6. **Dark mode** - Semantic color assignments for dark theme

---

## Verification

- [ ] `presetColors` array has 8 colors
- [ ] Component is named `ThemingPage` and exported as default
- [ ] `brandColor` state initializes to `"#d946ef"`
- [ ] `generatedTheme` useMemo depends on `[brandColor]`
- [ ] Theme includes primary, secondary, accent, neutral palettes
- [ ] Both light and dark mode assignments are generated

---

**Next part:** `COLOR-PICKER-SECTION.md`


