# Part: PREVIEW-SECTION

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 6 of 8 |
| **Lines** | 483-582 |
| **Purpose** | Live theme preview with sample UI components |

---

## What This Code Does

This section provides:

1. **Mode toggle** - Switch between light and dark preview
2. **Preview container** - Styled with generated theme colors
3. **Sample card** - Shows how a typical card would look
4. **Sample buttons** - Primary, secondary, and outline variants
5. **Sample badges** - Status indicators with theme colors
6. **Contrast checker** - Real-time contrast ratio display

---

## Design References

| Reference | Application |
|-----------|-------------|
| **Material Theme Builder** | Live preview concept |
| **Figma Variables** | Preview with actual components |
| **WCAG 2.1** | Contrast ratio display |

---

## Code Block

```tsx

        {/* Theme Preview */}
        <section className="px-6 lg:px-12 py-12 bg-card/30 border-t border-border/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Live Preview
                </h2>
                <p className="text-muted-foreground">
                  See how your theme looks with real components
                </p>
              </div>
              
              <div className="flex items-center gap-2 p-1 bg-card rounded-lg border border-border/50">
                <Button
                  variant={previewMode === "light" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setPreviewMode("light")}
                  className="gap-2"
                >
                  <Sun className="h-4 w-4" />
                  Light
                </Button>
                <Button
                  variant={previewMode === "dark" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setPreviewMode("dark")}
                  className="gap-2"
                >
                  <Moon className="h-4 w-4" />
                  Dark
                </Button>
              </div>
            </div>
            
            {/* Preview Container */}
            <div
              className="rounded-xl border-2 border-border/50 overflow-hidden"
              style={{
                backgroundColor: previewMode === "light" 
                  ? generatedTheme.light.background 
                  : generatedTheme.dark.background,
              }}
            >
              <div className="p-8">
                {/* Sample Card */}
                <div
                  className="max-w-md mx-auto rounded-xl p-6 shadow-lg"
                  style={{
                    backgroundColor: previewMode === "light"
                      ? generatedTheme.light.card
                      : generatedTheme.dark.card,
                    color: previewMode === "light"
                      ? generatedTheme.light.cardForeground
                      : generatedTheme.dark.cardForeground,
                  }}
                >
                  <h3 className="text-lg font-semibold mb-2">Sample Card</h3>
                  <p
                    className="text-sm mb-4"
                    style={{
                      color: previewMode === "light"
                        ? generatedTheme.light.mutedForeground
                        : generatedTheme.dark.mutedForeground,
                    }}
                  >
                    This is how your theme looks on a typical card component with 
                    various UI elements.
                  </p>
                  
                  {/* Sample Buttons */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <button
                      className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      style={{
                        backgroundColor: previewMode === "light"
                          ? generatedTheme.light.primary
                          : generatedTheme.dark.primary,
                        color: previewMode === "light"
                          ? generatedTheme.light.primaryForeground
                          : generatedTheme.dark.primaryForeground,
                      }}
                    >
                      Primary Action
                    </button>
                    <button
                      className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      style={{
                        backgroundColor: previewMode === "light"
                          ? generatedTheme.light.secondary
                          : generatedTheme.dark.secondary,
                        color: previewMode === "light"
                          ? generatedTheme.light.secondaryForeground
                          : generatedTheme.dark.secondaryForeground,
                      }}
                    >
                      Secondary
                    </button>
                    <button
                      className="px-4 py-2 rounded-lg text-sm font-medium border-2 transition-colors"
                      style={{
                        borderColor: previewMode === "light"
                          ? generatedTheme.light.border
                          : generatedTheme.dark.border,
                        color: previewMode === "light"
                          ? generatedTheme.light.foreground
                          : generatedTheme.dark.foreground,
                      }}
                    >
                      Outline
                    </button>
                  </div>
                  
                  {/* Sample Badges */}
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="px-2 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: generatedTheme.semantic.success + "20",
                        color: generatedTheme.semantic.success,
                      }}
                    >
                      Success
                    </span>
                    <span
                      className="px-2 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: generatedTheme.semantic.warning + "20",
                        color: generatedTheme.semantic.warning,
                      }}
                    >
                      Warning
                    </span>
                    <span
                      className="px-2 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: generatedTheme.semantic.error + "20",
                        color: generatedTheme.semantic.error,
                      }}
                    >
                      Error
                    </span>
                    <span
                      className="px-2 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: generatedTheme.semantic.info + "20",
                        color: generatedTheme.semantic.info,
                      }}
                    >
                      Info
                    </span>
                  </div>
                </div>
                
                {/* Contrast Checker */}
                <div className="mt-8 max-w-md mx-auto">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span style={{ color: previewMode === "light" ? generatedTheme.light.foreground : generatedTheme.dark.foreground }}>
                      Text on Background
                    </span>
                    <span style={{ color: previewMode === "light" ? generatedTheme.light.foreground : generatedTheme.dark.foreground }}>
                      {getContrastRatio(
                        previewMode === "light" ? generatedTheme.light.foreground : generatedTheme.dark.foreground,
                        previewMode === "light" ? generatedTheme.light.background : generatedTheme.dark.background
                      ).toFixed(2)}:1
                      {" "}
                      <span className={
                        getContrastRatio(
                          previewMode === "light" ? generatedTheme.light.foreground : generatedTheme.dark.foreground,
                          previewMode === "light" ? generatedTheme.light.background : generatedTheme.dark.background
                        ) >= 4.5 ? "text-green-500" : "text-red-500"
                      }>
                        {getContrastRatio(
                          previewMode === "light" ? generatedTheme.light.foreground : generatedTheme.dark.foreground,
                          previewMode === "light" ? generatedTheme.light.background : generatedTheme.dark.background
                        ) >= 4.5 ? "✓ AA" : "✗ Fail"}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
```

---

## Preview Components

| Component | Theme Properties Used |
|-----------|----------------------|
| **Container** | `background` |
| **Card** | `card`, `cardForeground` |
| **Primary button** | `primary`, `primaryForeground` |
| **Secondary button** | `secondary`, `secondaryForeground` |
| **Outline button** | `border`, `foreground` |
| **Badges** | `semantic.success/warning/error/info` |

---

## Mode Toggle Logic

The `previewMode` state switches between `"light"` and `"dark"`, changing which set of semantic colors is used:

```tsx
// Example: Getting background color
previewMode === "light" 
  ? generatedTheme.light.background 
  : generatedTheme.dark.background
```

---

## Verification

- [ ] Light/Dark toggle buttons work
- [ ] Preview container uses generated theme colors
- [ ] Sample card renders with theme colors
- [ ] All three button variants display
- [ ] Four semantic badges display (success, warning, error, info)
- [ ] Contrast ratio displays with pass/fail indicator

---

**Next part:** `EXPORT-SECTION.md`


