"use client"

import { useEffect, useRef } from "react"

export function ScrollingBanner() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 1
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [])

  const text = "Unlock placement confidence with mock interviews"
  const items = Array(10).fill(text)

  return (
    <div className="bg-[#1a1a2e] py-3 overflow-hidden">
      <div ref={scrollRef} className="flex whitespace-nowrap overflow-hidden" style={{ scrollBehavior: "auto" }}>
        {items.map((item, index) => (
          <span key={index} className="flex items-center text-white text-sm font-medium">
            {item}
            <span className="mx-4 w-2 h-2 bg-white rounded-sm"></span>
          </span>
        ))}
        {items.map((item, index) => (
          <span key={`dup-${index}`} className="flex items-center text-white text-sm font-medium">
            {item}
            <span className="mx-4 w-2 h-2 bg-white rounded-sm"></span>
          </span>
        ))}
      </div>
    </div>
  )
}
