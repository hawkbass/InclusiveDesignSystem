# TAB-PLAYGROUND.md - Interactive Playground Tab Content

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/tokens/page.tsx` |
| **This Section** | Lines 1253-1377 |
| **Previous Section** | [TAB-COMPONENTS.md](./TAB-COMPONENTS.md) |
| **Next Section** | [TAB-EXPORT.md](./TAB-EXPORT.md) |

---

## Prerequisites

- [TAB-COMPONENTS.md](./TAB-COMPONENTS.md) must be completed first

---

## Code Block

Copy this code EXACTLY. Place it directly after the Components TabsContent closing tag.

```tsx

                {/* Playground Tab */}
                <TabsContent value="playground" className="space-y-8">
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                        <Sparkles className="h-6 w-6 text-primary" />
                        Token Playground
                      </CardTitle>
                      <CardDescription>
                        Experiment with tokens and see live previews of your changes.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Controls */}
                        <div className="space-y-6">
                          <div>
                            <Label className="text-sm font-medium text-foreground mb-3 block">
                              Primary Colour
                            </Label>
                            <div className="flex items-center gap-4">
                              <input
                                type="color"
                                value={selectedColor}
                                onChange={(e) => setSelectedColor(e.target.value)}
                                className="w-16 h-10 rounded cursor-pointer"
                              />
                              <Input
                                value={selectedColor}
                                onChange={(e) => setSelectedColor(e.target.value)}
                                className="flex-1 font-mono"
                              />
                            </div>
                          </div>

                          <div>
                            <Label className="text-sm font-medium text-foreground mb-3 block">
                              Border Radius
                            </Label>
                            <Slider
                              defaultValue={[6]}
                              max={24}
                              step={2}
                              className="w-full"
                            />
                          </div>

                          <div>
                            <Label className="text-sm font-medium text-foreground mb-3 block">
                              Theme Mode
                            </Label>
                            <div className="flex items-center gap-4">
                              <Switch
                                checked={previewTheme === "dark"}
                                onCheckedChange={(checked) => setPreviewTheme(checked ? "dark" : "light")}
                              />
                              <span className="text-sm text-muted-foreground">
                                {previewTheme === "dark" ? "Dark Mode" : "Light Mode"}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Preview */}
                        <div 
                          className="p-6 rounded-xl border"
                          style={{ 
                            backgroundColor: previewTheme === "dark" ? "#020617" : "#ffffff",
                            borderColor: previewTheme === "dark" ? "#1e293b" : "#e2e8f0"
                          }}
                        >
                          <h4 
                            className="text-lg font-semibold mb-4"
                            style={{ color: previewTheme === "dark" ? "#f8fafc" : "#0f172a" }}
                          >
                            Component Preview
                          </h4>
                          <div className="space-y-4">
                            <button
                              className="px-4 py-2 rounded-md font-medium text-white transition-all hover:opacity-90"
                              style={{ 
                                backgroundColor: selectedColor,
                                borderRadius: "6px"
                              }}
                            >
                              Primary Button
                            </button>
                            <button
                              className="px-4 py-2 rounded-md font-medium transition-all ml-3"
                              style={{ 
                                backgroundColor: "transparent",
                                borderRadius: "6px",
                                border: `1px solid ${previewTheme === "dark" ? "#334155" : "#e2e8f0"}`,
                                color: previewTheme === "dark" ? "#f8fafc" : "#0f172a"
                              }}
                            >
                              Secondary Button
                            </button>
                            <div 
                              className="p-4 rounded-lg mt-4"
                              style={{
                                backgroundColor: previewTheme === "dark" ? "#0f172a" : "#f8fafc",
                                border: `1px solid ${previewTheme === "dark" ? "#1e293b" : "#e2e8f0"}`
                              }}
                            >
                              <div 
                                className="font-medium mb-1"
                                style={{ color: previewTheme === "dark" ? "#f8fafc" : "#0f172a" }}
                              >
                                Card Title
                              </div>
                              <div 
                                className="text-sm"
                                style={{ color: previewTheme === "dark" ? "#94a3b8" : "#64748b" }}
                              >
                                Card description with muted text styling.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
```

---

## Section Breakdown

### Controls Column (Lines 1269-1308)

**Colour Picker:**
- Native HTML colour input (`type="color"`)
- Synced text input for hex value
- Both controlled by `selectedColor` state

**Border Radius Slider:**
- Slider component from UI library
- Range 0-24px with 2px steps
- Default value 6px

**Theme Toggle:**
- Switch component for dark/light mode
- Controls `previewTheme` state
- Label shows current mode

### Preview Column (Lines 1311-1371)

**Preview Container:**
- Uses inline styles based on `previewTheme`
- Simulates light/dark mode environment

**Preview Components:**
1. Primary Button - uses `selectedColor`
2. Secondary Button - outline style
3. Card - shows surface hierarchy

---

## Verification Checklist

- [ ] TabsContent has `value="playground"`
- [ ] Colour picker has `type="color"`
- [ ] Both inputs use `selectedColor` state
- [ ] Switch uses `previewTheme` state
- [ ] Preview container changes with theme
- [ ] Primary button uses `selectedColor`

---

**Next Section:** [TAB-EXPORT.md](./TAB-EXPORT.md)


