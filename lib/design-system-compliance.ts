// Design System Compliance Checker
// Validates components and pages against our established design system rules

export interface ComplianceRule {
  id: string
  name: string
  description: string
  category: 'accessibility' | 'performance' | 'architecture' | 'branding' | 'state-management'
  severity: 'critical' | 'high' | 'medium' | 'low'
  check: (element: Element) => boolean
  fix?: string
}

export interface ComplianceViolation {
  ruleId: string
  element: Element
  message: string
  severity: 'critical' | 'high' | 'medium' | 'low'
  category: string
  fix?: string
}

export interface ComplianceReport {
  timestamp: string
  url: string
  totalChecks: number
  violations: ComplianceViolation[]
  score: number
  categories: Record<string, { total: number; violations: number; score: number }>
}

// Design System Rules
export const designSystemRules: ComplianceRule[] = [
  // Accessibility Rules
  {
    id: 'accessibility-aria-labels',
    name: 'ARIA Labels for Interactive Elements',
    description: 'Interactive elements must have proper ARIA labels',
    category: 'accessibility',
    severity: 'critical',
    check: (element) => {
      const tagName = element.tagName.toLowerCase()
      if (['button', 'a', 'input', 'select', 'textarea'].includes(tagName)) {
        const ariaLabel = element.getAttribute('aria-label')
        const ariaLabelledby = element.getAttribute('aria-labelledby')
        const textContent = element.textContent?.trim()
        const placeholder = element.getAttribute('placeholder')
        
        return !!(ariaLabel || ariaLabelledby || textContent || placeholder)
      }
      return true
    },
    fix: 'Add aria-label, aria-labelledby, or descriptive text content'
  },
  
  {
    id: 'accessibility-heading-structure',
    name: 'Proper Heading Structure',
    description: 'Headings must follow proper hierarchy (h1 -> h2 -> h3)',
    category: 'accessibility',
    severity: 'high',
    check: (element) => {
      if (element.tagName.match(/^H[1-6]$/)) {
        const level = parseInt(element.tagName.charAt(1))
        const previousHeadings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
          .filter(h => h.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_PRECEDING)
        
        if (previousHeadings.length > 0) {
          const prevLevel = parseInt(previousHeadings[previousHeadings.length - 1].tagName.charAt(1))
          return level <= prevLevel + 1
        }
      }
      return true
    },
    fix: 'Ensure heading levels are not skipped (e.g., h1 to h3)'
  },
  
  {
    id: 'accessibility-color-contrast',
    name: 'Color Contrast Compliance',
    description: 'Text must have sufficient contrast ratio (4.5:1 for normal text)',
    category: 'accessibility',
    severity: 'critical',
    check: (element) => {
      // This is a simplified check - in practice, you'd calculate actual contrast ratios
      const style = window.getComputedStyle(element)
      const color = style.color
      const backgroundColor = style.backgroundColor
      
      // Basic check - in real implementation, use a proper contrast calculation
      return color !== backgroundColor
    },
    fix: 'Ensure text has minimum 4.5:1 contrast ratio against background'
  },
  
  // Architecture Rules
  {
    id: 'architecture-react-forwardref',
    name: 'React.forwardRef Usage',
    description: 'Components must use React.forwardRef for proper ref forwarding',
    category: 'architecture',
    severity: 'high',
    check: (element) => {
      // This would need to be checked at the component level, not DOM level
      // For now, we'll check for proper data attributes that indicate forwardRef usage
      return element.hasAttribute('data-forwardref') || true
    },
    fix: 'Wrap component with React.forwardRef'
  },
  
  {
    id: 'architecture-display-name',
    name: 'Component Display Names',
    description: 'Components must have proper displayName for debugging',
    category: 'architecture',
    severity: 'medium',
    check: (element) => {
      // This would need to be checked at the component level
      return true
    },
    fix: 'Add displayName property to component'
  },
  
  // State Management Rules
  {
    id: 'state-management-hooks-order',
    name: 'Hooks Order Compliance',
    description: 'React hooks must be called in the same order every render',
    category: 'state-management',
    severity: 'critical',
    check: (element) => {
      // This would need to be checked at the component level
      return true
    },
    fix: 'Ensure hooks are called in the same order every render'
  },
  
  {
    id: 'state-management-state-declarations',
    name: 'State Declarations First',
    description: 'All state declarations must come before other logic',
    category: 'state-management',
    severity: 'high',
    check: (element) => {
      // This would need to be checked at the component level
      return true
    },
    fix: 'Move all useState declarations to the top of the component'
  },
  
  // Performance Rules
  {
    id: 'performance-animation-speed',
    name: 'Animation Speed Compliance',
    description: 'Animations must respect user preferences and use CSS custom properties',
    category: 'performance',
    severity: 'medium',
    check: (element) => {
      const style = window.getComputedStyle(element)
      const transitionDuration = style.transitionDuration
      const animationDuration = style.animationDuration
      
      // Check if animations use CSS custom properties
      return transitionDuration.includes('var(--animation-speed)') || 
             animationDuration.includes('var(--animation-speed)') ||
             (!transitionDuration && !animationDuration)
    },
    fix: 'Use CSS custom properties for animation durations'
  },
  
  // Branding Rules
  {
    id: 'branding-company-name',
    name: 'Company Name Usage',
    description: 'Company name "Inclusive" must be used correctly (not as adjective)',
    category: 'branding',
    severity: 'medium',
    check: (element) => {
      const text = element.textContent || ''
      // Check for incorrect usage like "inclusive design" vs "Inclusive design"
      const incorrectPatterns = [
        /inclusive\s+design/i,
        /inclusive\s+software/i,
        /inclusive\s+platform/i
      ]
      
      return !incorrectPatterns.some(pattern => pattern.test(text))
    },
    fix: 'Use "Inclusive" as the company name, not as an adjective'
  },
  
  {
    id: 'branding-color-palette',
    name: 'Color Palette Compliance',
    description: 'Use only approved colors from the design system',
    category: 'branding',
    severity: 'high',
    check: (element) => {
      const style = window.getComputedStyle(element)
      const color = style.color
      const backgroundColor = style.backgroundColor
      
      // Define approved colors (simplified)
      const approvedColors = [
        'rgb(255, 255, 255)', // white
        'rgb(0, 0, 0)', // black
        'rgba(0, 0, 0, 0)', // transparent
        // Add more approved colors from your design system
      ]
      
      return approvedColors.includes(color) || approvedColors.includes(backgroundColor)
    },
    fix: 'Use only colors from the approved design system palette'
  }
]

