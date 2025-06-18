import { TextFormInput } from '@/components'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Card, CardBody, CardHeader } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import * as yup from 'yup'

const SocialMediaProfile = () => {
  const socialMediaSchema = yup.object({
    facebook: yup.string().required('Please enter your facebook username'),
    twitter: yup.string().required('Please enter your twitter username'),
    instagram: yup.string().required('Please enter your instagram username'),
    youtubeUrl: yup.string().required('Please enter your youtube url'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(socialMediaSchema),
    defaultValues: {
      facebook: 'loristev',
      twitter: 'loristev',
      instagram: 'loristev',
      youtubeUrl: 'https://www.youtube.com/in/Booking-05620abc',
    },
  })

  return (
    <Card className="border rounded-3">
      <CardHeader className="border-bottom">
        <h5 className="card-header-title">Social media profile</h5>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(() => {})}>
          <div className="mb-3">
            <label className="form-label items-center">
              <FaFacebook className="text-facebook me-2" />
              Enter facebook username
            </label>
            <TextFormInput name="facebook" placeholder="Enter username" control={control} combinedInput />
          </div>
          <div className="mb-3">
            <label className="form-label items-center">
              <BsTwitter className="text-twitter me-2" />
              Enter twitter username
            </label>
            <TextFormInput name="twitter" placeholder="Enter username" control={control} combinedInput />
          </div>
          <div className="mb-3">
            <label className="form-label items-center">
              <span className="me-2">
                <svg width="16px" height="14px" viewBox="0 0 2500 2500" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="0" cx="332.14" cy="2511.81" r="3263.54" gradientUnits="userSpaceOnUse">
                      <stop offset=".09" stopColor="#fa8f21" />
                      <stop offset=".78" stopColor="#d82d7e" />
                    </radialGradient>
                    <radialGradient id="1" cx="1516.14" cy="2623.81" r="2572.12" gradientUnits="userSpaceOnUse">
                      <stop offset=".64" stopColor="#8c3aaa" stopOpacity="0" />
                      <stop offset="1" stopColor="#8c3aaa" />
                    </radialGradient>
                  </defs>
                  <path
                    d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57"
                    fill="url(#0)"
                  />
                  <path
                    d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57"
                    fill="url(#1)"
                  />
                </svg>
              </span>
              Enter instagram username
            </label>
            <TextFormInput name="instagram" placeholder="Enter username" control={control} combinedInput />
          </div>
          <div className="mb-3">
            <label className="form-label items-center">
              <FaYoutube className="text-youtube me-2" />
              Add your youtube profile URL
            </label>
            <TextFormInput name="youtubeUrl" placeholder="Enter url" control={control} combinedInput />
          </div>
          <div className="d-flex justify-content-end mt-4">
            <Button variant="primary" type="submit" className="mb-0">
              Save change
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}

export default SocialMediaProfile
