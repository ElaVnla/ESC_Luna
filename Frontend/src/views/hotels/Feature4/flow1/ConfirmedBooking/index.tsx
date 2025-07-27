import { PageMetaData } from '@/components'
import TopNavBar from '@/layouts/UserLayout/TopNavBar'
import Footer from '@/layouts/UserLayout/Footer'
import Hero from './components/Hero'
import FooterWithLinks from '@/components/FooterWithLinks'
import HotelInformation from './components/HotelInformation'
import { Button, Card, CardBody, CardHeader, Col, Row, Container} from 'react-bootstrap'
import SpecialRequest from './components/SpecialRequest'
import RoomInformation from './components/RoomInformation'
import PriceSummary from './components/PriceSummary'
import MainGuestDetails from './components/MainGuestDetails'
import GuestDetails from './components/GuestDetails'
const ConfirmedBooking = () => {
  return (
    <>
      <PageMetaData title="Hotel - Review Booking" />

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
    </>
  )
}

export default ConfirmedBooking
