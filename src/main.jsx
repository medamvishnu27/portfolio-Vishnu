import { createRoot } from 'react-dom/client'
import "./Style.css"
  // Import the global CSS with green background
import App from './App.jsx'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./global.css"

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease'
})

createRoot(document.getElementById('root')).render(
  <App />
)
