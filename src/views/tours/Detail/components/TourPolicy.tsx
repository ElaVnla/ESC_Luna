import { Card, CardBody, CardHeader } from 'react-bootstrap'
import { BsDot } from 'react-icons/bs'

const TourPolicy = () => {
  const dotIcon = <BsDot />
  return (
    <Card className="bg-transparent p-0">
      <CardHeader className="bg-transparent border-bottom p-0 pb-3">
        <h3 className="mb-0">Tour Policy</h3>
      </CardHeader>
      <CardBody className="p-0 pt-3">
        <h5>Confirmation Policy:</h5>
        <p className="mb-2">The customer receives a confirmation voucher via email within 24 hours of successful booking.</p>
        <p className="mb-2">
          In case the preferred slots are unavailable, an alternate schedule of the customer’s preference will be arranged and a new confirmation
          voucher will be sent via email.
        </p>
        <p className="mb-0">
          Alternatively, the customer may choose to cancel their booking before confirmation and a full refund will be processed.
        </p>
        <h5 className="mt-4">Cancellation Policy:</h5>
        <ul className="list-group list-group-borderless">
          <li className="list-group-item">
            <span className="h6 fw-normal me-1 mb-0">{dotIcon}10 days: </span>
            <span>100%</span>
          </li>
          <li className="list-group-item">
            <span className="h6 fw-normal me-1 mb-0">{dotIcon}10 to 15 days: </span>
            <span>75% + Non Refundable Component</span>
          </li>
          <li className="list-group-item">
            <span className="h6 fw-normal me-1 mb-0">{dotIcon}15 to 30 days: </span>
            <span>30% + Non Refundable Component</span>
          </li>
          <li className="list-group-item">
            <span className="h6 fw-normal me-1 mb-0">{dotIcon}10Hotel / Air: </span>
            <span>100% in case of non-refundable ticket / Hotel Room</span>
          </li>
          <li className="list-group-item">
            <span className="h6 fw-normal me-1 mb-0">{dotIcon}10Cruise / Visa: </span>
            <span>On Actuals</span>
          </li>
        </ul>
        <p className="mt-2">
          All Prices are in Indian Rupees and subject to change without prior notice.
          <br />
          In the case FIT flight inclusive package, the full amount of the flight will be payable at the time of booking.
        </p>
        <h5 className="mt-4">Refund Policy:</h5>
        <p className="mb-2">The applicable refund amount will be processed within 10 business days.</p>
        <p className="mb-0">All applicable refunds will be done in the traveler's Thrillophilia wallet as Thrillcash.</p>
      </CardBody>
    </Card>
  )
}

export default TourPolicy
