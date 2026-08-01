import PageHero from '../components/PageHero'
import Seo from '../components/Seo'
import { SITE } from '../assets/site'

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: [
      `This Privacy Policy describes how ${SITE.name} (“we”, “us”, or “our”) collects, uses, stores, and protects information when you use the Falah Pro Android application and this official website (together, the “Service”).`,
      'By using Falah Pro, you agree to the practices described in this Privacy Policy. If you do not agree, please discontinue use of the Service.',
    ],
  },
  {
    id: 'information-collection',
    title: 'Information Collection',
    content: [
      'We collect information that is necessary to operate Falah Pro, provide core features, and improve the Service. Information we may collect includes:',
    ],
    list: [
      'Account information such as your name, email address, and profile details when you sign in.',
      'Device information such as device model, operating system version, app version, and diagnostic data.',
      'Location information when you grant permission, used for Prayer Times and Qibla features.',
      'Usage information such as feature interactions, session activity, and performance events.',
      'Notification preferences and settings you configure inside the app.',
      'Support communications you send to us by email.',
    ],
  },
  {
    id: 'google-sign-in',
    title: 'Google Sign-In',
    content: [
      'Falah Pro offers Google Sign-In to create and manage your account securely.',
      'When you sign in with Google, we may receive basic account information such as your name, email address, and profile image, depending on the permissions you approve. We use this information to authenticate you and personalize your profile experience.',
      'We do not receive or store your Google password. You may revoke Google Sign-In access at any time through your Google Account settings.',
    ],
  },
  {
    id: 'authentication',
    title: 'Authentication',
    content: [
      'Falah Pro uses Firebase Authentication to manage secure user sign-in and account sessions.',
      'Authentication data is used to verify your identity, protect your account, and enable account-linked features such as profile access and account deletion. Authentication credentials are handled by Firebase and Google Sign-In infrastructure; we do not store your Google password.',
    ],
  },
  {
    id: 'location-permission',
    title: 'Location Permission',
    content: [
      'Falah Pro may request access to your device location to provide location-based Islamic features. Location access is requested only with your permission and can be revoked at any time in your device settings.',
    ],
    list: [
      'Prayer Times: Your location is used to calculate accurate daily prayer schedules for your area.',
      'Qibla: Your location, together with device sensors, is used to determine the direction of the Kaaba.',
    ],
    afterList: [
      'Location data is used solely to provide these features and is not sold. Depending on your settings and device capabilities, location processing may occur on-device and/or through trusted services required to calculate prayer times and Qibla direction.',
    ],
  },
  {
    id: 'prayer-times',
    title: 'Prayer Times',
    content: [
      'Prayer Times are calculated using your location and established calculation methods so that you can view daily Salah schedules and related reminders.',
      'To deliver this feature, Falah Pro may process location coordinates, timezone information, and related calculation settings. Prayer schedule preferences you choose in the app may be stored locally on your device.',
    ],
  },
  {
    id: 'qibla',
    title: 'Qibla',
    content: [
      'The Qibla feature uses location and device sensor data (such as compass, magnetometer, and orientation data) to help you face the direction of the Kaaba.',
      'Sensor data is processed on your device to render the Qibla direction and is not used for advertising.',
    ],
  },
  {
    id: 'notifications',
    title: 'Notifications',
    content: [
      'With your permission, Falah Pro may send prayer reminders and other service-related notifications. Notification delivery may rely on Firebase Cloud Messaging or similar push notification infrastructure.',
      'You can manage notification permissions in your device settings and control reminder preferences inside the app. Disabling notifications may limit reminder functionality but will not prevent you from using core features that do not depend on alerts.',
    ],
  },
  {
    id: 'firebase-analytics',
    title: 'Firebase Analytics',
    content: [
      'Falah Pro may use Firebase Analytics to understand how the application is used, improve reliability, and prioritize product improvements.',
      'Analytics data may include anonymized or pseudonymized event information such as feature usage, app opens, and performance metrics. We do not use analytics to build advertising profiles, and we do not sell analytics data.',
    ],
  },
  {
    id: 'mixpanel-analytics',
    title: 'Mixpanel Analytics',
    content: [
      'Falah Pro may use Mixpanel Analytics to analyze product usage and improve the user experience. Mixpanel may collect event-level information about how you interact with features inside the app.',
      'This information helps us understand which features are valuable, identify friction, and improve performance. Mixpanel’s processing is subject to Mixpanel’s own privacy practices in addition to this Privacy Policy.',
    ],
  },
  {
    id: 'supabase-authentication',
    title: 'Supabase Authentication',
    content: [
      'Falah Pro may use Supabase Authentication and related Supabase services to support secure account management and synchronized application data where required by product features.',
      'Data processed through Supabase is accessed only as needed to provide and maintain the Service and is protected using industry-standard access controls.',
    ],
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content: [
      'We take reasonable administrative, technical, and organizational measures to protect information against unauthorized access, alteration, disclosure, or destruction.',
      'These measures include secure authentication, encrypted transit where supported, access controls, and careful use of reputable infrastructure providers. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    id: 'third-party-services',
    title: 'Third-Party Services',
    content: [
      'Falah Pro integrates carefully selected third-party services to provide authentication, analytics, messaging, storage, and related infrastructure. These providers process data only as needed to support the Service and are expected to maintain appropriate privacy and security safeguards.',
      'Third-party services may include Google Sign-In, Firebase (including Authentication and Analytics), Mixpanel, Supabase, and platform services provided by Google Play.',
      'This website may be hosted on Cloudflare Pages. Cloudflare may process technical data such as IP addresses and request logs as part of delivering and securing the website.',
    ],
  },
  {
    id: 'childrens-privacy',
    title: "Children's Privacy",
    content: [
      'Falah Pro is not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13.',
      'If you believe a child has provided personal information to us, please contact us at the support email below so we can take appropriate action, including deleting the information where required.',
    ],
  },
  {
    id: 'policy-changes',
    title: 'Changes to this Privacy Policy',
    content: [
      'We may update this Privacy Policy from time to time to reflect product changes, legal requirements, or operational improvements.',
      'When we make material changes, we will update the “Last updated” date at the top of this page. Your continued use of Falah Pro after an update constitutes acceptance of the revised Privacy Policy where permitted by law.',
    ],
  },
  {
    id: 'contact-information',
    title: 'Contact Information',
    content: [
      `If you have questions about this Privacy Policy, your data, or your rights, contact us at ${SITE.supportEmail}.`,
      `Developer: ${SITE.developer}`,
      `Co-Developer: ${SITE.coDeveloper}`,
      `Developed by ${SITE.developedBy}.`,
    ],
  },
]

function Section({ section }) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <h2 className="font-display text-2xl font-semibold text-primary sm:text-3xl">
        {section.title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
        {section.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {section.list ? (
          <ul className="list-disc space-y-2 pl-5 marker:text-secondary">
            {section.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        {section.afterList?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Read the Falah Pro Privacy Policy covering Google Sign-In, authentication, location permission, analytics, and data security practices."
        path="/privacy"
      />

      <PageHero
        title="Privacy Policy"
        subtitle="Your privacy matters. This policy explains what information Falah Pro collects, how it is used, and the choices available to you."
      >
        <p className="mt-5 text-sm text-muted">Last updated: August 2, 2026</p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                On this page
              </p>
              <nav className="mt-4 flex flex-col gap-2" aria-label="Privacy Policy sections">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-sm text-muted transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-card rounded"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="space-y-10 rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] sm:p-10">
            {sections.map((section) => (
              <Section key={section.id} section={section} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
