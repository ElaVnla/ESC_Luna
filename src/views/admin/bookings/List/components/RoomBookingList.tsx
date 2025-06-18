import { currency } from '@/states'
import { Card, CardBody, CardFooter, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { bookingLists } from '../data'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

const RoomBookingList = () => {
  return (
    <Card className="shadow">
      <CardBody>
        <div className="bg-light rounded p-3 d-none d-xxl-block">
          <Row className="row-cols-6 g-4">
            <Col>
              <h6 className="mb-0">Room Name</h6>
            </Col>
            <Col>
              <h6 className="mb-0">Bed Type</h6>
            </Col>
            <Col>
              <h6 className="mb-0">Room Floor</h6>
            </Col>
            <Col>
              <h6 className="mb-0">Amount</h6>
            </Col>
            <Col>
              <h6 className="mb-0">Rating</h6>
            </Col>
            <Col>
              <h6 className="mb-0">Action</h6>
            </Col>
          </Row>
        </div>

        {bookingLists.map((booking, idx) => {
          return (
            <Row
              key={idx}
              className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-6 g-2 g-sm-4 align-items-md-center border-bottom px-2 py-4"
            >
              <Col>
                <small className="d-block d-xxl-none">Room name:</small>
                <div className="d-flex align-items-center">
                  <div className="w-80px flex-shrink-0">
                    <Image src={booking.image} className="rounded" />
                  </div>
                  <h6 className="mb-0 ms-2">{booking.name}</h6>
                </div>
              </Col>
              <Col>
                <small className="d-block d-xxl-none">Bed Type:</small>
                <h6 className="mb-0 fw-normal">{booking.bed}</h6>
              </Col>
              <Col>
                <small className="d-block d-xxl-none">Room Floor:</small>
                <h6 className="mb-0 fw-normal">{booking.floor}</h6>
              </Col>
              <Col>
                <small className="d-block d-xxl-none">Amount:</small>
                <h6 className="text-success mb-0">
                  {currency}
                  {booking.price}
                </h6>
              </Col>
              <Col>
                <small className="d-block d-xxl-none">Payment:</small>
                <ul className="list-inline mb-0">
                  {Array.from(new Array(Math.floor(booking.rating))).map((_star, idx) => (
                    <li key={idx} className="list-inline-item me-1 small">
                      <FaStar size={16} className="text-warning" />
                    </li>
                  ))}
                  {!Number.isInteger(booking.rating) && (
                    <li className="list-inline-item me-1 small">
                      <FaStarHalfAlt size={15} className="text-warning" />
                    </li>
                  )}
                  {booking.rating < 5 &&
                    Array.from(new Array(5 - Math.ceil(booking.rating))).map((_val, idx) => (
                      <li key={idx} className="list-inline-item me-1 small">
                        <FaStar size={15} />
                      </li>
                    ))}
                </ul>
              </Col>
              <Col>
                <Link to="" className="btn btn-sm btn-light mb-0">
                  View
                </Link>
              </Col>
            </Row>
          )
        })}
      </CardBody>
      <CardFooter className="pt-0">
        <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
          <p className="mb-sm-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
          <nav className="mb-sm-0 d-flex justify-content-center" aria-label="navigation">
            <ul className="pagination pagination-sm pagination-primary-soft mb-0">
              <li className="page-item disabled">
                <Link className="page-link" to="" tabIndex={-1}>
                  Prev
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="">
                  1
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="">
                  2
                </Link>
              </li>
              <li className="page-item disabled">
                <Link className="page-link" to="">
                  ..
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="">
                  15
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </CardFooter>
    </Card>
  )
}

export default RoomBookingList