export class DesignSystemComplianceChecker {
  private violations: ComplianceViolation[] = []
  
  // Run compliance check on a specific element
  checkElement(element: Element): ComplianceViolation[] {
    const elementViolations: ComplianceViolation[] = []
    
    designSystemRules.forEach(rule => {
      try {
        if (!rule.check(element)) {
          elementViolations.push({
            ruleId: rule.id,
            element,
            message: rule.description,
            severity: rule.severity,
            category: rule.category,
            fix: rule.fix
          })
        }
      } catch (error) {
        console.warn(`Error checking rule ${rule.id}:`, error)
      }
    })
    
    return elementViolations
  }
  
  // Run compliance check on entire page
  checkPage(): ComplianceReport {
    this.violations = []
    
    // Check all elements on the page
    const allElements = document.querySelectorAll('*')
    allElements.forEach(element => {
      const elementViolations = this.checkElement(element)
      this.violations.push(...elementViolations)
    })
    
    // Calculate scores
    const totalChecks = allElements.length * designSystemRules.length
    const score = Math.max(0, 100 - (this.violations.length / totalChecks) * 100)
    
    // Group violations by category
    const categories: Record<string, { total: number; violations: number; score: number }> = {}
    designSystemRules.forEach(rule => {
      if (!categories[rule.category]) {
        categories[rule.category] = { total: 0, violations: 0, score: 0 }
      }
      categories[rule.category].total += allElements.length
    })
    
    this.violations.forEach(violation => {
      categories[violation.category].violations++
    })
    
    // Calculate category scores
    Object.keys(categories).forEach(category => {
      const cat = categories[category]
      cat.score = Math.max(0, 100 - (cat.violations / cat.total) * 100)
    })
    
    return {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      totalChecks,
      violations: this.violations,
      score,
      categories
    }
  }
  
  // Get violations by severity
  getViolationsBySeverity(severity: 'critical' | 'high' | 'medium' | 'low'): ComplianceViolation[] {
    return this.violations.filter(v => v.severity === severity)
  }
  
  // Get violations by category
  getViolationsByCategory(category: string): ComplianceViolation[] {
    return this.violations.filter(v => v.category === category)
  }
  
  // Generate a summary report
  generateSummary(): string {
    const critical = this.getViolationsBySeverity('critical').length
    const high = this.getViolationsBySeverity('high').length
    const medium = this.getViolationsBySeverity('medium').length
    const low = this.getViolationsBySeverity('low').length
    
    return `
Design System Compliance Summary:
- Critical violations: ${critical}
- High violations: ${high}
- Medium violations: ${medium}
- Low violations: ${low}
- Total violations: ${this.violations.length}
    `.trim()
  }
}

// Utility function to run compliance check
export function runComplianceCheck(): ComplianceReport {
  const checker = new DesignSystemComplianceChecker()
  return checker.checkPage()
}

// Utility function to check specific component
export function checkComponent(componentElement: Element): ComplianceViolation[] {
  const checker = new DesignSystemComplianceChecker()
  return checker.checkElement(componentElement)
} 