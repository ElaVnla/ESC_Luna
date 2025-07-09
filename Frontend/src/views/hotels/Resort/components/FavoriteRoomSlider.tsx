import { TinySlider } from '@/components'
import { useLayoutContext } from '@/states'
import { Button, Card, CardBody, Col, Container, Nav, NavItem, Row } from 'react-bootstrap'
import { renderToString } from 'react-dom/server'
import { BsArrowLeft, BsArrowRight, BsCheckLg } from 'react-icons/bs'
import { FaArrowRightLong } from 'react-icons/fa6'
import { type TinySliderSettings } from 'tiny-slider'

import { roomSlides } from '../data'

const FavoriteRoomSlider = () => {
  const { dir } = useLayoutContext()

  const RoomSliderSettings: TinySliderSettings = {
    nested: 'inner',
    autoplay: true,
    controls: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    controlsText: [renderToString(<BsArrowLeft size={16} />), renderToString(<BsArrowRight size={16} />)],
    arrowKeys: true,
    items: 1,
    autoplayDirection: dir === 'ltr' ? 'forward' : 'backward',
    nav: false,
  }

  return (
    <section className="pt-5 pt-md-8 pb-0">
      <Container fluid className="px-lg-5">
        <Row className="mb-4">
          <Col xxl={8} className="mx-auto">
            <div className="d-sm-flex justify-content-between align-items-center">
              <h2 className="mb-0">Our Favorite Rooms</h2>
              <Button variant="dark" href="" className="mb-0 d-grid">
                See all rooms
              </Button>
            </div>
          </Col>
        </Row>
        <div className="tiny-slider arrow-round arrow-blur arrow-hover rounded-3 overflow-hidden">
          <TinySlider settings={RoomSliderSettings}>
            {roomSlides.map((room, idx) => {
              return (
                <div className='overflow-hidden' key={idx}>
                  <Card
                    key={idx}
                    className="rounded-0 h-600px"
                    style={{ backgroundImage: `url(${room.image})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}
                  >
                    <div className="bg-overlay bg-dark opacity-3" />
                    <Row className="mt-auto justify-content-end z-index-9">
                      <Col md={8} xl={6} xxl={4}>
                        <Card as={CardBody} className="z-3 bg-mode rounded p-3 p-md-5 m-2 m-lg-6">
                          <h4>{room.name}</h4>
                          <Nav className=" h6 fw-light nav-divider mb-2 mb-sm-3">
                            <NavItem className="nav-item">{room.sqfoot} SQ.Ft</NavItem>
                            <NavItem className="nav-item">{room.sqm} SQ.M</NavItem>
                          </Nav>
                          <p className="mb-3">{room.description}</p>
                          <ul className="list-inline hstack flex-wrap gap-2 mb-3">
                            {room.feature.map((feature, idx) => {
                              return (
                                <li key={idx} className="list-inline-item h6 fw-normal mb-0">
                                  <BsCheckLg className=" text-success me-1" />
                                  {feature}
                                </li>
                              )
                            })}
                          </ul>
                          <Button variant="light" className="mb-0">
                            Reserve <FaArrowRightLong />
                          </Button>
                        </Card>
                      </Col>
                    </Row>
                  </Card>
                </div>
              )
            })}
          </TinySlider>
        </div>
      </Container>
    </section>
  )
}

export default FavoriteRoomSlider
