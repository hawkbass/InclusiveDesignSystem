# COMPOSITION-PATTERNS.md - Button Composition Examples

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/components/button/page.tsx` |
| **This Section** | Lines 821-890 |
| **Previous Section** | [CODE-EXAMPLES.md](./CODE-EXAMPLES.md) |
| **Next Section** | [RELATED-COMPONENTS.md](./RELATED-COMPONENTS.md) |

---

## Code Block

```tsx

          {/* Composition Patterns */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5" />
                Composition Patterns
              </CardTitle>
              <CardDescription>
                Common button compositions and layouts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Button with Leading Icon */}
                <div className="p-6 border rounded-lg">
                  <h4 className="font-medium mb-4">Leading Icon</h4>
                  <div className="flex gap-3 mb-4">
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="outline">
                      <Plus className="mr-2 h-4 w-4" />
                      Add New
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Icon before text with 8px gap (mr-2)
                  </p>
                </div>

                {/* Button with Trailing Icon */}
                <div className="p-6 border rounded-lg">
                  <h4 className="font-medium mb-4">Trailing Icon</h4>
                  <div className="flex gap-3 mb-4">
                    <Button>
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline">
                      Learn more
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Icon after text with 8px gap (ml-2)
                  </p>
                </div>

                {/* Button Group */}
                <div className="p-6 border rounded-lg">
                  <h4 className="font-medium mb-4">Button Group</h4>
                  <div className="flex mb-4">
                    <Button variant="outline" className="rounded-r-none">
                      Left
                    </Button>
                    <Button variant="outline" className="rounded-none border-x-0">
                      Center
                    </Button>
                    <Button variant="outline" className="rounded-l-none">
                      Right
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Connected buttons sharing borders
                  </p>
                </div>

                {/* Action Bar */}
                <div className="p-6 border rounded-lg">
                  <h4 className="font-medium mb-4">Action Bar</h4>
                  <div className="flex justify-end gap-3 mb-4">
                    <Button variant="ghost">Cancel</Button>
                    <Button variant="outline">Save Draft</Button>
                    <Button>Publish</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Primary action rightmost, decreasing prominence left
                  </p>
                </div>

                {/* Split Button */}
                <div className="p-6 border rounded-lg">
                  <h4 className="font-medium mb-4">Split Button</h4>
                  <div className="flex mb-4">
                    <Button className="rounded-r-none">
                      Save
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-l-none border-l-0">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Primary action with dropdown for alternatives
                  </p>
                </div>

                {/* Full Width */}
                <div className="p-6 border rounded-lg">
                  <h4 className="font-medium mb-4">Full Width</h4>
                  <div className="mb-4">
                    <Button className="w-full">
                      Sign in with Google
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Use w-full for mobile-first or form submit buttons
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
```

---

## Line-by-Line Specification

### Lines 823-833: Card Header

```tsx
<Card className="mb-12">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Layers className="h-5 w-5" />
      Composition Patterns
    </CardTitle>
    <CardDescription>
      Common button compositions and layouts
    </CardDescription>
  </CardHeader>
```

| Element | Purpose |
|---------|---------|
| Layers icon | Represents composition/stacking |
| "Composition Patterns" | Technical but clear title |

---

### Lines 838-852: Leading Icon Pattern

```tsx
<div className="p-6 border rounded-lg">
  <h4 className="font-medium mb-4">Leading Icon</h4>
  <div className="flex gap-3 mb-4">
    <Button>
      <Download className="mr-2 h-4 w-4" />
      Download
    </Button>
    <Button variant="outline">
      <Plus className="mr-2 h-4 w-4" />
      Add New
    </Button>
  </div>
  <p className="text-xs text-muted-foreground">
    Icon before text with 8px gap (mr-2)
  </p>
