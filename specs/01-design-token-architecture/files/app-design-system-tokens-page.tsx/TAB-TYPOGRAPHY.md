# TAB-TYPOGRAPHY.md - Typography Tab Content

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/tokens/page.tsx` |
| **This Section** | Lines 1092-1187 |
| **Previous Section** | [TAB-SPACING.md](./TAB-SPACING.md) |
| **Next Section** | [TAB-COMPONENTS.md](./TAB-COMPONENTS.md) |

---

## Prerequisites

- [TAB-SPACING.md](./TAB-SPACING.md) must be completed first

---

## Code Block

Copy this code EXACTLY. Place it directly after the Spacing TabsContent closing tag.

```tsx

                {/* Typography Tab */}
                <TabsContent value="typography" className="space-y-8">
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                        <Type className="h-6 w-6 text-blue-400" />
                        Typography Scale
                      </CardTitle>
                      <CardDescription>
                        Harmonious type scale with consistent line heights and letter spacing.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      {/* Font Sizes */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-4">Font Sizes</h4>
                        <div className="space-y-4">
                          {Object.entries(referenceTokens.typography.fontSize).map(([name, value]) => (
                            <div 
                              key={name}
                              className="flex items-center justify-between p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all group cursor-pointer"
                              onClick={() => handleCopyCode(value, `font-${name}`)}
                            >
                              <div className="flex items-center gap-6">
                                <code className="w-20 text-sm text-muted-foreground">text-{name}</code>
                                <span 
                                  className="text-foreground"
                                  style={{ fontSize: value }}
                                >
                                  The quick brown fox jumps over the lazy dog
                                </span>
                              </div>
                              <div className="flex items-center gap-3">
                                <code className="text-sm text-muted-foreground">{value}</code>
                                {copiedCode === `font-${name}` ? (
                                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                                ) : (
                                  <Copy className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Font Weights */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-4">Font Weights</h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {Object.entries(referenceTokens.typography.fontWeight).map(([name, value]) => (
                            <div key={name} className="p-4 bg-card/50 rounded-lg border border-border/50">
                              <span 
                                className="text-xl text-foreground block mb-2"
                                style={{ fontWeight: parseInt(value) }}
                              >
                                Aa Bb Cc
                              </span>
                              <code className="text-sm text-muted-foreground">{name}</code>
                              <div className="text-xs text-muted-foreground mt-1">{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Font Families */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-4">Font Families</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                            <h5 className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: referenceTokens.typography.fontFamily.sans }}>
                              Inter (Sans-serif)
                            </h5>
                            <p className="text-sm text-muted-foreground" style={{ fontFamily: referenceTokens.typography.fontFamily.sans }}>
                              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                              abcdefghijklmnopqrstuvwxyz<br />
                              1234567890!@#$%^&*()
                            </p>
                            <code className="text-xs text-primary/80 mt-3 block">font-family: font-sans</code>
                          </div>
                          <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                            <h5 className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: referenceTokens.typography.fontFamily.mono }}>
                              JetBrains Mono
                            </h5>
                            <p className="text-sm text-muted-foreground" style={{ fontFamily: referenceTokens.typography.fontFamily.mono }}>
                              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                              abcdefghijklmnopqrstuvwxyz<br />
                              1234567890!@#$%^&*()
                            </p>
                            <code className="text-xs text-primary/80 mt-3 block">font-family: font-mono</code>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
```

---

## Section Breakdown

### Font Sizes (Lines 1106-1137)

Each font size shows:
1. Token name (`text-sm`)
2. Pangram at that size ("The quick brown fox...")
3. Pixel value
4. Copy functionality

**Why a Pangram?**
- Contains every letter of the alphabet
- Shows how all letterforms look at that size
- Industry standard for typography preview

### Font Weights (Lines 1140-1155)

Grid showing 4 weights:
- normal (400)
- medium (500)
- semibold (600)
- bold (700)

Uses `style={{ fontWeight: parseInt(value) }}` to apply the weight.

### Font Families (Lines 1158-1185)

Two cards showing:
1. Inter (Sans-serif) - Primary UI font
2. JetBrains Mono - Code/monospace font

Each shows full character set preview.

---

## Verification Checklist

- [ ] TabsContent has `value="typography"`
- [ ] Font sizes use `style={{ fontSize: value }}`
- [ ] Font weights use `style={{ fontWeight: parseInt(value) }}`
- [ ] Font families use `style={{ fontFamily: ... }}`
- [ ] Pangram text is displayed for sizes

---

**Next Section:** [TAB-COMPONENTS.md](./TAB-COMPONENTS.md)


