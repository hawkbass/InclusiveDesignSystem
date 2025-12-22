# TAB-SPACING.md - Spacing Tab Content

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/tokens/page.tsx` |
| **This Section** | Lines 1028-1091 |
| **Previous Section** | [TAB-COLOURS.md](./TAB-COLOURS.md) |
| **Next Section** | [TAB-TYPOGRAPHY.md](./TAB-TYPOGRAPHY.md) |

---

## Prerequisites

- [TAB-COLOURS.md](./TAB-COLOURS.md) must be completed first

---

## Code Block

Copy this code EXACTLY. Place it directly after the Colours TabsContent closing tag.

```tsx

                {/* Spacing Tab */}
                <TabsContent value="spacing" className="space-y-8">
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                        <Grid3X3 className="h-6 w-6 text-green-400" />
                        Spacing Scale (8px Grid System)
                      </CardTitle>
                      <CardDescription>
                        Consistent spacing based on 4px increments, following the 8-point grid system for pixel-perfect alignment.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {Object.entries(referenceTokens.spacing).slice(0, 16).map(([name, value]) => (
                          <div 
                            key={name}
                            className="flex items-center gap-6 p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all group cursor-pointer"
                            onClick={() => handleCopyCode(value, `spacing-${name}`)}
                          >
                            <div className="w-20 text-right">
                              <code className="text-sm font-medium text-foreground">space-{name}</code>
                            </div>
                            <div className="flex items-center gap-4 flex-1">
                              <div 
                                className="h-6 bg-gradient-to-r from-primary to-purple-500 rounded"
                                style={{ width: value }}
                              />
                              <code className="text-sm text-muted-foreground">{value}</code>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                              {copiedCode === `spacing-${name}` ? (
                                <CheckCircle2 className="h-4 w-4 text-green-400" />
                              ) : (
                                <Copy className="h-4 w-4 text-muted-foreground" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Semantic Spacing */}
                      <div className="mt-8">
                        <h4 className="text-lg font-semibold text-foreground mb-4">Semantic Spacing Tokens</h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {Object.entries(semanticTokens.spacing).map(([name, data]) => (
                            <div 
                              key={name}
                              className="p-4 bg-card/50 rounded-lg border border-border/50"
                            >
                              <code className="text-sm font-medium text-foreground">{name}</code>
                              <p className="text-xs text-muted-foreground mt-1">{data.purpose}</p>
                              <div className="flex items-center gap-2 mt-2">
                                <ArrowRight className="h-3 w-3 text-muted-foreground" />
                                <code className="text-xs text-primary/80">space-{data.reference}</code>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
```

---

## Section Breakdown

### Reference Spacing with Visual Bars (Lines 1036-1069)

Each spacing token shows:
1. Token name (`space-4`)
2. Visual bar with gradient (width = actual value)
3. Pixel value (`16px`)
4. Copy functionality

**Why Visual Bars?**
- Spacing is inherently visual
- Bars show relative scale at a glance
- Users can compare sizes instantly

### Semantic Spacing Grid (Lines 1072-1089)

Shows semantic spacing tokens with:
- Token name
- Purpose description
- Reference token link

---

## Verification Checklist

- [ ] TabsContent has `value="spacing"`
- [ ] Uses `.slice(0, 16)` to limit displayed tokens
- [ ] Visual bars use `style={{ width: value }}`
- [ ] Shows semantic spacing from `semanticTokens.spacing`
- [ ] Copy functionality on each token

---

**Next Section:** [TAB-TYPOGRAPHY.md](./TAB-TYPOGRAPHY.md)


