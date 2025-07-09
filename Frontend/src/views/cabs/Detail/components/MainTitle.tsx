import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'
import { FaCopy, FaLinkedin } from 'react-icons/fa6'
import { FaFacebookSquare, FaShareAlt, FaTwitterSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MainTitle = () => {
  return (
    <section className="pt-4">
      <Container className="position-relative">
        <Row>
          <Col xs={12}>
            <div className="d-flex justify-content-between align-items-lg-center">
              <ul className="nav nav-divider align-items-center mb-0">
                <li className="nav-item h4">Chicago - San Antonio</li>
                <li className="nav-item h5 fw-light">Outstation- Oneway</li>
                <li className="nav-item h5 fw-light">22 Jan 2022 - 07.25 PM</li>
              </ul>
              <div className="ms-3">
                <Dropdown drop="down" align="start">
                  <DropdownToggle as={Link} to="" className="flex-centered arrow-none btn btn-light px-2 mb-0" role="button">
                    <FaShareAlt size={13} className="fa-fw" />
                  </DropdownToggle>
                  <DropdownMenu align="end" className="min-w-auto shadow rounded" aria-labelledby="dropdownShare">
                
                      <DropdownItem className="items-center">
                        <FaTwitterSquare className="me-2" />
                        Twitter
                      </DropdownItem>
                  
                      <DropdownItem className="items-center">
                        <FaFacebookSquare className="me-2" />
                        Facebook
                      </DropdownItem>
                   
                      <DropdownItem className="items-center">
                        <FaLinkedin className="me-2" />
                        LinkedIn
                      </DropdownItem>
                  
                      <DropdownItem className="items-center">
                        <FaCopy className="me-2" />
                        Copy link
                      </DropdownItem>
                 
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MainTitle
