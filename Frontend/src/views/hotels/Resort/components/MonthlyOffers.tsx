import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { monthlyOffers } from '../data'
import { BsArrowRight } from 'react-icons/bs'

const MonthlyOffers = () => {
  return (
    <section className="pt-5 pt-md-8 pb-0">
      <Container fluid className="px-lg-5">
        <Row className="mb-4">
          <Col xs={12} className="text-center">
            <h2>Offers Of The Month</h2>
          </Col>
        </Row>
        <Row className="g-4">
          {monthlyOffers.map((offer, idx) => {
            return (
              <Col xs={6} md={4} xl={2} key={idx}>
                <Card className="bg-transparent h-100">
                  <Image src={offer.image} className="card-img" />
                  <CardBody className="text-center p-2">
                    <h6 className="mb-0">
                      <Link to="" className="stretched-link">
                        {offer.title}
                      </Link>
                    </h6>
                  </CardBody>
                </Card>
              </Col>
            )
          })}
          <Col xs={6} md={4} xl={2}>
            <Card className="bg-transparent h-100">
              <div className="bg-light card-img position-relative h-100">
                <button className="btn btn-lg btn-primary btn-round mb-0 position-absolute top-50 start-50 translate-middle">
                  <BsArrowRight />
                </button>
              </div>
              <CardBody className="text-center p-2">
                <h6 className="mb-0">
                  <Link to="" className="stretched-link">
                    View All Offers
                  </Link>
                </h6>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MonthlyOffers
