import { Button, Card, CardBody, CardHeader, Col, Image, Row } from 'react-bootstrap'
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

const RoomInformation = () => {
    const roomImages = [roomImg1, roomImg2, roomImg3]

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
          <TinySlider settings={roomSliderSettings}>
            {roomImages.map((img, idx) => (
              <div key={idx}>
                <Image src={img} className="w-100 rounded-3" alt={`Room ${idx}`} />
              </div>
            ))}
          </TinySlider>
        </div>

        <Card className="mb-1">
          <Row className="align-items-center">
            <Col sm={6} md={12}>
              <CardHeader className="bg-transparent pb-0">
                <h5 className="card-title mb-0">Deluxe Pool View</h5>
              </CardHeader>
              <CardBody>
                <p>
                    Club rooms are well furnished with air conditioner, 32 inch LCD television and a mini bar. They have attached bathroom with
                    showerhead and hair dryer and 24 hours supply of hot and cold running water. Complimentary wireless internet access is available.
                    Additional amenities include bottled water, a safe and a desk.
                </p>
                </CardBody>
            </Col>
          </Row>
        </Card>

        <Card className="border">
          <CardHeader className="border-bottom d-md-flex justify-content-md-between">
            <h5 className="card-title mb-0">Deluxe Pool View with Breakfast</h5>
          </CardHeader>
          <CardBody>
            <h6>Price Included</h6>
            <ul className="list-group list-group-borderless mb-0">
              <li className="list-group-item h6 fw-light d-flex mb-0 items-center ">
                <BsPatchCheckFill className=" text-success me-2" />
                Free Breakfast and Lunch/Dinner.
              </li>
              <li className="list-group-item h6 fw-light d-flex mb-0 items-center ">
                <BsPatchCheckFill className=" text-success me-2" />
                Great Small Breaks.
              </li>
              <li className="list-group-item h6 fw-light d-flex mb-0 items-center ">
                <BsPatchCheckFill className=" text-success me-2" />
                Free Stay for Kids Below the age of 12 years.
              </li>
              <li className="list-group-item h6 fw-light d-flex mb-0 items-center ">
                <BsPatchCheckFill className=" text-success me-2" />
                On Cancellation, You will not get any refund
              </li>
            </ul>
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  )
}

export default RoomInformation
