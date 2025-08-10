import { Button, Card, CardBody, CardHeader, Col, Image, Row, Dropdown, DropdownDivider, DropdownMenu, DropdownToggle, Offcanvas, OffcanvasHeader, Collapse, ProgressBar } from 'react-bootstrap';
import { FaHotel, FaStar } from 'react-icons/fa6';
import hotel2 from '@/assets/images/category/hotel/4by3/02.jpg';
import { Link } from 'react-router-dom';
import { BsAlarm, BsBrightnessHigh, BsGeoAlt, BsPatchCheckFill ,BsChevronDown } from 'react-icons/bs';
import { FaAngleDown, FaAngleUp, FaStarHalfAlt } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { splitArray } from '@/utils';
import { useState, useEffect, Fragment } from 'react';
import { useToggle } from '@/hooks';
import { useGuestCount } from '../../contexts/GuestCountContext';
import { HotelData, HotelParams } from '@/models/HotelDetailsApi';
import { formatDate } from 'date-fns';

// Example amenities list and chunking for display
const amenities: string[] = ['Swimming Pool', 'Spa', 'Kids Play Area', 'Gym', 'Tv', 'Mirror', 'Ac', 'Slippers'];
const chunk_size = 2;
const amenitiesChunks = splitArray(amenities, chunk_size);

// Format rooms and guests string for display
const formatRoomAndGuests = (roomsAndGuests: string) => {
  const roomParts = roomsAndGuests.split("|");
  const numberOfRooms = roomParts.length;
  const totalGuests = roomParts.reduce((acc, current) => acc + parseInt(current, 10), 0);

  return `${numberOfRooms}R, ${totalGuests}G`;
};

// Calculate nights and days between check-in and check-out
const calculateNightsAndDays = (checkIn: string, checkOut: string) => {
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const differenceInTime = checkOutDate.getTime() - checkInDate.getTime();
  const numberOfDays = differenceInTime / (1000 * 3600 * 24);
  return {
    nights: numberOfDays,
    days: numberOfDays + 1,
  };
};

