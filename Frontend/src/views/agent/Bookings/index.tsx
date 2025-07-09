import { PageMetaData, SelectFormInput } from '@/components'
import { Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from 'react-bootstrap'
import { bookings } from './data'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { BsBookmarkHeart } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'

const Bookings = () => {
  return (
    <>
      <PageMetaData title="Agent Bookings" />
      <section className="pt-0">
        <Container className="vstack gap-4">
          <Row>
            <Col xs={12}>
              <h1 className="fs-4 mb-0 items-center gap-1">
                <BsBookmarkHeart className=" fa-fw me-1" />
                Bookings
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Card className="border">
                <CardHeader className="border-bottom">
                  <h5 className="card-header-title">
                    Bookings<span className="badge bg-primary bg-opacity-10 text-primary ms-2">20 Rooms</span>
                  </h5>
                </CardHeader>
                <CardBody>
                  <div className="row g-3 align-items-center justify-content-between mb-3">
                    <div className="col-md-8">
                      <form className="rounded position-relative">
                        <input className="form-control pe-5" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn border-0 px-3 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit">
                          <FaSearch className="mb-1" />
                        </button>
                      </form>
                    </div>
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
                  </div>
                  <div className="table-responsive border-0">
                    <table className="table align-middle p-4 mb-0 table-hover table-shrink">
                      <thead className="table-light">
                        <tr>
                          <th scope="col" className="border-0 rounded-start">
                            #
                          </th>
                          <th scope="col" className="border-0">
                            Name
                          </th>
                          <th scope="col" className="border-0">
                            Type
                          </th>
                          <th scope="col" className="border-0">
                            Date
                          </th>
                          <th scope="col" className="border-0">
                            Status
                          </th>
                          <th scope="col" className="border-0">
                            Payment
                          </th>
                          <th scope="col" className="border-0 rounded-end">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="border-top-0">
                        {bookings.map((booking, idx) => {
                          return (
                            <tr key={idx}>
                              <td>
                                {' '}
                                <h6 className="mb-0">{booking.id}</h6>{' '}
                              </td>
                              <td>
                                {' '}
                                <h6 className="mb-0">
                                  <Link to="">{booking.name}</Link>
                                </h6>{' '}
                              </td>
                              <td> {booking.type} </td>
                              <td>
                                {' '}
                                <h6 className="mb-0 fw-light">{booking.date}</h6>{' '}
                              </td>
                              <td>
                                {' '}
                                <div
                                  className={clsx(
                                    'badge',
                                    booking.status == 'Cancel'
                                      ? 'bg-danger'
                                      : booking.status == 'Available'
                                        ? 'bg-warning'
                                        : booking.status == 'Reserved'
                                          ? 'bg-info'
                                          : 'bg-success',
                                  )}
                                >
                                  {booking.status}
                                </div>{' '}
                              </td>
                              <td>
                                {' '}
                                <div
                                  className={clsx(
                                    'badge bg-opacity-10',
                                    booking.payment == 'On Property'
                                      ? 'bg-warning text-warning'
                                      : booking.payment == 'Half Payment'
                                        ? 'bg-info text-info'
                                        : 'bg-success text-success',
                                  )}
                                >
                                  {booking.payment}
                                </div>{' '}
                              </td>
                              <td>
                                {' '}
                                <Link to="" className="btn btn-sm btn-light mb-0">
                                  View
                                </Link>{' '}
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
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
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Bookings
