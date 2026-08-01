import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Contact from '../pages/Contact'
import DeleteAccount from '../pages/DeleteAccount'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Privacy from '../pages/Privacy'
import Terms from '../pages/Terms'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="delete-account" element={<DeleteAccount />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
