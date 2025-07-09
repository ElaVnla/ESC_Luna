import { Card, CardBody, CardHeader } from 'react-bootstrap'
import { BsDot } from 'react-icons/bs'

const CancellationBooking = () => {
  const dotIcon = <BsDot />

  return (
    <Card className="border">
      <CardHeader className="border-bottom">
        <h5 className="mb-0">Cancellation &amp; Date change</h5>
      </CardHeader>
      <CardBody>
        <ul className="list-group list-group-borderless">
          <li className="list-group-item items-center">
            <span className="h6 fw-normal me-1 mb-0">{dotIcon}10 days:&nbsp;</span>
            <span>100%</span>
          </li>
          <li className="list-group-item items-center">
            <span className="h6 fw-normal me-1 mb-0">{dotIcon}10 to 15 days:&nbsp;</span>
            <span>75% + Non Refundable Component</span>
          </li>
          <li className="list-group-item items-center">
            <span className="h6 fw-normal me-1 mb-0">{dotIcon}15 to 30 days:&nbsp;</span>
            <span>30% + Non Refundable Component</span>
          </li>
          <li className="list-group-item items-center">
            <span className="h6 fw-normal me-1 mb-0">{dotIcon}10Hotel / Air:&nbsp;</span>
            <span>100% in case of non-refundable ticket / Hotel Room</span>
          </li>
          <li className="list-group-item items-center">
            <span className="h6 fw-normal me-1 mb-0">{dotIcon}10Cruise / Visa:&nbsp;</span>
            <span>On Actuals</span>
          </li>
        </ul>
        <p className="mt-2">
          All Prices are in Indian Rupees and are subject to change without prior notice.
          <br />
          In the case FIT flight inclusive package, the full amount of the flight will be payable at the time of booking.
        </p>
      </CardBody>
    </Card>
  )
}

export default CancellationBooking
