# Part: PALETTE-DISPLAY

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 5 of 8 |
| **Lines** | 353-482 |
| **Purpose** | Generated color palettes display with contrast indicators |

---

## What This Code Does

This section displays:

1. **Generated palettes section** - Primary, Secondary, Accent, Neutral
2. **Color swatch grids** - 10 shades per palette (50-900)
3. **Contrast indicators** - WCAG compliance badges for each shade
4. **Copy functionality** - Click any color to copy its hex value
5. **Color relationship diagram** - Visual showing how colors relate

---

## Design References

| Reference | Application |
|-----------|-------------|
| **Tailwind CSS** | 50-900 shade scale presentation |
| **Material Design 3** | Tonal palette concept |
| **WCAG 2.1** | Contrast ratio badges |

---

## Code Block

```tsx
              
              {/* Generated Palette Preview */}
              <div className="flex-1">
                <div className="p-6 rounded-xl border border-border/50 bg-card/50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-foreground">Generated Primary Palette</h3>
                    <Badge variant="outline" className="text-xs">
                      <Layers className="h-3 w-3 mr-1" />
                      10 Shades
                    </Badge>
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {Object.entries(generatedTheme.palettes.primary).map(([shade, color]) => (
                      <button
                        key={shade}
                        onClick={() => handleCopy(color)}
                        className="flex-1 group relative"
                      >
                        <div
                          className="h-12 rounded transition-transform group-hover:scale-110 group-hover:z-10"
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-[10px] text-muted-foreground mt-1 block text-center">
                          {shade}
                        </span>
                      </button>
                    ))}
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    Click any colour to copy its hex value
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Palette Display */}
        <section className="px-6 lg:px-12 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Complete Colour System
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Primary Palette */}
              <Card className="bg-card/30 border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Primary</CardTitle>
                      <CardDescription>Your brand colour palette</CardDescription>
                    </div>
                    <div
                      className="w-8 h-8 rounded-full border-2 border-white/20"
                      style={{ backgroundColor: generatedTheme.palettes.primary["500"] }}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.entries(generatedTheme.palettes.primary).map(([shade, color]) => {
                      const contrast = getContrastRatio(color, "#ffffff")
                      const wcag = getWCAGLevel(contrast)
                      return (
                        <button
                          key={shade}
                          onClick={() => handleCopy(color)}
                          className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-card/50 transition-colors group"
                        >
                          <div
                            className="w-10 h-10 rounded-lg border border-white/10"
                            style={{ backgroundColor: color }}
                          />
                          <div className="flex-1 text-left">
                            <div className="text-sm font-medium text-foreground">
                              {shade}
                            </div>
                            <div className="text-xs text-muted-foreground font-mono">
                              {color}
                            </div>
                          </div>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              wcag.passes ? "text-green-400 border-green-500/30" : "text-red-400 border-red-500/30"
                            }`}
                          >
                            {wcag.level}
                          </Badge>
                          <Copy className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Secondary Palette */}
              <Card className="bg-card/30 border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Secondary</CardTitle>
                      <CardDescription>Complementary colour (180°)</CardDescription>
                    </div>
                    <div
                      className="w-8 h-8 rounded-full border-2 border-white/20"
                      style={{ backgroundColor: generatedTheme.palettes.secondary["500"] }}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.entries(generatedTheme.palettes.secondary).map(([shade, color]) => {
                      const contrast = getContrastRatio(color, "#ffffff")
                      const wcag = getWCAGLevel(contrast)
                      return (
                        <button
                          key={shade}
                          onClick={() => handleCopy(color)}
                          className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-card/50 transition-colors group"
                        >
                          <div
                            className="w-10 h-10 rounded-lg border border-white/10"
                            style={{ backgroundColor: color }}
                          />
                          <div className="flex-1 text-left">
                            <div className="text-sm font-medium text-foreground">{shade}</div>
                            <div className="text-xs text-muted-foreground font-mono">{color}</div>
                          </div>
                          <Badge
                            variant="outline"
                            className={`text-xs ${wcag.passes ? "text-green-400 border-green-500/30" : "text-red-400 border-red-500/30"}`}
                          >
                            {wcag.level}
                          </Badge>
                          <Copy className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Accent Palette */}
              <Card className="bg-card/30 border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Accent</CardTitle>
                      <CardDescription>Triadic colour (120°)</CardDescription>
                    </div>
                    <div
                      className="w-8 h-8 rounded-full border-2 border-white/20"
                      style={{ backgroundColor: generatedTheme.palettes.accent["500"] }}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.entries(generatedTheme.palettes.accent).slice(0, 5).map(([shade, color]) => {
                      const contrast = getContrastRatio(color, "#ffffff")
                      const wcag = getWCAGLevel(contrast)
                      return (
                        <button
                          key={shade}
                          onClick={() => handleCopy(color)}
                          className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-card/50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg border border-white/10" style={{ backgroundColor: color }} />
                          <div className="flex-1 text-left">
                            <div className="text-sm font-medium text-foreground">{shade}</div>
                            <div className="text-xs text-muted-foreground font-mono">{color}</div>
                          </div>
                          <Badge variant="outline" className={`text-xs ${wcag.passes ? "text-green-400 border-green-500/30" : "text-red-400 border-red-500/30"}`}>
                            {wcag.level}
                          </Badge>
                          <Copy className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Neutral Palette */}
              <Card className="bg-card/30 border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Neutral</CardTitle>
                      <CardDescription>Desaturated brand hue</CardDescription>
                    </div>
                    <div
                      className="w-8 h-8 rounded-full border-2 border-white/20"
                      style={{ backgroundColor: generatedTheme.palettes.neutral["500"] }}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.entries(generatedTheme.palettes.neutral).slice(0, 5).map(([shade, color]) => {
                      const contrast = getContrastRatio(color, "#ffffff")
                      const wcag = getWCAGLevel(contrast)
                      return (
                        <button
                          key={shade}
                          onClick={() => handleCopy(color)}
                          className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-card/50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg border border-white/10" style={{ backgroundColor: color }} />
                          <div className="flex-1 text-left">
                            <div className="text-sm font-medium text-foreground">{shade}</div>
                            <div className="text-xs text-muted-foreground font-mono">{color}</div>
                          </div>
                          <Badge variant="outline" className={`text-xs ${wcag.passes ? "text-green-400 border-green-500/30" : "text-red-400 border-red-500/30"}`}>
                            {wcag.level}
                          </Badge>
                          <Copy className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
```

---

## Palette Types Explained

| Palette | Derivation | Use Case |
|---------|------------|----------|
| **Primary** | Brand color hue | Main actions, brand elements |
| **Secondary** | 180° hue shift (complementary) | Supporting actions, highlights |
| **Accent** | 120° hue shift (triadic) | Special elements, badges |
| **Neutral** | 10% saturation of brand hue | Backgrounds, borders, text |

---

## WCAG Badge Logic

Each color shows a WCAG compliance badge:
- **AAA** (green) - Ratio ≥ 7:1
- **AA** (green) - Ratio ≥ 4.5:1
- **AA Large** (green) - Ratio ≥ 3:1
- **Fail** (red) - Ratio < 3:1

---

## Verification

- [ ] Primary palette card renders 10 shades
- [ ] Secondary palette card renders 10 shades
- [ ] Accent palette card renders (truncated to 5 for space)
- [ ] Neutral palette card renders (truncated to 5 for space)
- [ ] Each shade has WCAG badge
- [ ] Copy icon appears on hover

---

**Next part:** `PREVIEW-SECTION.md`


