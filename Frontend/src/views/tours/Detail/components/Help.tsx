import { Card } from 'react-bootstrap'
import { BsAlarm, BsCalendarCheck, BsHeadset, BsTelephoneForward } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Help = () => {
  return (
    <Card className="card-body bg-light p-4">
      <h4 className="card-title">Need Help?</h4>
      <ul className="list-group list-group-borderless">
        <li className="list-group-item py-3">
          <a href="tel:000" className="h6 mb-0">
            <BsTelephoneForward className=" fa-fw text-primary fs-5 me-2" />
            <span className="fw-light me-1">Call us on:</span>+31 123 456 789
          </a>
        </li>
        <li className="list-group-item py-0">
          <hr className="my-0" />
        </li>
        <li className="list-group-item py-3">
          <h6 className="mb-0">
            <BsAlarm className=" fa-fw text-primary fs-5 me-2" />
            <span className="h6 fw-light me-1 mb-0">Timing:</span>10AM to 7PM
          </h6>
        </li>
        <li className="list-group-item py-0">
          <hr className="my-0" />
        </li>
        <li className="list-group-item py-3">
          <Link to="" className="h6 mb-0">
            <BsHeadset className=" fa-fw  text-primary fs-5 me-2" />
            Let Us Call You
          </Link>
        </li>
        <li className="list-group-item py-0">
          <hr className="my-0" />
        </li>
        <li className="list-group-item pt-3 pb-0">
          <Link to="/contact" className="h6 mb-0">
            <BsCalendarCheck className=" fa-fw text-primary fs-5 me-2" />
            Book Appointments
          </Link>
        </li>
      </ul>
    </Card>
  )
}

export default Help
