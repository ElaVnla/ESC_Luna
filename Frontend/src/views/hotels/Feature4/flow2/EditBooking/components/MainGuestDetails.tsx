import { useFormContext, Controller } from 'react-hook-form';
import { SelectFormInput, TextFormInput } from '@/components';
import { Card, CardBody, CardHeader, Col } from 'react-bootstrap';
import { BsPeopleFill } from 'react-icons/bs';

const MainGuestDetails = () => {
  const { control } = useFormContext();

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
            <label className="form-label">Title</label>
            <Controller
              name="customer.salutation"
              control={control}
              rules={{ required: 'Title is required' }}
              render={({ field, fieldState }) => (
                <>
                  <SelectFormInput
                    {...field}
                    className={`form-select js-choice ${fieldState.invalid ? 'is-invalid' : ''}`}
                  >
                    <option value="">Title</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                  </SelectFormInput>
                  {fieldState.error?.message && (
                    <div className="invalid-feedback">{fieldState.error.message}</div>
                  )}
                </>
              )}
            />
          </Col>
          <TextFormInput
            name="customer.first_name"
            type="text"
            label="First Name"
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
            placeholder="Enter your Billing Address"
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
                  message: 'Enter a valid email address',
                },
              }}
              placeholder="Enter your email"
              className="form-control-lg"
            />
          </Col>
          <TextFormInput
            name="customer.phone_number"
            label="Mobile number"
            type="text"
            control={control}
            rules={{
              required: 'Phone number is required',
              pattern: {
                value: /^\+\d{1,4}\s?\d{6,14}$/,
                message: 'Include country code (e.g. +65 81234567)',
              },
            }}
            placeholder="Enter your mobile number"
            className="form-control-lg"
            containerClass="col-md-6"
          />
        </form>
      </CardBody>
    </Card>
  );
};

export default MainGuestDetails;
