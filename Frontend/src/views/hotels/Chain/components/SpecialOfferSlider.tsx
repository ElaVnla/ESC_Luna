import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import { renderToString } from 'react-dom/server'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { TinySlider } from '@/components'
import { useLayoutContext } from '@/states'
import { type TinySliderSettings } from 'tiny-slider'
import { Link } from 'react-router-dom'

import offerImg5 from '@/assets/images/offer/05.jpg'
import offerImg6 from '@/assets/images/offer/06.jpg'
import offerImg7 from '@/assets/images/offer/07.jpg'
import offerImg8 from '@/assets/images/offer/08.jpg'

import 'tiny-slider/dist/tiny-slider.css'

const SpecialOfferSlider = () => {
  const { dir } = useLayoutContext()

  const offerSliderSettings: TinySliderSettings = {
    autoplay: true,
    controls: true,
    edgePadding: 2,
    autoplayButton: false,
    autoplayButtonOutput: false,
    controlsText: [renderToString(<BsArrowLeft size={16} />), renderToString(<BsArrowRight size={16} />)],
    arrowKeys: true,
    loop: true,
    items: 3,
    autoplayDirection: dir === 'ltr' ? 'forward' : 'backward',
    nav: false,
    responsive: {
      1: {
        items: 1,
        gutter:10,
      },
      576: {
        items: 1,
        gutter: 8,
      },
      768: {
        items: 2,
        gutter: 30,
      },
      992: {
        items: 3,
        gutter: 30,
      },
      1200: {
        items: 3,
        gutter: 30,
      },
    },
  }

  return (
    <section className="pb-0">
      <Container>
        <Row className="mb-4">
          <Col xs={12} className="text-center">
            <h3 className="mb-0">Special Offers</h3>
          </Col>
        </Row>
        <div className="arrow-round arrow-blur arrow-hover">
          <TinySlider className="mb-8" settings={offerSliderSettings}>
            <div>
              <Card>
                <Image src={offerImg6} className="card-img" />
                <div className="position-absolute top-100 start-50 translate-middle w-100">
                  <CardBody className="text-center bg-mode shadow rounded mx-4 p-3">
                    <h6 className="card-title mb-1">
                      <Link to="">Spa Package Offer</Link>
                    </h6>
                    <small>Valid through Dec 2022</small>
                    <div className="mt-2">
                      <Link to="" className="btn btn-sm btn-dark mb-0">
                        View Offer
                      </Link>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </div>
            <div>
              <Card>
                <Image src={offerImg7} className="card-img" />
                <div className="position-absolute top-100 start-50 translate-middle w-100">
                  <CardBody className="text-center bg-mode shadow rounded mx-4 p-3">
                    <h6 className="card-title mb-1">
                      <Link to="">Elevate Your Stay</Link>
                    </h6>
                    <small>Valid through Feb 2023</small>
                    <div className="mt-2">
                      <Link to="" className="btn btn-sm btn-dark mb-0">
                        View Offer
                      </Link>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </div>
            <div>
              <Card>
                <Image src={offerImg8} className="card-img" />
                <div className="position-absolute top-100 start-50 translate-middle w-100">
                  <CardBody className="text-center bg-mode shadow rounded mx-4 p-3">
                    <h6 className="card-title mb-1">
                      <Link to="">Pass Holder Package</Link>
                    </h6>
                    <small>Valid through Feb 2023</small>
                    <div className="mt-2">
                      <Link to="" className="btn btn-sm btn-dark mb-0">
                        View Offer
                      </Link>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </div>
            <div>
              <Card>
                <Image src={offerImg5} className="card-img" />
                <div className="position-absolute top-100 start-50 translate-middle w-100">
                  <CardBody className="text-center bg-mode shadow rounded mx-4 p-3">
                    <h6 className="card-title mb-1">
                      <Link to="">2023 Golf Tournament Package</Link>
                    </h6>
                    <small>Valid through Jan 2021</small>
                    <div className="mt-2">
                      <Link to="" className="btn btn-sm btn-dark mb-0">
                        View Offer
                      </Link>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </div>
          </TinySlider>
        </div>
      </Container>
    </section>
  )
}

export default SpecialOfferSlider
