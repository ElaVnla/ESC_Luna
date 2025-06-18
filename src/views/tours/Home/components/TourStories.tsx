import { GlightBox } from '@/components'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import { BsArrowRight, BsFullscreen } from 'react-icons/bs'
import { FaPlay, FaStar } from 'react-icons/fa6'
import TestimonialSlider from './TestimonialSlider'

import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import tour6 from '@/assets/images/category/tour/06.jpg'
import gallery1 from '@/assets/images/gallery/01.jpg'
import gallery2 from '@/assets/images/gallery/02.jpg'
import gallery3 from '@/assets/images/gallery/03.jpg'

const visitors = [avatar1, avatar2, avatar3, avatar4]

const TourStories = () => {
  return (
    <section className="pt-0 pt-md-5">
      <Container>
        <Row className="g-4 g-lg-5 align-items-center">
          <Col lg={4}>
            <h2 className="mb-0">Discover the best places to visit🔥</h2>
            <div className="d-sm-flex justify-content-sm-between align-items-center mt-4">
              <ul className="avatar-group mb-sm-0">
                {visitors.map((visitor, idx) => {
                  return (
                    <li key={idx} className="avatar">
                      <Image className="avatar-img rounded-circle" src={visitor} alt="avatar" />
                    </li>
                  )
                })}

                <li className="avatar">
                  <div className="avatar-img rounded-circle bg-dark">
                    <span className="text-white position-absolute top-50 start-50 translate-middle small">16+</span>
                  </div>
                </li>
              </ul>
              <h5 className="m-0">
                <FaStar size={24} className="text-warning me-2" />
                4.5
              </h5>
            </div>
            <button className="btn btn-lg btn-primary-soft mb-0 mt-4 items-center">
              Explore places <BsArrowRight className="fa-fw  ms-2" />
            </button>
          </Col>
          <Col lg={8}>
            <Row>
              <Col md={6}>
                <Card className="card-element-hover card-overlay-hover overflow-hidden">
                  <Image src={tour6} className="rounded-3" />
                  <GlightBox className="hover-element position-absolute w-100 h-100" data-glightbox data-gallery="gallery" image={gallery1}>
                    <BsFullscreen
                      size={32}
                      className=" fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                    />
                  </GlightBox>
                </Card>

                <TestimonialSlider />
              </Col>
              <Col md={6}>
                <Card className="card-element-hover card-overlay-hover overflow-hidden mb-4">
                  <Image src={gallery2} className="rounded-3" />
                  <GlightBox
                    className="hover-element position-absolute w-100 h-100"
                    data-glightbox
                    data-gallery="gallery"
                    image="https://www.youtube.com/embed/tXHviS-4ygo"
                  >
                    <span className="btn text-danger btn-round btn-white position-absolute top-50 start-50 translate-middle mb-0">
                      <FaPlay />
                    </span>
                  </GlightBox>
                </Card>
                <Card className="card-element-hover card-overlay-hover overflow-hidden">
                  <Image src={gallery3} className="rounded-3" />
                  <GlightBox className="hover-element position-absolute w-100 h-100" data-glightbox data-gallery="gallery" image={gallery3}>
                    <BsFullscreen
                      size={28}
                      className=" fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                    />
                  </GlightBox>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default TourStories
