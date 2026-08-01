import Button from '../components/Button'
import PageHero from '../components/PageHero'
import Seo from '../components/Seo'
import { SITE } from '../assets/site'

const details = [
  {
    label: 'Support Email',
    value: SITE.supportEmail,
    href: `mailto:${SITE.supportEmail}`,
    note: 'Reach us for general support, privacy requests, and account assistance.',
  },
  {
    label: 'Developer',
    value: SITE.developer,
    note: 'Primary developer of Falah Pro.',
  },
  {
    label: 'Co-Developer',
    value: SITE.coDeveloper,
    note: 'Co-developer supporting the Falah Pro experience.',
  },
  {
    label: 'Response Time',
    value: SITE.responseTime,
    note: 'We aim to reply as quickly as possible on business days.',
  },
]

const purposes = [
  'General Support',
  'Bug Reports',
  'Privacy Requests',
  'Account Deletion Assistance',
]

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Contact Falah Pro support for general help, bug reports, privacy requests, and account deletion assistance."
        path="/contact"
      />

      <PageHero
        title="Contact Support"
        subtitle="We’re here to help with privacy questions, account assistance, and general inquiries about Falah Pro."
      />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {details.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-3 block font-display text-2xl font-semibold text-primary transition hover:text-primary-soft"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-3 font-display text-2xl font-semibold text-primary">{item.value}</p>
              )}
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.note}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-cream-deep/50 p-8 sm:p-10">
          <h2 className="font-display text-3xl font-semibold text-primary">Purpose</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            You can contact us for any of the following:
          </p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {purposes.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-primary"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            Developed by {SITE.developedBy}. Include as much detail as possible so we can help you
            faster. For account deletion, please use the in-app Profile screen first when possible.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={`mailto:${SITE.supportEmail}`}>Email Support</Button>
            <Button to="/delete-account" variant="outline">
              Account Deletion Help
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
