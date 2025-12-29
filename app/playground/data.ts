// Data structures for the playground page

export const componentDefinitions = {
  Button: {
    variants: ["default", "secondary", "outline", "ghost", "destructive", "link"],
    sizes: ["xs", "sm", "default", "lg", "xl"],
    states: ["default", "hover", "active", "disabled", "loading", "focus"],
    props: ["disabled", "loading", "asChild", "fullWidth"],
    accessibility: {
      role: "button",
      ariaLabel: "Interactive button with full keyboard and screen reader support",
      keyboardShortcuts: ["Enter", "Space"],
      contrast: "AAA",
      focusIndicator: "2px outline with high contrast"
    },
    performance: {
      bundleSize: "2.1kb (gzipped)",
      renderTime: "< 1ms",
      reRenders: "Optimized with React.memo",
      interactions: "Hardware accelerated"
    }
  },
  Card: {
    variants: ["default", "outlined", "elevated"],
    sizes: ["sm", "default", "lg"],
    states: ["default", "hover", "active"],
    props: ["padding", "shadow", "rounded"],
    accessibility: {
      role: "article",
      ariaLabel: "Card container with semantic structure",
      keyboardShortcuts: [],
      contrast: "AAA",
      focusIndicator: "Focusable when interactive"
    },
    performance: {
      bundleSize: "1.8kb (gzipped)",
      renderTime: "< 1ms",
      reRenders: "Optimized",
      interactions: "Smooth transitions"
    }
  },
  Input: {
    variants: ["default", "error", "success"],
    sizes: ["sm", "default", "lg"],
    states: ["default", "focus", "disabled", "error"],
    props: ["type", "placeholder", "disabled", "required"],
    accessibility: {
      role: "textbox",
      ariaLabel: "Text input with full accessibility support",
      keyboardShortcuts: ["Tab", "Enter"],
      contrast: "AAA",
      focusIndicator: "2px outline"
    },
    performance: {
      bundleSize: "2.3kb (gzipped)",
      renderTime: "< 1ms",
      reRenders: "Controlled updates",
      interactions: "Debounced input"
    }
  }
}

export const exportFormats = [
  { id: "react", label: "React", extension: ".tsx" },
  { id: "vue", label: "Vue", extension: ".vue" },
  { id: "angular", label: "Angular", extension: ".ts" },
  { id: "css", label: "CSS", extension: ".css" }
]

export const responsiveBreakpoints = [
  { name: "Mobile", width: 375, height: 667, icon: "Smartphone" },
  { name: "Tablet", width: 768, height: 1024, icon: "Tablet" },
  { name: "Desktop", width: 1920, height: 1080, icon: "Monitor" }
]
