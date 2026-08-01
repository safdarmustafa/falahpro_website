import logo from '../assets/logo.png'

export default function Logo({
  size = 40,
  className = '',
  alt = 'Falah Pro logo',
  decorative = false,
  priority = false,
}) {
  return (
    <img
      src={logo}
      alt={decorative ? '' : alt}
      width={size}
      height={size}
      className={`aspect-square object-contain ${className}`}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      aria-hidden={decorative || undefined}
    />
  )
}
