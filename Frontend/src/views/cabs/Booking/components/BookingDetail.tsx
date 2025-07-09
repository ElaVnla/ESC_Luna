import { Col, Container, Row } from 'react-bootstrap'

import BookingPayment from './BookingPayment'
import BookingSummary from './BookingSummary'

const BookingDetail = () => {
  return (
    <section className="pt-4 pt-md-5">
      <Container className="container">
        <Row className="g-4">
          <Col xl={9} className="mx-auto">
            <div className="vstack gap-4">
              <BookingSummary />

              <BookingPayment />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BookingDetail
