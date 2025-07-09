import { currency } from '@/states'
import { Card, CardBody, CardHeader, CardTitle, OverlayTrigger, Popover, PopoverBody } from 'react-bootstrap'
import { BsInfoCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const FareSummary = () => {
  return (
    <Card className="bg-light rounded-2">
      <CardHeader className="border-bottom bg-light">
        <CardTitle as="h5" className="card-title mb-0">
          Fare Summary
        </CardTitle>
      </CardHeader>
      <CardBody>
        <ul className="list-group list-group-borderless">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="h6 fw-normal mb-0">
              Base Fare
              <OverlayTrigger
                trigger="focus"
                placement="bottom"
                overlay={
                  <Popover>
                    <PopoverBody>COVID-19 test required Vaccinated travelers can visit</PopoverBody>
                  </Popover>
                }
              >
                <Link to="" tabIndex={0}>
                  <BsInfoCircle className="ms-1 bi bi-info-circle" />
                </Link>
              </OverlayTrigger>
            </span>
            <span className="fs-5">{currency}38,660</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="h6 fw-normal mb-0">Discount</span>
            <span className="fs-6 text-success">+{currency}2,560</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="h6 fw-normal mb-0">Other Services</span>
            <span className="fs-5">{currency}20</span>
          </li>
        </ul>
      </CardBody>
      <div className="card-footer border-top bg-light">
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 fw-normal mb-0">Total Fare</span>
          <span className="h5 fw-normal mb-0">{currency}36,500</span>
        </div>
      </div>
    </Card>
  )
}

export default FareSummary
