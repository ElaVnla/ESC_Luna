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
            <div className="bg-light py-3 px-4 rounded-3">
              <h6 className="fw-light small mb-1">Check-in</h6>
              <h5 className="mb-1" style={{fontSize:"1.17rem"}}>4 March 2022</h5>
              <small className="items-center">
                <BsAlarm className=" me-1" />
                12:30 pm
              </small>
            </div>
          </Col>
          <Col lg={4}>
            <div className="bg-light py-3 px-4 rounded-3">
              <h6 className="fw-light small mb-1">Check out</h6>
              <h5 className="mb-1" style={{fontSize:"1.17rem"}}>8 March 2022</h5>
              <small className="items-center">
                <BsAlarm className=" me-1" />
                4:30 pm
              </small>
            </div>
          </Col>
          <Col lg={4}>
            <div className="bg-light py-3 px-4 rounded-3">
              <h6 className="fw-light small mb-1">Rooms &amp; Guests</h6>
              <h5 className="mb-1" style={{fontSize:"1.17rem"}}>1R, 1A, 1C</h5>
              <small className="items-center">
                <BsBrightnessHigh className=" me-1" />3 Nights, 4 Days
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
