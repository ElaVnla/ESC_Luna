import {
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from 'react-bootstrap'
import { BsExclamationTriangleFill, BsGeoAlt, BsScissors } from 'react-icons/bs'
import { FaCopy, FaFacebookSquare, FaHeart, FaLinkedin, FaShareAlt, FaSpa, FaStar, FaTwitterSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import About from './About'
import Deals from './Deals'
import Services from './Services'

const DirectoryDetails = () => {
  return (
    <TabContainer defaultActiveKey="1">
      <section>
        <Container>
          <Row>
            <Col xs={12}>
              <Card className="bg-light p-0 pb-0">
                <CardBody className="d-flex justify-content-between flex-wrap">
                  <div>
                    <div className="d-flex align-items-center gap-1">
                      <div className="badge text-bg-dark d-flex align-items-center gap-1">
                        <FaSpa className="fa-fw text-warning" /> Spa
                      </div>
                      <div className="badge text-bg-dark d-flex align-items-center gap-1">
                        <BsScissors className=" fa-fw text-warning" /> Salon
                      </div>
                      <div className="badge text-bg-dark d-flex align-items-center gap-1">
                        <FaStar className="fa-fw text-warning" /> 4.5
                      </div>
                    </div>
                    <h1 className="h3 mt-2 mb-1">Emperor Salon &amp; Spa</h1>
                    <p className="mb-2 mb-sm-0 items-center">
                      <BsGeoAlt className=" me-1 text-primary" />
                      5855 W Century Blvd, Los Angeles - 90045
                    </p>
                  </div>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <Link to="" className="btn btn-sm btn-white px-2">
                        <FaHeart size={13} className="fa-fw" />
                      </Link>
                    </li>
                    <Dropdown className="list-inline-item">
                      <DropdownToggle as={Link} to="" href="" className="arrow-none btn btn-sm btn-white px-2" role="button">
                        <FaShareAlt className="fa-fw" />
                      </DropdownToggle>
                      <DropdownMenu className="min-w-auto shadow rounded" aria-labelledby="dropdownShare">
                       
                          <DropdownItem href="">
                            <FaTwitterSquare className="me-2" />
                            Twitter
                          </DropdownItem>
                       
                          <DropdownItem href="">
                            <FaFacebookSquare className="me-2" />
                            Facebook
                          </DropdownItem>
                   
                          <DropdownItem href="">
                            <FaLinkedin className="me-2" />
                            LinkedIn
                          </DropdownItem>
                    
                          <DropdownItem href="">
                            <FaCopy className="me-2" />
                            Copy link
                          </DropdownItem>
                      
                      </DropdownMenu>
                    </Dropdown>
                    <li className="list-inline-item">
                      <Link to="" className="btn btn-sm btn-white px-2">
                        <BsExclamationTriangleFill className=" fa-fw" />
                      </Link>
                    </li>
                  </ul>
                </CardBody>
                <CardFooter className="bg-transparent border-top py-0">
                  <Nav as="ul" className="nav nav-tabs nav-bottom-line nav-responsive border-0" role="tablist">
                    <NavItem>
                      {' '}
                      <NavLink eventKey="1" className="mb-0">
                        About
                      </NavLink>{' '}
                    </NavItem>
                    <NavItem>
                      {' '}
                      <NavLink eventKey="2" className="mb-0">
                        Deals
                      </NavLink>{' '}
                    </NavItem>
                    <NavItem>
                      {' '}
                      <NavLink eventKey="3" className="mb-0">
                        Services
                      </NavLink>{' '}
                    </NavItem>
                  </Nav>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <TabContent className="mb-0" id="tour-pills-tabContent">
            <TabPane eventKey="1" className="fade show" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
              <About />
            </TabPane>
            <TabPane eventKey="2" className="fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
              <Deals />
            </TabPane>
            <TabPane eventKey="3" className="fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
              <Services />
            </TabPane>
          </TabContent>
        </Container>
      </section>
    </TabContainer>
  )
}

export default DirectoryDetails
