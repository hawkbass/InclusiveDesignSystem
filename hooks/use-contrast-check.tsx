import { useMemo } from "react"

export interface ContrastResult {
  ratio: number
  passesAA: boolean
  passesAAA: boolean
  passesLargeAA: boolean
  passesLargeAAA: boolean
  level: "AAA" | "AA" | "FAIL"
}

export function useContrastCheck(foreground: string, background: string): ContrastResult {
  return useMemo(() => {
    function hexToRgb(hex: string) {
      let c = hex.replace('#', '')
      if (c.length === 3) c = c.split('').map(x => x + x).join('')
      const num = parseInt(c, 16)
      return [num >> 16, (num >> 8) & 255, num & 255]
    }
    
    function luminance([r, g, b]: number[]) {
      const a = [r, g, b].map(v => {
        v /= 255
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
      })
      return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]
    }
    
    const fg = luminance(hexToRgb(foreground))
    const bg = luminance(hexToRgb(background))
    const ratio = (Math.max(fg, bg) + 0.05) / (Math.min(fg, bg) + 0.05)
    
    const passesAA = ratio >= 4.5
    const passesAAA = ratio >= 7
    const passesLargeAA = ratio >= 3
    const passesLargeAAA = ratio >= 4.5
    
    let level: "AAA" | "AA" | "FAIL" = "FAIL"
    if (passesAAA) level = "AAA"
    else if (passesAA) level = "AA"
    
    return {
      ratio,
      passesAA,
      passesAAA,
      passesLargeAA,
      passesLargeAAA,
      level
    }
  }, [foreground, background])
}

export function useColorAccessibility(colors: Record<string, string>) {
  return useMemo(() => {
    const results: Record<string, ContrastResult> = {}
    const colorKeys = Object.keys(colors)
    
    for (let i = 0; i < colorKeys.length; i++) {
      for (let j = i + 1; j < colorKeys.length; j++) {
        const color1 = colorKeys[i]
        const color2 = colorKeys[j]
        const key = `${color1}-${color2}`
        const reverseKey = `${color2}-${color1}`
        
        if (!results[key] && !results[reverseKey]) {
          results[key] = useContrastCheck(colors[color1], colors[color2])
        }
      }
    }
    
    return results
  }, [colors])
}

export function getAccessibleTextColor(backgroundColor: string): string {
  const { ratio } = useContrastCheck("#000000", backgroundColor)
  return ratio >= 4.5 ? "#000000" : "#ffffff"
} 