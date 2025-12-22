# TAB-ARCHITECTURE.md - Architecture Tab Content

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/tokens/page.tsx` |
| **This Section** | Lines 603-837 |
| **Previous Section** | [SEARCH-NAVIGATION.md](./SEARCH-NAVIGATION.md) |
| **Next Section** | [TAB-COLOURS.md](./TAB-COLOURS.md) |

---

## Prerequisites

- [SEARCH-NAVIGATION.md](./SEARCH-NAVIGATION.md) must be completed first
- The Tabs component is now open and ready for TabsContent

---

## Code Block

Copy this code EXACTLY. Place it directly after the opening `<Tabs>` tag from the previous section.

```tsx
                
                {/* Architecture Tab */}
                <TabsContent value="architecture" className="space-y-8">
                  {/* Three-Tier System */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                        <GitBranch className="h-6 w-6 text-primary" />
                        Three-Tier Token Architecture
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">
                        Our token system follows industry best practices from Material Design and Carbon, 
                        creating a clear hierarchy from raw values to component-specific tokens.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* Visual Token Flow */}
                      <div className="relative">
                        <div className="grid md:grid-cols-3 gap-6">
                          {/* Tier 1: Reference */}
                          <Card className="bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent border-blue-500/30">
                            <CardHeader className="pb-3">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-500/20 rounded-lg">
                                  <Box className="h-5 w-5 text-blue-400" />
                                </div>
                                <div>
                                  <CardTitle className="text-lg text-foreground">Tier 1: Reference</CardTitle>
                                  <Badge variant="outline" className="text-xs mt-1">Primitives</Badge>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <p className="text-sm text-muted-foreground">
                                Raw design values without semantic meaning. Never used directly in components.
                              </p>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 p-2 bg-card/50 rounded-lg">
                                  <div className="w-4 h-4 rounded bg-fuchsia-500"></div>
                                  <code className="text-xs text-foreground/80">fuchsia-500</code>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-card/50 rounded-lg">
                                  <code className="text-xs text-foreground/80">spacing-4 = 16px</code>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-card/50 rounded-lg">
                                  <code className="text-xs text-foreground/80">font-size-sm = 14px</code>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Arrow */}
                          <div className="hidden md:flex items-center justify-center">
                            <ArrowRight className="h-8 w-8 text-muted-foreground" />
                          </div>
                          <div className="flex md:hidden justify-center py-2">
                            <ArrowDown className="h-6 w-6 text-muted-foreground" />
                          </div>

                          {/* Tier 2: Semantic */}
                          <Card className="bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent border-purple-500/30 md:col-start-1 md:row-start-1 md:col-span-1">
                            <CardHeader className="pb-3">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-500/20 rounded-lg">
                                  <Target className="h-5 w-5 text-purple-400" />
                                </div>
                                <div>
                                  <CardTitle className="text-lg text-foreground">Tier 2: Semantic</CardTitle>
                                  <Badge variant="outline" className="text-xs mt-1">System</Badge>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <p className="text-sm text-muted-foreground">
                                Meaningful tokens that describe purpose. Theme-aware and mode-adaptive.
                              </p>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 p-2 bg-card/50 rounded-lg">
                                  <div className="w-4 h-4 rounded bg-fuchsia-500"></div>
                                  <code className="text-xs text-foreground/80">color-action-primary</code>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-card/50 rounded-lg">
                                  <code className="text-xs text-foreground/80">space-component-padding</code>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-card/50 rounded-lg">
                                  <code className="text-xs text-foreground/80">color-text-muted</code>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Tier 3: Component */}
                          <Card className="bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent border-green-500/30">
                            <CardHeader className="pb-3">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-500/20 rounded-lg">
                                  <Layers className="h-5 w-5 text-green-400" />
                                </div>
                                <div>
                                  <CardTitle className="text-lg text-foreground">Tier 3: Component</CardTitle>
                                  <Badge variant="outline" className="text-xs mt-1">Contextual</Badge>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <p className="text-sm text-muted-foreground">
                                Component-specific tokens for precise control and easy maintenance.
                              </p>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 p-2 bg-card/50 rounded-lg">
                                  <div className="w-4 h-4 rounded bg-fuchsia-500"></div>
                                  <code className="text-xs text-foreground/80">button-bg-primary</code>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-card/50 rounded-lg">
                                  <code className="text-xs text-foreground/80">input-padding-x</code>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-card/50 rounded-lg">
                                  <code className="text-xs text-foreground/80">card-radius</code>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      {/* Token Relationship Diagram */}
                      <div className="mt-8 p-6 bg-card/50 rounded-lg border border-border/50">
                        <h4 className="font-semibold text-foreground mb-4">Token Relationship Example</h4>
                        <div className="flex flex-wrap items-center gap-4">
                          <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30">
                            <code className="text-sm text-blue-300">fuchsia-500</code>
                            <div className="text-xs text-muted-foreground mt-1">Reference Token</div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                          <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/30">
                            <code className="text-sm text-purple-300">color-action-primary</code>
                            <div className="text-xs text-muted-foreground mt-1">Semantic Token</div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                          <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                            <code className="text-sm text-green-300">button-bg-primary</code>
                            <div className="text-xs text-muted-foreground mt-1">Component Token</div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                          When you change <code className="text-fuchsia-400">fuchsia-500</code>, 
                          all buttons, links, and interactive elements update automatically while maintaining their semantic meaning.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Laws of UX Support */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                        <Brain className="h-6 w-6 text-primary" />
                        Laws of UX Support
                      </CardTitle>
                      <CardDescription>
                        Our tokens are designed to support fundamental UX principles
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {lawsOfUX.map((law) => (
                          <div key={law.name} className="p-4 bg-card/50 rounded-lg border border-border/50">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 bg-primary/20 rounded-lg">
                                <law.icon className="h-5 w-5 text-primary" />
                              </div>
                              <h4 className="font-semibold text-foreground">{law.name}</h4>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{law.description}</p>
                            <div className="p-3 bg-green-500/10 rounded border border-green-500/30">
                              <p className="text-sm text-green-300">{law.tokenSupport}</p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {law.relatedTokens.map((token) => (
                                <Badge key={token} variant="outline" className="text-xs">
                                  {token}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Benefits */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground flex items-center gap-3">
                        <Lightbulb className="h-5 w-5 text-primary" />
                        Why This Architecture?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-400" />
                            <h4 className="font-semibold text-foreground">Single Source of Truth</h4>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Change a reference token once, and all semantic and component tokens update automatically.
                          </p>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-400" />
                            <h4 className="font-semibold text-foreground">Theme Flexibility</h4>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Semantic tokens adapt to light/dark modes while maintaining consistent meaning.
                          </p>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-400" />
                            <h4 className="font-semibold text-foreground">Component Isolation</h4>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Component tokens allow precise adjustments without affecting the global system.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
```

---

## Section Breakdown

### TabsContent Container (Line 605)

```tsx
<TabsContent value="architecture" className="space-y-8">
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Content that shows when "architecture" tab is active |
| **Why this approach** | `space-y-8` creates consistent vertical spacing between cards |
| **Reference** | Radix UI Tabs component |

---

### Three-Tier System Card (Lines 606-730)

This card explains the three-tier token architecture with visual cards for each tier.

**Tier Card Structure:**

| Tier | Colour | Icon | Badge |
|------|--------|------|-------|
| Reference | Blue | Box | Primitives |
| Semantic | Purple | Target | System |
| Component | Green | Layers | Contextual |

**Responsive Arrows:**
- Desktop: `ArrowRight` (horizontal flow)
- Mobile: `ArrowDown` (vertical flow)

---

### Token Relationship Diagram (Lines 732-755)

Shows how tokens connect: fuchsia-500 → color-action-primary → button-bg-primary

---

### Laws of UX Section (Lines 758-790)

Dynamically renders from the `lawsOfUX` array using `.map()`.

---

### Benefits Section (Lines 793-837)

Three columns explaining:
1. Single Source of Truth
2. Theme Flexibility
3. Component Isolation

---

## Verification Checklist

After copying this code:

- [ ] TabsContent has `value="architecture"`
- [ ] Three tier cards with correct colours (blue, purple, green)
- [ ] ArrowRight for desktop, ArrowDown for mobile
- [ ] Token relationship diagram shows the three-tier flow
- [ ] Laws of UX uses `{lawsOfUX.map(...)}`
- [ ] Benefits section has three columns
- [ ] All closing tags are correct

---

**Next Section:** [TAB-COLOURS.md](./TAB-COLOURS.md)


