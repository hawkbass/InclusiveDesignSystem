# PROPS-CONTROLS.md - Dynamic Property Controls Panel

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/playground/page.tsx` |
| **This Section** | Lines 451-550 |
| **Previous Section** | [PREVIEW-PANEL.md](./PREVIEW-PANEL.md) |
| **Next Section** | [CODE-OUTPUT.md](./CODE-OUTPUT.md) |

---

## Code Block

```tsx

            {/* Properties Panel */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Properties
                </CardTitle>
                <CardDescription>
                  Adjust component props to see changes in real-time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {currentComponent.props.map((prop) => (
                    <div key={prop.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor={prop.name} className="font-medium">
                          {prop.name}
                        </Label>
                        <span className="text-xs text-muted-foreground">
                          {prop.type}
                        </span>
                      </div>
                      
                      {/* Select Control */}
                      {prop.type === "select" && (
                        <Select
                          value={propValues[prop.name]}
                          onValueChange={(value) => handlePropChange(prop.name, value)}
                        >
                          <SelectTrigger id={prop.name}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {prop.options?.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                      
                      {/* Boolean Control */}
                      {prop.type === "boolean" && (
                        <div className="flex items-center gap-3">
                          <Switch
                            id={prop.name}
                            checked={propValues[prop.name]}
                            onCheckedChange={(checked) => handlePropChange(prop.name, checked)}
                          />
                          <span className="text-sm text-muted-foreground">
                            {propValues[prop.name] ? "true" : "false"}
                          </span>
                        </div>
                      )}
                      
                      {/* String Control */}
                      {prop.type === "string" && (
                        <Input
                          id={prop.name}
                          value={propValues[prop.name]}
                          onChange={(e) => handlePropChange(prop.name, e.target.value)}
                          placeholder={prop.description}
                        />
                      )}
                      
                      {/* Number Control */}
                      {prop.type === "number" && (
                        <Input
                          id={prop.name}
                          type="number"
                          value={propValues[prop.name]}
                          onChange={(e) => handlePropChange(prop.name, parseInt(e.target.value, 10))}
                        />
                      )}
                      
                      {/* Description */}
                      <p className="text-xs text-muted-foreground">
                        {prop.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
```

---

## Line-by-Line Specification

### Lines 453-463: Panel Header

```tsx
<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Settings className="h-5 w-5" />
      Properties
    </CardTitle>
    <CardDescription>
      Adjust component props to see changes in real-time
    </CardDescription>
  </CardHeader>
```

| Element | Purpose |
|---------|---------|
| Settings icon | Represents configuration |
| "Properties" title | Clear label |
| Description | Explains interactivity |

---

### Lines 465-475: Props Loop and Label

```tsx
<div className="space-y-6">
  {currentComponent.props.map((prop) => (
    <div key={prop.name} className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor={prop.name} className="font-medium">
          {prop.name}
        </Label>
        <span className="text-xs text-muted-foreground">
          {prop.type}
        </span>
      </div>
```

| Element | Purpose |
|---------|---------|
| `space-y-6` | 24px between each prop |
| `space-y-2` | 8px between label and control |
| htmlFor | Accessibility association |
| Type badge | Shows prop type (select, boolean, etc.) |

---

### Lines 478-494: Select Control

```tsx
{prop.type === "select" && (
  <Select
    value={propValues[prop.name]}
    onValueChange={(value) => handlePropChange(prop.name, value)}
  >
    <SelectTrigger id={prop.name}>
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      {prop.options?.map((option) => (
        <SelectItem key={option} value={option}>
          {option}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
)}
```

| Element | Purpose |
|---------|---------|
| Conditional render | Only for select type |
| value | Current selection |
| onValueChange | Updates propValues |
| Options mapping | Renders all options |

**Used for:** variant, size, type props

---

### Lines 496-507: Boolean Control

```tsx
{prop.type === "boolean" && (
  <div className="flex items-center gap-3">
    <Switch
      id={prop.name}
      checked={propValues[prop.name]}
      onCheckedChange={(checked) => handlePropChange(prop.name, checked)}
    />
    <span className="text-sm text-muted-foreground">
      {propValues[prop.name] ? "true" : "false"}
    </span>
  </div>
)}
```

| Element | Purpose |
|---------|---------|
| Switch | Toggle for booleans |
| Text label | Shows current value (true/false) |

**Used for:** disabled props

---

### Lines 509-517: String Control

```tsx
{prop.type === "string" && (
  <Input
    id={prop.name}
    value={propValues[prop.name]}
    onChange={(e) => handlePropChange(prop.name, e.target.value)}
    placeholder={prop.description}
  />
)}
```

| Element | Purpose |
|---------|---------|
| Input | Text field for strings |
| onChange | Updates on each keystroke |
| placeholder | Shows description as hint |

**Used for:** children, placeholder, title, description, content props

---

### Lines 519-527: Number Control

```tsx
{prop.type === "number" && (
  <Input
    id={prop.name}
    type="number"
    value={propValues[prop.name]}
    onChange={(e) => handlePropChange(prop.name, parseInt(e.target.value, 10))}
  />
)}
```

| Element | Purpose |
|---------|---------|
| type="number" | HTML5 number input |
| parseInt | Converts string to number |

**Used for:** (not currently used, but ready for future props)

---

### Lines 529-532: Description

```tsx
<p className="text-xs text-muted-foreground">
  {prop.description}
</p>
```

Shows the prop description as helper text.

---

## Control Type Summary

| Type | Control | Data Type |
|------|---------|-----------|
| `select` | Select dropdown | string |
| `boolean` | Switch | boolean |
| `string` | Input | string |
| `number` | Input[type=number] | number |

---

## Design Rationale

### Form Layout

```
┌──────────────────────────────────────┐
│ variant                       select │ <- Label + type
│ [default               ▼]            │ <- Control
│ Visual style variant                 │ <- Description
├──────────────────────────────────────┤
│ disabled                     boolean │
│ [○─] false                           │
│ Disable the button                   │
├──────────────────────────────────────┤
│ children                      string │
│ [Click me                   ]        │
│ Button text content                  │
└──────────────────────────────────────┘
```

**Reference:** 
- Storybook - Controls addon
- Radix Themes - Playground controls

---

## Verification Checklist

- [ ] Panel header has Settings icon
- [ ] Props iterate dynamically
- [ ] Label shows prop name
- [ ] Type indicator shows on right
- [ ] Select renders for select props
- [ ] Switch renders for boolean props
- [ ] Input renders for string props
- [ ] Number input renders for number props
- [ ] Description shows below each control
- [ ] All controls update propValues

---

**Next Section:** [CODE-OUTPUT.md](./CODE-OUTPUT.md)


