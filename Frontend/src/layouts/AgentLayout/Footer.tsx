import { Col, Container, Image, Row } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import logoLight from '@/assets/images/logo-light.svg'
import { developedByLink, currentYear } from '@/states'

const Footer = () => {
  return (
    <footer className="bg-dark p-3">
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <div className="text-center text-md-start mb-3 mb-md-0">
              <Link to="/">
                {' '}
                <Image className="h-30px" src={logoLight} alt="logo" />{' '}
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-body-secondary text-primary-hover">
              {' '}
              Copyrights ©{currentYear} Booking. Build by{' '}
              <Link to={developedByLink} className="text-body-secondary">
                StackBros
              </Link>
              .{' '}
            </div>
          </Col>
          <Col md={4}>
            <ul className="list-inline mb-0 text-center text-md-end">
              <li className="list-inline-item ms-2">
                <Link to="">
                  <FaFacebook className="text-white" />
                </Link>
              </li>
              <li className="list-inline-item ms-2">
                <Link to="">
                  <FaInstagram className="text-white" />
                </Link>
              </li>
              <li className="list-inline-item ms-2">
                <Link to="">
                  <FaLinkedinIn className="text-white" />
                </Link>
              </li>
              <li className="list-inline-item ms-2">
                <Link to="">
                  <FaTwitter className="text-white" />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
