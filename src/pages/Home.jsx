import Button from '../components/Button'
import FeatureIcon from '../components/FeatureIcon'
import LaunchBadge from '../components/LaunchBadge'
import Logo from '../components/Logo'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import { FEATURES, LAUNCH_BADGES, SITE } from '../assets/site'

export default function Home() {
  const playStoreReady = Boolean(SITE.playStoreUrl)

  return (
    <>
      <Seo title={SITE.title} description={SITE.description} path="/" />

      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(61,43,31,0.06),transparent_30%)]"
        />
        <div className="relative mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-6xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8 sm:py-24">
          <div className="animate-fade-up">
            <Logo
              size={128}
              priority
              className="mx-auto aspect-square animate-float drop-shadow-sm"
            />
          </div>

          <h1 className="animate-fade-up delay-100 mt-7 font-display text-5xl font-semibold tracking-tight text-primary sm:text-6xl md:text-7xl">
            {SITE.name}
          </h1>

          <p className="animate-fade-up delay-200 mt-3 text-lg font-medium tracking-wide text-secondary sm:text-xl">
            {SITE.tagline}
          </p>

          <p className="animate-fade-up delay-300 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {SITE.description}
          </p>

          <div className="animate-fade-up delay-400 mt-11 flex flex-col items-center gap-3">
            {playStoreReady ? (
              <Button
                href={SITE.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-play min-w-[270px]"
              >
                Available Soon on Google Play
              </Button>
            ) : (
              <Button disabled className="btn-play min-w-[270px]">
                Available Soon on Google Play
              </Button>
            )}
            <p className="text-xs text-muted/80">
              The Play Store listing will open here once Falah Pro is live.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.14),transparent_42%)]"
        />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-secondary/30 bg-card text-secondary shadow-[0_0_28px_rgba(212,175,55,0.22)] animate-soft-glow">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3.5 13.2 8.2 18 9.4l-3.8 3.4.9 4.8L12 15.4 8.9 17.6l.9-4.8L6 9.4l4.8-1.2L12 3.5Z"
                />
              </svg>
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl md:text-[2.75rem]">
              Falah Pro is Almost Here
            </h2>
            <p className="mt-4 text-base font-medium text-secondary sm:text-lg">
              Our first official release is launching soon on Google Play.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-[17px]">
              We&apos;re excited to help Muslims around the world stay connected with their daily
              worship through a beautifully crafted Islamic companion.
            </p>
          </Reveal>

          <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-3" delay={120}>
            {LAUNCH_BADGES.map((badge) => (
              <LaunchBadge key={badge.label} label={badge.label} icon={badge.icon} />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-card/60 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
              Features
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              Everything you need for daily worship
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Thoughtfully designed tools that help you stay consistent, focused, and connected.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 70}>
                <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition duration-300 ease-out hover:-translate-y-1.5 hover:border-secondary/45 hover:shadow-[var(--shadow-lift)]">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-primary transition duration-300 group-hover:bg-primary group-hover:text-secondary-soft">
                    <FeatureIcon name={feature.icon} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted sm:text-[15px]">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-primary to-primary-soft px-8 py-12 text-cream sm:px-12 sm:py-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-secondary/15 blur-2xl"
              />
              <div className="relative max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                  About
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  Built with intention for every Muslim
                </h2>
                <p className="mt-5 text-base leading-relaxed text-cream/80 sm:text-lg">
                  Falah Pro was built to help Muslims maintain consistency in worship through a
                  simple and beautiful mobile experience. From prayer times and Qibla to Dhikr,
                  authentic duas, and peaceful Islamic wallpapers, every feature is designed to
                  support your daily connection with Allah — without clutter or distraction.
                </p>
                <div className="mt-8">
                  <Button to="/contact" variant="secondary">
                    Contact Support
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
