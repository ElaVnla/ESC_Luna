import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Button, Card, CardBody, CardHeader, Col, Image, Row } from 'react-bootstrap'
import { TextFormInput } from '@/components'
import { Link } from 'react-router-dom'
import UpdateEmail from './UpdateEmail'
import UpdatePassword from './UpdatePassword'

import avatar1 from '@/assets/images/avatar/01.jpg'
import Flatpicker from '@/components/Flatpicker'

const EditProfile = () => {
  const profileSchema = yup.object({
    name: yup.string().required('Please enter your full name'),
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    mobileNo: yup.number().required('Please enter your mobile number'),
    location: yup.string().required('Please enter your location'),
  })
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      name: 'Jacqueline Miller',
      email: 'hello@gmail.com',
      mobileNo: 222555666,
      location: 'New Hampshire',
    },
  })
  return (
    <Row className="g-4">
      <Col xs={12}>
        <Card className="border">
          <CardHeader className="border-bottom">
            <h5 className="card-header-title">Edit Profile</h5>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit(() => {})}>
              <TextFormInput name="name" label="Name" placeholder="Name" containerClass="mb-3" control={control} />

              <div className="mb-3">
                <label className="form-label">Profile picture</label>
                <div className="d-flex align-items-center">
                  <label className="position-relative me-4" htmlFor="uploadfile-1" title="Replace this pic">
                    <span className="avatar avatar-xl">
                      <Image id="uploadfile-1-preview" className="avatar-img rounded-circle border border-white border-3 shadow" src={avatar1} />
                    </span>
                  </label>
                  <label className="btn btn-sm btn-primary-soft mb-0" htmlFor="uploadfile-1">
                    Change
                  </label>
                  <input id="uploadfile-1" className="form-control d-none" type="file" />
                </div>
              </div>
              <TextFormInput name="email" type="email" label="Email id" placeholder="Enter your email id" containerClass="mb-3" control={control} />
              <TextFormInput name="mobileNo" label="Mobile number" placeholder="Enter your mobile number" containerClass="mb-3" control={control} />
              <TextFormInput name="location" label="Location" containerClass="mb-3" control={control} />
              <div>
                <label className="form-label">Birthday</label>
                <Flatpicker placeholder="Enter your birth-date" options={{ dateFormat: 'd M Y', defaultDate:'29 Aug 1994' }} />
              </div>
              <div className="d-flex justify-content-end mt-4">
                <Link to="" className="btn text-secondary border-0 me-2">
                  Discard
                </Link>
                <Button variant="primary" type="submit">
                  Save change
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </Col>
      <Col md={6}>
        <UpdateEmail />
      </Col>
      <Col md={6}>
        <UpdatePassword />
      </Col>
    </Row>
  )
}

export default EditProfile
