import { KeyboardEvent, useState } from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import forgotPassImg from '@/assets/images/element/forgot-pass.svg'
import logoIcon from '@/assets/images/logo-icon.svg'
import { developedByLink, currentYear } from '@/states'

type HandleInputChangeType = (id: OTPInputProps['id'], value: OTPInputProps['value']) => void

type OTPInputProps = {
  id: string
  previousId: string
  nextId: string
  value: string
  onValueChange: HandleInputChangeType
}

const OTPInput = ({ id, previousId, nextId, value, onValueChange }: OTPInputProps) => {
  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    const isNumberInput = Number(e.key) >= 0 && Number(e.key) <= 9
    if (e.code === 'Backspace' || e.code === 'ArrowLeft') {
      const prev = document.getElementById(previousId)
      if (prev) prev.focus()
    } else if (isNumberInput) {
      const next = document.getElementById(nextId)
      if (next) next.focus()
    }
  }

  return (
    <input
      id={id}
      name={id}
      type="text"
      className="form-control text-center p-3"
      value={value}
      maxLength={1}
      onChange={(e) => onValueChange(id, e.target.value)}
      onKeyUp={handleKeyUp}
    />
  )
}

const TwoFactorAuth = () => {
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
  })

  const handleInputChange: HandleInputChangeType = (inputId, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [inputId]: value,
    }))
  }

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
          <h1 className="mb-2 h3">Two factor authentication</h1>
          <p className="mb-sm-0">
            We have to send a code to <b>example@gmail.com</b>
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-sm-4">
            <p className="mb-1">Enter the code we have sent you:</p>
            <div className="d-flex justify-content-between gap-1 gap-sm-3 mb-2">
              <OTPInput id="input1" previousId="input1" nextId="input2" value={inputValues.input1} onValueChange={handleInputChange} />

              <OTPInput id="input2" previousId="input1" nextId="input3" value={inputValues.input2} onValueChange={handleInputChange} />

              <OTPInput id="input3" previousId="input2" nextId="input4" value={inputValues.input3} onValueChange={handleInputChange} />

              <OTPInput id="input4" previousId="input3" nextId="input5" value={inputValues.input4} onValueChange={handleInputChange} />

              <OTPInput id="input5" previousId="input4" nextId="input5" value={inputValues.input5} onValueChange={handleInputChange} />
            </div>
            <div className="d-sm-flex justify-content-between small mb-4">
              <span>Don't get a code?</span>
              <Link to="" className="btn btn-sm btn-link p-0 text-decoration-underline mb-0">
                Click to resend
              </Link>
            </div>
            <div>
              <button type="submit" className="btn btn-primary w-100 mb-0">
                Verify and Process
              </button>
            </div>
            <div className="text-primary-hover mt-3 text-center">
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

export default TwoFactorAuth
