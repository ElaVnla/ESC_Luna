import { Button, Card, CardBody, CardHeader, Carousel, Col, Collapse, Image, Row } from 'react-bootstrap'
import { FaHotel } from 'react-icons/fa6'
import { RoomData, Rooms } from '@/models/RoomDetailsApi'
import { useState } from 'react'

// Displays detailed information about a room, including images, description, and amenities
const RoomInformation = ({ roomData }: { roomData: Rooms }) => {
  // Get all available room images
  const roomImages = roomData.images?.map(img => img.high_resolution_url || img.url) || []
  // State to toggle showing more amenities
  const [showMore, setShowMore] = useState(false)

  return (
    <Card className="shadow">
      {/* Card header with hotel icon and title */}
      <CardHeader className="p-4 border-bottom">
        <h3 className="mb-0 items-center">
          <FaHotel className="me-2" />
          Room Details
        </h3>
      </CardHeader>

      <CardBody className="p-4">
        {/* Carousel for Room Images */}
        {roomImages.length > 0 && (
          <Carousel interval={null} controls={true} indicators={false} fade={false}>
            {roomImages.map((img, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={img}
                  alt={`Room ${idx}`}
                  style={{ maxHeight: '300px', objectFit: 'cover', objectPosition: 'center', borderRadius: '12px' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        )}

        {/* Room Description Section */}
        <Card className="mb-1">
          <Row className="align-items-center">
            <Col sm={6} md={12}>
              <CardHeader className="bg-transparent pb-0">
                <h5 className="card-title mb-0">{roomData.roomDescription}</h5>
              </CardHeader>
              <CardBody>
                <div dangerouslySetInnerHTML={{ __html: roomData.long_description || '' }} />
              </CardBody>
            </Col>
          </Row>
        </Card>

        {/* Room Amenities Section */}
        <Card className="mb-1">
          <CardHeader>
            <h5 className="mb-0">Amenities</h5>
          </CardHeader>
          <CardBody>
            <Row>
              {(showMore ? roomData.amenities : roomData.amenities?.slice(0, 6))?.map((item, i) => (
                <Col key={i} xs={12} md={6} className="mb-2">
                  {/* Display each amenity */}
                  • {item}
                </Col>
              ))}
            </Row>

            {/* Button to toggle showing more amenities */}
            {roomData.amenities?.length > 6 && (
              <Button
                variant="link"
                className="ps-0 mt-2"
                onClick={() => setShowMore(prev => !prev)}
              >
                {showMore ? 'Show less' : 'Show more'}
              </Button>
            )}
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  )
}

export default RoomInformation
