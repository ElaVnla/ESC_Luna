import { Button, Card, CardBody, CardHeader, Col, Collapse, Image, Row } from 'react-bootstrap'
import { FaHotel, FaStar } from 'react-icons/fa6'
import hotel2 from '@/assets/images/category/hotel/4by3/02.jpg'
import { Link } from 'react-router-dom'
import { BsAlarm, BsBrightnessHigh, BsGeoAlt, BsPatchCheckFill } from 'react-icons/bs'
import { FaStarHalfAlt } from 'react-icons/fa'
import { TinySlider } from '@/components'
import { renderToString } from 'react-dom/server'
import { type TinySliderSettings } from 'tiny-slider'
import 'tiny-slider/dist/tiny-slider.css'
import roomImg1 from '@/assets/images/category/hotel/4by3/01.jpg'
import roomImg2 from '@/assets/images/category/hotel/4by3/02.jpg'
import roomImg3 from '@/assets/images/category/hotel/4by3/03.jpg'
import { RoomData, Rooms } from '@/models/RoomDetailsApi'
import { useState } from 'react'


const RoomInformation = ({roomData}: { roomData:Rooms }) => {
  const roomImages = roomData.images?.map(img => img.high_resolution_url || img.url) || []
  const [showMore, setShowMore] = useState(false)

  const roomSliderSettings: TinySliderSettings = {
    nested: 'inner',
    autoplay: false,
    controls: true,
    controlsText: [renderToString(<span>←</span>), renderToString(<span>→</span>)],
    arrowKeys: true,
    items: 1,
    nav: false,
  }

  return (
    <Card className="shadow">
      <CardHeader className="p-4 border-bottom">
        <h3 className="mb-0 items-center">
          <FaHotel className="me-2" />
          Room Details
        </h3>
      </CardHeader>

      <CardBody className="p-4">

        <div className="tiny-slider arrow-round arrow-dark overflow-hidden rounded-3 mb-2">
          {roomImages.length > 0 && (
          <div className="tiny-slider arrow-round arrow-dark overflow-hidden rounded-3 mb-2">
            <TinySlider settings={roomSliderSettings}>
              {roomImages.map((img, idx) => (
                <div key={idx}>
                  <Image src={img} className="w-100 rounded-3" alt={`Room ${idx}`} />
                </div>
              ))}
            </TinySlider>
          </div>
        )}
        </div>

        <Card className="mb-1">
          <Row className="align-items-center">
            <Col sm={6} md={12}>
              <CardHeader className="bg-transparent pb-0">
                <h5 className="card-title mb-0">{roomData.roomDescription}</h5>
              </CardHeader>
              <CardBody>
                <div dangerouslySetInnerHTML={{ __html: roomData.long_description || '' }} />
                </CardBody>
            </Col>
          </Row>
        </Card>

        <Card className="mb-1">
          <CardHeader>
            <h5 className="mb-0">Amenities</h5>
          </CardHeader>
          <CardBody>
            <Row>
              {(showMore ? roomData.amenities : roomData.amenities?.slice(0, 6))?.map((item, i) => (
                <Col key={i} xs={12} md={6} className="mb-2">
                  • {item}
                </Col>
              ))}
            </Row>

            {roomData.amenities?.length > 6 && (
              <Button
                variant="link"
                className="ps-0 mt-2"
                onClick={() => setShowMore(prev => !prev)}
              >
                {showMore ? 'Show less' : 'Show more'}
              </Button>
            )}
          </CardBody>
        </Card>

      </CardBody>
    </Card>
  )
}

export default RoomInformation
