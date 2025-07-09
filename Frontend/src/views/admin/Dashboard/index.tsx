import { Col, Row } from 'react-bootstrap'
import { BsPlusLg } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import GuestActivityChart from './components/GuestActivityChart'
import PopularHotels from './components/PopularHotels'
import RoomAvailabilityChart from './components/RoomAvailabilityChart'
import RoomNotifications from './components/RoomNotifications'
import Statistics from './components/Statistics'
import UpcomingArrivals from './components/UpcomingArrivals'
import Reviews from './components/Reviews'
import { PageMetaData } from '@/components'

const Dashboard = () => {
  return (
    <>
      <PageMetaData title="Admin Dashboard" />

      <Row>
        <Col xs={12} className="mb-4 mb-sm-5">
          <div className="d-sm-flex justify-content-between align-items-center">
            <h1 className="h3 mb-2 mb-sm-0">Dashboard</h1>
            <div className="d-grid">
              <Link to="" className="btn btn-primary-soft mb-0 flex-centered gap-1 ">
                <BsPlusLg className=" fa-fw" /> New Booking
              </Link>
            </div>
          </div>
        </Col>
      </Row>

      <Statistics />

      <PopularHotels />

      <Row className="g-4">
        <Col xxl={8}>
          <GuestActivityChart />
        </Col>

        <Col lg={6} xxl={4}>
          <RoomAvailabilityChart />
        </Col>

        <Col lg={6} xxl={4}>
          <RoomNotifications />
        </Col>

        <Col lg={6} xxl={4}>
          <UpcomingArrivals />
        </Col>

        <Col lg={6} xxl={4}>
          <Reviews />
        </Col>
      </Row>
    </>
  )
}

export default Dashboard
