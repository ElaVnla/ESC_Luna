import { Col, Container, Image, Row } from 'react-bootstrap'

import element6 from '@/assets/images/element/06.svg'
import element7 from '@/assets/images/element/07.svg'
import element8 from '@/assets/images/element/08.svg'
import about2 from '@/assets/images/about/02.jpg'
import about3 from '@/assets/images/about/03.jpg'
import about4 from '@/assets/images/about/04.jpg'

const Hero = () => {
  return (
    <section>
      <Container>
        <Row className="mb-5">
          <Col xl={10} className="mx-auto text-center">
            <h1>If You Want To See The World We Will Help You</h1>
            <p className="lead">
              Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons. Preference for
              any astonished unreserved.
            </p>
            <div className="hstack gap-3 flex-wrap justify-content-center">
              <h6 className="bg-mode shadow rounded-2 fw-normal py-2 px-4 items-center gap-1">
                <Image src={element6} className="h-20px me-2" />
                14K+ Global Customers
              </h6>
              <h6 className="bg-mode shadow rounded-2 fw-normal py-2 px-4 items-center gap-1">
                <Image src={element7} className="h-20px me-2" />
                10K+ Happy Customers
              </h6>
              <h6 className="bg-mode shadow rounded-2 fw-normal py-2 px-4 items-center gap-1">
                <Image src={element8} className="h-20px me-2" />
                1M+ Subscribers
              </h6>
            </div>
          </Col>
        </Row>
        <Row className="g-4 align-items-center">
          <Col md={6}>
            <Image src={about2} className="rounded-3" />
          </Col>
          <Col md={6}>
            <Row className="g-4">
              <Col md={8}>
                <Image src={about3} className="rounded-3" />
              </Col>
              <Col xs={12}>
                <Image src={about4} className="rounded-3" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
