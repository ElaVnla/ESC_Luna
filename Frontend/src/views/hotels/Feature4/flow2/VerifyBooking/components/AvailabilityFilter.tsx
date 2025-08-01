import { TextFormInput } from '@/components'
import { useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import backgroundImg from '@/assets/images/bg/09.jpg'
import decoration from '@/assets/images/element/decoration.svg'

type FormFields = {
  BookingID: string
  Email: string
}

const AvailabilityFilter = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormFields>()

  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()

  const onSubmit = async (data: FormFields) => {
    console.log(' onSubmit called with:', data)

    try {
      const res = await fetch('http://localhost:3000/customers/verify-book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bookingId: data.BookingID.trim(),
          email: data.Email.trim().toLowerCase()
        }),
      })

      if (!res.ok) {
        console.error(' Backend responded with status:', res.status)
        setErrorMsg('Booking not found. Please check your Booking ID and Email.')
        return
      }

      const response = await res.json()

      if (response.valid) {
        sessionStorage.setItem('pendingBooking', JSON.stringify({
          bookingId: data.BookingID,
          email: data.Email,
        }))
        navigate('/hotels/verify-email-booking')
      } else {
        setErrorMsg('Booking not found. Please check your Booking ID and Email.')
      }
    } catch (error) {
      console.error(' Booking verification error:', error)
      setErrorMsg('Booking not found. Please check your Booking ID and Email.')
    }
  }

  return (
    <section className="position-relative">
      <div className="position-absolute top-50 start-0 translate-middle-y d-none d-md-block">
        <Image src={decoration} />
      </div>
      <Container>
        <Row className="g-4 g-lg-5 align-items-center">
          <Col lg={6} className="position-relative">
            <h6 className="text-uppercase">Easy Way To manage your bookings</h6>
            <h1 className="mb-2">Manage Your Bookings Now!</h1>
            <p className="mb-4">
              Users do not need to create a login account to access their hotel booking. 
              Simply enter the Booking ID along with the main guest’s email address used during the reservation, 
              and you will be able to view and make amendments to your booking directly through this page.
            </p>

            <form className="row g-4" onSubmit={handleSubmit(onSubmit)}>
              <Col xs={12}>
                <Controller
                  name="BookingID"
                  control={control}
                  rules={{ required: 'Booking ID is required' }}
                  render={({ field }) => (
                    <TextFormInput
                      {...field}
                      control={control}
                      name="BookingID"
                      type="text"
                      label="Booking ID"
                      placeholder="Enter your booking ID"
                      className="form-control-lg"
                      containerClass="col-md-12"
                    />
                  )}
                />
              </Col>

              <Col xs={12}>
                <Controller
                  name="Email"
                  control={control}
                  rules={{ required: 'Email is required' }}
                  render={({ field }) => (
                    <TextFormInput
                      {...field}
                      control={control}
                      name="Email"
                      type="email"
                      label="Email"
                      placeholder="Enter your email"
                      className="form-control-lg"
                      containerClass="col-md-12"
                    />
                  )}
                />
              </Col>

              {errorMsg && (
                <div className="col-12 text-danger fw-bold">
                  {errorMsg}
                </div>
              )}

              <div className="col-12">
                <Button type="submit" className="btn btn-primary w-100 mb-0">
                  Retrieve Booking
                </Button>
              </div>
            </form>
          </Col>

          <div className="col-lg-6 position-relative">
            <Image src={backgroundImg} className="rounded" />
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default AvailabilityFilter
