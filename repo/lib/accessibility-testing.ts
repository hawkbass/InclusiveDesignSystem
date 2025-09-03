// Accessibility testing utilities for WCAG 2.1 AA compliance

export interface AccessibilityViolation {
  id: string
  impact: 'critical' | 'serious' | 'moderate' | 'minor'
  description: string
  help: string
  helpUrl?: string
  tags: string[]
  nodes: Array<{
    html: string
    target: string[]
    failureSummary?: string
  }>
}

export interface AccessibilityResult {
  passes: boolean
  violations: AccessibilityViolation[]
  incomplete: number
  inapplicable: number
  timestamp: string
  url: string
}

// Basic accessibility checks that can be run in the browser
export class AccessibilityChecker {
  private violations: AccessibilityViolation[] = []

  // Check for proper heading structure
  checkHeadingStructure(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    const headingLevels: number[] = []
    
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1))
      headingLevels.push(level)
      
      // Check for skipped heading levels
      if (index > 0) {
        const prevLevel = headingLevels[index - 1]
        if (level - prevLevel > 1) {
          this.addViolation({
            id: 'heading-order',
            impact: 'moderate',
            description: 'Heading levels should not be skipped',
            help: 'Ensure heading levels are not skipped (e.g., h1 to h3)',
            tags: ['wcag2a', 'wcag131'],
            nodes: [{
              html: heading.outerHTML,
              target: [heading.tagName.toLowerCase()],
              failureSummary: `Heading level ${level} follows heading level ${prevLevel}`
            }]
          })
        }
      }
    })
  }

  // Check for proper alt text on images
  checkImageAltText(): void {
    const images = document.querySelectorAll('img')
    
    images.forEach(img => {
      const alt = img.getAttribute('alt')
      const role = img.getAttribute('role')
      const ariaLabel = img.getAttribute('aria-label')
      
      // Skip decorative images with role="presentation" or aria-hidden="true"
      if (role === 'presentation' || img.getAttribute('aria-hidden') === 'true') {
        return
      }
      
      // Check if image has meaningful alt text or aria-label
      if (!alt && !ariaLabel) {
        this.addViolation({
          id: 'image-alt',
          impact: 'critical',
          description: 'Images must have alternative text',
          help: 'Provide alternative text for images that convey information',
          tags: ['wcag2a', 'wcag111'],
          nodes: [{
            html: img.outerHTML,
            target: ['img'],
            failureSummary: 'Image missing alternative text'
          }]
        })
      }
    })
  }

  // Check for proper form labels
  checkFormLabels(): void {
    const inputs = document.querySelectorAll('input, select, textarea')
    
    inputs.forEach(input => {
      const id = input.getAttribute('id')
      const ariaLabel = input.getAttribute('aria-label')
      const ariaLabelledby = input.getAttribute('aria-labelledby')
      const placeholder = input.getAttribute('placeholder')
      
      // Skip hidden inputs
      if (input.getAttribute('type') === 'hidden') {
        return
      }
      
      // Check if input has proper labeling
      if (!id && !ariaLabel && !ariaLabelledby) {
        this.addViolation({
          id: 'label',
          impact: 'critical',
          description: 'Form controls must have labels',
          help: 'Provide labels for form controls',
          tags: ['wcag2a', 'wcag111'],
          nodes: [{
            html: input.outerHTML,
            target: [input.tagName.toLowerCase()],
            failureSummary: 'Form control missing label'
          }]
        })
      }
    })
  }

  // Check for proper color contrast
  checkColorContrast(): void {
    // This is a simplified check - in practice, you'd want to use a library like axe-core
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6, a, button, label')
    
    textElements.forEach(element => {
      const style = window.getComputedStyle(element)
      const color = style.color
      const backgroundColor = style.backgroundColor
      
      // Basic check for sufficient contrast
      // In a real implementation, you'd calculate the actual contrast ratio
      if (color === backgroundColor) {
        this.addViolation({
          id: 'color-contrast',
          impact: 'serious',
          description: 'Elements must have sufficient color contrast',
          help: 'Ensure text has sufficient contrast against its background',
          tags: ['wcag2aa', 'wcag143'],
          nodes: [{
            html: element.outerHTML,
            target: [element.tagName.toLowerCase()],
            failureSummary: 'Insufficient color contrast'
          }]
        })
      }
    })
  }

  // Check for keyboard accessibility
  checkKeyboardAccessibility(): void {
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]')
    
    interactiveElements.forEach(element => {
      const tabIndex = element.getAttribute('tabindex')
      
      // Check for proper tabindex values
      if (tabIndex && parseInt(tabIndex) > 0) {
        this.addViolation({
          id: 'tabindex',
          impact: 'moderate',
          description: 'Elements should not have positive tabindex values',
          help: 'Avoid positive tabindex values as they can create confusing tab order',
          tags: ['wcag2a', 'wcag211'],
          nodes: [{
            html: element.outerHTML,
            target: [element.tagName.toLowerCase()],
            failureSummary: `Element has tabindex="${tabIndex}"`
          }]
        })
      }
    })
  }

  // Check for proper ARIA usage
  checkARIAUsage(): void {
    const elementsWithAria = document.querySelectorAll('[aria-*]')
    
    elementsWithAria.forEach(element => {
      const ariaAttributes = Array.from(element.attributes)
        .filter(attr => attr.name.startsWith('aria-'))
      
      ariaAttributes.forEach(attr => {
        // Check for invalid ARIA attribute values
        if (attr.name === 'aria-expanded' && !['true', 'false'].includes(attr.value)) {
          this.addViolation({
            id: 'aria-valid-attr-value',
            impact: 'serious',
            description: 'ARIA attributes must have valid values',
            help: 'Ensure ARIA attributes have valid values',
            tags: ['wcag2a', 'wcag412'],
            nodes: [{
              html: element.outerHTML,
              target: [element.tagName.toLowerCase()],
              failureSummary: `Invalid value "${attr.value}" for ${attr.name}`
            }]
          })
        }
      })
    })
  }

  // Run all accessibility checks
  runAllChecks(): AccessibilityResult {
    this.violations = []
    
    this.checkHeadingStructure()
    this.checkImageAltText()
    this.checkFormLabels()
    this.checkColorContrast()
    this.checkKeyboardAccessibility()
    this.checkARIAUsage()
    
    return {
      passes: this.violations.length === 0,
      violations: this.violations,
      incomplete: 0,
      inapplicable: 0,
      timestamp: new Date().toISOString(),
      url: window.location.href
    }
  }

  private addViolation(violation: AccessibilityViolation): void {
    this.violations.push(violation)
  }
}

// Utility function to run accessibility checks
export function runAccessibilityAudit(): AccessibilityResult {
  const checker = new AccessibilityChecker()
  return checker.runAllChecks()
}

// Utility function to check if an element is visible
export function isElementVisible(element: Element): boolean {
  const style = window.getComputedStyle(element)
  const htmlElement = element as HTMLElement
  return style.display !== 'none' && 
         style.visibility !== 'hidden' && 
         style.opacity !== '0' &&
         htmlElement.offsetWidth > 0 &&
         htmlElement.offsetHeight > 0
}

// Utility function to get focusable elements
export function getFocusableElements(container: Element | Document = document): Element[] {
  const focusableSelectors = [
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'a[href]',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]'
  ]
  
  return Array.from(container.querySelectorAll(focusableSelectors.join(',')))
    .filter(element => isElementVisible(element))
} 