# LIVE-PREVIEW.md - Interactive Button Preview

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/components/button/page.tsx` |
| **This Section** | Lines 311-420 |
| **Previous Section** | [AT-A-GLANCE-SECTION.md](./AT-A-GLANCE-SECTION.md) |
| **Next Section** | [DO-DONT-EXAMPLES.md](./DO-DONT-EXAMPLES.md) |

---

## Code Block

```tsx

          {/* Live Preview Section */}
          <Card className="mb-12 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Live Preview
              </CardTitle>
              <CardDescription className="text-slate-300">
                Interact with the button in real-time
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Preview Area */}
                <div className="p-12 bg-slate-50 flex items-center justify-center min-h-[200px] border-b lg:border-b-0 lg:border-r">
                  <div className="relative">
                    <Button 
                      variant={selectedVariant as any}
                      size={selectedSize as any}
                      disabled={isDisabled || isLoading}
                    >
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {buttonText}
                    </Button>
                    
                    {/* Focus ring indicator */}
                    <div className="absolute -inset-4 border-2 border-dashed border-blue-300 rounded-lg pointer-events-none opacity-0 group-focus-within:opacity-100" />
                  </div>
                </div>

                {/* Controls Area */}
                <div className="p-6 space-y-6">
                  {/* Variant Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Variant</label>
                    <div className="flex flex-wrap gap-2">
                      {buttonVariants.map((variant) => (
                        <Button
                          key={variant.name}
                          variant={selectedVariant === variant.name ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedVariant(variant.name)}
                        >
                          {variant.name}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Size Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Size</label>
                    <div className="flex flex-wrap gap-2">
                      {buttonSizes.map((size) => (
                        <Button
                          key={size.name}
                          variant={selectedSize === size.name ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedSize(size.name)}
                        >
                          {size.name}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* State Toggles */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium">States</label>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Loading</span>
                      <Button
                        variant={isLoading ? "default" : "outline"}
                        size="sm"
                        onClick={() => setIsLoading(!isLoading)}
                      >
                        {isLoading ? "On" : "Off"}
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Disabled</span>
                      <Button
                        variant={isDisabled ? "default" : "outline"}
                        size="sm"
                        onClick={() => setIsDisabled(!isDisabled)}
                      >
                        {isDisabled ? "On" : "Off"}
                      </Button>
                    </div>
                  </div>

                  {/* Text Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Button Text</label>
                    <input
                      type="text"
                      value={buttonText}
                      onChange={(e) => setButtonText(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                      placeholder="Enter button text..."
                    />
                  </div>

                  {/* Generated Code */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Generated Code</label>
                    <div className="relative">
                      <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
                        <code>{`<Button variant="${selectedVariant}" size="${selectedSize}"${isDisabled ? " disabled" : ""}${isLoading ? " loading" : ""}>\n  ${buttonText}\n</Button>`}</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 text-slate-400 hover:text-white"
                        onClick={() => handleCopyCode("preview", `<Button variant="${selectedVariant}" size="${selectedSize}"${isDisabled ? " disabled" : ""}>\n  ${buttonText}\n</Button>`)}
                      >
                        {copiedCode === "preview" ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
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

### Lines 313-323: Card Header

```tsx
<Card className="mb-12 overflow-hidden">
  <CardHeader className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
    <CardTitle className="flex items-center gap-2">
      <Eye className="h-5 w-5" />
      Live Preview
    </CardTitle>
    <CardDescription className="text-slate-300">
      Interact with the button in real-time
    </CardDescription>
  </CardHeader>
```

| Element | Purpose |
|---------|---------|
| `overflow-hidden` | Clips gradient corners |
| Dark gradient header | Visual emphasis for interactive section |
| Eye icon | Indicates preview functionality |

**Reference:** Storybook - Live preview pattern

---

### Lines 324-340: Preview Area

```tsx
<div className="p-12 bg-slate-50 flex items-center justify-center min-h-[200px] border-b lg:border-b-0 lg:border-r">
  <div className="relative">
    <Button 
      variant={selectedVariant as any}
      size={selectedSize as any}
      disabled={isDisabled || isLoading}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {buttonText}
    </Button>
```

| Element | Purpose |
|---------|---------|
| `p-12` | Generous padding around button |
| `bg-slate-50` | Neutral background |
| `min-h-[200px]` | Minimum height for visibility |
| Dynamic variant/size | Reflects control panel selections |
| Loading spinner | Conditional Loader2 icon |

**Reference:** Shopify Polaris - Component playground pattern

---

### Lines 343-361: Variant Selection Controls

```tsx
<div className="space-y-2">
  <label className="text-sm font-medium">Variant</label>
  <div className="flex flex-wrap gap-2">
    {buttonVariants.map((variant) => (
      <Button
        key={variant.name}
        variant={selectedVariant === variant.name ? "default" : "outline"}
        size="sm"
        onClick={() => setSelectedVariant(variant.name)}
      >
        {variant.name}
      </Button>
    ))}
  </div>
</div>
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Renders a button for each variant |
| **Selection indicator** | Selected variant uses default style, others use outline |
| **Click handler** | Updates selectedVariant state |

---

### Lines 364-378: Size Selection Controls

Same pattern as variant selection, but for sizes.

---

### Lines 381-400: State Toggles

```tsx
<div className="flex items-center justify-between">
  <span className="text-sm text-muted-foreground">Loading</span>
  <Button
    variant={isLoading ? "default" : "outline"}
    size="sm"
    onClick={() => setIsLoading(!isLoading)}
  >
    {isLoading ? "On" : "Off"}
  </Button>
</div>
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Toggle buttons for loading/disabled states |
| **Visual feedback** | On/Off text with visual state change |

---

### Lines 403-412: Text Input

```tsx
<input
  type="text"
  value={buttonText}
  onChange={(e) => setButtonText(e.target.value)}
  className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
  placeholder="Enter button text..."
/>
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Allows editing the button text in real-time |
| **Focus styling** | Ring on focus for accessibility |

---

### Lines 415-420: Generated Code

```tsx
<pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
  <code>{`<Button variant="${selectedVariant}" size="${selectedSize}"${isDisabled ? " disabled" : ""}${isLoading ? " loading" : ""}>\n  ${buttonText}\n</Button>`}</code>
</pre>
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Shows generated code based on current selections |
| **Copy button** | Copies code to clipboard with visual feedback |
| **Template literal** | Dynamically generates code string |

**Reference:** Storybook - Dynamic code generation pattern

---

## Verification Checklist

- [ ] Preview area shows live button
- [ ] All 6 variants are selectable
- [ ] All 4 sizes are selectable
- [ ] Loading toggle works
- [ ] Disabled toggle works
- [ ] Text input updates button text
- [ ] Generated code updates dynamically
- [ ] Copy button works with feedback

---

**Next Section:** [DO-DONT-EXAMPLES.md](./DO-DONT-EXAMPLES.md)


