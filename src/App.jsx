import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import PageLoader from './components/PageLoader'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Pricing = lazy(() => import('./pages/Pricing'))
const PrepaidPlans = lazy(() => import('./pages/PrepaidPlans'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Terms = lazy(() => import('./pages/Terms'))
const Contact = lazy(() => import('./pages/Contact'))

const Laundry = lazy(() => import('./pages/services/Laundry'))
const OrganicDryCleaning = lazy(() => import('./pages/services/OrganicDryCleaning'))
const DryCleaning = lazy(() => import('./pages/services/DryCleaning'))
const ShoeCleaning = lazy(() => import('./pages/services/ShoeCleaning'))
const JacketCleaning = lazy(() => import('./pages/services/JacketCleaning'))
const BagCleaning = lazy(() => import('./pages/services/BagCleaning'))
const SofaCleaning = lazy(() => import('./pages/services/SofaCleaning'))
const CarpetCleaning = lazy(() => import('./pages/services/CarpetCleaning'))
const SteamIroning = lazy(() => import('./pages/services/SteamIroning'))

function App() {
  return (
    <HelmetProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
          <Navbar />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/prepaid-plans" element={<PrepaidPlans />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/laundry" element={<Laundry />} />
              <Route path="/services/organic-dry-cleaning" element={<OrganicDryCleaning />} />
              <Route path="/services/dry-cleaning" element={<DryCleaning />} />
              <Route path="/services/shoe-cleaning" element={<ShoeCleaning />} />
              <Route path="/services/jacket-cleaning" element={<JacketCleaning />} />
              <Route path="/services/bag-cleaning" element={<BagCleaning />} />
              <Route path="/services/sofa-cleaning" element={<SofaCleaning />} />
              <Route path="/services/carpet-cleaning" element={<CarpetCleaning />} />
              <Route path="/services/steam-ironing" element={<SteamIroning />} />
            </Routes>
          </Suspense>
          <WhatsAppButton />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
