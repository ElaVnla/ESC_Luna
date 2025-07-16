import { useToggle } from "@/hooks";
import {
  Alert,
  Button,
  Col,
  Container,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Row,
} from "react-bootstrap";
import {
  BsExclamationOctagonFill,
  BsGridFill,
  BsListUl,
  BsXLg,
} from "react-icons/bs";
import { FaAngleLeft, FaAngleRight, FaSliders } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HotelListCard from "./HotelListCard";
import HotelListFilter from "./HotelListFilter";

import { HotelsListType } from "../data";
import { useEffect, useState, useRef } from "react";

const HotelLists = () => {
  const { isOpen, toggle } = useToggle();

  const [hotels, setHotels] = useState<HotelsListType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/hotels/getHotels")
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((hotel: any) => ({
          id: parseInt(hotel.id), // or hash to int if your ID is a string
          name: hotel.name,
          address: hotel.address,
          images: [
            `https://photo.hotellook.com/image_v2/limit/${hotel.id}/800/520.auto`,
          ],
          rating: hotel.rating || 0,
          features: hotel.amenities ? hotel.amenities.split(",") : [],
          price: Math.floor(Math.random() * 1000) + 100, // You can customize this
        }));
        setHotels(mapped);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load hotels:", err);
        setLoading(false);
      });
  }, []);

  const hotelListRef = useRef<HTMLDivElement | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 10;

  const totalPages = Math.ceil(hotels.length / hotelsPerPage);
  const startIndex = (currentPage - 1) * hotelsPerPage;
  const endIndex = startIndex + hotelsPerPage;
  const currentHotels = hotels.slice(startIndex, endIndex);

  // For pagination numbers
  const visiblePages = 5;
  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <section className="pt-0">
      <Container>
        <Row className="mb-4">
          <Col xs={12}>
            <div className="hstack gap-3 justify-content-between justify-content-md-end">
              <Button
                onClick={toggle}
                variant="primary-soft"
                className="btn-primary-check mb-0 d-xl-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasSidebar"
                aria-controls="offcanvasSidebar"
              >
                <FaSliders className="me-1" /> Show filters
              </Button>
              <ul
                className="nav nav-pills nav-pills-dark"
                id="tour-pills-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <Link
                    className="nav-link rounded-start rounded-0 mb-0 active "
                    to="/hotels/list"
                  >
                    <BsListUl className=" fa-fw mb-1" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link rounded-end rounded-0 mb-0 "
                    to="/hotels/grid"
                  >
                    <BsGridFill className=" fa-fw mb-1" />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={4} xxl={3}>
            <div className="d-none d-xl-block">
              <HotelListFilter />
              <div className="d-flex justify-content-between p-2 p-xl-0 mt-xl-4">
                <button className="btn btn-link p-0 mb-0">Clear all</button>
                <button className="btn btn-primary mb-0">Filter Result</button>
              </div>
            </div>
            <Offcanvas
              placement="end"
              show={isOpen}
              onHide={toggle}
              className="offcanvas-xl"
              tabIndex={-1}
              id="offcanvasSidebar"
              aria-labelledby="offcanvasSidebarLabel"
            >
              <OffcanvasHeader className="offcanvas-header" closeButton>
                <h5 className="offcanvas-title" id="offcanvasSidebarLabel">
                  Advance Filters
                </h5>
              </OffcanvasHeader>
              <OffcanvasBody className="offcanvas-body flex-column p-3 p-xl-0">
                <HotelListFilter />
              </OffcanvasBody>
              <div className="d-flex justify-content-between p-2 p-xl-0 mt-xl-4">
                <button className="btn btn-link p-0 mb-0">Clear all</button>
                <button className="btn btn-primary mb-0">Filter Result</button>
              </div>
            </Offcanvas>
          </Col>
          <Col xl={8} xxl={9}>
            <div className="vstack gap-4" ref={hotelListRef}>
              {currentHotels.map((hotel, idx) => (
                <HotelListCard key={idx} hotel={hotel} />
              ))}

              <nav
                className="d-flex justify-content-center"
                aria-label="navigation"
              >
                <ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                  {/* Previous button */}
                  <li
                    className={`page-item mb-0 ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => {
                        setCurrentPage((prev) => {
                          const newPage = Math.max(prev - 1, 1);
                          hotelListRef.current?.scrollIntoView({ behavior: "smooth" });
                          return newPage;
                        });
                      }}
                    >
                      <FaAngleLeft />
                    </button>
                  </li>

                  {/* Page numbers */}
                  {pageNumbers.map((number) => (
                    <li
                      key={number}
                      className={`page-item mb-0 ${
                        currentPage === number ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => {
                          setCurrentPage(number);
                          hotelListRef.current?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        {number}
                      </button>
                    </li>
                  ))}

                  {/* Next button */}
                  <li
                    className={`page-item mb-0 ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => {
                        setCurrentPage((prev) => {
                          const newPage = Math.min(prev + 1, totalPages);
                          hotelListRef.current?.scrollIntoView({ behavior: "smooth" });
                          return newPage;
                        });
                      }}
                    >
                      <FaAngleRight />
                    </button>
                  </li>
                </ul>
              </nav>

              {/* <nav
                className="d-flex justify-content-center"
                aria-label="navigation"
              >
                <ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                  <li className="page-item mb-0">
                    <Link className="page-link" to="" tabIndex={-1}>
                      <FaAngleLeft />
                    </Link>
                  </li>
                  <li className="page-item mb-0">
                    <Link className="page-link" to="">
                      1
                    </Link>
                  </li>
                  <li className="page-item mb-0 active">
                    <Link className="page-link" to="">
                      2
                    </Link>
                  </li>
                  <li className="page-item mb-0">
                    <Link className="page-link" to="">
                      ..
                    </Link>
                  </li>
                  <li className="page-item mb-0">
                    <Link className="page-link" to="">
                      6
                    </Link>
                  </li>
                  <li className="page-item mb-0">
                    <Link className="page-link" to="">
                      <FaAngleRight />
                    </Link>
                  </li>
                </ul>
              </nav> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HotelLists;
