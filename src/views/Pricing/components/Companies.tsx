import { TinySlider } from '@/components'
import { useLayoutContext } from '@/states'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { type TinySliderSettings } from 'tiny-slider'

import company1 from '@/assets/images/client/01.svg'
import company2 from '@/assets/images/client/02.svg'
import company3 from '@/assets/images/client/03.svg'
import company5 from '@/assets/images/client/05.svg'
import company6 from '@/assets/images/client/06.svg'
import company8 from '@/assets/images/client/08.svg'

import 'tiny-slider/dist/tiny-slider.css'

const companies = [company1, company2, company8, company5, company6, company3]
const Companies = () => {
  const { dir } = useLayoutContext()

  const companySliderSettings: TinySliderSettings = {
    nested: 'inner',
    autoplay: true,
    gutter: 80,
    controls: false,
    mouseDrag: true,
    edgePadding: 2,
    autoplayButton: false,
    autoplayButtonOutput: false,
    arrowKeys: false,
    items: 5,
    autoplayDirection: dir === 'ltr' ? 'forward' : 'backward',
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
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  }
  return (
    <section>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="bg-light rounded-3 p-5">
              <h5 className="text-center mb-4 mb-md-5">Trusted by more than 900 companies around the world</h5>
              <div className="tiny-slider arrow-round">
                <TinySlider settings={companySliderSettings}>
                  {companies.map((logo, idx) => {
                    return (
                      <div key={idx} className="item">
                        <Image src={logo} />{' '}
                      </div>
                    )
                  })}
                </TinySlider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Companies
