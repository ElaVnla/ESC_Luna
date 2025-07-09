import { Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'

import bgImg9 from '@/assets/images/bg/08.jpg'
import { FaCar, FaGlobeAmericas, FaHotel, FaPlane } from 'react-icons/fa'
import Hotel from './Hotel'
import Flight from './Flight'
import Tour from './Tour'
import Cabs from './Cabs'

const BookingSearch = () => {
  return (
    <section className="pt-0">
      <Container fluid style={{ backgroundImage: `url(${bgImg9})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}>
        <Row>
          <Col md={6} className="mx-auto text-center pt-7 pb-9">
            <h1 className="text-white">Hotel, cab, flight &amp; tour experience</h1>
            <p className="lead text-white mb-0">Get the best prices on 2,000,000+ properties, worldwide</p>
          </Col>
        </Row>
      </Container>
      <Container className="mt-n8">
        <TabContainer defaultActiveKey="1">
          <Row>
            <Col xs={11} lg={9} xl={6} className="mx-auto">
              <Nav className="nav-tabs nav-bottom-line nav-justified nav-responsive bg-mode rounded-top z-index-9 position-relative pt-2 pb-0 px-4">
                <NavItem>
                  <NavLink eventKey="1" className="mb-0 flex-centered">
                    <div>
                      <FaHotel size={21} className="fa-fw me-2" />
                    </div>
                    Hotel
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink eventKey="2" className="mb-0 flex-centered">
                    <div>
                      <FaPlane size={21} className="fa-fw me-2" />
                    </div>
                    Flight
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink eventKey="3" className="mb-0 flex-centered">
                    <div>
                      <FaGlobeAmericas size={21} className="fa-fw me-2" />
                    </div>
                    Tour
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink eventKey="4" className="mb-0 flex-centered">
                    <div>
                      <FaCar size={21} className="fa-fw me-2" />
                    </div>
                    Cabs
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col xs={12}>
              <TabContent>
                <TabPane eventKey="1" className="fade show" id="tab-1-1">
                  <Hotel />
                </TabPane>
                <TabPane eventKey="2" className="fade" id="tab-1-2">
                  <Flight />
                </TabPane>
                <TabPane eventKey="3" className="fade" id="tab-1-3">
                  <Tour />
                </TabPane>
                <TabPane eventKey="4" className="fade" id="tab-1-4">
                  <Cabs />
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </TabContainer>
      </Container>
    </section>
  )
}

export default BookingSearch
