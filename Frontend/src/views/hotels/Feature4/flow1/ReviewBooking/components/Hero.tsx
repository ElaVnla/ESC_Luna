import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import { BsHouse } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import element17 from '@/assets/images/element/17.svg'

const Hero = () => {
  return (
    <section className="py-0">
      <Container>
        <Card className="bg-light overflow-hidden px-sm-5">
          <Row className="align-items-center g-4">
            <Col sm={9}>
              <CardBody>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dots mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/" className="items-center">
                        <BsHouse className=" me-2" /> Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item">Hotel detail</li>
                    <li className="breadcrumb-item active">Booking</li>
                  </ol>
                </nav>
                <h1 className="m-0 h2 card-title">Review your Booking</h1>
              </CardBody>
            </Col>
            <Col sm={3} className="text-end d-none d-sm-block">
              <Image src={element17} className="mb-n4" />
            </Col>
          </Row>
        </Card>
      </Container>
    </section>
  )
}

export default Hero
