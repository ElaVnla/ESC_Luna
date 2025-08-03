import { Card, CardBody, CardHeader, Col, FormSelect } from 'react-bootstrap';
import { useFormContext, Controller } from 'react-hook-form';
import { BsPeopleFill } from 'react-icons/bs';
import { TextFormInput } from '@/components';

type Guest = {
  id: number;
  guest_type: string;
  salutation: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  country: string;
};

const GuestDetails = ({ guests }: { guests: Guest[] }) => {
  const { control } = useFormContext();

  const renderGuestForm = (guest: Guest, index: number) => {
    const prefix = `guests.${index}`;

    return (
      <Card className="mb-4" key={guest.id}>
        <CardHeader className="card-header border-bottom p-4">
          <h5 className="card-title mb-0 d-flex align-items-center">
            <BsPeopleFill className="me-2" />
            {guest.guest_type} {index + 1}
          </h5>
        </CardHeader>
        <CardBody className="p-4">
          <form className="row g-4">
            <Col md={2}>
              <label className="form-label">Title</label>
              <Controller
                name={`${prefix}.salutation`}
                control={control}
                defaultValue={guest.salutation}
                render={({ field }) => (
                  <FormSelect {...field} className="form-select js-choice">
                    <option value="">Title</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                  </FormSelect>
                )}
              />
            </Col>
            <TextFormInput
              name={`${prefix}.first_name`}
              label="First Name"
              type="text"
              control={control}
              className="form-control-lg"
              containerClass="col-md-3"
            />
            <TextFormInput
              name={`${prefix}.last_name`}
              label="Last Name"
              type="text"
              control={control}
              className="form-control-lg"
              containerClass="col-md-3"
            />
            <TextFormInput
              name={`${prefix}.country`}
              label="Country"
              type="text"
              control={control}
              className="form-control-lg"
              containerClass="col-md-4"
            />
            <Col md={6}>
              <TextFormInput
                name={`${prefix}.email`}
                label="Email"
                type="text"
                control={control}
                className="form-control-lg"
              />
            </Col>
            <TextFormInput
              name={`${prefix}.phone_number`}
              label="Mobile number"
              type="text"
              control={control}
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
        {guests.map((guest, index) => renderGuestForm(guest, index))}
      </CardBody>
    </Card>
  );
};

export default GuestDetails;
