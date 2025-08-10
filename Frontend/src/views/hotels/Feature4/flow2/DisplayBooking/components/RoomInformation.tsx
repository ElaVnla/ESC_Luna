import { Button, Card, CardBody, CardHeader, Col, Image, Row, Carousel } from 'react-bootstrap'
import { FaHotel } from 'react-icons/fa6'
import hotel2 from '@/assets/images/category/hotel/4by3/02.jpg'
import { BsPatchCheckFill } from 'react-icons/bs'
import roomImg1 from '@/assets/images/category/hotel/4by3/01.jpg'
import roomImg2 from '@/assets/images/category/hotel/4by3/02.jpg'
import roomImg3 from '@/assets/images/category/hotel/4by3/03.jpg'

type RoomInformationProps = {
  room?: any;
  fullRoomPayload?: any;
};

const RoomInformation = ({ room }: RoomInformationProps) => {
  const safeParse = (v: any) => {
    if (Array.isArray(v)) return v;
    if (typeof v === 'string') {
      try {
        return JSON.parse(v);
      } catch {
        return null;
      }
    }
    return v ?? null;
  };

  const amenitiesRaw = safeParse(room?.amenities);
  const amenities: string[] = Array.isArray(amenitiesRaw) ? amenitiesRaw : [];

  const imagesRaw = safeParse(room?.images);
  let apiImages: string[] = [];
  if (Array.isArray(imagesRaw)) {
    apiImages = imagesRaw
      .map((img: any) =>
        typeof img === 'string' ? img.trim() : (img?.high_resolution_url || img?.url)?.trim()
      )
      .filter(Boolean);
  }

  const roomImages = apiImages.length > 0 ? apiImages : [roomImg1, roomImg2, roomImg3];

  const roomTitle: string =
    room?.roomDescription ||
    room?.roomNormalizedDescription ||
    room?.description ||
    room?.room_type ||
    'Room Details';

  const longHtml: string =
    (room?.long_description as string) ||
    '<p>No detailed description available.</p>';

  return (
    <Card className="shadow">
      <CardHeader className="p-4 border-bottom">
        <h3 className="mb-0 items-center">
          <FaHotel className="me-2" />
          Room Details
        </h3>
      </CardHeader>

      <CardBody className="p-4">
        {/* Carousel for Room Images */}
        {roomImages.length > 0 && (
          <Carousel interval={null} controls indicators={false} fade={false}>
            {roomImages.map((img, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={img}
                  alt={`Room ${idx}`}
                  onError={(e: any) => { if (e.currentTarget.src !== hotel2) e.currentTarget.src = hotel2 }}
                  style={{ maxHeight: '300px', objectFit: 'cover', objectPosition: 'center', borderRadius: '12px' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        )}

        {/* Title + long description */}
        <Card className="mb-1 mt-3">
          <Row className="align-items-center">
            <Col sm={6} md={12}>
              <CardHeader className="bg-transparent pb-0">
                <h5 className="card-title mb-0">{roomTitle}</h5>
              </CardHeader>
              <CardBody>
                <div dangerouslySetInnerHTML={{ __html: longHtml }} />
              </CardBody>
            </Col>
          </Row>
        </Card>

        {/* Amenities in two columns */}
        {amenities.length > 0 && (
          <Card className="border mt-3">
            <CardHeader className="border-bottom d-md-flex justify-content-md-between">
              <h5 className="card-title mb-0">Amenities</h5>
            </CardHeader>
            <CardBody>
              <Row>
                {amenities.map((a, i) => (
                  <Col md={6} key={`${a}-${i}`} className="mb-2">
                    <div className="h6 fw-light d-flex mb-0 items-center">
                      <BsPatchCheckFill className="text-success me-2" />
                      {a}
                    </div>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        )}
      </CardBody>
    </Card>
  )
}

export default RoomInformation
