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
}

const DisplayBooking = () => {
  const [booking, setBooking] = useState<BookingRow | null>(null)
  const [hotelData, setHotelData] = useState<HotelData | null>(null)
  const [roomData, setRoomData] = useState<RoomData | null>(null)           // full room API payload
  const [selectedRoom, setSelectedRoom] = useState<any | null>(null)        // the specific room by room_id

  const [mainGuest, setMainGuest] = useState<any>(null)
  const [guests, setGuests] = useState<any[]>([])

  const polling = useRef(true)

  // 1) Load booking + basic guest info using bookingId from session
  useEffect(() => {
    const stored = sessionStorage.getItem('pendingBooking')
    if (!stored) return
    const { bookingId } = JSON.parse(stored)

    console.log('🔍 Fetching booking with ID:', bookingId)

    // booking row (get everything in ONE call if you have it)
    fetch(`http://localhost:3000/api/bookings/${bookingId}`)
      .then(r => {
        if (!r.ok) throw new Error(`Booking fetch failed ${r.status}`)
        return r.json()
      })
      .then((row: BookingRow) => {
        setBooking(row)
      })
      .catch(err => console.error('❌ Failed to fetch booking row:', err))

    // main guest
    fetch(`http://localhost:3000/customers/${bookingId}`)
      .then(r => r.json())
      .then(setMainGuest)
      .catch(err => console.error('❌ Failed to fetch main guest:', err))

    // guest list
    fetch(`http://localhost:3000/guests/${bookingId}`)
      .then(async r => {
        if (!r.ok) throw new Error(`Guests fetch failed ${r.status}`)
        const data = await r.json()
        setGuests(data)
      })
      .catch(err => console.error('❌ Failed to fetch guests:', err))
  }, [])

  // 2) Once we have the booking row, call hotel + room APIs
  useEffect(() => {
  if (!booking) return;

  const {
    hotel_id: hotelId,
    room_id: roomId,
    start_date: checkIn,
    end_date: checkOut,
    guests_total: guestsTotal,
    currency
  } = booking;

  // 1) Get hotel (to obtain destination CODE)
  const hotelDetailApi = `http://localhost:3000/api/hotels/${booking.hotel_id}`;
  fetch(hotelDetailApi)
    .then(r => r.json())
    .then((h: any) => {
      setHotelData(h);

      // Prefer the code from hotel details
      const destinationCode = h?.destination_id || booking.destination_id;

      // If you have per-room breakdown, use it: e.g. [2,2] -> "2|2"
      // Otherwise fall back to total guests as a single room.
      const guestsParam =
        Array.isArray((booking as any).guests_breakdown) && (booking as any).guests_breakdown.length
          ? (booking as any).guests_breakdown.join('|')
          : String(guestsTotal);

      const checkInYMD  = checkIn.slice(0, 10);
      const checkOutYMD = checkOut.slice(0, 10);

      // 2) Build URL to match Feature 3 exactly (keep both partner_id params)
      const roomDetailApi =
        `http://localhost:3000/api/hotels/${booking.hotel_id}/price` +
        `?destination_id=${destinationCode}` +                 // code like "RsBU"
        `&checkin=${checkInYMD}` +
        `&checkout=${checkOutYMD}` +
        `&lang=en_US&currency=${currency || 'SGD'}` +
        `&partner_id=16&country_code=SG` +
        `&guests=${guestsParam}` +                             // e.g. "2" or "2|2"
        `&partner_id=1089&landing_page=wl-acme-earn&product_type=earn`;

      console.log('🔗 roomDetailApi =', roomDetailApi);

      // 3) Poll until completed, then pick the room by room_id
      polling.current = true;
      const fetchRoom = async () => {
        try {
          const resp = await fetch(`${roomDetailApi}&_=${Date.now()}`, { cache: 'no-store' });
          const data = await resp.json();

          if (data.completed) {
            console.log('🛏️ Room data completed:', data);
            polling.current = false;
            setRoomData(data);

            const candidates =
              Array.isArray(data.rooms) ? data.rooms :
              Array.isArray(data.data?.rooms) ? data.data.rooms :
              Array.isArray(data.hotels?.[0]?.rooms) ? data.hotels[0].rooms : [];

            const found = candidates.find((r: any) => String(r?.id) === String(roomId));
            if (found) setSelectedRoom(found);
            else console.warn('⚠️ No matching room_id in payload.');
            return;
          }
          if (polling.current) setTimeout(fetchRoom, 500);
        } catch (e) {
          console.error('❌ Failed to fetch room data:', e);
        }
      };
      fetchRoom();
    })
    .catch(err => console.error('❌ Failed to fetch hotel data:', err));

    console.log("hotel api:", hotelDetailApi);
  return () => { polling.current = false; };
}, [booking]);


  useEffect(() => { if (booking) console.log('✅ booking:', booking) }, [booking])
  useEffect(() => { if (mainGuest) console.log('✅ main guest:', mainGuest) }, [mainGuest])
  useEffect(() => { if (guests.length) console.log('✅ guests:', guests) }, [guests])
  useEffect(() => { if (hotelData) console.log('✅ hotel:', hotelData) }, [hotelData])

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
                  {/* Pass data down. If your components already read from context, keep them as-is */}
                  <HotelInformation hotel={hotelData ?? undefined} />
                  <RoomInformation room={selectedRoom ?? undefined} fullRoomPayload={roomData ?? undefined} />
                </div>
              </Col>

              <Col as="aside" xl={5}>
                <Row className="g-4">
                  <Col md={12} xl={12}>
                    <PriceSummary booking={booking ?? undefined} />
                  </Col>

                  {mainGuest && (
                    <Col md={12} xl={12}>
                      <MainGuestDetails guest={mainGuest} />
                    </Col>
                  )}

                  {guests.length > 0 && (
                    <Col md={12} xl={12}>
                      <GuestDetails guests={guests} />
                    </Col>
                  )}

                  <Col md={12} xl={12}>
                    <SpecialRequest bookingId={booking?.id} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </main>

      <FooterWithLinks />
      <Footer />
    </>
  )
}

export default DisplayBooking
