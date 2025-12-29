// Data structures for the elevation page

export const elevationLevels = [
  { level: 0, name: "Flat", description: "No elevation, flat surface", shadow: "none" },
  { level: 1, name: "Raised", description: "Subtle elevation for cards", shadow: "0 1px 3px rgba(0,0,0,0.12)" },
  { level: 2, name: "Floating", description: "Buttons and inputs", shadow: "0 2px 4px rgba(0,0,0,0.1)" },
  { level: 3, name: "Overlay", description: "Dropdowns and popovers", shadow: "0 4px 6px rgba(0,0,0,0.1)" },
  { level: 4, name: "Modal", description: "Dialogs and modals", shadow: "0 10px 15px rgba(0,0,0,0.1)" },
  { level: 5, name: "Tooltip", description: "Tooltips and hints", shadow: "0 12px 20px rgba(0,0,0,0.15)" },
  { level: 6, name: "Toast", description: "Notifications and toasts", shadow: "0 16px 24px rgba(0,0,0,0.2)" },
  { level: 7, name: "Maximum", description: "Maximum elevation", shadow: "0 20px 30px rgba(0,0,0,0.25)" }
]

export const shadowPresets = [
  { name: "xs", value: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
  { name: "sm", value: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" },
  { name: "md", value: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" },
  { name: "lg", value: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" },
  { name: "xl", value: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" },
  { name: "2xl", value: "0 25px 50px -12px rgb(0 0 0 / 0.25)" }
]

export const blurPresets = [
  { name: "none", value: "0px" },
  { name: "sm", value: "4px" },
  { name: "md", value: "8px" },
  { name: "lg", value: "16px" },
  { name: "xl", value: "24px" },
  { name: "2xl", value: "40px" }
]
