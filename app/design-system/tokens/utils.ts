// Utility functions for tokens page

// Calculate contrast ratio between two colours
export function getContrastRatio(foreground: string, background: string): number {
  // Simplified contrast calculation (would use actual luminance in production)
  const contrastValues: Record<string, number> = {
    "white-fuchsia-500": 4.5,
    "white-fuchsia-600": 5.2,
    "white-purple-500": 4.1,
    "white-blue-500": 4.6,
    "slate-900-white": 15.3,
    "slate-50-slate-950": 18.1,
    "fuchsia-500-slate-950": 6.2,
    "slate-400-white": 3.0,
    "slate-500-white": 4.6,
  }
  const key = `${foreground}-${background}`
  return contrastValues[key] || 4.5
}

// Check WCAG compliance
export function getWCAGLevel(ratio: number): { level: string; color: string } {
  if (ratio >= 7) return { level: "AAA", color: "text-green-600 dark:text-green-400" }
  if (ratio >= 4.5) return { level: "AA", color: "text-blue-600 dark:text-blue-400" }
  if (ratio >= 3) return { level: "AA Large", color: "text-amber-400" }
  return { level: "Fail", color: "text-red-400" }
}

// Generate export code
export function generateExportCode(
  format: "css" | "scss" | "json" | "js",
  previewTheme: "light" | "dark"
): string {
  const tokens = {
    "color-primary": "#d946ef",
    "color-secondary": "#a855f7",
    "color-background": previewTheme === "dark" ? "#020617" : "#ffffff",
    "space-sm": "12px",
    "space-md": "16px",
    "space-lg": "24px",
  }

  switch (format) {
    case "css":
      return `:root {\n${Object.entries(tokens).map(([k, v]) => `  --${k}: ${v};`).join("\n")}\n}`
    case "scss":
      return Object.entries(tokens).map(([k, v]) => `$${k}: ${v};`).join("\n")
    case "json":
      return JSON.stringify(tokens, null, 2)
    case "js":
      return `export const tokens = ${JSON.stringify(tokens, null, 2)};`
    default:
      return ""
  }
}
