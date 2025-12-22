# Part: EXPORT-SECTION

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 7 of 8 |
| **Lines** | 583-680 |
| **Purpose** | Export generated theme in CSS, Tailwind, or JSON format |

---

## What This Code Does

This section provides:

1. **Format selector** - Tabs for CSS, Tailwind, and JSON export
2. **Code preview** - Syntax-highlighted output for each format
3. **Copy button** - One-click copy of generated code
4. **Format descriptions** - Explains each export format's use case

---

## Design References

| Reference | Application |
|-----------|-------------|
| **Tailwind CSS** | Config file export format |
| **CSS Custom Properties** | CSS variables export |
| **Design Tokens** | JSON token export format |

---

## Code Block

```tsx

        {/* Export Section */}
        <section className="px-6 lg:px-12 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Export Theme
            </h2>
            
            <Tabs value={exportFormat} onValueChange={(v) => setExportFormat(v as typeof exportFormat)}>
              <TabsList className="mb-6">
                <TabsTrigger value="css" className="gap-2">
                  <Code className="h-4 w-4" />
                  CSS Variables
                </TabsTrigger>
                <TabsTrigger value="tailwind" className="gap-2">
                  <Paintbrush className="h-4 w-4" />
                  Tailwind Config
                </TabsTrigger>
                <TabsTrigger value="json" className="gap-2">
                  <FileJson className="h-4 w-4" />
                  JSON Tokens
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="css">
                <Card className="bg-card/30 border-border/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>CSS Custom Properties</CardTitle>
                        <CardDescription>
                          Add these variables to your :root selector
                        </CardDescription>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCopy(generateCSSExport())}
                        className="gap-2"
                      >
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        {copied ? "Copied!" : "Copy"}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-slate-950 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto">
                      <code>{generateCSSExport()}</code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="tailwind">
                <Card className="bg-card/30 border-border/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Tailwind Configuration</CardTitle>
                        <CardDescription>
                          Extend your tailwind.config.js with these colors
                        </CardDescription>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCopy(generateTailwindExport())}
                        className="gap-2"
                      >
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        {copied ? "Copied!" : "Copy"}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-slate-950 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto">
                      <code>{generateTailwindExport()}</code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="json">
                <Card className="bg-card/30 border-border/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>JSON Design Tokens</CardTitle>
                        <CardDescription>
                          Compatible with Style Dictionary and Figma Tokens
                        </CardDescription>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCopy(generateJSONExport())}
                        className="gap-2"
                      >
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        {copied ? "Copied!" : "Copy"}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-slate-950 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto">
                      <code>{generateJSONExport()}</code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
```

---

## Export Generator Functions

These helper functions generate the export content (defined before the return statement):

```tsx
  // Generate CSS export
  const generateCSSExport = () => {
    const lines = [":root {"]
    Object.entries(generatedTheme.palettes.primary).forEach(([shade, color]) => {
      lines.push(`  --color-primary-${shade}: ${color};`)
    })
    Object.entries(generatedTheme.palettes.secondary).forEach(([shade, color]) => {
      lines.push(`  --color-secondary-${shade}: ${color};`)
    })
    lines.push("}")
    return lines.join("\n")
  }
  
  // Generate Tailwind export
  const generateTailwindExport = () => {
    return `module.exports = {
  theme: {
    extend: {
      colors: {
        primary: ${JSON.stringify(generatedTheme.palettes.primary, null, 8).replace(/"/g, "'")},
        secondary: ${JSON.stringify(generatedTheme.palettes.secondary, null, 8).replace(/"/g, "'")},
      }
    }
  }
}`
  }
  
  // Generate JSON export
  const generateJSONExport = () => {
    return JSON.stringify({
      color: {
        primary: generatedTheme.palettes.primary,
        secondary: generatedTheme.palettes.secondary,
        accent: generatedTheme.palettes.accent,
        neutral: generatedTheme.palettes.neutral,
      },
      semantic: generatedTheme.semantic,
    }, null, 2)
  }
```

---

## Export Formats

| Format | Use Case | Integration |
|--------|----------|-------------|
| **CSS Variables** | Any web project | Add to global CSS |
| **Tailwind Config** | Tailwind projects | Extend theme config |
| **JSON Tokens** | Design systems | Style Dictionary, Figma |

---

## Verification

- [ ] Three tabs: CSS, Tailwind, JSON
- [ ] Each tab has copy button
- [ ] CSS export shows `:root { }` format
- [ ] Tailwind export shows `module.exports` format
- [ ] JSON export is valid JSON
- [ ] Copy button changes to "Copied!" temporarily

---

**Next part:** `FOOTER.md`


