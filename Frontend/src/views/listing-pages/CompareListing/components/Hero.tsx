import { Col, Container, Image, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import compare from '@/assets/images/element/compare.svg'

const Hero = () => {
  return (
    <section className="py-0">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="bg-light rounded-3 position-relative overflow-hidden p-4 p-xl-5">
              <Row className="g-4 align-items-center">
                <Col lg={6}>
                  <h1 className="mb-3 fs-2">Compare listing and choose the best</h1>
                  <p className="mb-3">
                    Expand knowledge by reading book Two before narrow not relied on how except moment myself Dejection assurance.{' '}
                  </p>
                  <Link to="" className="btn btn-primary-soft mb-0">
                    <div className="items-center">
                      View all Listing
                      <BsArrowRight className=" fa-fw ms-2" />
                    </div>
                  </Link>
                </Col>
                <Col lg={6}>
                  <Image src={compare} />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
