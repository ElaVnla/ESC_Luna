import { createContext, useContext, useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import {useCookies} from 'react-cookie'

export type User = {
  id: string
  email?: string
  username?: string
  password: string
  firstName?: string
  lastName?: string
  role?: string
  token?: string
}

export type AuthContextType = {
  user: User | undefined
  isAuthenticated: boolean
  saveSession: (session: User) => void
  removeSession: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}

const authSessionKey = '_BOOKING_AUTH_KEY_'

export function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {
  const navigate = useNavigate()

  const [cookies, setCookie, removeCookie] = useCookies([authSessionKey]);

  const getSession = (): AuthContextType['user'] => {
    const fetchedCookie = cookies._BOOKING_AUTH_KEY_
    if (!fetchedCookie) return
    else return fetchedCookie;
  }

  const [user, setUser] = useState<User | undefined>(getSession())

  const saveSession = (user: User) => {
    setCookie(authSessionKey, JSON.stringify(user))
    setUser(user)
  }

  const removeSession = () => {
    removeCookie(authSessionKey);
    setUser(undefined)
    navigate('/auth/sign-in')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: cookies._BOOKING_AUTH_KEY_,
        saveSession,
        removeSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
