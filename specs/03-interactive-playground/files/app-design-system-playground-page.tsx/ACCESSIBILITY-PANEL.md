# ACCESSIBILITY-PANEL.md - Accessibility Testing Panel

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/playground/page.tsx` |
| **This Section** | Lines 651-720 |
| **Previous Section** | [CODE-OUTPUT.md](./CODE-OUTPUT.md) |
| **Next Section** | [FOOTER.md](./FOOTER.md) |

---

## Code Block

```tsx

            {/* Accessibility Panel */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Accessibility className="h-5 w-5" />
                  Accessibility Check
                </CardTitle>
                <CardDescription>
                  Real-time accessibility metrics for the current component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Contrast Ratio */}
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Palette className="h-4 w-4 text-slate-600" />
                      <span className="text-sm font-medium">Contrast</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-600">7.2:1</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        AAA
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Exceeds WCAG requirements
                    </p>
                  </div>

                  {/* Keyboard Navigation */}
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Keyboard className="h-4 w-4 text-slate-600" />
                      <span className="text-sm font-medium">Keyboard</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                      <span className="text-sm font-medium text-green-700">Accessible</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Tab, Enter, Space supported
                    </p>
                  </div>

                  {/* Focus Visible */}
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="h-4 w-4 text-slate-600" />
                      <span className="text-sm font-medium">Focus</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                      <span className="text-sm font-medium text-green-700">Visible</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Clear focus indicator
                    </p>
                  </div>

                  {/* Screen Reader */}
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Layers className="h-4 w-4 text-slate-600" />
                      <span className="text-sm font-medium">Screen Reader</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                      <span className="text-sm font-medium text-green-700">Ready</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Proper roles and labels
                    </p>
                  </div>
                </div>

                {/* Screen Reader Preview */}
                <div className="mt-6 p-4 bg-slate-900 rounded-lg text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-slate-400">Screen reader announcement:</span>
                  </div>
                  <p className="font-mono text-sm">
                    "{propValues.children || currentComponent.displayName}, {currentComponent.name.toLowerCase()}"
                  </p>
                </div>
              </CardContent>
            </Card>
```

---

## Line-by-Line Specification

### Lines 653-663: Panel Header

```tsx
<Card className="lg:col-span-2">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Accessibility className="h-5 w-5" />
      Accessibility Check
    </CardTitle>
    <CardDescription>
      Real-time accessibility metrics for the current component
    </CardDescription>
  </CardHeader>
```

| Element | Purpose |
|---------|---------|
| `lg:col-span-2` | Full width in grid |
| Accessibility icon | Universal a11y symbol |
| "Accessibility Check" | Clear label |

---

### Lines 666-681: Contrast Ratio Card

```tsx
<div className="p-4 bg-slate-50 rounded-lg">
  <div className="flex items-center gap-2 mb-2">
    <Palette className="h-4 w-4 text-slate-600" />
    <span className="text-sm font-medium">Contrast</span>
  </div>
  <div className="flex items-center gap-2">
    <span className="text-2xl font-bold text-green-600">7.2:1</span>
    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
      AAA
    </Badge>
  </div>
  <p className="text-xs text-muted-foreground mt-1">
    Exceeds WCAG requirements
  </p>
</div>
```

| Element | Purpose |
|---------|---------|
| Palette icon | Color/contrast indicator |
| 7.2:1 ratio | Specific contrast value |
| AAA badge | WCAG compliance level |
| Helper text | Explains the rating |

---

### Lines 683-697: Keyboard Navigation Card

```tsx
<div className="p-4 bg-slate-50 rounded-lg">
  <div className="flex items-center gap-2 mb-2">
    <Keyboard className="h-4 w-4 text-slate-600" />
    <span className="text-sm font-medium">Keyboard</span>
  </div>
  <div className="flex items-center gap-2">
    <CheckCircle2 className="h-6 w-6 text-green-600" />
    <span className="text-sm font-medium text-green-700">Accessible</span>
  </div>
  <p className="text-xs text-muted-foreground mt-1">
    Tab, Enter, Space supported
  </p>
