# Part: ACCESSIBILITY-WRITING

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 7 of 8 |
| **Lines** | 380-438 |
| **Purpose** | UK English formatting standards |

---

## What This Code Does

Renders the UK English tab with:
1. **Spelling card** - UK vs US spelling differences
2. **Date & Time card** - UK formatting conventions

---

## Code Block

```tsx

              {/* UK English Tab */}
              <TabsContent value="formatting">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">UK English Standards</h2>
                    <p className="text-muted-foreground">Spelling, dates, and formatting conventions</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Spelling */}
                    <Card className="bg-card/30 border-border/50">
                      <CardHeader>
                        <CardTitle>Spelling</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {[
                            { uk: "Colour", us: "Color" },
                            { uk: "Organisation", us: "Organization" },
                            { uk: "Analyse", us: "Analyze" },
                            { uk: "Centre", us: "Center" },
                            { uk: "Programme", us: "Program" },
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-2 bg-card/50 rounded">
                              <span className="text-green-400">{item.uk} ✓</span>
                              <span className="text-red-400 line-through">{item.us}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Date/Time */}
                    <Card className="bg-card/30 border-border/50">
                      <CardHeader>
                        <CardTitle>Date & Time</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {[
                            { format: "Full date", example: "19 December 2024" },
                            { format: "Short date", example: "19/12/2024" },
                            { format: "Time (24h)", example: "14:30" },
                            { format: "Time (12h)", example: "2:30 pm" },
                            { format: "Currency", example: "£50,000" },
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-2 bg-card/50 rounded">
                              <span className="text-muted-foreground">{item.format}</span>
                              <code className="text-foreground">{item.example}</code>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
```

---

## UK Spelling Examples

| UK (Use) | US (Avoid) |
|----------|------------|
| Colour | Color |
| Organisation | Organization |
| Analyse | Analyze |
| Centre | Center |
| Programme | Program |

---

## Date/Time Formats

| Format | Example |
|--------|---------|
| Full date | 19 December 2024 |
| Short date | 19/12/2024 |
| Time (24h) | 14:30 |
| Time (12h) | 2:30 pm |
| Currency | £50,000 |

---

## Verification

- [ ] Spelling card shows 5 UK/US pairs
- [ ] UK spellings are green with checkmark
- [ ] US spellings have strikethrough
- [ ] Date/Time card shows 5 format examples
- [ ] Tabs component closes properly

---

**Next part:** `FOOTER.md`


