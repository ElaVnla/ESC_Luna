import { Alert } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'

const CabsAlert = () => {
  return (
    <Alert variant="warning" className="border-warning rounded-3 mb-0" role="alert">
      <h5>Why book a one-way trip with us?</h5>
      <ul className="list-group list-group-borderless mb-0">
        <li className="list-group-item d-flex text-body mb-0 align-items-center">
          <FaCheck className="text-warning me-2" />
          Only one-side fare for your doorstep pickup &amp; drop to destination.
        </li>
        <li className="list-group-item d-flex text-body mb-0 align-items-center">
          <FaCheck className="text-warning me-2" />
          No hidden charges - Pay nothing extra than what's mentioned.
        </li>
        <li className="list-group-item d-flex text-body mb-0 align-items-center">
          <FaCheck className="text-warning me-2" />
          Experienced &amp; polite drivers with clean &amp; comfortable cabs.
        </li>
      </ul>
    </Alert>
  )
}

export default CabsAlert
