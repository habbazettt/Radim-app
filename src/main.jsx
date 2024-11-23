import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Services from './pages/Services.jsx'
import Gallery from './pages/Gallery.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <AboutUs />,
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/gallery',
    element: <Gallery />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
