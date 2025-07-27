import { useToggle } from '@/hooks'
import { Fragment } from 'react'
import { Card, CardBody, CardHeader, Col, Collapse, Container, OverlayTrigger, ProgressBar, Row, Tooltip } from 'react-bootstrap'
import { FaCheckCircle, FaConciergeBell, FaSwimmingPool } from 'react-icons/fa'
import { FaAngleDown, FaAngleUp, FaSnowflake, FaWifi } from 'react-icons/fa6'
import MapComponent from './HotelMaps'
import HotelPolicies from './HotelPolicies'

import { HotelData } from '@/models/HotelDetailsApi'
import { RoomData } from '@/models/RoomDetailsApi'


import RoomOptions from './RoomOptions'
type Props = {
  hotelData : HotelData;
  roomData: RoomData;
};

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


const AboutHotel = ({hotelData, roomData}: Props) => {
  if (!hotelData) return null;
  console.log(roomData, "In About Hotel");
  function splitString(inputString: string) {
    const [mainText, remainText] = inputString.split("Distances are displayed to the nearest 0.1 mile and kilometer. <br /> ")
    const stringSplitter = "The nearest airports are:"
    var [distText, extraText] = remainText.split(stringSplitter)
    extraText = stringSplitter + extraText
    return {mainText, distText, extraText} 
  }

  const {mainText, distText, extraText} = splitString(hotelData.description)
  // console.log(extraText, "textetxte extra", distText)


  function camelCaseToString(camel: string) {
    // Add a space before each uppercase letter that is not at the beginning of the string
    let result = camel.replace(/([A-Z])/g, ' $1');
    // Capitalize the first letter of the resulting string
    result = result.charAt(0).toUpperCase() + result.slice(1);

    return result;
  }



  const { isOpen, toggle } = useToggle()
  const cleanedDistText = distText.replace(/\/\s*[\d.]+\s*mi/g, '');

  return (
    <section className="pt-0">
      <Container data-sticky-container>
        <Row className="g-4 g-xl-5">
          <Col xl={7} className="order-1">
            <div className="vstack gap-5">
              <Card className="bg-transparent">
                <CardHeader className="border-bottom bg-transparent px-0 pt-0">
                  <h3 className="mb-0">About This Hotel</h3>
                </CardHeader>
                <CardBody className="pt-4 p-0">
                  <h5 className="fw-light mb-4">Main Highlights</h5>
                  <div className="hstack gap-3 mb-3">
                    <OverlayTrigger overlay={<Tooltip>Free Wifi</Tooltip>}>
                      <div className="icon-lg bg-light h5 rounded-2 flex-centered">
                        <FaWifi size={24} />
                      </div>
                    </OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip>Swimming Pool</Tooltip>}>
                      <div className="icon-lg bg-light h5 rounded-2 flex-centered">
                        <FaSwimmingPool size={24} />
                      </div>
                    </OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip>Central AC</Tooltip>}>
                      <div className="icon-lg bg-light h5 rounded-2 flex-centered">
                        <FaSnowflake size={24} />
                      </div>
                    </OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip>Free Service</Tooltip>}>
                      <div className="icon-lg bg-light h5 rounded-2 flex-centered">
                        <FaConciergeBell />
                      </div>
                    </OverlayTrigger>
                  </div>

                  <div className="mb-2"><b>Check in Time:</b> {hotelData.checkin_time}</div>

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
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col as={'aside'} xl={5} className="order-xl-2">
            <MapComponent  latitude={hotelData.latitude} longitude={hotelData.longitude} address={hotelData.address} />
            <Card className="mt-3">
              <Card.Body>
                <Card.Title className="mb-3">Nearby Places</Card.Title>
                <div dangerouslySetInnerHTML={{ __html: cleanedDistText }} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Card className="bg-transparent">
          <CardHeader className="border-bottom bg-transparent px-0 pt-0">
            <h3 className="card-title mb-0">Amenities</h3>
          </CardHeader>
          <CardBody className="flex flex-wrap gap-4">
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
                {/* {hotelData.amenities_ratings?(<h5>Amenities Ratings</h5>):null} */}
                {hotelData.amenities_ratings? (hotelData.amenities_ratings.map((amenity,__)=>{
                    return(
                    <div className=' d-flex align-items-center pb-1' style={{minHeight:"25px"}}>
                      <span className='' style={{ minWidth:"20%"}}>{amenity.name}</span>
                      <ProgressBar className='flex-grow-1' now={amenity.score} variant="success" style={{minHeight:"1.2rem", maxWidth:"400px"}}/>
                      <span className='mx-2 pe-4 ps-3'>{amenity.score}</span>
                    </div>
                    )
                  })): null}
              
              </Col>
            </Row>
          </CardBody>
        </Card>

        <RoomOptions roomData = {roomData}/> 
        
        <HotelPolicies roomPolicies = {roomData.rooms[0].roomAdditionalInfo} />

      </Container>
      
    </section>
  )
}

export default AboutHotel
