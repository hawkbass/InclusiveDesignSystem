# HEADER-SECTION.md - Hero and Category Navigation

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/patterns/page.tsx` |
| **This Section** | Lines 151-220 |
| **Previous Section** | [PATTERN-DATA.md](./PATTERN-DATA.md) |
| **Next Section** | [PATTERN-GRID.md](./PATTERN-GRID.md) |

---

## Code Block

```tsx

export default function PatternsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Filter patterns based on search and category
  const filteredPatterns = useMemo(() => {
    return patterns.filter((pattern) => {
      const matchesSearch =
        pattern.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pattern.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory =
        selectedCategory === "all" || pattern.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

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
            <span className="text-foreground font-medium">Patterns</span>
          </nav>

          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-4">
              UX Pattern Library
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Proven solutions for common interface challenges. Each pattern includes examples, code, and best practices.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search patterns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
            <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-slate-900 data-[state=active]:text-white px-4 py-2 rounded-full border"
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {category.label}
                  </TabsTrigger>
                )
              })}
            </TabsList>
          </Tabs>

          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {filteredPatterns.length} pattern{filteredPatterns.length !== 1 ? "s" : ""}
            </p>
          </div>
```

---

## Line-by-Line Specification

### Lines 153-166: State and Filtering

```tsx
const [searchQuery, setSearchQuery] = useState("")
const [selectedCategory, setSelectedCategory] = useState("all")

const filteredPatterns = useMemo(() => {
  return patterns.filter((pattern) => {
    const matchesSearch =
      pattern.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pattern.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" || pattern.category === selectedCategory
    return matchesSearch && matchesCategory
  })
}, [searchQuery, selectedCategory])
```

| State | Purpose |
|-------|---------|
| `searchQuery` | Text filter |
| `selectedCategory` | Category filter |
| `filteredPatterns` | Computed filtered list |

**Filtering logic:**
1. Match name OR description (case-insensitive)
2. Match category OR "all"
3. Both must be true

---

### Lines 168-176: Layout Container

```tsx
return (
  <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
    <UnifiedSidebar />
    
    <main className="flex-1 lg:ml-72">
      <div className="container max-w-6xl mx-auto px-6 py-12">
```

Standard layout matching other design system pages.

---

### Lines 178-186: Breadcrumb

```tsx
<nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
  <Link href="/design-system" className="hover:text-foreground transition-colors">
    Design System
  </Link>
  <ChevronRight className="h-4 w-4" />
  <span className="text-foreground font-medium">Patterns</span>
</nav>
```

Two-level breadcrumb: Design System → Patterns

---

### Lines 188-196: Hero Section

```tsx
<div className="mb-12">
  <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-4">
    UX Pattern Library
  </h1>
  <p className="text-xl text-muted-foreground max-w-2xl">
    Proven solutions for common interface challenges. Each pattern includes examples, code, and best practices.
  </p>
</div>
```

| Element | Purpose |
|---------|---------|
| Gradient h1 | Visual emphasis |
| Subheading | Value proposition |
| max-w-2xl | Readable line length |

---

### Lines 198-210: Search Input

```tsx
<div className="mb-8">
  <div className="relative max-w-md">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
    <Input
      type="text"
      placeholder="Search patterns..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="pl-10"
    />
  </div>
</div>
```

| Element | Purpose |
|---------|---------|
| Search icon | Visual affordance |
| `pl-10` | Padding for icon |
| max-w-md | Reasonable search width |

---

### Lines 212-228: Category Tabs

```tsx
<Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
  <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0">
    {categories.map((category) => {
      const Icon = category.icon
      return (
        <TabsTrigger
          key={category.id}
          value={category.id}
          className="data-[state=active]:bg-slate-900 data-[state=active]:text-white px-4 py-2 rounded-full border"
        >
          <Icon className="h-4 w-4 mr-2" />
          {category.label}
        </TabsTrigger>
      )
    })}
  </TabsList>
</Tabs>
```

| Element | Purpose |
|---------|---------|
| `flex flex-wrap` | Wraps on small screens |
| `rounded-full` | Pill-shaped tabs |
| `data-[state=active]` | Active state styling |
| Icons | Category identification |

---

### Lines 230-234: Results Count

```tsx
<div className="mb-6 flex items-center justify-between">
  <p className="text-sm text-muted-foreground">
    Showing {filteredPatterns.length} pattern{filteredPatterns.length !== 1 ? "s" : ""}
  </p>
</div>
```

Shows count with proper pluralization.

---

## Verification Checklist

- [ ] Two state variables defined
- [ ] Filter memoization works
- [ ] Breadcrumb shows 2 levels
- [ ] Hero has gradient title
- [ ] Search has icon and placeholder
- [ ] All 8 category tabs render
- [ ] Active tab has dark styling
- [ ] Results count updates dynamically

---

**Next Section:** [PATTERN-GRID.md](./PATTERN-GRID.md)


