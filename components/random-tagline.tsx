"use client"

import { useEffect, useState } from "react"

const taglines = [
  "Computer Science student.",
  "Engineering in progress.",
  "Iterating.",
  "Version 0.1",
  "Built under constraints.",
  "Learning to build better systems.",
]

export function RandomTagline() {
  const [tagline, setTagline] = useState("")

  useEffect(() => {
    const random =
      taglines[Math.floor(Math.random() * taglines.length)]
    setTagline(random)
  }, [])

  return (
    <p className="font-mono text-sm leading-relaxed text-muted-foreground sm:text-base">
      {tagline}
    </p>
  )
}
