import { Wizard, useWizard } from 'react-use-wizard'
import HotelInformation from '../HotelAndRoomDetails/HotelInformation'
import LoginAdvantages from '../HotelAndRoomDetails/LoginAdvantages'
import OfferAndDiscounts from '../HotelAndRoomDetails/OfferAndDiscounts'
import PriceSummary from '../HotelAndRoomDetails/PriceSummary'
import PaymentOptions from '../MakePayment/PaymentOptions'
import GuestDetails from './GuestDetails'
import { CheckFormInput, DropzoneFormInput, FileFormInput, SelectFormInput, TextAreaFormInput, TextFormInput } from '@/components'
import { Button, Card, CardBody, CardHeader, Col, Row, Container } from 'react-bootstrap'
import type { StepProps } from '../types'


const Step2 = ({ control }: StepProps) => {
  const { previousStep, nextStep } = useWizard()

  return (
    <div className="vstack gap-4">
      <Row className="g-4">
        <Col xs={12}>
            <div>
            <GuestDetails />
            </div>
        </Col>
        </Row>

      <div className="hstack gap-2 flex-wrap justify-content-between">
        <button onClick={() => previousStep()} className="btn btn-secondary prev-btn mb-0">
          Previous
        </button>
        <button onClick={() => nextStep()} className="btn btn-primary next-btn mb-0">
          Next
        </button>
      </div>
    </div>
  )
}
  
  
  
  

export default Step2