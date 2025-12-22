# STATE-HANDLERS.md - State Management and Code Generation

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/playground/page.tsx` |
| **This Section** | Lines 151-250 |
| **Previous Section** | [COMPONENT-REGISTRY.md](./COMPONENT-REGISTRY.md) |
| **Next Section** | [HEADER-CONTROLS.md](./HEADER-CONTROLS.md) |

---

## Code Block

```tsx

export default function PlaygroundPage() {
  // Selected component
  const [selectedComponent, setSelectedComponent] = useState<string>("Button")
  
  // Current prop values (keyed by prop name)
  const [propValues, setPropValues] = useState<Record<string, any>>(() => {
    const buttonDef = componentRegistry.find(c => c.name === "Button")!
    return buttonDef.props.reduce((acc, prop) => {
      acc[prop.name] = prop.defaultValue
      return acc
    }, {} as Record<string, any>)
  })
  
  // Viewport size
  const [viewport, setViewport] = useState<string>("full")
  
  // Get current component definition
  const currentComponent = useMemo(() => {
    return componentRegistry.find(c => c.name === selectedComponent)!
  }, [selectedComponent])
  
  // Handle component change
  const handleComponentChange = (componentName: string) => {
    setSelectedComponent(componentName)
    const componentDef = componentRegistry.find(c => c.name === componentName)!
    // Reset props to defaults for new component
    const defaults = componentDef.props.reduce((acc, prop) => {
      acc[prop.name] = prop.defaultValue
      return acc
    }, {} as Record<string, any>)
    setPropValues(defaults)
  }
  
  // Handle prop change
  const handlePropChange = (propName: string, value: any) => {
    setPropValues(prev => ({ ...prev, [propName]: value }))
  }
  
  // Reset to defaults
  const handleReset = () => {
    const defaults = currentComponent.props.reduce((acc, prop) => {
      acc[prop.name] = prop.defaultValue
      return acc
    }, {} as Record<string, any>)
    setPropValues(defaults)
  }
  
  // Generate code string
  const generatedCode = useMemo(() => {
    const { name } = currentComponent
    const propsString = Object.entries(propValues)
      .filter(([key, value]) => {
        // Skip children, handle separately
        if (key === "children") return false
        // Skip defaults
        const propDef = currentComponent.props.find(p => p.name === key)
        if (propDef && value === propDef.defaultValue) return false
        return true
      })
      .map(([key, value]) => {
        if (typeof value === "boolean") {
          return value ? key : null
        }
        if (typeof value === "string") {
          return `${key}="${value}"`
        }
        return `${key}={${JSON.stringify(value)}}`
      })
      .filter(Boolean)
      .join(" ")
    
    const children = propValues.children || propValues.title || propValues.content || ""
    const hasChildren = children && typeof children === "string"
    
    if (name === "Alert") {
      return `import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

<Alert${propsString ? ` ${propsString}` : ""}>
  <AlertTitle>${propValues.title || "Alert"}</AlertTitle>
  <AlertDescription>${propValues.description || "Description"}</AlertDescription>
</Alert>`
    }
    
    if (name === "Card") {
      return `import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>${propValues.title || "Title"}</CardTitle>
    <CardDescription>${propValues.description || "Description"}</CardDescription>
  </CardHeader>
  <CardContent>
    ${propValues.content || "Content"}
  </CardContent>
</Card>`
    }
    
    if (hasChildren) {
      return `import { ${name} } from "@/components/ui/${name.toLowerCase()}"

<${name}${propsString ? ` ${propsString}` : ""}>
  ${children}
</${name}>`
    }
    
    return `import { ${name} } from "@/components/ui/${name.toLowerCase()}"

<${name}${propsString ? ` ${propsString}` : ""} />`
  }, [currentComponent, propValues])
  
  // Get viewport width
  const getViewportWidth = () => {
    const preset = viewportPresets.find(v => v.name === viewport)
    return preset?.width || "100%"
  }
```

---

## Line-by-Line Specification

### Lines 153-156: Component Selection State

```tsx
const [selectedComponent, setSelectedComponent] = useState<string>("Button")
```

| Aspect | Value |
|--------|-------|
| Type | string |
| Default | "Button" |
| Purpose | Currently selected component name |

---

### Lines 158-165: Props State with Initializer

```tsx
const [propValues, setPropValues] = useState<Record<string, any>>(() => {
  const buttonDef = componentRegistry.find(c => c.name === "Button")!
  return buttonDef.props.reduce((acc, prop) => {
    acc[prop.name] = prop.defaultValue
    return acc
  }, {} as Record<string, any>)
})
```

| Aspect | Explanation |
|--------|-------------|
| **Lazy initializer** | Function runs once on mount |
| **Record type** | Key-value object for prop names/values |
| **Initial values** | Button's default props |

---

### Lines 167-168: Viewport State

```tsx
const [viewport, setViewport] = useState<string>("full")
```

| Aspect | Value |
|--------|-------|
| Default | "full" |
| Options | mobile, tablet, desktop, full |

---

### Lines 170-173: Current Component Memo

```tsx
const currentComponent = useMemo(() => {
  return componentRegistry.find(c => c.name === selectedComponent)!
}, [selectedComponent])
```

| Aspect | Explanation |
|--------|-------------|
| **Memoization** | Only recomputes when selection changes |
| **Non-null assertion** | Registry always has the component |

---

### Lines 175-184: Component Change Handler

```tsx
const handleComponentChange = (componentName: string) => {
  setSelectedComponent(componentName)
  const componentDef = componentRegistry.find(c => c.name === componentName)!
  const defaults = componentDef.props.reduce((acc, prop) => {
    acc[prop.name] = prop.defaultValue
    return acc
  }, {} as Record<string, any>)
  setPropValues(defaults)
}
```

| Step | Action |
|------|--------|
| 1 | Update selected component |
| 2 | Find component definition |
| 3 | Reset props to new component's defaults |

---

### Lines 186-188: Prop Change Handler

```tsx
const handlePropChange = (propName: string, value: any) => {
  setPropValues(prev => ({ ...prev, [propName]: value }))
}
```

| Aspect | Explanation |
|--------|-------------|
| **Spread operator** | Preserves other props |
| **Computed property** | Updates specific prop |

---

### Lines 190-196: Reset Handler

```tsx
const handleReset = () => {
  const defaults = currentComponent.props.reduce((acc, prop) => {
    acc[prop.name] = prop.defaultValue
    return acc
  }, {} as Record<string, any>)
  setPropValues(defaults)
}
```

| Aspect | Explanation |
|--------|-------------|
| **Purpose** | Reset all props to defaults |
| **When used** | Reset button click |

---

### Lines 198-245: Code Generation

```tsx
const generatedCode = useMemo(() => {
  const { name } = currentComponent
  const propsString = Object.entries(propValues)
    .filter(([key, value]) => {
      if (key === "children") return false
      const propDef = currentComponent.props.find(p => p.name === key)
      if (propDef && value === propDef.defaultValue) return false
      return true
    })
    .map(([key, value]) => {
      if (typeof value === "boolean") {
        return value ? key : null
      }
      if (typeof value === "string") {
        return `${key}="${value}"`
      }
      return `${key}={${JSON.stringify(value)}}`
    })
    .filter(Boolean)
    .join(" ")
  // ... component-specific formatting
}, [currentComponent, propValues])
```

| Step | Action |
|------|--------|
| 1 | Filter out children (handled separately) |
| 2 | Filter out props at default values |
| 3 | Format booleans (presence = true) |
| 4 | Format strings with quotes |
| 5 | Format other values as JSX expressions |
| 6 | Join with spaces |
| 7 | Handle Alert/Card special cases |
| 8 | Generate import + JSX |

---

### Lines 247-250: Viewport Width Helper

```tsx
const getViewportWidth = () => {
  const preset = viewportPresets.find(v => v.name === viewport)
  return preset?.width || "100%"
}
```

Returns pixel width or "100%" for full width.

---

## Verification Checklist

- [ ] 3 state variables defined
- [ ] currentComponent memoized
- [ ] handleComponentChange resets props
- [ ] handlePropChange uses spread
- [ ] handleReset returns to defaults
- [ ] generatedCode handles all 5 components
- [ ] getViewportWidth returns correct values

---

**Next Section:** [HEADER-CONTROLS.md](./HEADER-CONTROLS.md)


