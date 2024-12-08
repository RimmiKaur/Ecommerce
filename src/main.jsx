import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Components/Home'
import CategoryFilter from './Components/CategoryFilter'
import OffCanvas from './Components/OffCanvas'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CategoryFilter/>
    
  </StrictMode>,
)
