/**
 * @inclusive-design/core - Design Tokens (JavaScript)
 *
 * Import these tokens for Tailwind config extension or runtime access
 * Usage: const tokens = require('@inclusive-design/core/tokens')
 */
const colors = {
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
    },
    popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
    },
    primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
    },
    secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
    },
    muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
    },
    accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
    },
    destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
    },
    border: "hsl(var(--border))",
    input: "hsl(var(--input))",
    ring: "hsl(var(--ring))",
    chart: {
        1: "hsl(var(--chart-1))",
        2: "hsl(var(--chart-2))",
        3: "hsl(var(--chart-3))",
        4: "hsl(var(--chart-4))",
        5: "hsl(var(--chart-5))",
    },
    fuchsia: {
        50: "#fdf4ff",
        100: "#fae8ff",
        200: "#f5d0fe",
        300: "#f0abfc",
        400: "#e879f9",
        500: "#d946ef",
        600: "#c026d3",
        700: "#a21caf",
        800: "#86198f",
        900: "#701a75",
        950: "#4a044e",
    },
};
const borderRadius = {
    lg: "var(--radius)",
    md: "calc(var(--radius) - 2px)",
    sm: "calc(var(--radius) - 4px)",
    xl: "calc(var(--radius) + 4px)",
    "2xl": "calc(var(--radius) + 8px)",
    full: "9999px",
};
const fontFamily = {
    sans: ["Satoshi", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
    mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "SF Mono", "Menlo", "Consolas", "monospace"],
};
const fontSize = {
    xs: ["0.75rem", { lineHeight: "1rem" }],
    sm: ["0.875rem", { lineHeight: "1.25rem" }],
    base: ["1rem", { lineHeight: "1.5rem" }],
    lg: ["1.125rem", { lineHeight: "1.75rem" }],
    xl: ["1.25rem", { lineHeight: "1.75rem" }],
    "2xl": ["1.5rem", { lineHeight: "2rem" }],
    "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
    "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
    "5xl": ["3rem", { lineHeight: "1" }],
};
const animation = {
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
    "fade-in": "fade-in 0.3s ease-out",
    "fade-out": "fade-out 0.3s ease-out",
    "slide-in-from-top": "slide-in-from-top 0.3s ease-out",
    "slide-in-from-bottom": "slide-in-from-bottom 0.3s ease-out",
    "slide-in-from-left": "slide-in-from-left 0.3s ease-out",
    "slide-in-from-right": "slide-in-from-right 0.3s ease-out",
};
const keyframes = {
    "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
    },
    "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
    },
    "fade-in": {
        from: { opacity: "0" },
        to: { opacity: "1" },
    },
    "fade-out": {
        from: { opacity: "1" },
        to: { opacity: "0" },
    },
    "slide-in-from-top": {
        from: { transform: "translateY(-100%)" },
        to: { transform: "translateY(0)" },
    },
    "slide-in-from-bottom": {
        from: { transform: "translateY(100%)" },
        to: { transform: "translateY(0)" },
    },
    "slide-in-from-left": {
        from: { transform: "translateX(-100%)" },
        to: { transform: "translateX(0)" },
    },
    "slide-in-from-right": {
        from: { transform: "translateX(100%)" },
        to: { transform: "translateX(0)" },
    },
};
// Default export for Tailwind extend
var tokens = {
    colors,
    borderRadius,
    fontFamily,
    fontSize,
    animation,
    keyframes,
};

export { animation, borderRadius, colors, tokens as default, fontFamily, fontSize, keyframes };
//# sourceMappingURL=tokens.esm.js.map
