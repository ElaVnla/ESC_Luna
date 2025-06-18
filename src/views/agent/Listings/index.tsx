import { Card, CardBody, CardHeader, Col, Container, Row } from 'react-bootstrap'
import { BsJournals } from 'react-icons/bs'
import { roomBookingList, statistics } from './data'
import StatisticWidget from './components/StatisticWidget'
import ListingCard from './components/ListingCard'
import { PageMetaData } from '@/components'

const Listings = () => {
  return (
    <>
      <PageMetaData title="Agent Listings" />

      <section className="pt-0">
        <Container className="vstack gap-4">
          <Row>
            <Col xs={12}>
              <h1 className="fs-4 mb-0 items-center gap-1">
                <BsJournals className=" fa-fw me-1" />
                Listings
              </h1>
            </Col>
          </Row>
          <Row className="g-4">
            {statistics.map((statistic, idx) => {
              return (
                <Col md={6} xl={4} key={idx}>
                  <StatisticWidget statistic={statistic} />
                </Col>
              )
            })}
          </Row>
          <Row>
            <Col xs={12}>
              <Card className="border">
                <CardHeader className="border-bottom">
                  <h5 className="card-header-title">
                    My Listings <span className="badge bg-primary bg-opacity-10 text-primary ms-2">{roomBookingList.length} Items</span>
                  </h5>
                </CardHeader>
                <CardBody className="vstack gap-3">
                  {roomBookingList.map((room, idx) => (
                    <ListingCard key={idx} roomListCard={room} />
                  ))}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Listings
