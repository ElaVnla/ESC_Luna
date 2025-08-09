import { TextFormInput } from '@/components';
import { Card, CardBody, CardHeader, Col, FormSelect } from 'react-bootstrap';
import { BsPeopleFill } from 'react-icons/bs';
import { Controller, useFormContext } from 'react-hook-form';
import { useEffect, useState } from 'react';

const GuestDetails = ({ hotelParams, totalGuests }: { hotelParams: { guests: string }, totalGuests: number }) => {
  const { control } = useFormContext();
  const [guestList, setGuestList] = useState<any[]>([]);

  useEffect(() => {
    const newGuestList = [];
    
    // Only create guest forms if totalGuests > 0
    if (totalGuests > 0) {
      for (let i = 0; i < totalGuests; i++) {
        newGuestList.push({ isMain: false });
      }
    }

    setGuestList(newGuestList);
  }, [hotelParams.guests, totalGuests]);

  // If no guests (totalGuests == 0), display "No guests indicated"
  if (totalGuests === 0) {
    return (
      <Card className="shadow mb-4">
        <CardHeader className="card-header border-bottom p-4">
          <h4 className="card-title mb-0 d-flex align-items-center">
            <BsPeopleFill className="me-2" />
            Guest Details
          </h4>
        </CardHeader>
        <CardBody className="p-4">
          <p>No guests indicated</p>
        </CardBody>
      </Card>
    );
  }

  const renderGuestForm = (index: number) => {
    const label = `Guest ${index + 1}`;
    const prefix = `guests[${index}]`;

    return (
      <Card className="mb-4" key={index}>
        <CardHeader className="card-header border-bottom p-4">
          <h5 className="card-title mb-0 d-flex align-items-center">
            <BsPeopleFill className="me-2" />
            {label}
          </h5>
        </CardHeader>
        <CardBody className="p-4">
          <div className="row g-4">
            <Col md={2}>
              <div className="form-size-lg">
                <label className="form-label">Title</label>
                <Controller
                  name={`${prefix}.salutation`}
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
              name={`${prefix}.first_name`}
              label="First Name"
              type="text"
              control={control}
              rules={{ required: 'First name is required' }}
              placeholder="Enter your first name"
              className="form-control-lg"
              containerClass="col-md-3"
            />

            <TextFormInput
              name={`${prefix}.last_name`}
              label="Last Name"
              type="text"
              control={control}
              rules={{ required: 'Last name is required' }}
              placeholder="Enter your last name"
              className="form-control-lg"
              containerClass="col-md-3"
            />

            <TextFormInput
              name={`${prefix}.country`}
              label="Country"
              type="text"
              control={control}
              rules={{ required: 'Country is required' }}
              placeholder="Enter your country"
              className="form-control-lg"
              containerClass="col-md-4"
            />

            <Col md={6}>
              <TextFormInput
                name={`${prefix}.email`}
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
            </Col>

            <TextFormInput
              name={`${prefix}.phone_number`}
              label="Mobile Number"
              type="text"
              control={control}
              rules={{
                required: 'Mobile number is required',
                pattern: {
                  value: /^\+\d{1,4}\s?\d{6,14}$/,
                  message: 'Include country code (e.g. +65 81234567)',
                },
              }}
              placeholder="e.g. +65 81234567"
              className="form-control-lg"
              containerClass="col-md-6"
            />

            <TextFormInput
              name={`${prefix}.date_of_birth`}
              label="Date of Birth"
              type="date"
              control={control}
              rules={{ required: 'Date of birth is required' }}
              placeholder="Enter your date of birth"
              className="form-control-lg"
              containerClass="col-md-4"
            />
          </div>
        </CardBody>
      </Card>
    );
  };

  return (
    <Card className="shadow mb-4">
      <CardHeader className="card-header border-bottom p-4">
        <h4 className="card-title mb-0 d-flex align-items-center">
          <BsPeopleFill className="me-2" />
          Guest Details
        </h4>
      </CardHeader>
      <CardBody className="p-4">
        {guestList.map((_, index) => renderGuestForm(index))}
      </CardBody>
    </Card>
  );
};

export default GuestDetails;
