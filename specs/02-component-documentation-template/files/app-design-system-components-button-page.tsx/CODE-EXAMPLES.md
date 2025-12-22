# CODE-EXAMPLES.md - Copy-Paste Code Snippets

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/components/button/page.tsx` |
| **This Section** | Lines 721-820 |
| **Previous Section** | [ACCESSIBILITY-SECTION.md](./ACCESSIBILITY-SECTION.md) |
| **Next Section** | [COMPOSITION-PATTERNS.md](./COMPOSITION-PATTERNS.md) |

---

## Code Block

```tsx

          {/* Code Examples */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Code Examples
              </CardTitle>
              <CardDescription>
                Copy-paste ready code snippets for common use cases
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {/* Basic Usage */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Basic Usage</h4>
                    <Badge variant="outline">Most common</Badge>
                  </div>
                  <div className="relative">
                    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
                      <code>{codeExamples.basic}</code>
                    </pre>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 text-slate-400 hover:text-white"
                      onClick={() => handleCopyCode("basic", codeExamples.basic)}
                    >
                      {copiedCode === "basic" ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                {/* With Variants */}
                <div className="space-y-3">
                  <h4 className="font-medium">All Variants</h4>
                  <div className="relative">
                    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
                      <code>{codeExamples.variants}</code>
                    </pre>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 text-slate-400 hover:text-white"
                      onClick={() => handleCopyCode("variants", codeExamples.variants)}
                    >
                      {copiedCode === "variants" ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                {/* With Sizes */}
                <div className="space-y-3">
                  <h4 className="font-medium">All Sizes</h4>
                  <div className="relative">
                    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
                      <code>{codeExamples.sizes}</code>
                    </pre>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 text-slate-400 hover:text-white"
                      onClick={() => handleCopyCode("sizes", codeExamples.sizes)}
                    >
                      {copiedCode === "sizes" ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                {/* With Icon */}
                <div className="space-y-3">
                  <h4 className="font-medium">Button with Icon</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-lg flex items-center justify-center">
                      <Button>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                    <div className="relative">
                      <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto h-full">
                        <code>{codeExamples.withIcon}</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 text-slate-400 hover:text-white"
                        onClick={() => handleCopyCode("withIcon", codeExamples.withIcon)}
                      >
                        {copiedCode === "withIcon" ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Loading State */}
                <div className="space-y-3">
                  <h4 className="font-medium">Loading State</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-lg flex items-center justify-center">
                      <Button disabled>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Please wait
                      </Button>
                    </div>
                    <div className="relative">
                      <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto h-full">
                        <code>{codeExamples.loading}</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 text-slate-400 hover:text-white"
                        onClick={() => handleCopyCode("loading", codeExamples.loading)}
                      >
                        {copiedCode === "loading" ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Icon Only */}
                <div className="space-y-3">
                  <h4 className="font-medium">Icon-Only Button</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-lg flex items-center justify-center">
                      <Button variant="outline" size="icon">
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Add item</span>
                      </Button>
                    </div>
                    <div className="relative">
                      <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto h-full">
                        <code>{codeExamples.iconOnly}</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 text-slate-400 hover:text-white"
                        onClick={() => handleCopyCode("iconOnly", codeExamples.iconOnly)}
                      >
                        {copiedCode === "iconOnly" ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* As Child */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">As Link (Slot Pattern)</h4>
                    <Badge variant="outline">Advanced</Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-lg flex items-center justify-center">
                      <Button asChild>
                        <a href="/docs">Documentation</a>
                      </Button>
                    </div>
                    <div className="relative">
                      <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto h-full">
                        <code>{codeExamples.asChild}</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 text-slate-400 hover:text-white"
                        onClick={() => handleCopyCode("asChild", codeExamples.asChild)}
                      >
                        {copiedCode === "asChild" ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
```

---

## Line-by-Line Specification

### Lines 723-733: Card Header

```tsx
<Card className="mb-12">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Code className="h-5 w-5" />
      Code Examples
    </CardTitle>
    <CardDescription>
      Copy-paste ready code snippets for common use cases
    </CardDescription>
  </CardHeader>
```

| Element | Purpose |
|---------|---------|
| Code icon | Represents developer content |
| "Copy-paste ready" | Sets expectation |

---

### Lines 736-755: Basic Usage Example

```tsx
<div className="space-y-3">
  <div className="flex items-center justify-between">
    <h4 className="font-medium">Basic Usage</h4>
    <Badge variant="outline">Most common</Badge>
  </div>
  <div className="relative">
    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
      <code>{codeExamples.basic}</code>
    </pre>
    <Button
      variant="ghost"
      size="icon"
      className="absolute top-2 right-2 text-slate-400 hover:text-white"
      onClick={() => handleCopyCode("basic", codeExamples.basic)}
    >
      {copiedCode === "basic" ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
    </Button>
  </div>
</div>
```

| Element | Purpose |
|---------|---------|
| "Most common" badge | Indicates recommended starting point |
| Dark code block | High contrast for code |
| Copy button | One-click copy |
| Green checkmark | Visual feedback after copy |

---

### Lines 758-790: Variants and Sizes Examples

Same pattern as Basic Usage, but for variants and sizes code.

---

### Lines 793-820: Interactive Examples (Icon, Loading, Icon-Only, As Child)

```tsx
<div className="grid md:grid-cols-2 gap-4">
  <div className="p-4 bg-slate-50 rounded-lg flex items-center justify-center">
    <Button>
      <Download className="mr-2 h-4 w-4" />
      Download
    </Button>
  </div>
  <div className="relative">
    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto h-full">
      <code>{codeExamples.withIcon}</code>
    </pre>
    // ... copy button
  </div>
</div>
```

| Layout | Purpose |
|--------|---------|
| Two columns | Preview left, code right |
| Live preview | See result immediately |
| Matching code | Exact code for preview |

**Reference:** Storybook - Preview + code layout pattern

---

## Code Examples Content

| Example | Code |
|---------|------|
| Basic | `<Button>Click me</Button>` |
| Variants | All 6 variant examples |
| Sizes | All 3 size examples |
| With Icon | Button with leading icon |
| Loading | Disabled button with spinner |
| Icon Only | Square button with sr-only label |
| As Child | Button wrapping anchor tag |

---

## Verification Checklist

- [ ] 7 code example sections exist
- [ ] Each has copy button with feedback
- [ ] Basic Usage has "Most common" badge
- [ ] As Link has "Advanced" badge
- [ ] Icon, Loading, Icon-Only, As Child have preview + code layout
- [ ] All code from codeExamples object is rendered

---

**Next Section:** [COMPOSITION-PATTERNS.md](./COMPOSITION-PATTERNS.md)


