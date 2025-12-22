# FOOTER.md - Related Resources and Closing Tags

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/tokens/page.tsx` |
| **This Section** | Lines 1490-1527 |
| **Previous Section** | [TAB-EXPORT.md](./TAB-EXPORT.md) |
| **Next Section** | None (this is the last section) |

---

## Prerequisites

- [TAB-EXPORT.md](./TAB-EXPORT.md) must be completed first
- This section closes ALL open tags and completes the file

---

## Code Block

Copy this code EXACTLY. Place it directly after the Export TabsContent closing tag.

```tsx
              </Tabs>
            </div>
          </div>

          {/* Related Resources */}
          <section className="px-6 lg:px-12 py-8 bg-card/30 border-t border-border/50">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-lg font-semibold text-foreground mb-4">Related Resources</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/design-system/principles" className="block p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="h-5 w-5 text-blue-400" />
                    <span className="font-medium text-foreground">Design Principles</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Learn the philosophy behind our token decisions</p>
                </Link>
                <Link href="/components" className="block p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <Layers className="h-5 w-5 text-green-400" />
                    <span className="font-medium text-foreground">Components</span>
                  </div>
                  <p className="text-sm text-muted-foreground">See tokens in action within components</p>
                </Link>
                <Link href="/design-system/theming" className="block p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <Palette className="h-5 w-5 text-purple-400" />
                    <span className="font-medium text-foreground">Theming Guide</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Create custom themes with tokens</p>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
```

---

## Line-by-Line Specification

### Lines 1490-1493: Closing Tabs and Content Wrapper

```tsx
              </Tabs>
            </div>
          </div>
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Closes the Tabs component and the main content wrapper divs |
| **Why this approach** | Proper JSX structure requires matching closing tags |
| **Reference** | JSX syntax rules |

**Closing Tag Order:**
1. `</Tabs>` - Closes the Tabs component
2. `</div>` - Closes `max-w-7xl mx-auto` container
3. `</div>` - Closes `px-6 lg:px-12 py-8` content area

---

### Lines 1495-1522: Related Resources Section

```tsx
          {/* Related Resources */}
          <section className="px-6 lg:px-12 py-8 bg-card/30 border-t border-border/50">
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Creates a footer section with links to related pages |
| **Why this approach** | Helps users discover related content |
| **Reference** | "Don't Make Me Think" - Related content patterns |

**Three Resource Links:**

| Link | Icon | Colour | Description |
|------|------|--------|-------------|
| Design Principles | Target | blue-400 | Philosophy behind tokens |
| Components | Layers | green-400 | Tokens in action |
| Theming Guide | Palette | purple-400 | Custom theme creation |

---

### Lines 1523-1527: Final Closing Tags

```tsx
        </div>
      </main>
    </div>
  )
}
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Closes ALL remaining open tags and ends the component |
| **Why this approach** | Required JSX syntax - every tag must be closed |
| **Reference** | JSX syntax rules |

**Closing Tag Order (bottom to top):**
1. `</div>` - Closes `flex flex-col min-h-screen`
2. `</main>` - Closes main content area
3. `</div>` - Closes `flex bg-background min-h-screen`
4. `)` - Closes the return statement
5. `}` - Closes the Tokens function

---

## Verification Checklist

After copying this code:

- [ ] `</Tabs>` closes the Tabs component
- [ ] Related Resources section has three Link components
- [ ] Each Link has correct `href` path
- [ ] Each Link has appropriate icon and colour
- [ ] Final closing brace `}` ends the component
- [ ] NO trailing content after final `}`

---

## Complete File Structure Verification

After assembling all parts, verify:

| Check | Expected |
|-------|----------|
| First line | `"use client"` |
| Last line | `}` (single closing brace) |
| Total lines | ~1,527 |
| Open braces `{` | Must match closing braces `}` |
| Open parens `(` | Must match closing parens `)` |

---

## Common Mistakes

| Mistake | How to Avoid |
|---------|--------------|
| Missing a closing tag | Count opening and closing tags carefully |
| Extra closing brace | Only ONE `}` at the very end |
| Wrong href paths | Use exact paths as shown |

---

## Final Assembly Complete

You have now completed all 20 part files for `app/design-system/tokens/page.tsx`.

**Next Steps:**
1. Open the ASSEMBLY-GUIDE.md
2. Follow the assembly instructions
3. Run verification checks
4. Test in browser

---

**This is the final section. Return to [ASSEMBLY-GUIDE.md](./ASSEMBLY-GUIDE.md) to complete assembly.**


