import { useEffect, useState, KeyboardEvent } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import forgotPassImg from '@/assets/images/element/forgot-pass.svg';
import logoIcon from '@/assets/images/logo-icon.svg';
import { developedByLink, currentYear } from '@/states';
import { useWizard } from 'react-use-wizard';

type HandleInputChangeType = (id: OTPInputProps['id'], value: OTPInputProps['value']) => void;

type OTPInputProps = {
  id: string;
  previousId: string;
  nextId: string;
  value: string;
  onValueChange: HandleInputChangeType;
};

const API_BASE = import.meta.env.VITE_API_BASE || '/api'; // default to /api

// OTP input field for each digit
const OTPInput = ({ id, previousId, nextId, value, onValueChange }: OTPInputProps) => {
  // Handle keyboard navigation between OTP fields
  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    const isNumberInput = Number(e.key) >= 0 && Number(e.key) <= 9;
    if (e.code === 'Backspace' || e.code === 'ArrowLeft') {
      const prev = document.getElementById(previousId);
      if (prev) prev.focus();
    } else if (isNumberInput) {
      const next = document.getElementById(nextId);
      if (next) next.focus();
    }
  };

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
  );
};

// Two-factor authentication component for verifying email with OTP
const VerifyEmail = () => {
  const [email, setEmail] = useState('');
  const [sendStatus, setSendStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
  });
  const [otpError, setOtpError] = useState('');
  const [verifying, setVerifying] = useState(false);
  const { previousStep, nextStep } = useWizard();

  // Handle OTP input change
  const handleInputChange: HandleInputChangeType = (inputId, value) => {
    setInputValues((prev) => ({ ...prev, [inputId]: value }));
  };

  // Load guest email from sessionStorage and send OTP on mount
  useEffect(() => {
    const guestData = sessionStorage.getItem('hotel_guest_info');
    if (!guestData) return;

    try {
      const parsed = JSON.parse(guestData);
      const customerEmail = parsed?.customer?.email;

      if (customerEmail) {
        setEmail(customerEmail);
        sendOTP(customerEmail);
      }
    } catch (err) {
      console.error('Error parsing guest info from sessionStorage:', err);
    }
  }, []);

  // Send OTP to email
  const sendOTP = async (email: string) => {
    setSendStatus('sending');
    try {
      const res = await fetch(`${API_BASE}/email/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      setSendStatus(res.ok ? 'success' : 'error');
    } catch (err) {
      console.error('Failed to send OTP:', err);
      setSendStatus('error');
    }
  };

  // Handle OTP verification
  const handleVerify = async () => {
    const enteredOtp = Object.values(inputValues).join('');
    if (enteredOtp.length !== 5) {
      setOtpError('Please enter the full 5-digit code.');
      return;
    }

    setVerifying(true);
    setOtpError('');

    try {
      const res = await fetch(`${API_BASE}/email/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp: enteredOtp }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setOtpError(errorData.message || 'Server error. Please try again.');
        return;
      }

      const data = await res.json();
      if (!data.verified) {
        setOtpError('Invalid code. Please try again.');
        return;
      }

      // OTP verified successfully — advance to the next wizard step (Payment)
      await nextStep();
    } catch (err) {
      console.error('Error verifying OTP:', err);
      setOtpError('An error occurred. Please try again.');
    } finally {
      setVerifying(false);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-4 mb-4">
        <Col xs={12}>
          <Card className="border-0">
            <Row>
              {/* Illustration section */}
              <Col lg={6} className="d-md-flex align-items-center order-2 order-lg-1">
                <div className="p-3 p-lg-5">
                  <img src={forgotPassImg} alt="Forgot password illustration" />
                </div>
                <div className="vr opacity-1 d-none d-lg-block" />
              </Col>

              {/* OTP input and instructions */}
              <Col lg={6} className="order-1">
                <div className="p-4 p-sm-7">
                  <Link to="/">
                    <img className="mb-4 h-50px" src={logoIcon} alt="logo" />
                  </Link>
                  <h1 className="mb-2 h3">Two factor authentication</h1>
                  <p className="mb-sm-0">
                    We have sent a code to <b>{email || 'your email'}</b>
                  </p>

                  {sendStatus === 'sending' && <p className="text-muted small">Sending code...</p>}
                  {sendStatus === 'error' && <p className="text-danger small">Failed to send OTP. Please try again.</p>}
                  {sendStatus === 'success' && <p className="text-success small">OTP sent successfully!</p>}

                  <form onSubmit={(e) => e.preventDefault()} className="mt-sm-4">
                    <p className="mb-1">Enter the code we sent you:</p>
                    <div className="d-flex justify-content-between gap-1 gap-sm-3 mb-2">
                      <OTPInput id="input1" previousId="input1" nextId="input2" value={inputValues.input1} onValueChange={handleInputChange} />
                      <OTPInput id="input2" previousId="input1" nextId="input3" value={inputValues.input2} onValueChange={handleInputChange} />
                      <OTPInput id="input3" previousId="input2" nextId="input4" value={inputValues.input3} onValueChange={handleInputChange} />
                      <OTPInput id="input4" previousId="input3" nextId="input5" value={inputValues.input4} onValueChange={handleInputChange} />
                      <OTPInput id="input5" previousId="input4" nextId="input5" value={inputValues.input5} onValueChange={handleInputChange} />
                    </div>

                    {/* Show OTP error if present */}
                    {otpError && <p className="text-danger small">{otpError}</p>}

                    <div className="d-sm-flex justify-content-between small mb-4">
                      <span>Didn't receive a code?</span>
                      <button
                        type="button"
                        className="btn btn-sm btn-link p-0 text-decoration-underline mb-0"
                        onClick={() => sendOTP(email)}
                      >
                        Click to resend
                      </button>
                    </div>

                    <div className="d-flex gap-2">
                      {/* Button to go back to previous step */}
                      <button type="button" className="btn btn-secondary w-50 mb-0" onClick={previousStep}>
                        Back
                      </button>
                      {/* Button to verify OTP and proceed */}
                      <button
                        type="button"
                        className="btn btn-primary w-50 mb-0"
                        onClick={handleVerify}
                        disabled={verifying}
                      >
                        {verifying ? 'Verifying...' : 'Verify and proceed'}
                      </button>
                    </div>

                    <div className="text-primary-hover mt-3 text-center">
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VerifyEmail;
