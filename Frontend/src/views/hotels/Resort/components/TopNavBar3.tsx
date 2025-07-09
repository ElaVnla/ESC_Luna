import { AppMenu, SelectFormInput } from '@/components'
import { useToggle } from '@/hooks'
import {
  Button,
  Dropdown,
  DropdownDivider,
  DropdownMenu,
  DropdownToggle,
  Image,
  Navbar,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
} from 'react-bootstrap'
import { BsCalendarWeek, BsDashCircle, BsPlusCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import logoLight from '@/assets/images/logo-light.svg'
import { useState } from 'react'
import Flatpicker from '@/components/Flatpicker'

type AvailabilityFormType = {
  guests: {
    adults: number
    children: number
    rooms: number
  }
}

const TopNavBar3 = () => {
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

  const { isOpen, toggle } = useToggle()
  const { isOpen: isMenuOpen, toggle: toggleMenu } = useToggle()

  return (
    <div className="header-transparent">
      <Navbar expand={'lg'} className="navbar navbar-dark navbar-expand-lg">
        <div className="container-fluid px-md-5">
          <Link className="navbar-brand" to="/">
            <Image className="navbar-brand-item" src={logoLight} alt="logo" />
          </Link>

          <button
            onClick={toggleMenu}
            className="navbar-toggler ms-auto me-3 p-0"
            type="button"
            aria-controls="navbarCollapse"
            aria-expanded={isMenuOpen}
            data-bs-toggle="collapse"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-animation">
              <span />
              <span />
              <span />
            </span>
          </button>

          <AppMenu mobileMenuOpen={isMenuOpen} menuClassName="mx-auto" />

          <div className="nav flex-row ms-xl-auto">
            <Button size="sm" variant="primary" className="mb-0" type="button" onClick={toggle}>
              <BsCalendarWeek className="me-2" />
              Book a Stay
            </Button>
          </div>

          <Offcanvas placement="end" show={isOpen} onHide={toggle} className="offcanvas-w-500px offcanvas-end" tabIndex={-1}>
            <OffcanvasHeader className="offcanvas-header border-bottom px-3">
              <h5 className="offcanvas-title" id="offcanvasBookstayLabel">
                Book a Room
              </h5>
              <button type="button" className="btn-close" onClick={toggle} />
            </OffcanvasHeader>
            <OffcanvasBody className="form-control-bg-light d-flex flex-column px-3">
              <form>
                <div className="mb-3">
                  <label className="form-label mb-0">Room &amp; Suite Type</label>
                  <SelectFormInput className="form-select js-choice" data-search-enabled="true" aria-label=".form-select-sm">
                    <option value={-1}>Select location</option>
                    <option>Agave suite</option>
                    <option>Olive Grove Suite</option>
                    <option>Palm Suite</option>
                    <option>Casa Green Suite</option>
                  </SelectFormInput>
                </div>
                <div className="mb-3">
                  <label className="form-label mb-0">Check in</label>
                  <Flatpicker options={{ dateFormat: 'd M Y' }} placeholder="Select date" />
                </div>
                <div className="mb-3">
                  <label className="form-label mb-0">Check out</label>
                  <Flatpicker options={{ dateFormat: 'd M Y' }} placeholder="Select date" />
                </div>
                <div className="mb-3">
                  <label className="form-label mb-0">Guests &amp; rooms</label>
                  <Dropdown className="guest-selector me-2">
                    <DropdownToggle as="input" className="form-guest-selector form-control selection-result" value={getGuestsValue()} />

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
                          <h6 className="mb-0">Children</h6>
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
                <div className="text-center">
                  <button className="btn btn-primary-soft w-100 mb-0">Check Availability</button>
                </div>
              </form>
              <div className="bg-light p-3 rounded mt-auto">
                <h6>Why Book Direct?</h6>
                <ul className="small ps-3">
                  <li className="mb-2">10% discount is applied</li>
                  <li className="mb-2">15% off on spa treatment</li>
                  <li className="mb-2">Best price guaranteed</li>
                  <li className="mb-2">Daily complimentary sunrise yoga</li>
                  <li className="mb-2">Early check-in and late check-out</li>
                </ul>
              </div>
            </OffcanvasBody>
          </Offcanvas>
        </div>
      </Navbar>
    </div>
  )
}

export default TopNavBar3
