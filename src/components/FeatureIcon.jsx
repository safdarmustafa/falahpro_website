const icons = {
  prayer: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.5M8.5 7.5A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 3.5 1.5M5 21V11.5A7 7 0 0 1 12 4.5a7 7 0 0 1 7 7V21M9 21v-4.5a3 3 0 0 1 6 0V21"
    />
  ),
  qibla: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5v4.2l3 1.8" />
      <path strokeLinecap="round" d="M12 3.5v1.2M12 19.3v1.2M3.5 12h1.2M19.3 12h1.2" />
    </>
  ),
  tasbih: (
    <>
      <circle cx="12" cy="8" r="2" />
      <circle cx="8" cy="12.5" r="2" />
      <circle cx="16" cy="12.5" r="2" />
      <circle cx="10" cy="17.5" r="2" />
      <circle cx="14" cy="17.5" r="2" />
    </>
  ),
  duas: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 8.5c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.5-.8 2.8-2 3.5V14h-4v-2c-1.2-.7-2-2-2-3.5ZM10 17h4M11 20h2"
    />
  ),
  wallpapers: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2.5" />
      <circle cx="9" cy="10" r="1.4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 16.5 9 13l3.5 2.5L16 12l3.5 3.5" />
    </>
  ),
  notifications: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 16.5V11a5.5 5.5 0 0 1 11 0v5.5l1.2 1.8H5.3l1.2-1.8Z"
      />
      <path strokeLinecap="round" d="M10 19.5a2 2 0 0 0 4 0" />
    </>
  ),
}

export default function FeatureIcon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-6 w-6"
      aria-hidden="true"
    >
      {icons[name] ?? icons.prayer}
    </svg>
  )
}
