# VARIANT-SHOWCASE.md - All Button Variants Display

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/components/button/page.tsx` |
| **This Section** | Lines 491-560 |
| **Previous Section** | [DO-DONT-EXAMPLES.md](./DO-DONT-EXAMPLES.md) |
| **Next Section** | [PROPS-TABLE.md](./PROPS-TABLE.md) |

---

## Code Block

```tsx

          {/* Variants Showcase */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                All Variants
              </CardTitle>
              <CardDescription>
                Visual overview of all available button styles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {buttonVariants.map((variant) => (
                  <div 
                    key={variant.name}
                    className="p-6 border rounded-lg bg-gradient-to-br from-slate-50 to-white"
                  >
                    <div className="mb-4">
                      <Button variant={variant.name as any}>
                        {variant.name.charAt(0).toUpperCase() + variant.name.slice(1)}
                      </Button>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-sm">{variant.name}</p>
                      <p className="text-xs text-muted-foreground">{variant.description}</p>
                      <p className="text-xs text-slate-500 mt-2">
                        <span className="font-medium">Use for:</span> {variant.usage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sizes Showcase */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Box className="h-5 w-5" />
                All Sizes
              </CardTitle>
              <CardDescription>
                Button sizes for different contexts and touch targets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 text-sm font-medium">Size</th>
                      <th className="text-left py-3 px-4 text-sm font-medium">Preview</th>
                      <th className="text-left py-3 px-4 text-sm font-medium">Height</th>
                      <th className="text-left py-3 px-4 text-sm font-medium">Padding</th>
                      <th className="text-left py-3 px-4 text-sm font-medium">Font Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    {buttonSizes.map((size) => (
                      <tr key={size.name} className="border-b last:border-0">
                        <td className="py-4 px-4">
                          <code className="text-sm bg-slate-100 px-2 py-1 rounded">{size.name}</code>
                        </td>
                        <td className="py-4 px-4">
                          <Button size={size.name as any}>
                            {size.name === "icon" ? <Plus className="h-4 w-4" /> : "Button"}
                          </Button>
                        </td>
                        <td className="py-4 px-4 font-mono text-sm">{size.height}</td>
                        <td className="py-4 px-4 font-mono text-sm">{size.padding}</td>
                        <td className="py-4 px-4 font-mono text-sm">{size.fontSize}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
```

---

## Line-by-Line Specification

### Lines 493-503: Variants Card Header

```tsx
<Card className="mb-12">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Palette className="h-5 w-5" />
      All Variants
    </CardTitle>
    <CardDescription>
      Visual overview of all available button styles
    </CardDescription>
  </CardHeader>
```

| Element | Purpose |
|---------|---------|
| Palette icon | Represents style/visual options |
| Clear title | Identifies section purpose |
| Description | Explains what user will see |

---

### Lines 505-525: Variants Grid

```tsx
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {buttonVariants.map((variant) => (
    <div 
      key={variant.name}
      className="p-6 border rounded-lg bg-gradient-to-br from-slate-50 to-white"
    >
      <div className="mb-4">
        <Button variant={variant.name as any}>
          {variant.name.charAt(0).toUpperCase() + variant.name.slice(1)}
        </Button>
      </div>
      <div className="space-y-1">
        <p className="font-medium text-sm">{variant.name}</p>
        <p className="text-xs text-muted-foreground">{variant.description}</p>
        <p className="text-xs text-slate-500 mt-2">
          <span className="font-medium">Use for:</span> {variant.usage}
        </p>
      </div>
    </div>
  ))}
</div>
```

| Element | Purpose |
|---------|---------|
| `sm:grid-cols-2 lg:grid-cols-3` | Responsive grid layout |
| Gradient background | Visual card styling |
| Capitalized label | Button displays formatted name |
| Description | Explains what the variant is |
| Usage guidance | Explains when to use it |

**Reference:** IBM Carbon - Variant documentation grid

---

### Lines 528-538: Sizes Card Header

```tsx
<Card className="mb-12">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Box className="h-5 w-5" />
      All Sizes
    </CardTitle>
    <CardDescription>
      Button sizes for different contexts and touch targets
    </CardDescription>
  </CardHeader>
```

| Element | Purpose |
|---------|---------|
| Box icon | Represents dimensions/sizing |
| Touch targets mention | Hints at accessibility consideration |

---

### Lines 540-560: Sizes Table

```tsx
<table className="w-full">
  <thead>
    <tr className="border-b">
      <th className="text-left py-3 px-4 text-sm font-medium">Size</th>
      <th className="text-left py-3 px-4 text-sm font-medium">Preview</th>
      <th className="text-left py-3 px-4 text-sm font-medium">Height</th>
      <th className="text-left py-3 px-4 text-sm font-medium">Padding</th>
      <th className="text-left py-3 px-4 text-sm font-medium">Font Size</th>
    </tr>
  </thead>
  <tbody>
    {buttonSizes.map((size) => (
      <tr key={size.name} className="border-b last:border-0">
        <td className="py-4 px-4">
          <code className="text-sm bg-slate-100 px-2 py-1 rounded">{size.name}</code>
        </td>
        <td className="py-4 px-4">
          <Button size={size.name as any}>
            {size.name === "icon" ? <Plus className="h-4 w-4" /> : "Button"}
          </Button>
        </td>
        <td className="py-4 px-4 font-mono text-sm">{size.height}</td>
        <td className="py-4 px-4 font-mono text-sm">{size.padding}</td>
        <td className="py-4 px-4 font-mono text-sm">{size.fontSize}</td>
      </tr>
    ))}
  </tbody>
</table>
```

| Column | Content |
|--------|---------|
| Size | Code-formatted size name |
| Preview | Live button preview |
| Height | Pixel height value |
| Padding | Horizontal padding value |
| Font Size | Text size value |

**Note:** Icon size shows Plus icon instead of text label.

**Reference:** 
- Fitts's Law - Touch target sizes (minimum 44px)
- Material Design - Size specifications table format

---

## Design Rationale

### Why Grid for Variants?

- Visual comparison at a glance
- Each variant gets equal space
- Can see all options without scrolling

### Why Table for Sizes?

- Precise specification values
- Easy comparison of dimensions
- Developer reference format

---

## Verification Checklist

- [ ] Variants section shows all 6 variants
- [ ] Each variant card shows: button preview, name, description, usage
- [ ] Sizes section shows all 4 sizes
- [ ] Table has 5 columns: Size, Preview, Height, Padding, Font Size
- [ ] Icon size shows Plus icon instead of text

---

**Next Section:** [PROPS-TABLE.md](./PROPS-TABLE.md)


