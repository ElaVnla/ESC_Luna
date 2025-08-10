import { Button, Card, CardBody, CardHeader, Col, Image, Row, Dropdown, DropdownDivider, DropdownMenu, DropdownToggle, Offcanvas, OffcanvasHeader, Collapse } from 'react-bootstrap'
import { FaHotel, FaStar } from 'react-icons/fa6'
import hotel2 from '@/assets/images/category/hotel/4by3/02.jpg'
import { Link } from 'react-router-dom'
import { BsAlarm, BsBrightnessHigh, BsGeoAlt, BsPatchCheckFill ,BsChevronDown} from 'react-icons/bs'
import { FaAngleDown, FaAngleUp, FaStarHalfAlt } from 'react-icons/fa'
import { FaCheckCircle } from 'react-icons/fa'
import { splitArray } from '@/utils'
import Flatpicker from '@/components/Flatpicker'
import { useToggle } from '@/hooks'
import { Fragment, useState } from 'react'
import { BsDashCircle, BsPencilSquare, BsPlusCircle, BsSearch } from 'react-icons/bs'
import { useAvailabilityForm } from '@/hooks/useAvailabilityForm'
import { format, differenceInDays } from 'date-fns'
import type { HotelData } from '@/models/HotelDetailsApi'

// Fallback demo amenities (used only if hotel.amenities is missing)
const amenities: string[] = ['Swimming Pool', 'Spa', 'Kids Play Area', 'Gym', 'Tv', 'Mirror', 'Ac', 'Slippers']
const chunk_size = 2
const amenitiesChunks = splitArray(amenities, chunk_size)

type BookingRow = {
  id: string
  start_date: string // 'YYYY-MM-DD'
  end_date: string   // 'YYYY-MM-DD'
  guests_total?: number
  // optional, if you ever store per-room breakdown like ["2","2"]
  guests_breakdown?: number[] | string[]
}

const formatDate = (dateYMD?: string) => {
  if (!dateYMD) return 'N/A'
  try {
    const parts = dateYMD.split('-') // YYYY-MM-DD
    const d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]))
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  } catch {
    return dateYMD
  }
}

const roomsAndGuestsLabel = (booking?: BookingRow) => {
  if (!booking) return 'N/A'
  const g = booking.guests_total ?? 0
  return g;
}

const getImageUrl = (hotel?: HotelData) => {
  if (!hotel) return hotel2
  try {
    const idx = (hotel as any).default_image_index ?? String((hotel as any).hires_image_index || '').split(',')[0]
    const prefix = (hotel as any)?.image_details?.prefix
    const suffix = (hotel as any)?.image_details?.suffix
    if (prefix && suffix && (idx || idx === 0)) return `${prefix}${idx}${suffix}`
  } catch {}
  return hotel2
}

