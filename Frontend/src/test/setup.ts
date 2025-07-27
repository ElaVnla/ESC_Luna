// Frontend/src/test/setup.ts
import '@testing-library/jest-dom'
import { vi } from 'vitest'
import React from 'react'

// Mock react-router-dom
vi.mock('react-router-dom', () => ({
  Link: ({ children, to, ...props }: { children: React.ReactNode; to: string; [key: string]: any }) => 
    React.createElement('a', { href: to, ...props }, children),
}))

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