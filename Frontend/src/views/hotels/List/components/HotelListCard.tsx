import { TinySlider } from "@/components";
import { currency, useLayoutContext } from "@/states";
import { Fragment } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Image,
  Row,
} from "react-bootstrap";
import { renderToString } from "react-dom/server";
import {
  BsArrowLeft,
  BsArrowRight,
  BsGeoAlt,
  BsPatchCheckFill,
} from "react-icons/bs";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaShareAlt,
  FaStarHalfAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaCopy, FaHeart, FaStar } from "react-icons/fa6";
import { type TinySliderSettings } from "tiny-slider";
import { type HotelsListType } from "../data";

import "tiny-slider/dist/tiny-slider.css";
import { Link } from "react-router-dom";

const HotelListCard = ({ hotel }: { hotel: HotelsListType }) => {
  // const { address, amenities, images, name, price, rating, sale, schemes } = hotel;
  const { address, amenities, images, name, price, rating } = hotel;

  console.log("Rendering hotel rating:", hotel.name, rating );
  const numericRating = Number(rating);


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

  return (
    <Card className="shadow p-2" key={name}>
      <Row className="g-0">
        <Col md={5} className="position-relative">

          <div
            style={{ height: "250px" }}
            className="tiny-slider arrow-round arrow-xs arrow-dark overflow-hidden rounded-2"
          >
            {Array.isArray(images) && images.length > 0 ? (
              <TinySlider settings={listSliderSettings}>
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
              {/* Star rating */}
              <ul className="list-inline mb-1">
                {/* Full stars */}
                {Array.from(new Array(Math.floor(numericRating))).map((_star, idx) => (
                  <li key={idx} className="list-inline-item me-1 small">
                    <FaStar
                      size={15}
                      className="text-warning"
                      data-testid="star-icon"
                    />
                  </li>
                ))}
                {/* Half star */}
                {!Number.isInteger(numericRating) && (
                  <li className="list-inline-item me-1 small">
                    <FaStarHalfAlt
                      size={15}
                      className="text-warning"
                      data-testid="star-icon"
                    />
                  </li>
                )}
                {/* Empty stars */}
                {numericRating < 5 &&
                  Array.from(new Array(5 - Math.ceil(numericRating))).map(
                    (_val, idx) => (
                      <li key={idx} className="list-inline-item me-1 small">
                        <FaStar size={15} data-testid="star-icon" />
                      </li>
                    )
                  )}
              </ul>
            </div>
            <h5 className="card-title mb-1">
              <Link to="/hotels/detail">{name}</Link>
            </h5>
            <small className="items-center">
              <BsGeoAlt className="me-2" />
              {address}
            </small>
            <ul className="nav nav-divider mt-3">
              {normalizedAmenities.map((amenity: string, idx: number) => (
                <li key={idx} className="nav-item">
                  {amenity}
                </li>
              ))}
            </ul>

            <div className="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
              <div className="d-flex align-items-center">
                <h5 className="fw-bold mb-0 me-1">
                  {currency}
                  {price}
                </h5>
                {/* <span className="mb-0 me-2">/day</span> */}
              </div>
              <div className="mt-3 mt-sm-0">
                <Button variant="dark" size="sm" className="mb-0 w-100">
                  Select Room
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
