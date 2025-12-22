# Part: HEADER-SECTION

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 3 of 8 |
| **Lines** | 115-171 |
| **Purpose** | Component declaration, state, header, tabs navigation |

---

## What This Code Does

1. Declares the main component function
2. Sets up state for search and copy functionality
3. Renders page header with breadcrumb
4. Sets up tabs navigation structure

---

## Code Block

```tsx

export default function ContentPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [copiedText, setCopiedText] = useState("")

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(text)
    setTimeout(() => setCopiedText(""), 2000)
  }

  return (
    <div className="flex bg-background min-h-screen">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="px-6 lg:px-12 py-12 border-b border-border/50">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/design-system">Design System</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Content</span>
            </nav>
            
            <h1 className="text-4xl font-bold text-foreground mb-4">
              UX Writing Guidelines
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Guidelines for writing clear, consistent, and helpful UI content. 
              From voice and tone to microcopy patterns.
            </p>
          </div>
        </header>

        {/* Tabs Navigation */}
        <div className="px-6 lg:px-12 py-8">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="voice" className="space-y-8">
              <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-4">
                <TabsTrigger value="voice" className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4" />
                  Voice & Tone
                </TabsTrigger>
                <TabsTrigger value="microcopy" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Microcopy
                </TabsTrigger>
                <TabsTrigger value="terminology" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Terminology
                </TabsTrigger>
                <TabsTrigger value="formatting" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  UK English
                </TabsTrigger>
              </TabsList>
```

---

## State Variables

| Variable | Type | Purpose |
|----------|------|---------|
| `searchQuery` | `string` | Filter microcopy patterns |
| `copiedText` | `string` | Track copied text for feedback |

---

## Tab Structure

| Tab | Icon | Content |
|-----|------|---------|
| Voice & Tone | Volume2 | Voice attributes |
| Microcopy | MessageSquare | Button, error, empty patterns |
| Terminology | BookOpen | Preferred terms |
| UK English | FileText | Spelling and formatting |

---

## Verification

- [ ] Component named `ContentPage` and default exported
- [ ] `handleCopy` function copies to clipboard
- [ ] 4 tabs with icons: Voice, Microcopy, Terminology, UK English
- [ ] Default tab is "voice"

---

**Next part:** `VOICE-TONE-SECTION.md`


