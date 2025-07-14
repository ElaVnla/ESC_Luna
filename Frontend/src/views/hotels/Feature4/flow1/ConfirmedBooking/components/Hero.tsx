import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import { BsHouse } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AppMenu, LogoBox } from '@/components'
import element17 from '@/assets/images/element/17.svg'

const Hero = () => {
  return (
    <section className="py-0 mb-6">
      <Container>
        <Card className="overflow-hidden px-sm-5">
          <Row className="align-items-center g-4 mb-6">
            <Col sm={3} className="text-start d-none d-sm-block">
              <LogoBox />
            </Col>
            <Col sm={9} className='text-end d-none d-sm-block'>
              <CardBody>
                <h1 className="m-0 h2 card-title">Booking Confirmed</h1>
              </CardBody>
            </Col>
            
          </Row>
          <Row className="align-items-center g-4">
            <Col sm={12} className="text-center">
            <h6 style={{ fontWeight: 'normal' }}>Congratulations. Your booking has been confirmed. We have sent you a confirmation email with the details of your booking.
            We look forward to welcoming you to our hotel. Below is a summary of your booking:</h6>
            </Col>
          </Row>
        </Card>
      </Container>
    </section>
  )
}

export default Hero
