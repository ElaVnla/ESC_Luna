import { TextFormInput } from '@/components'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Card, CardHeader, Image } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import logoIcon from '@/assets/images/logo-icon.svg'
import { Link } from 'react-router-dom'
import Flatpicker from '@/components/Flatpicker'

const ProfileSettings = () => {
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
    <Card className="shadow">
      <CardHeader className="border-bottom">
        <h5 className="card-header-title">Profile Settings</h5>
      </CardHeader>
      <form onSubmit={handleSubmit(() => {})} className="card-body">
        <TextFormInput name="name" label="Name" placeholder="Name" control={control} containerClass="mb-3" />

        <div className="mb-3">
          <label className="form-label">Profile picture</label>

          <div className="d-flex align-items-center">
            <label className="position-relative me-4" htmlFor="uploadfile-1" title="Replace this pic">
              <span className="avatar avatar-xl">
                <Image id="uploadfile-1-preview" className="avatar-img rounded-circle border border-white border-3 shadow" src={logoIcon} />
              </span>
            </label>

            <label className="btn btn-sm btn-primary-soft mb-0" htmlFor="uploadfile-1">
              Change
            </label>
            <input id="uploadfile-1" className="form-control d-none" type="file" />
          </div>
        </div>

        <TextFormInput name="email" label="Email id" placeholder="Enter your email id" control={control} containerClass="mb-3" />

        <TextFormInput name="mobileNo" label="Mobile number" placeholder="Enter your mobile number" control={control} containerClass="mb-3" />

        <TextFormInput name="location" label="Location" control={control} containerClass="mb-3" />

        <div>
          <label className="form-label">Birthday</label>
          <Flatpicker
            className="flatpickr-input"
            placeholder="Enter your birth-date"
            options={{ dateFormat: 'd M Y', defaultDate: '29 Aug 1994'}}
          />
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
    </Card>
  )
}

export default ProfileSettings