</div>
```

| Element | Purpose |
|---------|---------|
| `mr-2` | 8px right margin on icon |
| Download example | Common download action |
| Add New example | Common add action |

**Reference:** Material Design - Icon button guidelines

---

### Lines 855-869: Trailing Icon Pattern

```tsx
<div className="p-6 border rounded-lg">
  <h4 className="font-medium mb-4">Trailing Icon</h4>
  <div className="flex gap-3 mb-4">
    <Button>
      Continue
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
    <Button variant="outline">
      Learn more
      <ExternalLink className="ml-2 h-4 w-4" />
    </Button>
  </div>
  <p className="text-xs text-muted-foreground">
    Icon after text with 8px gap (ml-2)
  </p>
</div>
```

| Element | Purpose |
|---------|---------|
| `ml-2` | 8px left margin on icon |
| ArrowRight | Indicates forward navigation |
| ExternalLink | Indicates opening new window |

**Reference:** Gestalt principle - Reading direction (icon follows action)

---

### Lines 872-886: Button Group Pattern

```tsx
<div className="p-6 border rounded-lg">
  <h4 className="font-medium mb-4">Button Group</h4>
  <div className="flex mb-4">
    <Button variant="outline" className="rounded-r-none">
      Left
    </Button>
    <Button variant="outline" className="rounded-none border-x-0">
      Center
    </Button>
    <Button variant="outline" className="rounded-l-none">
      Right
    </Button>
  </div>
  <p className="text-xs text-muted-foreground">
    Connected buttons sharing borders
  </p>
</div>
```

| Class | Purpose |
|-------|---------|
| `rounded-r-none` | Removes right border radius |
| `rounded-none` | Removes all border radius |
| `border-x-0` | Removes left and right borders |
| `rounded-l-none` | Removes left border radius |

**Reference:** Atlassian - Button Group component pattern

---

### Lines 889-903: Action Bar Pattern

```tsx
<div className="p-6 border rounded-lg">
  <h4 className="font-medium mb-4">Action Bar</h4>
  <div className="flex justify-end gap-3 mb-4">
    <Button variant="ghost">Cancel</Button>
    <Button variant="outline">Save Draft</Button>
    <Button>Publish</Button>
  </div>
  <p className="text-xs text-muted-foreground">
    Primary action rightmost, decreasing prominence left
  </p>
</div>
```

| Button | Variant | Purpose |
|--------|---------|---------|
| Cancel | ghost | Least prominent, safe exit |
| Save Draft | outline | Secondary action |
| Publish | default | Primary action |

**Reference:** 
- "Don't Make Me Think" - Primary action placement
- Material Design - Dialog action ordering

---

### Lines 906-920: Split Button Pattern

```tsx
<div className="flex mb-4">
  <Button className="rounded-r-none">
    Save
  </Button>
  <Button variant="outline" size="icon" className="rounded-l-none border-l-0">
    <ChevronDown className="h-4 w-4" />
  </Button>
</div>
```

| Element | Purpose |
|---------|---------|
| Main button | Default action (Save) |
| Dropdown trigger | Opens menu for alternatives |
| `border-l-0` | Removes duplicate border |

**Reference:** Microsoft Fluent - Split Button pattern

---

### Lines 923-935: Full Width Pattern

```tsx
<div className="mb-4">
  <Button className="w-full">
    Sign in with Google
  </Button>
</div>
```

| Class | Purpose |
|-------|---------|
| `w-full` | Full container width |

**When to use:**
- Mobile-first designs
- Form submit buttons
- Single-action pages (login, signup)

---

## Verification Checklist

- [ ] 6 composition patterns displayed
- [ ] Leading Icon shows mr-2 usage
- [ ] Trailing Icon shows ml-2 usage
- [ ] Button Group shows connected styling
- [ ] Action Bar shows prominence order
- [ ] Split Button shows dropdown pattern
- [ ] Full Width shows w-full usage

---

**Next Section:** [RELATED-COMPONENTS.md](./RELATED-COMPONENTS.md)


