import { currency } from '@/states'
import { Button, Card, CardBody, CardHeader } from 'react-bootstrap'

const YourOrder = () => {
  return (
    <Card className="shadow mb-4">
      <CardHeader className="border-bottom">
        <h5 className="mb-0">Your Order</h5>
      </CardHeader>
      <CardBody>
        <ul className="list-group list-group-borderless mb-3">
          <li className="list-group-item d-flex justify-content-between py-2">
            <span className="h6 fw-light mb-0">Monsoon Offer</span>
            <span className="h6 fw-light mb-0">{currency}260 (x1)</span>
          </li>
          <li className="list-group-item d-flex justify-content-between py-2">
            <span className="h6 fw-light mb-0">Monsoon Offer:global</span>
            <span className="h6 fw-light mb-0">{currency}50</span>
          </li>
          <li className="list-group-item py-2">
            <hr className="my-0" />
          </li>
          <li className="list-group-item d-flex justify-content-between pb-0">
            <div>
              <h5 className="fw-normal mb-0">Total</h5>
              <small>Inc. of all taxes</small>
            </div>
            <span className="h5 fw-normal mb-0">{currency}310</span>
          </li>
        </ul>
        <Button variant="primary-soft" className="w-100 mb-0">
          Buy now
        </Button>
      </CardBody>
    </Card>
  )
}

export default YourOrder
