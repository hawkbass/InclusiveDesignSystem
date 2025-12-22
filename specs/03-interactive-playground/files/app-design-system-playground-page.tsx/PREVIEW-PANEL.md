# PREVIEW-PANEL.md - Live Component Preview Area

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/playground/page.tsx` |
| **This Section** | Lines 351-450 |
| **Previous Section** | [HEADER-CONTROLS.md](./HEADER-CONTROLS.md) |
| **Next Section** | [PROPS-CONTROLS.md](./PROPS-CONTROLS.md) |

---

## Code Block

```tsx

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Preview Panel */}
            <Card className="lg:col-span-2">
              <CardHeader className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Live Preview
                  </CardTitle>
                  <Badge variant="outline" className="bg-white/10 text-white border-white/20">
                    {viewport.charAt(0).toUpperCase() + viewport.slice(1)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {/* Viewport Container */}
                <div className="flex justify-center p-8 bg-slate-50 min-h-[300px]">
                  <div
                    className="bg-white border rounded-lg shadow-sm flex items-center justify-center p-8 transition-all duration-300"
                    style={{
                      width: typeof getViewportWidth() === "number" 
                        ? `${getViewportWidth()}px` 
                        : getViewportWidth(),
                      maxWidth: "100%",
                    }}
                  >
                    {/* Render Component Based on Selection */}
                    {selectedComponent === "Button" && (
                      <Button
                        variant={propValues.variant}
                        size={propValues.size}
                        disabled={propValues.disabled}
                      >
                        {propValues.children}
                      </Button>
                    )}
                    
                    {selectedComponent === "Input" && (
                      <Input
                        type={propValues.type}
                        placeholder={propValues.placeholder}
                        disabled={propValues.disabled}
                        className="max-w-xs"
                      />
                    )}
                    
                    {selectedComponent === "Badge" && (
                      <Badge variant={propValues.variant}>
                        {propValues.children}
                      </Badge>
                    )}
                    
                    {selectedComponent === "Alert" && (
                      <Alert variant={propValues.variant} className="max-w-md">
                        <AlertTitle>{propValues.title}</AlertTitle>
                        <AlertDescription>{propValues.description}</AlertDescription>
                      </Alert>
                    )}
                    
                    {selectedComponent === "Card" && (
                      <Card className="w-full max-w-sm">
                        <CardHeader>
                          <CardTitle>{propValues.title}</CardTitle>
                          <CardDescription>{propValues.description}</CardDescription>
                        </CardHeader>
                        <CardContent>{propValues.content}</CardContent>
                      </Card>
                    )}
                  </div>
                </div>
                
                {/* Viewport Dimensions */}
                <div className="px-4 py-2 bg-slate-100 border-t text-center text-sm text-muted-foreground">
                  {typeof getViewportWidth() === "number" 
                    ? `${getViewportWidth()}px wide`
                    : "Full width"
                  }
                </div>
              </CardContent>
            </Card>
```

---

## Line-by-Line Specification

### Lines 353-355: Grid Layout

```tsx
<div className="grid lg:grid-cols-2 gap-6">
  {/* Preview Panel */}
  <Card className="lg:col-span-2">
```

| Class | Purpose |
|-------|---------|
| `grid lg:grid-cols-2` | Two columns on large screens |
| `gap-6` | 24px gap between panels |
| `lg:col-span-2` | Preview spans full width |

---

### Lines 356-368: Card Header

```tsx
<CardHeader className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-t-lg">
  <div className="flex items-center justify-between">
    <CardTitle className="flex items-center gap-2">
      <Eye className="h-5 w-5" />
      Live Preview
    </CardTitle>
    <Badge variant="outline" className="bg-white/10 text-white border-white/20">
      {viewport.charAt(0).toUpperCase() + viewport.slice(1)}
    </Badge>
  </div>
</CardHeader>
```

| Element | Purpose |
|---------|---------|
| Dark gradient | Visual emphasis for preview |
| Eye icon | Indicates preview functionality |
| Viewport badge | Shows current viewport |

---

### Lines 370-385: Viewport Container

```tsx
<div className="flex justify-center p-8 bg-slate-50 min-h-[300px]">
  <div
    className="bg-white border rounded-lg shadow-sm flex items-center justify-center p-8 transition-all duration-300"
    style={{
      width: typeof getViewportWidth() === "number" 
        ? `${getViewportWidth()}px` 
        : getViewportWidth(),
      maxWidth: "100%",
    }}
  >
```

| Style | Purpose |
|-------|---------|
| `flex justify-center` | Centers the viewport frame |
| `bg-slate-50` | Subtle background |
| `min-h-[300px]` | Minimum preview height |
| Dynamic width | Matches viewport selection |
| `transition-all` | Smooth resize animation |
| `maxWidth: 100%` | Prevents overflow |

---

### Lines 387-397: Button Preview

```tsx
{selectedComponent === "Button" && (
  <Button
    variant={propValues.variant}
    size={propValues.size}
    disabled={propValues.disabled}
  >
    {propValues.children}
  </Button>
)}
```

| Prop | Source |
|------|--------|
| variant | propValues.variant |
| size | propValues.size |
| disabled | propValues.disabled |
| children | propValues.children |

---

### Lines 399-407: Input Preview

```tsx
{selectedComponent === "Input" && (
  <Input
    type={propValues.type}
    placeholder={propValues.placeholder}
    disabled={propValues.disabled}
    className="max-w-xs"
  />
)}
```

| Note | Explanation |
|------|-------------|
| `max-w-xs` | Constrains width for preview |

---

### Lines 409-414: Badge Preview

```tsx
{selectedComponent === "Badge" && (
  <Badge variant={propValues.variant}>
    {propValues.children}
  </Badge>
)}
```

Simple badge with variant and children.

---

### Lines 416-423: Alert Preview

```tsx
{selectedComponent === "Alert" && (
  <Alert variant={propValues.variant} className="max-w-md">
    <AlertTitle>{propValues.title}</AlertTitle>
    <AlertDescription>{propValues.description}</AlertDescription>
  </Alert>
)}
```

| Note | Explanation |
|------|-------------|
| `max-w-md` | Reasonable alert width |
| AlertTitle | From propValues.title |
| AlertDescription | From propValues.description |

---

### Lines 425-434: Card Preview

```tsx
{selectedComponent === "Card" && (
  <Card className="w-full max-w-sm">
    <CardHeader>
      <CardTitle>{propValues.title}</CardTitle>
      <CardDescription>{propValues.description}</CardDescription>
    </CardHeader>
    <CardContent>{propValues.content}</CardContent>
  </Card>
)}
```

| Note | Explanation |
|------|-------------|
| `w-full max-w-sm` | Fills width up to small max |
| Structured content | Uses Card subcomponents |

---

### Lines 438-445: Viewport Dimensions Display

```tsx
<div className="px-4 py-2 bg-slate-100 border-t text-center text-sm text-muted-foreground">
  {typeof getViewportWidth() === "number" 
    ? `${getViewportWidth()}px wide`
    : "Full width"
  }
</div>
```

| Aspect | Explanation |
|--------|-------------|
| **Purpose** | Shows current viewport size |
| **Conditional** | "375px wide" or "Full width" |

---

## Design Rationale

### Preview Container Structure

```
┌─────────────────────────────────────────────┐
│  [Eye] Live Preview              [Viewport] │ <- Dark header
├─────────────────────────────────────────────┤
│                                             │
│     ┌─────────────────────────┐             │ <- bg-slate-50
│     │                         │             │
│     │    [ Component ]        │             │ <- White frame
│     │                         │             │
│     └─────────────────────────┘             │
│                                             │
├─────────────────────────────────────────────┤
│              375px wide                     │ <- Dimensions
└─────────────────────────────────────────────┘
```

**Reference:** Storybook - Canvas/preview pattern

---

## Verification Checklist

- [ ] Preview panel spans full width
- [ ] Dark header with Eye icon
- [ ] Viewport badge shows current size
- [ ] Container centers the preview frame
- [ ] Frame resizes with viewport selection
- [ ] All 5 components render correctly
- [ ] Dimensions display at bottom
- [ ] Smooth transition on viewport change

---

**Next Section:** [PROPS-CONTROLS.md](./PROPS-CONTROLS.md)


