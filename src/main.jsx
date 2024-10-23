import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Add_Entry from './Add_Entry.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Add_Entry/>
  </StrictMode>
)
