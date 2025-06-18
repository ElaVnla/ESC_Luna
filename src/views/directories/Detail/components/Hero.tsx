import { useLayoutContext } from '@/states'
import { Container, Image } from 'react-bootstrap'
import { renderToString } from 'react-dom/server'
import { BsArrowLeft, BsArrowRight, BsFullscreen } from 'react-icons/bs'
import { type TinySliderSettings } from 'tiny-slider'
import { GlightBox, TinySlider } from '@/components'

import directory3 from '@/assets/images/category/directory/03.jpg'
import directory4 from '@/assets/images/category/directory/04.jpg'
import directory5 from '@/assets/images/category/directory/05.jpg'
import directory6 from '@/assets/images/category/directory/06.jpg'

import 'tiny-slider/dist/tiny-slider.css'

const sliderImages = [directory3, directory6, directory5, directory4]

const Hero = () => {
  const { dir } = useLayoutContext()

  const heroSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    gutter: 0,
    autoplayButton: false,
    autoplayButtonOutput: false,
    nested: 'inner',
    controlsText: [renderToString(<BsArrowLeft size={16} />), renderToString(<BsArrowRight size={16} />)],
    autoplay: true,
    controls: true,
    edgePadding: 0,
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
    <section className="py-0">
      <Container fluid className="px-0">
        <div className="tiny-slider arrow-round arrow-blur">
          <TinySlider settings={heroSliderSettings}>
            {sliderImages.map((image, idx) => {
              return (
                <div key={idx}>
                  <GlightBox className="w-100 h-100" data-gallery="gallery" image={image}>
                    <div className="card card-element-hover card-overlay-hover rounded-0 overflow-hidden">
                      <Image src={image} />
                      <div className="hover-element w-100 h-100">
                        <BsFullscreen
                          size={28}
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

export default Hero
