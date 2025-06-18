import { TinySlider } from '@/components'
import { useLayoutContext } from '@/states'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { renderToString } from 'react-dom/server'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { type TinySliderSettings } from 'tiny-slider'
import { categoriesSlides } from '../data'

import 'tiny-slider/dist/tiny-slider.css'

const CategorySlider = () => {
  const { dir } = useLayoutContext()

  const categorySliderSettings: TinySliderSettings = {
    nested: 'inner',
    autoplay: true,
    gutter: 30,
    controls: true,
    edgePadding: 2,
    controlsText: [renderToString(<BsArrowLeft size={14} />), renderToString(<BsArrowRight size={14} />)],
    autoplayButton: false,
    autoplayButtonOutput: false,
    arrowKeys: true,
    autoplayDirection: dir !== 'rtl' ? 'forward' : 'backward',
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 5,
      },
    },
  }

  return (
    <section>
      <Container>
        <Row className="g-4 align-items-center">
          <Col lg={2}>
            <h4 className="pb-1">Browse by Category</h4>
            <Link to="" className="h6 fw-normal text-primary mb-0 items-center">
              View all <BsArrowRight className="ms-1" />
            </Link>
          </Col>
          <Col lg={10}>
            <div className="tiny-slider arrow-round arrow-xs arrow-dark">
              <TinySlider settings={categorySliderSettings}>
                {categoriesSlides.map((category, idx) => {
                  return (
                    <div key={idx}>
                      <Card className="card-body bg-light text-center align-items-center">
                        <div className="icon-xl bg-mode rounded-circle mb-3">
                          <figure>{category.image}</figure>
                        </div>
                        <h6 className="mb-0">
                          <Link to="" className="stretched-link">
                            {category.name}
                          </Link>
                        </h6>
                      </Card>
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

export default CategorySlider
