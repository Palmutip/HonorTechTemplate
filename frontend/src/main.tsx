import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './routes'
import { ThemeProvider } from './providers/ThemeProvider.tsx'
import './assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>,
)
