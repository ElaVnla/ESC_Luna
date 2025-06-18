import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import { BsHouse } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import element17 from '@/assets/images/element/17.svg'

const Hero = () => {
  return (
    <section className="py-0">
      <Container>
        <Row className="mt-4 align-items-center">
          <Col xs={12}>
            <Card className="bg-light overflow-hidden px-sm-5">
              <Row className="align-items-center g-4">
                <Col sm={9}>
                  <CardBody>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb breadcrumb-dots mb-0">
                        <li className="breadcrumb-item">
                          <Link to="/tours/home" className="items-center">
                            <BsHouse className=" me-1" /> Home
                          </Link>
                        </li>
                        <li className="breadcrumb-item">Hotel detail</li>
                        <li className="breadcrumb-item active">Booking</li>
                      </ol>
                    </nav>
                    <h1 className="m-0 h2 card-title">Review your Booking</h1>
                  </CardBody>
                </Col>
                <div className="col-sm-3 text-end d-none d-sm-block">
                  <Image src={element17} className="mb-n4" />
                </div>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
