import { SelectFormInput } from '@/components'
import { useState } from 'react'
import { Button, Dropdown, DropdownDivider, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import { BsDashCircle, BsPlusCircle } from 'react-icons/bs'

type AvailabilityFormType = {
  guests: {
    adults: number
    children: number
    rooms: number
  }
}

const HotelsFilter = () => {
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
    <div className="card">
      <div className="card-header border-bottom">
        <h6 className="mb-0">Search your Destination</h6>
      </div>
      <div className="card-body">
        <div className="row g-3">
          <div className="col-12">
            <label className="form-label mb-0">Hotel or Destination</label>
            <SelectFormInput className="form-select js-choice" data-search-enabled="true" aria-label=".form-select-sm">
              <option value={-1}>Select location</option>
              <option>San Jacinto, USA</option>
              <option>North Dakota, Canada</option>
              <option>West Virginia, Paris</option>
            </SelectFormInput>
          </div>
          <div className="col-md-6">
            <label className="form-label mb-0">Check in</label>
            <input type="text" className="form-control flatpickr" data-date-format="d M Y" placeholder="Select date" />
          </div>
          <div className="col-md-6">
            <label className="form-label mb-0">Check out</label>
            <input type="text" className="form-control flatpickr" data-date-format="d M Y" placeholder="Select date" />
          </div>
          <div className="col-12">
            <label className="form-label mb-0">Guests &amp; rooms</label>
            <Dropdown className="guest-selector me-2" autoClose="outside">
              <DropdownToggle as="input" className="form-guest-selector form-control selection-result" value={getGuestsValue()} />
              <DropdownMenu className="guest-selector-dropdown" renderOnMount>
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
          <div className="col-12 text-center">
            <a href="" className="text-primary-hover text-decoration-underline">
              Have a promo code?
            </a>
            <button className="btn btn-primary-soft w-100 mt-3 mb-0">Check Availability</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelsFilter
