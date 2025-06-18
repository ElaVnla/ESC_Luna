import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import '@/assets/scss/style.scss'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <BrowserRouter basename={'/'}>
      <App />
    </BrowserRouter>
  // </StrictMode>
)
