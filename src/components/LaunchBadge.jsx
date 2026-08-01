const icons = {
  spark: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3.5 13.2 8.2 18 9.4l-3.8 3.4.9 4.8L12 15.4 8.9 17.6l.9-4.8L6 9.4l4.8-1.2L12 3.5Z"
    />
  ),
  version: (
    <>
      <rect x="5" y="6" width="14" height="12" rx="2.5" />
      <path strokeLinecap="round" d="M9 10.5h6M9 13.5h4" />
    </>
  ),
  play: (
    <>
      <rect x="4.5" y="4.5" width="15" height="15" rx="3.5" />
      <path strokeLinejoin="round" d="M10.2 8.8v6.4L15.4 12 10.2 8.8Z" />
    </>
  ),
}

export default function LaunchBadge({ label, icon = 'spark' }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-secondary/35 bg-card/90 px-4 py-2 text-sm font-medium text-primary shadow-[var(--shadow-soft)] backdrop-blur-sm">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cream text-secondary">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="h-3.5 w-3.5"
          aria-hidden="true"
        >
          {icons[icon] ?? icons.spark}
        </svg>
      </span>
      {label}
    </div>
  )
}
