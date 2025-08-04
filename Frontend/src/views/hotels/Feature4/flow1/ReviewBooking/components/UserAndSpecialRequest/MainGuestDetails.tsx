import { TextFormInput } from '@/components'
import { Card, CardBody, CardHeader, Col, FormSelect } from 'react-bootstrap'
import { useFormContext, Controller } from 'react-hook-form'
import { BsPeopleFill } from 'react-icons/bs'

const GuestDetails = () => {
  const { control } = useFormContext()

  return (
    <Card className="shadow mb-4">
      <CardHeader className="card-header border-bottom p-4">
        <h4 className="card-title mb-0 items-center">
          <BsPeopleFill className="me-2" />
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
                rules={{ required: 'Salutation is required' }}
                render={({ field, fieldState }) => (
                  <>
                    <FormSelect
                      {...field}
                      className={`form-select js-choice ${fieldState.invalid ? 'is-invalid' : ''}`}
                    >
                      <option value="">Title</option>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Ms">Ms</option>
                      <option value="Miss">Miss</option>
                    </FormSelect>
                    {fieldState.error && (
                      <div className="invalid-feedback">{fieldState.error.message}</div>
                    )}
                  </>
                )}
              />
            </div>
          </Col>

          <TextFormInput
            name="customer.first_name"
            label="First Name"
            type="text"
            control={control}
            rules={{ required: 'First name is required' }}
            placeholder="Enter your first name"
            className="form-control-lg"
            containerClass="col-md-3"
          />

          <TextFormInput
            name="customer.last_name"
            label="Last Name"
            type="text"
            control={control}
            rules={{ required: 'Last name is required' }}
            placeholder="Enter your last name"
            className="form-control-lg"
            containerClass="col-md-3"
          />

          <TextFormInput
            name="customer.billing_address"
            label="Billing Address"
            type="text"
            control={control}
            rules={{ required: 'Billing address is required' }}
            placeholder="Enter your billing address"
            className="form-control-lg"
            containerClass="col-md-4"
          />

          <Col md={6}>
            <TextFormInput
              name="customer.email"
              label="Email"
              type="text"
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email address',
                },
              }}
              placeholder="e.g. john@example.com"
              className="form-control-lg"
            />
            <div id="emailHelp" className="form-text">
              (Booking confirmation will be sent to this email)
            </div>
          </Col>

          <TextFormInput
            name="customer.phone_number"
            label="Phone Number"
            type="text"
            control={control}
            rules={{
              required: 'Phone number is required',
              pattern: {
                value: /^\+\d{1,4}\s?\d{6,14}$/,
                message: 'Include country code (e.g. +65 81234567)',
              },
            }}
            placeholder="e.g. +65 81234567"
            className="form-control-lg"
            containerClass="col-md-6"
          />
        </form>
      </CardBody>
    </Card>
  )
}

export default GuestDetails
