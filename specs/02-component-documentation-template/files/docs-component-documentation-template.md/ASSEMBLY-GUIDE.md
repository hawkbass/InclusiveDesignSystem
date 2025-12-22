# Assembly Guide: docs/component-documentation-template.md

## File Overview

| Property | Value |
|----------|-------|
| **Final File Path** | `docs/component-documentation-template.md` |
| **File Type** | Markdown Documentation |
| **Total Lines** | ~250 |
| **Total Parts** | 5 |
| **Purpose** | Reusable template for documenting any component |

---

## Reading Order

Implement each part file in this exact sequence:

| Order | Part File | What It Creates |
|-------|-----------|-----------------|
| 1 | `HEADER-METADATA.md` | Title, badges, frontmatter |
| 2 | `OVERVIEW-SECTION.md` | When to use, anatomy, installation |
| 3 | `API-SECTION.md` | Props table, TypeScript interface |
| 4 | `EXAMPLES-SECTION.md` | Code examples, composition patterns |
| 5 | `ACCESSIBILITY-FOOTER.md` | Accessibility docs, related components, changelog |

---

## How to Assemble

### Step 1: Create the Folder
Ensure folder exists: `docs/`

### Step 2: Create the File
Create: `docs/component-documentation-template.md`

### Step 3: Copy Each Part in Order
For each part file:
1. Open the part file
2. Copy the content block
3. Paste into your file after the previous part

---

## Purpose of This Template

This markdown template serves as a **reusable blueprint** for documenting any component in the design system. It ensures:

1. **Consistency** - All component docs follow the same structure
2. **Completeness** - No important sections are missed
3. **Quality** - Best practices are built into the template

---

## How to Use the Template

When documenting a new component:

1. Copy `docs/component-documentation-template.md`
2. Rename to `docs/[component-name].md`
3. Replace all `[ComponentName]` placeholders
4. Fill in component-specific content
5. Remove any sections not applicable

---

## Verification Checklist

After assembly:

- [ ] All sections have clear headings
- [ ] Placeholder text is marked with `[brackets]`
- [ ] Code examples have syntax highlighting
- [ ] Accessibility section is comprehensive
- [ ] Template renders correctly in markdown preview

---

**Start with:** `HEADER-METADATA.md`


