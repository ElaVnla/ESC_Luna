import { Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import Help from './Help'
import InclusionsAndExclusions from './InclusionsAndExclusions'
import PricingCard from './PricingCard'
import TourItinerary from './TourItinerary'
import TourOverview from './TourOverview'
import TourPolicy from './TourPolicy'

const TourInformation = () => {
  return (
    <TabContainer defaultActiveKey="first">
      <section className="py-0">
        <Container>
          <Row>
            <Col xs={12}>
              <Nav className="nav-pills nav-justified nav-responsive bg-primary bg-opacity-10 rounded p-2" id="tour-pills-tab" role="tablist">
                <NavItem role="presentation">
                  <NavLink eventKey="first" className="mb-0">
                    Overview
                  </NavLink>
                </NavItem>
                <NavItem role="presentation">
                  <NavLink eventKey="second" className="mb-0">
                    Itinerary
                  </NavLink>
                </NavItem>
                <NavItem role="presentation">
                  <NavLink eventKey="third" className="mb-0">
                    Inclusions &amp; Exclusion
                  </NavLink>
                </NavItem>
                <NavItem role="presentation">
                  <NavLink eventKey="four" className="mb-0">
                    Tour Policy
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-4 pt-md-5">
        <Container>
          <Row className="g-4 g-md-5">
            <Col xl={8}>
              <TabContent className="mb-0" id="tour-pills-tabContent">
                <TabPane eventKey="first" className="fade show">
                  <TourOverview />
                </TabPane>
                <TabPane eventKey="second" className="fade">
                  <TourItinerary />
                </TabPane>
                <TabPane eventKey="third" className="fade">
                  <InclusionsAndExclusions />
                </TabPane>
                <TabPane eventKey="four" className="fade">
                  <TourPolicy />
                </TabPane>
              </TabContent>
            </Col>
            <Col as="aside" xl="4">
              <Row className="g-4">
                <Col md={6} xl={12}>
                  <PricingCard />
                </Col>
                <Col md={6} xl={12}>
                  <Help />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </TabContainer>
  )
}

export default TourInformation
