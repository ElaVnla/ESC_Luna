import { useToggle } from "@/hooks";
import {
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
import { useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const HotelLists = () => {
  const { isOpen, toggle } = useToggle();

  const [hotels, setHotels] = useState<HotelsListType[]>([]);
  const [loading, setLoading] = useState(true);

  const query = useQuery();
  const city = query.get("city") || "Singapore, Singapore";
  const state = query.get("state") || "";

  useEffect(() => {
    if (!city) return;

    const syncAndFetchHotels = async () => {
      setLoading(true);
      try {
        let searchQuery = `city=${encodeURIComponent(city)}`;
        if (state) searchQuery += `&state=${encodeURIComponent(state)}`;

        // Step 1: Sync with external API
        const syncRes = await fetch(
          `http://localhost:3000/api/hotels/syncByCity?${searchQuery}`
        );
        if (!syncRes.ok) throw new Error("Sync failed");
        const syncData = await syncRes.json();
        console.log("Synced hotels:", syncData);

        // Step 2: Fetch from local DB after sync
        const dbRes = await fetch(
          `http://localhost:3000/hotels/getHotelsByCity?${searchQuery}`
        );
        if (!dbRes.ok) throw new Error("DB fetch failed");
        const dbData = await dbRes.json();
        console.log("Hotels fetched from DB:", dbData);

        // Step 3: Map hotel data with better image logic
        const mapped = dbData.map((hotel: any) => {
          let images: string[] = [];

          if (hotel.img_baseurl && hotel.img_suffix && hotel.image_count > 0) {
            const maxImages = Math.min(hotel.image_count, 5);
            for (let i = 0; i < maxImages; i++) {
              const imageUrl =
                hotel.img_baseurl + i.toString() + hotel.img_suffix;
              if (i == hotel.default_img_index) {
                console.log(
                  `Generated default image URL for ${hotel.name} : ${imageUrl}`
                );
                images.unshift(imageUrl);
              } else {
                console.log(
                  `Generated non-default image URL for ${hotel.name} : ${imageUrl}`
                );
                images.push(imageUrl);
              }
            }
          }

          if (images.length === 0) {
            console.log(`No images found for ${hotel.name}, using fallback`);
            images = [`https://placehold.co/800x520/jpeg?text=No+Image`];
          }

          return {
            id: parseInt(hotel.id),
            name: hotel.name,
            address: hotel.address,
            images,
            rating: hotel.rating || 0,
            amenities: hotel.amenities ? JSON.parse(hotel.amenities) : [],
            price: Math.floor(Math.random() * 1000) + 100,
          };
        });

        setHotels(mapped);
      } catch (err) {
        console.error("Failed to sync or fetch hotels:", err);
      } finally {
        setLoading(false);
      }
    };

    syncAndFetchHotels();
  }, [city, state]);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(
  //     `http://localhost:3000/hotels/getHotelsByCity?city=${encodeURIComponent(
  //       city
  //     )}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const mapped = data.map((hotel: any) => {
  //         // Generate multiple image URLs for the slider
  //         let images = [];
  //         console.log(
  //           "Hotel data:",
  //           hotel.name,
  //           hotel.img_baseurl,
  //           hotel.img_suffix,
  //           hotel.image_count
  //         );

  //         if (hotel.img_baseurl && hotel.img_suffix && hotel.image_count > 0) {
  //           const maxImages = Math.min(hotel.image_count, 5); // Generate up to 5 images
  //           for (let i = 0; i < maxImages; i++) {
  //             const imageUrl =
  //               hotel.img_baseurl + i.toString() + hotel.img_suffix;
  //             console.log(`Generated image URL: ${imageUrl}`);
  //             images.push(imageUrl);
  //           }
  //         }

  //         // Test with the working URL pattern as fallback
  //         if (images.length === 0) {
  //           console.log(`No images found for ${hotel.name}, using fallbacks`);
  //           images = [
  //             `https://d2ey9sqrvkqdfs.cloudfront.net/${hotel.id}/0.jpg`,
  //             `https://d2ey9sqrvkqdfs.cloudfront.net/0dAF/0.jpg`, // Known working image
  //             `https://via.placeholder.com/800x520/f8f9fa/6c757d?text=${encodeURIComponent(
  //               hotel.name
  //             )}`,
  //           ];
  //         }

  //         return {
  //           id: parseInt(hotel.id),
  //           name: hotel.name,
  //           address: hotel.address,
  //           images: images,
  //           rating: hotel.rating || 0,
  //           amenities: hotel.amenities ? JSON.parse(hotel.amenities) : [],
  //           price: Math.floor(Math.random() * 1000) + 100,
  //         };
  //       });
  //       setHotels(mapped);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Failed to load hotels:", err);
  //       setLoading(false);
  //     });
  // }, [city]); // re-fetch if city changes

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

  // filter section
  const [filters, setFilters] = useState<FiltersType>({
    starRatings: [],
    guestRatings: [],
    priceRanges: [],
  });

  type FiltersType = {
    starRatings: number[];
    guestRatings: number[];
    priceRanges: string[];
  };

  // this handles string arrays from HotelListFilter and converts
  const handleFilterChange = (updatedFilters: {
    starRatings: string[];
    guestRatings: string[];
    priceRanges: string[];
  }) => {
    setFilters({
      starRatings: updatedFilters.starRatings
        .map(Number)
        .filter((n) => !isNaN(n)),
      guestRatings: updatedFilters.guestRatings
        .map(Number)
        .filter((n) => !isNaN(n)),
      priceRanges: updatedFilters.priceRanges,
    });
  };

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const queryParams = new URLSearchParams();

        if (filters.starRatings.length > 0) {
          queryParams.append("rawStarRatings", filters.starRatings.join(","));
        }

        if (filters.guestRatings.length > 0) {
          queryParams.append("rawGuestRatings", filters.guestRatings.join(","));
        }

        if (filters.priceRanges.length > 0) {
          queryParams.append("rawPriceRanges", filters.priceRanges.join(","));
        }

        const response = await fetch(
          `http://localhost:3000/hotels/getFilteredHotels?${queryParams.toString()}`
        );

        const data = await response.json();
        setHotels(data);
      } catch (err) {
        console.error("Failed to fetch filtered hotels:", err);
      }
    };

    fetchHotels();
  }, [filters]);

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
              <HotelListFilter onFilterChange={handleFilterChange} />
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
                <HotelListFilter onFilterChange={handleFilterChange} />
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
                          hotelListRef.current?.scrollIntoView({
                            behavior: "smooth",
                          });
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
                          hotelListRef.current?.scrollIntoView({
                            behavior: "smooth",
                          });
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
                          hotelListRef.current?.scrollIntoView({
                            behavior: "smooth",
                          });
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
