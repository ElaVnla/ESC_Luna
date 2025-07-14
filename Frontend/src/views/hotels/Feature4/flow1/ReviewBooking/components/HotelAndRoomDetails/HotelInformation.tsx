import { Button, Card, CardBody, CardHeader, Col, Image, Row, Dropdown, DropdownDivider, DropdownMenu, DropdownToggle, Offcanvas, OffcanvasHeader } from 'react-bootstrap'
import { FaHotel, FaStar } from 'react-icons/fa6'
import hotel2 from '@/assets/images/category/hotel/4by3/02.jpg'
import { Link } from 'react-router-dom'
import { BsAlarm, BsBrightnessHigh, BsGeoAlt, BsPatchCheckFill ,BsChevronDown} from 'react-icons/bs'
import { FaStarHalfAlt } from 'react-icons/fa'
import { FaCheckCircle } from 'react-icons/fa'
import { splitArray } from '@/utils'
import Flatpicker from '@/components/Flatpicker'
import { useToggle } from '@/hooks'
import { useState } from 'react'
import { BsDashCircle, BsPencilSquare, BsPlusCircle, BsSearch } from 'react-icons/bs'
import { useAvailabilityForm } from '@/hooks/useAvailabilityForm'
import { format, differenceInDays } from 'date-fns'

