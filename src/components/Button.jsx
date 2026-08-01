import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-cream'

const variants = {
  primary:
    'bg-primary text-cream shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:bg-primary-soft hover:shadow-[var(--shadow-lift)]',
  secondary:
    'bg-secondary text-primary shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:bg-secondary-soft hover:shadow-[var(--shadow-lift)]',
  outline:
    'border border-border-strong bg-card text-primary hover:-translate-y-0.5 hover:border-secondary hover:shadow-[var(--shadow-soft)]',
  ghost: 'text-primary hover:bg-cream-deep',
  disabled:
    'cursor-not-allowed bg-primary text-cream/95 opacity-90 shadow-[var(--shadow-soft)]',
}

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  disabled = false,
  className = '',
  type = 'button',
  ...props
}) {
  const classes = `${base} ${disabled ? variants.disabled : variants[variant]} ${className}`

  if (disabled) {
    return (
      <button type="button" className={classes} disabled aria-disabled="true" {...props}>
        {children}
      </button>
    )
  }

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
