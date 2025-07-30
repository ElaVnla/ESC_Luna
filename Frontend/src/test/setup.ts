// Frontend/src/test/setup.ts
import '@testing-library/jest-dom'
import { vi } from 'vitest'
import React from 'react'

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))



// Mock react-router-dom
// vi.mock('react-router-dom', () => ({
//   Link: ({ children, to, ...props }: { children: React.ReactNode; to: string; [key: string]: any }) => 
//     React.createElement('a', { href: to, ...props }, children),
// }))

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useLocation: () => ({
      search: '?city=Singapore',
    }),
    Link: ({ children, to, ...props }: any) => 
      React.createElement('a', { href: to, ...props }, children),
  }
})

// Mock TinySlider component
vi.mock('@/components', () => ({
  TinySlider: ({ children }: { children: React.ReactNode }) => 
    React.createElement('div', { 'data-testid': 'tiny-slider' }, children),
}))

// Mock react-dom/server
vi.mock('react-dom/server', () => ({
  renderToString: (element: React.ReactElement) => '<mock-icon>',
}))

// Mock states
vi.mock('@/states', () => ({
  currency: '$',
  useLayoutContext: () => ({ dir: 'ltr' }),
}))

