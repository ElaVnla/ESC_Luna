import { PasswordFormInput, TextFormInput } from '@/components'
import { Col } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

import signInImg from '@/assets/images/element/signin.svg'
import logoIcon from '@/assets/images/logo-icon.svg'
import { developedByLink, currentYear } from '@/states'

const SignUp = () => {

  const { control, handleSubmit } = useForm()

  return (
    <>
      <Col lg={6} className="d-md-flex align-items-center order-2 order-lg-1">
        <div className="p-3 p-lg-5">
          <img src={signInImg} />
        </div>

        <div className="vr opacity-1 d-none d-lg-block" />
      </Col>

      <Col lg={6} className="order-1">
        <div className="p-4 p-sm-6">
          <Link to="/">
            <img className="h-50px mb-4" src={logoIcon} alt="logo" />
          </Link>

          <h1 className="mb-2 h3">Create new account</h1>
          <p className="mb-0">
            Already a member?<Link to="/auth/sign-in"> Log in</Link>
          </p>

          <form onSubmit={handleSubmit(() => {})} className="mt-4 text-start">
            <TextFormInput name="email" containerClass="mb-3" label="Enter email id" type="email" control={control} />

            <PasswordFormInput name="password" containerClass="mb-3" label="Enter password" control={control} />

            <PasswordFormInput name="confirmPassword" containerClass="mb-3" label="Confirm password" control={control} />

            <div className="mb-3">
              <input type="checkbox" className="form-check-input me-1" id="rememberCheck" />
              <label className="form-check-label" htmlFor="rememberCheck">
                Keep me signed in
              </label>
            </div>

            <div>
              <button type="submit" className="btn btn-primary w-100 mb-0">
                Sign up
              </button>
            </div>

            <div className="position-relative my-4">
              <hr />
              <p className="small position-absolute top-50 start-50 translate-middle bg-mode px-1 px-sm-2">Or sign in with</p>
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

export default SignUp
