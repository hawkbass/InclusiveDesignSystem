# @inclusive-design/core

A comprehensive, accessible design system built with React and Tailwind CSS.

## Installation

```bash
npm install @inclusive-design/core
# or
yarn add @inclusive-design/core
# or
pnpm add @inclusive-design/core
```

## Quick Start

1. **Import the CSS styles** in your main CSS file or app entry point:

```css
@import "@inclusive-design/core/styles.css";
```

2. **Wrap your app with the ThemeProvider** (optional but recommended):

```tsx
import { ThemeProvider } from "@inclusive-design/core"

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <YourApp />
    </ThemeProvider>
  )
}
```

3. **Start using components**:

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from "@inclusive-design/core"

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Inclusive Design</CardTitle>
      </CardHeader>
      <CardContent>
        <Button className="bg-fuchsia-600 hover:bg-fuchsia-700">
          Get Started
        </Button>
      </CardContent>
    </Card>
  )
}
```

## Features

- ✨ **50+ accessible components** built with Radix UI primitives
- 🎨 **Dark/light mode support** with system preference detection
- ♿ **WCAG 2.1 AA compliant** with comprehensive accessibility features
- 🎯 **TypeScript support** with full type definitions
- 📱 **Responsive design** with mobile-first approach
- 🎭 **Customizable themes** with CSS variables
- ⚡ **Tree-shakeable** - only import what you need
- 🔧 **Tailwind CSS integration** for easy customization

## Documentation

Visit our [documentation site](https://your-design-system.com) for:

- Complete component API reference
- Usage examples and patterns
- Accessibility guidelines
- Customization guides
- Migration guides

## Components

### Core Components
- Button, Input, Textarea, Select
- Card, Dialog, Sheet, Popover
- Table, Tabs, Accordion, Collapsible
- Alert, Toast, Progress, Skeleton

### Form Components
- Form, Label, Checkbox, Radio Group
- Switch, Slider, Calendar, Date Picker
- Input OTP, Command Palette

### Navigation
- Breadcrumb, Pagination, Context Menu
- Dropdown Menu, Navigation Menu
- Sidebar, Tabs, Toggle Group

### Data Display
- Avatar, Badge, Separator, Tooltip
- Hover Card, Chart, Data Table
- Aspect Ratio, Scroll Area

## Requirements

- React 16.8 or higher
- React DOM 16.8 or higher

## Peer Dependencies

Make sure you have these installed in your project:

```bash
npm install react react-dom
```

## License

MIT © [Your Name]

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## Support

- 📖 [Documentation](https://your-design-system.com)
- 🐛 [Issues](https://github.com/yourusername/inclusive-design-system/issues)
- 💬 [Discussions](https://github.com/yourusername/inclusive-design-system/discussions)
