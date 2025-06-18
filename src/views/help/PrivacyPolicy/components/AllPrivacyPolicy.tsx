import { Col, Container, Image, Row } from 'react-bootstrap'
import BookingPolicy from './BookingPolicy'
import CancellationPolicy from './CancellationPolicy'
import DateChangePolicy from './DateChangePolicy'
import SpecialRequest from './SpecialRequest'

import about3 from '@/assets/images/about/03.jpg'

const AllPrivacyPolicy = () => {
  return (
    <section className="pt-4 pt-lg-5">
      <Container>
        <Row className="mb-4">
          <Col xs={12} className="text-center">
            <h1 className="fs-2 mb-0">Privacy Policy</h1>
            <Image src={about3} className="h-lg-400px rounded-3 mt-4" />
          </Col>
        </Row>
        <Row>
          <Col md={10} className="mx-auto">
            <div className="vstack gap-3">
              <BookingPolicy />

              <CancellationPolicy />

              <DateChangePolicy />

              <SpecialRequest />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AllPrivacyPolicy
