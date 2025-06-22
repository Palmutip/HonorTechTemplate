import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Header } from './shared/header'
import { Footer } from './shared/footer'

export function WebsiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
        <ScrollRestoration />
      </main>
      <Footer />
    </div>
  )
}
