import { TinySlider } from "@/components";
import { currency, useLayoutContext } from "@/states";
import {
  Button,
  Card,
  CardBody,
  Col,
  Image,
  Row,
} from "react-bootstrap";
import { renderToString } from "react-dom/server";
import {
  BsArrowLeft,
  BsArrowRight,
  BsGeoAlt,
} from "react-icons/bs";
import {
  FaStarHalfAlt
} from "react-icons/fa";
import { FaCopy, FaHeart, FaStar, FaMapLocationDot } from "react-icons/fa6";
import { type TinySliderSettings } from "tiny-slider";
import { useNavigate, Link } from "react-router-dom";
import { HotelFetchProps } from "../utils/HotelTypes";
import { getHotelDetailUrl } from "../utils/HotelNavigation";

import "tiny-slider/dist/tiny-slider.css";
import { HotelParams } from "@/models/HotelDetailsApi";

const getGuestRatingDetails = (score: number) => {
  if (score >= 4.5) return { label: "Excellent", color: "success" };
  if (score >= 4.0) return { label: "Very Good", color: "primary" };
  if (score >= 3.0) return { label: "Average", color: "warning" };
  if (score > 0) return { label: "Poor", color: "danger" };
  if (score == 0) return { label: "No Rating", color: "secondary" };
  return { label: "No Rating", color: "secondary" };
};

