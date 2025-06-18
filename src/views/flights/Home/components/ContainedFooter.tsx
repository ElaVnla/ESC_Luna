import { Col, Container, Image, Row } from 'react-bootstrap'
import { type IconType } from 'react-icons'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import logoLight from '@/assets/images/logo-light.svg'
import { developedByLink, currentYear } from '@/states'

const footerLinks = ['About', 'Policy', 'Terms & Conditions']

const apps: IconType[] = [FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaGithub]

const ContainedFooter = () => {
  return (
    <footer>
      <Container>
        <div className="bg-dark rounded-top py-5 p-sm-5 mx-0">
          <Row className="g-4 align-items-center text-center text-lg-start">
            <Col lg={5}>
              <ul className="nav list-inline text-primary-hover justify-content-center justify-content-lg-start mb-0">
                {footerLinks.map((link, idx) => (
                  <li key={idx} className="list-inline-item">
                    <Link className="nav-link text-body-secondary" to="">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg={3} className="text-center">
              <Link className="me-0" to="/">
                <Image className="h-60px" src={logoLight} alt="footer logo" />
              </Link>
              <div className="text-body-secondary text-primary-hover mt-3">
                {' '}
                Copyrights ©{currentYear} Booking. Build by{' '}
                <Link to={developedByLink} className="text-body-secondary">
                  StackBros
                </Link>
                .{' '}
              </div>
            </Col>
            <Col lg={4}>
              <ul className="nav text-primary-hover hstack gap-2 justify-content-center justify-content-lg-end">
                {apps.map((app, idx) => {
                  const Icon = app
                  return (
                    <li key={idx} className="nav-item">
                      <Link className="nav-link text-body-secondary fs-5" to="">
                        <Icon />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  )
}

export default ContainedFooter
