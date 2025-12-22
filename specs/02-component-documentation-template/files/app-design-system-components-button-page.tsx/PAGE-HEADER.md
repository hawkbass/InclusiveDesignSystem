# PAGE-HEADER.md - Component Function and Hero Section

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/components/button/page.tsx` |
| **This Section** | Lines 151-230 |
| **Previous Section** | [COMPONENT-DATA.md](./COMPONENT-DATA.md) |
| **Next Section** | [AT-A-GLANCE-SECTION.md](./AT-A-GLANCE-SECTION.md) |

---

## Code Block

```tsx

export default function ButtonDocumentation() {
  const [selectedVariant, setSelectedVariant] = useState("default")
  const [selectedSize, setSelectedSize] = useState("default")
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [buttonText, setButtonText] = useState("Click me")
  const [mounted, setMounted] = useState(false)

  // Ensure client-side rendering for interactive elements
  useState(() => {
    setMounted(true)
  })

  // Handle code copy
  const handleCopyCode = (codeKey: string, code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(codeKey)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <UnifiedSidebar />
      
      <main className="flex-1 lg:ml-72">
        <div className="container max-w-6xl mx-auto px-6 py-12">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/design-system" className="hover:text-foreground transition-colors">
              Design System
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/design-system/components" className="hover:text-foreground transition-colors">
              Components
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">Button</span>
          </nav>

          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                {componentMeta.name}
              </h1>
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                {componentMeta.status}
              </Badge>
              <Badge variant="outline" className="bg-slate-50 text-slate-600 border-slate-200">
                v{componentMeta.version}
              </Badge>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {componentMeta.description}
            </p>

            {/* Quick Links */}
            <div className="flex items-center gap-4 mt-6">
              <Button variant="outline" size="sm" asChild>
                <a href={componentMeta.figmaLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View in Figma
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={componentMeta.githubLink} target="_blank" rel="noopener noreferrer">
                  <Code className="h-4 w-4 mr-2" />
                  View Source
                </a>
              </Button>
            </div>
          </div>
```

---

## Line-by-Line Specification

### Lines 151-159: Function Declaration and State

```tsx
export default function ButtonDocumentation() {
  const [selectedVariant, setSelectedVariant] = useState("default")
  const [selectedSize, setSelectedSize] = useState("default")
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [buttonText, setButtonText] = useState("Click me")
  const [mounted, setMounted] = useState(false)
```

| State Variable | Purpose |
|----------------|---------|
| `selectedVariant` | Currently selected button variant in preview |
| `selectedSize` | Currently selected button size in preview |
| `copiedCode` | Tracks which code block was copied |
| `isLoading` | Toggle loading state in preview |
| `isDisabled` | Toggle disabled state in preview |
| `buttonText` | Editable button text in preview |
| `mounted` | Client-side mount check |

---

### Lines 161-164: Mount Effect

```tsx
useState(() => {
  setMounted(true)
})
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Ensures component is mounted on client |
| **Why this approach** | Prevents hydration mismatch with interactive elements |

---

### Lines 166-171: Copy Code Handler

```tsx
const handleCopyCode = (codeKey: string, code: string) => {
  navigator.clipboard.writeText(code)
  setCopiedCode(codeKey)
  setTimeout(() => setCopiedCode(null), 2000)
}
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Copies code to clipboard, shows feedback for 2 seconds |
| **Why 2 seconds** | Refactoring UI - Feedback duration principle |

---

### Lines 173-175: Early Return

```tsx
if (!mounted) {
  return null
}
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Returns nothing until client-side mount |
| **Why this approach** | Prevents server/client mismatch errors |

---

### Lines 177-181: Layout Container

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

---

### Lines 183-195: Breadcrumb Navigation

```tsx
<nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
  <Link href="/design-system" className="hover:text-foreground transition-colors">
    Design System
  </Link>
  <ChevronRight className="h-4 w-4" />
  // ...
</nav>
```

| Element | Purpose |
|---------|---------|
| `nav` | Semantic navigation landmark |
| `ChevronRight` | Visual separator between levels |
| `hover:text-foreground` | Interactive hover state |

**Reference:** Nielsen Norman Group - Breadcrumb navigation best practices

---

### Lines 198-214: Hero Section

```tsx
<div className="mb-12">
  <div className="flex items-center gap-4 mb-4">
    <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
      {componentMeta.name}
    </h1>
    <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
      {componentMeta.status}
    </Badge>
    <Badge variant="outline" className="bg-slate-50 text-slate-600 border-slate-200">
      v{componentMeta.version}
    </Badge>
  </div>
```

| Element | Purpose |
|---------|---------|
| `text-4xl font-bold` | Large, bold component name |
| `bg-gradient-to-r` | Gradient text for visual interest |
| Status badge | Shows stability (stable/beta/deprecated) |
| Version badge | Shows current version |

**Reference:** Atlassian Design System - Component page header pattern

---

### Lines 216-228: Quick Links

```tsx
<div className="flex items-center gap-4 mt-6">
  <Button variant="outline" size="sm" asChild>
    <a href={componentMeta.figmaLink} target="_blank" rel="noopener noreferrer">
      <ExternalLink className="h-4 w-4 mr-2" />
      View in Figma
    </a>
  </Button>
  // ...
</div>
```

| Link | Purpose |
|------|---------|
| View in Figma | Quick access to design source |
| View Source | Quick access to code source |

**Reference:** IBM Carbon - Component page quick links

---

## Verification Checklist

- [ ] Function exports as default
- [ ] All 8 state variables are declared
- [ ] Copy handler works with 2-second timeout
- [ ] Breadcrumb has 3 levels
- [ ] Hero shows component name, status, version
- [ ] Quick links to Figma and GitHub

---

**Next Section:** [AT-A-GLANCE-SECTION.md](./AT-A-GLANCE-SECTION.md)


