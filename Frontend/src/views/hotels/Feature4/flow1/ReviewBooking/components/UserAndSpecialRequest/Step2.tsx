import { useWizard } from 'react-use-wizard'
import GuestDetails from './GuestDetails'
import MainGuestDetails from './MainGuestDetails'
import { Row, Col } from 'react-bootstrap'
import { useFormContext } from 'react-hook-form'
import { toast } from 'react-toastify'
import type { Step1Props } from '../types'

const Step2 = ({ control }: Step1Props) => {
  const { previousStep, nextStep } = useWizard()
  const { trigger } = useFormContext()

  const handleNext = async () => {
    const isValid = await trigger([
      'customer.salutation',
      'customer.first_name',
      'customer.last_name',
      'customer.billing_address',
      'customer.email',
      'customer.phone_number',
      // wildcard validation for dynamic guests:
      'guests.adults',
      'guests.children',
    ])
    if (isValid) {
      nextStep()
    } else {
      toast.error('Please complete all required fields.')
    }
  }

  return (
    <div className="vstack gap-4">
      <Row className="g-4">
        <Col xs={12}>
          <MainGuestDetails />
          <GuestDetails />
        </Col>
      </Row>

      <div className="hstack gap-2 flex-wrap justify-content-between">
        <button onClick={() => previousStep()} className="btn btn-secondary prev-btn mb-0">
          Previous
        </button>
        <button onClick={handleNext} className="btn btn-primary next-btn mb-0">
          Next
        </button>
      </div>
    </div>
  )
}

export default Step2
