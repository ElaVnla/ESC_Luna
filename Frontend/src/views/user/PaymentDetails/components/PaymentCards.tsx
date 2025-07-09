import { Col, Row } from 'react-bootstrap'
import { paymentCards } from '../data'
import PaymentCard from './PaymentCard'

const PaymentCards = () => {
  return (
    <Row className="g-4">
      {paymentCards.map((payment, idx) => {
        return (
          <Col md={6} key={idx}>
            <PaymentCard cardDetail={payment} />
          </Col>
        )
      })}
    </Row>
  )
}

export default PaymentCards
