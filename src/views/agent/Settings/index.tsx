import { Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { BsGear } from 'react-icons/bs'
import { FaBell, FaCog, FaUserCircle } from 'react-icons/fa'
import EditProfile from './components/EditProfile'
import NotificationSettings from './components/NotificationSettings'
import AccountSettings from './components/AccountSettings'
import { PageMetaData } from '@/components'

const Settings = () => {
  return (
    <>
      <PageMetaData title="Agent Settings" />

      <section className="pt-0">
        <Container className="vstack gap-4">
          <Row>
            <Col xs={12}>
              <h1 className="fs-4 mb-0 items-center gap-1">
                <BsGear className=" fa-fw me-1" />
                Settings
              </h1>
            </Col>
          </Row>
          <TabContainer defaultActiveKey="1">
            <Row className="g-4">
              <Col xs={12}>
                <div className="bg-light pb-0 px-2 px-lg-0 rounded-top">
                  <Nav className="nav nav-tabs nav-bottom-line nav-responsive border-0 nav-justified" role="tablist">
                    <NavItem>
                      {' '}
                      <NavLink eventKey="1" className="mb-0 flex-centered">
                        <FaCog className="fa-fw me-2" />
                        Edit Profile
                      </NavLink>{' '}
                    </NavItem>
                    <NavItem>
                      {' '}
                      <NavLink eventKey="2" className="mb-0 flex-centered">
                        <FaBell className="fa-fw me-2" />
                        Notification Settings
                      </NavLink>{' '}
                    </NavItem>
                    <NavItem>
                      {' '}
                      <NavLink eventKey="3" className="mb-0 flex-centered">
                        <FaUserCircle className="fa-fw me-2" />
                        Account Settings
                      </NavLink>{' '}
                    </NavItem>
                  </Nav>
                </div>
              </Col>
            </Row>
            <Row className="g-4">
              <Col xs={12}>
                <TabContent>
                  <TabPane eventKey="1">
                    <EditProfile />
                  </TabPane>

                  <TabPane eventKey="2">
                    <NotificationSettings />
                  </TabPane>

                  <TabPane eventKey="3">
                    <AccountSettings />
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </TabContainer>
        </Container>
      </section>
    </>
  )
}

export default Settings
