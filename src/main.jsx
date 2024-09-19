import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Dataprovider from './components/context/Contextdata.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dataprovider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Dataprovider>
    
  </StrictMode>,
)
