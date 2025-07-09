import { Col, Container, Image, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import logoLight from '@/assets/images/logo-light.svg'
import { developedByLink, currentYear } from '@/states'

const footerLinks = ['About', 'Terms', 'Privacy', 'Career', 'Contact us', 'Cookies']
const CenteredFooter = () => {
  return (
    <div className="bg-dark py-7">
      <Container>
        <Row className="mx-auto">
          <Col lg={6} className="mx-auto text-center">
            <Image className="mx-auto h-60px" src={logoLight} alt="logo" />
            <p className="mt-3 text-white">
              Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.
            </p>
            <ul className="nav justify-content-between text-primary-hover mt-3 mt-md-0">
              {footerLinks.map((link, idx) => {
                return (
                  <li key={idx} className="nav-item">
                    <Link className="nav-link p-2 text-white" to="">
                      {link}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <ul className="list-inline mt-3 mb-0">
              <li className="list-inline-item mx-2">
                <Link className="btn btn-white btn-sm shadow px-2 text-facebook flex-centered py-2" to="">
                  <FaFacebookF />
                </Link>
              </li>
              <li className="list-inline-item mx-2">
                <Link className="btn btn-white btn-sm shadow px-2 text-instagram flex-centered py-2" to="">
                  <FaInstagram />
                </Link>
              </li>
              <li className="list-inline-item mx-2">
                <Link className="btn btn-white btn-sm shadow px-2 text-twitter flex-centered py-2" to="">
                  <FaTwitter />
                </Link>
              </li>
              <li className="list-inline-item mx-2">
                <Link className="btn btn-white btn-sm shadow px-2 text-linkedin flex-centered py-2" to="">
                  <FaLinkedinIn />
                </Link>
              </li>
            </ul>
            <div className="text-body-secondary text-primary-hover mt-3">
              {' '}
              Copyrights ©{currentYear} Booking. Build by{' '}
              <a href={developedByLink} target="_blank" className="text-body-secondary">
                StackBros
              </a>
              .{' '}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CenteredFooter
