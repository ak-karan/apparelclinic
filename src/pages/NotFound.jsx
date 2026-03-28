import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for could not be found. Explore Apparel Clinic services, pricing, and contact information."
        canonical="/404"
        noindex
      />

      <section className="section-pad flex min-h-[70vh] items-center bg-white">
        <div className="container-app text-center">
          <div className="mx-auto max-w-2xl">
            <p className="section-label">404 Error</p>
            <h1 className="font-heading mt-4 text-5xl font-bold text-gray-900 md:text-6xl">
              Page Not Found
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-gray-600 md:text-lg">
              The page may have moved, the link may be broken, or the URL may be incorrect.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/" className="btn-primary">
                Go To Home
              </Link>
              <Link to="/pricing" className="btn-outline">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
