# SEARCH-NAVIGATION.md - Search Bar and Tab Navigation

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/tokens/page.tsx` |
| **This Section** | Lines 550-602 |
| **Previous Section** | [HERO-HEADER.md](./HERO-HEADER.md) |
| **Next Section** | [TAB-ARCHITECTURE.md](./TAB-ARCHITECTURE.md) |

---

## Prerequisites

- [HERO-HEADER.md](./HERO-HEADER.md) must be completed first
- The header closing tag is NOT included here - it was in the previous section

---

## Code Block

Copy this code EXACTLY. Place it directly after the header closing tag (`</header>`).

```tsx

          {/* Search & Navigation */}
          <section className="px-6 lg:px-12 py-6 border-b border-border/50 bg-card/30">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                {/* Search */}
                <div className="relative w-full lg:w-96">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search tokens (e.g., fuchsia, spacing, button)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-card/50 border-border/50"
                  />
                </div>

                {/* Tab Navigation */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full lg:w-auto">
                  <TabsList className="bg-card/50 border border-border/50">
                    <TabsTrigger value="architecture" className="data-[state=active]:bg-primary/20">
                      <Layers className="h-4 w-4 mr-2" />
                      Architecture
                    </TabsTrigger>
                    <TabsTrigger value="colours" className="data-[state=active]:bg-primary/20">
                      <Palette className="h-4 w-4 mr-2" />
                      Colours
                    </TabsTrigger>
                    <TabsTrigger value="spacing" className="data-[state=active]:bg-primary/20">
                      <Grid3X3 className="h-4 w-4 mr-2" />
                      Spacing
                    </TabsTrigger>
                    <TabsTrigger value="typography" className="data-[state=active]:bg-primary/20">
                      <Type className="h-4 w-4 mr-2" />
                      Typography
                    </TabsTrigger>
                    <TabsTrigger value="components" className="data-[state=active]:bg-primary/20">
                      <Box className="h-4 w-4 mr-2" />
                      Components
                    </TabsTrigger>
                    <TabsTrigger value="playground" className="data-[state=active]:bg-primary/20">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Playground
                    </TabsTrigger>
                    <TabsTrigger value="export" className="data-[state=active]:bg-primary/20">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <div className="px-6 lg:px-12 py-8">
            <div className="max-w-7xl mx-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
```

---

## Line-by-Line Specification

### Lines 550-553: Section Container

```tsx
          {/* Search & Navigation */}
          <section className="px-6 lg:px-12 py-6 border-b border-border/50 bg-card/30">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Creates a sticky navigation bar below the hero |
| **Why this approach** | Search and tabs should be easily accessible |
| **Reference** | Dashboard navigation patterns |

**Class Breakdown:**

| Class | Effect |
|-------|--------|
| `px-6 lg:px-12` | Horizontal padding (more on large screens) |
| `py-6` | Vertical padding |
| `border-b border-border/50` | Bottom border at 50% opacity |
| `bg-card/30` | Subtle background tint |
| `max-w-7xl mx-auto` | Constrain width, centre content |
| `flex flex-col lg:flex-row` | Stack on mobile, side-by-side on desktop |

---

### Lines 554-562: Search Input with Icon

```tsx
                {/* Search */}
                <div className="relative w-full lg:w-96">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search tokens (e.g., fuchsia, spacing, button)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-card/50 border-border/50"
                  />
                </div>
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Creates a search input with an icon inside |
| **Why this approach** | Icon indicates purpose; placeholder shows examples |
| **Reference** | Shopify Polaris - Token search functionality |

**Component Breakdown:**

| Element | Purpose |
|---------|---------|
| `relative` container | Enables absolute positioning of icon |
| `Search` icon | Visual indicator (absolute positioned left) |
| `Input` | The actual text input field |
| `pl-10` | Left padding for the icon space |

**Icon Positioning Explained:**

```tsx
className="absolute left-3 top-1/2 -translate-y-1/2"
```

| Class | Effect |
|-------|--------|
| `absolute` | Remove from flow, position relative to parent |
| `left-3` | 12px from left edge |
| `top-1/2` | Vertically centre (50% from top) |
| `-translate-y-1/2` | Shift up by half icon height (true centre) |

**Controlled Input Pattern:**

```tsx
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
```

- `value` - Input displays the current state value
- `onChange` - Updates state when user types
- This is a "controlled component" - React controls the input value

---

### Lines 564-598: Tab Navigation

```tsx
                {/* Tab Navigation */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full lg:w-auto">
                  <TabsList className="bg-card/50 border border-border/50">
                    <TabsTrigger value="architecture" className="data-[state=active]:bg-primary/20">
                      <Layers className="h-4 w-4 mr-2" />
                      Architecture
                    </TabsTrigger>
                    {/* ... 6 more tabs */}
                  </TabsList>
                </Tabs>
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Creates 7 tabs for navigating between content sections |
| **Why this approach** | Tabs organize content without page navigation |
| **Reference** | Miller's Law - Chunking content into manageable sections |

**Tab Reference Table:**

| Tab Value | Icon | Label | Content |
|-----------|------|-------|---------|
| `architecture` | Layers | Architecture | Three-tier system explanation |
| `colours` | Palette | Colours | All colour tokens |
| `spacing` | Grid3X3 | Spacing | All spacing tokens |
| `typography` | Type | Typography | Font tokens |
| `components` | Box | Components | Component-specific tokens |
| `playground` | Sparkles | Playground | Interactive editor |
| `export` | Download | Export | Download options |

**Active State Styling:**

```tsx
className="data-[state=active]:bg-primary/20"
```

This uses Tailwind's data attribute selector:
- When tab state is "active", apply `bg-primary/20`
- Creates a subtle highlight on the selected tab

**Controlled Tabs Pattern:**

```tsx
<Tabs value={activeTab} onValueChange={setActiveTab}>
```

- `value` - Which tab is currently active
- `onValueChange` - Function called when user clicks a different tab
- This syncs the tabs with our state variable

---

### Lines 600-602: Main Content Area Start

```tsx
          {/* Main Content */}
          <div className="px-6 lg:px-12 py-8">
            <div className="max-w-7xl mx-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Starts the main content area where tab content will appear |
| **Why this approach** | Separates navigation from content |
| **Reference** | Standard layout pattern |

**Why Two Tabs Components?**

1. **First Tabs (in navigation)** - Contains `TabsList` with the clickable tabs
2. **Second Tabs (in content)** - Contains `TabsContent` panels

Both are controlled by the same `activeTab` state, keeping them in sync.

---

## Verification Checklist

After copying this code:

- [ ] Search section has `relative` container with `absolute` Search icon
- [ ] Input has `value={searchQuery}` and `onChange` handler
- [ ] Input has `pl-10` for icon space
- [ ] Tabs component has `value={activeTab}` and `onValueChange={setActiveTab}`
- [ ] All 7 TabsTriggers have unique `value` props
- [ ] Each TabsTrigger has an icon and label
- [ ] Active state class is `data-[state=active]:bg-primary/20`
- [ ] Main content div opens another Tabs component

---

## Common Mistakes

| Mistake | How to Avoid |
|---------|--------------|
| Forgetting to connect Tabs to state | Both Tabs must use `value={activeTab}` |
| Missing icon imports | All 7 icons must be imported |
| Wrong tab value spelling | Values must exactly match between navigation and content |
| Missing pl-10 on Input | Icon will overlap text |

---

## Tab Value Reference

These values MUST match exactly in both Tabs components:

```
"architecture" - default tab
"colours" - note UK spelling
"spacing"
"typography"
"components"
"playground"
"export"
```

---

**Next Section:** [TAB-ARCHITECTURE.md](./TAB-ARCHITECTURE.md)


