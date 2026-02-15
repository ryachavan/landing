import { AnimatedBackground } from "@/components/animated-background"
import { GlowOrbs } from "@/components/glow-orbs"
import { HeroSection } from "@/components/hero-section"

export default function Page() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-background">
      <GlowOrbs />
      <AnimatedBackground />
      <HeroSection />
    </main>
  )
}
