# AT-A-GLANCE-SECTION.md - Quick Overview Cards

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/components/button/page.tsx` |
| **This Section** | Lines 231-310 |
| **Previous Section** | [PAGE-HEADER.md](./PAGE-HEADER.md) |
| **Next Section** | [LIVE-PREVIEW.md](./LIVE-PREVIEW.md) |

---

## Code Block

```tsx

          {/* At-a-Glance Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* When to Use */}
            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MousePointer className="h-5 w-5 text-blue-600" />
                  When to Use
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Triggering an action (submit, save, delete)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Making a choice or selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Opening a dialog or new page</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Navigation (use Link instead)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Anatomy */}
            <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Layers className="h-5 w-5 text-purple-600" />
                  Anatomy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg">
                    <div className="w-8 h-8 rounded bg-purple-100 flex items-center justify-center text-xs font-mono text-purple-600">1</div>
                    <span className="text-muted-foreground">Container (padding, border, background)</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg">
                    <div className="w-8 h-8 rounded bg-purple-100 flex items-center justify-center text-xs font-mono text-purple-600">2</div>
                    <span className="text-muted-foreground">Label (text content)</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg">
                    <div className="w-8 h-8 rounded bg-purple-100 flex items-center justify-center text-xs font-mono text-purple-600">3</div>
                    <span className="text-muted-foreground">Icon (optional, leading/trailing)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <Card className="bg-gradient-to-br from-green-50 to-white border-green-100">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Accessibility className="h-5 w-5 text-green-600" />
                  Accessibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">WCAG Level</span>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">AAA</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Contrast Ratio</span>
                    <span className="font-mono text-green-600">7.2:1</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Focus Visible</span>
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Screen Reader</span>
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
```

---

## Line-by-Line Specification

### Lines 233-234: Grid Container

```tsx
<div className="grid md:grid-cols-3 gap-6 mb-12">
```

| Class | Purpose |
|-------|---------|
| `grid md:grid-cols-3` | Three-column grid on medium+ screens |
| `gap-6` | 24px gap between cards |
| `mb-12` | 48px margin below section |

**Reference:** Law of Proximity - Related content grouped together

---

### Lines 236-256: When to Use Card

```tsx
<Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
  <CardHeader className="pb-3">
    <CardTitle className="text-lg flex items-center gap-2">
      <MousePointer className="h-5 w-5 text-blue-600" />
      When to Use
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="space-y-2 text-sm text-muted-foreground">
      <li className="flex items-start gap-2">
        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
        <span>Triggering an action (submit, save, delete)</span>
      </li>
      // ...
    </ul>
  </CardContent>
</Card>
```

| Element | Purpose |
|---------|---------|
| Blue gradient | Visual distinction for this card type |
| Check icons | Positive use cases |
| X icons | Anti-patterns to avoid |
| List format | Easy scanning per F-pattern |

**Reference:** Atlassian - "When to use" documentation pattern

---

### Lines 259-283: Anatomy Card

```tsx
<Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
  <CardHeader className="pb-3">
    <CardTitle className="text-lg flex items-center gap-2">
      <Layers className="h-5 w-5 text-purple-600" />
      Anatomy
    </CardTitle>
  </CardHeader>
  <CardContent>
    <div className="space-y-3 text-sm">
      <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg">
        <div className="w-8 h-8 rounded bg-purple-100 flex items-center justify-center text-xs font-mono text-purple-600">1</div>
        <span className="text-muted-foreground">Container (padding, border, background)</span>
      </div>
      // ...
    </div>
  </CardContent>
</Card>
```

| Element | Purpose |
|---------|---------|
| Purple gradient | Visual distinction for anatomy |
| Numbered circles | Clear identification of parts |
| Layered visualization | Shows component structure |

**Reference:** IBM Carbon - Component anatomy diagrams

---

### Lines 286-310: Accessibility Card

```tsx
<Card className="bg-gradient-to-br from-green-50 to-white border-green-100">
  <CardHeader className="pb-3">
    <CardTitle className="text-lg flex items-center gap-2">
      <Accessibility className="h-5 w-5 text-green-600" />
      Accessibility
    </CardTitle>
  </CardHeader>
  <CardContent>
    <div className="space-y-3 text-sm">
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">WCAG Level</span>
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">AAA</Badge>
      </div>
      // ...
    </div>
  </CardContent>
</Card>
```

| Metric | Purpose |
|--------|---------|
| WCAG Level | Shows compliance level |
| Contrast Ratio | Actual measured value |
| Focus Visible | Whether focus ring is visible |
| Screen Reader | Whether component is accessible |

**Reference:** WCAG 2.1 Guidelines - Accessibility quick reference

---

## Visual Design Notes

### Color Coding

| Card | Color | Reasoning |
|------|-------|-----------|
| When to Use | Blue | Information/guidance |
| Anatomy | Purple | Structure/technical |
| Accessibility | Green | Success/compliance |

**Reference:** Color psychology in UI design - IBM Design Language

---

## Verification Checklist

- [ ] Three cards are present
- [ ] Each card has distinct gradient background
- [ ] When to Use has 4 list items (3 checks, 1 X)
- [ ] Anatomy has 3 numbered parts
- [ ] Accessibility shows 4 metrics

---

**Next Section:** [LIVE-PREVIEW.md](./LIVE-PREVIEW.md)


