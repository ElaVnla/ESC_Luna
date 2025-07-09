import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import aboutImg8 from '@/assets/images/about/08.jpg'
import { FaStar } from 'react-icons/fa6'
import { currency } from '@/states'

const ActionBox = () => {
  return (
    <section className="py-0 py-md-5">
      <Container>
        <div
          className="position-relative rounded-3 overflow-hidden p-3 p-sm-5"
          style={{ backgroundImage: `url(${aboutImg8})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}
        >
          <Row className="position-relative z-index-9">
            <Col md={7} xl={5} className="ms-auto">
              <Card as={CardBody} className="p-sm-5">
                <div className="d-sm-flex justify-content-between align-items-center mb-2">
                  <h6 className="text-primary mb-0">Exclusive Offer</h6>
                  <ul className="list-inline small mb-0">
                    {Array.from(new Array(5)).map((_val, idx) => (
                      <li className="list-inline-item me-1" key={idx}>
                        <FaStar size={15} className="text-warning" />
                      </li>
                    ))}
                  </ul>
                </div>
                <h5>Enjoy Your Dream Vacation In Switzerland</h5>
                <p className="mb-3">Book your hotel with us and don't forget to grab an awesome hotel deal to save massive on your stay.</p>
                <h6 className="fw-normal mb-1">2 Days / 3 Nights</h6>
                <div className="d-flex align-items-center">
                  <h5 className="text-success mb-0 me-1">{currency}750</h5>
                  <span className="mb-0 me-2">/day</span>
                  <span className="text-decoration-line-through">{currency}1000</span>
                </div>
                <Button variant="primary-soft" href="" className="mb-0 mt-3">
                  Book Now
                </Button>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default ActionBox
