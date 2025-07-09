import { Card, CardBody, CardHeader, Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { FaCar, FaGlobeAmericas, FaHotel, FaPlane } from 'react-icons/fa'
import Step1 from './Step1'
import Step2 from './Step2'

const Hero = () => {
  return (
    <section className="pt-4 pt-lg-5">
      <Container>
        <Row>
          <Col xs={12} className="text-center mb-4">
            <h6>AGREEMENT</h6>
            <h1 className="fs-2 mb-0">Terms Of Service</h1>
          </Col>
        </Row>
        <Row>
          <Col md={10} className="mx-auto">
            <div className="vstack gap-3">
              <TabContainer defaultActiveKey="0">
                <Card className="bg-transparent p-0">
                  <CardHeader className="border-bottom bg-transparent px-0 pb-0">
                    <Nav className="nav nav-tabs nav-bottom-line nav-responsive gap-2 gap-sm-4 mb-0 border-0">
                      <NavItem className="ps-3 ps-sm-0">
                        <NavLink eventKey="0" className="items-center">
                          <FaHotel size={18} className="me-2" />
                          Hotel
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink eventKey="1" className="items-center">
                          <FaPlane size={18} className="me-2" />
                          Flight
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink eventKey="2" className="items-center">
                          <FaGlobeAmericas size={18} className="me-2" />
                          Tour
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink eventKey="3" className="items-center">
                          <FaCar size={18} className="me-2" />
                          Cabs
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </CardHeader>
                  <CardBody className="px-0 pt-4">
                    <TabContent>
                      <TabPane eventKey="0" className="fade">
                        <Step1 />
                      </TabPane>
                      <TabPane eventKey="1" className="fade">
                        <Step2 />
                      </TabPane>
                      <TabPane eventKey="2" className="fade">
                        <Step1 />
                      </TabPane>
                      <TabPane eventKey="3" className="fade">
                        <Step2 />
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </TabContainer>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
