import { GlightBox, TinySlider } from '@/components'
import { useLayoutContext } from '@/states'
import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import { renderToString } from 'react-dom/server'
import { BsArrowLeft, BsArrowRight, BsFullscreen, BsHeadset, BsQuote } from 'react-icons/bs'
import { FaStar, FaStarHalfStroke, FaThumbsUp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { type TinySliderSettings } from 'tiny-slider'

import resort4 from '@/assets/images/category/hotel/resort/04.jpg'
import resort5 from '@/assets/images/category/hotel/resort/05.jpg'
import resort6 from '@/assets/images/category/hotel/resort/06.jpg'
import { testimonialReviewSlides } from '../data'

const galleryImages = [resort5, resort6]

const Gallery = () => {
  const { dir } = useLayoutContext()

  const testimonialSliderSettings: TinySliderSettings = {
    nested: 'inner',
    autoplay: true,
    controls: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    controlsText: [renderToString(<BsArrowLeft size={16} />), renderToString(<BsArrowRight size={16} />)],
    arrowKeys: true,
    items: 1,
    autoplayDirection: dir === 'ltr' ? 'forward' : 'backward',
    nav: false,
  }

  const gallerySliderSettings: TinySliderSettings = {
    nested: 'inner',
    autoplay: false,
    controls: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    controlsText: [renderToString(<BsArrowLeft size={16} />), renderToString(<BsArrowRight size={16} />)],
    arrowKeys: true,
    items: 1,
    autoplayDirection: dir === 'ltr' ? 'forward' : 'backward',
    nav: false,
  }

  return (
    <section className="pt-5 pt-md-8 pb-0">
      <Container fluid className="px-lg-5">
        <Row className="mb-4">
          <Col xs={12} className="text-center">
            <h2 className="mb-0">Some Of Our Happy Moments</h2>
          </Col>
        </Row>

        <Row className="g-4">
          <Col xl={5} className="mt-xl-auto">
            <Image src={resort5} className="rounded-3 align-items-bottom" />
          </Col>
          <Col xl={7}>
            <Card
              className="overflow-hidden h-600px"
              style={{ backgroundImage: `url(${resort4})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}
            >
              <div className="bg-overlay bg-dark opacity-3" />
              <Row className="mt-auto z-index-9 p-2 p-sm-4">
                <Col sm={8} xxl={6}>
                  <div className="bg-mode rounded position-relative">
                    <div className="icon-lg text-white bg-primary rounded-circle position-absolute top-0 start-0 translate-middle ms-7 flex-centered">
                      <BsQuote />
                    </div>
                    <div className="tiny-slider arrow-round arrow-blur arrow-hover overflow-hidden">
                      <TinySlider settings={testimonialSliderSettings}>
                        {testimonialReviewSlides.map((item, idx) => {
                          return (
                            <div className="p-4 p-lg-5" key={idx}>
                              <h6 className="fw-normal mb-3">{item.description}</h6>
                              <div className="d-sm-flex justify-content-between align-items-bottom">
                                <div className="d-flex align-items-center">
                                  <div className="avatar avatar-xs">
                                    <Image className="avatar-img rounded-circle" src={item.avatar} />
                                  </div>
                                  <div className="ms-2">
                                    <h6 className="mb-0 fw-light">
                                      <Link to="">{item.name}</Link>
                                    </h6>
                                  </div>
                                </div>
                                <ul className="list-inline mb-0">
                                  {Array.from(new Array(4)).map((_val, idx) => (
                                    <li className="list-inline-item small me-1" key={idx}>
                                      <FaStar size={16} className="text-warning" />
                                    </li>
                                  ))}
                                  <li className="list-inline-item small">
                                    <FaStarHalfStroke size={16} className="text-warning" />
                                  </li>
                                </ul>
                              </div>
                            </div>
                          )
                        })}
                      </TinySlider>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xxl={7}>
            <div className="tiny-slider arrow-round arrow-hover arrow-dark">
              <TinySlider settings={gallerySliderSettings} className="rounded-2">
                {galleryImages.map((image, idx) => {
                  return (
                    <GlightBox key={idx} className="w-100 h-100" data-glightbox data-gallery="gallery" image={image}>
                      <Card className="card-element-hover card-overlay-hover overflow-hidden">
                        <Image src={image} className="rounded-3" />
                        <div className="hover-element w-100 h-100">
                          <BsFullscreen
                            size={32}
                            color="white"
                            className="fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                          />
                        </div>
                      </Card>
                    </GlightBox>
                  )
                })}
              </TinySlider>
            </div>
          </Col>
          <Col xxl={5} className="m-xxl-auto">
            <Card as={CardBody} className="bg-transparent p-xxl-6">
              <h3>What makes our resort best than others?</h3>
              <p>
                Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons in conviction
                an uncommonly do.
              </p>
              <Row className="g-4">
                <Col xs={12}>
                  <div className="d-flex">
                    <div className="icon-lg bg-primary bg-opacity-10 flex-shrink-0 text-primary rounded-circle flex-centered">
                      <FaThumbsUp size={20} />
                    </div>
                    <div className="ps-3">
                      <h5 className="mt-2">Hassle Free Booking</h5>
                      <p className="mb-0">Departure defective arranging rapturous did. Conduct denied adding worthy little.</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="d-flex">
                    <div className="icon-lg bg-orange bg-opacity-10 flex-shrink-0 text-orange rounded-circle flex-centered">
                      <FaStar size={20} />
                    </div>
                    <div className="ps-3">
                      <h5 className="mt-2">18,000 Reviews</h5>
                      <p className="mb-0">Supposing so be resolving breakfast am or perfectly. Conduct denied adding worthy little.</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="d-flex">
                    <div className="icon-lg bg-danger bg-opacity-10 flex-shrink-0 text-danger rounded-circle flex-centered">
                      <BsHeadset size={20} />
                    </div>
                    <div className="ps-3">
                      <h5 className="mt-2">24/7 Supports</h5>
                      <p className="mb-0">Arranging rapturous did believe him all had supported. Conduct denied adding worthy little</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Gallery
