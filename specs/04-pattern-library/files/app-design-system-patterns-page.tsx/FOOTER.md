# FOOTER.md - Related Resources and Closing Tags

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/patterns/page.tsx` |
| **This Section** | Lines 351-400 |
| **Previous Section** | [PATTERN-GRID.md](./PATTERN-GRID.md) |
| **Next Section** | None (this is the last section) |

---

## Code Block

```tsx

          {/* Related Resources */}
          <Card className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <CardContent className="py-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Can't find what you need?</h3>
                  <p className="text-slate-300">
                    Explore components or request a new pattern
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10" asChild>
                    <Link href="/design-system/components">
                      Browse Components
                    </Link>
                  </Button>
                  <Button className="bg-white text-slate-900 hover:bg-white/90" asChild>
                    <Link href="https://github.com/your-org/design-system/issues/new">
                      Request Pattern
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

### Lines 353-377: Related Resources Card

```tsx
<Card className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
  <CardContent className="py-8">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h3 className="text-xl font-semibold mb-2">Can't find what you need?</h3>
        <p className="text-slate-300">
          Explore components or request a new pattern
        </p>
      </div>
      <div className="flex gap-3">
        <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10" asChild>
          <Link href="/design-system/components">
            Browse Components
          </Link>
        </Button>
        <Button className="bg-white text-slate-900 hover:bg-white/90" asChild>
          <Link href="https://github.com/your-org/design-system/issues/new">
            Request Pattern
          </Link>
        </Button>
      </div>
    </div>
  </CardContent>
</Card>
```

| Element | Purpose |
|---------|---------|
| Dark gradient | Visual footer separation |
| Question heading | Invites action |
| Two CTA buttons | Browse or request |
| External link | GitHub issues for requests |

---

### Button Styling

| Button | Style | Purpose |
|--------|-------|---------|
| Browse Components | Outline, transparent | Secondary navigation |
| Request Pattern | White, solid | Primary CTA |

---

### Lines 379-385: Closing Tags

```tsx
        </div>
      </main>
    </div>
  )
}
```

| Tag | What It Closes |
|-----|----------------|
| `</div>` | Container (max-w-6xl) |
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
│  Can't find what you need?       [Browse Components]    │
│  Explore components or request   [Request Pattern]      │
│  a new pattern                                          │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Reference:** 
- GitHub - Issue request CTA
- Atlassian - Documentation feedback pattern

---

## Verification Checklist

- [ ] Footer card has dark gradient
- [ ] Heading asks engaging question
- [ ] Two navigation buttons present
- [ ] Browse Components links internally
- [ ] Request Pattern links to GitHub
- [ ] All closing tags correct
- [ ] Function exports correctly

---

## File Complete

The `app/design-system/patterns/page.tsx` file is now fully specified.

**Assembly order:**
1. IMPORTS.md
2. PATTERN-DATA.md
3. HEADER-SECTION.md
4. PATTERN-GRID.md
5. FOOTER.md

**Total lines:** ~400


