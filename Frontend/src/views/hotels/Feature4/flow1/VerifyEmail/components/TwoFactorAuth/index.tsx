import { useEffect, useState, KeyboardEvent } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
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
  const navigate = useNavigate();

  const handleInputChange: HandleInputChangeType = (inputId, value) => {
    setInputValues((prev) => ({ ...prev, [inputId]: value }));
  };

  useEffect(() => {
    const payload = sessionStorage.getItem('booking_payload');
    if (!payload) return;

    try {
      const parsed = JSON.parse(payload);
      const customerEmail = parsed?.customer?.email;

      if (customerEmail) {
        setEmail(customerEmail);
        sendOTP(customerEmail); // Always send OTP when screen opens
      }
    } catch (err) {
      console.error('Error parsing payload from sessionStorage:', err);
    }
  }, []);

  const sendOTP = async (email: string) => {
    setSendStatus('sending');
    try {
      const res = await fetch('http://localhost:3000/email/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) setSendStatus('success');
      else setSendStatus('error');
    } catch (err) {
      console.error('Failed to send OTP:', err);
      setSendStatus('error');
    }
  };

  const handleVerify = async () => {
    const enteredOtp = Object.values(inputValues).join('');
    if (enteredOtp.length !== 5) {
      setOtpError('Please enter the full 5-digit code.');
      return;
    }

    setVerifying(true);
    setOtpError('');

    try {
      // Step 1: Verify OTP
      const res = await fetch('http://localhost:3000/email/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp: enteredOtp }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setOtpError(errorData.message || 'Server error. Please try again.');
        setVerifying(false);
        return;
      }

      const data = await res.json();
      if (!data.verified) {
        setOtpError('Invalid code. Please try again.');
        setVerifying(false);
        return;
      }

      // Step 2: Create booking
      const storedPayload = sessionStorage.getItem('booking_payload');
      if (!storedPayload) throw new Error('Missing booking payload');

      const raw = JSON.parse(storedPayload);
      const payload = {
        ...raw,
        booking: {
          ...raw.booking,
          destination_id: raw.booking.destination_id || 'sg01',
          hotel_id: raw.booking.hotel_id || 'diH7',
          room_id: raw.booking.room_id || 'rm01',
          start_date: raw.booking.start_date || '2025-01-01',
          end_date: raw.booking.end_date || '2025-01-03',
          price: raw.booking.price || 999.99,
          currency: raw.booking.currency || "SGD"
        },
        guests: raw.guests || [],
      };

      const bookingRes = await fetch('http://localhost:3000/bookings/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!bookingRes.ok) throw new Error('Booking failed');
      const confirmed = await bookingRes.json();
      console.log("BOOKING DONE, VALUE: ", bookingRes)
      //   const confirmedBooking = {
      //   hotel: {
      //     name: raw.selectedHotel?.name,
      //     address: raw.selectedHotel?.address,
      //     rating: raw.selectedHotel?.rating,
      //     amenities: Object.keys(raw.selectedHotel?.amenities || {}),
      //     image_url: raw.selectedHotel?.cloudflare_image_url || '',
      //     description: raw.selectedHotel?.description,
      //   },
      //   room: {
      //     name: raw.selectedRoom?.type || raw.selectedRoom?.roomNormalizedDescription || 'Standard Room',
      //     amenities: raw.selectedRoom?.amenities,
      //     price: raw.selectedRoom?.price,
      //   },
      //   customer: raw.customer,
      //   mainGuest: {
      //     title: raw.customer?.title || 'Mr',
      //     firstName: raw.customer?.first_name,
      //     lastName: raw.customer?.last_name,
      //     country: raw.customer?.country,
      //     email: raw.customer?.email,
      //     mobile: raw.customer?.phone_number,
      //   },
      //   booking: confirmed.booking, // ✅ confirmed backend booking object replaces draft
      //   guests: raw.guests || [],
      //   price: {
      //     roomCharges: raw.selectedRoom?.price,
      //     discountAmount: 2560,
      //     discountLabel: '10% off',
      //     priceAfterDiscount: raw.selectedRoom?.price,
      //     taxesAndFees: 350,
      //     totalPaid: raw.selectedRoom?.price || 0,
      //   },
      //   payment: {
      //     payment_reference: `PAY-${Date.now()}`,
      //     masked_card_number:
      //       raw.cardNo?.toString().slice(-4).
      //       padStart(16, '*') || '**** **** **** 1234',
      //   },
      //   specialRequests: raw.specialRequests || '',
      // };


      //     sessionStorage.setItem('confirmed_booking', JSON.stringify(confirmedBooking));

      //   console.log('✅ Booking Payload Sent:', payload);
      //   console.log('✅ Booking Created:', confirmed);

      // Construct simplified summary
      const bookingSummary = {
        bookingId: confirmed || 'N/A',
        checkIn: raw.booking?.start_date || 'N/A',
        checkOut: raw.booking?.end_date || 'N/A',
        roomName: raw.booking?.adults + " adults " + raw.booking?.children + " child" || "0 adult 0 child",
        totalPrice: raw.booking?.price || 'N/A',
      };

      // Save summary to sessionStorage
      sessionStorage.setItem('booking_summary', JSON.stringify(bookingSummary));

      console.log("START DATE: ", confirmed.booking?.start_date)
      console.log("END DATE: ", confirmed.booking?.end_date)
      console.log("BOOKING ID: ",confirmed.booking_reference)
      console.log("inside booking variable: ", confirmed);

      await fetch('http://localhost:3000/email/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          booking: {
            hotel: {
              name: raw.hotel?.name,
              address: raw.hotel?.address,
            },
            booking: {
              start_date: raw.booking?.start_date || 'N/A',
              end_date: raw.booking?.end_date || 'N/A',
            },
            guests: {
              adults: raw.booking?.adults || 1,
              children: raw.booking?.children || 0,
            },
            price: {
              totalPaid: raw.selectedRoom?.price || 0,
            },
            mainGuest: {
              email: raw.customer?.email,
            },
            booking_reference: confirmed.booking_reference || 'N/A', // ✅ from backend
          }
        }),
      });




      navigate('/hotels/confirmed-booking');
    } catch (err) {
      console.error('❌ Error during booking:', err);
      setOtpError('An error occurred');
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

                    <div>
                      <button
                        type="button"
                        className="btn btn-primary w-100 mb-0"
                        onClick={handleVerify}
                        disabled={verifying}
                      >
                        {verifying ? 'Verifying...' : 'Verify and proceed'}
                      </button>
                    </div>

                    <div className="text-primary-hover mt-3 text-center">
                      Copyrights ©{currentYear} Booking. Build by{' '}
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

export default VerifyEmail;
