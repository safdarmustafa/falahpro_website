import { useEffect, useRef, useState } from 'react'

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(() => prefersReducedMotion())

  useEffect(() => {
    if (visible) return undefined

    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [visible])

  return (
    <div
      ref={ref}
      className={['reveal', visible ? 'reveal-visible' : '', className].join(' ')}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
