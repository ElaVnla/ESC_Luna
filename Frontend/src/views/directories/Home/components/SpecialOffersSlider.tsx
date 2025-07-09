import { TinySlider } from '@/components'
import { useLayoutContext } from '@/states'
import clsx from 'clsx'
import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import { renderToString } from 'react-dom/server'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { type TinySliderSettings } from 'tiny-slider'
import { specialOffers } from '../data'

import 'tiny-slider/dist/tiny-slider.css'

const SpecialOffersSlider = () => {
  const { dir } = useLayoutContext()

  const offerSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    gutter: 30,
    autoplayButton: false,
    autoplayButtonOutput: false,
    nested: 'inner',
    controlsText: [renderToString(<BsArrowLeft size={14} />), renderToString(<BsArrowRight size={14} />)],
    autoplay: true,
    controls: true,
    edgePadding: 2,
    autoplayDirection: dir !== 'rtl' ? 'forward' : 'backward',
    items: 3,
    nav: false,
    responsive: {
      1: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  }

  return (
    <section>
      <Container>
        <Row className="mb-5">
          <Col xs={12} className="text-center">
            <h2 className="mb-0">Special Offers</h2>
          </Col>
        </Row>
        <div className="tiny-slider arrow-round arrow-blur arrow-hover">
          <TinySlider settings={offerSliderSettings}>
            {specialOffers.map((offer, idx) => {
              return (
                <div key={idx} className="h-100">
                  {offer.image ? (
                    <Card className="border rounded-3 overflow-hidden h-100">
                      <div className="row g-0 align-items-center">
                        <Col sm={6}>
                          <Image src={offer.image} className="card-img rounded-0" />
                        </Col>
                        <Col sm={6}>
                          <CardBody className="px-3">
                            <h6 className="card-title">
                              <Link to="/offer-detail" className="stretched-link">
                                {offer.title}
                              </Link>
                            </h6>
                            <p className="mb-0">{offer.subTitle}</p>
                          </CardBody>
                        </Col>
                      </div>
                    </Card>
                  ) : (
                    <Card className={clsx(offer.variant, 'bg-opacity-10 border border-2 border-dashed border-opacity-75 rounded-3 h-100')}>
                      <CardBody>
                        <h5 className="text-primary">{offer.title}</h5>
                        <div className="d-flex justify-content-between flex-wrap align-items-center">
                          {offer && offer.code && (
                            <div role="button" className="bg-mode rounded-2 px-3 py-2 d-inline-block">
                              <h6 className="fw-normal user-select-all mb-0">{offer.code}</h6>
                            </div>
                          )}
                          <span className="h6 fw-light small mb-0">{offer.subTitle}</span>
                        </div>
                      </CardBody>
                    </Card>
                  )}
                </div>
              )
            })}
          </TinySlider>
        </div>
      </Container>
    </section>
  )
}

export default SpecialOffersSlider
