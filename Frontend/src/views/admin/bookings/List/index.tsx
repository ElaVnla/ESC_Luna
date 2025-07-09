import { PageMetaData } from '@/components'
import { Col, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { BsGridFill, BsListUl, BsPlusLg } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import BookingCardList from './components/BookingCardList'
import RoomBookingList from './components/RoomBookingList'
import Statistics from './components/Statistics'

const BookingsList = () => {
  return (
    <>
      <PageMetaData title="Booking List" />

      <TabContainer defaultActiveKey="1">
        <Row>
          <Col xs={12} className="mb-5">
            <div className="d-sm-flex justify-content-between align-items-center">
              <h1 className="h3 mb-2 mb-sm-0">Booking</h1>
              <div className="d-grid">
                <Link to="" className="btn btn-primary-soft mb-0 items-center gap-2">
                  <BsPlusLg /> Add New Room
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <Statistics />

        <Row className="g-4 justify-content-between align-items-center">
          <Col lg={5}>
            <ul className="nav nav-pills-shadow nav-responsive">
              <li className="nav-item">
                <Link to="" className="nav-link mb-0 me-sm-2 active">
                  All Status
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link mb-0 me-sm-2">
                  Available
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link mb-0">
                  Sold Out
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={6} xxl={5}>
            <div className="d-sm-flex gap-4 justify-content-between justify-content-lg-end">
              <Col md={8}>
                <form className="rounded position-relative">
                  <input className="form-control bg-transparent" type="search" placeholder="Search" aria-label="Search" />
                  <button
                    className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                    type="submit"
                  >
                    <FaSearch />
                  </button>
                </form>
              </Col>

              <div className="d-flex justify-content-end mt-2 mt-sm-0">
                <Nav className="nav nav-pills nav-pills-dark" id="room-pills-tab" role="tablist">
                  <NavItem>
                    <NavLink eventKey="1" as="button" className="rounded-start rounded-0">
                      <BsGridFill className=" fa-fw" />
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink eventKey="2" as="button" className="rounded-end rounded-0">
                      <BsListUl className=" fa-fw" />
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </div>
          </Col>
        </Row>

        <TabContent className="mt-5" id="myTabContent">
          <TabPane eventKey="1" className="fade">
            <BookingCardList />
          </TabPane>

          <TabPane eventKey="2" className="fade">
            <RoomBookingList />
          </TabPane>
        </TabContent>
      </TabContainer>
    </>
  )
}

export default BookingsList
