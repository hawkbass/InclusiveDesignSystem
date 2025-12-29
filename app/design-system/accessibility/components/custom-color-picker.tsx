"use client"

import React, { useState, useEffect, useCallback } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Palette, X, Hash } from "lucide-react"

interface CustomColorPickerProps {
  value: string
  onChange: (color: string) => void
  label: string
  type: 'foreground' | 'background'
}

export function CustomColorPicker({ value, onChange, label, type }: CustomColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hexInput, setHexInput] = useState(value)

  // Convert hex to HSV
  const hexToHsv = useCallback((hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255
    const g = parseInt(hex.slice(3, 5), 16) / 255
    const b = parseInt(hex.slice(5, 7), 16) / 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const diff = max - min

    let h = 0
    if (diff !== 0) {
      if (max === r) h = ((g - b) / diff) % 6
      else if (max === g) h = (b - r) / diff + 2
      else h = (r - g) / diff + 4
    }
    h = Math.round(h * 60)
    if (h < 0) h += 360

    const s = max === 0 ? 0 : Math.round((diff / max) * 100)
    const v = Math.round(max * 100)

    return { h, s, v }
  }, [])

  // Convert HSV to hex
  const hsvToHex = useCallback((h: number, s: number, v: number) => {
    const c = (v / 100) * (s / 100)
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
    const m = (v / 100) - c

    let r = 0, g = 0, b = 0
    if (h >= 0 && h < 60) { r = c; g = x; b = 0 }
    else if (h >= 60 && h < 120) { r = x; g = c; b = 0 }
    else if (h >= 120 && h < 180) { r = 0; g = c; b = x }
    else if (h >= 180 && h < 240) { r = 0; g = x; b = c }
    else if (h >= 240 && h < 300) { r = x; g = 0; b = c }
    else if (h >= 300 && h < 360) { r = c; g = 0; b = x }

    r = Math.round((r + m) * 255)
    g = Math.round((g + m) * 255)
    b = Math.round((b + m) * 255)

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
  }, [])

  const currentHsv = hexToHsv(value)
  const [hue, setHue] = useState(currentHsv.h)
  const [saturation, setSaturation] = useState(currentHsv.s)
  const [brightness, setBrightness] = useState(currentHsv.v)

  // Update HSV when value changes externally
  useEffect(() => {
    const hsv = hexToHsv(value)
    setHue(hsv.h)
    setSaturation(hsv.s)
    setBrightness(hsv.v)
    setHexInput(value)
  }, [value, hexToHsv])

  const handleHsvChange = useCallback((newH: number, newS: number, newV: number) => {
    const newHex = hsvToHex(newH, newS, newV)
    onChange(newHex)
    setHexInput(newHex)
  }, [onChange, hsvToHex])

  const handleHexChange = useCallback((newHex: string) => {
    if (newHex.match(/^#[0-9A-Fa-f]{6}$/)) {
      onChange(newHex)
      setHexInput(newHex)
    } else {
      setHexInput(newHex)
    }
  }, [onChange])

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-3">
        <Label className="text-foreground font-medium">{label}</Label>
        <Badge className={`text-xs ${
          type === 'foreground' ? 'bg-blue-500/20 text-blue-600 dark:text-blue-300' : 'bg-purple-500/20 text-purple-600 dark:text-purple-600 dark:text-purple-300'
        }`}>
          {type === 'foreground' ? 'Text' : 'Surface'}
        </Badge>
      </div>
      
      <div className="space-y-3">
        {/* Color Display & Trigger */}
        <div className="flex items-center gap-3">
          <div 
            className="w-16 h-16 rounded-xl border-2 border-border cursor-pointer hover:border-primary/50 transition-colors relative overflow-hidden"
            onClick={() => setIsOpen(!isOpen)}
            style={{ backgroundColor: value }}
          >
            <div className="absolute bottom-1 right-1">
              <div className="p-1 bg-card/80 rounded border border-border/50">
                <Palette className="h-2 w-2 text-foreground/80" />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="text-lg font-mono text-foreground mb-1">{value.toUpperCase()}</div>
            <div className="text-xs text-muted-foreground">Click to change colour</div>
          </div>
        </div>

        {/* Floating Color Picker Modal */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Floating Modal */}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <Card className="bg-card/95 border-border/50 p-4 w-80 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-foreground">Colour Picker</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setIsOpen(false)}
                      className="h-6 w-6 p-0 hover:bg-card/50"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Color Preview */}
                  <div className="h-16 rounded-lg border border-border" style={{ backgroundColor: value }}>
                    <div className="w-full h-full rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  </div>

                  {/* Hex Input */}
                  <div className="flex items-center gap-2">
                    <Hash className="h-4 w-4 text-muted-foreground" />
                    <Input
                      value={hexInput}
                      onChange={(e) => handleHexChange(e.target.value)}
                      onBlur={() => setHexInput(value)}
                      className="font-mono text-sm bg-card/30 border-border focus:border-primary/50"
                      placeholder="#000000"
                    />
                  </div>

                  {/* HSV Sliders */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-sm text-foreground/80">Hue</Label>
                        <span className="text-xs text-muted-foreground font-mono">{hue}°</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="360"
                        value={hue}
                        onChange={(e) => {
                          const newHue = parseInt(e.target.value)
                          setHue(newHue)
                          handleHsvChange(newHue, saturation, brightness)
                        }}
                        className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, 
                            hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), 
                            hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), 
                            hsl(360, 100%, 50%))`
                        }}
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-sm text-foreground/80">Saturation</Label>
                        <span className="text-xs text-muted-foreground font-mono">{saturation}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={saturation}
                        onChange={(e) => {
                          const newSat = parseInt(e.target.value)
                          setSaturation(newSat)
                          handleHsvChange(hue, newSat, brightness)
                        }}
                        className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, 
                            hsl(${hue}, 0%, ${brightness/2}%), 
                            hsl(${hue}, 100%, ${brightness/2}%))`
                        }}
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-sm text-foreground/80">Brightness</Label>
                        <span className="text-xs text-muted-foreground font-mono">{brightness}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={brightness}
                        onChange={(e) => {
                          const newBright = parseInt(e.target.value)
                          setBrightness(newBright)
                          handleHsvChange(hue, saturation, newBright)
                        }}
                        className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, 
                            hsl(${hue}, ${saturation}%, 0%), 
                            hsl(${hue}, ${saturation}%, 50%))`
                        }}
                      />
                    </div>
                  </div>

                  {/* System Color Picker Fallback */}
                  <div className="flex items-center gap-2 pt-3 border-t border-border/50">
                    <input
                      type="color"
                      value={value}
                      onChange={(e) => {
                        onChange(e.target.value)
                        setHexInput(e.target.value)
                      }}
                      className="sr-only"
                      id={`system-picker-${type}`}
                    />
                    <Label
                      htmlFor={`system-picker-${type}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer hover:text-foreground/80 transition-colors"
                    >
                      <Palette className="h-4 w-4" />
                      Use system picker
                    </Label>
                  </div>
                </div>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
