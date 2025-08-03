import { useEffect, useState, KeyboardEvent } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import forgotPassImg from '@/assets/images/element/forgot-pass.svg';
import logoIcon from '@/assets/images/logo-icon.svg';
import { developedByLink, currentYear } from '@/states';

type HandleInputChangeType = (id: OTPInputProps['id'], value: OTPInputProps['value']) => void;

type OTPInputProps = {
  id: string;
  previousId: string;
  nextId: string;
  value: string;
  onValueChange: HandleInputChangeType;
};

const OTPInput = ({ id, previousId, nextId, value, onValueChange }: OTPInputProps) => {
  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    const isNumberInput = /^[0-9]$/.test(e.key);
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

const TwoFactorAuth = () => {
  const [inputValues, setInputValues] = useState({
    input1: '', input2: '', input3: '', input4: '', input5: ''
  });

  const [email, setEmail] = useState<string | null>(null);
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [otpError, setOtpError] = useState('');
  const navigate = useNavigate();

  const handleInputChange: HandleInputChangeType = (id, value) => {
    setInputValues((prev) => ({ ...prev, [id]: value }));
  };

  useEffect(() => {
    const stored = sessionStorage.getItem('pendingBooking');
    if (stored) {
      const { email, bookingId } = JSON.parse(stored);
      setEmail(email);
      setBookingId(bookingId);

      fetch('http://localhost:3000/email/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      }).catch((err) => console.error('OTP send error:', err));
    }
  }, []);

  // const handleVerify = async () => {
  //   const otp = Object.values(inputValues).join('');
  //   if (!email || !bookingId || otp.length !== 5) {
  //     setOtpError('Please enter all 5 digits');
  //     return;
  //   }

  //   try {
  //     const res = await fetch('http://localhost:3000/email/verify-otp', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ email, otp }),
  //     });

  //     const result = await res.json();

  //     if (!result.verified) {
  //       setOtpError('Incorrect OTP. Please try again.');
  //       return;
  //     }

  //     // ✅ OTP verified → go to display page
  //     navigate('/hotels/display-booking');
  //   } catch (err) {
  //     console.error('OTP verify error:', err);
  //     setOtpError('Something went wrong. Please try again.');
  //   }
  // };

  const handleVerify = async () => {
    const otp = Object.values(inputValues).join('');
    if (!email || !bookingId || otp.length !== 5) {
      setOtpError('Please enter all 5 digits');
      return;
    }
  
    try {
      const res = await fetch('http://localhost:3000/email/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });
  
      const result = await res.json();
  
      if (!result.verified) {
        setOtpError('Incorrect OTP. Please try again.');
        return;
      }
  
      // ✅ OTP verified → save and go to display page
      sessionStorage.setItem('display_booking_info', JSON.stringify({ bookingId, email }));
      navigate('/hotels/display-booking');
      
    } catch (err) {
      console.error('OTP verify error:', err);
      setOtpError('Something went wrong. Please try again.');
    }
  };
  

  const handleResendOTP = () => {
    if (email) {
      fetch('http://localhost:3000/email/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      }).catch((err) => console.error('Resend error:', err));
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-4 mb-4">
        <Col xs={12}>
          <Card className="border-0">
            <Row>
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
                    We have sent a code to <b>{email || '[unknown email]'}</b>
                  </p>

                  <form onSubmit={(e) => e.preventDefault()} className="mt-sm-4">
                    <p className="mb-1">Enter the 5-digit code:</p>
                    <div className="d-flex justify-content-between gap-1 gap-sm-3 mb-2">
                      {(['input1', 'input2', 'input3', 'input4', 'input5'] as const).map((id, idx, arr) => (
                        <OTPInput
                          key={id}
                          id={id}
                          previousId={arr[Math.max(0, idx - 1)]}
                          nextId={arr[Math.min(arr.length - 1, idx + 1)]}
                          value={inputValues[id]}
                          onValueChange={handleInputChange}
                        />
                      ))}
                    </div>

                    {otpError && <p className="text-danger small">{otpError}</p>}

                    <div className="d-sm-flex justify-content-between small mb-4">
                      <span>Didn't receive a code?</span>
                      <Button variant="link" className="btn-sm p-0 text-decoration-underline mb-0" onClick={handleResendOTP}>
                        Click to resend
                      </Button>
                    </div>

                    <div>
                      <Button className="btn btn-primary w-100 mb-0" onClick={handleVerify}>
                        Verify and proceed
                      </Button>
                    </div>

                    <div className="text-primary-hover mt-3 text-center">
                      Copyrights ©{currentYear} Booking. Built by{' '}
                      <a href={developedByLink} target="_blank" className="text-body">
                        StackBros
                      </a>
                      .
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

export default TwoFactorAuth;
