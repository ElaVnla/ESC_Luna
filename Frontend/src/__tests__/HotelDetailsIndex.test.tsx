import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { render } from '@testing-library/react'
import HotelDetails from '@/views/hotels/HotelDetails'
import { HotelParams } from '@/models/HotelDetailsApi'
import { testHotel1, testRoom1, testRoomIncomplete } from './MockData'

const mockParams: HotelParams = {
  hotelId: '1PMc',
  destinationId: 'RsBU',
  checkIn: '2025-08-01',
  checkOut: '2025-08-05',
  guests: '2',
}

// Mock useLocation globally
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom')
  return {
    ...actual,
    useLocation: () => ({
      pathname: '/hotels/detail',
      state: { hotelParams: mockParams },
      key: 'testKey',
    }),
  }
})


// Mock other components
vi.mock('@/components', () => ({
  PageMetaData: (props: { title: string }) => <div data-testid="page-metadata">{props.title}</div>,
  GlightBox: (props: any) => <div data-testid="glightbox" {...props} />,
}))
vi.mock('@/layouts/UserLayout/TopNavBar', () => ({
  default: () => <div data-testid="top-nav-bar" />,
}))

vi.mock('@/components/HotelGallery', () => ({
  default: () => <div data-testid="hotel-gallery" />,
}))

vi.mock('@/views/hotels/HotelDetails/components/HotelMaps', () => ({
  default: () => <div data-testid="map-component-mock" />,
}))

vi.mock('@/views/hotels/List/components/Hero', () => ({
  default: () => <div data-testid="hero" />,
}))


describe('HotelDetails', () => {
  
  // Test only loading hotel message is displayed
  it('renders loading state before hotel data arrives', () => {
    render(
      <MemoryRouter initialEntries={['/hotel']}>
        <Routes>
          <Route path="/hotel" element={<HotelDetails />} />
        </Routes>
      </MemoryRouter>
    )

    // Loading message should appear
    expect(screen.getByText(/loading hotel details/i)).toBeInTheDocument()
    
    // Double check nothing else is being displayed currently
    expect(screen.queryByText("About This Hotel")).not.toBeInTheDocument()
    expect(screen.queryByText(/loading rooms/i)).not.toBeInTheDocument()
  })

  
  // Test loading hotel message changed to loading room message
  describe('with immediate room loading mock', () => {
    beforeEach(() => {
      vi.spyOn(global, 'fetch').mockImplementation((url: any) => {
      if (url.includes('/price')) {
        // Return incomplete room data so completed is false
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ completed: false, rooms: [] }),
        } as Response);
      } else {
        // Return hotel data immediately
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(testHotel1),
        } as Response);
      }
    });

    })

    afterEach(() => {
      vi.restoreAllMocks()
    })

    it('shows "Loading Rooms..." after hotel details finish loading (no polling)', async () => {
      render(
        <MemoryRouter initialEntries={['/hotel']}>
          <Routes>
            <Route path="/hotel" element={<HotelDetails />} />
          </Routes>
        </MemoryRouter>
      )

      // Wait for hotel data to finish loading
      await waitFor(() => {
        expect(screen.queryByText(/loading hotel details/i)).not.toBeInTheDocument()
      })
      // Double Check About Hotel has loaded
      expect(screen.queryByText("About This Hotel")).toBeInTheDocument()

      // Now rooms are loading, so "Loading Rooms..." should appear
      await waitFor(() => {
        expect(screen.getByText("Loading Rooms...")).toBeInTheDocument();
      });
    })
  })
})
