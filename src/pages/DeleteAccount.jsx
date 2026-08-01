import Button from '../components/Button'
import PageHero from '../components/PageHero'
import Seo from '../components/Seo'
import { SITE } from '../assets/site'

const steps = [
  'Open the Falah Pro application on your Android device.',
  'Navigate to the Profile screen inside the app.',
  'Select Delete Account and confirm your decision.',
  'Your account and related account information will be permanently removed in accordance with our Privacy Policy.',
]

export default function DeleteAccount() {
  return (
    <>
      <Seo
        title="Account Deletion"
        description="Learn how to permanently delete your Falah Pro account from inside the application."
        path="/delete-account"
      />

      <PageHero
        title="Account Deletion"
        subtitle="Users can permanently delete their Falah Pro account from inside the application. This page explains the process for Google Play Store compliance."
      />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] sm:p-9">
            <h2 className="font-display text-3xl font-semibold text-primary">
              How to delete your account
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              You can permanently delete your account directly from the Profile screen inside the
              Falah Pro application. Account deletion permanently removes account-related
              information according to our Privacy Policy.
            </p>

            <ol className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-cream">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-base leading-relaxed text-ink">{step}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 rounded-xl border border-border bg-cream-deep/60 p-5">
              <p className="text-sm leading-relaxed text-muted">
                If you are unable to access the application, contact us at{' '}
                <a
                  href={`mailto:${SITE.supportEmail}`}
                  className="font-medium text-primary underline decoration-secondary/60 underline-offset-4"
                >
                  {SITE.supportEmail}
                </a>{' '}
                from the email address associated with your account, and we will assist you with
                your deletion request.
              </p>
            </div>
          </article>

          <aside className="rounded-2xl border border-border bg-gradient-to-b from-cream-deep to-card p-7 shadow-[var(--shadow-soft)] sm:p-8">
            <h3 className="font-display text-2xl font-semibold text-primary">Open Falah Pro</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Account deletion is completed securely inside the Falah Pro application. Open the app
              on your device to continue.
            </p>
            <div className="mt-6">
              <Button disabled className="w-full">
                Open Falah Pro
              </Button>
              <p className="mt-3 text-center text-xs text-muted/80">
                Available once Falah Pro is installed on your device.
              </p>
            </div>
            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm font-medium text-primary">Related</p>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <Button to="/privacy" variant="ghost" className="justify-start px-0">
                  Read Privacy Policy →
                </Button>
                <Button to="/contact" variant="ghost" className="justify-start px-0">
                  Contact Support →
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
