import { currency } from '@/states'
import { Card, CardBody, CardFooter, CardHeader, Col, Dropdown, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'
import { BsCloudDownload, BsInfoCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { paymentHistory } from '../data'
import clsx from 'clsx'

const PaymentHistory = () => {
  return (
    <Card className="shadow mt-5">
      <CardHeader className="border-bottom">
        <h5 className="card-title mb-0">Payment History</h5>
      </CardHeader>
      <CardBody>
        <div className="bg-light rounded p-3 d-none d-sm-block">
          <Row className="row-cols-7 g-4">
            <div className="col">
              <h6 className="mb-0">Invoice ID</h6>
            </div>
            <div className="col">
              <h6 className="mb-0">Date</h6>
            </div>
            <div className="col">
              <h6 className="mb-0">Amount</h6>
            </div>
            <div className="col">
              <h6 className="mb-0">Status</h6>
            </div>
            <div className="col">
              <h6 className="mb-0">Action</h6>
            </div>
          </Row>
        </div>

        {paymentHistory.map((payment, idx) => {
          return (
            <Row key={idx} className="row-cols-xl-7 g-4 align-items-sm-center border-bottom px-2 py-4">
              <Col>
                <small className="d-block d-sm-none">Booked by:</small>
                <h6 className="fw-light mb-0">#{payment.id}</h6>
              </Col>
              <Col>
                <small className="d-block d-sm-none">Date:</small>
                <h6 className="mb-0 fw-normal">{payment.date}</h6>
              </Col>
              <Col className="position-relative">
                <small className="d-block d-sm-none">Amount:</small>
                <div className="d-flex align-items-center">
                  <h6 className="mb-0 me-1">
                    {currency}
                    {payment.amount}
                  </h6>
                  <Dropdown>
                    <DropdownToggle as={Link} to="" className="h6 mb-1 arrow-none" role="button">
                      <BsInfoCircleFill className="mb-1" />
                    </DropdownToggle>
                    <DropdownMenu align="end" className="dropdown-w-sm min-w-auto shadow rounded" aria-labelledby="dropdownShare1">
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="small">Commission</span>
                          <span className="h6 mb-0 small ms-2">{currency}86</span>
                        </div>
                        <hr className="my-1" />
                      </li>
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="me-4 small">Tax</span>
                          <span className="text-danger small ms-2">-{currency}0.00</span>
                        </div>
                        <hr className="my-1" />
                      </li>
                      <li>
                        <div className="d-flex justify-content-between">
                          <span className="small">Earning</span>
                          <span className="h6 mb-0 small ms-2">{currency}86</span>
                        </div>
                      </li>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </Col>
              <Col>
                <small className="d-block d-sm-none">Status:</small>
                <div
                  className={clsx(
                    'badge bg-opacity-10',
                    payment.status == 'Cancelled'
                      ? 'text-danger bg-danger'
                      : payment.status == 'Pending'
                        ? 'text-warning bg-warning'
                        : 'text-success bg-success',
                  )}
                >
                  {payment.status}
                </div>
              </Col>
              <Col>
                <Link to="" className="btn btn-light btn-round mb-0 flex-centered">
                  <BsCloudDownload />
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

export default PaymentHistory
