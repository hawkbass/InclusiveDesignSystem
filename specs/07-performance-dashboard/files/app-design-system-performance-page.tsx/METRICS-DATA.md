# Part: METRICS-DATA

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 2 of 8 |
| **Lines** | 45-73 |
| **Purpose** | Performance metrics data structure |

---

## What This Code Does

Defines the complete performance data including:
1. **Summary stats** - Overall system health metrics
2. **Component metrics** - Per-component performance data
3. **Browser support** - Compatibility matrix

---

## Code Block

```tsx

// Performance data (would be fetched from build analysis in production)
const performanceData = {
  summary: {
    totalBundleSize: "156.4kb",
    avgRenderTime: "3.2ms",
    a11yScore: 94,
    componentCount: 63,
    adoptionRate: 87,
  },
  components: [
    { name: "Button", bundleRaw: "8.2kb", bundleGzip: "2.4kb", renderTime: "1.2ms", a11y: 100, trend: "stable" },
    { name: "Card", bundleRaw: "12.1kb", bundleGzip: "3.8kb", renderTime: "2.1ms", a11y: 100, trend: "stable" },
    { name: "DataTable", bundleRaw: "45.6kb", bundleGzip: "14.2kb", renderTime: "8.4ms", a11y: 87, trend: "improving" },
    { name: "Dialog", bundleRaw: "18.3kb", bundleGzip: "5.6kb", renderTime: "3.8ms", a11y: 95, trend: "stable" },
    { name: "Select", bundleRaw: "22.4kb", bundleGzip: "7.1kb", renderTime: "4.2ms", a11y: 92, trend: "declining" },
    { name: "Tabs", bundleRaw: "14.7kb", bundleGzip: "4.5kb", renderTime: "2.3ms", a11y: 98, trend: "stable" },
    { name: "Input", bundleRaw: "6.4kb", bundleGzip: "1.9kb", renderTime: "0.8ms", a11y: 100, trend: "stable" },
    { name: "Checkbox", bundleRaw: "5.2kb", bundleGzip: "1.5kb", renderTime: "0.6ms", a11y: 95, trend: "stable" },
  ],
  browsers: [
    { name: "Chrome", version: "90+", status: "full" },
    { name: "Firefox", version: "88+", status: "full" },
    { name: "Safari", version: "14+", status: "full" },
    { name: "Edge", version: "90+", status: "full" },
    { name: "Samsung Internet", version: "14+", status: "full" },
    { name: "IE 11", version: "N/A", status: "none" },
  ],
}
```

---

## Data Structure

| Section | Fields |
|---------|--------|
| **summary** | totalBundleSize, avgRenderTime, a11yScore, componentCount, adoptionRate |
| **components[]** | name, bundleRaw, bundleGzip, renderTime, a11y, trend |
| **browsers[]** | name, version, status |

---

## Verification

- [ ] Summary has 5 metrics
- [ ] Components array has 8 items
- [ ] Browsers array has 6 items (including IE 11 with "none" status)
- [ ] Trend values are: "stable", "improving", or "declining"

---

**Next part:** `HEADER-SECTION.md`


