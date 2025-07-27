import { CheckFormInput, SelectFormInput, TextFormInput } from '@/components'
import { Alert, Button, Card, CardBody, CardHeader, Col } from 'react-bootstrap'
import { useForm, useFormContext, Controller } from 'react-hook-form'
import { BsPeopleFill } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const SpecialRequest = ['Smoking room', 'Late check-in', 'Early check-in', 'Room on a high floor', 'Large bed', 'Airport transfer', 'Twin beds']
const GuestDetails = () => {
  const { control } = useFormContext()
  return (
    <Card className="shadow mb-4">
      <CardHeader className="card-header border-bottom p-4">
        <h4 className="card-title mb-0 items-center">
          <BsPeopleFill className=" me-2" />
          Main Guest Details
        </h4>
      </CardHeader>
      <CardBody className="p-4">
        <form className="row g-4">
          <Col md={2}>
            <div className="form-size-lg">
              <label className="form-label">Title</label>
              <Controller
                name="customer.salutation"
                control={control}
                render={({ field }) => (
                <SelectFormInput {...field} className="form-select js-choice">
                  <option value="">Title</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                </SelectFormInput>
              )}
            />
            </div>
          </Col>
          <TextFormInput
            name="customer.first_name"
            type="text"
            label="First Name"
            control={control}
            placeholder="Enter your first name"
            className="form-control-lg"
            containerClass="col-md-3"
          />
          <TextFormInput
            name="customer.last_name"
            label="Last Name"
            type="text"
            control={control}
            placeholder="Enter your last name"
            className="form-control-lg"
            containerClass="col-md-3"
          />
          <TextFormInput
            name="customer.billing_address"
            label="Billing Address"
            type="text"
            control={control}
            placeholder="Enter your Billing Address"
            className="form-control-lg"
            containerClass="col-md-4"
          />
          <Col md={6}>
            <TextFormInput name="customer.email" label="Email id" type="text" control={control} placeholder="Enter your email" className="form-control-lg" />
            <div id="emailHelp" className="form-text">
              (Booking confirmation will be sent to this email)
            </div>
          </Col>
          <TextFormInput
            name="customer.phone_number"
            label="Phone number"
            type="text"
            control={control}
            placeholder="Enter your phone number"
            className="form-control-lg"
            containerClass="col-md-6"
          />
          
        </form>
      </CardBody>
    </Card>
  )
}

export default GuestDetails
