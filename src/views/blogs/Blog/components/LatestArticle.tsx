import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaSync } from 'react-icons/fa'

import blog7 from '@/assets/images/blog/07.jpg'
import blog9 from '@/assets/images/blog/09.jpg'
import blog11 from '@/assets/images/blog/11.jpg'
import blog12 from '@/assets/images/blog/12.jpg'

const LatestArticle = () => {
  return (
    <section className="pt-0 pt-sm-5">
      <Container>
        <Row className="mb-4">
          <Col xs={12} className="text-center">
            <h2 className="mb-0">Latest Article</h2>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={6} lg={4}>
            <Card className="bg-transparent">
              <div className="position-relative">
                <Image src={blog7} className="card-img" />
                <div className="card-img-overlay p-3">
                  <Link to="" className="badge text-bg-warning mb-2">
                    History
                  </Link>
                </div>
              </div>
              <CardBody className="p-3 pb-0">
                <h5 className="card-title mt-2">
                  <Link to="/blogs/detail">7 common mistakes everyone makes while traveling</Link>
                </h5>
                <h6 className="fw-light mb-0">
                  By <Link to="">Joan Wallace</Link>
                </h6>
              </CardBody>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="bg-light p-3">
              <CardBody>
                <Link to="" className="badge text-white bg-primary mb-2">
                  Research
                </Link>
                <h5 className="card-title">
                  <Link to="/blogs/detail">Ten unconventional tips about startups that you can't learn from books</Link>
                </h5>
                <p>
                  Prospective should start broadly and then narrow their list down to colleges that best fit their needs, experts say. Yet remarkably
                  appearance gets him his projection.{' '}
                </p>
                <h6 className="fw-light mb-0">
                  By <Link to="">Louis Crawford</Link>
                </h6>
              </CardBody>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="bg-transparent">
              <div className="position-relative">
                <Image src={blog11} className="card-img" />
                <div className="card-img-overlay p-3">
                  <Link to="" className="badge text-bg-danger mb-2">
                    Business
                  </Link>
                </div>
              </div>
              <CardBody className="p-3 pb-0">
                <h5 className="card-title">
                  <Link to="/blogs/detail">Best Twitter accounts for learning about investment</Link>
                </h5>
                <h6 className="fw-light mb-0">
                  By <Link to="">Carolyn Ortiz</Link>
                </h6>
              </CardBody>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <div className="card h-100 bg-transparent">
              <div className="card-img-top rounded overflow-hidden position-relative hover-overlay-top">
                <div className="ratio ratio-4x3 bg-dark">
                  <iframe src="https://player.vimeo.com/video/167434033?title=0&byline=0&portrait=0" allowFullScreen />
                </div>
              </div>
              <CardBody className="p-3 pb-0">
                <Link to="" className="badge text-bg-info mb-2">
                  Technology
                </Link>
                <h5 className="card-title">
                  <Link to="/blogs/detail">10 things you need to know about Booking</Link>
                </h5>
                <h6 className="fw-light mb-0">
                  By <Link to="">Amanda Reed</Link>
                </h6>
              </CardBody>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <Card className="bg-transparent">
              <div className="position-relative">
                <Image src={blog9} className="card-img" />
                <div className="card-img-overlay p-3">
                  <Link to="" className="badge text-bg-dark mb-2">
                    Adventure
                  </Link>
                </div>
              </div>
              <CardBody className="p-3 pb-0">
                <h5 className="card-title">
                  <Link to="/blogs/detail">Never underestimate the influence of social media</Link>
                </h5>
                <h6 className="fw-light mb-0">
                  By <Link to="">Bryan Knight</Link>
                </h6>
              </CardBody>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="bg-transparent">
              <div className="position-relative">
                <Image src={blog12} className="card-img" />
                <div className="card-img-overlay p-3">
                  <Link to="" className="badge text-bg-success mb-2">
                    Hotel Service
                  </Link>
                </div>
              </div>
              <CardBody className="p-3 pb-0">
                <h5 className="card-title">
                  <Link to="/blogs/detail">This is why this year will be the year of startups</Link>
                </h5>
                <h6 className="fw-light mb-0">
                  By <Link to="">Carolyn Ortiz</Link>
                </h6>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <Link to="" className="btn btn-primary-soft mb-0">
            <span className="items-center">
              Load more
              <FaSync className="ms-2" size={14} />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default LatestArticle