const amenities: string[] = ['Swimming Pool', 'Spa', 'Kids Play Area', 'Gym', 'Tv', 'Mirror', 'Ac', 'Slippers']
const chunk_size = 2
const amenitiesChunks = splitArray(amenities, chunk_size)
const HotelInformation = () => {
  const [formValue, setFormValue] = useState({
    location: 'San Jacinto, USA',
    stayFor: [new Date(), new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)],
    guests: {
      adults: 2,
      children: 1,
      rooms: 1,
    },
  })

  const updateGuests = (type: 'rooms' | 'adults' | 'children', increment = true) => {
    setFormValue((prev) => {
      const currentValue = prev.guests[type]
      const newValue = increment ? currentValue + 1 : Math.max(currentValue - 1, 0)
      return {
        ...prev,
        guests: {
          ...prev.guests,
          [type]: newValue,
        },
      }
    })
  }

  const checkIn = formValue.stayFor[0]
  const checkOut = formValue.stayFor[1]
  const numNights = differenceInDays(checkOut, checkIn)
  const numDays = numNights + 1


  return (
    <Card className="shadow">
      <CardHeader className="p-4 border-bottom">
        <h3 className="mb-0 items-center">
          <FaHotel className="me-2" />
          Hotel Information
        </h3>
      </CardHeader>
      <CardBody className="p-4">
        <Card className="mb-4">
          <Row className="align-items-center">
            <Col sm={6} md={4}>
              <Image src={hotel2} className="card-img" />
            </Col>
            <Col sm={6} md={8}>
              <CardBody className="pt-3 pt-sm-0 p-0">
                <h5 className="card-title">
                  <Link to="">Pride moon Village Resort &amp; Spa</Link>
                </h5>
                <p className="small mb-2 items-center">
                  <BsGeoAlt className=" me-2" />
                  5855 W Century Blvd, Los Angeles - 90045
                </p>
                <ul className="list-inline mb-0 items-center">
                  {Array.from(new Array(4)).map((_val, idx) => (
                    <li key={idx} className="list-inline-item me-1 mb-1 small">
                      <FaStar size={16} className="text-warning" />
                    </li>
                  ))}
                  <li className="list-inline-item me-0 mb-1 small">
                    <FaStarHalfAlt size={16} className="text-warning" />
                  </li>
                  <li className="list-inline-item ms-3 h6 small fw-bold mb-0">4.5/5.0</li>
                </ul>
              </CardBody>
            </Col>
          </Row>
        </Card>
        <Row className="g-4">
          <Col lg={4}>
            {/* Check-in */}
            <div className="bg-light py-3 px-4 rounded-3">
              <h6 className="fw-light small mb-1">Check-in</h6>

              {/* Date section triggers dropdown */}
              <Dropdown>
                <DropdownToggle
                  as="div"
                  className="d-flex align-items-center justify-content-between"
                  style={{ cursor: 'pointer' }}
                >
                  <h5 className="mb-1" style={{ fontSize: '1.17rem' }}>
                    {format(formValue.stayFor[0], 'd MMM yyyy')}
                  </h5>
                </DropdownToggle>

                <DropdownMenu className="p-2">
                  <Flatpicker
                    value={formValue.stayFor[0]}
                    getValue={(val) => {
                      const newRange = [...formValue.stayFor]
                      newRange[0] = val as Date
                      setFormValue({ ...formValue, stayFor: newRange })
                    }}
                    options={{
                      dateFormat: 'd M Y h:i K',
                      enableTime: true,
                      time_24hr: false,
                      static: true,
                    }}
                  />
                </DropdownMenu>
              </Dropdown>

              {/* Always-visible time below, not clickable */}
              <small className="items-center mt-1 d-block">
                <BsAlarm className="me-1" />
                {format(formValue.stayFor[0], 'h:mm a')}
              </small>
            </div>
          </Col>

          <Col lg={4}>
            {/* Check-out */}
            <div className="bg-light py-3 px-4 rounded-3">
              <h6 className="fw-light small mb-1">Check-out</h6>

              {/* Date section triggers dropdown */}
              <Dropdown>
                <DropdownToggle
                  as="div"
                  className="d-flex align-items-center justify-content-between"
                  style={{ cursor: 'pointer' }}
                >
                  <h5 className="mb-1" style={{ fontSize: '1.17rem' }}>
                    {format(formValue.stayFor[1], 'd MMM yyyy')}
                  </h5>
                </DropdownToggle>

                <DropdownMenu className="p-2">
                  <Flatpicker
                    value={formValue.stayFor[1]}
                    getValue={(val) => {
                      const newRange = [...formValue.stayFor]
                      newRange[1] = val as Date
                      setFormValue({ ...formValue, stayFor: newRange })
                    }}
                    options={{
                      dateFormat: 'd M Y h:i K',
                      enableTime: true,
                      time_24hr: false,
                      static: true,
                    }}
                  />
                </DropdownMenu>
              </Dropdown>

              {/* Always-visible time below, not clickable */}
              <small className="items-center mt-1 d-block">
                <BsAlarm className="me-1" />
                {format(formValue.stayFor[1], 'h:mm a')}
              </small>
            </div>
          </Col>

          <Col lg={4}>
            <div className="bg-light py-3 px-4 rounded-3">
              <h6 className="fw-light small mb-1">Rooms & Guests</h6>

              {/* Guest count section triggers dropdown */}
              <Dropdown>
                <DropdownToggle
                  as="div"
                  className="d-flex align-items-center justify-content-between"
                  style={{ cursor: 'pointer' }}
                >
                  <h5 className="mb-1" style={{ fontSize: '1.17rem' }}>
                    {formValue.guests.rooms} R, {formValue.guests.adults} A, {formValue.guests.children} C
                  </h5>
                </DropdownToggle>

                <DropdownMenu className="p-3" style={{ minWidth: '250px' }}>
                  {/* Adults */}
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>Adults</div>
                    <div className="d-flex align-items-center gap-2">
                      <Button size="sm" onClick={() => updateGuests('adults', false)}>-</Button>
                      <span>{formValue.guests.adults}</span>
                      <Button size="sm" onClick={() => updateGuests('adults')}>+</Button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>Children</div>
                    <div className="d-flex align-items-center gap-2">
                      <Button size="sm" onClick={() => updateGuests('children', false)}>-</Button>
                      <span>{formValue.guests.children}</span>
                      <Button size="sm" onClick={() => updateGuests('children')}>+</Button>
                    </div>
                  </div>

                  {/* Rooms */}
                  <div className="d-flex justify-content-between align-items-center">
                    <div>Rooms</div>
                    <div className="d-flex align-items-center gap-2">
                      <Button size="sm" onClick={() => updateGuests('rooms', false)}>-</Button>
                      <span>{formValue.guests.rooms}</span>
                      <Button size="sm" onClick={() => updateGuests('rooms')}>+</Button>
                    </div>
                  </div>
                </DropdownMenu>
              </Dropdown>

              {/* Static nights/days info below */}
              <small className="items-center d-block mt-1">
              <BsBrightnessHigh className="me-1" />
              {numNights} Nights, {numDays} Days
            </small>

            </div>
          </Col>
        </Row>
        <Row className='g-4 mt-2'>
          <div className="py-3 px-4">
            Club rooms are well furnished with air conditioner, 32 inch LCD television and a mini bar.
            They have attached bathroom with showerhead and hari dryer and 24 hours supply of hot and 
            cold running water. Complimentary wireless internet access is available. Addiotnal amenities
            include bottled water, a safe and a desk.
          </div>
        </Row>
        <Card className="border mt-4">
          <CardHeader className="border-bottom d-md-flex justify-content-md-between">
            <h6 className="card-title mb-0" style={{fontSize:"1.17rem"}}>Amenities</h6>
          </CardHeader>
          <CardBody className="card-body">
            {amenitiesChunks.map((chunk, idx) => {
              return (
                <Row key={idx}>
                  {chunk.map((item, idx) => {
                    return (
                      <Col key={idx} md={6}>
                        <ul className="list-group list-group-borderless mt-2 mb-0">
                          <li className="list-group-item d-flex mb-0">
                            <FaCheckCircle className="text-success me-2" />
                            <span className="h6 fw-light mb-0">{item}</span>
                          </li>
                        </ul>
                      </Col>
                    )
                  })}
                </Row>
              )
            })}
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  )
}

export default HotelInformation
