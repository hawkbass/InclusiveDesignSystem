# PATTERN-GRID.md - Pattern Cards with Previews

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/patterns/page.tsx` |
| **This Section** | Lines 221-350 |
| **Previous Section** | [HEADER-SECTION.md](./HEADER-SECTION.md) |
| **Next Section** | [FOOTER.md](./FOOTER.md) |

---

## Code Block

```tsx

          {/* Pattern Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPatterns.map((pattern) => (
              <Link key={pattern.id} href={pattern.href}>
                <Card className="h-full hover:shadow-lg hover:border-slate-300 transition-all cursor-pointer group">
                  {/* Preview Area */}
                  <div className="h-40 bg-slate-100 rounded-t-lg overflow-hidden flex items-center justify-center p-4">
                    {pattern.preview === "empty" && (
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-slate-200 flex items-center justify-center">
                          <Inbox className="h-6 w-6 text-slate-400" />
                        </div>
                        <div className="h-2 w-24 mx-auto bg-slate-200 rounded mb-1" />
                        <div className="h-2 w-16 mx-auto bg-slate-200 rounded" />
                      </div>
                    )}
                    
                    {pattern.preview === "loading" && (
                      <div className="w-full max-w-[180px] space-y-2">
                        <div className="h-4 w-full bg-slate-200 rounded animate-pulse" />
                        <div className="h-4 w-3/4 bg-slate-200 rounded animate-pulse" />
                        <div className="h-4 w-1/2 bg-slate-200 rounded animate-pulse" />
                      </div>
                    )}
                    
                    {pattern.preview === "error" && (
                      <div className="w-full max-w-[180px]">
                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <AlertCircle className="h-4 w-4 text-red-500" />
                            <span className="text-xs font-medium text-red-700">Error</span>
                          </div>
                          <div className="h-2 w-full bg-red-100 rounded" />
                        </div>
                      </div>
                    )}
                    
                    {pattern.preview === "form" && (
                      <div className="w-full max-w-[180px] space-y-3">
                        <div className="space-y-1">
                          <div className="h-2 w-12 bg-slate-300 rounded" />
                          <div className="h-8 w-full bg-white border border-slate-200 rounded" />
                        </div>
                        <div className="space-y-1">
                          <div className="h-2 w-16 bg-slate-300 rounded" />
                          <div className="h-8 w-full bg-white border border-slate-200 rounded" />
                        </div>
                      </div>
                    )}
                    
                    {pattern.preview === "table" && (
                      <div className="w-full max-w-[180px]">
                        <div className="bg-white border border-slate-200 rounded overflow-hidden">
                          <div className="h-6 bg-slate-100 border-b border-slate-200 flex">
                            <div className="flex-1 border-r border-slate-200" />
                            <div className="flex-1 border-r border-slate-200" />
                            <div className="flex-1" />
                          </div>
                          <div className="h-5 border-b border-slate-100 flex">
                            <div className="flex-1 border-r border-slate-100" />
                            <div className="flex-1 border-r border-slate-100" />
                            <div className="flex-1" />
                          </div>
                          <div className="h-5 flex">
                            <div className="flex-1 border-r border-slate-100" />
                            <div className="flex-1 border-r border-slate-100" />
                            <div className="flex-1" />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {pattern.preview === "nav" && (
                      <div className="w-full max-w-[180px] flex items-center gap-1 text-xs text-slate-400">
                        <span className="px-2 py-1 bg-white rounded">Home</span>
                        <ChevronRight className="h-3 w-3" />
                        <span className="px-2 py-1 bg-white rounded">Products</span>
                        <ChevronRight className="h-3 w-3" />
                        <span className="px-2 py-1 bg-slate-200 rounded font-medium text-slate-600">Item</span>
                      </div>
                    )}
                    
                    {pattern.preview === "toast" && (
                      <div className="w-full max-w-[180px]">
                        <div className="p-3 bg-white border shadow-lg rounded-lg flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span className="text-xs font-medium">Success message</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Card Content */}
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {pattern.name}
                      </h3>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {pattern.description}
                    </p>
                    <Badge variant="outline" className="mt-3">
                      {categories.find(c => c.id === pattern.category)?.label}
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredPatterns.length === 0 && (
            <div className="text-center py-12">
              <FileQuestion className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No patterns found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filter criteria
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Reset Filters
              </Button>
            </div>
          )}
```

---

## Line-by-Line Specification

### Lines 223-226: Grid Container

```tsx
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredPatterns.map((pattern) => (
    <Link key={pattern.id} href={pattern.href}>
      <Card className="h-full hover:shadow-lg hover:border-slate-300 transition-all cursor-pointer group">
```

| Class | Purpose |
|-------|---------|
| `sm:grid-cols-2` | 2 columns on small screens |
| `lg:grid-cols-3` | 3 columns on large screens |
| `gap-6` | 24px gap |
| `h-full` | Equal height cards |
| `group` | Enables group-hover |

---

### Lines 228-240: Empty State Preview

```tsx
{pattern.preview === "empty" && (
  <div className="text-center">
    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-slate-200 flex items-center justify-center">
      <Inbox className="h-6 w-6 text-slate-400" />
    </div>
    <div className="h-2 w-24 mx-auto bg-slate-200 rounded mb-1" />
    <div className="h-2 w-16 mx-auto bg-slate-200 rounded" />
  </div>
)}
```

Mini visualization: Icon + skeleton text representing empty state.

---

### Lines 242-250: Loading Preview

```tsx
{pattern.preview === "loading" && (
  <div className="w-full max-w-[180px] space-y-2">
    <div className="h-4 w-full bg-slate-200 rounded animate-pulse" />
    <div className="h-4 w-3/4 bg-slate-200 rounded animate-pulse" />
    <div className="h-4 w-1/2 bg-slate-200 rounded animate-pulse" />
  </div>
)}
```

Animated skeleton bars with decreasing widths.

---

### Lines 252-264: Error Preview

```tsx
{pattern.preview === "error" && (
  <div className="w-full max-w-[180px]">
    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
      <div className="flex items-center gap-2 mb-1">
        <AlertCircle className="h-4 w-4 text-red-500" />
        <span className="text-xs font-medium text-red-700">Error</span>
      </div>
      <div className="h-2 w-full bg-red-100 rounded" />
    </div>
  </div>
)}
```

Mini error alert with red styling.

---

### Lines 266-278: Form Preview

```tsx
{pattern.preview === "form" && (
  <div className="w-full max-w-[180px] space-y-3">
    <div className="space-y-1">
      <div className="h-2 w-12 bg-slate-300 rounded" />
      <div className="h-8 w-full bg-white border border-slate-200 rounded" />
    </div>
    <div className="space-y-1">
      <div className="h-2 w-16 bg-slate-300 rounded" />
      <div className="h-8 w-full bg-white border border-slate-200 rounded" />
    </div>
  </div>
)}
```

Two form fields with labels.

---

### Lines 280-298: Table Preview

```tsx
{pattern.preview === "table" && (
  <div className="w-full max-w-[180px]">
    <div className="bg-white border border-slate-200 rounded overflow-hidden">
      <div className="h-6 bg-slate-100 border-b border-slate-200 flex">
        {/* 3 header cells */}
      </div>
      <div className="h-5 border-b border-slate-100 flex">
        {/* 3 data cells */}
      </div>
      <div className="h-5 flex">
        {/* 3 data cells */}
      </div>
    </div>
  </div>
)}
```

Mini table with header and 2 rows.

---

### Lines 300-310: Navigation Preview

```tsx
{pattern.preview === "nav" && (
  <div className="w-full max-w-[180px] flex items-center gap-1 text-xs text-slate-400">
    <span className="px-2 py-1 bg-white rounded">Home</span>
    <ChevronRight className="h-3 w-3" />
    <span className="px-2 py-1 bg-white rounded">Products</span>
    <ChevronRight className="h-3 w-3" />
    <span className="px-2 py-1 bg-slate-200 rounded font-medium text-slate-600">Item</span>
  </div>
)}
```

Mini breadcrumb with 3 levels.

---

### Lines 312-320: Toast Preview

```tsx
{pattern.preview === "toast" && (
  <div className="w-full max-w-[180px]">
    <div className="p-3 bg-white border shadow-lg rounded-lg flex items-center gap-2">
      <CheckCircle2 className="h-4 w-4 text-green-500" />
      <span className="text-xs font-medium">Success message</span>
    </div>
  </div>
)}
```

Mini toast notification.

---

### Lines 324-340: Card Content

```tsx
<CardContent className="pt-4">
  <div className="flex items-center justify-between mb-2">
    <h3 className="font-semibold group-hover:text-primary transition-colors">
      {pattern.name}
    </h3>
    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
  </div>
  <p className="text-sm text-muted-foreground">
    {pattern.description}
  </p>
  <Badge variant="outline" className="mt-3">
    {categories.find(c => c.id === pattern.category)?.label}
  </Badge>
</CardContent>
```

| Element | Purpose |
|---------|---------|
| Pattern name | Bold title |
| Arrow | Hover animation |
| Description | Pattern explanation |
| Badge | Category label |

---

### Lines 344-358: No Results State

```tsx
{filteredPatterns.length === 0 && (
  <div className="text-center py-12">
    <FileQuestion className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
    <h3 className="text-lg font-semibold mb-2">No patterns found</h3>
    <p className="text-muted-foreground mb-4">
      Try adjusting your search or filter criteria
    </p>
    <Button onClick={() => { setSearchQuery(""); setSelectedCategory("all") }}>
      <RefreshCw className="h-4 w-4 mr-2" />
      Reset Filters
    </Button>
  </div>
)}
```

Empty state when no patterns match filters.

---

## Verification Checklist

- [ ] Grid is responsive (1→2→3 columns)
- [ ] All 7 preview types render
- [ ] Cards have hover effects
- [ ] Arrow animates on hover
- [ ] Category badge shows
- [ ] No results state appears when empty
- [ ] Reset button clears filters

---

**Next Section:** [FOOTER.md](./FOOTER.md)


