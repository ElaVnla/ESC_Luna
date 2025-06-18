import { SelectFormInput } from '@/components'
import { useState } from 'react'
import { Button, Col, Container, Dropdown, DropdownDivider, DropdownMenu, DropdownToggle, Image, Row } from 'react-bootstrap'
import { BsCalendar, BsDashCircle, BsGeoAlt, BsPlusCircle } from 'react-icons/bs'
import { FaToriiGate } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'

import backgroundImg from '@/assets/images/bg/09.jpg'
import decoration from '@/assets/images/element/decoration.svg'
import Flatpicker from '@/components/Flatpicker'

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

  return (
    <section className="position-relative">
      <div className="position-absolute top-50 start-0 translate-middle-y d-none d-md-block">
        <Image src={decoration} />
      </div>
      <Container>
        <Row className="g-4 g-lg-5 align-items-center">
          <Col lg={6} className="position-relative">
            <h6 className="text-uppercase">🤩 Easy Way To Confirm Ticket</h6>
            <h1 className="mb-2">Book Your Tour Ticket Now!</h1>
            <p className="mb-4">Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.</p>
            <form className="row g-4">
              <Col xs={12}>
                <label className="small">Destination</label>
                <div className="form-border-bottom form-control-transparent d-flex align-items-center">
                  <div className="flex-shrink-0 me-2">
                    <BsGeoAlt className=" text-secondary d-block" />
                  </div>
                  <div className="flex-grow-1">
                    <div className="form-fs-lg">
                      <SelectFormInput className="form-select js-choice h5" data-search-enabled="true" aria-label=".form-select-sm">
                        <option value={-1}>Select location</option>
                        <option>San Jacinto, USA</option>
                        <option>North Dakota, Canada</option>
                        <option>West Virginia, Paris</option>
                      </SelectFormInput>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <label className="small">Check in</label>
                <div className="form-border-bottom form-control-transparent d-flex align-items-center">
                  <div>
                    <BsCalendar size={16} className=" text-secondary d-block me-2" />
                  </div>
                  <div className="form-fs-lg">
                    <Flatpicker options={{ dateFormat: 'd M Y' }} placeholder="Select Date" />
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <label className="small">Check Out</label>
                <div className="form-border-bottom form-control-transparent d-flex align-items-center">
                  <div>
                    <BsCalendar size={16} className=" text-secondary d-block me-2" />
                  </div>
                  <div className="form-fs-lg">
                    <Flatpicker options={{ dateFormat: 'd M Y' }} placeholder="Select Date" />
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <label className="small">Occupant</label>
                <div className="form-border-bottom form-control-transparent d-flex align-items-center">
                  <div>
                    <FaUserGroup size={16} className="text-secondary d-block me-2" />
                  </div>
                  <div className="form-fs-lg">
                    <Dropdown className="guest-selector me-2">
                      <DropdownToggle
                        as="input"
                        className="arrow-none form-guest-selector form-control form-fs-lg selection-result"
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
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <label className="small">Tour type</label>
                <div className="form-border-bottom form-control-transparent d-flex align-items-center">
                  <div className="flex-shrink-0 me-2">
                    <FaToriiGate className="text-secondary d-block" />
                  </div>
                  <div className="flex-grow-1">
                    <div className="form-fs-lg">
                      <SelectFormInput className="form-select js-choice h5" data-search-enabled="true" aria-label=".form-select-sm">
                        <option value={-1}>Select type</option>
                        <option>Adventure</option>
                        <option>Beach</option>
                        <option>Desert</option>
                        <option>History</option>
                      </SelectFormInput>
                    </div>
                  </div>
                </div>
              </Col>
              <div className="col-12">
                <Button variant="primary" className="w-100 mb-0">
                  Check Availability
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
