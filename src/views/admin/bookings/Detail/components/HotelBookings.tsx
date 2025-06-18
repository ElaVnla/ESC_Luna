import { SelectFormInput } from '@/components'
import { currency } from '@/states'
import { Card, CardBody, CardFooter, CardHeader, Col, Image, Row } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { bookingDetailList } from '../data'
import { Fragment } from 'react'
import clsx from 'clsx'

const HotelBookings = () => {
  return (
    <Card className="shadow mt-5">
      <CardHeader className="border-bottom">
        <h5 className="card-header-title">Bookings</h5>
      </CardHeader>
      <CardBody>
        <Row className="g-3 align-items-center justify-content-between mb-3">
          <Col md={8}>
            <form className="rounded position-relative">
              <input className="form-control pe-5" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn border-0 px-3 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit">
                <FaSearch />
              </button>
            </form>
          </Col>
          <Col md={3}>
            <form>
              <SelectFormInput className="form-select js-choice" aria-label=".form-select-sm">
                <option value={-1}>Sort by</option>
                <option>Free</option>
                <option>Newest</option>
                <option>Oldest</option>
              </SelectFormInput>
            </form>
          </Col>
        </Row>
        <div className="bg-light rounded p-3 d-none d-lg-block">
          <Row className="row-cols-7 g-4">
            <Col>
              <h6 className="mb-0">Booked by</h6>
            </Col>
            <Col>
              <h6 className="mb-0">Check-in</h6>
            </Col>
            <Col>
              <h6 className="mb-0">Check-out</h6>
            </Col>
            <Col>
              <h6 className="mb-0">Guest</h6>
            </Col>
            <Col>
              <h6 className="mb-0">Amount</h6>
            </Col>
            <Col>
              <h6 className="mb-0">Payment</h6>
            </Col>
            <Col>
              <h6 className="mb-0">Action</h6>
            </Col>
          </Row>
        </div>

        {bookingDetailList.map((item, idx) => {
          return (
            <Fragment key={idx}>
              <Row className="row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
                <Col>
                  <small className="d-block d-lg-none">Booked by:</small>
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-xs flex-shrink-0">
                      <Image className="avatar-img rounded-circle" src={item.image} alt="avatar" />
                    </div>
                    <div className="ms-2">
                      <h6 className="mb-0 fw-light">{item.name}</h6>
                    </div>
                  </div>
                </Col>
                <Col>
                  <small className="d-block d-lg-none">Check-in:</small>
                  <h6 className="mb-0 fw-normal">{item.checkIn}</h6>
                </Col>
                <Col>
                  <small className="d-block d-lg-none">Check-out:</small>
                  <h6 className="mb-0 fw-normal">{item.checkOut}</h6>
                </Col>
                <Col>
                  <small className="d-block d-lg-none">Guests:</small>
                  <h6 className="mb-0 fw-normal">{item.guest}</h6>
                </Col>
                <Col>
                  <small className="d-block d-lg-none">Amount:</small>
                  <h6 className="text-success mb-0">
                    {currency}
                    {item.amount}
                  </h6>
                </Col>
                <Col>
                  <small className="d-block d-lg-none">Payment:</small>
                  <div
                    className={clsx(
                      'badge bg-opacity-10',
                      item.payment == 'Half payment'
                        ? 'bg-info text-info'
                        : item.payment == 'On Property'
                          ? 'text-warning bg-warning'
                          : 'text-success bg-success',
                    )}
                  >
                    {item.payment}
                  </div>
                </Col>
                <Col>
                  <Link to="" className="btn btn-sm btn-light mb-0">
                    View
                  </Link>
                </Col>
              </Row>
              {idx == 1 && (
                <Row className="row-cols-xl-7 align-items-lg-center border-bottom g-4">
                  <div className="bg-light px-2 py-4 text-center">
                    <h6 className="mb-0">Booking Available (27 Dec to 1 Jan)</h6>
                  </div>
                </Row>
              )}
            </Fragment>
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

export default HotelBookings
