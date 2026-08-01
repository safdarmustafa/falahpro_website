/**
 * Update this ONE value after Cloudflare Pages deployment.
 * Example: "https://falahpro-website.pages.dev"
 */
export const SITE_URL = "https://falahpro-website.pages.dev";
export const SITE = {
  name: 'Falah Pro',
  tagline: 'Built for Every Muslim',
  url: SITE_URL,
  supportEmail: 'safdarmustafa01@gmail.com',
  developer: 'Safdar Mustafa',
  coDeveloper: 'Dayam Nadeem',
  developedBy: 'Safdar Mustafa & Dayam Nadeem',
  responseTime: 'Within 24–48 hours',
  description:
    'Falah Pro is an Islamic companion app offering Prayer Times, Qibla, Tasbih Counter, Authentic Duas, Islamic Wallpapers and more.',
  title: 'Falah Pro | Built for Every Muslim',
  copyrightYear: 2026,
  /** Set this when the Play Store listing is live to enable the store button. */
  playStoreUrl: '',
}

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
  { label: 'Delete Account', to: '/delete-account' },
  { label: 'Contact', to: '/contact' },
]

export const FOOTER_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'Account Deletion', to: '/delete-account' },
  { label: 'Contact', to: '/contact' },
]

export const FEATURES = [
  {
    title: 'Prayer Times',
    description: 'Accurate daily prayer schedule tailored to your location, so you never miss Salah.',
    icon: 'prayer',
  },
  {
    title: 'Qibla',
    description: 'Find the Qibla from anywhere using precise location and device sensors.',
    icon: 'qibla',
  },
  {
    title: 'Tasbih Counter',
    description: 'Track your daily Dhikr with a calm, distraction-free digital Tasbih.',
    icon: 'tasbih',
  },
  {
    title: 'Authentic Duas',
    description: 'A large collection of authentic duas for everyday moments and worship.',
    icon: 'duas',
  },
  {
    title: 'Islamic Wallpapers',
    description: 'Beautiful high-quality Islamic wallpapers to keep your faith close every day.',
    icon: 'wallpapers',
  },
  {
    title: 'Prayer Notifications',
    description: 'Gentle reminders help you stay consistent and never miss Salah.',
    icon: 'notifications',
  },
]

export const LAUNCH_BADGES = [
  { label: 'Launching Soon', icon: 'spark' },
  { label: 'Version 1.0', icon: 'version' },
  { label: 'Google Play Release', icon: 'play' },
]
