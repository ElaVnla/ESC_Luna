import { Col, Container, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'

import backgroundImg from '@/assets/images/bg/07.jpg'

const Hero = () => {
  return (
    <section className="py-0">
      <Container>
        <div
          className="rounded-3 p-4 p-sm-5"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Row>
            <Col md={6}>
              <h1 className="h2 text-white mb-3">#Weekly Saving on Remove.com</h1>
              <div className="bg-warning rounded-2 p-3 mb-3">
                <h5 className="text-dark">Get Up To</h5>
                <h4 className="text-dark mb-0">25% Off on Travel Booking</h4>
              </div>
              <p className="text-white mb-3">Expand knowledge by reading book Two before narrow not relied on.</p>
              <button className="btn btn-dark mb-0">
                <span className="items-center">
                  View all Listing
                  <BsArrowRight className=" fa-fw ms-2" />
                </span>
              </button>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Hero
