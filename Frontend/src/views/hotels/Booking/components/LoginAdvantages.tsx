import { Card, CardBody, CardHeader } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'

const LoginAdvantages = () => {
  return (
    <Card className="shadow">
      <CardHeader className="border-bottom">
        <h5 className="card-title mb-0">Why Sign up or Log in</h5>
      </CardHeader>
      <CardBody>
        <ul className="list-group list-group-borderless">
          <li className="list-group-item d-flex mb-0 items-center">
            <FaCheck className="text-success me-2" />
            <span className="h6 fw-normal mb-0">Get Access to Secret Deal</span>
          </li>
          <li className="list-group-item d-flex mb-0 items-center">
            <FaCheck className="text-success me-2" />
            <span className="h6 fw-normal mb-0">Book Faster</span>
          </li>
          <li className="list-group-item d-flex mb-0 items-center">
            <FaCheck className="text-success me-2" />
            <span className="h6 fw-normal mb-0">Manage Your Booking</span>
          </li>
        </ul>
      </CardBody>
    </Card>
  )
}

export default LoginAdvantages
