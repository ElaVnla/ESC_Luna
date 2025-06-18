import { Col, Container, Row } from 'react-bootstrap'
import PlaceCard from './PlaceCard'

import { greatPlaces } from '../data'

const ExplorePlaces = () => {
  return (
    <section className="pt-0 pt-sm-5">
      <Container>
        <Row className="mb-4 mb-sm-5">
          <Col xs={12} className="text-center">
            <h2 className="mb-0">Great places to Explore</h2>
            <p className="mb-0">Book your hotel with us and don't forget to grab an awesome hotel deal to save massive on your stay.</p>
          </Col>
        </Row>
        <Row className="g-4">
          {greatPlaces.map((place, idx) => (
            <Col sm={6} lg={4} xl={3} key={idx}>
              <PlaceCard place={place} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ExplorePlaces
