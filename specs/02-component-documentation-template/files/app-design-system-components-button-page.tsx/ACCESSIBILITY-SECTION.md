# ACCESSIBILITY-SECTION.md - Keyboard and Screen Reader Support

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/components/button/page.tsx` |
| **This Section** | Lines 621-720 |
| **Previous Section** | [PROPS-TABLE.md](./PROPS-TABLE.md) |
| **Next Section** | [CODE-EXAMPLES.md](./CODE-EXAMPLES.md) |

---

## Code Block

```tsx

          {/* Accessibility Section */}
          <Card className="mb-12">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b">
              <CardTitle className="flex items-center gap-2">
                <Accessibility className="h-5 w-5 text-emerald-600" />
                Accessibility
              </CardTitle>
              <CardDescription>
                Keyboard navigation, screen reader support, and focus management
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Tabs defaultValue="keyboard" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="keyboard" className="flex items-center gap-2">
                    <Keyboard className="h-4 w-4" />
                    Keyboard
                  </TabsTrigger>
                  <TabsTrigger value="screenreader" className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    Screen Reader
                  </TabsTrigger>
                  <TabsTrigger value="focus" className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Focus
                  </TabsTrigger>
                </TabsList>

                {/* Keyboard Tab */}
                <TabsContent value="keyboard">
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      All keyboard interactions follow WAI-ARIA button pattern.
                    </p>
                    <div className="grid gap-3">
                      {keyboardInteractions.map((interaction) => (
                        <div 
                          key={interaction.key}
                          className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg"
                        >
                          <kbd className="px-3 py-1.5 bg-white border border-slate-200 rounded shadow-sm text-sm font-mono min-w-[80px] text-center">
                            {interaction.key}
                          </kbd>
                          <span className="text-sm text-muted-foreground">{interaction.action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Screen Reader Tab */}
                <TabsContent value="screenreader">
                  <div className="space-y-6">
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <h4 className="font-medium mb-2">Role Announcement</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Buttons are announced as "button" by screen readers.
                      </p>
                      <div className="bg-white p-3 rounded border font-mono text-sm">
                        "Save changes, button"
                      </div>
                    </div>
                    
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <h4 className="font-medium mb-2">State Announcements</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">Disabled</Badge>
                          <span className="text-muted-foreground">"Save changes, button, dimmed"</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">Loading</Badge>
                          <span className="text-muted-foreground">"Save changes, button, busy"</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                      <h4 className="font-medium mb-2 text-amber-800 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Icon-Only Buttons
                      </h4>
                      <p className="text-sm text-amber-700 mb-3">
                        Always provide accessible labels for icon-only buttons.
                      </p>
                      <pre className="bg-white p-3 rounded border text-sm overflow-x-auto">
                        <code>{`<Button variant="outline" size="icon">
  <Plus className="h-4 w-4" />
  <span className="sr-only">Add item</span>
</Button>`}</code>
                      </pre>
                    </div>
                  </div>
                </TabsContent>

                {/* Focus Tab */}
                <TabsContent value="focus">
                  <div className="space-y-6">
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <h4 className="font-medium mb-2">Focus Ring</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Visible focus indicator using outline with offset for accessibility.
                      </p>
                      <div className="flex items-center gap-4">
                        <Button className="ring-2 ring-offset-2 ring-slate-900">
                          Focused Button
                        </Button>
                        <code className="text-xs bg-slate-100 px-2 py-1 rounded">
                          focus-visible:ring-2 ring-offset-2
                        </code>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-lg">
                      <h4 className="font-medium mb-2">Focus Order</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Buttons follow natural DOM order. Use tabindex only when necessary.
                      </p>
                      <div className="flex items-center gap-3">
                        <Button variant="outline" size="sm">First</Button>
                        <Button variant="outline" size="sm">Second</Button>
                        <Button variant="outline" size="sm">Third</Button>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-medium mb-2 text-blue-800">WCAG Compliance</h4>
                      <ul className="space-y-2 text-sm text-blue-700">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4" />
                          2.1.1 Keyboard - All functionality available via keyboard
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4" />
                          2.4.7 Focus Visible - Focus indicator always visible
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4" />
                          4.1.2 Name, Role, Value - Proper ARIA attributes
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
```

---

## Line-by-Line Specification

### Lines 623-633: Accessibility Card Header

```tsx
<Card className="mb-12">
  <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b">
    <CardTitle className="flex items-center gap-2">
      <Accessibility className="h-5 w-5 text-emerald-600" />
      Accessibility
    </CardTitle>
    <CardDescription>
      Keyboard navigation, screen reader support, and focus management
    </CardDescription>
  </CardHeader>
```

| Element | Purpose |
|---------|---------|
| Green gradient | Associates with accessibility/success |
| Accessibility icon | Universal accessibility symbol |
| Three topics listed | Sets expectation for tab content |

---

### Lines 635-650: Tab Navigation

```tsx
<Tabs defaultValue="keyboard" className="w-full">
  <TabsList className="mb-6">
    <TabsTrigger value="keyboard" className="flex items-center gap-2">
      <Keyboard className="h-4 w-4" />
      Keyboard
    </TabsTrigger>
    <TabsTrigger value="screenreader" className="flex items-center gap-2">
      <Eye className="h-4 w-4" />
      Screen Reader
    </TabsTrigger>
    <TabsTrigger value="focus" className="flex items-center gap-2">
      <Target className="h-4 w-4" />
      Focus
    </TabsTrigger>
  </TabsList>
```

| Tab | Icon | Content |
|-----|------|---------|
| Keyboard | Keyboard icon | Key shortcuts |
| Screen Reader | Eye icon | Announcements |
| Focus | Target icon | Focus ring details |

**Reference:** WCAG 2.1 - Three core accessibility concerns

---

### Lines 652-670: Keyboard Tab Content

```tsx
<TabsContent value="keyboard">
  <div className="space-y-4">
    <p className="text-sm text-muted-foreground mb-4">
      All keyboard interactions follow WAI-ARIA button pattern.
    </p>
    <div className="grid gap-3">
      {keyboardInteractions.map((interaction) => (
        <div 
          key={interaction.key}
          className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg"
        >
          <kbd className="px-3 py-1.5 bg-white border border-slate-200 rounded shadow-sm text-sm font-mono min-w-[80px] text-center">
            {interaction.key}
          </kbd>
          <span className="text-sm text-muted-foreground">{interaction.action}</span>
        </div>
      ))}
    </div>
  </div>
</TabsContent>
```

| Element | Purpose |
|---------|---------|
| `<kbd>` element | Semantic keyboard key representation |
| Shadow styling | Makes keys look pressable |
| WAI-ARIA reference | Establishes credibility |

**Reference:** WAI-ARIA Authoring Practices - Button Pattern

---

### Lines 673-700: Screen Reader Tab Content

Documents:
1. Role announcement ("button")
2. State announcements (disabled, loading)
3. Icon-only button warning with code example

| Section | Purpose |
|---------|---------|
| Role Announcement | Shows how button is read |
| State Announcements | Shows disabled/busy states |
| Icon-Only Warning | Critical accessibility reminder |

**Reference:** 
- VoiceOver/NVDA announcement patterns
- WCAG 4.1.2 Name, Role, Value

---

### Lines 703-720: Focus Tab Content

Documents:
1. Focus ring styling
2. Focus order (DOM order)
3. WCAG compliance checklist

| Section | Purpose |
|---------|---------|
| Focus Ring | Shows visible focus styling |
| Focus Order | Explains tab order |
| WCAG Compliance | Lists specific criteria met |

**Reference:**
- WCAG 2.1.1 Keyboard
- WCAG 2.4.7 Focus Visible
- WCAG 4.1.2 Name, Role, Value

---

## Verification Checklist

- [ ] Card has green gradient header
- [ ] Three tabs: Keyboard, Screen Reader, Focus
- [ ] Keyboard tab shows 4 interactions
- [ ] Screen Reader tab shows role and state announcements
- [ ] Screen Reader tab has icon-only button warning
- [ ] Focus tab shows focus ring example
- [ ] Focus tab lists WCAG criteria

---

**Next Section:** [CODE-EXAMPLES.md](./CODE-EXAMPLES.md)


