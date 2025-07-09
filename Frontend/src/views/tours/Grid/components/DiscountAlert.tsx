import { Alert } from 'react-bootstrap'
import { BsExclamationOctagonFill } from 'react-icons/bs'

const DiscountAlert = () => {
  return (
    <Alert variant="danger" className="d-flex align-items-center mt-5 rounded-3 mb-0" role="alert">
      <span className="h4 mb-0 alert-heading">
        <BsExclamationOctagonFill className=" me-2" />{' '}
      </span>
      <div className="ms-3">
        <h6 className="mb-0 alert-heading">Hurry! 51% off the tours are already fully booked</h6>
        <p className="mb-0">Many trips to various areas have been ordered, don't let you miss it</p>
      </div>
    </Alert>
  )
}

export default DiscountAlert
