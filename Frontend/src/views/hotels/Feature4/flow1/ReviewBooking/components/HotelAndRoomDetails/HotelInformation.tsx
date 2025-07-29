import { Button, Card, CardBody, CardHeader, Col, Image, Row, Dropdown, DropdownDivider, DropdownMenu, DropdownToggle, Offcanvas, OffcanvasHeader, Collapse, ProgressBar } from 'react-bootstrap'
import { FaHotel, FaStar } from 'react-icons/fa6'
import hotel2 from '@/assets/images/category/hotel/4by3/02.jpg'
import { Link } from 'react-router-dom'
import { BsAlarm, BsBrightnessHigh, BsGeoAlt, BsPatchCheckFill ,BsChevronDown} from 'react-icons/bs'
import { FaAngleDown, FaAngleUp, FaStarHalfAlt } from 'react-icons/fa'
import { FaCheckCircle } from 'react-icons/fa'
import { splitArray } from '@/utils'
import Flatpicker from '@/components/Flatpicker'
import { useToggle } from '@/hooks'
import { useState, createContext, useContext, Fragment } from 'react'
import { BsDashCircle, BsPencilSquare, BsPlusCircle, BsSearch } from 'react-icons/bs'
import { useAvailabilityForm } from '@/hooks/useAvailabilityForm'
import { format, differenceInDays } from 'date-fns'
import { useGuestCount } from '../../contexts/GuestCountContext';
import { HotelData } from '@/models/HotelDetailsApi'
import { RoomData } from '@/models/RoomDetailsApi'


const amenities: string[] = ['Swimming Pool', 'Spa', 'Kids Play Area', 'Gym', 'Tv', 'Mirror', 'Ac', 'Slippers']
const chunk_size = 2
const amenitiesChunks = splitArray(amenities, chunk_size)
const HotelInformation = ({ hotelData, roomData }: { hotelData: HotelData, roomData:RoomData }) => {

  const amenityNames = new Map<string, string>(
  [["airCondtioning" , "Air Conditioning"],
  ["businessCenter", "Business Center"], 
  ["clothingIron", "Clothing Iron"],
  ["dataPorts", "Data Ports"],
  ["dryCleaning", "Dry Cleaning"],
  ["miniBarInRoom", "Mini Bar In Room"],
  ["hairDryer", "Hair Dryer"],
  ["meetingRooms", "Meetin Rooms"],
  ["outdoorPool" , "Outdoor Pool"],
  ["parkingGarage", "Parking Garage"],
  ["roomService" , "Room Service"],
  ["safe" , "Safe"],
  ["tVInRoom" , "TV in Room"],
  ["voiceMail", "Voicemail"],
  ["fitnessFacility", "Fitness Facilty"],
  ["nonSmokingRooms", "Non Smoking Rooms"]
]
)

  function splitString(inputString: string) {
    const [mainText, remainText] = inputString.split("Distances are displayed to the nearest 0.1 mile and kilometer. <br /> ")
    const stringSplitter = "The nearest airports are:"
    var [distText, extraText] = remainText.split(stringSplitter)
    extraText = stringSplitter + extraText
    return {mainText, distText, extraText} 
  }

  const {mainText, distText, extraText} = splitString(hotelData.description)

  
  function camelCaseToString(camel: string) {
    // Add a space before each uppercase letter that is not at the beginning of the string
    let result = camel.replace(/([A-Z])/g, ' $1');
    // Capitalize the first letter of the resulting string
    result = result.charAt(0).toUpperCase() + result.slice(1);

    return result;
  }

  const cleanedDistText = distText.replace(/\/\s*[\d.]+\s*mi/g, '');
   const { isOpen, toggle } = useToggle()

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
                  <Link to="">{hotelData.name}</Link>
                </h5>
                <p className="small mb-2 items-center">
                  <BsGeoAlt className=" me-2" />
                  {hotelData.address}
                </p>
                <ul className="list-inline mb-0 items-center">
                  {Array.from(new Array(Math.floor(hotelData.rating))).map((_val, idx) => (
                    <li key={idx} className="list-inline-item me-1 mb-1 small">
                      <FaStar size={16} className="text-warning" />
                    </li>
                  ))}
                  {hotelData.rating % 1 > 0 && (
                    <li className="list-inline-item me-0 mb-1 small">
                      <FaStarHalfAlt size={16} className="text-warning" />
                    </li>
                  )}
                  <li className="list-inline-item ms-3 h6 small fw-bold mb-0">{hotelData.rating.toFixed(1)}/5.0</li>
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
            
            <p>{mainText}</p>
              <Collapse in={isOpen}>
                <div>
                  <div dangerouslySetInnerHTML={{ __html: extraText }} />
                </div>
              </Collapse>
              <a onClick={toggle} className="p-0  mt-2 btn-more d-flex align-items-center collapsed">
                {!isOpen ? (
                  <Fragment>
                    <span className="see-more" role="button">
                      See more
                    </span>
                    <FaAngleDown className="ms-2" />
                  </Fragment>
                ) : (
                  <Fragment>
                    <span role="button">See less</span>
                    <FaAngleUp className="ms-2" />
                  </Fragment>
                )}
              </a>
          </div>
        </Row>
        <Card className="border mt-4">
          <CardHeader className="border-bottom d-md-flex justify-content-md-between">
            <h6 className="card-title mb-0" style={{fontSize:"1.17rem"}}>Amenities</h6>
          </CardHeader>
          <CardBody className="card-body">
            <Row>
              <Col>
                {
                  Object.keys(hotelData.amenities).map((amenity, idx: number)=>{
                    return (
                      <div key={idx} className="flex items-center gap-2">
                        <FaCheckCircle className="text-success me-2" />
                        {amenityNames.get(amenity) || camelCaseToString(amenity)}
                      </div>
                    );
                  }
                  )
                }
              </Col>
              <Col>
                {hotelData.amenities_ratings? (hotelData.amenities_ratings.map((amenity,__)=>{
                    return(
                    <div className=' d-flex align-items-center pb-1' style={{minHeight:"25px"}}>
                      <span  className='' style={{ minWidth:"20%", marginRight:"10px"}}>{amenity.name}</span>
                      <ProgressBar className='flex-grow-1' now={amenity.score} variant="success" style={{minHeight:"1.2rem", maxWidth:"400px"}}/>
                      <span className='mx-2 pe-4 ps-3'>{amenity.score}</span>
                    </div>
                    )
                  })): null}
              
              </Col>
            </Row>
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  )
}

export default HotelInformation

