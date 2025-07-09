import { PageMetaData, SelectFormInput } from '@/components'
import { Card, CardBody, CardFooter, Col, Image, Nav, NavItem, NavLink, Row } from 'react-bootstrap'
import { BsFiletypePdf } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { guestsList } from './data'

const GuestsList = () => {
  return (
    <>
      <PageMetaData title="Guest List" />

      <Row>
        <Col xs={12} className="mb-4 mb-sm-5">
          <div className="d-sm-flex justify-content-between align-items-center">
            <h1 className="h3 mb-3 mb-sm-0">Guest List</h1>
            <div className="d-grid">
              <Link to="" className="btn btn-primary mb-0 items-center">
                <BsFiletypePdf className="me-2" />
                Generate Report
              </Link>{' '}
            </div>
          </div>
        </Col>
      </Row>
      <Row className="g-4 align-items-center">
        <Col lg={6}>
          <Nav defaultActiveKey="1" className="nav nav-pills-shadow nav-responsive">
            <NavItem>
              <NavLink eventKey="1" className="mb-0">
                All Guests
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="2" className="mb-0">
                Booked
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="3" className="mb-0">
                Canceled
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="4" className="mb-0">
                Pending
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col md={6} lg={3}>
          <form className="rounded position-relative">
            <input className="form-control bg-transparent" type="search" placeholder="Search" aria-label="Search" />
            <button
              className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
              type="submit"
            >
              <FaSearch className="mb-1" />
            </button>
          </form>
        </Col>
        <Col md={6} lg={3}>
          <form>
            <SelectFormInput className="form-select js-choice" aria-label=".form-select-sm">
              <option value={-1}>Sort by hotels</option>
              <option>Pride moon Village Resort &amp; Spa</option>
              <option>Courtyard by Marriott New York</option>
              <option>Park Plaza Lodge Hotel</option>
              <option>Royal Beach Resort</option>
            </SelectFormInput>
          </form>
        </Col>
      </Row>
      <Card className="shadow mt-5">
        <CardBody>
          <div className="bg-light rounded p-3 d-none d-lg-block">
            <div className="row row-cols-7 g-4">
              <div className="col">
                <h6 className="mb-0">Guest</h6>
              </div>
              <div className="col">
                <h6 className="mb-0">Booking Date</h6>
              </div>
              <div className="col">
                <h6 className="mb-0">Check-In</h6>
              </div>
              <div className="col">
                <h6 className="mb-0">Check-Out</h6>
              </div>
              <div className="col">
                <h6 className="mb-0">Room No</h6>
              </div>
              <div className="col">
                <h6 className="mb-0">Status</h6>
              </div>
              <div className="col">
                <h6 className="mb-0">Action</h6>
              </div>
            </div>
          </div>

          {guestsList.map((guest, idx) => {
            return (
              <Row key={idx} className="row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
                <Col>
                  <small className="d-block d-lg-none">Booked by:</small>
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-xs flex-shrink-0">
                      <Image className="avatar-img rounded-circle" src={guest.image} alt="avatar" />
                    </div>
                    <div className="ms-2">
                      <h6 className="mb-0 fw-light">{guest.name}</h6>
                    </div>
                  </div>
                </Col>
                <Col>
                  <small className="d-block d-lg-none">Booking date:</small>
                  <h6 className="mb-0 fw-normal">{guest.date}</h6>
                </Col>
                <Col>
                  <small className="d-block d-lg-none">Check-in:</small>
                  <h6 className="mb-0 fw-normal">{guest.checkIn}</h6>
                </Col>
                <Col>
                  <small className="d-block d-lg-none">Check-out:</small>
                  <h6 className="mb-0 fw-normal">{guest.checkOut}</h6>
                </Col>
                <Col>
                  <small className="d-block d-lg-none">Room no:</small>
                  <h6 className="mb-0 fw-normal">{guest.roomNo}</h6>
                </Col>
                <Col>
                  <small className="d-block d-lg-none">Payment:</small>

                  {guest.status === 'Booked' ? (
                    <div className="badge bg-success bg-opacity-10 text-success">Booked</div>
                  ) : guest.status === 'Pending' ? (
                    <div className="badge bg-orange bg-opacity-10 text-orange">Pending</div>
                  ) : (
                    <div className="badge bg-danger bg-opacity-10 text-danger">Canceled</div>
                  )}

                </Col>
                <Col>
                  <Link to="/admin/guests/detail" className="btn btn-sm btn-light mb-0">
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
    </>
  )
}

export default GuestsList
