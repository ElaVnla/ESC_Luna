import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap'
import { BsBookmarkStar, BsExclamationOctagon, BsStar, BsTrophy } from 'react-icons/bs'

const ReviewMetrics = () => {
  return (
    <Card className="border h-100">
      <CardHeader className="border-bottom">
        <h5 className="card-header-title">Review Metrics</h5>
      </CardHeader>
      <CardBody>
        <Row className="g-4">
          <Col sm={6} xl={3}>
            <div className="d-flex align-items-center">
              <span className="display-6 text-primary">
                {' '}
                <BsTrophy />{' '}
              </span>
              <div className="ms-3">
                <h4 className="mb-0">4.5</h4>
                <span>Average Rating</span>
              </div>
            </div>
          </Col>
          <Col sm={6} xl={3}>
            <div className="d-flex align-items-center">
              <span className="display-6 text-warning">
                {' '}
                <BsStar />{' '}
              </span>
              <div className="ms-3">
                <h4 className="mb-0">548</h4>
                <span>Total Reviews</span>
              </div>
            </div>
          </Col>
          <Col sm={6} xl={3}>
            <div className="d-flex align-items-center">
              <span className="display-6 text-danger">
                {' '}
                <BsExclamationOctagon />{' '}
              </span>
              <div className="ms-3">
                <h4 className="mb-0">56</h4>
                <span>Unaddressed Reviews</span>
              </div>
            </div>
          </Col>
          <Col sm={6} xl={3}>
            <div className="d-flex align-items-center">
              <span className="display-6 text-success">
                {' '}
                <BsBookmarkStar />{' '}
              </span>
              <div className="ms-3">
                <h4 className="mb-0">145</h4>
                <span>New reviews in the last 30 days</span>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default ReviewMetrics
