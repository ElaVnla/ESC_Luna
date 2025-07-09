import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ContactLocations = () => {
  return (
    <section className="pt-0 pt-lg-5">
      <Container>
        <Row className="g-4">
          <Col lg={4}>
            <iframe
              title="map"
              className="w-100 h-100 rounded-3"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
              height={500}
              style={{ border: 0 }}
              aria-hidden="false"
            />
          </Col>
          <Col sm={6} lg={4}>
            <Card className="card-body shadow p-4 h-100">
              <h5 className="mb-3">New York, USA (HQ)</h5>
              <address className="mb-1">750 Sing Sing Rd, Horseheads, NY, 14845</address>
              <p className="mb-1">Call: 469-537-2410 (Toll-free)</p>
              <p>
                Support time: Monday to Saturday
                <br />
                9:00 am to 5:30 pm
              </p>
              <div>
                <Link to="" className="btn btn-link p-0 items-center gap-1">
                  View location <BsArrowRight className=" ms-1" />
                </Link>
              </div>
            </Card>
          </Col>
          <Col sm={6} lg={4}>
            <Card className="card-body shadow p-4 h-100">
              <h5 className="mb-3">Tokyo, Japan</h5>
              <address className="mb-1">2002 Horton Ford Rd, Eidson, TN, 37731</address>
              <p className="mb-1">Call: (423) 733-8222 (Toll-free)</p>
              <p>
                Support time: Monday to Saturday
                <br />
                9:30 am to 6:00 pm
              </p>
              <div>
                <Link to="" className="btn btn-link p-0 items-center gap-1">
                  View location <BsArrowRight className=" ms-1" />
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactLocations
