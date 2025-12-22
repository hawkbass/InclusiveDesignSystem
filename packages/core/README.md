# @inclusive-design/core

> A comprehensive, accessible design system for modern React applications. Built with accessibility-first principles for recruitment and enterprise applications.

[![npm version](https://img.shields.io/npm/v/@inclusive-design/core.svg)](https://www.npmjs.com/package/@inclusive-design/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- **102+ Components** - Comprehensive UI component library
- **WCAG 2.1 AA Compliant** - Built with accessibility at its core
- **Dark Mode Support** - Seamless light/dark theme switching
- **Responsive** - Mobile-first, works on all screen sizes
- **TypeScript** - Full type safety and IntelliSense
- **Performance Optimized** - Tree-shakeable, minimal bundle impact
- **Design Tokens** - Consistent styling with CSS variables

## Installation

```bash
# npm
npm install @inclusive-design/core

# yarn
yarn add @inclusive-design/core

# pnpm
pnpm add @inclusive-design/core
```

## Quick Start

### 1. Import Styles

Add the styles to your app's entry point:

```tsx
// app/layout.tsx or _app.tsx
import "@inclusive-design/core/styles.css"
```

### 2. Use Components

```tsx
import { Button, ThemeProvider } from "@inclusive-design/core"

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Button className="bg-fuchsia-600 hover:bg-fuchsia-700">
        Get Started
      </Button>
    </ThemeProvider>
  )
}
```

## Available Exports

### Components

```tsx
import { 
  Button,
  ThemeProvider,
  useTheme 
} from "@inclusive-design/core"
```

### Utilities

```tsx
import { cn } from "@inclusive-design/core"

// Merge Tailwind classes conditionally
cn("base-class", isActive && "active-class", className)
```

### Design Tokens (CSS)

```css
/* Import CSS custom properties */
@import "@inclusive-design/core/tokens.css";
```

### Design Tokens (JavaScript)

For Tailwind CSS configuration:

```js
// tailwind.config.js
const tokens = require("@inclusive-design/core/tokens")

module.exports = {
  theme: {
    extend: {
      colors: tokens.colors,
      fontFamily: tokens.fontFamily,
      borderRadius: tokens.borderRadius,
    }
  }
}
```

## Design Tokens

### Colors

The design system uses CSS custom properties for theming:

```css
:root {
  --primary: 292 84% 61%;      /* Fuchsia brand color */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... more tokens */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark mode overrides */
}
```

### Typography

- **Sans**: Satoshi, system-ui
- **Mono**: JetBrains Mono, monospace

### Spacing

Based on an 8px grid system with semantic tokens.

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Requirements

- React 16.8.0 or higher
- React DOM 16.8.0 or higher

## License

MIT © hawkbass

## Links

- [Documentation](https://github.com/hawkbass/InclusiveDesignSystem)
- [GitHub Repository](https://github.com/hawkbass/InclusiveDesignSystem)
- [Report Issues](https://github.com/hawkbass/InclusiveDesignSystem/issues)
