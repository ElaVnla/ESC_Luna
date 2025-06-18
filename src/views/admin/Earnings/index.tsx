import { Col, Row } from 'react-bootstrap'
import PaymentHistory from './components/PaymentHistory'
import StatisticCards from './components/StatisticCards'
import { PageMetaData } from '@/components'

const Earnings = () => {
  return (
    <>
      <PageMetaData title="Earnings" />

      <Row>
        <Col xs={12} className="mb-4 mb-sm-5">
          <h1 className="h3 mb-0">Earnings</h1>
        </Col>
      </Row>

      <StatisticCards />

      <PaymentHistory />
    </>
  )
}

export default Earnings
