export default function PageHero({ title, subtitle, children }) {
  return (
    <section className="border-b border-border bg-gradient-to-b from-cream-deep/70 to-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="animate-fade-up max-w-3xl">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {subtitle}
            </p>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  )
}