// Displays hotel information including image, name, address, rating, dates, guests, description, and amenities
const HotelInformation = ({ hotelData, hotelParams }: { hotelData: HotelData, hotelParams: HotelParams }) => {
  const roomsAndGuests = hotelParams.guests;
  const formattedRoomsAndGuests = formatRoomAndGuests(roomsAndGuests);

  // Map for amenity names
  const amenityNames = new Map<string, string>([
    ["airConditioning", "Air Conditioning"],
    ["businessCenter", "Business Center"], 
    ["clothingIron", "Clothing Iron"],
    ["dataPorts", "Data Ports"],
    ["dryCleaning", "Dry Cleaning"],
    ["miniBarInRoom", "Mini Bar In Room"],
    ["hairDryer", "Hair Dryer"],
    ["meetingRooms", "Meeting Rooms"],
    ["outdoorPool", "Outdoor Pool"],
    ["parkingGarage", "Parking Garage"],
    ["roomService", "Room Service"],
    ["safe", "Safe"],
    ["tVInRoom", "TV in Room"],
    ["voiceMail", "Voicemail"],
    ["fitnessFacility", "Fitness Facility"],
    ["nonSmokingRooms", "Non Smoking Rooms"]
  ]);

  // Split hotel description into main, distance, and extra text
  const splitString = (inputString: string) => {
    if (!inputString || inputString.trim() === "") {
      return { mainText: "No description", distText: "", extraText: "" };
    }

    const [mainText, remainText] = inputString.split("Distances are displayed to the nearest 0.1 mile and kilometer. <br /> ");
    if (remainText) {
      const stringSplitter = "The nearest airports are:";
      if (remainText.includes(stringSplitter)) {
        let [distText, extraText] = remainText.split(stringSplitter);
        extraText = stringSplitter + extraText;
        return { mainText, distText, extraText };
      } else {
        return { mainText, distText: "", extraText: remainText };
      }
    }

    return { mainText, distText: "", extraText: "" };
  };

  const { mainText, distText, extraText } = splitString(hotelData.description);

  // Convert camelCase amenity keys to readable strings
  const camelCaseToString = (camel: string) => {
    let result = camel.replace(/([A-Z])/g, ' $1');
    result = result.charAt(0).toUpperCase() + result.slice(1);
    return result;
  };

  // Remove miles info from distance text
  const cleanedDistText = distText.replace(/\/\s*[\d.]+\s*mi/g, '');
  const { isOpen, toggle } = useToggle();

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  // Check if amenities should be rendered
  const renderAmenities = Array.isArray(hotelData.amenities) && hotelData.amenities.length > 0;

  // Get hotel image URL
  const index = hotelData.default_image_index ?? hotelData.hires_image_index.split(',')[0];
  const imageUrl = `${hotelData.image_details.prefix}${index}${hotelData.image_details.suffix}`;

  return (
    <Card className="shadow">
      {/* Card header with hotel icon and title */}
      <CardHeader className="p-4 border-bottom">
        <h3 className="mb-0 items-center">
          <FaHotel className="me-2" />
          Hotel Information
        </h3>
      </CardHeader>
      <CardBody className="p-4">
        {/* Hotel image and basic info */}
        <Card className="mb-4">
          <Row className="align-items-center">
            <Col sm={6} md={4}>
              <Image src={imageUrl} className="card-img" />
            </Col>
            <Col sm={6} md={8}>
              <CardBody className="pt-3 pt-sm-0 p-0">
                <h5 className="card-title">
                  <Link to="">{hotelData.name || 'N/A'}</Link>
                </h5>
                <p className="small mb-2 items-center">
                  <BsGeoAlt className=" me-2" />
                  {hotelData.address || 'N/A'}
                </p>
                {/* Hotel rating stars and value */}
                <ul className="list-inline mb-0 items-center">
                  {hotelData.rating ? (
                    Array.from(new Array(Math.floor(hotelData.rating))).map((_val, idx) => (
                      <li key={idx} className="list-inline-item me-1 mb-1 small">
                        <FaStar size={16} className="text-warning" />
                      </li>
                    ))
                  ) : (
                    <p>No ratings yet</p>
                  )}
                  {hotelData.rating % 1 > 0 && (
                    <li className="list-inline-item me-0 mb-1 small">
                      <FaStarHalfAlt size={16} className="text-warning" />
                    </li>
                  )}
                  <li className="list-inline-item ms-3 h6 small fw-bold mb-0">
                    {hotelData.rating ? hotelData.rating.toFixed(1) : 'No ratings yet'}/5.0
                  </li>
                </ul>
              </CardBody>
            </Col>
          </Row>
        </Card>

        {/* Check-in, check-out, and rooms/guests info */}
        <Row className="g-4">
          <Col lg={4}>
            <div className="bg-light py-3 px-4 rounded-3">
              <h6 className="fw-light small mb-1">Check-in</h6>
              <h5 className="mb-1" style={{ fontSize: "1.17rem" }}>
                {formatDate(hotelParams.checkIn) || 'N/A'}
              </h5>
            </div>
          </Col>
          <Col lg={4}>
            <div className="bg-light py-3 px-4 rounded-3">
              <h6 className="fw-light small mb-1">Check-out</h6>
              <h5 className="mb-1" style={{ fontSize: "1.17rem" }}>
                {formatDate(hotelParams.checkOut) || 'N/A'}
              </h5>
            </div>
          </Col>
          <Col lg={4}>
            <div className="bg-light py-3 px-4 rounded-3">
              <h6 className="fw-light small mb-1">Rooms & Guests</h6>
              <h5 className="mb-1" style={{ fontSize: "1.17rem" }}>
                {hotelParams.guests || 'N/A'}
              </h5>
            </div>
          </Col>
        </Row>

        {/* Render Description */}
        <Row className='g-4 mt-2'>
          <div className="py-3 px-4">
            <p>{mainText}</p>

            {/* Collapsible section for extra description */}
            <Collapse in={isOpen}>
              <div>
                <div dangerouslySetInnerHTML={{ __html: distText + extraText }} />
              </div>
            </Collapse>

            {/* Toggle button for see more/see less */}
            <a onClick={toggle} className="p-0 mt-2 btn-more d-flex align-items-center collapsed">
              {!isOpen ? (
                <Fragment>
                  <span className="see-more" role="button">See more</span>
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

        {/* Render Amenities in Two Columns */}
        {hotelData.amenities && Object.keys(hotelData.amenities).length > 0 ? (
          <Card className="border mt-4">
            <CardHeader className="border-bottom d-md-flex justify-content-md-between">
              <h6 className="card-title mb-0" style={{ fontSize: "1.17rem" }}>Amenities</h6>
            </CardHeader>
            <CardBody className="card-body">
              <Row>
                {/* First Column */}
                <Col md={6}>
                  {Object.keys(hotelData.amenities).slice(0, Math.ceil(Object.keys(hotelData.amenities).length / 2)).map((amenity, idx) => (
                    hotelData.amenities[amenity] ? (
                      <div key={idx} className="d-flex align-items-center gap-2">
                        <FaCheckCircle className="text-success me-2" />
                        {amenityNames.get(amenity) || camelCaseToString(amenity)}
                      </div>
                    ) : null
                  ))}
                </Col>
                {/* Second Column */}
                <Col md={6}>
                  {Object.keys(hotelData.amenities).slice(Math.ceil(Object.keys(hotelData.amenities).length / 2)).map((amenity, idx) => (
                    hotelData.amenities[amenity] ? (
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
          <p>No amenities available</p>
        )}
      </CardBody>
    </Card>
  );
};

export default HotelInformation;
