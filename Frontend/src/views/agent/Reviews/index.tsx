import { Col, Container, Row } from 'react-bootstrap'
import { BsStar } from 'react-icons/bs'
import ReviewMetrics from './components/ReviewMetrics'
import UserReviews from './components/UserReviews'
import { PageMetaData } from '@/components'

const Reviews = () => {
  return (
    <>
      <PageMetaData title="Agent Reviews" />

      <section className="pt-0">
        <Container className="vstack gap-4">
          <Row>
            <Col xs={12}>
              <h1 className="fs-4 mb-0 items-center gap-1">
                <BsStar className=" fa-fw me-1" />
                Reviews
              </h1>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <ReviewMetrics />
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <UserReviews />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Reviews
