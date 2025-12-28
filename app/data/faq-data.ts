/**
 * FAQ Data
 * 
 * Frequently asked questions and answers about the design system,
 * organized by category for easy navigation and search.
 */

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  tags: string[]
  related: string[]
  lastUpdated: string
}

export const faqs: FAQ[] = [
  {
    id: "getting-started",
    question: "How do I get started with the Inclusive Design System?",
    answer: "Getting started is easy! First, install the package using npm, yarn, or pnpm. Then, import the styles and wrap your app with the ThemeProvider. Check out our Getting Started guide for detailed step-by-step instructions, code examples, and role-based learning paths for developers, designers, and product managers.",
    category: "Getting Started",
    tags: ["installation", "setup", "quick-start"],
    related: ["installation", "theme-provider", "first-component"],
    lastUpdated: "2024-01-15"
  },
  {
    id: "installation",
    question: "How do I install the design system?",
    answer: "You can install the Inclusive Design System using any package manager:\n\nnpm: `npm install @hawkbass/inclusive-design-core`\nyarn: `yarn add @hawkbass/inclusive-design-core`\npnpm: `pnpm add @hawkbass/inclusive-design-core`\n\nAfter installation, import the styles in your app and set up the ThemeProvider. See our installation guide for complete setup instructions.",
    category: "Getting Started",
    tags: ["npm", "yarn", "pnpm", "package"],
    related: ["getting-started", "theme-provider"],
    lastUpdated: "2024-01-15"
  },
  {
    id: "accessibility",
    question: "What accessibility standards does the design system meet?",
    answer: "The Inclusive Design System is built with accessibility as a core principle. All components meet WCAG 2.1 Level AA standards, with many components exceeding to Level AAA. Features include full keyboard navigation, screen reader support, proper ARIA attributes, high contrast ratios, and focus management. We provide accessibility documentation for each component.",
    category: "Accessibility",
    tags: ["wcag", "a11y", "standards", "compliance"],
    related: ["accessibility-guide", "keyboard-navigation", "screen-readers"],
    lastUpdated: "2024-01-14"
  },
  {
    id: "customization",
    question: "Can I customize the design system to match my brand?",
    answer: "Yes! The design system is highly customizable through design tokens. You can customize colors, typography, spacing, shadows, and more using CSS variables. We provide a theme builder tool and comprehensive theming documentation. You can also create custom component variants while maintaining accessibility and design system principles.",
    category: "Customization",
    tags: ["theming", "customization", "brand", "tokens"],
    related: ["theming", "design-tokens", "theme-builder"],
    lastUpdated: "2024-01-13"
  },
  {
    id: "browser-support",
    question: "What browsers are supported?",
    answer: "The Inclusive Design System supports all modern browsers including Chrome, Firefox, Safari, and Edge (latest 2 versions). We also support mobile browsers on iOS and Android. For older browsers, we recommend using polyfills. See our browser support documentation for detailed compatibility information.",
    category: "Technical",
    tags: ["browsers", "compatibility", "support"],
    related: ["browser-support", "polyfills"],
    lastUpdated: "2024-01-12"
  },
  {
    id: "performance",
    question: "How does the design system impact performance?",
    answer: "Performance is a key consideration in the design system. Components are optimized for fast rendering, minimal bundle size, and efficient re-renders. Average component size is 2.4kb gzipped, with render times under 2ms. We use code splitting, tree shaking, and lazy loading where appropriate. See our performance documentation for benchmarks and optimization tips.",
    category: "Technical",
    tags: ["performance", "optimization", "bundle-size"],
    related: ["performance-guide", "optimization"],
    lastUpdated: "2024-01-11"
  },
  {
    id: "typescript",
    question: "Does the design system support TypeScript?",
    answer: "Yes! The Inclusive Design System is built with TypeScript and includes full type definitions. All components are fully typed with comprehensive prop interfaces, making it easy to use with TypeScript projects. We provide TypeScript examples in all documentation.",
    category: "Technical",
    tags: ["typescript", "types", "typing"],
    related: ["typescript-guide", "type-definitions"],
    lastUpdated: "2024-01-10"
  },
  {
    id: "react-version",
    question: "What version of React is required?",
    answer: "The design system requires React 18 or higher. We use modern React features including hooks, context, and concurrent features. If you're using an older version of React, you'll need to upgrade. See our migration guide for help upgrading from React 17.",
    category: "Technical",
    tags: ["react", "version", "requirements"],
    related: ["react-requirements", "migration"],
    lastUpdated: "2024-01-09"
  },
  {
    id: "mobile-support",
    question: "Is the design system mobile-friendly?",
    answer: "Absolutely! The design system is built mobile-first with responsive design principles. All components work seamlessly on mobile, tablet, and desktop devices. We provide responsive patterns, breakpoint utilities, and mobile-optimized component variants. See our responsive design documentation for details.",
    category: "Responsive",
    tags: ["mobile", "responsive", "tablet"],
    related: ["responsive-design", "mobile-patterns"],
    lastUpdated: "2024-01-08"
  },
  {
    id: "contributing",
    question: "Can I contribute to the design system?",
    answer: "We welcome contributions! You can contribute by reporting bugs, suggesting new components, improving documentation, or submitting pull requests. Check out our contribution guidelines for information on how to get started, coding standards, and our review process.",
    category: "Community",
    tags: ["contribution", "open-source", "community"],
    related: ["contribution-guide", "code-of-conduct"],
    lastUpdated: "2024-01-07"
  },
  {
    id: "licensing",
    question: "What is the license for the design system?",
    answer: "The Inclusive Design System is licensed under the MIT License, which allows you to use, modify, and distribute the code freely, including in commercial projects. See our license file for complete terms and conditions.",
    category: "Legal",
    tags: ["license", "mit", "legal"],
    related: ["license", "terms"],
    lastUpdated: "2024-01-06"
  },
  {
    id: "support",
    question: "How can I get support?",
    answer: "We offer multiple support channels:\n\n- Documentation: Comprehensive guides and examples\n- GitHub Issues: Bug reports and feature requests\n- Community Forum: Discussions and Q&A\n- Email Support: For enterprise customers\n\nCheck our support page for contact information and response times.",
    category: "Support",
    tags: ["support", "help", "contact"],
    related: ["support-channels", "contact"],
    lastUpdated: "2024-01-05"
  },
  {
    id: "updates",
    question: "How often is the design system updated?",
    answer: "We release updates regularly with new components, improvements, and bug fixes. Major versions are released quarterly, with minor updates monthly. We follow semantic versioning and provide migration guides for breaking changes. Subscribe to our changelog to stay updated.",
    category: "Updates",
    tags: ["updates", "releases", "versioning"],
    related: ["changelog", "versioning", "migration"],
    lastUpdated: "2024-01-04"
  }
]

// Helper functions
export function getFAQById(id: string): FAQ | undefined {
  return faqs.find(faq => faq.id === id)
}

export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter(faq => faq.category === category)
}

export function searchFAQs(query: string): FAQ[] {
  const lowerQuery = query.toLowerCase()
  return faqs.filter(faq =>
    faq.question.toLowerCase().includes(lowerQuery) ||
    faq.answer.toLowerCase().includes(lowerQuery) ||
    faq.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  )
}

export function getRelatedFAQs(id: string): FAQ[] {
  const faq = getFAQById(id)
  if (!faq) return []
  return faqs.filter(f =>
    faq.related.includes(f.id) && f.id !== id
  )
}

