import { Col, Row } from 'react-bootstrap'
import { hotelsList } from '../data'
import HotelCard from './HotelCard'

const HotelList = () => {
  return (
    <Row className="g-4">
      <Col xs={12}>
        <h4 className="mb-0">Hotel list</h4>
      </Col>

      {hotelsList.map((hotel, idx) => {
        return (
          <Col lg={6} key={idx}>
            <HotelCard hotel={hotel} />
          </Col>
        )
      })}
    </Row>
  )
}

export default HotelList
