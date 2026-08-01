import Button from '../components/Button'
import Logo from '../components/Logo'
import Seo from '../components/Seo'
import { SITE } from '../assets/site'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you are looking for could not be found on the Falah Pro website."
        path="/"
        noIndex
      />

      <section className="mx-auto flex min-h-[60svh] max-w-6xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
        <Logo size={88} />
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          The page you requested does not exist or may have moved. Return home to continue exploring{' '}
          {SITE.name}.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button to="/">Back to Home</Button>
          <Button to="/contact" variant="outline">
            Contact Support
          </Button>
        </div>
      </section>
    </>
  )
}
