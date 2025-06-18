import { SelectFormInput, TextAreaFormInput, TextFormInput } from '@/components'
import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const OwnerDetail = () => {
  const { control } = useForm()
  return (
    <Card className="shadow">
      <CardHeader className="border-bottom">
        <h5 className="mb-0">Owner Detail</h5>
      </CardHeader>
      <CardBody>
        <Row className="g-3">
          <Col xs={12}>
            <label className="form-label">Owner name</label>
            <div className="input-group">
              <TextFormInput name="fName" combinedInput control={control} placeholder="First name" />
              <TextFormInput name="lName" combinedInput control={control} placeholder="Last name" />
            </div>
          </Col>
          <TextFormInput name="contactNo" label="Contact number" control={control} placeholder="Enter contact number" containerClass="col-md-6" />
          <TextFormInput
            name="email"
            type="email"
            label="Email address"
            control={control}
            placeholder="Enter email address"
            containerClass="col-md-6"
          />
          <TextAreaFormInput name="address" label="Address" rows={2} placeholder="Enter keywords" control={control} containerClass="col-12" />
          <div className="col-md-6">
            <label className="form-label">State</label>
            <SelectFormInput className="form-select js-choice" data-search-enabled="true">
              <option value={-1}>Select state</option>
              <option>India</option>
              <option>Usa</option>
              <option>Japan</option>
              <option>United Kingdom</option>
            </SelectFormInput>
          </div>
          <TextFormInput name="city" label="City" control={control} placeholder="Enter city" containerClass="col-md-6" />
        </Row>
      </CardBody>
    </Card>
  )
}

export default OwnerDetail
