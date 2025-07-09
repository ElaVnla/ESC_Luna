import { CheckFormInput, TextFormInput } from '@/components'
import { Button, CardBody, CardHeader } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaGoogle } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa6'

const BookingSignIn = () => {

  const { handleSubmit, control } = useForm()

  return (
    <form onSubmit={handleSubmit(() => {})} className="card border">
      <CardHeader className="border-bottom">
        <h5 className="card-title mb-0">Sign In Now To Book An Online </h5>
      </CardHeader>
      <CardBody>
        <TextFormInput
          name="email"
          label="Email id"
          placeholder="Enter your email"
          control={control}
          className="form-control-lg"
          containerClass="form-control-bg-light"
        />
        <TextFormInput
          name="mobileNo"
          label="Mobile number"
          placeholder="Enter your mobile number"
          control={control}
          className="form-control-lg"
          containerClass="mt-4 form-control-bg-light"
        />
        <CheckFormInput
          name="checkbox"
          type="checkbox"
          id="sign-in-book-online-checkbox"
          label="I Already Have Booking Account"
          containerClass="mt-4 form-check form-check-light mb-0"
          control={control}
        />
        <div className="d-grid mt-4">
          <Button type="submit" variant="primary" className="next-btn mb-0">
            Book as Guest
          </Button>
        </div>
        <div className="position-relative my-4">
          <hr />
          <p className="small position-absolute top-50 start-50 translate-middle bg-mode text-center">Or via social media</p>
        </div>
        <div className="d-grid gap-2 d-md-block text-center">
          <Button size="sm" className="bg-facebook mb-0 me-1" type="button">
            <FaFacebookF className="me-2" />
            Facebook
          </Button>
          <Button size="sm" className="bg-google mb-0" type="button">
            <FaGoogle className="me-2" />
            Google
          </Button>
        </div>
      </CardBody>
    </form>
  )
}

export default BookingSignIn
