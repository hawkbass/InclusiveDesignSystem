# TAB-EXPORT.md - Export Tab Content

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/tokens/page.tsx` |
| **This Section** | Lines 1378-1489 |
| **Previous Section** | [TAB-PLAYGROUND.md](./TAB-PLAYGROUND.md) |
| **Next Section** | [FOOTER.md](./FOOTER.md) |

---

## Prerequisites

- [TAB-PLAYGROUND.md](./TAB-PLAYGROUND.md) must be completed first

---

## Code Block

Copy this code EXACTLY. Place it directly after the Playground TabsContent closing tag.

```tsx

                {/* Export Tab */}
                <TabsContent value="export" className="space-y-8">
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                        <Download className="h-6 w-6 text-primary" />
                        Export Tokens
                      </CardTitle>
                      <CardDescription>
                        Download tokens in your preferred format for use in any project.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Format Selection */}
                        <div className="space-y-4">
                          <Label className="text-sm font-medium text-foreground">Export Format</Label>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { id: "css", label: "CSS Variables", icon: FileCode },
                              { id: "scss", label: "SCSS Variables", icon: FileCode },
                              { id: "json", label: "JSON", icon: FileJson },
                              { id: "js", label: "JavaScript", icon: Code },
                            ].map((format) => (
                              <Button
                                key={format.id}
                                variant={exportFormat === format.id ? "default" : "outline"}
                                className="h-auto py-4 justify-start"
                                onClick={() => setExportFormat(format.id as any)}
                              >
                                <format.icon className="h-5 w-5 mr-3" />
                                {format.label}
                              </Button>
                            ))}
                          </div>

                          <div className="flex gap-3 mt-6">
                            <Button className="flex-1 bg-gradient-to-r from-primary to-purple-600">
                              <Download className="h-4 w-4 mr-2" />
                              Download {exportFormat.toUpperCase()}
                            </Button>
                            <Button variant="outline" className="flex-1">
                              <Figma className="h-4 w-4 mr-2" />
                              Sync to Figma
                            </Button>
                          </div>
                        </div>

                        {/* Code Preview */}
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <Label className="text-sm font-medium text-foreground">Preview</Label>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopyCode(generateExportCode(exportFormat), 'export-code')}
                            >
                              {copiedCode === 'export-code' ? (
                                <CheckCircle2 className="h-4 w-4 text-green-400" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                          <pre className="bg-card/50 p-4 rounded-lg border border-border/50 overflow-x-auto text-sm">
                            <code className="text-foreground/80">{generateExportCode(exportFormat)}</code>
                          </pre>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Integration Guide */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground">Integration Guide</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                          <h4 className="font-semibold text-foreground mb-2">React / Next.js</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Import the CSS file in your root layout or _app file.
                          </p>
                          <code className="text-xs bg-card/50 p-2 rounded block">
                            import '@inclusive/tokens.css'
                          </code>
                        </div>
                        <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                          <h4 className="font-semibold text-foreground mb-2">Vue / Nuxt</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Add to your global styles or nuxt.config.
                          </p>
                          <code className="text-xs bg-card/50 p-2 rounded block">
                            css: ['@inclusive/tokens.css']
                          </code>
                        </div>
                        <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                          <h4 className="font-semibold text-foreground mb-2">Tailwind</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Extend your tailwind.config with token values.
                          </p>
                          <code className="text-xs bg-card/50 p-2 rounded block">
                            extend: require('@inclusive/tokens')
                          </code>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
```

---

## Section Breakdown

### Format Selection (Lines 1394-1426)

Four export format buttons:
- CSS Variables
- SCSS Variables
- JSON
- JavaScript

Uses `exportFormat` state to track selection.

### Download Actions (Lines 1418-1426)

Two action buttons:
1. Download - uses current format
2. Sync to Figma - Figma integration

### Code Preview (Lines 1429-1446)

- Shows live preview of export code
- Uses `generateExportCode(exportFormat)`
- Copy button for the entire output

### Integration Guide (Lines 1450-1486)

Three cards showing how to integrate:
1. React / Next.js
2. Vue / Nuxt
3. Tailwind CSS

---

## Verification Checklist

- [ ] TabsContent has `value="export"`
- [ ] Four format buttons in 2x2 grid
- [ ] Format buttons use `setExportFormat`
- [ ] Code preview uses `generateExportCode()`
- [ ] Copy button uses `handleCopyCode`
- [ ] Integration guide has three cards

---

**Next Section:** [FOOTER.md](./FOOTER.md)


