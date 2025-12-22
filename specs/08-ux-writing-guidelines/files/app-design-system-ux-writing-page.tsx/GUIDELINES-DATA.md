# Part: GUIDELINES-DATA

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 2 of 8 |
| **Lines** | 48-114 |
| **Purpose** | Voice attributes, microcopy patterns, terminology data |

---

## What This Code Does

Defines all the content data structures:
1. **Voice attributes** - Professional, Helpful, Clear, Efficient
2. **Microcopy patterns** - Buttons, errors, empty states
3. **Terminology** - Preferred vs avoided terms

---

## Design References

| Reference | Application |
|-----------|-------------|
| **Shopify Polaris Content Guidelines** | Voice and tone structure |
| **Gov.uk Content Design** | Plain language principles |

---

## Code Block

```tsx

// Voice attributes
const voiceAttributes = [
  {
    name: "Professional",
    description: "Competent and trustworthy, showing expertise without being cold",
    do: "Your profile has been updated successfully.",
    dont: "Yay! Your profile is all done! 🎉",
  },
  {
    name: "Helpful",
    description: "Guiding and supportive, anticipating user needs",
    do: "Try searching with fewer filters to see more results.",
    dont: "No results found.",
  },
  {
    name: "Clear",
    description: "Plain language, avoiding jargon and technical terms",
    do: "Add a candidate to this job posting",
    dont: "Associate candidate record with vacancy instance",
  },
  {
    name: "Efficient",
    description: "Concise and scannable, respecting user's time",
    do: "Save",
    dont: "Click here to save your changes",
  },
]

// Microcopy patterns
const microcopyPatterns = {
  buttons: [
    { pattern: "Save", context: "Persist current changes", good: true },
    { pattern: "Save changes", context: "When emphasising what's being saved", good: true },
    { pattern: "Click here", context: "Non-descriptive, accessibility issue", good: false },
    { pattern: "Submit", context: "Too generic for most contexts", good: false },
    { pattern: "Add candidate", context: "Specific action", good: true },
    { pattern: "Delete account", context: "Clear destructive action", good: true },
    { pattern: "Yes", context: "Requires context from elsewhere", good: false },
    { pattern: "Confirm deletion", context: "Clear confirmation", good: true },
  ],
  errors: [
    { pattern: "Email address is invalid", context: "Specific error", good: true },
    { pattern: "Enter a valid email (e.g., name@company.com)", context: "Error with example", good: true },
    { pattern: "Error", context: "Not helpful", good: false },
    { pattern: "Invalid input", context: "Too vague", good: false },
    { pattern: "We couldn't save your changes. Please try again.", context: "Friendly error", good: true },
    { pattern: "Error 500: Internal server error", context: "Technical jargon", good: false },
  ],
  empty: [
    { pattern: "No candidates yet. Post a job to start receiving applications.", context: "First-use with guidance", good: true },
    { pattern: "No data", context: "Not helpful", good: false },
    { pattern: "You're all caught up!", context: "Positive completion", good: true },
    { pattern: "Nothing here", context: "Feels negative", good: false },
  ],
}

// Terminology
const terminology = [
  { use: "Candidate", instead: "Applicant, person", context: "Job seekers" },
  { use: "Job posting", instead: "Job ad, vacancy", context: "Published positions" },
  { use: "Application", instead: "Submission", context: "Candidate's application" },
  { use: "Interview", instead: "Meeting (when ambiguous)", context: "Formal assessment" },
  { use: "Skills", instead: "Competencies", context: "Abilities and experience" },
  { use: "Select", instead: "Click", context: "Accessibility-friendly action" },
  { use: "Doesn't match", instead: "Invalid", context: "Form validation" },
]
```

---

## Data Structures

| Data | Items |
|------|-------|
| `voiceAttributes` | 4 voice characteristics |
| `microcopyPatterns.buttons` | 8 button label patterns |
| `microcopyPatterns.errors` | 6 error message patterns |
| `microcopyPatterns.empty` | 4 empty state patterns |
| `terminology` | 7 terminology standards |

---

## Verification

- [ ] Voice attributes has 4 items with do/dont examples
- [ ] Microcopy patterns has buttons, errors, empty categories
- [ ] Terminology has 7 preferred terms

---

**Next part:** `HEADER-SECTION.md`


