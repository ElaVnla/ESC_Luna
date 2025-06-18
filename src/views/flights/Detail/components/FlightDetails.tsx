import { useViewPort } from '@/hooks'
import { Col, Container, Row } from 'react-bootstrap'
import Sticky from 'react-sticky-el'
import CancellationCharges from './CancellationCharges'
import FareSummary from './FareSummary'
import FlightInformation from './FlightInformation'
import ImportantInformation from './ImportantInformation'
import OfferAndDiscounts from './OfferAndDiscounts'
import TravelerDetails from './TravelerDetails'

const FlightDetails = () => {
  const { width } = useViewPort()

  return (
    <section>
      <Container className="position-relative">
        <Row className="g-4">
          <Col xl={9}>
            <div className="vstack gap-4">
              <FlightInformation />

              <ImportantInformation />

              <TravelerDetails />
            </div>
          </Col>
          <Col xl={3} as="aside">
            <Sticky
              topOffset={50}
              disabled={width <= 1199}
              bottomOffset={0}
              boundaryElement="div.container"
              hideOnBoundaryHit={false}
              stickyStyle={{ transition: '0.2s all linear' }}
            >
              <Row className="g-4">
                <Col md={6} xl={12}>
                  <FareSummary />
                </Col>
                <Col md={6} xl={12}>
                  <OfferAndDiscounts />
                </Col>
                <Col md={6} xl={12}>
                  <CancellationCharges />
                </Col>
              </Row>
            </Sticky>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FlightDetails
