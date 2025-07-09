import { PageMetaData } from '@/components'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FooterWithLinks from './components/FooterWithLinks'
import TopNavBar11 from './components/TopNavBar11'

import errorSvg from '@/assets/images/element/error.svg'

const NotFound = () => {
  return (
    <>
      <PageMetaData title="Not Found" />

      <TopNavBar11 />

      <section>
        <Container>
          <Row className="align-items-center">
            <Col md={10} className="text-center mx-auto">
              <Image src={errorSvg} className="h-lg-500px mb-4" />
              <h1 className="display-1 text-primary mb-0">404</h1>
              <h2>Oh no, something went wrong!</h2>
              <p className="mb-4">Either something went wrong or this page doesn't exist anymore.</p>
              <Link to="/" className="btn btn-light mb-0">
                Take me to Homepage
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <FooterWithLinks />
    </>
  )
}

export default NotFound
