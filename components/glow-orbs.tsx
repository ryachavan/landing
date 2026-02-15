export function GlowOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full opacity-10 blur-[140px]"
        style={{
          background: "radial-gradient(circle, hsl(187 100% 50%) 0%, transparent 70%)",
          animation: "float 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full opacity-[0.07] blur-[120px]"
        style={{
          background: "radial-gradient(circle, hsl(187 100% 50%) 0%, transparent 70%)",
          animation: "float 14s ease-in-out infinite 2s",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.05] blur-[100px]"
        style={{
          background: "radial-gradient(circle, hsl(187 100% 60%) 0%, transparent 70%)",
          animation: "pulse-glow 8s ease-in-out infinite 1s",
        }}
      />
    </div>
  )
}
