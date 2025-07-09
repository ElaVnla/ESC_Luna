import { Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { BsBriefcaseFill, BsPatchCheck, BsXOctagon } from 'react-icons/bs'
import UpcomingBooking from './components/UpcomingBooking'
import CancelledBooking from './components/CancelledBooking'
import CompletedBooking from './components/CompletedBooking'
import { PageMetaData } from '@/components'

const Bookings = () => {
  return (
    <>
      <PageMetaData title="User Bookings" />

      <Card className="border bg-transparent">
        <CardHeader className="bg-transparent border-bottom">
          <h4 className="card-header-title">My Bookings</h4>
        </CardHeader>

        <CardBody className="p-0">
          <TabContainer defaultActiveKey="1">
            <Nav className="nav nav-tabs nav-bottom-line nav-responsive nav-justified">
              <NavItem>
                <NavLink eventKey="1" className="mb-0 flex-centered">
                  <BsBriefcaseFill className=" fa-fw me-1" />
                  Upcoming Booking
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink eventKey="2" className="mb-0 flex-centered">
                  <BsXOctagon className=" fa-fw me-1" />
                  Canceled Booking
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink eventKey="3" className="mb-0 flex-centered">
                  <BsPatchCheck className=" fa-fw me-1" />
                  Completed Booking
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent className="p-2 p-sm-4" id="nav-tabContent">
              <TabPane eventKey="1" className="fade">
                <UpcomingBooking />
              </TabPane>

              <TabPane eventKey="2" className="fade">
                <CancelledBooking />
              </TabPane>

              <TabPane eventKey="3" className="fade" id="tab-3">
                <CompletedBooking />
              </TabPane>
            </TabContent>
          </TabContainer>
        </CardBody>
      </Card>
    </>
  )
}

export default Bookings
