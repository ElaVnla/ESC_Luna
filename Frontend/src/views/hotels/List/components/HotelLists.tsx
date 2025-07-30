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
import { useLocation, useNavigate } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

// TODO: make checkin, checkout and guests responsive (search button refreshes when checkincheckout/guests change)
// TODO: make "select room" lead to feature 3
// TODO: filter function
// TODO: change hotellistcard display (remove amenities, add distance from destination)
// TODO: change hotellistcard display "/day" "total price"
// TODO: sort hotels by price & ratings, add sort by price/rating option? show rating first

const HotelLists = () => {
  const { isOpen, toggle } = useToggle();

  const [hotels, setHotels] = useState<HotelsListType[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const query = useQuery();
  const city = query.get("city") || "Singapore, Singapore";
  const state = query.get("state") || "";
  const guests = query.get("guests") || "1";
  const checkin = query.get("checkin")?.split("T")[0] || "";
  const checkout = query.get("checkout")?.split("T")[0] || "";
  console.log(guests);
  console.log(checkin, checkout);


  useEffect(() => {
    if (!city) return;

    const syncAndFetchHotels = async () => {
      // clear old data from previous search immediately
      setHotels([]);
      console.log(hotels);

      setLoading(true);
      try {
        let cityQuery = `city=${encodeURIComponent(city)}`;
        
        let searchQuery = `city=${encodeURIComponent(city)}`;
        if (state) searchQuery += `&state=${encodeURIComponent(state)}`;
        searchQuery += `&guests=${encodeURIComponent(guests)}
        &checkin=${encodeURIComponent(checkin)}&checkout=${encodeURIComponent(checkout)}`;

        // Step 1: Sync with external API
        const syncRes = await fetch(`http://localhost:3000/api/hotels/syncByCity?${cityQuery}`);

        if (!syncRes.ok) throw new Error("Sync failed");
        const syncData = await syncRes.json();
        const destinationId = syncData.destinationId;
        console.log("Synced hotels:", syncData);
        console.log(destinationId);

        // Step 2: Fetch from local DB after sync
        const dbRes = await fetch(
          `http://localhost:3000/hotels/getHotelsByCity?${searchQuery}`
        );
        if (!dbRes.ok) throw new Error("DB fetch failed");
        const dbData = await dbRes.json();
        console.log("Hotels fetched from DB:", dbData);

        // Step 3: Fetch prices by destination
        console.log({
          city,
          state,
          destination_id: destinationId,
          checkin,
          checkout,
          guests,
        });

        const priceParams = new URLSearchParams({
          city: city,
          state: state,
          destination_id: destinationId,
          checkin,
          checkout,
          guests: (guests as string).trim(),
          rooms: '1',
          lang: 'en_US',
          currency: 'SGD',
          partner_id: '1089',
          landing_page: 'wl-acme-earn',
          product_type: 'earn',
        });
        console.log("Final price URL HotelLists:", `/api/hotels/prices?${priceParams.toString()}`);
        const priceRes = await fetch(`http://localhost:3000/api/hotels/prices?${priceParams}`);
        if (!priceRes.ok) throw new Error("Failed to fetch prices");
        const priceData = await priceRes.json(); // assumed to be [{ hotel_id: "...", price: 123 }, ...]
        console.log("Fetched prices:", priceData);

        // Step 4: Map prices by hotel id
        const priceMap = new Map<string, number>();
        for (const hotel of priceData || []) {
          //console.log(hotel.id, hotel.lowest_converted_price);
          priceMap.set(hotel.id, hotel.lowest_converted_price);
        }
        console.log(priceMap);

        console.log("Price Map IDs:", Array.from(priceMap.keys()));
        console.log("DB Data IDs:", dbData.map((h: any) => h.id));


        // Step 5: Filter dbData to only hotels with price info
        const filteredDbData = dbData.filter((hotel: any) => priceMap.has(hotel.id));
        console.log("Filtered DB Data IDs:", filteredDbData.map((h: any) => h.id));

        // Step 6: Map hotel data with better image logic
        const mapped = filteredDbData.map((hotel: any) => {
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
            id: hotel.id,
            name: hotel.name,
            address: hotel.address,
            images,
            rating: hotel.rating || 0,
            amenities: hotel.amenities ? JSON.parse(hotel.amenities) : [],
            //price: Math.floor(Math.random() * 1000) + 100,
            price: priceMap.get(hotel.id) || 0, // fallback if no price
          };
        });

        setHotels(mapped);
      } catch (err) {
        console.error("Failed to sync or fetch hotels:", err);
        setHotels([]); // clear hotels if an error occurs
      } finally {
        setLoading(false);
      }
    };

    syncAndFetchHotels();
  }, [city, state]);
  
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
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const queryParams = new URLSearchParams();

        // Always include city parameter for filtering
        queryParams.append("city", city);
        if (state) queryParams.append("state", state);

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

        // Apply the same image mapping logic as the initial fetch
        const mapped = data.map((hotel: any) => {
          let images: string[] = [];
          // console.log(`${hotel.name} has ${hotel.image_count} images`);

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
            // schemes: ["hi", "sayang", "ily!"],
          };
        });

        setHotels(mapped);
      } catch (err) {
        console.error("Failed to fetch filtered hotels:", err);
      }
    };

    fetchHotels();
  }, [filters, city, state]);

  useEffect(() => {
    setCurrentPage(1);

    const newParams = new URLSearchParams(location.search);
    newParams.set("page", "1");
    navigate(`${location.pathname}?${newParams.toString()}`);
  }, [hotels]);


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
              {loading ? (
                <div className="text-center py-5">Loading hotels...</div>
              ) : hotels.length === 0 ? (
                <div className="text-center py-5 text-muted">
                  <BsExclamationOctagonFill className="me-2" />
                  No hotels found.
                </div>
              ) : (
                <>
                  {currentHotels.map((hotel, idx) => (
                    <HotelListCard key={idx} hotel={hotel} />
                  ))}

                  <nav className="d-flex justify-content-center" aria-label="navigation">
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
                  </nav>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HotelLists;
