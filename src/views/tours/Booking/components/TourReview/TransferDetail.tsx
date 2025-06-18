import { Card, CardBody, CardHeader } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TransferDetail = () => {
  return (
    <Card className="border">
      <CardHeader className="border-bottom d-flex justify-content-between">
        <h5 className="mb-0">Transfer Details</h5>
        <Link to="" className="btn btn-link p-0 mb-0 text-primary-hover text-reset text-decoration-underline">
          View details
        </Link>
      </CardHeader>
      <CardBody>
        <div className="d-flex gap-1 justify-content-between flex-wrap">
          <h6 className="mb-0">Private Transfer</h6>
          <p className="mb-0">
            Vehicle type: <span className="h6 fw-light">Sedan - AC</span>
          </p>
          <h6 className="mb-0 fw-normal">12 April 2022</h6>
        </div>
      </CardBody>
    </Card>
  )
}

export default TransferDetail
