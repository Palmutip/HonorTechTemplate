import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { WebsiteLayout } from '@/components/layout/website-layout'
import { Home } from '@/pages/home/'
import { About } from '@/pages/about/'
import { Services } from '@/pages/services/'
import { AI } from '@/pages/ai/'
import { Testimonials } from '@/pages/testimonials/'
import { Referrals } from '@/pages/referrals/'
import { Contact } from '@/pages/contact/'
import { Certifications } from '@/pages/certifications/'
import { Privacy } from '@/pages/privacy/'
import { Terms } from '@/pages/terms/'
import { ImageCredits } from '@/pages/imagecredits/'
import { NotFound } from '@/pages/not-found/'

const router = createBrowserRouter([
  {
    path: '/',
    element: <WebsiteLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'ai',
        element: <AI />,
      },
      {
        path: 'testimonials',
        element: <Testimonials />,
      },
      {
        path: 'referrals',
        element: <Referrals />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'certifications',
        element: <Certifications />,
      },
      {
        path: 'privacy',
        element: <Privacy />,
      },
      {
        path: 'terms',
        element: <Terms />,
      },
      {
        path: 'imagecredits',
        element: <ImageCredits />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export function AppRouter() {
  return (
    <RouterProvider router={router} />
  )
}
