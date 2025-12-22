# PROPS-TABLE.md - Complete Props Documentation

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/components/button/page.tsx` |
| **This Section** | Lines 561-620 |
| **Previous Section** | [VARIANT-SHOWCASE.md](./VARIANT-SHOWCASE.md) |
| **Next Section** | [ACCESSIBILITY-SECTION.md](./ACCESSIBILITY-SECTION.md) |

---

## Code Block

```tsx

          {/* Props Table */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Props API
              </CardTitle>
              <CardDescription>
                Complete list of component props and their types
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[150px]">Prop</TableHead>
                      <TableHead className="w-[250px]">Type</TableHead>
                      <TableHead className="w-[100px]">Default</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {buttonProps.map((prop) => (
                      <TableRow key={prop.name}>
                        <TableCell>
                          <code className="text-sm bg-slate-100 px-2 py-1 rounded font-semibold text-slate-900">
                            {prop.name}
                          </code>
                        </TableCell>
                        <TableCell>
                          <code className="text-sm text-purple-600 bg-purple-50 px-2 py-1 rounded">
                            {prop.type}
                          </code>
                        </TableCell>
                        <TableCell>
                          <code className="text-sm text-slate-500">
                            {prop.default}
                          </code>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {prop.description}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              {/* TypeScript Interface */}
              <div className="mt-6">
                <p className="text-sm font-medium mb-3">TypeScript Interface</p>
                <div className="relative">
                  <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}`}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 text-slate-400 hover:text-white"
                    onClick={() => handleCopyCode("interface", `interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}`)}
                  >
                    {copiedCode === "interface" ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
```

---

## Line-by-Line Specification

### Lines 563-574: Card Header

```tsx
<Card className="mb-12">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Code className="h-5 w-5" />
      Props API
    </CardTitle>
    <CardDescription>
      Complete list of component props and their types
    </CardDescription>
  </CardHeader>
```

| Element | Purpose |
|---------|---------|
| Code icon | Represents API/developer reference |
| "Props API" title | Clear developer-focused heading |
| Description | Sets expectation for content |

---

### Lines 576-600: Props Table

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[150px]">Prop</TableHead>
      <TableHead className="w-[250px]">Type</TableHead>
      <TableHead className="w-[100px]">Default</TableHead>
      <TableHead>Description</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {buttonProps.map((prop) => (
      <TableRow key={prop.name}>
        <TableCell>
          <code className="text-sm bg-slate-100 px-2 py-1 rounded font-semibold text-slate-900">
            {prop.name}
          </code>
        </TableCell>
        <TableCell>
          <code className="text-sm text-purple-600 bg-purple-50 px-2 py-1 rounded">
            {prop.type}
          </code>
        </TableCell>
        <TableCell>
          <code className="text-sm text-slate-500">
            {prop.default}
          </code>
        </TableCell>
        <TableCell className="text-muted-foreground">
          {prop.description}
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

| Column | Styling | Purpose |
|--------|---------|---------|
| Prop | Bold code on gray | Emphasizes prop name |
| Type | Purple code | TypeScript type signature |
| Default | Gray code | Default value |
| Description | Muted text | Human explanation |

**Reference:** 
- Storybook - Props table format
- Radix UI - API documentation structure

---

### Lines 603-620: TypeScript Interface

```tsx
<div className="mt-6">
  <p className="text-sm font-medium mb-3">TypeScript Interface</p>
  <div className="relative">
    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
      <code>{`interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}`}</code>
    </pre>
    <Button
      variant="ghost"
      size="icon"
      className="absolute top-2 right-2 text-slate-400 hover:text-white"
      onClick={() => handleCopyCode("interface", ...)}
    >
      {copiedCode === "interface" ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
    </Button>
  </div>
</div>
```

| Element | Purpose |
|---------|---------|
| Section label | "TypeScript Interface" identifies content |
| Dark code block | High contrast for readability |
| Copy button | One-click copy for developers |
| Green checkmark | Visual confirmation of copy |

**Why include the interface:**
- TypeScript users can copy directly
- Shows inheritance from native button
- Documents union types for variant/size

---

## Design Rationale

### Table Column Widths

| Column | Width | Reasoning |
|--------|-------|-----------|
| Prop | 150px | Prop names are short |
| Type | 250px | Types can be long unions |
| Default | 100px | Defaults are brief |
| Description | Flex | Takes remaining space |

### Color Coding

| Element | Color | Meaning |
|---------|-------|---------|
| Prop name | Slate | Identifier |
| Type | Purple | TypeScript convention |
| Default | Gray | Secondary information |

---

## Verification Checklist

- [ ] Table has 4 columns: Prop, Type, Default, Description
- [ ] All 6 buttonProps are rendered in table
- [ ] Each prop name is code-formatted
- [ ] Types are purple-coded
- [ ] TypeScript interface section exists
- [ ] Copy button works with visual feedback

---

**Next Section:** [ACCESSIBILITY-SECTION.md](./ACCESSIBILITY-SECTION.md)


