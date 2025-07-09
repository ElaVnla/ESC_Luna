import { Col, Row } from 'react-bootstrap'
import { directoryDeals } from '../data'
import DealCard from './DealCard'
import YourOrder from './YourOrder'
import CouponCode from './CouponCode'

const Deals = () => {
  return (
    <Row className="g-4">
      <Col lg={8}>
        {directoryDeals.map((deal, idx) => (
          <DealCard deal={deal} key={idx} />
        ))}
      </Col>
      <Col lg={4}>
        <YourOrder />

        <CouponCode />
      </Col>
    </Row>
  )
}

export default Deals
