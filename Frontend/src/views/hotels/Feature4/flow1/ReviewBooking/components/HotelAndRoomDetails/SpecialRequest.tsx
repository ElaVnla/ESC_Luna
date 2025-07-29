import { CheckFormInput, SelectFormInput, TextFormInput, TextAreaFormInput } from '@/components'
import { Alert, Button, Card, CardBody, CardHeader, Col } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsPeopleFill } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const SpecialRequestList = ['Late check-in', 'Early check-in', 'Room on a high floor']
const SpecialRequest = () => {
    const { control } = useForm()
    return(
        <Card className="shadow">
              <CardHeader className="card-header border-bottom p-4">
                <h4 className="card-title mb-0 items-center">
                  <BsPeopleFill className=" me-2" />
                  Special Requests
                </h4>
              </CardHeader>
              <CardBody>
                    <Col xs={12} className="mt-1">
                    <TextAreaFormInput control={control} name="shortDescription" rows={2} label="Please enter your requests to the hotel. e.g: Late Check In - 30Mins. We will contact you for any further clarification or potential charges to apply." placeholder="Enter....." />
                  </Col>
                  </CardBody>
            </Card>
    )
}

export default SpecialRequest
