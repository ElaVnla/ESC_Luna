import { DropzoneFormInput, SelectFormInput, TextFormInput } from '@/components'
import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const CabDetail = () => {
  const { control } = useForm()
  return (
    <Card className="shadow">
      <CardHeader className="border-bottom">
        <h5 className="mb-0">Cab Detail</h5>
      </CardHeader>
      <CardBody>
        <Row className="g-3">
          <TextFormInput name="carName" label="Car name" control={control} placeholder="Enter car name" containerClass="col-md-6" />
          <Col md={6}>
            <label className="form-label">Car type *</label>
            <div className="d-sm-flex">
              <div className="form-check radio-bg-light me-4">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Ac
                </label>
              </div>
              <div className="form-check radio-bg-light me-4">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Non Ac
                </label>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <label className="form-label">Car model</label>
            <SelectFormInput className="form-select js-choice" data-search-enabled="true">
              <option value={-1}>Select item</option>
              <option>Sedan</option>
              <option>Micro</option>
              <option>CUV</option>
              <option>SUV</option>
              <option>Pick up</option>
              <option>Coupe</option>
            </SelectFormInput>
          </Col>
          <TextFormInput name="modalYear" label="Model Year" control={control} placeholder="Enter car model year" containerClass="col-md-6" />

          <Col xs={12}>
            <DropzoneFormInput
              label="Upload image *"
              text="Drop files here or click to upload."
              iconProps={{
                size: 80,
              }}
              helpText={
                <p className="small mb-0 mt-2">
                  <b>Note:</b> Only JPG, JPEG, and PNG. Our suggested dimensions are 600px * 450px. The larger image will be cropped to 4:3 to fit our
                  thumbnails/previews.
                </p>
              }
              showPreview
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default CabDetail
