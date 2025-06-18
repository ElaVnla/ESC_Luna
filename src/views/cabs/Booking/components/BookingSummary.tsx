import sedan from '@/assets/images/category/cab/seadan.svg'
import { currency } from '@/states'
import { Card, CardBody, CardHeader, CardTitle, Col, Image, Row } from 'react-bootstrap'

const BookingSummary = () => {
  return (
    <Card className="shadow">
      <CardHeader className="border-bottom p-4">
        <h1 className="mb-0 fs-3">Booking summary</h1>
      </CardHeader>
      <CardBody className="p-4">
        <Row className="g-md-4">
          <Col md={3}>
            <div className="bg-light rounded-3 px-4 py-5 mb-3 mb-md-0">
              <Image src={sedan} />
            </div>
          </Col>
          <Col md={9}>
            <CardTitle as="h5" className="mb-2">
              Camry, Accord
            </CardTitle>
            <ul className="nav nav-divider h6 fw-normal mb-2">
              <li className="nav-item">SEDAN</li>
              <li className="nav-item">AC</li>
              <li className="nav-item">2 Seats</li>
            </ul>
            <Row>
              <Col md={6}>
                <small>Pickup address</small>
                <p className="h6 fw-light mb-md-0">8 Central Ave, Chelsea, Maine, United States</p>
              </Col>
              <Col md={6}>
                <small>Drop address</small>
                <p className="h6 fw-light mb-0">1846 S Oates St, Dothan, Alaska, United States</p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <ul className="list-group list-group-borderless">
              <li className="list-group-item">
                Journey Date:<span className="h6 fw-normal mb-0 ms-1">25 Nov 2022</span>
              </li>
              <li className="list-group-item">
                Distance:<span className="h6 fw-normal mb-0 ms-1">230 km</span>
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <ul className="list-group list-group-borderless">
              <li className="list-group-item">
                Passengers:<span className="h6 fw-normal mb-0 ms-1">1</span>
              </li>
              <li className="list-group-item">
                Luggages:<span className="h6 fw-normal mb-0 ms-1">2</span>
              </li>
            </ul>
          </Col>
        </Row>
        <h6 className="mb-0 mt-3">Passenger Detail</h6>
        <Row>
          <Col sm={8}>
            <ul className="list-group list-group-borderless mb-0">
              <li className="list-group-item">
                Passenger Name:<span className="h6 mb-0 fw-normal ms-1">Billy Vasquez</span>
              </li>
              <li className="list-group-item">
                Passenger Email:<span className="h6 mb-0 fw-normal ms-1">example@gmail.com</span>
              </li>
              <li className="list-group-item">
                Passenger Number:<span className="h6 mb-0 fw-normal ms-1">+222 555 666 85</span>
              </li>
            </ul>
          </Col>
          <Col sm={4} className="text-sm-end mt-3 mt-sm-auto">
            <h6 className="mb-1 fw-normal">Total Amount</h6>
            <h2 className="mb-0 text-success">{currency}458</h2>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default BookingSummary
