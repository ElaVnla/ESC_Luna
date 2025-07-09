import { FileFormInput, SelectFormInput, TextFormInput } from '@/components'
import { useState } from 'react'
import ReactQuill from 'react-quill-new'
import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap'
import { BsPlusCircle } from 'react-icons/bs'
import type { StepProps } from '../types'
import { useWizard } from 'react-use-wizard'

const detailedInfoDescriptionInitialValue = `
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

const OverView = () => {
  const [detailedInfoDescription, setDetailedInfoDescription] = useState(detailedInfoDescriptionInitialValue)
  return (
    <Card className="shadow">
      <CardHeader className="border-bottom">
        <h5 className="mb-0">Overview</h5>
      </CardHeader>

      <CardBody>
        <Row className="g-4">
          <Col xs={12}>
            <label className="form-label">Select amenities *</label>
            <SelectFormInput
              className="form-select js-choice border-0 z-index-9 bg-transparent"
              placeholder
              aria-label=".form-select-sm"
              data-max-item-count={15}
              data-remove-item-button="true"
              multiple>
              <option value={-1}>Select amenities</option>
              <option>Swimming pool</option>
              <option>Spa</option>
              <option>Kid's play area</option>
              <option>Gym</option>
              <option>Ironing Service</option>
              <option>Concierge</option>
              <option>Lift</option>
              <option>Dry cleaning</option>
              <option>Room Service</option>
              <option>Waiting Area</option>
              <option>Secrete smoking area</option>
            </SelectFormInput>
            <small>Maximum of 14 keywords. Keywords should all be in lowercase and separated by commas. e.g. javascript, react, marketing</small>
          </Col>

          <Col xs={12}>
            <label className="form-label">Add description *</label>

            <ReactQuill
              value={detailedInfoDescription}
              onChange={setDetailedInfoDescription}
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
        </Row>
      </CardBody>
    </Card>
  )
}

const ListingSize = ({ control }: StepProps) => {
  return (
    <Card className="shadow">
      <CardHeader className="border-bottom">
        <h5 className="mb-0">Size Of Your Listing</h5>
      </CardHeader>

      <CardBody>
        <Row className="g-4">
          <TextFormInput name="totalFloor" label="Total Floor *" placeholder="Enter total floors" containerClass="col-md-4" control={control} />
          <TextFormInput name="totalRoom" label="Total Room *" placeholder="Enter total rooms" containerClass="col-md-4" control={control} />
          <TextFormInput name="roomArea" label="Room area *" placeholder="Enter area in sq.ft" containerClass="col-md-4" control={control} />
        </Row>
      </CardBody>
    </Card>
  )
}

const RoomOptions = ({ control }: StepProps) => {
  return (
    <Card className="shadow">
      <CardHeader className="border-bottom">
        <h5 className="mb-0">Room Options</h5>
      </CardHeader>
      <CardBody>
        <Row className="g-4">
          <TextFormInput name="roomName" label="Room name *" placeholder="Enter Room name" containerClass="col-md-6" control={control} />
          <FileFormInput name="thumbnailImage2" control={control} label="Room thumbnail image *" containerClass="col-md-6" />
          <TextFormInput name="roomPrice" label="Room Price *" placeholder="Enter Room price" containerClass="col-md-6" control={control} />
          <TextFormInput name="discount" label="Discount *" placeholder="Enter Discount" containerClass="col-md-6" control={control} />

          <Col md={6}>
            <label className="form-label">Additional info</label>
            <SelectFormInput className="form-select js-choice border-0 z-index-9 bg-transparent">
              <option value={-1}>Select item</option>
              <option>Non Refundable</option>
              <option>Free Cancellation</option>
            </SelectFormInput>
          </Col>
          <Col xs={12}>
            <button className="btn btn-sm btn-primary-soft mb-0">
              <BsPlusCircle className=" me-2" />
              Add New Room
            </button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
const Step2 = ({ control }: StepProps) => {
  const { previousStep, nextStep } = useWizard()

  return (
    <div className="vstack gap-4">
      <h4 className="mb-0">Detailed Information</h4>

      <OverView />

      <ListingSize control={control} />

      <RoomOptions control={control} />

      <div className="hstack gap-2 flex-wrap justify-content-between">
        <button onClick={() => previousStep()} className="btn btn-secondary prev-btn mb-0">
          Previous
        </button>
        <button onClick={() => nextStep()} className="btn btn-primary next-btn mb-0">
          Next
        </button>
      </div>
    </div>
  )
}

export default Step2
