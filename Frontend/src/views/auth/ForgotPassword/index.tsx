import { TextFormInput } from '@/components'
import { yupResolver } from '@hookform/resolvers/yup'
import { Col } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

import forgotPassImg from '@/assets/images/element/forgot-pass.svg'
import logoIcon from '@/assets/images/logo-icon.svg'
import { developedByLink, currentYear } from '@/states'

const ForgotPassword = () => {
  const forgotPassFormSchema = yup.object({
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(forgotPassFormSchema),
  })

  return (
    <>
      <Col lg={6} className="d-md-flex align-items-center order-2 order-lg-1">
        <div className="p-3 p-lg-5">
          <img src={forgotPassImg} />
        </div>

        <div className="vr opacity-1 d-none d-lg-block" />
      </Col>

      <Col lg={6} className="order-1">
        <div className="p-4 p-sm-7">
          <Link to="/">
            <img className="mb-4 h-50px" src={logoIcon} alt="logo" />
          </Link>

          <h1 className="mb-2 h3">Forgot password?</h1>
          <p className="mb-sm-0">Enter the email address associated with an account.</p>

          <form onSubmit={handleSubmit(() => {})} className="mt-sm-4 text-start">
            <TextFormInput name="email" containerClass="mb-3" label="Enter email id" type="email" control={control} />

            <div className="mb-3 text-center">
              <p>
                Back to <Link to="/auth/sign-in">Sign in</Link>
              </p>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Reset Password
              </button>
            </div>

            <div className="position-relative my-4">
              <hr />
              <p className="small position-absolute top-50 start-50 translate-middle bg-mode px-2">Or sign in with</p>
            </div>

            <div className="vstack gap-3">
              <button type="button" className="btn btn-light mb-0">
                <FcGoogle size={16} className="fab fa-fw me-2" />
                Continue with Google
              </button>
              <button type="button" className="btn btn-light mb-0">
                <FaFacebookF size={16} className="fab fa-fw text-facebook me-2" />
                Continue with Facebook
              </button>
            </div>

            <div className="text-primary-hover text-body mt-3 text-center">
              {' '}
              Copyrights ©{currentYear} Booking. Build by{' '}
              <a href={developedByLink} target="_blank" className="text-body">
                StackBros
              </a>
              .{' '}
            </div>
          </form>
        </div>
      </Col>
    </>
  )
}

export default ForgotPassword
