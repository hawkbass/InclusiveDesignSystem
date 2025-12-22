# RELATED-COMPONENTS.md - Related Components Section

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/components/button/page.tsx` |
| **This Section** | Lines 891-950 |
| **Previous Section** | [COMPOSITION-PATTERNS.md](./COMPOSITION-PATTERNS.md) |
| **Next Section** | [FOOTER.md](./FOOTER.md) |

---

## Code Block

```tsx

          {/* Related Components */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Box className="h-5 w-5" />
                Related Components
              </CardTitle>
              <CardDescription>
                Components that work well with Button or serve similar purposes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {relatedComponents.map((component) => (
                  <Link
                    key={component.name}
                    href={component.href}
                    className="group p-4 border rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium group-hover:text-primary transition-colors">
                        {component.name}
                      </h4>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {component.description}
                    </p>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Changelog */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Changelog
              </CardTitle>
              <CardDescription>
                Recent updates and version history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Badge variant="outline" className="h-fit">v2.1.0</Badge>
                  <div>
                    <p className="font-medium text-sm">Added loading state animation</p>
                    <p className="text-sm text-muted-foreground">Smooth spinner animation for async actions</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Badge variant="outline" className="h-fit">v2.0.0</Badge>
                  <div>
                    <p className="font-medium text-sm">Redesigned with new variant system</p>
                    <p className="text-sm text-muted-foreground">Breaking: variant prop values changed</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Badge variant="outline" className="h-fit">v1.5.0</Badge>
                  <div>
                    <p className="font-medium text-sm">Added icon-only size</p>
                    <p className="text-sm text-muted-foreground">New size="icon" for square buttons</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
```

---

## Line-by-Line Specification

### Lines 893-903: Related Components Header

```tsx
<Card className="mb-12">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Box className="h-5 w-5" />
      Related Components
    </CardTitle>
    <CardDescription>
      Components that work well with Button or serve similar purposes
    </CardDescription>
  </CardHeader>
```

| Element | Purpose |
|---------|---------|
| Box icon | Represents component |
| Description | Explains relationship |

---

### Lines 905-925: Related Components Grid

```tsx
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {relatedComponents.map((component) => (
    <Link
      key={component.name}
      href={component.href}
      className="group p-4 border rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all"
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium group-hover:text-primary transition-colors">
          {component.name}
        </h4>
        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>
      <p className="text-sm text-muted-foreground">
        {component.description}
      </p>
    </Link>
  ))}
</div>
```

| Element | Purpose |
|---------|---------|
| `grid sm:grid-cols-2 lg:grid-cols-4` | Responsive grid (1→2→4 columns) |
| `group` class | Enables group-hover effects |
| `hover:border-slate-400` | Border highlight on hover |
| Arrow animation | `translate-x-1` on hover |

**Reference:** 
- Law of Proximity - Related items grouped
- Hick's Law - Limited choices (max 4)

---

### Lines 928-950: Changelog Section

```tsx
<Card className="mb-12">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Clock className="h-5 w-5" />
      Changelog
    </CardTitle>
    <CardDescription>
      Recent updates and version history
    </CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">
      <div className="flex gap-4">
        <Badge variant="outline" className="h-fit">v2.1.0</Badge>
        <div>
          <p className="font-medium text-sm">Added loading state animation</p>
          <p className="text-sm text-muted-foreground">Smooth spinner animation for async actions</p>
        </div>
      </div>
      // ... more versions
    </div>
  </CardContent>
</Card>
```

| Element | Purpose |
|---------|---------|
| Clock icon | Represents history/time |
| Version badge | Clear version identifier |
| Title + description | What changed and why |

**Changelog entries:**

| Version | Change |
|---------|--------|
| v2.1.0 | Added loading state animation |
| v2.0.0 | Redesigned variant system (breaking) |
| v1.5.0 | Added icon-only size |

---

## Note: Missing Import

The `Clock` icon needs to be added to imports:

```tsx
import {
  // ... existing imports
  Clock,
} from "lucide-react"
```

Add this to IMPORTS.md if not already present.

---

## Verification Checklist

- [ ] Related Components shows 4 items in grid
- [ ] Each card is a clickable Link
- [ ] Hover effects work (border, background, arrow)
- [ ] Changelog shows 3 version entries
- [ ] Each version has badge, title, description

---

**Next Section:** [FOOTER.md](./FOOTER.md)


