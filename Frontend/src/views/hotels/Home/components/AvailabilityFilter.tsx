import Flatpicker from '@/components/Flatpicker'
import { SelectFormInput } from '@/components/form'
import { useState, useEffect } from 'react'
import { Button, Card, Col, Dropdown, DropdownDivider, DropdownMenu, DropdownToggle, FormLabel, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

import { BsCalendar, BsDashCircle, BsGeoAlt, BsPerson, BsPlusCircle, BsSearch } from 'react-icons/bs'
import { parsedestinations } from '../fetchdestinations';
import { destinationinterface } from '../destinationinterface';

type AvailabilityFormType = {
  location: string
  stayFor: Date | Array<Date>
  guests: {
    totalguests: number
    rooms: number
  }
}

const AvailabilityFilter = () => {
  const initialValue: AvailabilityFormType = {
    location: '00Hr',
    //stayFor: [new Date(), new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)],
    stayFor: [
      new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // today + 3 days
      new Date(Date.now() + 6 * 24 * 60 * 60 * 1000), // today + 6 days
    ],
    guests: {
      totalguests: 1,
      rooms: 1,
    },
  }

  const [formValue, setFormValue] = useState<AvailabilityFormType>(initialValue)

  const updateGuests = (type: keyof AvailabilityFormType['guests'], increase: boolean = true) => {
    const val = formValue.guests[type]
    setFormValue({
      ...formValue,
      guests: {
        ...formValue.guests,
        [type]: increase ? val + 1 : val > 1 ? val - 1 : val,
      },
    })
  }

  const getGuestsValue = (): string => {
  
    const guests = formValue.guests;
    const  total = guests.totalguests;
    let rooms = guests.rooms;
    let value = "";
    do
    {
      rooms -= 1;
      value += total;
      if(rooms > 0)
      {
        value += "|"
      }
    }
    while(rooms > 0);
    return value;
  }
  const [locations, setLocations] = useState<destinationinterface[]>([])
  useEffect(() => {
    parsedestinations().then(setLocations)
  }, [])
  console.log('Locations:', locations);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedLocation = locations.find(loc => loc.uid === formValue.location);
    if (!selectedLocation) return;

    const city = selectedLocation.term;
    const state = selectedLocation.state || "";
    const [start, end] = formValue.stayFor as [Date, Date];
    const checkin = encodeURIComponent(start.toISOString());
    const checkout = encodeURIComponent(end.toISOString());

    const query = `city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}&guests=${getGuestsValue()}
    &checkin=${encodeURIComponent(checkin)}&checkout=${encodeURIComponent(checkout)}`;
    navigate(`/hotels/list?${query}`);
  };


  return (
    <Row>
      <Col xl={10} className="position-relative mt-n3 mt-xl-n9">
        <h6 className="d-none d-xl-block mb-3">Check Availability</h6>

        <Card as="form" onSubmit={handleSubmit} className="shadow rounded-3 position-relative p-4 pe-md-5 pb-5 pb-md-4">
          <Row className="g-4 align-items-center">
            <Col lg={4}>
              <div className="form-control-border form-control-transparent form-fs-md flex-centered gap-2">
                <BsGeoAlt size={37} />

                <div className="flex-grow-1">
                  <FormLabel className="form-label">Location</FormLabel>
                  <SelectFormInput
                  value={formValue.location}
                  onChange={(val) => setFormValue({ ...formValue, location: val })}
                  >
                    <option value={-1} disabled>
                      Select location
                    </option>
                    {locations.map((loc) => (
                      <option key={loc.uid} value={loc.uid}>
                        {loc.term}, {loc.state ? `, ${loc.state}` : ''}
                      </option>
                    ))}
                  </SelectFormInput>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="flex-centered">
                <div>
                  <BsCalendar size={37} className=" me-2" />
                </div>

                <div className="form-control-border form-control-transparent form-fs-md">
                  <FormLabel className="form-label">Check in - out</FormLabel>
                  <Flatpicker
                    value={formValue.stayFor}
                    getValue={(val) => {
                      setFormValue({ ...formValue, stayFor: val })
                    }}
                    options={{
                      mode: 'range',
                      dateFormat: 'd M',
                      closeOnSelect:false,
                      minDate:"today"
                    }}
                  />
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="form-control-border form-control-transparent form-fs-md flex-centered">
                <div>
                  <BsPerson size={37} className=" me-2" />
                </div>

                <div className="w-100">
                  <label className="form-label">Guests &amp; rooms</label>
                  <Dropdown className="guest-selector me-2">
                    <DropdownToggle
                      as="input"
                      className="form-guest-selector form-control selection-result"
                      value={getGuestsValue()}
                      onChange={() => {}}
                    />

                    <DropdownMenu className="guest-selector-dropdown" renderOnMount>
                      <li className="d-flex justify-content-between">
                        <div>
                          <h6 className="mb-0">Guests</h6>
                          <small>Per Room</small>
                        </div>
                        <div className="hstack gap-1 align-items-center">
                          <Button variant="link" className="adult-remove p-0 mb-0" onClick={() => updateGuests('totalguests', false)}>
                            <BsDashCircle className=" fs-5 fa-fw" />
                          </Button>
                          <h6 className="guest-selector-count mb-0 adults">{formValue.guests.totalguests ?? 0}</h6>
                          <Button variant="link" className="adult-add p-0 mb-0" onClick={() => updateGuests('totalguests')}>
                            <BsPlusCircle className=" fs-5 fa-fw" />
                          </Button>
                        </div>
                      </li>

                      <DropdownDivider />

                      <li className="d-flex justify-content-between">
                        <div>
                          <h6 className="mb-0">Rooms</h6>
                          <small>Per No. Of Guests</small>
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
          </Row>

          <div className="btn-position-md-middle">
            <button type="submit" className="icon-lg btn btn-round btn-primary mb-0 flex-centered">
              <BsSearch className=" fa-fw" />
            </button>
          </div>
        </Card>
      </Col>
    </Row>
  )
}

export default AvailabilityFilter