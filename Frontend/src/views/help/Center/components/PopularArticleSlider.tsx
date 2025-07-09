import { TinySlider } from '@/components'
import { useLayoutContext } from '@/states'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { renderToString } from 'react-dom/server'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { FaRegComments, FaThumbsUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { type TinySliderSettings } from 'tiny-slider'
import { articleSlides } from '../data'

import 'tiny-slider/dist/tiny-slider.css'

const PopularArticleSlider = () => {
  const { dir } = useLayoutContext()

  const articleSliderSettings: TinySliderSettings = {
    nested: 'inner',
    autoplay: true,
    gutter: 30,
    controls: true,
    edgePadding: 2,
    controlsText: [renderToString(<BsArrowLeft size={16} />), renderToString(<BsArrowRight size={16} />)],
    autoplayButton: false,
    autoplayButtonOutput: false,
    arrowKeys: true,
    items: 3,
    autoplayDirection: dir === 'ltr' ? 'forward' : 'backward',
    nav: false,
    responsive: {
      0: {
        items: 1,
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
    <section className="pt-0 pt-lg-5">
      <Container>
        <Row>
          <Col xs={12} className="text-center mb-4">
            <h2 className="mb-0">Popular Article</h2>
          </Col>
        </Row>
        <Row>
          <div className="tiny-slider arrow-round arrow-blur arrow-hover">
            <TinySlider settings={articleSliderSettings}>
              {articleSlides.map((article, idx) => {
                return (
                  <div key={idx}>
                    <Card className="card-body bg-transparent border p-4 mb-1">
                      <h6 className="text-primary fw-normal mb-2">{article.total} Articles</h6>
                      <h5 className="card-title mb-md-4">
                        <Link to="" className="stretched-link">
                          {article.title}
                        </Link>
                      </h5>
                      <div className="d-sm-flex justify-content-sm-between align-items-center">
                        <span>{article.time}</span>
                        <div className="hstack gap-3 flex-wrap fw-bold">
                          <span className="items-center">
                            <FaThumbsUp size={16} className="me-2" />
                            {article.like}
                          </span>
                          <span className="items-center">
                            <FaRegComments size={20} className="me-2" />
                            {article.comment}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </div>
                )
              })}
            </TinySlider>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default PopularArticleSlider
