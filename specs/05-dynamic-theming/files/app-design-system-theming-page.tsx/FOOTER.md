# Part: FOOTER

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 8 of 8 |
| **Lines** | 681-750 |
| **Purpose** | Related resources, closing tags |

---

## What This Code Does

This section provides:

1. **Related resources section** - Links to external references
2. **Design system links** - Internal navigation to related pages
3. **Closing JSX tags** - Properly closes all open elements

---

## Design References

| Reference | Application |
|-----------|-------------|
| **Material Design 3** | Dynamic color documentation link |
| **WCAG 2.1** | Contrast guidelines link |
| **Tailwind CSS** | Color customization docs link |

---

## Code Block

```tsx

        {/* Related Resources */}
        <section className="px-6 lg:px-12 py-12 bg-card/30 border-t border-border/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Related Resources
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Eye className="h-4 w-4 text-primary" />
                    Material Design 3
                  </CardTitle>
                  <CardDescription>
                    Learn about dynamic colour in Material Design's colour system
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://m3.material.io/styles/color/dynamic-color/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    View documentation →
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Contrast className="h-4 w-4 text-primary" />
                    WCAG Contrast
                  </CardTitle>
                  <CardDescription>
                    Understanding contrast requirements for accessibility
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    View guidelines →
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Palette className="h-4 w-4 text-primary" />
                    Design Tokens
                  </CardTitle>
                  <CardDescription>
                    Explore our complete token architecture
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href="/design-system/tokens"
                    className="text-sm text-primary hover:underline"
                  >
                    View tokens →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
```

---

## External Links

| Resource | URL |
|----------|-----|
| Material Design 3 Dynamic Color | https://m3.material.io/styles/color/dynamic-color/overview |
| WCAG Contrast Guidelines | https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html |

---

## Internal Links

| Link | Destination |
|------|-------------|
| Design Tokens | `/design-system/tokens` |

---

## Closing Tag Structure

```
        </section>     <!-- Related Resources section -->
      </main>          <!-- Main content area -->
    </div>             <!-- Flex container -->
  )                    <!-- Return statement -->
}                      <!-- Component function -->
```

---

## Verification

- [ ] Three resource cards display
- [ ] External links have `target="_blank"` and `rel="noopener noreferrer"`
- [ ] Internal link uses Next.js `Link` component
- [ ] All JSX tags are properly closed
- [ ] Component function closes with `}`

---

## Complete File Assembly

To assemble the complete file, concatenate all 8 parts in order:

1. IMPORTS.md
2. COLOR-UTILS.md
3. STATE-HANDLERS.md
4. COLOR-PICKER-SECTION.md
5. PALETTE-DISPLAY.md
6. PREVIEW-SECTION.md
7. EXPORT-SECTION.md
8. FOOTER.md

**Expected total lines:** ~700

---

**End of Feature 05 specification**


