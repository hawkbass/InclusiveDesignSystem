# Part: COLOR-PICKER-SECTION

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 4 of 8 |
| **Lines** | 253-352 |
| **Purpose** | Brand color input, preset gallery, page header |

---

## What This Code Does

This section creates:

1. **Page layout wrapper** - Flex container with sidebar
2. **Header section** - Breadcrumb navigation, title, description
3. **Brand color picker** - Native color input + hex text input
4. **Preset color gallery** - Clickable preset colors for quick selection
5. **Current color display** - Shows selected color with HSL values

---

## Design References

| Reference | Application |
|-----------|-------------|
| **Material Theme Builder** | Color picker with presets layout |
| **Adobe Color** | HSL value display pattern |
| **Shopify Polaris** | Page header with breadcrumb pattern |

---

## Code Block

```tsx

  return (
    <div className="flex bg-background min-h-screen">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="px-6 lg:px-12 py-12 border-b border-border/50">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/design-system" className="hover:text-foreground transition-colors">
                Design System
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Dynamic Theming</span>
            </nav>
            
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <h1 className="text-4xl font-bold text-foreground">
                    Theme Generator
                  </h1>
                </div>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Generate a complete colour scheme from a single brand colour. 
                  Automatically creates accessible palettes for light and dark modes.
                </p>
              </div>
              
              <Badge variant="outline" className="text-xs">
                <Sparkles className="h-3 w-3 mr-1" />
                Material Design 3 Inspired
              </Badge>
            </div>
          </div>
        </header>

        {/* Brand Color Picker */}
        <section className="px-6 lg:px-12 py-8 bg-card/30 border-b border-border/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Choose Your Brand Colour
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Color Input */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <input
                      type="color"
                      value={brandColor}
                      onChange={(e) => setBrandColor(e.target.value)}
                      className="w-20 h-20 rounded-xl cursor-pointer border-2 border-border"
                    />
                    <div className="absolute -bottom-1 -right-1 p-1 bg-card rounded-full border border-border">
                      <Pipette className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="hex-input" className="text-sm text-muted-foreground">
                      Hex Value
                    </Label>
                    <Input
                      id="hex-input"
                      value={brandColor}
                      onChange={(e) => {
                        const value = e.target.value
                        if (/^#[0-9A-Fa-f]{0,6}$/.test(value)) {
                          setBrandColor(value)
                        }
                      }}
                      className="w-32 font-mono"
                      placeholder="#d946ef"
                    />
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    <div>H: {generatedTheme.hsl.h}°</div>
                    <div>S: {generatedTheme.hsl.s}%</div>
                    <div>L: {generatedTheme.hsl.l}%</div>
                  </div>
                </div>
                
                {/* Preset Colors */}
                <div>
                  <Label className="text-sm text-muted-foreground mb-3 block">
                    Or choose a preset
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {presetColors.map((preset) => (
                      <button
                        key={preset.name}
                        onClick={() => setBrandColor(preset.hex)}
                        className={`group flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${
                          brandColor === preset.hex
                            ? "border-primary bg-primary/10"
                            : "border-border/50 hover:border-primary/50"
                        }`}
                      >
                        <div
                          className="w-5 h-5 rounded-full border border-white/20"
                          style={{ backgroundColor: preset.hex }}
                        />
                        <span className="text-sm text-foreground">{preset.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
```

---

## UI Elements Explained

| Element | Purpose |
|---------|---------|
| **Breadcrumb nav** | Shows user location: Design System > Dynamic Theming |
| **Page title** | "Theme Generator" with Palette icon |
| **Color picker** | Native HTML5 color input (20x20 rounded square) |
| **Hex input** | Manual hex entry with validation regex |
| **HSL display** | Shows computed HSL values for current color |
| **Preset buttons** | 8 preset colors for quick selection |

---

## Validation Logic

The hex input uses this regex to validate input:
```tsx
/^#[0-9A-Fa-f]{0,6}$/
```

This allows:
- Empty `#`
- Partial hex like `#d9`
- Full hex like `#d946ef`
- Both uppercase and lowercase

---

## Verification

- [ ] UnifiedSidebar is rendered first
- [ ] Breadcrumb shows "Design System > Dynamic Theming"
- [ ] Native color input has `type="color"`
- [ ] Hex input validates with regex
- [ ] HSL values display from `generatedTheme.hsl`
- [ ] Preset colors render from `presetColors` array

---

**Next part:** `PALETTE-DISPLAY.md`


