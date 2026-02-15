import { SocialLinks } from "@/components/social-links"
import { RandomTagline } from "@/components/random-tagline"

export function HeroSection() {
  return (
    <section className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 py-20">
      <div className="flex max-w-2xl flex-col items-center gap-6 text-center">
        {/* Name heading */}
        <h1
          className="text-balance font-sans text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
          style={{ animation: "fade-in-up 0.8s ease-out forwards", opacity: 0 }}
        >
          <span className="text-foreground">{"Arya "}</span>
          <span
            className="text-neon"
            style={{ textShadow: "0 0 30px hsl(187 100% 50% / 0.2)" }}
          >
            Chavan
          </span>
        </h1>

        {/* Rotating tagline */}
        <div
          className="h-8 sm:h-9"
          style={{ animation: "fade-in-up 0.8s ease-out 0.2s forwards", opacity: 0 }}
        >
          <RandomTagline />
        </div>

        {/* Social links */}
        <div style={{ animation: "fade-in-up 0.8s ease-out 0.4s forwards", opacity: 0 }}>
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
