import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import { NAV_LINKS, SITE } from '../assets/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    [
      'rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200',
      isActive
        ? 'bg-cream-deep text-primary'
        : 'text-muted hover:bg-cream-deep/70 hover:text-primary',
    ].join(' ')

  return (
    <header
      className={[
        'sticky top-0 z-50 border-b transition-all duration-300',
        scrolled
          ? 'border-border/80 bg-cream/90 shadow-[var(--shadow-soft)] backdrop-blur-md'
          : 'border-transparent bg-cream/70 backdrop-blur-sm',
      ].join(' ')}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
          aria-label={`${SITE.name} home`}
        >
          <Logo
            size={42}
            decorative
            priority
            className="transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <span className="font-display text-2xl font-semibold tracking-tight text-primary">
            {SITE.name}
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-primary transition hover:border-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-cream lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={[
          'border-t border-border bg-cream lg:hidden',
          open ? 'block animate-fade-in' : 'hidden',
        ].join(' ')}
      >
        <div
          className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClass}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