const HotelInformation = ({ hotel, booking }: { hotel?: HotelData, booking?: BookingRow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // (kept) splitDescription — no longer used for rendering, left intact as requested
  const splitDescription = (text?: string) => {
    if (!text || text.trim() === "") {
      return { mainText: "No description available.", extraText: "" };
    }
    const charLimit = 300;
    if (text.length <= charLimit) {
      return { mainText: text, extraText: "" };
    }
    return {
      mainText: text.slice(0, charLimit),
      extraText: text.slice(charLimit),
    };
  };

  // New: render full HTML and clamp with CSS when collapsed (prevents mid-word cuts)
  const formattedDesc =
    (hotel?.description && hotel.description.trim() !== "")
      ? hotel.description
          .replace(/\r?\n/g, "<br />")
          .replace(/<br\s*\/?>/gi, "<br />")
      : "No description available.";
  const clampStyle = !isOpen
    ? {
        display: '-webkit-box',
        WebkitLineClamp: 6,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        wordBreak: 'normal',
        hyphens: 'auto'
      } as const
    : undefined;

  // derive display values
  const imageUrl = getImageUrl(hotel)
  const name = hotel?.name || 'N/A'
  const address = hotel?.address || 'N/A'
  const ratingNum = Number(hotel?.rating || 0)

  const checkInLabel = formatDate(booking?.start_date)
  const checkOutLabel = formatDate(booking?.end_date)
  const rgLabel = roomsAndGuestsLabel(booking)

  // optional days/nights calc (only if you want the small line)
  let nights = 0
  let days = 0
  if (booking?.start_date && booking?.end_date) {
    const [y1, m1, d1] = booking.start_date.split('-').map(Number)
    const [y2, m2, d2] = booking.end_date.split('-').map(Number)
    const ci = new Date(y1, m1 - 1, d1)
    const co = new Date(y2, m2 - 1, d2)
    nights = Math.max(0, differenceInDays(co, ci))
    days = nights > 0 ? nights + 1 : 0
  }

  // amenity name mapping (when hotel.amenities is an object of boolean flags)
  const amenityNames = new Map<string, string>([
    ['airConditioning','Air Conditioning'],
    ['businessCenter','Business Center'],
    ['clothingIron','Clothing Iron'],
    ['dataPorts','Data Ports'],
    ['dryCleaning','Dry Cleaning'],
    ['miniBarInRoom','Mini Bar In Room'],
    ['hairDryer','Hair Dryer'],
    ['meetingRooms','Meeting Rooms'],
    ['outdoorPool','Outdoor Pool'],
    ['parkingGarage','Parking Garage'],
    ['roomService','Room Service'],
    ['safe','Safe'],
    ['tVInRoom','TV in Room'],
    ['voiceMail','Voicemail'],
    ['fitnessFacility','Fitness Facility'],
    ['nonSmokingRooms','Non Smoking Rooms'],
  ])

  const camelCaseToString = (camel: string) => {
    let result = camel.replace(/([A-Z])/g, ' $1')
    result = result.charAt(0).toUpperCase() + result.slice(1)
    return result
  }

  const hasRealAmenities = !!hotel?.amenities && Object.keys(hotel.amenities).length > 0

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
              <Image src={imageUrl} className="card-img" />
            </Col>
            <Col sm={6} md={8}>
              <CardBody className="pt-3 pt-sm-0 p-0">
                <h5 className="card-title">
                  <Link to="">{name}</Link>
                </h5>
                <p className="small mb-2 items-center">
                  <BsGeoAlt className=" me-2" />
                  {address}
                </p>
                <ul className="list-inline mb-0 items-center">
                  {ratingNum > 0 ? (
                    <>
                      {Array.from(new Array(Math.floor(ratingNum))).map((_v, idx) => (
                        <li key={idx} className="list-inline-item me-1 mb-1 small">
                          <FaStar size={16} className="text-warning" />
                        </li>
                      ))}
                      {ratingNum % 1 > 0 && (
                        <li className="list-inline-item me-0 mb-1 small">
                          <FaStarHalfAlt size={16} className="text-warning" />
                        </li>
                      )}
                      <li className="list-inline-item ms-3 h6 small fw-bold mb-0">
                        {ratingNum.toFixed(1)}/5.0
                      </li>
                    </>
                  ) : (
                    <li className="list-inline-item ms-3 h6 small fw-bold mb-0">No ratings yet</li>
                  )}
                </ul>
              </CardBody>
            </Col>
          </Row>
        </Card>

        <Row className="g-4">
          <Col lg={4}>
            <div className="bg-light py-3 px-4 rounded-3">
              <h6 className="fw-light small mb-1">Check-in</h6>
              <h5 className="mb-1" style={{ fontSize: '1.17rem' }}>{checkInLabel}</h5>
            </div>
          </Col>
          <Col lg={4}>
            <div className="bg-light py-3 px-4 rounded-3">
              <h6 className="fw-light small mb-1">Check-out</h6>
              <h5 className="mb-1" style={{ fontSize: '1.17rem' }}>{checkOutLabel}</h5>
            </div>
          </Col>
          <Col lg={4}>
            <div className="bg-light py-3 px-4 rounded-3">
              <h6 className="fw-light small mb-1">Rooms &amp; Guests</h6>
              <h5 className="mb-1" style={{ fontSize: '1.17rem' }}>{rgLabel}</h5>
              {/* {nights > 0 && (
                <small className="items-center">
                  <BsBrightnessHigh className=" me-1" />
                  {nights} Nights, {days} Days
                </small>
              )} */}
            </div>
          </Col>
        </Row>

        {/* Description – continuous with see more/less via line clamp */}
        <Row className="g-4 mt-2">
          <div className="py-3 px-4">
            <div style={clampStyle} dangerouslySetInnerHTML={{ __html: formattedDesc }} />
            {(hotel?.description && hotel.description.trim() !== "") && (
              <a onClick={toggle} className="p-0 mt-2 btn-more d-flex align-items-center" role="button">
                {!isOpen ? (
                  <Fragment>
                    <span className="see-more">See more</span>
                    <FaAngleDown className="ms-2" />
                  </Fragment>
                ) : (
                  <Fragment>
                    <span>See less</span>
                    <FaAngleUp className="ms-2" />
                  </Fragment>
                )}
              </a>
            )}
          </div>
        </Row>

        {/* Amenities */}
          {hasRealAmenities ? (
            <Card className="border mt-4">
              <CardHeader className="border-bottom d-md-flex justify-content-md-between">
                <h6 className="card-title mb-0" style={{ fontSize: '1.17rem' }}>Amenities</h6>
              </CardHeader>
              <CardBody className="card-body">
                <Row>
                  {/* first column */}
                  <Col md={6}>
                    {Object.keys(hotel!.amenities!).slice(0, Math.ceil(Object.keys(hotel!.amenities!).length / 2)).map((amenity, idx) => (
                      hotel!.amenities![amenity] ? (
                        <div key={idx} className="d-flex align-items-center gap-2">
                          <FaCheckCircle className="text-success me-2" />
                          {amenityNames.get(amenity) || camelCaseToString(amenity)}
                        </div>
                      ) : null
                    ))}
                  </Col>
                  {/* second column */}
                  <Col md={6}>
                    {Object.keys(hotel!.amenities!).slice(Math.ceil(Object.keys(hotel!.amenities!).length / 2)).map((amenity, idx) => (
                      hotel!.amenities![amenity] ? (
                        <div key={idx} className="d-flex align-items-center gap-2">
                          <FaCheckCircle className="text-success me-2" />
                          {amenityNames.get(amenity) || camelCaseToString(amenity)}
                        </div>
                      ) : null
                    ))}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          ) : (
            // If there are no amenities, show an empty state (same behavior as your other file)
            <p className="mt-4 mb-0">No amenities available</p>
          )}
      </CardBody>
    </Card>
  )
}

export default HotelInformation
