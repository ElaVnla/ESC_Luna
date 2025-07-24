import { useToggle } from '@/hooks'
import { Fragment } from 'react'
import { Card, CardBody, CardHeader, Col, Collapse, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { BsPatchCheckFill, BsSafe, BsShieldFillCheck } from 'react-icons/bs'
import { FaCheckCircle, FaConciergeBell, FaSwimmingPool, FaVolumeUp } from 'react-icons/fa'
import { FaAngleDown, FaAngleUp, FaSnowflake, FaWifi } from 'react-icons/fa6'
import MapComponent from './HotelMaps'
import CustomerReview from './CustomerReview'
import HotelPolicies from './HotelPolicies'
import PriceOverView from './PriceOverView'
import RoomOptions from './RoomOptions'

import { amenities } from '../data'
import { HotelData } from '@/models/HotelDetailsApi'

import { PiHairDryer } from "react-icons/pi";
import { TbIroning } from "react-icons/tb";
import { MdOutlineRoomService } from "react-icons/md";
import {AirVent, BriefcaseBusinessIcon, Cable, Presentation, Shirt, Square, SquareParking, Tv, Vault, Voicemail, WavesLadder, } from 'lucide-react'
import { RoomData } from '@/models/RoomDetailsApi'
import RoomCard2 from './RoomCard2'
import RoomDetails from './RoomDetails'
type Props = {
  hotelData : HotelData;
  roomData: RoomData;
};
const amenityIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  airCondtioning : AirVent,
  businessCenter: BriefcaseBusinessIcon, 
  clothingIron: TbIroning,
  dataPorts: Cable,
  dryCleaning: Shirt,
  hairDryer: PiHairDryer,
  meetingRooms: Presentation,
  outdoorPool : WavesLadder,
  parkingGarage: SquareParking,
  roomService : MdOutlineRoomService,
  safe : Vault,
  tVInRoom : Tv,
  voiceMail: Voicemail,
};

const AboutHotel = ({hotelData, roomData}: Props) => {
  if (!hotelData) return null;
  console.log(roomData, "In About Hotel");
  function splitString(inputString: string) {
    const [mainText, remainText] = inputString.split("Distances are displayed to the nearest 0.1 mile and kilometer. <br /> ")
    const [distText, extraText] = remainText.split("<p></p>")
    return {mainText, distText, extraText}
  }

  const {mainText, distText, extraText} = splitString(hotelData.description)
  // console.log(extraText, "textetxte extra", distText)

  const unCamelCase = ()=>{

  }

  const { isOpen, toggle } = useToggle()
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
                      <p>{extraText}</p>
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
              <Card className="bg-transparent">
                <CardHeader className="border-bottom bg-transparent px-0 pt-0">
                  <h3 className="card-title mb-0">Amenities Mapped</h3>
                </CardHeader>
                <CardBody className="flex flex-wrap gap-4">
                {Object.entries(hotelData.amenities).map(([key, value]) => {
                  if (value && amenityIconMap[key]) {
                    const Icon = amenityIconMap[key];
                    return (
                      <div key={key} className="flex items-center gap-2">
                        <Icon className="w-5 h-5" />
                        <span className="capitalize">{key}</span>
                      </div>
                    );
                  }
                  return null;
                  })}
                </CardBody>
              </Card>
              
              <Card className="bg-transparent">
                <CardHeader className="border-bottom bg-transparent px-0 pt-0">
                  <h3 className="card-title mb-0">Amenities</h3>
                </CardHeader>
                <CardBody className="pt-4 p-0">
                  <Row className="g-4">
                    {amenities.map((item, idx) => {
                      const Icon = item.icon
                      return (
                        <Col sm={6} key={idx}>
                          <h6>
                            <Icon size={18} className="me-2" />
                            {item.label}
                          </h6>
                          <ul className="list-group list-group-borderless mt-2 mb-0">
                            {item.name.map((item, idx) => {
                              return (
                                <li key={idx} className="list-group-item pb-0 items-center">
                                  <FaCheckCircle className="text-success me-2" />
                                  {item}
                                </li>
                              )
                            })}
                          </ul>
                        </Col>
                      )
                    })}
                    <div className="col-sm-6">
                      <h6 className="items-center">
                        <BsShieldFillCheck className=" me-2" />
                        Safety &amp; Security
                      </h6>
                      <ul className="list-group list-group-borderless mt-2 mb-4 mb-sm-5">
                        <li className="list-group-item pb-0 items-center">
                          <FaCheckCircle className="text-success me-2" />
                          Doctor on Call
                        </li>
                      </ul>
                      <h6>
                        <FaVolumeUp className="me-2" />
                        Staff Language
                      </h6>
                      <ul className="list-group list-group-borderless mt-2 mb-0">
                        <li className="list-group-item pb-0 items-center">
                          <FaCheckCircle className="text-success me-2" />
                          English
                        </li>
                        <li className="list-group-item pb-0 items-center">
                          <FaCheckCircle className="text-success me-2" />
                          Spanish
                        </li>
                        <li className="list-group-item pb-0 items-center">
                          <FaCheckCircle className="text-success me-2" />
                          Hindi
                        </li>
                      </ul>
                    </div>
                  </Row>
                </CardBody>
              </Card>
              {/* <RoomCard2/> */}
              
            </div>
          </Col>
          <Col as={'aside'} xl={5} className="order-xl-2">
            <MapComponent  latitude={hotelData.latitude} longitude={hotelData.longitude} address={hotelData.address} />
            <p>{distText}</p>
            <div dangerouslySetInnerHTML={{ __html: distText }} />
            <PriceOverView />
          </Col>
        </Row>
        <RoomDetails roomData = {roomData}/>      
        {/* <RoomOptions roomData = {roomData}/> */}

        {/* <CustomerReview /> */}

        <HotelPolicies roomPolicies = {roomData.rooms[0].roomAdditionalInfo} />

      </Container>
      
    </section>
  )
}

export default AboutHotel
