import { Link } from 'react-router-dom'
import Logo from './Logo'
import { FOOTER_LINKS, SITE } from '../assets/site'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-primary text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-cream/95 p-2">
              <Logo size={40} decorative />
            </div>
            <div>
              <p className="font-display text-2xl font-semibold tracking-tight">{SITE.name}</p>
              <p className="text-sm text-secondary-soft">{SITE.tagline}</p>
            </div>
          </div>

          <div className="mt-6 space-y-3 text-sm leading-relaxed text-cream/75">
            <p>
              <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                Developed by
              </span>
              <span className="mt-1 block text-cream/90">{SITE.developedBy}</span>
            </p>
            <p>
              <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                Support
              </span>
              <a
                href={`mailto:${SITE.supportEmail}`}
                className="mt-1 inline-block text-cream/90 transition hover:text-secondary-soft"
              >
                {SITE.supportEmail}
              </a>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
            Quick Links
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-cream/80 transition hover:text-secondary-soft"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-6xl px-5 py-5 text-sm text-cream/60 sm:px-8">
          <p className="mb-2 text-xs italic tracking-wide text-cream/45">
            May this project benefit Muslims around the world.
          </p>
          <p>
            © {SITE.copyrightYear} {SITE.name}.
            <br className="sm:hidden" /> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
