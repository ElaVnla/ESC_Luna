import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { topCities } from '../data'

const TopCities = () => {
  return (
    <section className="bg-light">
      <Container>
        <Row className="g-4 align-items-center">
          <Col lg={4}>
            <h2 className="mb-4">Search destination by city</h2>
            <button className="btn btn-primary mb-0">View all</button>
          </Col>
          <Col lg={8}>
            <Row className="g-4">
              {topCities.map((city, idx) => {
                return (
                  <Col key={idx} md={6}>
                    <Card className="card-body h-100 p-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <Image src={city.image} className="h-70px rounded-2" />
                          <div className="ms-3">
                            <h5 className="mb-0">
                              <Link to="">{city.name}</Link>
                            </h5>
                            <span>{city.listing} Listing</span>
                          </div>
                        </div>
                        <Link to="" className="btn btn-primary-soft btn-round flex-shrink-0 ms-2 mb-0 flex-centered">
                          <BsArrowRight />
                        </Link>
                      </div>
                    </Card>
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default TopCities
