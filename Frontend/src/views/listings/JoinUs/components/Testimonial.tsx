import { TinySlider } from '@/components'
import { useLayoutContext } from '@/states'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { renderToString } from 'react-dom/server'
import { BsArrowLeft, BsArrowRight, BsQuote } from 'react-icons/bs'
import { type TinySliderSettings } from 'tiny-slider'
import { testimonialSlides } from '../data'

import 'tiny-slider/dist/tiny-slider.css'

const Testimonial = () => {
  const { dir } = useLayoutContext()

  const testimonialSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    gutter: 30,
    autoplayButton: false,
    autoplayButtonOutput: false,
    nested: 'inner',
    controlsText: [renderToString(<BsArrowLeft size={16} />), renderToString(<BsArrowRight size={16} />)],
    autoplay: true,
    controls: true,
    edgePadding: 0,
    autoplayDirection: dir !== 'rtl' ? 'forward' : 'backward',
    items: 1,
    nav: false,
  }

  return (
    <section>
      <Container>
        <Row className="justify-content-between mb-5">
          <Col md={6}>
            <h2 className="mb-0">What client say about Booking</h2>
          </Col>
          <Col md={5}>
            <p className="mb-0">
              As it so contrasted oh estimating instrument. Size like body some one had. Departure defective arranging rapturous did. Conduct denied
              adding worthy little.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={3}></Col>
          <Col lg={9}>
            <div className="tiny-slider arrow-round arrow-blur arrow-hover">
              <TinySlider settings={testimonialSliderSettings}>
                {testimonialSlides.map((item, idx) => {
                  return (
                    <div key={idx}>
                      <Row className="g-4">
                        <Col md={4}>
                          <Image src={item.image} className="rounded" />
                        </Col>
                        <Col md={8}>
                          <div className="d-flex">
                            <span className="display-5 opacity-2">
                              <BsQuote className="mb-3" />
                            </span>
                            <div className="ms-3">
                              <h5 className="mb-3 text-primary">{item.title}</h5>
                              <p className="mb-3">{item.description}</p>
                              <h6 className="mb-0">{item.name}</h6>
                              <small>{item.position}</small>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  )
                })}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonial
