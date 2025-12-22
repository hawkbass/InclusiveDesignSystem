# Part: LEVEL-DETAILS

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 5 of 7 |
| **Lines** | 145-178 |
| **Purpose** | Component grid for selected atomic level |

---

## What This Code Does

Renders a responsive grid of cards showing all components in the currently selected atomic level:
1. Component name as title
2. Description (for atoms) or composition (for molecules+)
3. Usage count badge
4. Parts count for composed components

---

## Code Block

```tsx

            {/* Component Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {atomicLevels[selectedLevel].map((component) => (
                <Card 
                  key={component.name}
                  className={`bg-card/50 border-border/50 hover:border-primary/50 transition-all cursor-pointer ${
                    selectedComponent === component.name ? "border-primary" : ""
                  }`}
                  onClick={() => setSelectedComponent(component.name)}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{component.name}</CardTitle>
                    <CardDescription className="text-xs">
                      {(component as any).description || `Made from: ${(component as any).madeFrom?.join(", ")}`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {component.usage} uses
                      </Badge>
                      {(component as any).madeFrom && (
                        <span className="text-xs text-muted-foreground">
                          {(component as any).madeFrom.length} parts
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
```

---

## Grid Breakpoints

| Viewport | Columns |
|----------|---------|
| Mobile | 1 |
| md (768px) | 2 |
| lg (1024px) | 3 |
| xl (1280px) | 4 |

---

## Verification

- [ ] Grid uses `atomicLevels[selectedLevel]` to display components
- [ ] Cards show name, description/composition, usage count
- [ ] Selected component has `border-primary`
- [ ] Molecules+ show "X parts" indicator

---

**Next part:** `COMPOSITION-EXAMPLES.md`


