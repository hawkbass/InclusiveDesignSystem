# FOOTER.md - Page Footer and Closing Tags

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/playground/page.tsx` |
| **This Section** | Lines 721-780 |
| **Previous Section** | [ACCESSIBILITY-PANEL.md](./ACCESSIBILITY-PANEL.md) |
| **Next Section** | None (this is the last section) |

---

## Code Block

```tsx

          </div>
          
          {/* Related Resources */}
          <Card className="mt-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <CardContent className="py-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Need more control?</h3>
                  <p className="text-slate-300">
                    Explore the full component documentation for advanced usage
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10" asChild>
                    <Link href="/design-system/components">
                      All Components
                    </Link>
                  </Button>
                  <Button className="bg-white text-slate-900 hover:bg-white/90" asChild>
                    <Link href="/design-system/tokens">
                      Design Tokens
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
        </div>
      </main>
    </div>
  )
}
```

---

## Line-by-Line Specification

### Line 723: Close Grid

```tsx
</div>
```

Closes the main grid layout (`grid lg:grid-cols-2`).

---

### Lines 725-749: Related Resources Card

```tsx
<Card className="mt-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
  <CardContent className="py-8">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h3 className="text-xl font-semibold mb-2">Need more control?</h3>
        <p className="text-slate-300">
          Explore the full component documentation for advanced usage
        </p>
      </div>
      <div className="flex gap-3">
        <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10" asChild>
          <Link href="/design-system/components">
            All Components
          </Link>
        </Button>
        <Button className="bg-white text-slate-900 hover:bg-white/90" asChild>
          <Link href="/design-system/tokens">
            Design Tokens
          </Link>
        </Button>
      </div>
    </div>
  </CardContent>
</Card>
```

| Element | Purpose |
|---------|---------|
| Dark gradient | Visual separation as page footer |
| `mt-8` | Spacing from content above |
| Question heading | Invites exploration |
| Description | Explains where to go for more |
| Two CTA buttons | Primary and secondary navigation |

---

### Button Styling

| Button | Style | Purpose |
|--------|-------|---------|
| All Components | Outline, transparent | Secondary action |
| Design Tokens | White, solid | Primary action |

```tsx
// Secondary
className="bg-transparent border-white/20 text-white hover:bg-white/10"

// Primary
className="bg-white text-slate-900 hover:bg-white/90"
```

---

### Lines 751-755: Closing Tags

```tsx
        </div>
      </main>
    </div>
  )
}
```

| Tag | What It Closes |
|-----|----------------|
| `</div>` | Container div (max-w-7xl) |
| `</main>` | Main content area |
| `</div>` | Flex layout root |
| `)` | Return statement |
| `}` | Function body |

---

## Design Rationale

### Footer CTA Pattern

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  Need more control?              [All Components]       │
│  Explore the full component      [Design Tokens]        │
│  documentation for advanced usage                       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Reference:** 
- Vercel - Footer CTA pattern
- Stripe - Documentation navigation

### Link Destinations

| Link | Purpose |
|------|---------|
| /design-system/components | Full component library |
| /design-system/tokens | Design tokens reference |

---

## Verification Checklist

- [ ] Grid is properly closed
- [ ] Footer card has dark gradient
- [ ] Heading asks engaging question
- [ ] Two navigation buttons present
- [ ] Outline button for secondary action
- [ ] Solid button for primary action
- [ ] Both buttons use asChild with Link
- [ ] All closing tags present
- [ ] Function exports correctly

---

## File Complete

The `app/design-system/playground/page.tsx` file is now fully specified.

**Assembly order:**
1. IMPORTS.md
2. COMPONENT-REGISTRY.md
3. STATE-HANDLERS.md
4. HEADER-CONTROLS.md
5. PREVIEW-PANEL.md
6. PROPS-CONTROLS.md
7. CODE-OUTPUT.md
8. ACCESSIBILITY-PANEL.md
9. FOOTER.md

**Total lines:** ~780


