import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { tripCategories } from '../data'

const TripCategories = () => {
  return (
    <section>
      <Container>
        <Row className="g-4">
          {tripCategories.map((item, idx) => {
            return (
              <Col sm={6} md={4} lg={3} xl={2} key={idx}>
                <Card className="card-body bg-light h-100 align-items-center justify-content-center">
                  <div className="d-flex align-items-center">
                    <Image src={item.image} className="h-30px me-3" />
                    <h6 className="card-title mb-0">
                      <Link to="" className="stretched-link">
                        {item.name}
                      </Link>
                    </h6>
                  </div>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default TripCategories
