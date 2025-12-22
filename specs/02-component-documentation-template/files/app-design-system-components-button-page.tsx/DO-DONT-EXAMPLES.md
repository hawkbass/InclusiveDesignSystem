# DO-DONT-EXAMPLES.md - Usage Guidelines

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/components/button/page.tsx` |
| **This Section** | Lines 421-490 |
| **Previous Section** | [LIVE-PREVIEW.md](./LIVE-PREVIEW.md) |
| **Next Section** | [VARIANT-SHOWCASE.md](./VARIANT-SHOWCASE.md) |

---

## Code Block

```tsx

          {/* Do/Don't Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Do */}
            <Card className="border-green-200">
              <CardHeader className="bg-green-50 border-b border-green-100">
                <CardTitle className="text-lg flex items-center gap-2 text-green-800">
                  <Check className="h-5 w-5" />
                  Do
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  {doExamples.map((example, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm text-muted-foreground">{example}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Visual Example */}
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
                  <p className="text-xs text-green-700 mb-3 font-medium">Example</p>
                  <div className="flex gap-3">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save changes</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Don't */}
            <Card className="border-red-200">
              <CardHeader className="bg-red-50 border-b border-red-100">
                <CardTitle className="text-lg flex items-center gap-2 text-red-800">
                  <X className="h-5 w-5" />
                  Don't
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  {dontExamples.map((example, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="h-3 w-3 text-red-600" />
                      </div>
                      <span className="text-sm text-muted-foreground">{example}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Visual Example */}
                <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-100">
                  <p className="text-xs text-red-700 mb-3 font-medium">Example</p>
                  <div className="flex gap-3">
                    <Button>Submit</Button>
                    <Button>Click here</Button>
                    <Button>OK</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
```

---

## Line-by-Line Specification

### Lines 423-424: Grid Layout

```tsx
<div className="grid md:grid-cols-2 gap-6 mb-12">
```

| Class | Purpose |
|-------|---------|
| `grid md:grid-cols-2` | Two-column layout on medium+ screens |
| `gap-6` | 24px gap between cards |
| `mb-12` | 48px margin below section |

**Reference:** Atlassian Design System - Do/Don't pattern

---

### Lines 426-452: Do Card

```tsx
<Card className="border-green-200">
  <CardHeader className="bg-green-50 border-b border-green-100">
    <CardTitle className="text-lg flex items-center gap-2 text-green-800">
      <Check className="h-5 w-5" />
      Do
    </CardTitle>
  </CardHeader>
  <CardContent className="pt-4">
    <ul className="space-y-3">
      {doExamples.map((example, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Check className="h-3 w-3 text-green-600" />
          </div>
          <span className="text-sm text-muted-foreground">{example}</span>
        </li>
      ))}
    </ul>
```

| Element | Purpose |
|---------|---------|
| Green border | Visual indicator for positive examples |
| Green header | Section identification |
| Check icons | Positive reinforcement |
| List format | Scannable content |

**Reference:** 
- Atlassian - "Do/Don't" documentation pattern
- IBM Carbon - Usage guidelines format

---

### Lines 445-452: Visual Do Example

```tsx
<div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
  <p className="text-xs text-green-700 mb-3 font-medium">Example</p>
  <div className="flex gap-3">
    <Button variant="outline">Cancel</Button>
    <Button>Save changes</Button>
  </div>
</div>
```

| Element | Purpose |
|---------|---------|
| Light green background | Visual container for example |
| Cancel + Save | Proper button pairing (secondary + primary) |
| Clear labels | Action-oriented text ("Save changes") |

**Why this example:**
- Shows correct primary/secondary pairing
- Uses clear, action-oriented labels
- Primary action on the right (dialog convention)

---

### Lines 455-490: Don't Card

```tsx
<Card className="border-red-200">
  <CardHeader className="bg-red-50 border-b border-red-100">
    <CardTitle className="text-lg flex items-center gap-2 text-red-800">
      <X className="h-5 w-5" />
      Don't
    </CardTitle>
  </CardHeader>
  <CardContent className="pt-4">
    <ul className="space-y-3">
      {dontExamples.map((example, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <X className="h-3 w-3 text-red-600" />
          </div>
          <span className="text-sm text-muted-foreground">{example}</span>
        </li>
      ))}
    </ul>
```

| Element | Purpose |
|---------|---------|
| Red border | Visual indicator for negative examples |
| Red header | Section identification |
| X icons | Negative reinforcement |

---

### Lines 480-488: Visual Don't Example

```tsx
<div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-100">
  <p className="text-xs text-red-700 mb-3 font-medium">Example</p>
  <div className="flex gap-3">
    <Button>Submit</Button>
    <Button>Click here</Button>
    <Button>OK</Button>
  </div>
</div>
```

| Element | Purpose |
|---------|---------|
| Light red background | Visual container for anti-example |
| Multiple primary buttons | Shows the anti-pattern |
| Vague labels | "Click here", "OK" are bad examples |

**Why this example:**
- Shows multiple primary buttons (visual competition)
- Uses vague, non-descriptive labels
- Demonstrates what NOT to do

---

## Design Rationale

### Color Choices

| Color | Meaning | Usage |
|-------|---------|-------|
| Green | Success/Positive | Do examples |
| Red | Error/Negative | Don't examples |

**Reference:** Universal color associations - Nielsen Norman Group

### Layout Rationale

Side-by-side comparison enables:
1. Immediate visual contrast
2. Pattern recognition
3. Easy memory retention

**Reference:** Comparison tables - "Don't Make Me Think" by Steve Krug

---

## Verification Checklist

- [ ] Two cards side by side on desktop
- [ ] Do card has green styling
- [ ] Don't card has red styling
- [ ] All doExamples items rendered
- [ ] All dontExamples items rendered
- [ ] Visual example in Do card shows correct pattern
- [ ] Visual example in Don't card shows anti-pattern

---

**Next Section:** [VARIANT-SHOWCASE.md](./VARIANT-SHOWCASE.md)


