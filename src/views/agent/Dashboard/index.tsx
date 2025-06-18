import { Col, Container, Row } from 'react-bootstrap'
import { BsHouseDoor } from 'react-icons/bs'
import BookingChart from './components/BookingChart'
import BookingTrafficChart from './components/BookingTrafficChart'
import StatisticsCard from './components/StatisticsCard'
import UpcomingBookings from './components/UpcomingBookings'
import { statistics } from './data'
import { PageMetaData } from '@/components'

const Dashboard = () => {
  return (
    <>
      <PageMetaData title="Agent Dashboard" />

      <section className="pt-0">
        <Container className="vstack gap-4">
          <Row>
            <Col xs={12}>
              <h1 className="fs-4 mb-0 items-center gap-1">
                <BsHouseDoor className=" fa-fw me-1" />
                Dashboard
              </h1>
            </Col>
          </Row>
          <Row className="g-4">
            {statistics.map((statistic, idx) => (
              <Col key={idx} sm={6} xl={3}>
                {' '}
                <StatisticsCard statistic={statistic} />{' '}
              </Col>
            ))}
          </Row>
          <Row className="g-4">
            <Col lg={7} xl={8}>
              <BookingChart />
            </Col>

            <Col lg={5} xl={4}>
              <BookingTrafficChart />
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <UpcomingBookings />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Dashboard
