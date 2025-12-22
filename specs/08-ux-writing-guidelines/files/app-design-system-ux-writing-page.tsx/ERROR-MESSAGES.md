# Part: ERROR-MESSAGES

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 6 of 8 |
| **Lines** | 341-379 |
| **Purpose** | Terminology standards table |

---

## What This Code Does

Renders the Terminology tab content with a table showing preferred terms and what to avoid.

---

## Code Block

```tsx

              {/* Terminology Tab */}
              <TabsContent value="terminology">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Terminology Standards</h2>
                    <p className="text-muted-foreground">Preferred terms for the recruitment context</p>
                  </div>

                  <Card className="bg-card/30 border-border/50">
                    <CardContent className="p-0">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border bg-card/50">
                            <th className="text-left py-4 px-6 text-foreground font-medium">Use</th>
                            <th className="text-left py-4 px-6 text-foreground font-medium">Instead of</th>
                            <th className="text-left py-4 px-6 text-foreground font-medium">Context</th>
                          </tr>
                        </thead>
                        <tbody>
                          {terminology.map((term, idx) => (
                            <tr key={idx} className="border-b border-border/50">
                              <td className="py-4 px-6">
                                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                                  {term.use}
                                </Badge>
                              </td>
                              <td className="py-4 px-6 text-muted-foreground line-through decoration-red-400/50">
                                {term.instead}
                              </td>
                              <td className="py-4 px-6 text-muted-foreground">{term.context}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
```

---

## Table Columns

| Column | Styling |
|--------|---------|
| Use | Green badge |
| Instead of | Strikethrough with red decoration |
| Context | Muted text |

---

## Verification

- [ ] Table has 3 columns
- [ ] Rows iterate over `terminology` array
- [ ] "Use" column shows green badges
- [ ] "Instead of" column has strikethrough text

---

**Next part:** `ACCESSIBILITY-WRITING.md`


