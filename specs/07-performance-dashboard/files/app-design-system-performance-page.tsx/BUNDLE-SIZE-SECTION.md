# Part: BUNDLE-SIZE-SECTION

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 4 of 8 |
| **Lines** | 99-174 |
| **Purpose** | Summary statistics cards |

---

## What This Code Does

Displays 5 summary metric cards in a responsive grid:
1. Total Bundle Size (gzip)
2. Average Render Time
3. Accessibility Score
4. Adoption Rate
5. Component Count

---

## Code Block

```tsx

        {/* Summary Stats */}
        <section className="px-6 lg:px-12 py-8 bg-card/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Package className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{performanceData.summary.totalBundleSize}</div>
                      <div className="text-xs text-muted-foreground">Total Bundle (gzip)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <Zap className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{performanceData.summary.avgRenderTime}</div>
                      <div className="text-xs text-muted-foreground">Avg Render Time</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <Accessibility className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{performanceData.summary.a11yScore}%</div>
                      <div className="text-xs text-muted-foreground">A11y Score</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-fuchsia-500/10 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-fuchsia-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{performanceData.summary.adoptionRate}%</div>
                      <div className="text-xs text-muted-foreground">Adoption Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-500/10 rounded-lg">
                      <Globe className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{performanceData.summary.componentCount}</div>
                      <div className="text-xs text-muted-foreground">Components</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
```

---

## Card Colors

| Metric | Icon Color |
|--------|------------|
| Bundle Size | Blue |
| Render Time | Green |
| A11y Score | Purple |
| Adoption Rate | Fuchsia |
| Components | Amber |

---

## Verification

- [ ] 5 stat cards in grid
- [ ] Each card has icon, value, and label
- [ ] Grid is 2 columns on mobile, 5 on desktop
- [ ] Values come from `performanceData.summary`

---

**Next part:** `RENDER-PERFORMANCE.md`


