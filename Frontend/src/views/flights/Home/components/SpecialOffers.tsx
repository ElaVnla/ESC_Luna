import { Col, Container, Row } from 'react-bootstrap'
import { spacialOffers } from '../data'
import OfferCard from './OfferCard'

const SpacialOffers = () => {
  return (
    <section>
      <Container>
        <Row className="mb-4">
          <Col xs={12}>
            <h4 className="mb-0">Special Offers</h4>
          </Col>
        </Row>
        <Row className="g-4">
          {spacialOffers.map((offer, idx) => {
            return (
              <Col key={idx} sm={6} lg={4} xl={3}>
                <OfferCard offerDetails={offer} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default SpacialOffers
