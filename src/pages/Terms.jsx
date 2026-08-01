import PageHero from '../components/PageHero'
import Seo from '../components/Seo'
import { SITE } from '../assets/site'

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: [
      `By downloading, accessing, or using the Falah Pro mobile application (the “App”) or this official website (together, the “Service”), you agree to be bound by these Terms & Conditions (“Terms”).`,
      'If you do not agree to these Terms, you must not use the Service. If you are using the Service on behalf of an organization, you represent that you have authority to accept these Terms on its behalf.',
    ],
  },
  {
    id: 'usage',
    title: 'Usage of the Service',
    content: [
      'Falah Pro is an Islamic companion application intended to support daily worship through features such as Prayer Times, Qibla, Tasbih Counter, Authentic Duas, Islamic Wallpapers, and related tools.',
      'You agree to use the Service only for lawful purposes and in a manner consistent with these Terms and applicable laws. You are responsible for maintaining the confidentiality of your device and account access.',
    ],
    list: [
      'Use the App in accordance with Google Play policies and applicable local laws.',
      'Provide accurate information when creating or managing an account.',
      'Do not attempt to disrupt, reverse engineer, or misuse the Service.',
      'Do not use the Service to distribute harmful, deceptive, or unlawful content.',
    ],
  },
  {
    id: 'accounts',
    title: 'Accounts',
    content: [
      'Certain features of Falah Pro may require signing in with Google through secure authentication services.',
      'You are responsible for activity that occurs under your account and for keeping your sign-in credentials secure. If you believe your account has been compromised, contact us promptly at the support email listed below.',
      'You may permanently delete your account from the Profile screen inside the Falah Pro application. Account deletion permanently removes account-related information according to our Privacy Policy.',
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content: [
      'The Falah Pro name, logo, visual design, software, text, graphics, and other materials within the Service are owned by Falah Pro or its licensors and are protected by intellectual property laws.',
      'You are granted a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes in accordance with these Terms.',
      'You may not copy, modify, distribute, sell, lease, or create derivative works from the Service except as expressly permitted by law or with our prior written consent.',
      'Islamic textual content such as duas may be presented for personal worship and educational use. Presentation within the App does not transfer ownership of any third-party or traditional source materials.',
    ],
  },
  {
    id: 'restrictions',
    title: 'Restrictions',
    content: [
      'Except as allowed by applicable law, you agree not to:',
    ],
    list: [
      'Use the Service for any commercial purpose without permission.',
      'Interfere with or attempt to gain unauthorized access to our systems, accounts, or data.',
      'Remove, obscure, or alter any proprietary notices in the Service.',
      'Use automated systems to scrape, harvest, or overload the Service.',
      'Misrepresent your identity or affiliation when contacting support or using account features.',
      'Use Prayer Times, Qibla, notifications, or other features in a way that could create unsafe conditions while driving or operating equipment.',
    ],
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    content: [
      'Falah Pro is provided to support worship and daily Islamic practice, but it is not a substitute for local mosque schedules, scholarly guidance, or your own verification of prayer times and Qibla direction when precision is critical.',
      'Prayer Times and Qibla features depend on device sensors, permissions, calculation methods, network availability, and third-party infrastructure. Accuracy may vary by device, location, settings, and environmental conditions.',
      'THE SERVICE IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT, TO THE MAXIMUM EXTENT PERMITTED BY LAW.',
    ],
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    content: [
      'To the maximum extent permitted by law, Falah Pro and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of data, profits, goodwill, or other intangible losses, arising out of or related to your use of the Service.',
      'Our total liability for any claim arising from the Service shall not exceed the amount you paid to us for the App in the twelve (12) months preceding the claim, or USD $50 if you have not paid any fees.',
      'Some jurisdictions do not allow certain limitations, so portions of this section may not apply to you.',
    ],
  },
  {
    id: 'termination',
    title: 'Termination',
    content: [
      'We may suspend or terminate access to the Service if you violate these Terms, misuse the Service, or create risk for other users, our infrastructure, or the integrity of the App.',
      'You may stop using the Service at any time and may permanently delete your account through the Profile screen in the Falah Pro application.',
      'Provisions that by their nature should survive termination — including intellectual property, disclaimers, limitation of liability, and governing language — will continue to apply.',
    ],
  },
  {
    id: 'updates',
    title: 'Updates to the Terms',
    content: [
      'We may update these Terms to reflect product, legal, or operational changes. When we do, we will revise the “Last updated” date on this page.',
      'Continued use of the Service after updated Terms become effective constitutes acceptance of the changes, except where applicable law requires additional notice or consent.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    content: [
      `If you have questions about these Terms & Conditions, contact us at ${SITE.supportEmail}.`,
      `Developer: ${SITE.developer}`,
      `Co-Developer: ${SITE.coDeveloper}`,
      `Developed by ${SITE.developedBy}.`,
      'Application Name: Falah Pro',
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
      </div>
    </section>
  )
}

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms & Conditions"
        description="Read the Falah Pro Terms & Conditions covering acceptance, usage, accounts, intellectual property, liability, and termination."
        path="/terms"
      />

      <PageHero
        title="Terms & Conditions"
        subtitle="Please read these Terms carefully before using Falah Pro. They explain your rights and responsibilities when using the app and this website."
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
              <nav className="mt-4 flex flex-col gap-2" aria-label="Terms sections">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="rounded text-sm text-muted transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-card"
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
