import { changeHTMLAttribute } from '@/utils/layout'
import { type ReactNode, createContext, useContext, useState } from 'react'

export type LayoutState = {
  theme: 'light' | 'dark' | 'auto'
  dir: 'ltr' | 'rtl'
}

type LayoutType = LayoutState & {
  updateTheme: (theme: LayoutState['theme']) => void
  updateDir: (theme: LayoutState['dir']) => void
}

const LayoutContext = createContext<LayoutType | undefined>(undefined)

function useLayoutContext() {
  const context = useContext(LayoutContext)
  if (context === undefined) {
    throw new Error('useLayoutContext must be used within an LayoutProvider')
  }
  return context
}

const themeKey = 'data-bs-theme'

const LayoutProvider = ({ children }: Readonly<{ children: ReactNode }>) => {
  const getSavedTheme = (): LayoutState['theme'] => {
    const foundTheme = localStorage.getItem(themeKey)
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    if (foundTheme) {
      if (foundTheme === 'auto') {
        changeHTMLAttribute(themeKey, preferredTheme)
        return preferredTheme
      }
      changeHTMLAttribute(themeKey, foundTheme)
      return foundTheme == 'dark' ? 'dark' : 'light'
    } else {
      localStorage.setItem(themeKey, preferredTheme)
      return preferredTheme
    }
  }

  const INIT_STATE: LayoutState = {
    theme: getSavedTheme(),
    dir: 'ltr',
  }

  const [settings, setSettings] = useState<LayoutState>(INIT_STATE)

  const updateSettings = (_newSettings: Partial<LayoutState>) => setSettings({ ...settings, ..._newSettings })

  const updateTheme = (newTheme: LayoutState['theme']) => {
    const foundTheme = localStorage.getItem(themeKey)
    if (foundTheme !== newTheme) {
      changeHTMLAttribute(themeKey, newTheme)
      localStorage.setItem(themeKey, newTheme)
      updateSettings({ ...settings, theme: newTheme })
    }
  }

  const updateDir = (newDir: LayoutState['dir']) => updateSettings({ ...settings, dir: newDir })

  return (
    <LayoutContext.Provider
      value={{
        ...settings,
        updateTheme,
        updateDir,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

export { useLayoutContext, LayoutProvider }