const HotelListCard = ({
  hotel,
  destinationId,
  city,
  state,
  checkin,
  checkout,
  guests,
  setShowMap
}: HotelFetchProps) => {
  const {
    id,
    name,
    address,
    amenities,
    images,
    price,
    star_rating,
    guest_rating
  } = hotel;

  console.log(
    "Rendering hotel star rating:",
    hotel.name,
    hotel.id,
    star_rating
  );
  const numericStarRating = Number(star_rating);
  console.log(
    "Rendering hotel guest rating:",
    hotel.name,
    hotel.id,
    guest_rating
  );
  const numericGuestRating = Number(guest_rating);
    console.log(
    "Rendering hotel longitude and latitude:",
    hotel.latitude,
    hotel.longitude,
    address
  );

  const { dir } = useLayoutContext();
  const normalizedAmenities = Array.isArray(amenities)
    ? amenities
    : typeof amenities === "string"
    ? JSON.parse(amenities)
    : [];

  const listSliderSettings: TinySliderSettings = {
    nested: "inner",
    autoplay: false,
    controls: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    controlsText: [
      renderToString(<BsArrowLeft size={16} />),
      renderToString(<BsArrowRight size={16} />),
    ],
    arrowKeys: true,
    items: 1,
    autoplayDirection: dir === "ltr" ? "forward" : "backward",
    nav: false,
  };

  const navigate = useNavigate();

  const handleNavigateToDetail = () => {
    navigate(`/hotels/detail`,{
      state: {
        hotelParams:{
          hotelId: id.toString(),
          destinationId: destinationId || "",
          checkIn: checkin || "",
          checkOut: checkout || "",
          guests: String(guests).replace(/\D/g, '') || '1',
        } as HotelParams
      }  
    });
    // const cleanedGuests = String(guests).replace(/\D/g, '') || '1';
    // navigate(getHotelDetailUrl({
    //   hotel_id: hotel.id.toString(),
    //   city,
    //   state,
    //   destination_id: destinationId,
    //   checkin,
    //   checkout,
    //   guests: cleanedGuests,
    // }));
  };

  return (
    <Card className="shadow p-2" key={name}>
      <Row className="g-0">
        <Col md={5} className="position-relative d-flex">
          <div
            style={{ height: "250px" }}
            className="tiny-slider arrow-round arrow-xs arrow-dark overflow-hidden rounded-2 flex-grow-1"
          >
            {Array.isArray(images) && images.length > 0 ? (
              <TinySlider
                settings={listSliderSettings}
                data-testid="tiny-slider"
              >
                {images.map((image, idx) => (
                  <div key={idx} className="h-100">
                    <Image
                      src={image}
                      className="w-100 h-100 object-fit-cover"
                      alt={hotel.name}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "https://placehold.co/800x520/jpeg?text=Image+Failed+to+Load";
                      }}
                    />
                  </div>
                ))}
              </TinySlider>
            ) : (
              <Image
                src="https://placehold.co/800x520/jpeg?text=Loading"
                alt="Loading image"
                className="w-100 h-100 object-fit-cover"
              />
            )}
          </div>
        </Col>
        <Col md={7}>
          <CardBody className="py-md-2 d-flex flex-column h-100 position-relative">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                {/* Star rating */}
                <ul className="list-inline mb-0 d-flex align-items-center">
                  {Array.from(new Array(Math.floor(numericStarRating))).map(
                    (_star, idx) => (
                      <li key={idx} className="list-inline-item me-1 small">
                        <FaStar
                          size={15}
                          className="text-warning"
                          data-testid="star-icon"
                        />
                      </li>
                    )
                  )}
                  {!Number.isInteger(numericStarRating) && (
                    <li className="list-inline-item me-1 small">
                      <FaStarHalfAlt
                        size={15}
                        className="text-warning"
                        data-testid="star-icon"
                      />
                    </li>
                  )}
                  {numericStarRating < 5 &&
                    Array.from(new Array(5 - Math.ceil(numericStarRating))).map(
                      (_val, idx) => (
                        <li key={idx} className="list-inline-item me-1 small">
                          <FaStar size={15} data-testid="star-icon" />
                        </li>
                      )
                    )}
                </ul>

                {/* Guest rating */}
                {!isNaN(numericGuestRating) &&
                  numericGuestRating >= 0 &&
                  (() => {
                    const { label, color } =
                      getGuestRatingDetails(numericGuestRating);
                    return (
                      <div className="d-flex align-items-center gap-1">
                        <span className={`text-${color} fw-semibold`}>
                          {label}
                        </span>
                        <span
                          className={`bg-${color} text-white fw-bold px-2 py-1 rounded small`}
                          style={{ lineHeight: 1 }}
                        >
                          {numericGuestRating.toFixed(1)}
                        </span>
                      </div>
                    );
                  })()}
              </div>
            </div>
            <h5 className="card-title mb-1">
              <Link to="/hotels/detail">{name}</Link>
            </h5>
            <small className="d-flex flex-column" style={{ fontSize: '1rem' }}>
              <span className="d-flex align-items-center mb-1">
                <BsGeoAlt className="me-1" style={{ lineHeight: 1 }} />
                <span>{address}</span>
              </span>

              <Button
                variant="link"
                className="p-0 d-inline-flex align-items-center text-decoration-underline text-primary"
                style={{ fontSize: '1.2rem', lineHeight: 1 }}
                onClick={() =>
                  setShowMap?.({
                    latitude: hotel.latitude,
                    longitude: hotel.longitude,
                    address: hotel.address,
                  })
                }
              >
                <FaMapLocationDot className="me-1" style={{ lineHeight: 1 }} />
                <span style={{ fontSize: '0.9rem' }}>Show on map</span>
              </Button>
            </small>
            <ul className="nav nav-divider mt-3">
              {normalizedAmenities.length > 0 && (
                <div className="mt-1 mb-3">
                  <span className="fw-semibold d-block">
                    This property offers:
                  </span>
                  <div className="d-flex flex-wrap gap-2">
                    {normalizedAmenities
                      .slice(0, 6)
                      .map((amenity: string, idx: number) => (
                        <span
                          key={idx}
                          className="badge bg-light text-dark border border-secondary-subtle small"
                        >
                          {amenity}
                        </span>
                      ))}
                    {normalizedAmenities.length > 8 && (
                      <span className="badge bg-light text-muted border border-secondary-subtle small">
                        +{normalizedAmenities.length - 6} more
                      </span>
                    )}
                  </div>
                </div>
              )}
            </ul>

            <div className="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
              <div className="d-flex align-items-center">
                <h5 className="fw-bold mb-0 me-1">
                  {currency}
                  {price}
                </h5>
                <span className="mb-0 me-2">total</span>
              </div>
              <div className="mt-3 mt-sm-0">
                <Button
                  variant="dark"
                  size="sm"
                  className="mb-0 w-100"
                  onClick={handleNavigateToDetail}
                >
                  Select Hotel
                </Button>
              </div>
            </div>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default HotelListCard;
