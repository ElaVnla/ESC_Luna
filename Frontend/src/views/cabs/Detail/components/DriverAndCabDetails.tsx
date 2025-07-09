import { Alert, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { BsArrowRight, BsXLg } from 'react-icons/bs'
import { FaCheck } from 'react-icons/fa'
import CabSlider from './CabSlider'
import { currency } from '@/states'

const DriverAndCabDetails = () => {
  return (
    <>
      <Card className="bg-transparent">
        <CardHeader className="border-bottom bg-transparent px-0 pt-0">
          <h4 className="mb-0">Driver and Cab details</h4>
        </CardHeader>
        <CardBody className="pt-4 p-0">
          <ul>
            <li className="mb-2">Cab and driver details will be shared on your registered phone. (22 Jan 2021 at 6:55 pm) </li>
            <li className="mb-2">Due to traffic or any other unavoidable reason, the pickup may be delayed for 30 minutes.</li>
            <li>For nighttime driving (between 11:00 pm to 7:00 am) on any of the nights, there will be a night driver charge of {currency}100.</li>
          </ul>
          <h5>Cab Images</h5>
          <Alert variant="warning">
            All pictures shown are for illustration purposes only. The actual product may vary due to product enhancement.
          </Alert>
          <Row>
            <CabSlider />
          </Row>
        </CardBody>
      </Card>

      <Card className="bg-transparent">
        <CardHeader className="border-bottom bg-transparent px-0 pt-0">
          <h4 className="mb-0">Inclusion &amp; Exclusion</h4>
        </CardHeader>
        <CardBody className="pt-4 p-0">
          <Row className="g-3">
            <Col sm={6}>
              <h5>Included in your price</h5>
              <ul className="list-group list-group-borderless mb-0">
                <li className="list-group-item mb-0 pb-0 items-center">
                  <FaCheck className="text-success me-1" />
                  State tax
                </li>
                <li className="list-group-item mb-0 pb-0 items-center">
                  <FaCheck className="text-success me-1" />
                  Toll charge
                </li>
                <li className="list-group-item mb-0 pb-0 items-center">
                  <FaCheck className="text-success me-1" />
                  Driver Allowance
                </li>
                <li className="list-group-item mb-0 pb-0 items-center">
                  <FaCheck className="text-success me-1" />
                  Only one pickup and drop
                </li>
              </ul>
            </Col>
            <div className="col-sm-6">
              <h5>Extra charge</h5>
              <ul className="list-group list-group-borderless mb-0">
                <li className="list-group-item mb-0 pb-0 items-center">
                  <BsXLg className=" text-danger me-1" />
                  Fare beyond 600kms
                </li>
                <li className="list-group-item mb-0 pb-0 items-center">
                  <BsXLg className=" text-danger me-1" />
                  Airport entry charge
                </li>
              </ul>
            </div>
          </Row>
        </CardBody>
      </Card>
      <Card className="bg-transparent">
        <CardHeader className="border-bottom bg-transparent px-0 pt-0">
          <h4 className="mb-0">Safety Guidelines</h4>
        </CardHeader>
        <CardBody className="pt-4 p-0">
          <ListGroup className="list-group-borderless mb-0">
            <ListGroupItem className="h6 fw-light mb-0 d-flex align-items-start">
              <div>
                <BsArrowRight size={20} className=" me-2" />
              </div>
              All passengers coming to the state by road must show a COVID negative report (RT-PCR) not more than 72 hours old or a valid vaccination
              certificate. (Travel period should commence after 14 days from the 2nd dose)
            </ListGroupItem>
            <ListGroupItem className="h6 fw-light mb-0 d-flex align-items-start">
              <div>
                <BsArrowRight size={20} className=" me-2" />
              </div>
              Dependent on so extremely delivered by. Yet no jokes worse her why. Bed one supposing breakfast day fulfilled off depending questions.
            </ListGroupItem>
            <ListGroupItem className="h6 fw-light mb-0 d-flex align-items-start">
              <div>
                <BsArrowRight size={20} className=" me-2" />
              </div>
              Whatever boy her exertion his extended. Ecstatic followed handsome drawings entirely Mrs one yet outweigh.
            </ListGroupItem>
            <ListGroupItem className="h6 fw-light mb-0 d-flex align-items-start">
              <div>
                <BsArrowRight size={20} className=" me-2" />
              </div>
              Meant balls it if up doubt small purse. Required his you put the outlived answered position. A pleasure exertion if believed provided
              to.
            </ListGroupItem>
            <ListGroupItem className="h6 fw-light mb-0 d-flex align-items-start">
              <div>
                <BsArrowRight size={20} className=" me-2" />
              </div>
              All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in.
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </>
  )
}

export default DriverAndCabDetails
