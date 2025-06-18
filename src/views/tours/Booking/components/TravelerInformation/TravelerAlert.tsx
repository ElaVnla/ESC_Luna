import { Alert } from 'react-bootstrap'
import { BsExclamationOctagonFill } from 'react-icons/bs'

const TravelerAlert = () => {
  return (
    <Alert variant="warning" className="d-flex" role="alert">
      <span className="alert-heading h5 mb-0 me-2 d-flex align-items-start">
        <BsExclamationOctagonFill />
      </span>
      A customer passport is mandatory. The passport must have 2 blank pages and 6-month validity.
    </Alert>
  )
}

export default TravelerAlert
