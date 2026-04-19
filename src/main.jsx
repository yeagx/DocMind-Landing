import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster
      position="top-center"
      theme="dark"
      toastOptions={{
        classNames: {
          toast:
            'bg-dm-card border border-dm-border text-dm-foreground backdrop-blur-md',
        },
      }}
    />
  </StrictMode>,
)
