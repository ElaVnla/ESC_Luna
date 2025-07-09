import { GlightBox, TinySlider } from '@/components'
import { Image } from 'react-bootstrap'
import { renderToString } from 'react-dom/server'
import { BsArrowLeft, BsArrowRight, BsFullscreen } from 'react-icons/bs'
import { type TinySliderSettings } from 'tiny-slider'

import gallery1 from '@/assets/images/category/hotel/gallery/01.jpg'
import gallery2 from '@/assets/images/category/hotel/gallery/02.jpg'
import gallery3 from '@/assets/images/category/hotel/gallery/03.jpg'
import gallery4 from '@/assets/images/category/hotel/gallery/04.jpg'
import gallery5 from '@/assets/images/category/hotel/gallery/05.jpg'
import gallery6 from '@/assets/images/category/hotel/gallery/06.jpg'
import gallery7 from '@/assets/images/category/hotel/gallery/07.jpg'
import gallery8 from '@/assets/images/category/hotel/gallery/08.jpg'

import 'tiny-slider/dist/tiny-slider.css'

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8]

const gallerySliderSettings: TinySliderSettings = {
  nested: 'inner',
  autoplay: true,
  gutter: 30,
  controls: true,
  edgePadding: 2,
  controlsText: [renderToString(<BsArrowLeft size={16} />), renderToString(<BsArrowRight size={16} />)],
  autoplayButton: false,
  autoplayButtonOutput: false,
  arrowKeys: true,
  items: 6,
  nav: false,
  responsive: {
    1: {
      items: 2,
      gutter:10,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 4,
    },
  },
}

const Gallery = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row mb-md-4">
          <div className="col-12 mx-auto text-center mb-4">
            <h2 className="mb-0">Our Hotel Precious Moments</h2>
          </div>
        </div>
        <div className="tiny-slider arrow-round arrow-blur arrow-hover rounded-3 overflow-hidden">
          <TinySlider className="d-flex align-items-end" settings={gallerySliderSettings}>
            {galleryImages.map((image, idx) => {
              return (
                <GlightBox image={image} key={idx}>
                  <div className="card card-element-hover  overflow-hidden">
                    <Image src={image} className="rounded-3" />
                    <div className="hover-element w-100 h-100">
                      <BsFullscreen
                        size={28}
                        className="fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                      />
                    </div>
                  </div>
                </GlightBox>
              )
            })}
          </TinySlider>
        </div>
      </div>
    </section>
  )
}

export default Gallery
