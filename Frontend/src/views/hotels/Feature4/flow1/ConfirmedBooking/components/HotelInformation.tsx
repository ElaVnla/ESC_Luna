import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Image,
  Row
} from 'react-bootstrap';
import { FaHotel, FaStar, FaStarHalfAlt, FaCheckCircle } from 'react-icons/fa'; // ✅ correct fa package
import { BsAlarm, BsBrightnessHigh, BsGeoAlt } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import hotelFallbackImage from '@/assets/images/category/hotel/4by3/02.jpg';
import { splitArray } from '@/utils';

type HotelInformationProps = {
  hotel: {
    name: string;
    address: string;
    rating: number;
    check_in_date: string;
    check_in_time: string;
    check_out_date: string;
    check_out_time: string;
    rooms: number;
    adults: number;
    children: number;
    nights: number;
    days: number;
    description: string;
    amenities: string[];
    image?: string;
  };
};

const HotelInformation = ({ hotel }: HotelInformationProps) => {
  const amenitiesChunks = splitArray(hotel.amenities || [], 2);

  return (
    <Card className="shadow">
      <CardHeader className="p-4 border-bottom">
        <h3 className="mb-0 items-center">
          <FaHotel className="me-2" />
          Hotel Information
        </h3>
      </CardHeader>

      <CardBody className="p-4">
        <Card className="mb-4">
          <Row className="align-items-center">
            <Col sm={6} md={4}>
              <Image src={hotel.image || hotelFallbackImage} className="card-img" />
            </Col>
            <Col sm={6} md={8}>
              <CardBody className="pt-3 pt-sm-0 p-0">
                <h5 className="card-title">
                  <Link to="">{hotel.name}</Link>
                </h5>
                <p className="small mb-2 items-center">
                  <BsGeoAlt className="me-2" />
                  {hotel.address}
                </p>
                <ul className="list-inline mb-0 items-center">
                  {Array.from(new Array(Math.floor(hotel.rating))).map((_, idx) => (
                    <li key={idx} className="list-inline-item me-1 mb-1 small">
                      <FaStar size={16} className="text-warning" />
                    </li>
                  ))}
                  {hotel.rating % 1 !== 0 && (
                    <li className="list-inline-item me-1 mb-1 small">
                      <FaStarHalfAlt size={16} className="text-warning" />
                    </li>
                  )}
                  <li className="list-inline-item ms-3 h6 small fw-bold mb-0">
                    {hotel.rating}/5.0
                  </li>
                </ul>
              </CardBody>
            </Col>
          </Row>
        </Card>

        <Row className="g-4">
          <Col lg={4}>
            <div className="bg-light py-3 px-4 rounded-3">
              <h6 className="fw-light small mb-1">Check-in</h6>
              <h5 className="mb-1">{hotel.check_in_date}</h5>
              <small className="items-center">
                <BsAlarm className="me-1" />
                {hotel.check_in_time}
              </small>
            </div>
          </Col>

          <Col lg={4}>
            <div className="bg-light py-3 px-4 rounded-3">
              <h6 className="fw-light small mb-1">Check-out</h6>
              <h5 className="mb-1">{hotel.check_out_date}</h5>
              <small className="items-center">
                <BsAlarm className="me-1" />
                {hotel.check_out_time}
              </small>
            </div>
          </Col>

          <Col lg={4}>
            <div className="bg-light py-3 px-4 rounded-3">
              <h6 className="fw-light small mb-1">Rooms & Guests</h6>
              <h5 className="mb-1">
                {hotel.rooms}R, {hotel.adults}A, {hotel.children}C
              </h5>
              <small className="items-center">
                <BsBrightnessHigh className="me-1" />
                {hotel.nights} Nights, {hotel.days} Days
              </small>
            </div>
          </Col>
        </Row>

        <Row className="g-4 mt-2">
          <div className="py-3 px-4">{hotel.description}</div>
        </Row>

        <Card className="border mt-4">
          <CardHeader className="border-bottom d-md-flex justify-content-md-between">
            <h6 className="card-title mb-0">Amenities</h6>
          </CardHeader>
          <CardBody className="card-body">
            {amenitiesChunks.map((chunk, idx) => (
              <Row key={idx}>
                {chunk.map((item, subIdx) => (
                  <Col key={subIdx} md={6}>
                    <ul className="list-group list-group-borderless mt-2 mb-0">
                      <li className="list-group-item d-flex mb-0">
                        <FaCheckCircle className="text-success me-2" />
                        <span className="h6 fw-light mb-0">{item}</span>
                      </li>
                    </ul>
                  </Col>
                ))}
              </Row>
            ))}
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  );
};

export default HotelInformation;
