import { CheckFormInput, DropzoneFormInput, FileFormInput, SelectFormInput, TextAreaFormInput, TextFormInput } from '@/components'
import { Button, Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap'
import type { StepProps } from '../types'
import { useWizard } from 'react-use-wizard'

const ListingCategory = ({ control }: StepProps) => {
  return (
    <Card className="shadow">
      <CardHeader className="border-bottom">
        <h5 className="mb-0">Choose Listing Category</h5>
      </CardHeader>
      <CardBody>
        <Row className="g-4">
          <Col xs={12}>
            <label className="form-label">Choose listing type *</label>
            <SelectFormInput className="form-select js-choice">
              <option value={-1}>Select type</option>
              <option>Hotel</option>
              <option>Villa</option>
              <option>Home Stay</option>
              <option>Farmhouse</option>
              <option>House boat</option>
            </SelectFormInput>
            <small>Hotel: Professional hospitality businesses that usually have a unique style or theme defining their brand and decor</small>
          </Col>
          <Col xs={12}>
            <TextFormInput
              control={control}
              label="Listing name *"
              type="text"
              name="listingName"
              placeholder="Enter Place Name"
              helpText="A catchy name usually includes: House name - Room name - A tourist destination"
            />
          </Col>
          <Col xs={12}>
            <label className="form-label">Is your listing set as a personal or guest use *</label>
            <div className="d-sm-flex">
              <CheckFormInput
                name="usageType"
                control={control}
                label={'Entire Place'}
                type="radio"
                containerClass="form-check radio-bg-light me-4"
                id="entire-place"
                defaultChecked
              />
              <CheckFormInput
                name="usageType"
                control={control}
                label={'For Guests'}
                type="radio"
                id="for-guests"
                containerClass="form-check radio-bg-light me-4"
              />
              <CheckFormInput
                name="usageType"
                control={control}
                label={'For Personal'}
                type="radio"
                id="for-personal"
                containerClass="form-check radio-bg-light"
              />
            </div>
          </Col>
          <Col xs={12}>
            <TextAreaFormInput control={control} name="shortDescription" rows={2} label="Short description *" placeholder="Enter keywords" />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

const ListingLocation = ({ control }: StepProps) => {
  return (
    <Card className="shadow">
      <CardHeader className="border-bottom">
        <h5 className="mb-0">Listing Location</h5>
      </CardHeader>
      <CardBody>
        <Row className="g-3">
          <Col md={6}>
            <label className="form-label">Country/Region *</label>
            <SelectFormInput className="form-select js-choice">
              <option value={-1}>Select Country</option>
              <option>India</option>
              <option>Usa</option>
              <option>Japan</option>
              <option>United Kingdom</option>
            </SelectFormInput>
          </Col>
          <Col md={6}>
            <label className="form-label">State *</label>
            <SelectFormInput className="form-select js-choice" data-search-enabled="true">
              <option value={-1}>Select state</option>
              <option>India</option>
              <option>Usa</option>
              <option>Japan</option>
              <option>United Kingdom</option>
            </SelectFormInput>
          </Col>

          <TextFormInput name="city" label="City *" placeholder="Enter city" containerClass="col-md-6" control={control} />
          <TextFormInput name="pNumber" label="Postal number *" placeholder="Enter postal number" containerClass="col-md-6" control={control} />
          <TextFormInput name="street" label="Street *" placeholder="Enter street" control={control} containerClass="col-12" />
          <TextFormInput name="latitude" label="Latitude *" placeholder="Enter latitude" control={control} containerClass="col-md-6" />
          <TextFormInput name="longitude" label="Longitude *" placeholder="Enter Longitude" control={control} containerClass="col-md-6" />

          <Col xs={12}>
            <iframe
              className="w-100 h-300px grayscale rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
              height={500}
              style={{ border: 0 }}
              aria-hidden="false"
              tabIndex={0}
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

const UploadImages = ({ control }: StepProps) => {
  return (
    <Card className="shadow">
      <CardHeader className="border-bottom">
        <h5 className="mb-0">Upload Images</h5>
      </CardHeader>
      <CardBody>
        <Row className="g-3">
          <Col xs={12}>
            <FileFormInput
              name="thumbnailImage"
              control={control}
              label="Upload thumbnail image *"
              helpText={
                <p className="small mb-0 mt-2">
                  <b>Note:</b> Only JPG, JPEG, and PNG. Our suggested dimensions are 600px * 450px. The larger image will be cropped to 4:3 to fit our
                  thumbnails/previews.
                </p>
              }
            />
          </Col>
          <Col xs={12}>
            <DropzoneFormInput
              label="Upload image gallery *"
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

const Step1 = ({ control }: StepProps) => {
  const { nextStep } = useWizard()

  return (
    <div className="vstack gap-4">
      <h4 className="mb-0">Basic Information</h4>

      <ListingCategory control={control} />

      <ListingLocation control={control} />

      <UploadImages control={control} />
      <div className="text-end">
        <Button onClick={() => nextStep()} variant="primary" className="next-btn mb-0">
          Next
        </Button>
      </div>
    </div>
  )
}

export default Step1
