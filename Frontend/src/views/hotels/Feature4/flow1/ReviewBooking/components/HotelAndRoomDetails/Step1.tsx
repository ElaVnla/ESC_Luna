import { Wizard, useWizard } from 'react-use-wizard'
import HotelInformation from './HotelInformation'
import LoginAdvantages from './LoginAdvantages'
import OfferAndDiscounts from './OfferAndDiscounts'
import PriceSummary from './PriceSummary'
import PaymentOptions from '../MakePayment/PaymentOptions'
import GuestDetails from '../UserAndSpecialRequest/GuestDetails'
import { CheckFormInput, DropzoneFormInput, FileFormInput, SelectFormInput, TextAreaFormInput, TextFormInput } from '@/components'
import { Button, Card, CardBody, CardHeader, Col, Row, Container } from 'react-bootstrap'
import type { StepProps } from '../types'
import RoomInformation from './RoomInformation'

const Step1 = ({ control }: StepProps) => {
  const { nextStep } = useWizard()

  return (
    <div className="vstack gap-4">
      <Row className="g-4">
            <Col xl={7}>
            <div className="vstack gap-5">
              <HotelInformation />

            </div>
          </Col>
          <Col as="aside" xl={5}>
            <Row className="g-4">
              <Col md={6} xl={12}>
              <RoomInformation />
              </Col>
            </Row>
          </Col>
        </Row>

      
      <div className="text-end">
        <Button onClick={() => nextStep()} variant="primary" className="next-btn mb-0">
          Next
        </Button>
      </div>
    </div>
  )
}

export default Step1