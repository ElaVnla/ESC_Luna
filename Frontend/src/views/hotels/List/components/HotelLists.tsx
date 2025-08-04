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

// TODO: DONE make checkin, checkout and guests responsive (search button refreshes when checkincheckout/guests change)
// TODO: make "select room" lead to feature 3
// TODO: DONE filter function (stars and price done, left w guest ratings)
// TODO: DONE change hotellistcard display (made amenities nicer)
// TODO: DONE change hotellistcard display "/day" "total"
// TODO: DONE sort hotels by price & ratings, add sort by price/rating option? show rating first
// TODO: map....

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function mapHotelsWithPricesAndImages(hotels: any[], priceData: any[]): any[] {
  const priceMap = new Map<string, number>();
  for (const hotel of priceData || []) {
    priceMap.set(hotel.id, hotel.lowest_converted_price);
  }

  const filtered = hotels.filter((hotel) => priceMap.has(hotel.id));

  return filtered.map((hotel) => {
    let images: string[] = [];

    if (hotel.img_baseurl && hotel.img_suffix && hotel.image_count > 0) {
      const maxImages = Math.min(hotel.image_count, 5);
      for (let i = 0; i < maxImages; i++) {
        const imageUrl = hotel.img_baseurl + i.toString() + hotel.img_suffix;
        if (i === hotel.default_img_index) {
          images.unshift(imageUrl);
        } else {
          images.push(imageUrl);
        }
      }
    }

    if (images.length === 0) {
      images = [`https://placehold.co/800x520/jpeg?text=No+Image`];
    }

    return {
      id: hotel.id,
      name: hotel.name,
      address: hotel.address,
      images,
      star_rating: hotel.star_rating || 0,
      guest_rating: hotel.guest_rating || 0,
      amenities: hotel.amenities ? JSON.parse(hotel.amenities) : [],
      price: priceMap.get(hotel.id) || 0,
    };
  });
}

