import { Col, Container, Image, Row } from 'react-bootstrap'
import { FaCheckCircle } from 'react-icons/fa'
import joinUsImg from '@/assets/images/element/join-us.svg'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="pt-4 pt-md-5">
      <Container>
        <Row className="g-4 align-items-center">
          <Col lg={7}>
            <h1 className="mb-4 display-5">
              List Your Property at <span className="text-primary">Booking</span>
            </h1>
            <p className="mb-4">Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.</p>
            <Link to="/listings/add" className="btn btn-primary-soft mb-4">
              Add Listing <FaArrowRightLong className="fa-fw" />
            </Link>
            <h6 className="fw-normal mb-1">Create New Listing</h6>
            <ul className="list-group list-group-borderless mb-0 small">
              <li className="list-group-item d-flex mb-0">
                <FaCheckCircle className="text-success me-2 mt-1" />
                More than 5.1 million holiday rentals already listed
              </li>
              <li className="list-group-item d-flex mb-0">
                <FaCheckCircle className="text-success me-2 mt-1" />
                Bed one supposing breakfast day fulfilled off depending questions.
              </li>
              <li className="list-group-item d-flex mb-0">
                <FaCheckCircle className="text-success me-2 mt-1" />
                The difference in the cost shall be borne by the client in case.
              </li>
            </ul>
          </Col>
          <div className="col-lg-5 text-center">
            <Image src={joinUsImg} />
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
