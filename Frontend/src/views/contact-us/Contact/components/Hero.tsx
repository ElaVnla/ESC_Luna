import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { BsEnvelope, BsGlobe2, BsHeadset, BsInboxesFill, BsPhone, BsTelephone } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="pt-4 pt-md-5">
      <Container>
        <Row className="mb-5">
          <Col xl={10}>
            <h1>Let's connect and get to know each other</h1>
            <p className="lead mb-0">
              Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons. Preference for
              any astonished unreserved.
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={6} xl={4}>
            <Card className="card-body shadow text-center align-items-center h-100">
              <div className="icon-lg bg-info bg-opacity-10 text-info rounded-circle mb-2 flex-centered">
                <BsHeadset className=" fs-5" />
              </div>
              <h5>Call us</h5>
              <p>Imprudence attachment him his for sympathize. Large above be to means.</p>
              <div className="d-grid gap-3 d-sm-block">
                <Button size="sm" variant="primary-soft me-1">
                  <div className="d-flex align-items-center">
                    {' '}
                    <BsPhone className=" me-2" />
                    +123 456 789
                  </div>
                </Button>
                <Button variant="light" size="sm">
                  <BsTelephone className=" me-2" />
                  +(222)4567 586
                </Button>
              </div>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card className="card-body shadow text-center align-items-center h-100">
              <div className="icon-lg bg-danger bg-opacity-10 text-danger rounded-circle mb-2 flex-centered">
                <BsInboxesFill className=" fs-5" />
              </div>
              <h5>Email us</h5>
              <p>Large above be to means. Him his for sympathize.</p>
              <Link to="mailto:example@gmail.com" className="btn btn-link text-decoration-underline p-0 mb-0 items-center">
                <BsEnvelope className=" me-1" />
                example@gmail.com
              </Link>
            </Card>
          </Col>
          <Col xl={4} className="position-relative">
            <figure className="position-absolute top-0 end-0 z-index-1 mt-n4 ms-n7">
              <svg className="fill-warning" width="77px" height="77px">
                <path d="M76.997,41.258 L45.173,41.258 L67.676,63.760 L63.763,67.673 L41.261,45.171 L41.261,76.994 L35.728,76.994 L35.728,45.171 L13.226,67.673 L9.313,63.760 L31.816,41.258 L-0.007,41.258 L-0.007,35.725 L31.816,35.725 L9.313,13.223 L13.226,9.311 L35.728,31.813 L35.728,-0.010 L41.261,-0.010 L41.261,31.813 L63.763,9.311 L67.676,13.223 L45.174,35.725 L76.997,35.725 L76.997,41.258 Z" />
              </svg>
            </figure>
            <Card className="card-body shadow text-center align-items-center h-100">
              <div className="icon-lg bg-orange bg-opacity-10 text-orange rounded-circle mb-2 flex-centered">
                <BsGlobe2 className=" fs-5" />
              </div>
              <h5>Social media</h5>
              <p>Sympathize Large above be to means.</p>
              <ul className="list-inline mb-0 items-center gap-2">
                <li className="list-inline-item">
                  {' '}
                  <Link className="btn btn-sm bg-facebook p-2 mb-0 flex-centered" to="">
                    <FaFacebookF className="fa-fw" />
                  </Link>{' '}
                </li>
                <li className="list-inline-item">
                  {' '}
                  <Link className="btn btn-sm bg-instagram p-2 mb-0 flex-centered" to="">
                    <FaInstagram />
                  </Link>{' '}
                </li>
                <li className="list-inline-item">
                  {' '}
                  <Link className="btn btn-sm bg-twitter p-2 mb-0 flex-centered" to="">
                    <FaTwitter />
                  </Link>{' '}
                </li>
                <li className="list-inline-item">
                  {' '}
                  <Link className="btn btn-sm bg-linkedin p-2 mb-0 flex-centered" to="">
                    <FaLinkedin />
                  </Link>{' '}
                </li>
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
