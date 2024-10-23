import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home.jsx'
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App/>
  </StrictMode>
)
