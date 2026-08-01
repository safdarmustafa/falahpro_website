import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'

export default function MainLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
