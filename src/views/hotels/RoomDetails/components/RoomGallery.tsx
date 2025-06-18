import { GlightBox, TinySlider } from '@/components'
import { useLayoutContext } from '@/states'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { renderToString } from 'react-dom/server'
import { BsArrowLeft, BsArrowRight, BsFullscreen, BsGeoAlt } from 'react-icons/bs'
import { type TinySliderSettings } from 'tiny-slider'

import gallery11 from '@/assets/images/gallery/11.jpg'
import gallery13 from '@/assets/images/gallery/13.jpg'
import gallery14 from '@/assets/images/gallery/14.jpg'
import gallery16 from '@/assets/images/gallery/16.jpg'

import 'tiny-slider/dist/tiny-slider.css'

const roomSlides = [gallery16, gallery13, gallery14, gallery11]

const RoomGallery = () => {
  const { dir } = useLayoutContext()

  const roomSliderSettings: TinySliderSettings = {
    nested: 'inner',
    autoplay: true,
    controls: true,
    gutter: 30,
    autoplayButton: false,
    autoplayButtonOutput: false,
    controlsText: [renderToString(<BsArrowLeft size={16} />), renderToString(<BsArrowRight size={16} />)],
    arrowKeys: true,
    items: 2,
    autoplayDirection: dir === 'ltr' ? 'forward' : 'backward',
    nav: false,
    responsive: {
      0: {
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
        items: 2,
      },
    },
  }

  return (
    <section className="pt-4">
      <Container>
        <Row>
          <Col xs={12} className="mb-4">
            <h1 className="fs-3">Luxury Room with Balcony</h1>
            <p className="fw-bold mb-0">
              <BsGeoAlt className=" me-2" />
              5855 W Century Blvd, Los Angeles - 90045{' '}
            </p>
          </Col>
        </Row>
        <div className="tiny-slider arrow-round arrow-blur">
          <TinySlider settings={roomSliderSettings}>
            {roomSlides.map((image, idx) => {
              return (
                <div key={idx}>
                  <GlightBox className="w-100 h-100" data-glightbox data-gallery="gallery" image={image}>
                    <div className="card card-element-hover card-overlay-hover overflow-hidden">
                      <Image src={image} className="rounded-3" />
                      <div className="hover-element w-100 h-100">
                        <BsFullscreen
                          size={32}
                          className=" fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                        />
                      </div>
                    </div>
                  </GlightBox>
                </div>
              )
            })}
          </TinySlider>
        </div>
      </Container>
    </section>
  )
}

export default RoomGallery
