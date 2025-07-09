import element4 from '@/assets/images/element/04.svg'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ActionBox = () => {
  return (
    <section>
      <Container>
        <div className="bg-warning bg-opacity-50 rounded-3 p-4 p-sm-5">
          <Row className="align-items-center position-relative">
            <Col lg={8}>
              <div className="d-flex">
                <h3>Let's Enjoy Your Trip With Booking</h3>
                <Image src={element4} className="h-40px ms-3" />
              </div>
              <p className="mb-3 mb-lg-0">
                He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy.
              </p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <Link to="/flights/list" className="btn btn-lg btn-dark mb-0">
                Book Your Destination
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default ActionBox
