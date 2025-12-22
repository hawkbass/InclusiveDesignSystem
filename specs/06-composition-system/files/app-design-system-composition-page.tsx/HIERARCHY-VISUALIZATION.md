# Part: HIERARCHY-VISUALIZATION

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 4 of 7 |
| **Lines** | 112-144 |
| **Purpose** | Visual flow diagram of atomic design levels |

---

## What This Code Does

Creates an interactive horizontal flow diagram showing:
1. Five atomic levels with icons
2. Component counts per level
3. Arrow connections between levels
4. Click handlers to select a level

---

## Design References

| Reference | Application |
|-----------|-------------|
| **Brad Frost's Atomic Design** | Visual hierarchy flow |
| **Material Design** | Interactive selection states |

---

## Code Block

```tsx

        {/* Hierarchy Visualisation */}
        <section className="px-6 lg:px-12 py-12 bg-card/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Component Hierarchy</h2>
            
            {/* Visual Flow */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
              {[
                { level: "atoms", icon: Atom, count: atomicLevels.atoms.length, color: "blue" },
                { level: "molecules", icon: Combine, count: atomicLevels.molecules.length, color: "green" },
                { level: "organisms", icon: Component, count: atomicLevels.organisms.length, color: "purple" },
                { level: "templates", icon: Layout, count: atomicLevels.templates.length, color: "orange" },
                { level: "pages", icon: FileText, count: 12, color: "red" },
              ].map((item, idx) => (
                <div key={item.level} className="flex items-center">
                  <button
                    onClick={() => item.level !== "pages" && setSelectedLevel(item.level as any)}
                    className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all ${
                      selectedLevel === item.level 
                        ? "border-primary bg-primary/10" 
                        : "border-border/50 hover:border-primary/50"
                    }`}
                  >
                    <div className={`p-3 rounded-full bg-${item.color}-500/10 mb-2`}>
                      <item.icon className={`h-6 w-6 text-${item.color}-400`} />
                    </div>
                    <span className="text-sm font-medium text-foreground capitalize">{item.level}</span>
                    <span className="text-xs text-muted-foreground">{item.count} items</span>
                  </button>
                  {idx < 4 && <ArrowRight className="h-5 w-5 text-muted-foreground mx-2 hidden md:block" />}
                </div>
              ))}
            </div>
```

---

## Level Colors

| Level | Color | Icon |
|-------|-------|------|
| Atoms | Blue | Atom |
| Molecules | Green | Combine |
| Organisms | Purple | Component |
| Templates | Orange | Layout |
| Pages | Red | FileText |

---

## Verification

- [ ] Five level buttons render
- [ ] Each has icon, name, and count
- [ ] Arrows connect levels (hidden on mobile)
- [ ] Selected level has `border-primary` style
- [ ] "Pages" level is not clickable

---

**Next part:** `LEVEL-DETAILS.md`