const HotelLists = () => {
  const { isOpen, toggle } = useToggle();

  const [hotels, setHotels] = useState<HotelsListType[]>([]);
  const [loading, setLoading] = useState(true);
  const [destinationId, setDestinationId] = useState<string>("");

  const [sortBy, setSortBy] = useState<"price" | "rating" | "">("rating");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

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
        &checkin=${encodeURIComponent(checkin)}&checkout=${encodeURIComponent(
          checkout
        )}`;

        // Step 1: Sync with external API
        const syncRes = await fetch(
          `http://localhost:3000/api/hotels/syncByCity?${cityQuery}`
        );

        if (!syncRes.ok) throw new Error("Sync failed");
        const syncData = await syncRes.json();
        const destinationId = syncData.destinationId;
        setDestinationId(destinationId); // store for later use in filter hotel fetch
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
        // console.log({
        //   city,
        //   state,
        //   destination_id: destinationId,
        //   checkin,
        //   checkout,
        //   guests,
        // });

        const priceParams = new URLSearchParams({
          city: city,
          state: state,
          destination_id: destinationId,
          checkin,
          checkout,
          guests: (guests as string).trim(),
          rooms: "1",
          lang: "en_US",
          currency: "SGD",
          partner_id: "1089",
          landing_page: "wl-acme-earn",
          product_type: "earn",
        });
        console.log(
          "Final price URL HotelLists:",
          `/api/hotels/prices?${priceParams.toString()}`
        );
        const priceRes = await fetch(
          `http://localhost:3000/api/hotels/prices?${priceParams}`
        );
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
        console.log(
          "DB Data IDs:",
          dbData.map((h: any) => h.id)
        );

        // Step 5: Filter dbData to only hotels with price info
        const filteredDbData = dbData.filter((hotel: any) =>
          priceMap.has(hotel.id)
        );
        console.log(
          "Filtered DB Data IDs:",
          filteredDbData.map((h: any) => h.id)
        );

        const mapped = mapHotelsWithPricesAndImages(filteredDbData, priceData);
        setHotels(mapped);
      } catch (err) {
        console.error("Failed to sync or fetch hotels:", err);
        setHotels([]); // clear hotels if an error occurs
      } finally {
        setLoading(false);
      }
    };

    syncAndFetchHotels();
  }, [city, state, guests, checkin, checkout]);

  // Sorting section
  const handleSortChange = (
    type: "price" | "rating",
    order: "asc" | "desc"
  ) => {
    setSortBy(type);
    setSortOrder(order);
  };

  // Pagination section
  const hotelListRef = useRef<HTMLDivElement | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 10;

  const totalPages = Math.ceil(hotels.length / hotelsPerPage);
  const startIndex = (currentPage - 1) * hotelsPerPage;
  const endIndex = startIndex + hotelsPerPage;

  // split hotels sorting in primary (sort option) and secondary (guest rating high to low)
  const sortedHotels = [...hotels].sort((a, b) => {
    let primary = 0;

    if (sortBy === "rating") {
      primary =
        sortOrder === "asc"
          ? a.star_rating - b.star_rating
          : b.star_rating - a.star_rating;
    } else if (sortBy === "price") {
      primary = sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    } else {
      primary = b.guest_rating - a.guest_rating;
    }

    if (primary !== 0) return primary;

    return b.guest_rating - a.guest_rating;
  });

  const currentHotels = sortedHotels.slice(startIndex, endIndex);

  const visiblePages = 5;
  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // Filter section
  type FiltersType = {
    starRatings: string[];
    guestRatings: string[];
    guestRatingRange: [number, number];
    priceRanges: string[];
  };

  const [rawFilters, setRawFilters] = useState<FiltersType>({
    starRatings: [],
    guestRatings: [],
    guestRatingRange: [1, 5] as [number, number],
    priceRanges: [],
  });

  const handleFilterChange = async () => {
    if (!destinationId) return;
    try {
      console.log(rawFilters.priceRanges);
      const queryParams = new URLSearchParams();

      // Always include city parameter for filtering
      queryParams.append("city", city);
      if (state) queryParams.append("state", state);

      if (rawFilters.starRatings.length > 0) {
        queryParams.append(
          "rawStarRatings",
          rawFilters.starRatings.map(Number).join(",")
        );
      }

      if (rawFilters.guestRatings.length > 0) {
        queryParams.append(
          "rawGuestRatings",
          rawFilters.guestRatings.join(",")
        );
      }

      if (rawFilters.guestRatingRange) {
        queryParams.append(
          "guestRatingMin",
          rawFilters.guestRatingRange[0].toString()
        );
        queryParams.append(
          "guestRatingMax",
          rawFilters.guestRatingRange[1].toString()
        );
      }

      if (rawFilters.priceRanges.length > 0) {
        queryParams.append("rawPriceRanges", rawFilters.priceRanges.join(","));
      }

      const dbRes = await fetch(
        `http://localhost:3000/hotels/getFilteredHotels?${queryParams.toString()}`
      );

      if (!dbRes.ok) throw new Error("DB fetch failed");
      const dbData = await dbRes.json();
      console.log("Hotels fetched from DB:", dbData);

      const priceParams = new URLSearchParams({
        city: city,
        state: state,
        destination_id: destinationId,
        checkin,
        checkout,
        guests: (guests as string).trim(),
        rooms: "1",
        lang: "en_US",
        currency: "SGD",
        partner_id: "1089",
        landing_page: "wl-acme-earn",
        product_type: "earn",
      });
      console.log(
        "Final price URL HotelLists:",
        `/api/hotels/prices?${priceParams.toString()}`
      );
      const priceRes = await fetch(
        `http://localhost:3000/api/hotels/prices?${priceParams}`
      );
      if (!priceRes.ok) throw new Error("Failed to fetch prices");
      const priceData = await priceRes.json();
      console.log("Fetched prices:", priceData);

      // Step 4: Map prices by hotel id
      const priceMap = new Map<string, number>();
      for (const hotel of priceData || []) {
        //console.log(hotel.id, hotel.lowest_converted_price);
        priceMap.set(hotel.id, hotel.lowest_converted_price);
      }
      console.log(priceMap);

      // Apply the same image mapping logic as the initial fetch
      const filteredDbData = dbData.filter((hotel: any) =>
        priceMap.has(hotel.id)
      );
      console.log(
        "Filtered DB Data IDs:",
        filteredDbData.map((h: any) => h.id)
      );

      // Step 6: Map hotel data with better image logic
      const mapped = mapHotelsWithPricesAndImages(filteredDbData, priceData);
      setHotels(mapped);
    } catch (err) {
      console.error("Failed to fetch filtered hotels:", err);
    }
  };

  useEffect(() => {
    handleFilterChange();
  }, [city, state, guests, checkin, checkout]);

  const resetFilters = () => {
    setRawFilters({
      starRatings: [],
      guestRatings: [],
      guestRatingRange: [0, 5],
      priceRanges: [],
    });
    setCurrentPage(1);
  };

  useEffect(() => {
    resetFilters();
  }, [city, state, guests, checkin, checkout]);

  useEffect(() => {
    setCurrentPage(1);

    const newParams = new URLSearchParams(location.search);
    newParams.set("page", "1");
    navigate(`${location.pathname}?${newParams.toString()}`);
  }, [hotels]);

  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy, sortOrder]);

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
              <HotelListFilter
                filters={rawFilters}
                setFilters={setRawFilters}
              />
              <div className="d-flex justify-content-between p-2 p-xl-0 mt-xl-4">
                <button
                  className="btn btn-link p-0 mb-0"
                  onClick={resetFilters}
                >
                  Clear all
                </button>
                <button
                  className="btn btn-primary mb-0"
                  onClick={() => {
                    handleFilterChange();
                    //toggle();
                  }}
                >
                  Filter Result
                </button>
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
                <HotelListFilter
                  filters={rawFilters}
                  setFilters={setRawFilters}
                />
              </OffcanvasBody>
              <div className="d-flex justify-content-between p-2 p-xl-0 mt-xl-4">
                <button
                  className="btn btn-link p-0 mb-0"
                  onClick={resetFilters}
                >
                  Clear all
                </button>
                <button
                  className="btn btn-primary mb-0"
                  onClick={() => {
                    handleFilterChange();
                  }}
                >
                  Filter Result
                </button>
              </div>
            </Offcanvas>
          </Col>
          <Col xl={8} xxl={9}>
            <div className="mb-3 d-flex gap-2 align-items-center">
              <label htmlFor="sort-by" className="fw-semibold mb-0">
                Sort by:
              </label>
              <select
                id="sort-by"
                className="form-select w-auto"
                value={`${sortBy}-${sortOrder}`}
                onChange={(e) => {
                  const [type, order] = e.target.value.split("-");
                  handleSortChange(
                    type as "price" | "rating",
                    order as "asc" | "desc"
                  );
                }}
              >
                <option value="rating-desc">Star Rating (High to Low)</option>
                <option value="rating-asc">Star Rating (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
                <option value="price-asc">Price (Low to High)</option>
              </select>
            </div>
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
                    <HotelListCard
                      key={idx}
                      hotel={hotel}
                      destinationId={destinationId}
                      city={city}
                      state={state}
                      checkin={checkin}
                      checkout={checkout}
                      guests={guests}
                    />
                  ))}
                  <nav
                    className="d-flex justify-content-center"
                    aria-label="navigation"
                  >
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
