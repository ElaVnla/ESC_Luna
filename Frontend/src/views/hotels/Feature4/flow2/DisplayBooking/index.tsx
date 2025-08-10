import { useEffect, useRef, useState } from 'react'
import { PageMetaData } from '@/components'
import TopNavBar from '@/layouts/UserLayout/TopNavBar'
import Footer from '@/layouts/UserLayout/Footer'
import FooterWithLinks from '@/components/FooterWithLinks'
import Hero from './components/Hero'
import { Col, Container, Row } from 'react-bootstrap'
import HotelInformation from './components/HotelInformation'
import RoomInformation from './components/RoomInformation'
import PriceSummary from './components/PriceSummary'
import MainGuestDetails from './components/MainGuestDetails'
import GuestDetails from './components/GuestDetails'
import SpecialRequest from './components/SpecialRequest'
import type { HotelData } from '@/models/HotelDetailsApi'
import type { RoomData } from '@/models/RoomDetailsApi'

// shape of a row in your bookings table (only what we use)
type BookingRow = {
  id: string
  destination_id: string
  hotel_id: string
  room_id: string
  start_date: string  // 'YYYY-MM-DD'
  end_date: string    // 'YYYY-MM-DD'
  guests_total: number
  currency: string
  message_to_hotel: string 
}

const DisplayBooking = () => {
  // State for booking row
  const [ booking, setBooking] = useState<BookingRow | null>(null)
  // State for hotel details
  const [hotelData, setHotelData] = useState<HotelData | null>(null)
  // State for selected room details
  const [selectedRoom, setSelectedRoom] = useState<any | null>(null)

  // State for main guest details
  const [mainGuest, setMainGuest] = useState<any>(null)
  // State for additional guests list
  const [guests, setGuests] = useState<any[]>([])

  // Load booking and guest info using bookingId from sessionStorage
  useEffect(() => {
    // Get bookingId from sessionStorage
    const stored = sessionStorage.getItem('pendingBooking')
    if (!stored) return
    const { bookingId } = JSON.parse(stored)

    console.log('Fetching booking with ID:', bookingId)

    // Fetch booking row
    fetch(`http://localhost:3000/api/bookings/${bookingId}`)
      .then(r => {
        if (!r.ok) throw new Error(`Booking fetch failed ${r.status}`)
        return r.json()
      })
      .then((row: BookingRow) => {
        setBooking(row)

        // Fetch hotel details
        const hotelDetailApi = `http://localhost:3000/api/hotels/${row.hotel_id}`
        fetch(hotelDetailApi)
          .then(resp => resp.json())
          .then((h: any) => setHotelData(h))
          .catch(err => console.error('Failed to fetch hotel data:', err))
      })
      .catch(err => console.error('Failed to fetch booking row:', err))

    // Fetch main guest details
    fetch(`http://localhost:3000/customers/${bookingId}`)
      .then(r => r.json())
      .then(setMainGuest)
      .catch(err => console.error('Failed to fetch main guest:', err))

    // Fetch guest list
    fetch(`http://localhost:3000/guests/${bookingId}`)
      .then(async r => {
        if (!r.ok) throw new Error(`Guests fetch failed ${r.status}`)
        const data = await r.json()
        setGuests(data)
      })
      .catch(err => console.error('Failed to fetch guests:', err))

    // Fetch room details from DB by bookingId
    fetch(`http://localhost:3000/rooms/${encodeURIComponent(bookingId)}`)
      .then(r => (r.ok ? r.json() : null))
      .then(room => {
        if (room) {
          console.log('Found room in DB by booking id:', bookingId)
          setSelectedRoom(room)
        } else {
          console.warn('No room cached for this booking; selectedRoom will be undefined.')
        }
      })
      .catch(err => console.error('Failed to fetch room from DB:', err))
  }, [])

  // Debug logging for state changes
  useEffect(() => { if (booking) console.log('booking:', booking) }, [booking])
  useEffect(() => { if (mainGuest) console.log('main guest:', mainGuest) }, [mainGuest])
  useEffect(() => { if (guests.length) console.log('guests:', guests) }, [guests])
  useEffect(() => { if (hotelData) console.log('hotel:', hotelData) }, [hotelData])
  useEffect(() => { if (selectedRoom) console.log('room:', selectedRoom) }, [selectedRoom])

  return (
    <>
      <PageMetaData title="Hotel - Booking" />
      <main>
        <TopNavBar />
        <Hero />
        <Container>
          <div className="vstack gap-4">
            <Row className="g-4">
              <Col xl={7}>
                <div className="vstack gap-3 mb-6">
                  {/* Hotel information and room details */}
                  <HotelInformation hotel={hotelData ?? undefined} booking={booking as any} />
                  <RoomInformation room={selectedRoom ?? undefined} />
                </div>
              </Col>

              <Col as="aside" xl={5}>
                <Row className="g-4">
                  <Col md={12} xl={12}>
                    {/* Price summary */}
                    <PriceSummary booking={booking ?? undefined} />
                  </Col>

                  {/* Main guest details */}
                  {mainGuest && (
                    <Col md={12} xl={12}>
                      <MainGuestDetails guest={mainGuest} />
                    </Col>
                  )}

                  {/* Additional guest details */}
                  {guests.length > 0 && (
                    <Col md={12} xl={12}>
                      <GuestDetails guests={guests} />
                    </Col>
                  )}

                  {/* Special request message */}
                  <Col md={12} xl={12}>
                    <SpecialRequest message={booking?.message_to_hotel ?? ''} />

                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </main>
    </>
  )
}

export default DisplayBooking
