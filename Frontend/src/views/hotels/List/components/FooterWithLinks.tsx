import { BsEnvelope, BsTelephone } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { Button, Col, Container, Image, Nav, NavItem, NavLink, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { footerLinks, topLinks } from '@/assets/data/footer-items'

import logoLight from '@/assets/images/logo-light.svg'
import expresscard from '@/assets/images/element/expresscard.svg'
import mastercard from '@/assets/images/element/mastercard.svg'
import paypal from '@/assets/images/element/paypal.svg'
import visa from '@/assets/images/element/visa.svg'
import { developedByLink, currentYear } from '@/states'

const FooterWithLinks = () => {
  return (
    <footer className="bg-dark pt-5">
      <Container>
        <Row className="g-4">
          <Col lg={3}>
            <Link to="/">
              <img className="h-40px" src={logoLight} alt="logo" />
            </Link>
            <p className="my-3 text-body-secondary">Departure defective arranging rapturous did believe him all had supported.</p>
            <p className="mb-2">
              <Link to="" className="text-body-secondary text-primary-hover d-flex align-items-center">
                <BsTelephone className=" me-2" />
                +1234 568 963
              </Link>
            </p>
            <p className="mb-0">
              <Link to="" className="text-body-secondary text-primary-hover d-flex align-items-center">
                <BsEnvelope className=" me-2" />
                example@gmail.com
              </Link>
            </p>
          </Col>
          <Col lg={8} className="ms-auto">
            <Row className="g-4">
              {footerLinks.map((item, idx) => {
                return (
                  <Col xs={6} md={3} key={idx}>
                    <h5 className="text-white mb-2 mb-md-4">{item.title}</h5>
                    <Nav className="flex-column text-primary-hover">
                      {item.items.map((item, i) => {
                        const Icon = item.icon
                        return (
                          <NavItem key={i}>
                            <NavLink className="text-body-secondary d-flex align-items-center" href={item.link}>
                              {Icon && <Icon className="me-2" />}
                              {item.name}
                            </NavLink>
                          </NavItem>
                        )
                      })}
                    </Nav>
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <h5 className="mb-2 text-white">Top Links</h5>
          <ul className="list-inline text-primary-hover lh-lg">
            {topLinks.map((item, idx) => (
              <li key={idx} className="list-inline-item me-2">
                <Link to={item.link ?? ''} className="text-body-secondary">
                  {item.name}&nbsp;
                </Link>
              </li>
            ))}
          </ul>
        </Row>
        <Row className="g-4 justify-content-between mt-0 mt-md-2">
          <Col sm={7} md={6} lg={4}>
            <h5 className="text-white mb-2">Payment &amp; Security</h5>
            <ul className="list-inline mb-0 mt-3">
              <li className="list-inline-item me-2">
                {' '}
                <Link to="">
                  <Image src={paypal} className="h-30px me-1" />
                </Link>
              </li>
              <li className="list-inline-item me-2">
                {' '}
                <Link to="">
                  <Image src={visa} className="h-30px me-1" />
                </Link>
              </li>
              <li className="list-inline-item me-2">
                {' '}
                <Link to="">
                  <Image src={mastercard} className="h-30px me-1" />
                </Link>
              </li>
              <li className="list-inline-item me-2">
                {' '}
                <Link to="">
                  <Image src={expresscard} className="h-30px me-1" />
                </Link>
              </li>
            </ul>
          </Col>
          <Col sm={5} md={6} lg={3} className="text-sm-end">
            <h5 className="text-white mb-2">Follow us on</h5>
            <ul className="list-inline mb-0 mt-3 d-flex gap-2 justify-content-end">
              <li className="list-inline-item">
                {' '}
                <Button size="sm" className="shadow px-2 bg-facebook mb-0" href="">
                  <FaFacebookF size={16} />
                </Button>{' '}
              </li>
              <li className="list-inline-item">
                {' '}
                <Button size="sm" className="shadow px-2 bg-instagram mb-0" href="">
                  <FaInstagram size={16} />
                </Button>{' '}
              </li>
              <li className="list-inline-item">
                {' '}
                <Button size="sm" className="shadow px-2 bg-twitter mb-0" href="">
                  <FaTwitter size={16} />
                </Button>{' '}
              </li>
              <li className="list-inline-item">
                {' '}
                <Button size="sm" className="shadow px-2 bg-linkedin mb-0" href="">
                  <FaLinkedinIn size={16} />
                </Button>{' '}
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="mt-4 mb-0" />
        <Row>
          <Container>
            <div className="d-lg-flex justify-content-between align-items-center py-3 text-center text-lg-start">
              <div className="text-body-secondary text-primary-hover">
                {' '}
                Copyrights ©{currentYear} Booking. Build by{' '}
                <a href={developedByLink} target="_blank" className="text-body-secondary">
                  StackBros
                </a>
                .{' '}
              </div>
              <Nav className="nav mt-2 mt-lg-0">
                <ul className="list-inline text-primary-hover mx-auto mb-0">
                  <li className="list-inline-item me-0">
                    <NavLink className="text-body-secondary py-1" href="">
                      Privacy policy
                    </NavLink>
                  </li>
                  <li className="list-inline-item me-0">
                    <NavLink className="text-body-secondary py-1" href="">
                      Terms and conditions
                    </NavLink>
                  </li>
                  <li className="list-inline-item me-0">
                    <NavLink className="text-body-secondary py-1 pe-0" href="">
                      Refund policy
                    </NavLink>
                  </li>
                </ul>
              </Nav>
            </div>
          </Container>
        </Row>
      </Container>
    </footer>
  )
}

export default FooterWithLinks
