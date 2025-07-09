import { TextAreaFormInput, TextFormInput } from '@/components'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Card, CardBody, CardHeader, Col } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const WebsiteSettings = () => {
  const profileSchema = yup.object({
    name: yup.string().required('Please enter your site name'),
    copyRight: yup.string().required('Please enter your site copyrights'),
    description: yup.string().required('Please enter your description'),
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    supportEmail: yup.string().email('Please enter a valid email').required('Please enter your support email'),
    phone: yup.number().required('Please enter your contact number'),
    address: yup.string().required('Please enter your contact address'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(profileSchema),
  })

  return (
    <Card className="shadow">
      <CardHeader className="border-bottom">
        <h5 className="card-header-title">Website Settings</h5>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(() => {})} className="row g-4 align-items-center">
          <TextFormInput
            name="name"
            label="Site Name"
            placeholder="Site Name"
            helpText="Enter Website Name"
            containerClass="col-xl-6"
            control={control}
          />

          <TextFormInput
            name="copyRight"
            label="Site Copyrights"
            placeholder="Site Copyrights"
            helpText="Using for Contact and Send Email"
            containerClass="col-xl-6"
            control={control}
          />

          <TextFormInput
            name="email"
            label="Site Email"
            placeholder="Site Email"
            helpText="For Copyrights Text"
            containerClass="col-12"
            control={control}
          />

          <TextAreaFormInput
            name="description"
            label="Site Description"
            helpText="For write brief description of your organization, or a Website."
            containerClass="col-12"
            rows={3}
            control={control}
          />

          <TextFormInput
            name="phone"
            label="Contact Phone"
            placeholder="Contact Phone"
            helpText="Using for Contact and Support"
            containerClass="col-lg-6"
            control={control}
          />

          <TextFormInput
            name="supportEmail"
            label="Support Email"
            placeholder="Support Email"
            helpText="For Support Email"
            containerClass="col-lg-6"
            control={control}
          />

          <Col lg={6}>
            <label className="form-label">Allow Registration</label>
            <div className="d-sm-flex">
              <div className="form-check radio-bg-light me-4">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Enable
                </label>
              </div>

              <div className="form-check radio-bg-light me-4">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Disable
                </label>
              </div>

              <div className="form-check radio-bg-light">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  On Request
                </label>
              </div>
            </div>
          </Col>

          <TextAreaFormInput
            name="address"
            label="Contact Address"
            helpText="Enter support Address"
            containerClass="col-12"
            rows={3}
            control={control}
          />

          <div className="d-sm-flex justify-content-end">
            <Button variant="primary" type="submit" className="mb-0">
              Update
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}

export default WebsiteSettings
