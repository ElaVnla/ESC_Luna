import { Wizard, useWizard } from 'react-use-wizard'
import HotelInformation from './HotelInformation'
import { CheckFormInput, DropzoneFormInput, FileFormInput, SelectFormInput, TextAreaFormInput, TextFormInput } from '@/components'
import { Button, Card, CardBody, CardHeader, Col, Row, Container} from 'react-bootstrap'
import type { Step1Props } from '../types'
import RoomInformation from './RoomInformation'
import CancellationPolicy from './CancellationPolicy'
import SpecialRequest from './SpecialRequest'


const Step1 = ({ control, hotelData, roomData }: Step1Props) => {

  const { nextStep } = useWizard()

  console.log("IN STEP 1 ROOM DETAILS: ", roomData);

  return (
    <div className="vstack gap-4">
      <Row className="g-4">
            <Col xl={7}>
            <div className="vstack gap-3">
              <HotelInformation hotelData={hotelData} roomData={roomData}/>
            <SpecialRequest />
            </div>
          </Col>
          <Col as="aside" xl={5}>
            <Row className="g-4">
              <Col md={12} xl={12}>
              <RoomInformation roomData={roomData}/>
              </Col>
              <Col md={12} xl={12}>
              
              <CancellationPolicy roomData={roomData}/>
              </Col>
            </Row>
          </Col>
        </Row>

      
      <div className="text-end">
        {/* Button that goes back to previous page */}
        <Button variant="secondary" className="next-btn mb-0 float-start" onClick={() => window.history.back()}>
          <i className="bi bi-arrow-left me-1" />
          Back
        </Button>
        <Button onClick={() => nextStep()} variant="primary" className="next-btn mb-0">
          Next
        </Button>
      </div>
    </div>
  )
}

export default Step1