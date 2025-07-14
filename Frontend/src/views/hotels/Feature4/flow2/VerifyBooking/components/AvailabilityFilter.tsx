import { SelectFormInput, TextFormInput } from '@/components'
import { useState } from 'react'
import { Button, Col, Container, Dropdown, DropdownDivider, DropdownMenu, DropdownToggle, Image, Row } from 'react-bootstrap'
import { BsCalendar, BsDashCircle, BsGeoAlt, BsPlusCircle } from 'react-icons/bs'
import { FaToriiGate } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'

import backgroundImg from '@/assets/images/bg/09.jpg'
import decoration from '@/assets/images/element/decoration.svg'
import Flatpicker from '@/components/Flatpicker'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

type AvailabilityFormType = {
  guests: {
    adults: number
    children: number
    rooms: number
  }
}

const AvailabilityFilter = () => {
  const initialValue: AvailabilityFormType = {
    guests: {
      adults: 2,
      rooms: 1,
      children: 0,
    },
  }

  const [formValue, setFormValue] = useState<AvailabilityFormType>(initialValue)

  const updateGuests = (type: keyof AvailabilityFormType['guests'], increase: boolean = true) => {
    const val = formValue.guests[type]
    setFormValue({
      ...formValue,
      guests: {
        ...formValue.guests,
        [type]: increase ? val + 1 : val > 1 ? val - 1 : 0,
      },
    })
  }

  const getGuestsValue = (): string => {
    let value = ''
    const guests = formValue.guests
    if (guests.adults) {
      value += guests.adults + (guests.adults > 1 ? ' Adults ' : ' Adult ')
    }
    if (guests.children) {
      value += guests.children + (guests.children > 1 ? ' Children ' : ' Child ')
    }
    if (guests.rooms) {
      value += guests.rooms + (guests.rooms > 1 ? ' Rooms ' : ' Room ')
    }
    return value
  }

  const { control } = useForm()
  
  return (
    <section className="position-relative">
      <div className="position-absolute top-50 start-0 translate-middle-y d-none d-md-block">
        <Image src={decoration} />
      </div>
      <Container>
        <Row className="g-4 g-lg-5 align-items-center">
          <Col lg={6} className="position-relative">
            <h6 className="text-uppercase">🤩 Easy Way To manage your bookings</h6>
            <h1 className="mb-2">Managed Your Bookings Now!</h1>
            <p className="mb-4">Users do not need to create a login account to access their hotel booking. 
              Simply enter the Booking ID along with the main guest’s email address used during the reservation, 
              and you will be able to view and make amendments to your booking directly through this page.</p>
            <form className="row g-4">
              <Col xs={12}>
                <TextFormInput
                  name="BookingID"
                  type="text"
                  label="Booking ID"
                  control={control}
                  placeholder="Enter your booking ID"
                  className="form-control-lg"
                  containerClass="col-md-12"
                />
              </Col>
              <Col xs={12}>
                <TextFormInput
                  name="Email"
                  type="text"
                  label="Email"
                  control={control}
                  placeholder="Enter your email"
                  className="form-control-lg"
                  containerClass="col-md-12"
                />
              </Col>
              <div className="col-12">
                <Link to="/hotels/Display-Booking" className="btn btn-primary w-100 mb-0">
                      Retrieve Booking
                </Link>
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
