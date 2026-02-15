"use client"

import { Github, Linkedin, Instagram, Mail, Music } from "lucide-react"

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ryachavan",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/aryamchavan",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/__aryachavan__",
    icon: Instagram,
  },
  {
    label: "Discord",
    href: "https://discord.com/users/1420439167057526901",
    icon: DiscordIcon,
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/user/gebi9y9cqokfncng54o9xpbq6?si=c4d1487a5d144878",
    icon: Music,
  },
  {
    label: "Email",
    href: "mailto:ryachavan@gmail.com",
    icon: Mail,
  },
]

function DiscordIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.09 9a3 3 0 0 1 5.83 0" />
      <path d="M20.27 6.73a19.77 19.77 0 0 0-4.95-1.54 14.72 14.72 0 0 0-.65 1.33 18.34 18.34 0 0 0-5.34 0A14.72 14.72 0 0 0 8.68 5.2a19.77 19.77 0 0 0-4.95 1.54A20.27 20.27 0 0 0 .27 18.07a19.88 19.88 0 0 0 6.07 3.07 14.72 14.72 0 0 0 1.3-2.12 12.9 12.9 0 0 1-2.05-.99l.49-.38a14.15 14.15 0 0 0 12.04 0l.49.38a12.9 12.9 0 0 1-2.05.99 14.72 14.72 0 0 0 1.3 2.12 19.88 19.88 0 0 0 6.07-3.07A20.27 20.27 0 0 0 20.27 6.73z" />
      <circle cx="9" cy="13.5" r="1.5" />
      <circle cx="15" cy="13.5" r="1.5" />
    </svg>
  )
}

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target={social.label === "Email" ? undefined : "_blank"}
          rel={social.label === "Email" ? undefined : "noopener noreferrer"}
          aria-label={social.label}
          className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-card/30 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:border-neon/30 hover:bg-card/50 hover:shadow-[0_0_15px_rgba(0,210,235,0.15)]"
        >
          <social.icon className="h-[18px] w-[18px] text-muted-foreground transition-colors duration-300 group-hover:text-neon" />
          <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-card/80 px-2 py-0.5 font-mono text-[10px] text-muted-foreground opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            {social.label}
          </span>
        </a>
      ))}
    </div>
  )
}
