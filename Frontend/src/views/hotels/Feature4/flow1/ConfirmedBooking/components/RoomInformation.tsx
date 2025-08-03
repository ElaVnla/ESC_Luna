import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Image,
  Row
} from 'react-bootstrap';
import { FaHotel } from 'react-icons/fa6';
import { BsPatchCheckFill } from 'react-icons/bs';
import { TinySlider } from '@/components';
import { renderToString } from 'react-dom/server';
import { type TinySliderSettings } from 'tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';
import { useState } from 'react';
import { Rooms } from '@/models/RoomDetailsApi';

type RoomInformationProps = {
  roomData: Rooms;
};

const RoomInformation = ({ roomData }: RoomInformationProps) => {
  const roomImages =
    roomData?.images?.map((img) => img?.high_resolution_url || img?.url).filter(Boolean) || [];

  const [showMore, setShowMore] = useState(false);

  const roomSliderSettings: TinySliderSettings = {
    nested: 'inner',
    autoplay: false,
    controls: true,
    controlsText: [renderToString(<span>←</span>), renderToString(<span>→</span>)],
    arrowKeys: true,
    items: 1,
    nav: false,
  };
  console.log('🖼️ Room Images:', roomImages);

  return (
    <Card className="shadow">
      <CardHeader className="p-4 border-bottom">
        <h3 className="mb-0 items-center">
          <FaHotel className="me-2" />
          Room Details
        </h3>
      </CardHeader>

      <CardBody className="p-4">
        {/* ✅ Room Image Slider */}
        {roomImages.length > 0 && (
          <div className="tiny-slider arrow-round arrow-dark overflow-hidden rounded-3 mb-2">
            <TinySlider settings={roomSliderSettings}>
              {roomImages.map((img, idx) => (
                <div key={idx}>
                  <Image
                    src={img}
                    className="w-100 rounded-3"
                    alt={`Room ${idx + 1}`}
                  />
                </div>
              ))}
            </TinySlider>
          </div>
        )}

        {/* ✅ Room Description */}
        {(roomData?.roomDescription || roomData?.long_description) && (
          <Card className="mb-3">
            <Row className="align-items-center">
              <Col sm={12}>
                {roomData.roomDescription && (
                  <CardHeader className="bg-transparent pb-0">
                    <h5 className="card-title mb-0">{roomData.roomDescription}</h5>
                  </CardHeader>
                )}
                {roomData.long_description && (
                  <CardBody>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: roomData.long_description,
                      }}
                    />
                  </CardBody>
                )}
              </Col>
            </Row>
          </Card>
        )}

        {/* ✅ Room Amenities */}
        {roomData?.amenities?.length > 0 && (
          <Card className="border">
            <CardHeader className="border-bottom d-md-flex justify-content-md-between">
              <h5 className="card-title mb-0">Room Amenities</h5>
            </CardHeader>
            <CardBody>
              <Row>
                {(showMore ? roomData.amenities : roomData.amenities.slice(0, 6))?.map((item, i) => (
                  <Col key={i} xs={12} md={6} className="mb-2">
                    <BsPatchCheckFill className="text-success me-2" />
                    {item}
                  </Col>
                ))}
              </Row>

              {roomData.amenities.length > 6 && (
                <Button
                  variant="link"
                  className="ps-0 mt-2"
                  onClick={() => setShowMore((prev) => !prev)}
                >
                  {showMore ? 'Show less' : 'Show more'}
                </Button>
              )}
            </CardBody>
          </Card>
        )}
      </CardBody>
    </Card>
  );
};

export default RoomInformation;
