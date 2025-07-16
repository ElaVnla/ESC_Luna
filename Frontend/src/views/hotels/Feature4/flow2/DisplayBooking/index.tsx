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

const  DisplayBooking = () => {
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
                      <Col md={12} xl={12}>
                        <MainGuestDetails />
                      </Col>
                      <Col md={12} xl={12}>
                        <GuestDetails />
                      </Col>
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
