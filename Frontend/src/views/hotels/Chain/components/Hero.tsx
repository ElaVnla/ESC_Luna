import { TinySlider } from '@/components'
import { jarallax, jarallaxVideo } from 'jarallax'
import { useEffect, useRef } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { renderToString } from 'react-dom/server'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { type TinySliderSettings } from 'tiny-slider'

import hotelImg6 from '@/assets/images/category/hotel/06.jpg'
import 'jarallax/dist/jarallax.min.css'
import 'tiny-slider/dist/tiny-slider.css'

jarallaxVideo()

const Hero = () => {
  const heroSliderSettings: TinySliderSettings = {
    gutter: 1,
    controls: true,
    nav: false,
    controlsText: [renderToString(<BsArrowLeft size={16} />), renderToString(<BsArrowRight size={16} />)],
    items: 1,
  }

  const jarallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const jarallaxInstance = jarallaxRef.current

    if (jarallaxInstance) {
      jarallax(jarallaxInstance, {
        speed: 0.2,
        videoSrc: 'https://www.youtube.com/watch?v=j56YlCXuPFU',
      })
    }

    return () => {
      if (jarallaxInstance) {
        jarallax(jarallaxInstance, 'destroy')
      }
    }
  }, [])

  return (
    <section className="py-0">
      <div className="container-fluid">
        <Row>
          <Col lg={11} className="mx-auto">
            <div className="tiny-slider arrow-round arrow-blur arrow-hover rounded-3 overflow-hidden">
              <TinySlider settings={heroSliderSettings}>
                <div
                  className="card overflow-hidden h-400px h-sm-600px rounded-0"
                  style={{
                    backgroundImage: `url(${hotelImg6})`,
                    backgroundPosition: 'center left',
                    backgroundSize: 'cover',
                  }}
                >
                  <div className="bg-overlay bg-dark opacity-3" />
                  <div className="card-img-overlay d-flex align-items-center">
                    <div className="container">
                      <Row>
                        <Col xs={11} lg={7}>
                          <h6 className="text-white fw-normal mb-0">💖 Fall in love with the City</h6>
                          <h1 className="text-white display-6">Modern Luxury In Manhattan</h1>
                          <Link to="" className="btn btn-primary mb-0">
                            Reserve Today
                          </Link>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
                <Card ref={jarallaxRef} className="card jarallax overflow-hidden h-400px h-sm-600px bg-parallax text-center rounded-0">
                  <div className="bg-overlay bg-dark opacity-3" />
                  <div className="card-img-overlay d-flex align-items-center">
                    <div className="container w-100 my-auto">
                      <Row className="row justify-content-center">
                        <Col xs={11} lg={8}>
                          <h1 className="text-white">Taking luxury hospitality to new heights</h1>
                          <Link to="" className="btn btn-dark mb-0">
                            Take Me There
                          </Link>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Card>
              </TinySlider>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Hero
