import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { render } from '@testing-library/react'
import HotelDetails from '@/views/hotels/HotelDetails'
import { HotelParams } from '@/models/HotelDetailsApi'
import { testDiH7, testHotel1,} from './MockData'
import axios from 'axios'

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

// Mock axios globally
vi.mock('axios')


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
        // Mock axios.get for unavailable rooms API call made by RoomOptions
        (axios.get as vi.Mock).mockResolvedValueOnce({
        data: ["5864c3ec-8c0e-5f8b-91d7-c7a8eba1d666"],  // Your mocked unavailable room IDs
        })

        // Mock API fetches
        vi.spyOn(global, 'fetch').mockImplementation((url: any) => {
        if (url.includes('/price')) {
        // Return room data
        return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(testDiH7),
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

    it('Integrated Testing for feature 3', async () => {
        render(
        <MemoryRouter initialEntries={['/hotel']}>
            <Routes>
            <Route path="/hotel" element={<HotelDetails />} />
            </Routes>
        </MemoryRouter>
        )

        // // About Hotel
        await waitFor(() => {
            expect(screen.getByText(/about this hotel/i)).toBeInTheDocument()
            expect(screen.queryByText(/Pamper yourself with/i)).toBeInTheDocument()
        })

        // Nearby Places
        expect(await screen.queryByText("Nearby Places")).toBeInTheDocument()
        expect(await screen.queryByText(/Clarke Quay Central - 0.9 km/i)).toBeInTheDocument()

        // Amenities
        expect(await screen.queryByText("TV in Room")).toBeInTheDocument()
        expect(await screen.queryByText("Vibe")).toBeInTheDocument()
        expect(await screen.queryByText("86")).toBeInTheDocument()

        // Room Options
        await waitFor(() => {
            expect(screen.queryByText(/Premier Courtyard Room King/i)).toBeInTheDocument()
            expect(screen.queryByText(/Heritage Room King/i)).toBeInTheDocument()
            expect(screen.queryByText(/Loft Suite/i)).toBeInTheDocument()
            expect(screen.queryByText(/1620.2/i)).not.toBeInTheDocument() // lowest price but should be removed cos its "booked"
            expect(screen.queryByText(/2025.25/i)).toBeInTheDocument()
            expect(screen.queryByText(/2166.57/i)).toBeInTheDocument()
            expect(screen.queryByText(/5272.13/)).toBeInTheDocument()
            expect(screen.queryByText(/Reservations are required/i)).toBeInTheDocument()
        })

        // Hotel Policies
        expect(await screen.queryByText("Check in Instructions")).toBeInTheDocument()
        expect(await screen.queryByText(/Reservations are required/i)).toBeInTheDocument()

    })
    
})})
