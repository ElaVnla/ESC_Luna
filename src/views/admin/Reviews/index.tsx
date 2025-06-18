import { Col, Row } from 'react-bootstrap'
import AllReviews from './components/AllReviews'
import StatisticCards from './components/StatisticCards'
import { PageMetaData } from '@/components'

const Reviews = () => {
  return (
    <>
      <PageMetaData title="Reviews" />

      <Row>
        <Col xs={12} className="mb-4 mb-sm-5">
          <h1 className="h3 mb-0">Reviews</h1>
        </Col>
      </Row>

      <StatisticCards />

      <AllReviews />
    </>
  )
}

export default Reviews
