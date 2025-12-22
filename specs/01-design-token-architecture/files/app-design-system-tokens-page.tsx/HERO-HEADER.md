# HERO-HEADER.md - Page Layout and Hero Section

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/tokens/page.tsx` |
| **This Section** | Lines 454-549 |
| **Previous Section** | [COMPONENT-STATE.md](./COMPONENT-STATE.md) |
| **Next Section** | [SEARCH-NAVIGATION.md](./SEARCH-NAVIGATION.md) |

---

## Prerequisites

- [COMPONENT-STATE.md](./COMPONENT-STATE.md) must be completed first
- This section begins the JSX return statement

---

## Code Block

Copy this code EXACTLY. Place it directly after the mount check (`if (!mounted) return null`).

```tsx

  return (
    <div className="flex bg-background min-h-screen">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col min-h-screen">
          {/* Hero Header */}
          <header className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background border-b border-border/50">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-blue-500/5" />
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative px-6 lg:px-12 py-12">
              <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <Link href="/design-system" className="hover:text-foreground transition-colors">Design System</Link>
                  <ChevronRight className="h-4 w-4" />
                  <span className="text-foreground">Design Tokens</span>
                </nav>

                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Stable
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      v2.1.0
                    </Badge>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      200+ tokens
                    </Badge>
                  </div>
                  
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    Design Tokens
                    <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent"> Architecture</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
                    A three-tier token system inspired by Material Design and Carbon, ensuring consistency, 
                    maintainability, and scalability across all platforms.
                  </p>

                  {/* Quick Stats */}
                  <div className="flex flex-wrap justify-center gap-8 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-fuchsia-400">89</div>
                      <div className="text-sm text-muted-foreground">Colour Tokens</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">24</div>
                      <div className="text-sm text-muted-foreground">Spacing Tokens</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">16</div>
                      <div className="text-sm text-muted-foreground">Typography Tokens</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">40+</div>
                      <div className="text-sm text-muted-foreground">Component Tokens</div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all"
                    onClick={() => setActiveTab("export")}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export Tokens
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="hover:bg-card transition-colors"
                    onClick={() => setActiveTab("playground")}
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Token Playground
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-card transition-colors">
                    <Figma className="h-4 w-4 mr-2" />
                    Figma Plugin
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-card transition-colors">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          </header>
```

---

## Line-by-Line Specification

### Lines 454-456: Return Statement and Page Container

```tsx
  return (
    <div className="flex bg-background min-h-screen">
      <UnifiedSidebar />
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Starts the JSX return with the page layout container |
| **Why this approach** | Flexbox layout with sidebar on left, content on right |
| **Reference** | Common dashboard layout pattern |

**Layout Breakdown:**

| Class | Effect |
|-------|--------|
| `flex` | Creates a flexbox container |
| `bg-background` | Uses the theme background colour |
| `min-h-screen` | At minimum, fills the full viewport height |

**UnifiedSidebar:**
- The navigation sidebar component
- Imported at the top of the file
- Provides consistent navigation across all pages

---

### Lines 458-460: Main Content Area

```tsx
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col min-h-screen">
          {/* Hero Header */}
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Creates the main content area that grows to fill available space |
| **Why this approach** | `flex-1` means "take all remaining space after sidebar" |
| **Reference** | Semantic HTML - `<main>` for primary content |

| Class | Effect |
|-------|--------|
| `flex-1` | Grow to fill remaining space |
| `overflow-auto` | Add scrollbar if content overflows |
| `flex flex-col` | Stack children vertically |

---

### Lines 461-465: Header with Background Effects

```tsx
          <header className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background border-b border-border/50">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-blue-500/5" />
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Creates a hero header with layered gradient and blur effects |
| **Why this approach** | Visual interest without heavy images; modern "glassmorphism" style |
| **Reference** | Modern UI trend - Soft lighting effects; Apple design influence |

**Layer Breakdown:**

| Layer | Class | Effect |
|-------|-------|--------|
| Base | `bg-gradient-to-br from-background via-muted/30 to-background` | Subtle diagonal gradient |
| Overlay | `bg-gradient-to-r from-primary/5 via-purple-500/5 to-blue-500/5` | Colour tint at 5% opacity |
| Orb 1 | `bg-fuchsia-500/10 rounded-full blur-3xl` | Fuchsia glow in top-left area |
| Orb 2 | `bg-purple-500/10 rounded-full blur-3xl` | Purple glow in bottom-right area |

**Why `/5` and `/10`?**
- These are opacity values (5% and 10%)
- Subtle effect that doesn't overpower content
- Creates depth without distraction

---

### Lines 467-473: Breadcrumb Navigation

```tsx
            <div className="relative px-6 lg:px-12 py-12">
              <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <Link href="/design-system" className="hover:text-foreground transition-colors">Design System</Link>
                  <ChevronRight className="h-4 w-4" />
                  <span className="text-foreground">Design Tokens</span>
                </nav>
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Shows the user where they are in the site hierarchy |
| **Why this approach** | Breadcrumbs improve navigation and orientation |
| **Reference** | "Don't Make Me Think" - Navigation principles |

**Breadcrumb Pattern:**
- Linked items (e.g., "Design System") - can click to navigate
- Current item (e.g., "Design Tokens") - not linked, highlighted
- Separator (ChevronRight) - visual divider

---

### Lines 475-488: Status Badges

```tsx
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Stable
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      v2.1.0
                    </Badge>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      200+ tokens
                    </Badge>
                  </div>
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Displays status, version, and token count at a glance |
| **Why this approach** | Quick visual indicators for important metadata |
| **Reference** | Atlassian Design System - Status indicators |

**Badge Colours:**

| Badge | Background | Text | Meaning |
|-------|------------|------|---------|
| Stable | green-500/20 | green-300 | Production ready |
| v2.1.0 | blue-500/20 | blue-300 | Version info |
| 200+ tokens | purple-500/20 | purple-300 | System scope |

---

### Lines 490-497: Page Title with Gradient Text

```tsx
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    Design Tokens
                    <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent"> Architecture</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
                    A three-tier token system inspired by Material Design and Carbon, ensuring consistency, 
                    maintainability, and scalability across all platforms.
                  </p>
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Creates the main heading with a gradient text effect |
| **Why this approach** | Gradient text draws attention to key word ("Architecture") |
| **Reference** | Modern web design trend; subtle brand expression |

**Gradient Text Technique:**

```tsx
<span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
```

| Class | Effect |
|-------|--------|
| `bg-gradient-to-r` | Right-flowing gradient |
| `from-fuchsia-400 to-purple-400` | Colour stops |
| `bg-clip-text` | Clip gradient to text shape |
| `text-transparent` | Make actual text invisible (showing gradient) |

---

### Lines 499-514: Quick Statistics

```tsx
                  {/* Quick Stats */}
                  <div className="flex flex-wrap justify-center gap-8 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-fuchsia-400">89</div>
                      <div className="text-sm text-muted-foreground">Colour Tokens</div>
                    </div>
                    {/* ... 3 more stats */}
                  </div>
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Displays key metrics about the token system |
| **Why this approach** | Dashboard pattern - key numbers at a glance |
| **Reference** | Dashboard design best practices |

**Stats Displayed:**

| Stat | Value | Colour | Category |
|------|-------|--------|----------|
| Colour Tokens | 89 | fuchsia-400 | Matches tab icon |
| Spacing Tokens | 24 | blue-400 | Matches tab icon |
| Typography Tokens | 16 | green-400 | Matches tab icon |
| Component Tokens | 40+ | purple-400 | Matches tab icon |

---

### Lines 517-545: Quick Action Buttons

```tsx
                {/* Quick Actions */}
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all"
                    onClick={() => setActiveTab("export")}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export Tokens
                  </Button>
                  {/* ... more buttons */}
                </div>
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Provides shortcut buttons for common tasks |
| **Why this approach** | Reduces clicks for frequent actions |
| **Reference** | "Don't Make Me Think" - Progressive disclosure |

**Button Hierarchy:**

| Button | Style | Purpose |
|--------|-------|---------|
| Export Tokens | Primary (gradient) | Main action - most important |
| Token Playground | Outline | Secondary action |
| Figma Plugin | Outline | External integration |
| GitHub | Outline | External link |

---

## Verification Checklist

After copying this code:

- [ ] Return statement starts with `return (`
- [ ] `<UnifiedSidebar />` is the first child of the flex container
- [ ] Header has 3 background effect divs (gradient + 2 blur orbs)
- [ ] Breadcrumb has Link, ChevronRight icon, and current page span
- [ ] Three badges: Stable (green), v2.1.0 (blue), 200+ tokens (purple)
- [ ] h1 contains gradient text span for "Architecture"
- [ ] Four stats with correct colours (fuchsia, blue, green, purple)
- [ ] Four action buttons with correct icons

---

## Common Mistakes

| Mistake | How to Avoid |
|---------|--------------|
| Missing `relative` on header | The blur orbs need `relative` parent for `absolute` positioning |
| Wrong opacity syntax | Use `fuchsia-500/10` not `fuchsia-500-10` |
| Missing button onClick handlers | Export and Playground buttons need `onClick` |

---

**Next Section:** [SEARCH-NAVIGATION.md](./SEARCH-NAVIGATION.md)


