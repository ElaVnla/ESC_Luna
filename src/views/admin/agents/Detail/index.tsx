import { Col, Row } from 'react-bootstrap'
import HotelList from './components/HotelList'
import PersonalInformation from './components/PersonalInformation'
import ProfileCard from './components/ProfileCard'
import Statistics from './components/Statistics'
import { PageMetaData } from '@/components'

const AgentDetail = () => {
  return (
    <>
      <PageMetaData title="Agent Detail" />

      <Statistics />

      <Row className="g-4 mb-5">
        <Col md={4} xxl={3}>
          <ProfileCard />
        </Col>
        <Col md={8} xxl={9}>
          <PersonalInformation />
        </Col>
      </Row>

      <HotelList />
    </>
  )
}

export default AgentDetail
