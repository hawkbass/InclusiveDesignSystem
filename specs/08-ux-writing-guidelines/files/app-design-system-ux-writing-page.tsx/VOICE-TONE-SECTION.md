# Part: VOICE-TONE-SECTION

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 4 of 8 |
| **Lines** | 172-235 |
| **Purpose** | Voice attributes and tone by context cards |

---

## What This Code Does

1. **Voice attributes grid** - 4 cards with do/don't examples
2. **Tone by context** - Shows how tone adapts to different situations

---

## Code Block

```tsx

              {/* Voice & Tone Tab */}
              <TabsContent value="voice">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Voice Attributes</h2>
                    <p className="text-muted-foreground mb-6">
                      Our voice is consistent across all touchpoints. These four attributes define how we communicate.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {voiceAttributes.map((attr) => (
                      <Card key={attr.name} className="bg-card/30 border-border/50">
                        <CardHeader>
                          <CardTitle className="text-lg">{attr.name}</CardTitle>
                          <CardDescription>{attr.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                            <div className="flex items-center gap-2 mb-1">
                              <Check className="h-4 w-4 text-green-400" />
                              <span className="text-xs font-medium text-green-400">Do</span>
                            </div>
                            <p className="text-sm text-foreground">"{attr.do}"</p>
                          </div>
                          <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                            <div className="flex items-center gap-2 mb-1">
                              <X className="h-4 w-4 text-red-400" />
                              <span className="text-xs font-medium text-red-400">Don't</span>
                            </div>
                            <p className="text-sm text-foreground">"{attr.dont}"</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Tone by Context */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle>Tone by Context</CardTitle>
                      <CardDescription>
                        While voice stays consistent, tone adapts to context
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                          { context: "Success", tone: "Warm, confirming", example: "Great! Your application has been submitted." },
                          { context: "Error", tone: "Calm, helpful", example: "We couldn't save your changes. Please try again." },
                          { context: "Warning", tone: "Clear, direct", example: "This action cannot be undone." },
                          { context: "Empty state", tone: "Encouraging", example: "No applications yet. Start by posting a job." },
                        ].map((item) => (
                          <div key={item.context} className="p-4 bg-card/50 rounded-lg border border-border/50">
                            <Badge variant="outline" className="mb-2">{item.context}</Badge>
                            <div className="text-sm font-medium text-foreground mb-1">{item.tone}</div>
                            <p className="text-xs text-muted-foreground">"{item.example}"</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
```

---

## Voice Attributes

| Attribute | Description |
|-----------|-------------|
| Professional | Competent without being cold |
| Helpful | Anticipates user needs |
| Clear | Plain language, no jargon |
| Efficient | Concise and scannable |

---

## Tone Contexts

| Context | Tone | Example |
|---------|------|---------|
| Success | Warm, confirming | "Great! Your application has been submitted." |
| Error | Calm, helpful | "We couldn't save your changes..." |
| Warning | Clear, direct | "This action cannot be undone." |
| Empty state | Encouraging | "No applications yet..." |

---

## Verification

- [ ] 4 voice attribute cards render
- [ ] Each has green Do and red Don't sections
- [ ] Tone by context shows 4 contexts

---

**Next part:** `UI-TEXT-PATTERNS.md`


