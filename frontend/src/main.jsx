import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ImageContextProvider from './context/ImageContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ImageContextProvider>
    <App />
    </ImageContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
