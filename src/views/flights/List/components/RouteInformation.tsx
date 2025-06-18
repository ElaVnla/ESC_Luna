import { Col } from 'react-bootstrap'
import { FaPlane } from 'react-icons/fa'

type RootInfoType = {
  departureTime: string
  arrivalTime: string
  travelDuration: string
  from: string
  to: string
  date?: string
}

const RouteInformation = ({ arrivalTime, departureTime, from, to, travelDuration, date }: RootInfoType) => {
  return (
    <>
      <Col sm={4} md={date ? 4 : 3}>
        <h4>{departureTime}</h4>

        {date && <h6 className="mb-0 fw-normal">{date}</h6>}

        <p className="mb-0">{from}</p>
      </Col>
      <Col sm={4} md={date ? 4 : 3} className="my-sm-auto text-center">
        <h5>{travelDuration}</h5>
        <div className="position-relative my-4">
          <hr className="bg-primary opacity-5 position-relative" />
          <div className="icon-md bg-primary text-white rounded-circle position-absolute top-50 start-50 translate-middle flex-centered">
            <FaPlane size={14} className="fa-fw rtl-flip" />
          </div>
        </div>
      </Col>
      <Col sm={4} md={date ? 4 : 3}>
        <h4>{arrivalTime}</h4>

        {date && <h6 className="mb-0 fw-normal">{date}</h6>}

        <p className="mb-0">{to}</p>
      </Col>
    </>
  )
}

export default RouteInformation
