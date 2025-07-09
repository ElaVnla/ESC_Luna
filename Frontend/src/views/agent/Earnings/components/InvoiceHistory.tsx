import { SelectFormInput } from '@/components'
import { Card, CardBody, CardFooter, CardHeader, Col, Dropdown, DropdownMenu, DropdownToggle, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { BsCloudDownload, BsInfoCircleFill } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { invoiceHistory } from '../data'
import { currency } from '@/states'
import clsx from 'clsx'

const InvoiceHistory = () => {
  return (
    <Card className="border rounded-3">
      <CardHeader className="border-bottom">
        <h5 className="card-header-title">Invoice history</h5>
      </CardHeader>
      <CardBody>
        <Row className="g-3 align-items-center justify-content-between mb-3">
          <Col md={8}>
            <form className="rounded position-relative">
              <input className="form-control pe-5" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn border-0 px-3 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit">
                <FaSearch className=" fs-6" />
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
        <div className="table-responsive border-0">
          <table className="table align-middle p-4 mb-0 table-hover table-shrink">
            <thead className="table-light">
              <tr>
                <th scope="col" className="border-0 rounded-start">
                  Invoice ID
                </th>
                <th scope="col" className="border-0">
                  Date
                </th>
                <th scope="col" className="border-0">
                  Amount
                </th>
                <th scope="col" className="border-0">
                  Status
                </th>
                <th scope="col" className="border-0 rounded-end">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="border-top-0">
              {invoiceHistory.map((invoice, idx) => {
                return (
                  <tr key={idx}>
                    <td> #{invoice.id} </td>
                    <td> {invoice.date} </td>
                    <td>
                      <div className="items-center">
                        {currency}
                        {invoice.amount}
                        <Dropdown as="span" className="ms-1">
                          <DropdownToggle as={Link} to="" className="arrow-none h6 mb-0">
                            <BsInfoCircleFill />
                          </DropdownToggle>
                          <DropdownMenu align="end" className="dropdown-w-sm  min-w-auto shadow rounded" aria-labelledby="dropdownShare1">
                            <li>
                              <div className="d-flex justify-content-between">
                                <span className="small">Commission</span>
                                <span className="h6 mb-0 small">{currency}86</span>
                              </div>
                              <hr className="my-1" />
                            </li>
                            <li>
                              <div className="d-flex justify-content-between">
                                <span className="me-4 small">Us royalty withholding</span>
                                <span className="text-danger small">-{currency}0.00</span>
                              </div>
                              <hr className="my-1" />
                            </li>
                            <li>
                              <div className="d-flex justify-content-between">
                                <span className="small">Earning</span>
                                <span className="h6 mb-0 small">{currency}86</span>
                              </div>
                            </li>
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </td>
                    <td>
                      {' '}
                      <div
                        className={clsx(
                          'badge bg-opacity-10',
                          invoice.status == 'Cancelled'
                            ? 'bg-danger text-danger'
                            : invoice.status == 'Pending'
                              ? 'text-warning bg-warning'
                              : 'text-success bg-success',
                        )}
                      >
                        {invoice.status}
                      </div>{' '}
                    </td>
                    <td>
                      <OverlayTrigger overlay={<Tooltip>Download</Tooltip>}>
                        <Link to="" className="btn btn-light btn-round mb-0 flex-centered">
                          <BsCloudDownload />
                        </Link>
                      </OverlayTrigger>
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
  )
}

export default InvoiceHistory
