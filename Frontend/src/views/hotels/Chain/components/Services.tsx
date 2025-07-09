import { TinySlider } from '@/components'
import { useLayoutContext } from '@/states'
import { splitArray } from '@/utils'
import { Button, Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import { renderToString } from 'react-dom/server'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { type TinySliderSettings } from 'tiny-slider'
import { Link } from 'react-router-dom'

import flight1 from '@/assets/images/category/flight/01.jpg'
import flight2 from '@/assets/images/category/flight/02.jpg'
import flight3 from '@/assets/images/category/flight/03.jpg'
import { hotelServices } from '../data'

import 'tiny-slider/dist/tiny-slider.css'

const serviceChunks = splitArray(hotelServices, 4)

const Services = () => {
  const { dir } = useLayoutContext()

  const ServiceSliderSettings: TinySliderSettings = {
    nested: 'inner',
    autoplay: true,
    controls: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    controlsText: [renderToString(<BsArrowLeft size={16} />), renderToString(<BsArrowRight size={16} />)],
    arrowKeys: true,
    items: 3,
    autoplayDirection: dir === 'ltr' ? 'forward' : 'backward',
    nav: false,
    responsive: {
      1: {
        items: 1,
        gutter:10,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  }

  return (
    <section className="pt-0 pt-lg-5">
      <Container>
        <Row className="g-4 align-items-center">
          <Col lg={6}>
            <h2>We Provide Our Best Facilities For You</h2>
            <p>Book your hotel with us and don't forget to grab an awesome hotel deal to save massive on your stay.</p>
            <Button variant="dark" className="mb-4">
              Contact Us
            </Button>
            <Row className="g-sm-4">
              {serviceChunks.map((chunk, idx) => {
                return (
                  <Col sm={6} key={idx}>
                    <ul className="list-group list-group-borderless mt-2 mb-0">
                      {chunk.map((item, idx) => {
                        const Icon = item.icon
                        return (
                          <li className="list-group-item" key={idx}>
                            <h6 className="fw-normal mb-0">
                              <Icon className="fa-fw text-primary me-2" size={16} />
                              {item.name}
                            </h6>
                          </li>
                        )
                      })}
                    </ul>
                  </Col>
                )
              })}
            </Row>
          </Col>
          <Col lg={6}>
            <div className="bg-light rounded-3 h-100 p-4">
              <div className="tiny-slider arrow-round arrow-blur">
                <TinySlider settings={ServiceSliderSettings}>
                  <Card className="bg-transparent">
                    <Row className="g-4 align-items-center">
                      <Col sm={6}>
                        <Image fluid src={flight2} className="card-img" alt="..." />
                      </Col>
                      <Col sm={6}>
                        <CardBody className="p-0">
                          <h6 className="fw-normal mb-3">Honeymoon Sweets</h6>
                          <h4 className="card-title mb-3">
                            <Link to="" className="stretched-link">
                              Maldives Sunshine Hotel
                            </Link>
                          </h4>
                          <Link to="" className="btn btn-link p-0">
                            Explore Now <BsArrowRight />
                          </Link>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                  <Card className="bg-transparent">
                    <Row className="g-4 align-items-center">
                      <Col sm={6}>
                        <Image src={flight1} className="img-fluid card-img" alt="..." />
                      </Col>
                      <Col sm={6}>
                        <CardBody className="p-0">
                          <h6 className="fw-normal mb-3">Royal Stay</h6>
                          <h4 className="card-title mb-3">
                            <Link to="" className="stretched-link">
                              Booking Grad Palace Japan
                            </Link>
                          </h4>
                          <Link to="" className="btn btn-link p-0">
                            Explore Now <BsArrowRight />
                          </Link>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                  <Card className="bg-transparent">
                    <Row className="g-4 align-items-center">
                      <Col sm={6}>
                        <Image src={flight3} className="img-fluid card-img" alt="..." />
                      </Col>
                      <Col sm={6}>
                        <CardBody className="p-0">
                          <h6 className="fw-normal mb-3">Adventure Stay</h6>
                          <h4 className="card-title mb-3">
                            <Link to="" className="stretched-link">
                              Golf &amp; Spa Resort in New York
                            </Link>
                          </h4>
                          <Link to="" className="btn btn-link p-0">
                            Explore Now <BsArrowRight />
                          </Link>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </TinySlider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services
