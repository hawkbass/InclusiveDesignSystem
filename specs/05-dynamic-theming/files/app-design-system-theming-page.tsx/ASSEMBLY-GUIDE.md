# Assembly Guide: app/design-system/theming/page.tsx

## File Overview

| Property | Value |
|----------|-------|
| **Final File Path** | `app/design-system/theming/page.tsx` |
| **File Type** | React Component (TypeScript/TSX) |
| **Total Lines** | ~700 |
| **Total Parts** | 8 |
| **Purpose** | Dynamic theme generator with color palette creation |

---

## Reading Order

| Order | Part File | What It Creates |
|-------|-----------|-----------------|
| 1 | `IMPORTS.md` | Client directive, imports |
| 2 | `COLOR-UTILS.md` | Color conversion, palette generation |
| 3 | `STATE-HANDLERS.md` | State management |
| 4 | `COLOR-PICKER-SECTION.md` | Brand color input |
| 5 | `PALETTE-DISPLAY.md` | Generated palettes |
| 6 | `PREVIEW-SECTION.md` | Theme preview |
| 7 | `EXPORT-SECTION.md` | Export options |
| 8 | `FOOTER.md` | Closing tags |

---

## Dependencies

| Component | Path |
|-----------|------|
| UnifiedSidebar | `components/ui/unified-sidebar.tsx` |
| Card | `components/ui/card.tsx` |
| Button | `components/ui/button.tsx` |
| Input | `components/ui/input.tsx` |
| Tabs | `components/ui/tabs.tsx` |
| CodeEditor | `components/ui/code-editor.tsx` |

---

## Key Functions

### hexToHSL
Converts hex color to HSL values for manipulation.

### generateTonalPalette
Creates 10 shades from a base hue.

### getContrastRatio
Calculates WCAG contrast ratio between two colors.

### generateTheme
Main function that produces complete theme object.

---

## Verification Checklist

- [ ] Color picker accepts hex input
- [ ] Palette generates 10 shades
- [ ] Complementary color calculates correctly
- [ ] Contrast indicators show AA/AAA
- [ ] Light/dark preview works
- [ ] CSS export generates valid code
- [ ] Tailwind export generates valid config

---

**Start with:** `IMPORTS.md`


