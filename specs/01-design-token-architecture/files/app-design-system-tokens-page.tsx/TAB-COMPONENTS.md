# TAB-COMPONENTS.md - Component Tokens Tab Content

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/tokens/page.tsx` |
| **This Section** | Lines 1188-1252 |
| **Previous Section** | [TAB-TYPOGRAPHY.md](./TAB-TYPOGRAPHY.md) |
| **Next Section** | [TAB-PLAYGROUND.md](./TAB-PLAYGROUND.md) |

---

## Prerequisites

- [TAB-TYPOGRAPHY.md](./TAB-TYPOGRAPHY.md) must be completed first

---

## Code Block

Copy this code EXACTLY. Place it directly after the Typography TabsContent closing tag.

```tsx

                {/* Component Tokens Tab */}
                <TabsContent value="components" className="space-y-8">
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                        <Box className="h-6 w-6 text-green-400" />
                        Component Tokens (Tier 3)
                      </CardTitle>
                      <CardDescription>
                        Component-specific tokens for precise styling control. These tokens reference semantic tokens for consistency.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        {Object.entries(componentTokens).map(([component, tokens]) => (
                          <div key={component}>
                            <h4 className="text-lg font-semibold text-foreground capitalize mb-4 flex items-center gap-2">
                              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                                {component === "button" && <Box className="h-4 w-4 text-primary" />}
                                {component === "input" && <Type className="h-4 w-4 text-primary" />}
                                {component === "card" && <Layers className="h-4 w-4 text-primary" />}
                                {component === "badge" && <Badge className="h-4 w-4 text-primary">B</Badge>}
                              </div>
                              {component} Tokens
                            </h4>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {Object.entries(tokens).map(([name, data]) => (
                                <div 
                                  key={name}
                                  className="p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all cursor-pointer"
                                  onClick={() => handleCopyCode(`var(--${name})`, name)}
                                >
                                  <div className="flex items-center justify-between mb-2">
                                    <code className="text-sm font-medium text-foreground">{name}</code>
                                    {copiedCode === name ? (
                                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                                    ) : (
                                      <Copy className="h-4 w-4 text-muted-foreground" />
                                    )}
                                  </div>
                                  <div className="text-xs text-muted-foreground mb-2">
                                    {(data as any).purpose || `Value: ${(data as any).value}`}
                                  </div>
                                  {(data as any).semantic && (
                                    <div className="flex items-center gap-2 mt-2">
                                      <ArrowRight className="h-3 w-3 text-muted-foreground" />
                                      <code className="text-xs text-purple-400">{(data as any).semantic}</code>
                                    </div>
                                  )}
                                  {(data as any).reference && (
                                    <div className="flex items-center gap-2 mt-2">
                                      <ArrowRight className="h-3 w-3 text-muted-foreground" />
                                      <code className="text-xs text-blue-400">{(data as any).reference}</code>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
```

---

## Section Breakdown

### Component Groups (Lines 1204-1248)

Loops through `componentTokens` object:
- button
- input
- card
- badge

Each component section shows:
1. Component icon based on name
2. Grid of component tokens
3. Token name, purpose/value, and relationships

### Token Display

Each token card shows:
- Token name
- Purpose or value
- Semantic reference (purple) if present
- Reference token (blue) if present

**Type Assertion:**
Uses `(data as any)` because TypeScript can't infer the exact shape due to dynamic iteration.

---

## Verification Checklist

- [ ] TabsContent has `value="components"`
- [ ] Loops through `componentTokens` with `.map()`
- [ ] Shows different icons per component type
- [ ] Shows semantic references in purple
- [ ] Shows direct references in blue

---

**Next Section:** [TAB-PLAYGROUND.md](./TAB-PLAYGROUND.md)


