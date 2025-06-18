import { Col, Container, Row } from 'react-bootstrap'
import { popularDestinations } from '../data'
import PopularDestinationCard from './PopularDestinationCard'

const PopularDestinations = () => {
  return (
    <section className="pt-0 pt-lg-5">
      <Container>
        <Row className="mb-4">
          <Col xs={12} className="text-center">
            <h2 className="mb-0">Popular Destinations</h2>
          </Col>
        </Row>
        <Row className="g-4">
          {popularDestinations.map((item, idx) => {
            return (
              <Col key={idx} sm={6} lg={3}>
                <PopularDestinationCard
                  flightInterval={item.flightInterval}
                  image={item.image}
                  name={item.name}
                  rating={item.rating}
                  information={item.information}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default PopularDestinations
