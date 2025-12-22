# TAB-COLOURS.md - Colours Tab Content

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/tokens/page.tsx` |
| **This Section** | Lines 838-1027 |
| **Previous Section** | [TAB-ARCHITECTURE.md](./TAB-ARCHITECTURE.md) |
| **Next Section** | [TAB-SPACING.md](./TAB-SPACING.md) |

---

## Prerequisites

- [TAB-ARCHITECTURE.md](./TAB-ARCHITECTURE.md) must be completed first

---

## Code Block

Copy this code EXACTLY. Place it directly after the Architecture TabsContent closing tag.

```tsx

                {/* Colours Tab */}
                <TabsContent value="colours" className="space-y-8">
                  {/* Theme Toggle */}
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-foreground">Colour Tokens</h2>
                    <div className="flex items-center gap-3">
                      <Label className="text-sm text-muted-foreground">Preview Theme:</Label>
                      <div className="flex items-center gap-2 p-1 bg-card/50 rounded-lg border border-border/50">
                        <Button
                          size="sm"
                          variant={previewTheme === "light" ? "default" : "ghost"}
                          onClick={() => setPreviewTheme("light")}
                          className="h-8"
                        >
                          <Sun className="h-4 w-4 mr-1" />
                          Light
                        </Button>
                        <Button
                          size="sm"
                          variant={previewTheme === "dark" ? "default" : "ghost"}
                          onClick={() => setPreviewTheme("dark")}
                          className="h-8"
                        >
                          <Moon className="h-4 w-4 mr-1" />
                          Dark
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Reference Colours */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl text-foreground flex items-center gap-3">
                            <Palette className="h-5 w-5 text-blue-400" />
                            Reference Tokens (Tier 1)
                          </CardTitle>
                          <CardDescription>Raw colour values - the foundation of our palette</CardDescription>
                        </div>
                        <Badge variant="outline">{filteredReferenceColors.length} tokens</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {/* Colour Scales */}
                      {["fuchsia", "purple", "blue", "slate"].map((scale) => {
                        const scaleColors = filteredReferenceColors.filter(([name]) => name.startsWith(scale))
                        if (scaleColors.length === 0) return null
                        
                        return (
                          <div key={scale} className="mb-8 last:mb-0">
                            <h4 className="text-lg font-semibold text-foreground capitalize mb-4">{scale} Scale</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                              {scaleColors.map(([name, data]) => (
                                <div 
                                  key={name} 
                                  className="group p-3 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all cursor-pointer"
                                  onClick={() => handleCopyCode(data.value, name)}
                                >
                                  <div 
                                    className="w-full h-12 rounded-md mb-2 ring-1 ring-inset ring-white/10"
                                    style={{ backgroundColor: data.value }}
                                  />
                                  <div className="flex items-center justify-between">
                                    <code className="text-xs text-foreground/80">{name}</code>
                                    {copiedCode === name ? (
                                      <CheckCircle2 className="h-3 w-3 text-green-400" />
                                    ) : (
                                      <Copy className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                    )}
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-1">{data.value}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </CardContent>
                  </Card>

                  {/* Semantic Colours */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground flex items-center gap-3">
                        <Target className="h-5 w-5 text-purple-400" />
                        Semantic Tokens (Tier 2)
                      </CardTitle>
                      <CardDescription>Purpose-driven tokens that adapt to theme</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Object.entries(semanticTokens[previewTheme]).map(([name, data]) => (
                          <div 
                            key={name} 
                            className="p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all group cursor-pointer"
                            onClick={() => handleCopyCode(`var(--${name})`, `semantic-${name}`)}
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <div 
                                className="w-8 h-8 rounded-md ring-1 ring-inset ring-white/10"
                                style={{ 
                                  backgroundColor: referenceTokens.colors[data.reference as keyof typeof referenceTokens.colors]?.value || "#333"
                                }}
                              />
                              <div className="flex-1">
                                <code className="text-sm text-foreground/80">{name}</code>
                                {copiedCode === `semantic-${name}` && (
                                  <CheckCircle2 className="inline-block h-3 w-3 text-green-400 ml-2" />
                                )}
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground">{data.purpose}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <ArrowRight className="h-3 w-3 text-muted-foreground" />
                              <code className="text-xs text-primary/80">{data.reference}</code>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contrast Checker */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground flex items-center gap-3">
                        <Contrast className="h-5 w-5 text-green-400" />
                        Accessibility Contrast Checker
                      </CardTitle>
                      <CardDescription>WCAG 2.1 contrast ratio compliance for all colour combinations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                          { fg: "white", bg: "fuchsia-500", ratio: 4.5 },
                          { fg: "white", bg: "fuchsia-600", ratio: 5.2 },
                          { fg: "slate-900", bg: "white", ratio: 15.3 },
                          { fg: "fuchsia-500", bg: "slate-950", ratio: 6.2 },
                          { fg: "slate-400", bg: "white", ratio: 3.0 },
                          { fg: "slate-500", bg: "white", ratio: 4.6 },
                        ].map((combo, idx) => {
                          const wcag = getWCAGLevel(combo.ratio)
                          return (
                            <div key={idx} className="p-4 bg-card/50 rounded-lg border border-border/50">
                              <div className="flex items-center gap-3 mb-3">
                                <div 
                                  className="w-12 h-12 rounded-lg flex items-center justify-center text-xs font-bold"
                                  style={{ 
                                    backgroundColor: referenceTokens.colors[combo.bg as keyof typeof referenceTokens.colors]?.value,
                                    color: referenceTokens.colors[combo.fg as keyof typeof referenceTokens.colors]?.value
                                  }}
                                >
                                  Aa
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-foreground">{combo.fg} on {combo.bg}</div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-lg font-bold text-foreground">{combo.ratio}:1</span>
                                    <Badge className={`${wcag.color} bg-transparent border-current`}>
                                      {wcag.level}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              {combo.ratio >= 4.5 ? (
                                <div className="flex items-center gap-2 text-green-400 text-xs">
                                  <Check className="h-3 w-3" />
                                  Passes for normal text
                                </div>
                              ) : combo.ratio >= 3 ? (
                                <div className="flex items-center gap-2 text-amber-400 text-xs">
                                  <AlertTriangle className="h-3 w-3" />
                                  Large text only (18px+)
                                </div>
                              ) : (
                                <div className="flex items-center gap-2 text-red-400 text-xs">
                                  <AlertTriangle className="h-3 w-3" />
                                  Does not meet WCAG
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
```

---

## Section Breakdown

### Theme Toggle (Lines 841-865)

Allows previewing colours in light or dark mode. Uses `previewTheme` state.

### Reference Colours Grid (Lines 868-913)

- Loops through colour scales (fuchsia, purple, blue, slate)
- Uses `filteredReferenceColors` (respects search filter)
- Each swatch is clickable to copy

### Semantic Colours Grid (Lines 916-952)

- Shows semantic tokens for the selected theme
- Uses `semanticTokens[previewTheme]` to get correct mappings
- Shows reference token arrow relationship

### Contrast Checker (Lines 955-1027)

- Uses `getWCAGLevel()` helper function
- Shows colour sample with "Aa" text
- Displays ratio and WCAG level badge

---

## Verification Checklist

- [ ] Theme toggle buttons change `previewTheme`
- [ ] Colour grid uses `filteredReferenceColors`
- [ ] Semantic tokens use `semanticTokens[previewTheme]`
- [ ] Contrast checker uses `getWCAGLevel()`
- [ ] All onClick handlers call `handleCopyCode`

---

**Next Section:** [TAB-SPACING.md](./TAB-SPACING.md)


