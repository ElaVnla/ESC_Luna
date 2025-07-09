import { Col, Container, Row } from 'react-bootstrap'
import { FaHandHoldingDollar, FaHandHoldingHeart } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import appStore from '@/assets/images/element/app-store.svg'
import googlePlay from '@/assets/images/element/google-play.svg'

const AppsLink = () => {
  return (
    <section className="bg-light">
      <Container>
        <Row className="g-4">
          <Col md={6} xxl={4}>
            <div className="bg-body d-flex rounded-3 h-100 p-4">
              <h3 className="d-flex align-items-center">
                <FaHandHoldingHeart size={42} />
              </h3>
              <div className="ms-3">
                <h5>24x7 Help</h5>
                <p className="mb-0">If we fall short of your expectation in any way, let us know</p>
              </div>
            </div>
          </Col>

          <Col md={6} xxl={4}>
            <div className="bg-body d-flex rounded-3 h-100 p-4">
              <h3 className="d-flex align-items-center">
                <FaHandHoldingDollar size={42} />
              </h3>
              <div className="ms-3">
                <h5>Payment Trust</h5>
                <p className="mb-0">All refunds come with no questions asked guarantee</p>
              </div>
            </div>
          </Col>

          <Col lg={6} xl={5} xxl={3} className="ms-xxl-auto">
            <h5 className="mb-4">Download app</h5>
            <Row className="g-3">
              <Col xs={6} sm={4} md={3} lg={6}>
                <Link to="">
                  {' '}
                  <img src={googlePlay} />{' '}
                </Link>
              </Col>

              <Col xs={6} sm={4} md={3} lg={6}>
                <Link to="">
                  {' '}
                  <img src={appStore} />{' '}
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AppsLink
