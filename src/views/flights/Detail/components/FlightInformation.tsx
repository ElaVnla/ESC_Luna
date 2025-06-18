import { useToggle } from '@/hooks'
import { Button, Card, CardBody, CardFooter, CardHeader, Image, Modal, ModalBody, ModalHeader } from 'react-bootstrap'
import { BsArrowRight, BsEyeFill, BsStarFill } from 'react-icons/bs'
import { FaPlane } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { flightRoutes } from '../data'
import FlightRootDetails from './FlightRootDetails'

import element9 from '@/assets/images/element/09.svg'

const FlightInformation = () => {
  const { isOpen, toggle } = useToggle()

  return (
    <>
      <div className="d-flex align-items-center">
        <h1 className="display-4 mb-0 items-center">
          <FaPlane className="rtl-flip" size={81} />
        </h1>
        <div className="ms-3">
          <ul className="list-inline flex-wrap mb-2 items-center">
            <li className="list-inline-item me-2">
              <h3 className="mb-0">Mumbai(BOM)</h3>
            </li>
            <li className="list-inline-item me-2 ms-1">
              <h3 className="mb-0">
                <BsArrowRight className=" mb-1" />
              </h3>
            </li>
            <li className="list-inline-item me-0">
              <h3 className="mb-0 items-center">New York(JFK)</h3>
            </li>
          </ul>
          <ul className="nav nav-divider h6 fw-normal text-body mb-0">
            <li className="nav-item">25 Jan</li>
            <li className="nav-item">1 Stop</li>
            <li className="nav-item">05h 25m</li>
          </ul>
        </div>
      </div>
      <Card className="border">
        <CardHeader className="d-flex justify-content-between pb-0">
          <h6 className="fw-normal mb-0">
            <span className="text-body">Travel Class:</span> Economy
          </h6>
          <Button onClick={toggle} variant="link" href="" className="text-decoration-underline p-0 mb-0 items-center">
            <BsEyeFill className=" me-1" />
            Baggage &amp; Fare Rules
          </Button>
        </CardHeader>
        <CardBody className="p-4">
          {flightRoutes.map((route, idx) => {
            return (
              <FlightRootDetails
                key={idx}
                arrival={route.arrival}
                departure={route.departure}
                travelDuration={route.travelDuration}
                flightChange={route.flightChange}
              />
            )
          })}
        </CardBody>
      </Card>

      <Modal show={isOpen} onHide={toggle} size="lg" className="fade" id="baggageFare" aria-hidden="true">
        <ModalHeader className="modal-header">
          <h5 className="modal-title" id="baggageFarelabel">
            Baggage &amp; Fare Rules
          </h5>
          <button type="button" className="btn-close" onClick={toggle} />
        </ModalHeader>
        <ModalBody className="p-3">
          <Card className="border">
            <CardHeader className="border-bottom">
              <h5 className="card-title mb-0">
                <Image src={element9} className="h-80px" />
                BOM - CDG
              </h5>
            </CardHeader>
            <CardBody>
              <div className="table-responsive-lg">
                <table className="table table-bordered rounded caption-bottom overflow-hidden mb-0">
                  <thead className="table-dark border-light">
                    <tr>
                      <th scope="col">Baggage Type</th>
                      <th scope="col">Check In</th>
                      <th scope="col">Cabin</th>
                    </tr>
                  </thead>
                  <tbody className="border-top-0">
                    <tr>
                      <td>Adult</td>
                      <td>2 PC</td>
                      <td>7 Kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardBody>
            <CardFooter className="d-flex justify-content-between align-items-center pt-0 px-sm-4">
              <span>*1PC = 23KG</span>
              <Link to="" className="btn btn-sm btn-primary-soft mb-0">
                Add luggage
              </Link>
            </CardFooter>
          </Card>
          <div className="mt-4 px-2">
            <span className="badge bg-light text-success mb-2">
              <BsStarFill className="  me-2" />
              Travel Hack
            </span>
            <h5 className="mb-2">This itinerary includes a self-transfer</h5>
            <p className="mb-0">
              Please note, that it is the sole responsibility of the passenger to ensure his or her eligibility to enter the destination or transit
              countries (as applicable). We accept no liability in this regard. Please check the travel rules of all regulatory websites before to
              booking as well as commencing.
            </p>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default FlightInformation
