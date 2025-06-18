import { TinySlider } from '@/components'
import { useLayoutContext } from '@/states'
import { Card, CardText, Image } from 'react-bootstrap'
import { renderToString } from 'react-dom/server'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { type TinySliderSettings } from 'tiny-slider'
import { testimonialData } from '../data'

import 'tiny-slider/dist/tiny-slider.css'

const TestimonialsSlider = () => {
  const { dir } = useLayoutContext()

  const testimonialSliderSettings: TinySliderSettings = {
    nested: 'inner',
    gutter: 30,
    controls: true,
    edgePadding: 2,
    controlsText: [renderToString(<BsArrowLeft size={16} />), renderToString(<BsArrowRight size={16} />)],
    autoplayButton: false,
    autoplayButtonOutput: false,
    arrowKeys: true,
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
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  }

  return (
    <section className="pt-5 pt-md-8 pb-0">
      <div className="container-fluid px-lg-5">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2>Our Exciting Experience</h2>
          </div>
        </div>
        <div className="tiny-slider arrow-round arrow-blur rounded-3 overflow-hidden">
          <TinySlider settings={testimonialSliderSettings}>
            {testimonialData.map((item, idx) => {
              return (
                <div key={idx}>
                  <Card className="card-metro overflow-hidden">
                    <Image src={item.image} />
                    <div className="card-img-overlay d-flex">
                      <CardText as={'div'} className="mt-auto">
                        <h4>
                          <Link to="" className="text-white stretched-link">
                            {item.title}
                          </Link>
                        </h4>
                        <p className="text-white mb-2">{item.description}</p>
                        <button className="btn btn-link text-white p-0 mb-0">
                          Explore now <FaArrowRightLong className="fa-fw" />
                        </button>
                      </CardText>
                    </div>
                  </Card>
                </div>
              )
            })}
          </TinySlider>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSlider
