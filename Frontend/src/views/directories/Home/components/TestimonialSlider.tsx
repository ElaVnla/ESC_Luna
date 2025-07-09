import { TinySlider } from '@/components'
import { useLayoutContext } from '@/states'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { FaStarHalfAlt } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'
import { type TinySliderSettings } from 'tiny-slider'

import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import avatar7 from '@/assets/images/avatar/07.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'
import mapImg from '@/assets/images/element/map.svg'

import { testimonialSlides } from '../data'

import 'tiny-slider/dist/tiny-slider.css'

const TestimonialSlider = () => {
  const { dir } = useLayoutContext()

  const testimonialSliderSettings: TinySliderSettings = {
    nested: 'inner',
    autoplay: true,
    gutter: 30,
    controls: false,
    edgePadding: 2,
    autoplayButton: false,
    autoplayButtonOutput: false,
    arrowKeys: true,
    items: 1,
    autoplayDirection: dir !== 'rtl' ? 'forward' : 'backward',
    nav: true,
  }

  return (
    <section className="pt-0 pt-md-5">
      <Container>
        <div
          className="text-center position-relative py-5"
          style={{ backgroundImage: `url(${mapImg})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}
        >
          <div className="avatar position-absolute top-50 end-0 mt-5 me-7">
            <Image className="avatar-img rounded-circle border border-2 border-light d-none d-md-block" src={avatar9} alt="avatar" />
          </div>
          <div className="avatar avatar-lg position-absolute top-0 end-0 mt-5">
            <Image className="avatar-img rounded-circle border border-2 border-light d-none d-lg-block" src={avatar5} alt="avatar" />
          </div>
          <div className="avatar position-absolute top-50 start-0 ms-5">
            <Image className="avatar-img rounded-circle border border-2 border-light d-none d-md-block" src={avatar4} alt="avatar" />
          </div>
          <div className="avatar avatar-sm position-absolute bottom-0 start-0 mb-5 ms-8">
            <Image className="avatar-img rounded-circle border border-2 border-light d-none d-md-block" src={avatar7} alt="avatar" />
          </div>
          <div className="avatar avatar-lg position-absolute top-0 start-0 mt-5">
            <Image className="avatar-img rounded-circle border border-2 border-light d-none d-lg-block" src={avatar6} alt="avatar" />
          </div>
          <Row className="mb-5">
            <Col xs={12}>
              <h2>Hear From Our Happy Clients</h2>
            </Col>
          </Row>
          <Row>
            <Col md={9} xl={7} className="mx-auto">
              <div className="tiny-slider dots-primary">
                <TinySlider settings={testimonialSliderSettings}>
                  {testimonialSlides.map((item, idx) => {
                    return (
                      <div key={idx}>
                        <div className="avatar avatar-xl mb-4">
                          <img className="avatar-img rounded-circle" src={item.image} alt="avatar" />
                        </div>
                        <p className="h5 fw-light mb-3">"{item.description}"</p>
                        <ul className="list-inline small mb-3">
                          {Array.from(new Array(Math.floor(item.rating))).map((_star, idx) => (
                            <li key={idx} className="list-inline-item me-1">
                              <FaStar size={16} className="text-warning" />
                            </li>
                          ))}
                          {!Number.isInteger(item.rating) && (
                            <li className="list-inline-item me-1">
                              <FaStarHalfAlt size={16} className="text-warning" />
                            </li>
                          )}
                          {item.rating < 5 &&
                            Array.from(new Array(5 - Math.ceil(item.rating))).map((_val, idx) => (
                              <li key={idx} className="list-inline-item me-1">
                                <FaStar size={16} />
                              </li>
                            ))}
                        </ul>
                        <h5 className="mb-0">{item.name}</h5>
                        <span>{item.position}</span>
                      </div>
                    )
                  })}
                </TinySlider>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default TestimonialSlider
