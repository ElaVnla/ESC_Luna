import { Col, Container, Row } from 'react-bootstrap'
import { BsHeadset } from 'react-icons/bs'
import { FaTicket } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const ActionBoxes = () => {
  return (
    <section className="pt-0 pt-lg-5">
      <Container>
        <Row className="g-4">
          <Col md={6} className="position-relative overflow-hidden">
            <div className="bg-primary bg-opacity-10 rounded-3 h-100 p-4">
              <div className="d-flex">
                <div className="icon-lg text-white bg-primary rounded-circle flex-shrink-0 flex-centered">
                  <BsHeadset />
                </div>
                <div className="ms-3">
                  <h4 className="mb-1">Contact Support?</h4>
                  <p className="mb-3">Not finding the help you need?</p>
                  <Link to="/pages/contact-2" className="btn btn-dark mb-0">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} className="position-relative overflow-hidden">
            <div className="bg-secondary bg-opacity-10 rounded-3 h-100 p-4">
              <div className="d-flex">
                <div className="icon-lg text-dark bg-warning rounded-circle flex-shrink-0 flex-centered">
                  <FaTicket />
                </div>
                <div className="ms-3">
                  <h4 className="mb-1">Submit a Ticket</h4>
                  <p className="mb-3">Prosperous impression had conviction For every delay</p>
                  <Link to="" className="btn btn-dark mb-0">
                    Submit ticket
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ActionBoxes
