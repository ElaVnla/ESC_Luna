import { BackToTop } from '@/components'
import AppRouter from '@/routes/router'
import { AuthProvider, LayoutProvider, NotificationProvider } from '@/states'
import configureFakeBackend from './helpers/fake-backend'
import { CookiesProvider } from "react-cookie";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

configureFakeBackend()

const App = () => {
  return (
    <CookiesProvider>
      <NotificationProvider>
        <LayoutProvider>
          <AuthProvider>
            <AppRouter />
            <ToastContainer position="top-center" autoClose={3000} aria-label="toast"/>
            <BackToTop />
          </AuthProvider>
        </LayoutProvider>
      </NotificationProvider>
    </CookiesProvider>
    
  )
}

export default App
