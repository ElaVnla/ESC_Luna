import { SelectFormInput } from '@/components'
import Flatpicker from '@/components/Flatpicker'
import { useState } from 'react'
import { Button, CardBody, CardHeader, Col, Dropdown, DropdownDivider, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'
import { BsArrowRight, BsCalendar, BsDashCircle, BsPeople, BsPlusCircle, BsSearch } from 'react-icons/bs'
import { FaHotel } from 'react-icons/fa'

type AvailabilityFormType = {
  guests: {
    adults: number
    children: number
    rooms: number
  }
}

const Hotel = () => {
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

  return (
    <form className="card shadow p-0">
      <CardHeader className="p-4">
        <h5 className="mb-0">
          <FaHotel size={22} className="fa-fw me-2" />
          Hotel Booking
        </h5>
      </CardHeader>
      <CardBody className="p-4 pt-0">
        <Row className="g-4">
          <Col xs={12}>
            <div className="form-icon-input form-size-lg form-fs-lg">
              <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                <option value={-1}>Search hotel</option>
                <option>San Jacinto, USA</option>
                <option>North Dakota, Canada</option>
                <option>West Virginia, Paris</option>
              </SelectFormInput>
              <span className="form-icon">
                <BsSearch className="mb-1" size={21} />
              </span>
            </div>
          </Col>
          <Col lg={4}>
            <div className="form-icon-input form-fs-lg position-relative">
              <Dropdown className="guest-selector me-2">
                <DropdownToggle
                  as="input"
                  className="arrow-none form-guest-selector form-control form-control-lg selection-result"
                  placeholder="Select occupant"
                  value={getGuestsValue()}
                  onChange={()=>{}}
                />
                <DropdownMenu className="guest-selector-dropdown">
                  <li className="d-flex justify-content-between">
                    <div>
                      <h6 className="mb-0">Adults</h6>
                      <small>Ages 13 or above</small>
                    </div>
                    <div className="hstack gap-1 align-items-center">
                      <Button variant="link" className="adult-remove p-0 mb-0" onClick={() => updateGuests('adults', false)}>
                        <BsDashCircle className=" fs-5 fa-fw" />
                      </Button>
                      <h6 className="guest-selector-count mb-0 adults">{formValue.guests.adults ?? 0}</h6>
                      <Button variant="link" className="adult-add p-0 mb-0" onClick={() => updateGuests('adults')}>
                        <BsPlusCircle className=" fs-5 fa-fw" />
                      </Button>
                    </div>
                  </li>
                  <DropdownDivider />
                  <li className="d-flex justify-content-between">
                    <div>
                      <h6 className="mb-0">Child</h6>
                      <small>Ages 13 below</small>
                    </div>
                    <div className="hstack gap-1 align-items-center">
                      <Button
                        variant="link"
                        type="button"
                        className="btn btn-link child-remove p-0 mb-0"
                        onClick={() => updateGuests('children', false)}
                      >
                        <BsDashCircle className="  fs-5 fa-fw" />
                      </Button>
                      <h6 className="guest-selector-count mb-0 child">{formValue.guests.children ?? 0}</h6>
                      <Button variant="link" type="button" className="btn btn-link child-add p-0 mb-0" onClick={() => updateGuests('children')}>
                        <BsPlusCircle className=" fs-5 fa-fw" />
                      </Button>
                    </div>
                  </li>
                  <DropdownDivider />
                  <li className="d-flex justify-content-between">
                    <div>
                      <h6 className="mb-0">Rooms</h6>
                      <small>Max room 8</small>
                    </div>
                    <div className="hstack gap-1 align-items-center">
                      <Button variant="link" type="button" className="room-remove p-0 mb-0" onClick={() => updateGuests('rooms', false)}>
                        <BsDashCircle className=" fs-5 fa-fw" />
                      </Button>
                      <h6 className="guest-selector-count mb-0 rooms">{formValue.guests.rooms ?? 0}</h6>
                      <Button variant="link" type="button" className="btn btn-link room-add p-0 mb-0" onClick={() => updateGuests('rooms')}>
                        <BsPlusCircle className=" fs-5 fa-fw" />
                      </Button>
                    </div>
                  </li>
                </DropdownMenu>
              </Dropdown>
              <span className="form-icon">
                <div>
                  <BsPeople size={21} className=" mb-1" />
                </div>
              </span>
            </div>
          </Col>
          <Col lg={4}>
            <div className="form-icon-input form-fs-lg">
              <Flatpicker className="form-control-lg" options={{ dateFormat: 'd M y' }} placeholder="Select check-in date" />
              <span className="form-icon">
                <div>
                  <BsCalendar size={21} className=" mb-1" />
                </div>
              </span>
            </div>
          </Col>
          <Col lg={4}>
            <div className="form-icon-input form-fs-lg">
              <Flatpicker className="form-control-lg" options={{ dateFormat: 'd M y' }} placeholder="Select check-out date" />
              <span className="form-icon me-1">
                <div>
                  <BsCalendar size={21} className=" mb-1" />
                </div>
              </span>
            </div>
          </Col>
        </Row>
        <div className="text-center pt-0">
          <button className="btn btn-lg btn-primary mb-n7">
            <span className="items-center">
              Search Hotel <BsArrowRight className=" ms-3" />
            </span>
          </button>
        </div>
      </CardBody>
    </form>
  )
}

export default Hotel
