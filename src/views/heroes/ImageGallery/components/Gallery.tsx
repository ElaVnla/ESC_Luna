import { GlightBox } from '@/components'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { BsArrowRight, BsFullscreen } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'
import DottedBgImg from './DottedBgImg'

import gallery3 from '@/assets/images/bg/11.jpg'
import gallery5 from '@/assets/images/bg/13.jpg'
import gallery6 from '@/assets/images/bg/14.jpg'
import gallery2 from '@/assets/images/bg/15.jpg'
import gallery1 from '@/assets/images/bg/16.jpg'
import gallery7 from '@/assets/images/bg/17.jpg'
import gallery4 from '@/assets/images/bg/18.jpg'
import gallery8 from '@/assets/images/bg/19.jpg'

const Gallery = () => {
  return (
    <section className="pt-4 pt-sm-5">
      <Container className="pb-6">
        <Row>
          <Col lg={9} className="text-center mx-auto">
            <h1>
              It's a Big World Out There Go&nbsp;
              <span className="position-relative z-index-9">
                And Explore
                <span className="position-absolute top-50 start-50 translate-middle z-index-n1 d-none d-sm-block">
                  <svg className="fill-info" width="356.55px" height="79.36px" viewBox="0 0 356.55 79.36">
                    <path d="M0,56.76c13.15-11.68,37.75-14.87,47.45-15.62c20.85-1.62,41.75,1.22,62.2,5.16c43.41,8.37,85.85,20.68,129.83,26.22 c21.05,2.65,42.12,3.47,62.96-1.21c18.31-4.11,38.98-12.97,47.7-30.8C360.39,19.59,342.4,5,322.82,2.25 c-18.69-2.62-37.64,3.81-53.23,13.85c-2.82,1.82-5.87,4.32-8.53,5.85c12.91-10.62,28.31-18.89,45.01-21.3 c17.11-2.48,43.7,1.69,49.46,21.27c5.65,19.17-13.23,36.76-28.31,44.63c-18.02,9.41-39.47,13-59.65,12.81 c-44.06-0.42-88.81-11.18-131.38-21.67C97.79,48.21,42.36,30.73,0,56.76z" />
                  </svg>
                </span>
              </span>
            </h1>
            <p className="mb-3">Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.</p>
            <button className="btn btn-lg btn-primary-soft items-center mx-auto mb-0">
              Explore Holidays
              <BsArrowRight className=" ms-2" />
            </button>
          </Col>
        </Row>
      </Container>
      <Container fluid className="overflow-hidden">
        <Row className="g-4 g-lg-3 justify-content-lg-between">
          <Col xs={6} sm={4} className="position-relative ms-lg-n5">
            <figure className="position-absolute top-0 end-0 me-n8 mt-4 z-index-1">
              <svg width="222.93px" height="172.15px">
                <path
                  className="fill-primary"
                  d="M0,152.3C25.31,99.13,142.25,26.36,187.95,4.96c21.41-10.03,48.53-5.45,27.23,19.21 c-11.03,12.77-28.92,28.13-37.16,35.18c-20.39,17.45-46.34,42.82-64.05,67.05c-13.98,19.11-10.02,14.46,6.64,0.11 c13.57-11.69,29.17-25.12,40.65-32.05c3.52-2.13,6.77-3.66,9.64-4.43c9.07-2.42,13,3.08,9.55,10.77 c-7.7,17.16-22.46,31.32-31.36,47.7c-4.97,9.14-13.24,28.13,7.7,16.79c3.8-2.05,7.36-4.37,9.99-5.45l0.79,1.35 c-2.43,0.88-36.48,26.3-27.52-3.45c5.4-17.94,19.83-32.81,29.27-48.73c5.34-9,8.21-13.61-3.32-6.64 c-10.7,6.46-26.03,19.67-39.37,31.15c-15.56,13.4-28.68,24.69-33.81,21.53c-11.43-7.04,27.26-51,35.01-59.53 c14.77-16.28,30.38-31.21,45.8-44.61c6.33-5.48,18.43-16.43,28.35-25.25c11.62-10.34,15.39-16.14-5.89-6.18 C152.63,39.83,42.78,111.18,18.54,162.1L0,152.3z"
                />
              </svg>
            </figure>
            <Row className="g-xl-7 align-items-center">
              <Col xs={6} className="d-none d-md-block">
                <GlightBox data-glightbox data-gallery="gallery" image={gallery1}>
                  <div className="card card-element-hover card-overlay-hover overflow-hidden">
                    <Image src={gallery1} className="rounded-3" />
                    <div className="hover-element w-100 h-100">
                      <BsFullscreen size={32} className=" text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1" />
                    </div>
                  </div>
                </GlightBox>
              </Col>
              <Col md={6} className=" mt-lg-8">
                <GlightBox data-glightbox data-gallery="gallery" image={gallery2}>
                  <div className="card card-element-hover card-overlay-hover overflow-hidden mb-4 mb-xl-7">
                    <Image src={gallery2} className="rounded-3" />
                    <div className="hover-element w-100 h-100">
                      <BsFullscreen size={32} className=" text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1" />
                    </div>
                  </div>
                </GlightBox>
                <GlightBox data-glightbox data-gallery="gallery" image={gallery3}>
                  <div className="card card-element-hover card-overlay-hover overflow-hidden">
                    <Image src={gallery3} className="rounded-3" />
                    <div className="hover-element w-100 h-100">
                      <BsFullscreen size={32} className=" text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1" />
                    </div>
                  </div>
                </GlightBox>
              </Col>
            </Row>
          </Col>
          <Col sm={4} className="position-relative order-2 order-sm-1 z-index-9">
            <GlightBox data-glightbox data-gallery="gallery" image={gallery4}>
              <div className="card card-element-hover card-overlay-hover overflow-hidden">
                <Image src={gallery4} className="rounded-3" />
                <div className="hover-element w-100 h-100">
                  <BsFullscreen size={32} className=" text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1" />
                </div>
              </div>
            </GlightBox>
          </Col>
          <Col xs={6} sm={4} className="position-relative me-lg-n5 order-1">
            <DottedBgImg />

            <Row className="g-xl-7 position-relative">
              <Col md={6} className=" mt-lg-8">
                <GlightBox data-glightbox data-gallery="gallery" image="https://www.youtube.com/embed/tXHviS-4ygo">
                  <div className="card overflow-hidden mb-4 mb-xl-7">
                    <Image src={gallery5} className="rounded-3" />
                    <div className="w-100 h-100">
                      <span className="btn btn-lg btn-round btn-dark position-absolute top-50 start-50 translate-middle mb-0 flex-centered">
                        <FaPlay />
                      </span>
                    </div>
                  </div>
                </GlightBox>
                <GlightBox data-glightbox data-gallery="gallery" image={gallery6}>
                  <div className="card card-element-hover card-overlay-hover overflow-hidden">
                    <Image src={gallery6} className="rounded-3" />
                    <div className="hover-element w-100 h-100">
                      <BsFullscreen size={32} className=" text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1" />
                    </div>
                  </div>
                </GlightBox>
              </Col>
              <Col xs={6} className="d-none d-md-block">
                <GlightBox data-glightbox data-gallery="gallery" image={gallery7}>
                  <div className="card card-element-hover card-overlay-hover overflow-hidden mb-4 mb-xl-7">
                    <Image src={gallery7} className="rounded-3" />
                    <div className="hover-element w-100 h-100">
                      <BsFullscreen size={32} className=" text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1" />
                    </div>
                  </div>
                </GlightBox>
                <GlightBox data-glightbox data-gallery="gallery" image={gallery8}>
                  <div className="card card-element-hover card-overlay-hover overflow-hidden">
                    <Image src={gallery8} className="rounded-3" />
                    <div className="hover-element w-100 h-100">
                      <BsFullscreen size={32} className=" text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1" />
                    </div>
                  </div>
                </GlightBox>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Gallery
