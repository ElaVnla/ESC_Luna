import { Col, Container, Row } from 'react-bootstrap'

import { Wizard, useWizard } from 'react-use-wizard'
import MainGuestDetails from './MainGuestDetails'
import GuestDetails from './GuestDetails'


const TourBookingDetails = () => {

  return (
    <Container>
      <div className="vstack gap-4">
      <Row className="g-4">
        <Col xs={12}>
            <div>
            <MainGuestDetails />
            
            <GuestDetails />
            </div>
        </Col>
        </Row>
    </div>
    </Container>
  )
}

export default TourBookingDetails
