# Part: UI-TEXT-PATTERNS

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 5 of 8 |
| **Lines** | 236-340 |
| **Purpose** | Microcopy tab with button and error patterns |

---

## What This Code Does

1. **Section header** with search input
2. **Button labels card** - Good and bad button text patterns
3. **Error messages card** - Good and bad error patterns
4. Copy buttons for good patterns

---

## Code Block

```tsx

              {/* Microcopy Tab */}
              <TabsContent value="microcopy">
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">Microcopy Patterns</h2>
                      <p className="text-muted-foreground">Ready-to-use patterns for common UI elements</p>
                    </div>
                    <div className="relative w-64">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search patterns..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle>Button Labels</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {microcopyPatterns.buttons.map((item, idx) => (
                          <div
                            key={idx}
                            className={`p-4 rounded-lg border flex items-start justify-between ${
                              item.good
                                ? "bg-green-500/5 border-green-500/20"
                                : "bg-red-500/5 border-red-500/20"
                            }`}
                          >
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                {item.good ? (
                                  <Check className="h-4 w-4 text-green-400" />
                                ) : (
                                  <X className="h-4 w-4 text-red-400" />
                                )}
                                <span className="font-medium text-foreground">"{item.pattern}"</span>
                              </div>
                              <p className="text-xs text-muted-foreground">{item.context}</p>
                            </div>
                            {item.good && (
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleCopy(item.pattern)}
                              >
                                {copiedText === item.pattern ? (
                                  <Check className="h-4 w-4 text-green-400" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Error Messages */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle>Error Messages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {microcopyPatterns.errors.map((item, idx) => (
                          <div
                            key={idx}
                            className={`p-4 rounded-lg border flex items-start justify-between ${
                              item.good
                                ? "bg-green-500/5 border-green-500/20"
                                : "bg-red-500/5 border-red-500/20"
                            }`}
                          >
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                {item.good ? (
                                  <Check className="h-4 w-4 text-green-400" />
                                ) : (
                                  <X className="h-4 w-4 text-red-400" />
                                )}
                                <span className="font-medium text-foreground">"{item.pattern}"</span>
                              </div>
                              <p className="text-xs text-muted-foreground">{item.context}</p>
                            </div>
                            {item.good && (
                              <Button size="sm" variant="ghost" onClick={() => handleCopy(item.pattern)}>
                                {copiedText === item.pattern ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
```

---

## Pattern Card Styling

| Pattern Type | Background | Border |
|--------------|------------|--------|
| Good (true) | `bg-green-500/5` | `border-green-500/20` |
| Bad (false) | `bg-red-500/5` | `border-red-500/20` |

---

## Verification

- [ ] Search input in header
- [ ] Button Labels card with 8 patterns
- [ ] Error Messages card with 6 patterns
- [ ] Good patterns have copy button
- [ ] Copy button shows checkmark after click

---

**Next part:** `ERROR-MESSAGES.md`


