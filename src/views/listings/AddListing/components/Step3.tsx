import { SelectFormInput, TextFormInput } from '@/components'
import { useState } from 'react'
import ReactQuill from 'react-quill-new'
import type { StepProps } from '../types'
import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useWizard } from 'react-use-wizard'

const policyDescriptionInitialValue = `
<br />
<h1>Quill Rich Text Editor</h1>
<br />
<p>Quill is a free, open-source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</p>
<br />
<p>Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for a few longer Mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes. </p>
<br />
<p> Affronting imprudence do he he everything. Test lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an. </p>
<br />
<p> Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. </p>
<p>Quill is a free, open-source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</p>
<br />
<p>Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for a few longer Mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes. </p>
<br />
<p> Affronting imprudence do he he everything. Test lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an. </p>
<br />
<p> Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. </p>
<p>Quill is a free, open-source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</p>
<br />
<p>Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for a few longer Mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes. </p>
<br />
<p> Affronting imprudence do he he everything. Test lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an. </p>
<br />
<p> Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. </p>
`
const ListingPrice = ({ control }: StepProps) => {
  return (
    <Card className="shadow">
      <CardHeader className="border-bottom">
        <h5 className="mb-0">Listing Price</h5>
      </CardHeader>

      <CardBody>
        <Row className="g-4">
          <Col md={6}>
            <label className="form-label">Currency</label>
            <SelectFormInput className="form-select js-choice border-0 z-index-9 bg-transparent">
              <option value={-1}>Select item</option>
              <option>USD</option>
              <option>EURRO</option>
              <option>VND</option>
            </SelectFormInput>
          </Col>

          <TextFormInput name="basePrice" label="Base Price *" placeholder="Enter price" containerClass="col-md-6" control={control} />
          <TextFormInput name="discount" label="Discount *" placeholder="Enter discount" containerClass="col-md-6" control={control} />
          <Col md={6}>
            <label className="form-label">Rating</label>
            <SelectFormInput className="form-select js-choice border-0 z-index-9 bg-transparent">
              <option value={-1}>Select item</option>
              <option>★★★★★</option>
              <option>★★★★☆</option>
              <option>★★★☆☆</option>
              <option>★★☆☆☆</option>
              <option>★☆☆☆☆</option>
            </SelectFormInput>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

const ListingPolicy = ({ control }: StepProps) => {
  const [listingPolicyDescription, setListingPolicyDescription] = useState(policyDescriptionInitialValue)

  return (
    <Card className="shadow">
      <CardHeader className="border-bottom">
        <h5 className="mb-0">Listing Policy</h5>
      </CardHeader>

      <CardBody>
        <Row className="g-4">
          <Col xs={12}>
            <label className="form-label">Add description *</label>

            <ReactQuill
              value={listingPolicyDescription}
              onChange={setListingPolicyDescription}
              modules={{
                toolbar: [
                  [{ size: ['small', false, 'large', 'huge'] }],
                  ['bold', 'italic', 'underline', 'strike'],
                  ['color', 'background'],
                  ['code-block'],
                  [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
                  ['link', 'image'],
                  ['clean'],
                ],
              }}
              theme="snow"
            />
          </Col>

          <Col md={6}>
            <label className="form-label">Cancellation options</label>
            <SelectFormInput className="form-select js-choice border-0 z-index-9 bg-transparent" data-position="top">
              <option value={-1}>Select item</option>
              <option>Non Refundable</option>
              <option>Refundable</option>
            </SelectFormInput>
          </Col>

          <TextFormInput name="charges" label="Charges *" placeholder="Enter charges" containerClass="col-md-6" control={control} />
        </Row>
      </CardBody>
    </Card>
  )
}

const Step3 = ({ control }: StepProps) => {
  const { previousStep } = useWizard()

  return (
    <div className="vstack gap-4">
      <h4 className="mb-0">Price &amp; Policy</h4>

      <ListingPrice control={control} />

      <ListingPolicy control={control} />

      <div className="d-flex justify-content-between">
        <button onClick={() => previousStep()} className="btn btn-secondary prev-btn mb-0">
          Previous
        </button>
        <Link to="/listings/added" className="btn btn-success mb-0">
          Add Listing
        </Link>
      </div>
    </div>
  )
}

export default Step3
