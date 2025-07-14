import { Button, Card, CardBody, CardHeader, Col, Image, Row } from 'react-bootstrap'
import { FaHotel, FaStar } from 'react-icons/fa6'
import hotel2 from '@/assets/images/category/hotel/4by3/02.jpg'
import { Link } from 'react-router-dom'
import { BsAlarm, BsBrightnessHigh, BsGeoAlt, BsPatchCheckFill } from 'react-icons/bs'
import { FaStarHalfAlt } from 'react-icons/fa'

const CancellationPolicy = () => {
    return (
        <Card className="shadow">
          <CardHeader className="border-bottom d-md-flex justify-content-md-between">
            <h5 className="card-title mb-0">Cancellation Policy</h5>
          </CardHeader>
          <CardBody className="card-body">
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
    )
}

export default CancellationPolicy