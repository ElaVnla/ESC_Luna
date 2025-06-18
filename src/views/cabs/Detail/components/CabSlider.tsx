import { GlightBox, TinySlider } from '@/components'
import { useLayoutContext } from '@/states'
import { Image } from 'react-bootstrap'
import { renderToString } from 'react-dom/server'
import { BsArrowLeft, BsArrowRight, BsFullscreen } from 'react-icons/bs'
import { type TinySliderSettings } from 'tiny-slider'

import cab1 from '@/assets/images/category/cab/4by3/01.jpg'
import cab2 from '@/assets/images/category/cab/4by3/02.jpg'
import cab3 from '@/assets/images/category/cab/4by3/03.jpg'
import cab4 from '@/assets/images/category/cab/4by3/04.jpg'
import cab5 from '@/assets/images/category/cab/4by3/05.jpg'

import 'tiny-slider/dist/tiny-slider.css'

const cabSlideImages = [cab1, cab2, cab3, cab4, cab5]

const CabSlider = () => {
  const { dir } = useLayoutContext()

  const cabSliderSettings: TinySliderSettings = {
    nested: 'inner',
    autoplay: false,
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
      1: {
        items: 1,
        gutter:10,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  }

  return (
    <div className="tiny-slider arrow-round arrow-xs arrow-dark">
      <TinySlider settings={cabSliderSettings} className="rounded-2">
        {cabSlideImages.map((image, idx) => {
          return (
            <GlightBox key={idx} className="w-100 h-100" data-glightbox data-gallery="gallery" image={image}>
              <div className="card card-element-hover card-overlay-hover overflow-hidden">
                <Image src={image} className="rounded-3" />
                <div className="hover-element w-100 h-100">
                  <BsFullscreen
                    size={28}
                    className=" fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                  />
                </div>
              </div>
            </GlightBox>
          )
        })}
      </TinySlider>
    </div>
  )
}

export default CabSlider
