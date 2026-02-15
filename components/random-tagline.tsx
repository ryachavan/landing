const taglines = [
  "Computer Science student.",
  "Engineering in progress.",
  "Iterating.",
  "Version 0.x",
  "Built under constraints.",
  "Learning to build better systems.",
]

export function RandomTagline() {
  const tagline = taglines[Math.floor(Math.random() * taglines.length)]

  return (
    <p className="font-mono text-sm leading-relaxed text-muted-foreground sm:text-base">
      {tagline}
    </p>
  )
}
