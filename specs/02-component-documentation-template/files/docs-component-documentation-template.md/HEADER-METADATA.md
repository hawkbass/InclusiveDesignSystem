# HEADER-METADATA.md - Template Header and Frontmatter

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `docs/component-documentation-template.md` |
| **This Section** | Lines 1-50 |
| **Previous Section** | None (this is the first section) |
| **Next Section** | [OVERVIEW-SECTION.md](./OVERVIEW-SECTION.md) |

---

## Content Block

````markdown
---
title: "[ComponentName]"
description: "[One sentence description of what the component does]"
status: "stable" # stable | beta | deprecated
version: "1.0.0"
category: "[Category]" # Actions | Forms | Layout | Navigation | Feedback | Data Display
---

# [ComponentName]

<!-- Status Badges -->
![Status](https://img.shields.io/badge/status-stable-green)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![WCAG](https://img.shields.io/badge/WCAG-AAA-success)

> [One sentence description of what the component does and its primary use case.]

## Quick Links

- [Figma Designs](https://figma.com/your-org/[component-name])
- [Source Code](https://github.com/your-org/design-system/tree/main/components/[component-name])
- [Storybook](https://storybook.your-org.com/?path=/story/[component-name])

---
````

---

## Line-by-Line Specification

### Lines 1-8: YAML Frontmatter

```yaml
---
title: "[ComponentName]"
description: "[One sentence description of what the component does]"
status: "stable" # stable | beta | deprecated
version: "1.0.0"
category: "[Category]" # Actions | Forms | Layout | Navigation | Feedback | Data Display
---
```

| Field | Purpose | Values |
|-------|---------|--------|
| `title` | Component display name | PascalCase |
| `description` | Brief component description | < 100 chars |
| `status` | Development status | stable, beta, deprecated |
| `version` | Semantic version | x.y.z format |
| `category` | Navigation category | See comment |

**Reference:** MDX frontmatter best practices

---

### Lines 10-16: Title and Badges

```markdown
# [ComponentName]

![Status](https://img.shields.io/badge/status-stable-green)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![WCAG](https://img.shields.io/badge/WCAG-AAA-success)
```

| Badge | Purpose | Color |
|-------|---------|-------|
| Status | Shows stability | green (stable), yellow (beta), red (deprecated) |
| Version | Current version | blue |
| WCAG | Accessibility level | green (success) |

**Reference:** shields.io badge standard

---

### Lines 18-19: Description Blockquote

```markdown
> [One sentence description of what the component does and its primary use case.]
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Provides scannable summary |
| **Why blockquote** | Visual emphasis, easy to skim |

---

### Lines 21-26: Quick Links

```markdown
## Quick Links

- [Figma Designs](https://figma.com/your-org/[component-name])
- [Source Code](https://github.com/your-org/design-system/tree/main/components/[component-name])
- [Storybook](https://storybook.your-org.com/?path=/story/[component-name])
```

| Link | Purpose |
|------|---------|
| Figma Designs | Design source of truth |
| Source Code | Implementation reference |
| Storybook | Interactive examples |

**Reference:** IBM Carbon - Quick links pattern

---

## Placeholder Instructions

When using this template, replace:

| Placeholder | Replace With |
|-------------|--------------|
| `[ComponentName]` | Actual component name (e.g., "Button") |
| `[One sentence description...]` | Specific description |
| `[Category]` | Appropriate category |
| `your-org` | Your organization name |
| `[component-name]` | Kebab-case component name |

---

## Verification Checklist

- [ ] Frontmatter has all 5 fields
- [ ] Three badges are present
- [ ] Blockquote description is clear
- [ ] Three quick links are defined
- [ ] Horizontal rule separates from next section

---

**Next Section:** [OVERVIEW-SECTION.md](./OVERVIEW-SECTION.md)


