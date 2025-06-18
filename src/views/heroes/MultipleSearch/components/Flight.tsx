import { SelectFormInput } from '@/components'
import Flatpicker from '@/components/Flatpicker'
import clsx from 'clsx'
import { useState } from 'react'
import { Button, CardBody, CardHeader, Col, Dropdown, DropdownDivider, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'
import { BsArrowRight, BsCalendar, BsDashCircle, BsGeoAlt, BsPeople, BsPlusCircle, BsSend } from 'react-icons/bs'
import { FaPlane } from 'react-icons/fa'
import { FaRightLeft } from 'react-icons/fa6'

type AvailabilityFormType = {
  guests: {
    adults: number
    children: number
    rooms: number
  }
}

const Flight = () => {
  const [activeTab, setActiveTab] = useState<'one-way' | 'round-trip'>('one-way')

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
        <Row className="g-4 align-items-center">
          <Col lg={4} xl={6}>
            <h5 className="mb-0 items-center">
              <FaPlane className="me-2" size={22} />
              Flight Booking
            </h5>
          </Col>
          <Col md={6} lg={4} xl={3} className="ms-auto">
            <div className="nav nav-pills" id="pills-tab" role="tablist">
              <div onClick={() => setActiveTab('one-way')} className={clsx('form-check form-check-inline', activeTab === 'one-way' && 'active')}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" defaultChecked />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  One Way
                </label>
              </div>
              <div
                onClick={() => setActiveTab('round-trip')}
                className={clsx('form-check form-check-inline', activeTab === 'round-trip' && 'active')}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Round Trip
                </label>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} xl={3} className="ms-auto">
            <div className="form-control-bg-light border rounded form-fs-md">
              <SelectFormInput className="form-select js-choice" aria-label=".form-select-sm">
                <option value={-1}>Select Class</option>
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </SelectFormInput>
            </div>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="p-4 pt-0">
        <div className="tab-content" id="pills-tabContent">
          <div className={clsx('tab-pane fade show', activeTab === 'one-way' && 'show active')}>
            <Row className="g-4">
              <Col md={6} className="position-relative">
                <div className="form-icon-input form-size-lg form-fs-lg">
                  <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                    <option value={-1}>Flying from...</option>
                    <option>San Jacinto, USA</option>
                    <option>North Dakota, Canada</option>
                    <option>West Virginia, Paris</option>
                  </SelectFormInput>
                  <span className="form-icon">
                    <div>
                      <BsGeoAlt className=" mb-1" size={21} />
                    </div>
                  </span>
                </div>
                <div className="btn-flip-icon z-index-9">
                  <button className="btn btn-dark shadow btn-round mb-0 flex-centered">
                    <FaRightLeft className="fa-solid" />
                  </button>
                </div>
              </Col>
              <Col md={6}>
                <div className="form-icon-input form-size-lg form-fs-lg">
                  <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                    <option value={-1}>Flying to...</option>
                    <option>San Jacinto, USA</option>
                    <option>North Dakota, Canada</option>
                    <option>West Virginia, Paris</option>
                  </SelectFormInput>
                  <span className="form-icon">
                    <div>
                      <BsSend className=" mb-1" size={21} />
                    </div>
                  </span>
                </div>
              </Col>
              <Col md={6}>
                <div className="form-icon-input form-fs-lg">
                  <Flatpicker
                    className="form-control-lg"
                    placeholder="Select check-in date"
                    options={{ dateFormat: 'd M y' }}
                  />
                  <span className="form-icon">
                    <div>
                      <BsCalendar className=" mb-1" size={21} />
                    </div>
                  </span>
                </div>
              </Col>
              <Col md={6}>
                <div className="form-icon-input form-fs-lg">
                  <Dropdown className="guest-selector">
                    <DropdownToggle
                      as="input"
                      className="arrow-none form-guest-selector form-control form-control-lg selection-result"
                      placeholder="Select occupant"
                      value={getGuestsValue()}
                      onChange={() => {}}
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
                            onClick={() => updateGuests('children', false)}>
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
            </Row>
            <div className="text-center pt-0">
              <button className="btn btn-lg btn-primary mb-n7">
                <span className="items-center">
                  Search Flight <BsArrowRight className=" ms-3" />
                </span>
              </button>
            </div>
          </div>
          <div className={clsx('tab-pane fade', activeTab === 'round-trip' && 'show active')}>
            <Row className="g-4">
              <Col md={6} className="position-relative">
                <div className="form-icon-input form-size-lg form-fs-lg">
                  <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                    <option value={-1}>Flying from...</option>
                    <option>San Jacinto, USA</option>
                    <option>North Dakota, Canada</option>
                    <option>West Virginia, Paris</option>
                  </SelectFormInput>
                  <span className="form-icon">
                    <div>
                      <BsGeoAlt size={21} className=" mb-1" />
                    </div>
                  </span>
                </div>
                <div className="btn-flip-icon z-index-9">
                  <button className="btn btn-dark shadow btn-round mb-0 flex-centered">
                    <FaRightLeft />
                  </button>
                </div>
              </Col>
              <Col md={6}>
                <div className="form-icon-input form-size-lg form-fs-lg">
                  <SelectFormInput className="form-select js-choice" data-search-enabled="true">
                    <option value={-1}>Flying to...</option>
                    <option>San Jacinto, USA</option>
                    <option>North Dakota, Canada</option>
                    <option>West Virginia, Paris</option>
                  </SelectFormInput>
                  <span className="form-icon">
                    <div>
                      <BsSend size={21} className=" mb-1" />
                    </div>
                  </span>
                </div>
              </Col>
              <Col md={4}>
                <div className="form-icon-input form-fs-lg">
                  <Flatpicker
                    className="form-control-lg"
                    options={{ dateFormat: 'd M y' }}
                    placeholder="Select check-in date"
                  />
                  <span className="form-icon">
                    <div>
                      <BsCalendar size={21} className=" mb-1" />
                    </div>
                  </span>
                </div>
              </Col>
              <Col md={4}>
                <div className="form-icon-input form-fs-lg">
                  <Flatpicker
                    className="form-control-lg"
                    options={{ dateFormat: 'd M y' }}
                    placeholder="Select check-out date"
                  />
                  <span className="form-icon">
                    <div>
                      <BsCalendar size={21} className=" mb-1" />
                    </div>
                  </span>
                </div>
              </Col>
              <Col md={4}>
                <div className="form-icon-input form-fs-lg">
                  <Dropdown className="guest-selector">
                    <DropdownToggle
                      as="input"
                      className="arrow-none form-guest-selector form-control form-control-lg selection-result"
                      placeholder="Select occupant"
                      value={getGuestsValue()}
                      onChange={() => {}}
                    />
                    <DropdownMenu className="guest-selector-dropdown">
                      <li className="d-flex justify-content-between">
                        <div>
                          <h6 className="mb-0">Adults</h6>
                          <small>Ages 13 or above</small>
                        </div>
                        <div className="hstack gap-1 align-items-center">
                          <Button variant="link" className="adult-remove p-0 mb-0" onClick={() => updateGuests('adults', false)}>
                            <BsDashCircle className=" fa-fw" />
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
                            onClick={() => updateGuests('children', false)}>
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
                    <BsPeople size={21} className=" mb-1" />
                  </span>
                </div>
              </Col>
            </Row>
            <div className="col-12 text-center pt-0">
              <button className="btn btn-lg btn-primary mb-n7">
                <span className="items-center">
                  Search Flight <BsArrowRight className=" ms-3" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </CardBody>
    </form>
  )
}

export default Flight
