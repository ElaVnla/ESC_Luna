import { TextAreaFormInput } from '@/components'
import { Card, CardBody, CardHeader, Col } from 'react-bootstrap'
import { BsPeopleFill } from 'react-icons/bs'
import { useFormContext } from 'react-hook-form'

const SpecialRequestList = ['Late check-in', 'Early check-in', 'Room on a high floor']

const SpecialRequest = () => {
  const { control } = useFormContext()

  return (
    <Card className="shadow mb-1">
      <CardHeader className="card-header border-bottom p-4">
        <h4 className="card-title mb-0 items-center">
          <BsPeopleFill className="me-2" />
          Special Requests
        </h4>
      </CardHeader>
      <CardBody className="p-4">
        <Col xs={12} className="mt-1">
        <form className="row g-4">
<TextAreaFormInput
            control={control}
            name="special_request.shortDescription"
            rows={2}
            label="Please enter your requests to the hotel. e.g: Late Check In - 30Mins. We will contact you for any further clarification or potential charges to apply."
            placeholder="Enter..."
          />                    
        </form>
          
        </Col>
      </CardBody>
    </Card>
  )
}

export default SpecialRequest
