// import { PageMetaData } from '@/components'
// import TopNavBar from '@/layouts/UserLayout/TopNavBar'
// import Footer from '@/layouts/UserLayout/Footer'
// import FooterWithLinks from '@/components/FooterWithLinks'
// import Hero from './components/Hero'
// import { Col, Container, Row } from 'react-bootstrap'
// import HotelInformation from './components/HotelInformation'
// import RoomInformation from './components/RoomInformation'
// import PriceSummary from './components/PriceSummary'
// import MainGuestDetails from './components/MainGuestDetails'
// import GuestDetails from './components/GuestDetails'
// import SpecialRequest from './components/SpecialRequest'

// const  DisplayBooking = () => {
//   return (
//     <>
//       <PageMetaData title="Hotel - Booking" />

//       <main>
//         <TopNavBar />
//         <Hero />
//         <Container>
//             <div className="vstack gap-4">
//             <Row className="g-4">
//                     <Col xl={7}>
//                     <div className="vstack gap-3 mb-6">
//                     <HotelInformation />
//                     <RoomInformation />
//                     </div>
//                 </Col>
//                 <Col as="aside" xl={5}>
//                     <Row className="g-4">
//                       <Col md={12} xl={12}>
//                         <PriceSummary />
//                       </Col>
//                       <Col md={12} xl={12}>
//                         <MainGuestDetails />
//                       </Col>
//                       <Col md={12} xl={12}>
//                         <GuestDetails />
//                       </Col>
//                       <Col md={12} xl={12}>
//                         <SpecialRequest />
//                       </Col>
//                     </Row>
//                 </Col>
//                 </Row>
//             </div>
//         </Container>
//       </main>

//       <FooterWithLinks />

//       <Footer />
//     </>
//   )
// }

// export default DisplayBooking


import { useEffect, useState } from 'react'
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

const DisplayBooking = () => {
  const [mainGuest, setMainGuest] = useState<any>(null)
  const [guests, setGuests] = useState<any[]>([])

  useEffect(() => {
    const stored = sessionStorage.getItem('pendingBooking')
    if (!stored) return

    const { bookingId } = JSON.parse(stored)

    // Fetch main guest info
    fetch(`http://localhost:3000/customers/${bookingId}`)
      .then((res) => res.json())
      .then(setMainGuest)
      .catch((err) => console.error('❌ Failed to fetch main guest:', err))

    // Fetch guest list
    // Fetch guest list
    fetch(`http://localhost:3000/guests/${bookingId}`)
    .then(async (res) => {
      if (!res.ok) throw new Error(`Guest fetch failed with status ${res.status}`)
      const data = await res.json()
      setGuests(data)
    })
    .catch((err) => console.error('❌ Failed to fetch guests:', err))

  }, [])

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
                  <HotelInformation />
                  <RoomInformation />
                </div>
              </Col>
              <Col as="aside" xl={5}>
                <Row className="g-4">
                  <Col md={12} xl={12}>
                    <PriceSummary />
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
                    <SpecialRequest />
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
