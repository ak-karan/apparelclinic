import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTopButton from './components/BackToTopButton'
import PageLoader from './components/PageLoader'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Pricing = lazy(() => import('./pages/Pricing'))
const PrepaidPlans = lazy(() => import('./pages/PrepaidPlans'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Terms = lazy(() => import('./pages/Terms'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

const Laundry = lazy(() => import('./pages/services/Laundry'))
const OrganicDryCleaning = lazy(() => import('./pages/services/OrganicDryCleaning'))
const DryCleaning = lazy(() => import('./pages/services/DryCleaning'))
const ShoeCleaning = lazy(() => import('./pages/services/ShoeCleaning'))
const JacketCleaning = lazy(() => import('./pages/services/JacketCleaning'))
const BagCleaning = lazy(() => import('./pages/services/BagCleaning'))
const SofaCleaning = lazy(() => import('./pages/services/SofaCleaning'))
const CarpetCleaning = lazy(() => import('./pages/services/CarpetCleaning'))
const SteamIroning = lazy(() => import('./pages/services/SteamIroning'))

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/pricing', element: <Pricing /> },
  { path: '/prepaid-plans', element: <PrepaidPlans /> },
  { path: '/faq', element: <FAQ /> },
  { path: '/terms', element: <Terms /> },
  { path: '/contact', element: <Contact /> },
  { path: '/services/laundry', element: <Laundry /> },
  { path: '/services/organic-dry-cleaning', element: <OrganicDryCleaning /> },
  { path: '/services/dry-cleaning', element: <DryCleaning /> },
  { path: '/services/shoe-cleaning', element: <ShoeCleaning /> },
  { path: '/services/jacket-cleaning', element: <JacketCleaning /> },
  { path: '/services/bag-cleaning', element: <BagCleaning /> },
  { path: '/services/sofa-cleaning', element: <SofaCleaning /> },
  { path: '/services/carpet-cleaning', element: <CarpetCleaning /> },
  { path: '/services/steam-ironing', element: <SteamIroning /> },
  { path: '*', element: <NotFound /> },
]

function App() {
  return (
    <HelmetProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
          <Navbar />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </Suspense>
          <BackToTopButton />
          <WhatsAppButton />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
