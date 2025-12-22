# Feature 08: UX Writing Guidelines

## Overview

| Property | Value |
|----------|-------|
| **Feature ID** | 08 |
| **Feature Name** | UX Writing Guidelines |
| **Status** | Specification Complete |
| **Priority** | Medium |
| **Estimated Complexity** | Low |

---

## Purpose

Provide comprehensive guidelines for writing user interface copy, including voice and tone, microcopy patterns, error messages, and accessibility writing. This ensures consistent, clear, and user-friendly content across all interfaces using the design system.

---

## Design References

| Source | Contribution |
|--------|--------------|
| **Shopify Polaris** | Voice and tone guidelines |
| **Mailchimp Content Style Guide** | Writing principles |
| **Microsoft Writing Style Guide** | UI text patterns |
| **Google Material Design** | Writing guidelines |
| **Nielsen Norman Group** | UX writing research |

---

## Content Sections

### 1. Voice and Tone
- Brand voice characteristics
- Tone variations by context
- Personality traits
- Writing principles

### 2. UI Text Patterns
- Button labels
- Navigation labels
- Form labels and placeholders
- Headings and titles

### 3. Microcopy
- Tooltips
- Help text
- Progress indicators
- Confirmation messages

### 4. Error Messages
- Error message structure
- Inline validation
- Form errors
- System errors

### 5. Empty States
- First-time user messages
- No results messages
- Error state messages
- Success messages

### 6. Accessibility Writing
- Alt text guidelines
- Screen reader text
- Accessible labels
- ARIA descriptions

---

## Files Modified/Created

### UX Writing Guidelines Page
**Path:** `app/design-system/ux-writing/page.tsx`

| Part File | Lines | Description |
|-----------|-------|-------------|
| `ASSEMBLY-GUIDE.md` | - | How to assemble the page |
| `IMPORTS.md` | 1-40 | Client directive, imports |
| `GUIDELINES-DATA.md` | 41-200 | Writing guidelines content |
| `HEADER-SECTION.md` | 201-260 | Hero and navigation |
| `VOICE-TONE-SECTION.md` | 261-380 | Voice and tone guidelines |
| `UI-TEXT-PATTERNS.md` | 381-500 | Common UI text patterns |
| `ERROR-MESSAGES.md` | 501-600 | Error message guidelines |
| `ACCESSIBILITY-WRITING.md` | 601-700 | Accessible writing tips |
| `FOOTER.md` | 701-750 | Related resources, closing |

---

## Voice Characteristics

| Characteristic | Description | Example |
|----------------|-------------|---------|
| **Clear** | Simple, direct language | "Save changes" not "Persist modifications" |
| **Helpful** | Guide users to success | "Enter your email to continue" |
| **Confident** | Assured without arrogance | "Your file is saved" not "File saved successfully!" |
| **Human** | Natural, conversational | "We couldn't find that" not "Error 404" |

---

## Writing Patterns

### Button Labels

| Do | Don't |
|----|-------|
| Save | Submit |
| Cancel | Abort |
| Delete account | Remove |
| Continue | Next |
| Sign in | Login |

### Error Messages

```
Structure: [What happened] + [Why it happened] + [What to do next]

Example:
"Unable to save your changes. Your session has expired. Please sign in again."
```

### Empty States

```tsx
// First-time user
<EmptyState
  title="Welcome to your dashboard"
  description="This is where you'll see your projects. Create your first one to get started."
  action="Create project"
/>

// No search results
<EmptyState
  title="No results found"
  description="Try adjusting your search terms or filters."
  action="Clear search"
/>
```

---

## Accessibility Writing

### Alt Text Guidelines

| Image Type | Alt Text Pattern |
|------------|------------------|
| Decorative | `alt=""` (empty) |
| Informative | Describe content |
| Functional | Describe action |
| Complex | Provide long description |

### Screen Reader Text

```tsx
// Icon-only button
<Button size="icon">
  <Trash className="h-4 w-4" />
  <span className="sr-only">Delete item</span>
</Button>

// Link with context
<a href="/settings">
  Settings
  <span className="sr-only">, opens in current window</span>
</a>
```

---

## Content Checklist

For each piece of UI text, ask:

- [ ] Is it clear what action will happen?
- [ ] Is it using simple, familiar words?
- [ ] Is it appropriate for the context?
- [ ] Is it accessible to screen readers?
- [ ] Is it consistent with existing patterns?
- [ ] Is it respectful of the user's time?

---

## Verification Checklist

After implementing this feature:

- [ ] Page loads at `/design-system/ux-writing`
- [ ] Voice and tone section displays
- [ ] UI text patterns show do/don't examples
- [ ] Error message guidelines are comprehensive
- [ ] Accessibility writing section is complete
- [ ] All code examples are copy-paste ready
- [ ] Navigation between sections works

---

## Directory Structure

```
specs/08-ux-writing-guidelines/
├── 00-FEATURE-OVERVIEW.md (this file)
└── files/
    └── app-design-system-ux-writing-page.tsx/
        ├── ASSEMBLY-GUIDE.md
        ├── IMPORTS.md
        ├── GUIDELINES-DATA.md
        ├── HEADER-SECTION.md
        ├── VOICE-TONE-SECTION.md
        ├── UI-TEXT-PATTERNS.md
        ├── ERROR-MESSAGES.md
        ├── ACCESSIBILITY-WRITING.md
        └── FOOTER.md

Total: 9 part files
```

