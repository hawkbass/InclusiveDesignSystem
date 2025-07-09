import * as React from "react"

export function useA11yAnnouncer() {
  const [message, setMessage] = React.useState("")
  const ref = React.useRef<HTMLDivElement>(null)

  const announce = (msg: string) => {
    setMessage("")
    setTimeout(() => setMessage(msg), 10)
  }

  const LiveRegion = (
    <div
      ref={ref}
      aria-live="polite"
      aria-atomic="true"
      style={{ position: "absolute", width: 1, height: 1, margin: -1, padding: 0, overflow: "hidden", clip: "rect(0 0 0 0)", border: 0 }}
    >
      {message}
    </div>
  )

  return { announce, LiveRegion }
} 