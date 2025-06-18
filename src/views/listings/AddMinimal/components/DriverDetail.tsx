import { SelectFormInput, TextAreaFormInput, TextFormInput } from '@/components'
import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const DriverDetail = () => {
  const { control } = useForm()
  return (
    <Card className="shadow">
      <CardHeader className="border-bottom">
        <h5 className="mb-0">Driver Detail</h5>
      </CardHeader>
      <CardBody>
        <Row className="g-3">
          <Col md={3}>
            <label className="form-label">Title</label>
            <SelectFormInput className="form-select js-choice">
              <option>Mr</option>
              <option>Mrs</option>
            </SelectFormInput>
          </Col>

          <div className="col-md-9">
            <label className="form-label">Driver Name</label>

            <div className="input-group">
              <TextFormInput name="driverFirstName" control={control} placeholder="First name" combinedInput />
              <TextFormInput name="driverLastName" control={control} placeholder="Last name" combinedInput />
            </div>
          </div>
          <TextFormInput name="number" label="Contact Number" containerClass="col-md-6" placeholder="Enter contact number" control={control} />
          <TextFormInput name="licenseNo" label="License Number" containerClass="col-md-6" placeholder="Enter license number" control={control} />
          <Col md={6}>
            <label className="form-label">State</label>
            <SelectFormInput className="form-select js-choice" data-search-enabled="true">
              <option value={-1}>Select state</option>
              <option>India</option>
              <option>Usa</option>
              <option>Japan</option>
              <option>United Kingdom</option>
            </SelectFormInput>
          </Col>
          <TextFormInput name="city2" label="City" containerClass="col-md-6" placeholder="Enter city" control={control} />
          <TextAreaFormInput name="address2" label="Address" rows={2} containerClass="col-12" control={control} />
        </Row>
      </CardBody>
    </Card>
  )
}

export default DriverDetail
