# HEADER-CONTROLS.md - Component Selector and Viewport Controls

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/playground/page.tsx` |
| **This Section** | Lines 251-350 |
| **Previous Section** | [STATE-HANDLERS.md](./STATE-HANDLERS.md) |
| **Next Section** | [PREVIEW-PANEL.md](./PREVIEW-PANEL.md) |

---

## Code Block

```tsx

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <UnifiedSidebar />
      
      <main className="flex-1 lg:ml-72">
        <div className="container max-w-7xl mx-auto px-6 py-12">
          
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                  Component Playground
                </h1>
                <p className="text-muted-foreground mt-2">
                  Experiment with components in real-time
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" onClick={handleReset}>
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              </div>
            </div>
          </div>

          {/* Controls Bar */}
          <Card className="mb-6">
            <CardContent className="py-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Component Selector */}
                <div className="flex items-center gap-4">
                  <Label className="text-sm font-medium">Component</Label>
                  <Select value={selectedComponent} onValueChange={handleComponentChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select component" />
                    </SelectTrigger>
                    <SelectContent>
                      {componentRegistry.map((component) => (
                        <SelectItem key={component.name} value={component.name}>
                          <div className="flex items-center gap-2">
                            <span>{component.displayName}</span>
                            <Badge variant="outline" className="text-xs">
                              {component.category}
                            </Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Viewport Selector */}
                <div className="flex items-center gap-2">
                  <Label className="text-sm font-medium mr-2">Viewport</Label>
                  <div className="flex border rounded-lg overflow-hidden">
                    {viewportPresets.map((preset) => {
                      const Icon = preset.icon
                      return (
                        <button
                          key={preset.name}
                          onClick={() => setViewport(preset.name)}
                          className={`p-2 transition-colors ${
                            viewport === preset.name
                              ? "bg-slate-900 text-white"
                              : "bg-white hover:bg-slate-100 text-slate-600"
                          }`}
                          title={preset.label}
                        >
                          <Icon className="h-4 w-4" />
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
```

---

## Line-by-Line Specification

### Lines 253-257: Layout Container

```tsx
return (
  <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
    <UnifiedSidebar />
    
    <main className="flex-1 lg:ml-72">
```

| Class | Purpose |
|-------|---------|
| `flex min-h-screen` | Full-height flex layout |
| `bg-gradient-to-br` | Subtle background gradient |
| `lg:ml-72` | Sidebar offset on large screens |
| `max-w-7xl` | Wider container for playground |

---

### Lines 260-278: Page Header

```tsx
<div className="mb-8">
  <div className="flex items-center justify-between mb-4">
    <div>
      <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
        Component Playground
      </h1>
      <p className="text-muted-foreground mt-2">
        Experiment with components in real-time
      </p>
    </div>
    
    <div className="flex items-center gap-3">
      <Button variant="outline" size="sm" onClick={handleReset}>
        <RotateCcw className="h-4 w-4 mr-2" />
        Reset
      </Button>
    </div>
  </div>
</div>
```

| Element | Purpose |
|---------|---------|
| Gradient h1 | Visual emphasis |
| Description | Explains page purpose |
| Reset button | Resets props to defaults |

---

### Lines 281-308: Component Selector

```tsx
<div className="flex items-center gap-4">
  <Label className="text-sm font-medium">Component</Label>
  <Select value={selectedComponent} onValueChange={handleComponentChange}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select component" />
    </SelectTrigger>
    <SelectContent>
      {componentRegistry.map((component) => (
        <SelectItem key={component.name} value={component.name}>
          <div className="flex items-center gap-2">
            <span>{component.displayName}</span>
            <Badge variant="outline" className="text-xs">
              {component.category}
            </Badge>
          </div>
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
</div>
```

| Element | Purpose |
|---------|---------|
| Select | Dropdown for component choice |
| Badge | Shows component category |
| onValueChange | Triggers handleComponentChange |

**Reference:** Radix UI - Select component pattern

---

### Lines 311-330: Viewport Selector

```tsx
<div className="flex items-center gap-2">
  <Label className="text-sm font-medium mr-2">Viewport</Label>
  <div className="flex border rounded-lg overflow-hidden">
    {viewportPresets.map((preset) => {
      const Icon = preset.icon
      return (
        <button
          key={preset.name}
          onClick={() => setViewport(preset.name)}
          className={`p-2 transition-colors ${
            viewport === preset.name
              ? "bg-slate-900 text-white"
              : "bg-white hover:bg-slate-100 text-slate-600"
          }`}
          title={preset.label}
        >
          <Icon className="h-4 w-4" />
        </button>
      )
    })}
  </div>
</div>
```

| Element | Purpose |
|---------|---------|
| Button group | Segmented control pattern |
| Icon-only buttons | Space-efficient |
| Active state | Dark background |
| title attribute | Accessible label |

**Reference:** iOS - Segmented control pattern

---

## Design Rationale

### Controls Bar Layout

```
[Component: [Select ▼]] ----------------------------------------- [📱][📱][🖥️][↔️]
```

| Section | Alignment | Reason |
|---------|-----------|--------|
| Component | Left | Primary control |
| Viewport | Right | Secondary control |

### Viewport Button Group

Connected buttons indicate related actions (mutual exclusivity).

**Reference:** 
- Apple HIG - Segmented controls
- Material Design - Button toggle group

---

## Verification Checklist

- [ ] Layout matches design system pages
- [ ] Header has gradient title
- [ ] Reset button calls handleReset
- [ ] Component selector shows all 5 components
- [ ] Each item shows category badge
- [ ] Viewport buttons show 4 presets
- [ ] Active viewport has dark styling
- [ ] All buttons have title/aria-label

---

**Next Section:** [PREVIEW-PANEL.md](./PREVIEW-PANEL.md)