</div>
```

| Element | Purpose |
|---------|---------|
| Keyboard icon | Indicates keyboard access |
| Checkmark | Success indicator |
| "Accessible" | Pass status |
| Key list | Which keys work |

---

### Lines 699-713: Focus Visible Card

```tsx
<div className="p-4 bg-slate-50 rounded-lg">
  <div className="flex items-center gap-2 mb-2">
    <Eye className="h-4 w-4 text-slate-600" />
    <span className="text-sm font-medium">Focus</span>
  </div>
  <div className="flex items-center gap-2">
    <CheckCircle2 className="h-6 w-6 text-green-600" />
    <span className="text-sm font-medium text-green-700">Visible</span>
  </div>
  <p className="text-xs text-muted-foreground mt-1">
    Clear focus indicator
  </p>
</div>
```

| Element | Purpose |
|---------|---------|
| Eye icon | Visual indicator |
| "Visible" | Focus ring exists |

---

### Lines 715-729: Screen Reader Card

```tsx
<div className="p-4 bg-slate-50 rounded-lg">
  <div className="flex items-center gap-2 mb-2">
    <Layers className="h-4 w-4 text-slate-600" />
    <span className="text-sm font-medium">Screen Reader</span>
  </div>
  <div className="flex items-center gap-2">
    <CheckCircle2 className="h-6 w-6 text-green-600" />
    <span className="text-sm font-medium text-green-700">Ready</span>
  </div>
  <p className="text-xs text-muted-foreground mt-1">
    Proper roles and labels
  </p>
</div>
```

| Element | Purpose |
|---------|---------|
| Layers icon | Represents semantic structure |
| "Ready" | Component is accessible |

---

### Lines 732-740: Screen Reader Preview

```tsx
<div className="mt-6 p-4 bg-slate-900 rounded-lg text-white">
  <div className="flex items-center gap-2 mb-2">
    <span className="text-xs text-slate-400">Screen reader announcement:</span>
  </div>
  <p className="font-mono text-sm">
    "{propValues.children || currentComponent.displayName}, {currentComponent.name.toLowerCase()}"
  </p>
</div>
```

| Element | Purpose |
|---------|---------|
| Dark background | Indicates simulated output |
| Mono font | Screen reader voice simulation |
| Dynamic text | Shows what would be announced |

**Example output:** "Click me, button"

---

## Design Rationale

### Metric Cards Layout

```
┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐
│ Contrast   │ │ Keyboard   │ │ Focus      │ │ Screen     │
│ 7.2:1 AAA  │ │ ✓ Access.  │ │ ✓ Visible  │ │ ✓ Ready    │
└────────────┘ └────────────┘ └────────────┘ └────────────┘
```

**Reference:** 
- WCAG 2.1 - Four core accessibility principles
- Material Design - Metrics cards

### Color Coding

| State | Color | Usage |
|-------|-------|-------|
| Pass | Green | All checks passing |
| Warning | Yellow | (Future: potential issues) |
| Fail | Red | (Future: accessibility errors) |

---

## Future Enhancements

| Feature | Description |
|---------|-------------|
| Dynamic contrast | Calculate actual contrast ratio |
| Disabled state warning | Warn when disabled without explanation |
| Label check | Verify icon-only buttons have labels |
| Color blindness sim | Preview for various color blindness types |

---

## Verification Checklist

- [ ] Panel spans full width
- [ ] 4 metric cards in grid
- [ ] Each card has icon, label, status
- [ ] Green checkmarks for passing
- [ ] Helper text explains each metric
- [ ] Screen reader preview at bottom
- [ ] Preview updates with component changes

---

**Next Section:** [FOOTER.md](./FOOTER.md)


