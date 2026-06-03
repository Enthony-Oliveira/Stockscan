import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // <-- O caminho corrigido é só ./App.jsx

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)