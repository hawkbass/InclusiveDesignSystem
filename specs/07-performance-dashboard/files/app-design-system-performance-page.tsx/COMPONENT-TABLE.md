# Part: COMPONENT-TABLE

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 7 of 8 |
| **Lines** | 183-240 |
| **Purpose** | Component performance metrics table |

---

## What This Code Does

Renders a full-width table showing per-component metrics:
1. Component name
2. Bundle size (raw and gzip)
3. Render time
4. Accessibility score with progress bar
5. Trend indicator badges

---

## Code Block

```tsx
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-card/50">
                        <th className="text-left py-4 px-6 text-foreground font-medium">Component</th>
                        <th className="text-left py-4 px-6 text-foreground font-medium">Bundle (Raw)</th>
                        <th className="text-left py-4 px-6 text-foreground font-medium">Bundle (Gzip)</th>
                        <th className="text-left py-4 px-6 text-foreground font-medium">Render Time</th>
                        <th className="text-left py-4 px-6 text-foreground font-medium">A11y Score</th>
                        <th className="text-left py-4 px-6 text-foreground font-medium">Trend</th>
                      </tr>
                    </thead>
                    <tbody>
                      {performanceData.components.map((component) => (
                        <tr key={component.name} className="border-b border-border/50 hover:bg-card/50">
                          <td className="py-4 px-6">
                            <span className="font-medium text-foreground">{component.name}</span>
                          </td>
                          <td className="py-4 px-6 text-muted-foreground">{component.bundleRaw}</td>
                          <td className="py-4 px-6 text-muted-foreground">{component.bundleGzip}</td>
                          <td className="py-4 px-6 text-muted-foreground">{component.renderTime}</td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              <Progress value={component.a11y} className="w-20 h-2" />
                              <span className={component.a11y >= 95 ? "text-green-400" : component.a11y >= 85 ? "text-amber-400" : "text-red-400"}>
                                {component.a11y}%
                              </span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            {component.trend === "improving" && (
                              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                Improving
                              </Badge>
                            )}
                            {component.trend === "stable" && (
                              <Badge variant="outline" className="text-muted-foreground">
                                <Minus className="h-3 w-3 mr-1" />
                                Stable
                              </Badge>
                            )}
                            {component.trend === "declining" && (
                              <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                                <TrendingDown className="h-3 w-3 mr-1" />
                                Declining
                              </Badge>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
```

---

## Table Columns

| Column | Data Source |
|--------|-------------|
| Component | `component.name` |
| Bundle (Raw) | `component.bundleRaw` |
| Bundle (Gzip) | `component.bundleGzip` |
| Render Time | `component.renderTime` |
| A11y Score | `component.a11y` with Progress bar |
| Trend | Badge based on `component.trend` |

---

## A11y Score Colors

| Score | Color |
|-------|-------|
| ≥95 | Green |
| 85-94 | Amber |
| <85 | Red |

---

## Verification

- [ ] Table has 6 columns
- [ ] Rows iterate over `performanceData.components`
- [ ] A11y column shows Progress bar + percentage
- [ ] Trend column shows correct badge variant

---

**Next part:** `FOOTER.md`


