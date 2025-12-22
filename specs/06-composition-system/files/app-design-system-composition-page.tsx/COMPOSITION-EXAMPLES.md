# Part: COMPOSITION-EXAMPLES

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 6 of 7 |
| **Lines** | 179-284 |
| **Purpose** | Visual composition example and benefits section |

---

## What This Code Does

1. **Composition diagram** - Visual showing how atoms combine into molecules
2. **Code example** - Practical implementation of FormField molecule
3. **Benefits section** - Three cards explaining Atomic Design advantages

---

## Design References

| Reference | Application |
|-----------|-------------|
| **Brad Frost's Atomic Design** | Composition visualization |
| **Component-Driven Development** | Benefits messaging |

---

## Code Block

```tsx

        {/* Composition Example */}
        <section className="px-6 lg:px-12 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Composition Example</h2>
            
            <Card className="bg-card/30 border-border/50">
              <CardHeader>
                <CardTitle>Building a FormField Molecule</CardTitle>
                <CardDescription>
                  A FormField combines Label + Input + Error text atoms into a reusable molecule
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Visual composition diagram */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                  {/* Atoms */}
                  <div className="flex flex-col gap-2">
                    <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30 text-center">
                      <Circle className="h-4 w-4 text-blue-400 mx-auto mb-1" />
                      <span className="text-xs text-foreground">Label</span>
                    </div>
                    <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30 text-center">
                      <Circle className="h-4 w-4 text-blue-400 mx-auto mb-1" />
                      <span className="text-xs text-foreground">Input</span>
                    </div>
                    <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30 text-center">
                      <Circle className="h-4 w-4 text-blue-400 mx-auto mb-1" />
                      <span className="text-xs text-foreground">Text</span>
                    </div>
                  </div>
                  
                  <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
                  
                  {/* Molecule */}
                  <div className="p-6 bg-green-500/10 rounded-lg border border-green-500/30">
                    <Combine className="h-6 w-6 text-green-400 mx-auto mb-2" />
                    <span className="text-sm font-medium text-foreground">FormField</span>
                    <p className="text-xs text-muted-foreground mt-1">Molecule</p>
                  </div>
                </div>

                {/* Code example */}
                <pre className="bg-slate-950 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`// Molecule: FormField
// Combines: Label + Input + Error text

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function FormField({ label, error, ...props }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input {...props} />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-6 lg:px-12 py-12 bg-card/30 border-t border-border/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Benefits of Atomic Design</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Consistency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Using the same atoms everywhere ensures visual and behavioural consistency across the product.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Build complex UIs quickly by combining pre-built, tested components rather than starting from scratch.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Maintainability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Update an atom once and the change propagates everywhere it's used, reducing maintenance burden.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
```

---

## Diagram Structure

```
[Atom: Label]
[Atom: Input]    →    [Molecule: FormField]
[Atom: Text]
```

---

## Benefits Cards

| Benefit | Description |
|---------|-------------|
| **Consistency** | Same atoms = same look everywhere |
| **Efficiency** | Compose quickly from existing parts |
| **Maintainability** | Change once, update everywhere |

---

## Verification

- [ ] Atom circles show Label, Input, Text
- [ ] Arrow points to FormField molecule
- [ ] Code example shows complete FormField implementation
- [ ] Three benefit cards: Consistency, Efficiency, Maintainability

---

**Next part:** `FOOTER.md`


