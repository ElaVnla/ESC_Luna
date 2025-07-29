import { CheckFormInput, SelectFormInput, TextFormInput } from '@/components';
import { Card, CardBody, CardHeader, Col, FormSelect } from 'react-bootstrap';
import { BsPeopleFill } from 'react-icons/bs';
import { useFormContext, Controller } from 'react-hook-form'; // shared form
import { useGuestCount } from '../../contexts/GuestCountContext';

const GuestDetails = () => {
  const { control } = useFormContext(); // use shared form
  const { guests } = useGuestCount();

  const renderGuestForm = (type: 'adult' | 'child', index: number) => {
    const label = type === 'adult' ? `Adult ${index + 1}` : `Child ${index + 1}`;
    // const prefix = `guests.${type}[${index}]`; // dynamic field name
    const prefix = `guests.${type === 'adult' ? 'adults' : 'children'}[${index}]`;


    return (
      <Card className="mb-4" key={`${type}-${index}`}>
        <CardHeader className="card-header border-bottom p-4">
          <h5 className="card-title mb-0 d-flex align-items-center">
            <BsPeopleFill className="me-2" />
            {label}
          </h5>
        </CardHeader>
        <CardBody className="p-4">
          <form className="row g-4">
            <Col md={2}>
              <div className="form-size-lg">
                <label className="form-label">Title</label>
                <Controller
                  name={`${prefix}.salutation`}
                  control={control}
                  render={({ field }) => (
                  <FormSelect {...field} className="form-select js-choice">
                    <option value="">Title</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                  </FormSelect>
                )}
                />
              </div>
            </Col>
            <TextFormInput
              name={`${prefix}.first_name`}
              label="First Name"
              type="text"
              control={control}
              placeholder="Enter your first name"
              className="form-control-lg"
              containerClass="col-md-3"
            />
            <TextFormInput
              name={`${prefix}.last_name`}
              label="Last Name"
              type="text"
              control={control}
              placeholder="Enter your last name"
              className="form-control-lg"
              containerClass="col-md-3"
            />
            <TextFormInput
              name={`${prefix}.country`}
              label="Country"
              type="text"
              control={control}
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
                placeholder="Enter your email"
                className="form-control-lg"
              />
            </Col>
            <TextFormInput
              name={`${prefix}.phone_number`}
              label="Mobile Number"
              type="text"
              control={control}
              placeholder="Enter your mobile number"
              className="form-control-lg"
              containerClass="col-md-6"
            />
          </form>
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
        {[...Array(guests.adults)].map((_, index) => renderGuestForm('adult', index))}
        {[...Array(guests.children)].map((_, index) => renderGuestForm('child', index))}
      </CardBody>
    </Card>
  );
};

export default GuestDetails;
