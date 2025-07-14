import { Wizard, useWizard } from 'react-use-wizard'
import HotelInformation from '../HotelAndRoomDetails/HotelInformation'
import LoginAdvantages from '../HotelAndRoomDetails/LoginAdvantages'
import OfferAndDiscounts from '../HotelAndRoomDetails/OfferAndDiscounts'
import PriceSummary from '../HotelAndRoomDetails/PriceSummary'
import PaymentOptions from './PaymentOptions'
import GuestDetails from '../UserAndSpecialRequest/GuestDetails'
import { CheckFormInput, DropzoneFormInput, FileFormInput, SelectFormInput, TextAreaFormInput, TextFormInput } from '@/components'
import { Button, Card, CardBody, CardHeader, Col, Row, Container } from 'react-bootstrap'
import type { StepProps } from '../types'
import { Link } from 'react-router-dom'


const Step3 = ({ control }: StepProps) => {
  const { previousStep } = useWizard()

  return (
    <div className="vstack gap-4">
      <Row className="g-4">
        <Col xs={8}>
            <div>
            <PaymentOptions />
            </div>
        </Col>
        <Col as="aside" xl={4}>
            <Row className="g-4">
            <Col md={6} xl={12}>
                <PriceSummary />
            </Col>
            <Col md={6} xl={12}>
                <OfferAndDiscounts />
            </Col>
            </Row>
        </Col>
        </Row>

      <div className="d-flex justify-content-between">
        <button onClick={() => previousStep()} className="btn btn-secondary prev-btn mb-0">
          Previous
        </button>
        <Link to="/hotels/verify-email" className="btn btn-success mb-0">
          Proceed with payment
        </Link>
      </div>
    </div>
  )
}

export default Step3