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
  BsExclamationOctagonFill
} from "react-icons/bs";
import { FaAngleLeft, FaAngleRight, FaSliders } from "react-icons/fa6";
import HotelListCard from "./HotelListCard";
import HotelListFilter from "./HotelListFilter";
import MapComponent from "./HotelsMaps"

import { HotelsListType } from "../utils/HotelTypes";
import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { map } from "leaflet";

// TODO: DONE make checkin, checkout and guests responsive (search button refreshes when checkincheckout/guests change)
// TODO: DONE make "select room" lead to feature 3
// TODO: DONE filter function (stars and price done, left w guest ratings)
// TODO: DONE change hotellistcard display (made amenities nicer)
// TODO: DONE change hotellistcard display "/day" "total"
// TODO: DONE sort hotels by price & ratings, add sort by price/rating option? show rating first
// TODO: DONEEEE map....

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const getNumberOfNights = (checkin: string, checkout: string): number => {
  if (!checkin || !checkout) return 0;

  const checkinDate = new Date(checkin);
  const checkoutDate = new Date(checkout);

  const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
  const nights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return nights > 0 ? nights : 0;
};

function mapHotelsWithPricesAndImages(hotels: any[], priceData: any[]): any[] {
  const priceMap = new Map<string, number>();
  for (const hotel of priceData || []) {
    priceMap.set(hotel.id, hotel.lowest_converted_price);
  }

  const filtered = hotels.filter((hotel) => priceMap.has(hotel.hotel_id));

  return filtered.map((hotel) => {
    let images: string[] = [];

    if (hotel.hotel_img_baseurl && hotel.hotel_img_suffix && hotel.hotel_image_count > 0) {
      const maxImages = Math.min(hotel.hotel_image_count, 5);
      for (let i = 0; i < maxImages; i++) {
        const imageUrl = hotel.hotel_img_baseurl + i.toString() + hotel.hotel_img_suffix;
        if (i === hotel.hotel_default_img_index) {
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
      id: hotel.hotel_id,
      name: hotel.hotel_name,
      address: hotel.hotel_address,
      latitude: parseFloat(hotel.hotel_latitude),
      longitude: parseFloat(hotel.hotel_longitude),
      images,
      star_rating: parseFloat(hotel.hotel_star_rating) || 0,
      guest_rating: parseFloat(hotel.hotel_guest_rating) || 0,
      amenities: hotel.hotel_amenities ? JSON.parse(hotel.hotel_amenities) : [],
      price: priceMap.get(hotel.hotel_id) || 0,
    };
  });
}

function mapHotelsWithPricesAndImagesFilter(hotels: any[]): any[] {
  return hotels.map((hotel) => {
    let images: string[] = [];

    if (
      hotel.hotel_img_baseurl &&
      hotel.hotel_img_suffix &&
      hotel.hotel_image_count > 0
    ) {
      const maxImages = Math.min(hotel.hotel_image_count, 5);
      for (let i = 0; i < maxImages; i++) {
        const imageUrl =
          hotel.hotel_img_baseurl + i.toString() + hotel.hotel_img_suffix;
        if (i === hotel.hotel_default_img_index) {
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
      latitude: parseFloat(hotel.latitude),
      longitude: parseFloat(hotel.longitude),
      images,
      star_rating: parseFloat(hotel.star_rating) || 0,
      guest_rating: parseFloat(hotel.guest_rating) || 0,
      amenities: hotel.amenities ? JSON.parse(hotel.amenities) : [],
      price: Number(hotel.total_price) || 0,
    };
  });
}


const HotelLists = () => {
  // const { isOpen, toggle } = useToggle();

  // const [hotels, setHotels] = useState<HotelsListType[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [destinationId, setDestinationId] = useState<string>("");

  // const [sortBy, setSortBy] = useState<"price" | "rating" | "">("rating");
  // const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // const navigate = useNavigate();

  // const query = useQuery();
  // const city = query.get("city") || "Singapore, Singapore";
  // const state = query.get("state") || "";
  // const guests = query.get("guests") || "1";
  // const rooms = guests.split("|").length;
  // const checkin = query.get("checkin")?.split("T")[0] || "";
  // const checkout = query.get("checkout")?.split("T")[0] || "";
  // const nights = getNumberOfNights(checkin, checkout);
  // console.log("Nights:", nights);
  // console.log(guests, rooms);
  // console.log(checkin, checkout);

  // useEffect(() => {
  //   if (!city) return;

  //   const syncAndFetchHotels = async () => {
  //     // clear old data from previous search immediately
  //     setHotels([]);
  //     console.log(hotels);

  //     setLoading(true);
  //     try {
  //       let cityQuery = `city=${encodeURIComponent(city)}`;

  //       let searchQuery = `city=${encodeURIComponent(city)}`;
  //       if (state) searchQuery += `&state=${encodeURIComponent(state)}`;
  //       searchQuery += `&guests=${encodeURIComponent(guests)}
  //       &checkin=${encodeURIComponent(checkin)}&checkout=${encodeURIComponent(
  //         checkout
  //       )}`;

  //       // Step 1: Sync with external API
  //       const syncRes = await fetch(
  //         `http://localhost:3000/api/hotels/syncByCity?${cityQuery}`
  //       );

  //       if (!syncRes.ok) throw new Error("Sync failed");
  //       const syncData = await syncRes.json();
  //       const destinationId = syncData.destinationId;
  //       setDestinationId(destinationId); // store for later use in filter hotel fetch
  //       console.log("Synced hotels:", syncData);
  //       console.log(destinationId);

  //       // Step 2: Fetch from local DB after sync
  //       const dbRes = await fetch(
  //         `http://localhost:3000/hotels/getHotelsByCity?${searchQuery}`
  //       );
  //       if (!dbRes.ok) throw new Error("DB fetch failed");
  //       const dbData = await dbRes.json();
  //       console.log("Hotels fetched from DB:", dbData);

  //       const priceParams = new URLSearchParams({
  //         city: city,
  //         state: state,
  //         destination_id: destinationId,
  //         checkin,
  //         checkout,
  //         guests: (guests as string).trim(),
  //         rooms: rooms.toString(),
  //         lang: "en_US",
  //         currency: "SGD",
  //         partner_id: "1089",
  //         landing_page: "wl-acme-earn",
  //         product_type: "earn",
  //       });
  //       console.log(
  //         "Final price URL HotelLists:",
  //         `/api/hotels/prices?${priceParams.toString()}`
  //       );
  //       const priceRes = await fetch(
  //         `http://localhost:3000/api/hotels/prices?${priceParams}`
  //       );
  //       if (!priceRes.ok) throw new Error("Failed to fetch prices");
  //       const priceData = await priceRes.json();
  //       console.log("Fetched prices:", priceData);

  //       // Step 3: Map prices by hotel id
  //       const priceMap = new Map<string, number>();
  //       for (const hotel of priceData || []) {
  //         //console.log(hotel.id, hotel.lowest_converted_price);
  //         priceMap.set(hotel.id, hotel.lowest_converted_price);
  //       }
  //       console.log(priceMap);

  //       console.log("Price Map IDs:", Array.from(priceMap.keys()));
  //       console.log(
  //         "DB Data IDs:",
  //         dbData.map((h: any) => h.id)
  //       );

  //       // Step 4: Filter dbData to only hotels with price info
  //       const filteredDbData = dbData.filter((hotel: any) =>
  //         priceMap.has(hotel.id)
  //       );
  //       console.log(
  //         "Filtered DB Data IDs:",
  //         filteredDbData.map((h: any) => h.id)
  //       );

  //       const mapped = mapHotelsWithPricesAndImages(filteredDbData, priceData);
  //       setHotels(mapped);
  //     } catch (err) {
  //       console.error("Failed to sync or fetch hotels:", err);
  //       setHotels([]); // clear hotels if an error occurs
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   syncAndFetchHotels();
  // }, [city, state, guests, checkin, checkout]);
  const { isOpen, toggle } = useToggle();

  const [hotels, setHotels] = useState<HotelsListType[]>([]);
  const [loading, setLoading] = useState(true);
  const [destinationId, setDestinationId] = useState<string>("");

  const [sortBy, setSortBy] = useState<"price" | "rating" | "">("rating");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const navigate = useNavigate();
  const query = useQuery();

  const cityParam = query.get("city") || "Singapore, Singapore";
  const stateParam = query.get("state") || "";
  const guestsParam = query.get("guests") || "1";
  const checkinParam = query.get("checkin")?.split("T")[0] || "";
  const checkoutParam = query.get("checkout")?.split("T")[0] || "";

  // Parse city and state from cityParam ("City, State, CountryCode" or "City, CountryCode")
  // const parts = cityParam.split(",").map((p) => p.trim());
  // const city = parts[0];
  // const state = parts.length >= 3 ? parts[1] : "";

  const rooms = guestsParam.split("|").length;
  const nights = getNumberOfNights(checkinParam, checkoutParam);

  useEffect(() => {
    if (!cityParam) return;

    const syncAndFetchHotels = async () => {
      setHotels([]);
      setLoading(true);
      try {
        // Step 1: Sync hotels with external API by city
        const syncRes = await fetch(
          `http://localhost:3000/api/hotels/syncByCity?city=${encodeURIComponent(cityParam)}`
        );
        if (!syncRes.ok) throw new Error("Sync failed");
        const syncData = await syncRes.json();
        setDestinationId(syncData.destinationId);

        // Step 2: Fetch hotels from local DB with filters including city, state, checkin, checkout, guests, rooms
        const dbUrl = new URL("http://localhost:3000/hotels/getHotelsByCity");
        dbUrl.searchParams.set("city", cityParam);
        dbUrl.searchParams.set("state", stateParam);
        dbUrl.searchParams.set("checkin", checkinParam);
        dbUrl.searchParams.set("checkout", checkoutParam);
        dbUrl.searchParams.set("guests", guestsParam);
        dbUrl.searchParams.set("rooms", rooms.toString());

        const dbRes = await fetch(dbUrl.toString());
        if (!dbRes.ok) throw new Error("DB fetch failed");
        const dbData = await dbRes.json();

        console.log("First hotel from DB:", dbData[0]);


        // Step 3: Fetch prices from external or internal API
        const priceParams = new URLSearchParams({
          city: cityParam,
          state: stateParam,
          destination_id: syncData.destinationId,
          checkin: checkinParam,
          checkout: checkoutParam,
          guests: guestsParam.trim(),
          rooms: rooms.toString(),
          lang: "en_US",
          currency: "SGD",
          partner_id: "1089",
          landing_page: "wl-acme-earn",
          product_type: "earn",
        });
        const priceRes = await fetch(
          `http://localhost:3000/api/hotels/prices?${priceParams.toString()}`
        );
        if (!priceRes.ok) throw new Error("Failed to fetch prices");
        const priceData = await priceRes.json();
        console.log(priceData)

        // Step 4: Map prices by hotel ID for quick lookup
        const priceMap = new Map<string, number>();
        for (const p of priceData || []) {
          console.log(p)
          priceMap.set(p.id, p.lowest_converted_price);
        }
        console.log(priceMap)

        // Step 5: Filter DB hotels to only those with price info
        const filteredDbData = dbData.filter((hotel: any) => priceMap.has(hotel.hotel_id));
        console.log(filteredDbData)

        // Step 6: Map hotels with prices and images
        const mapped = mapHotelsWithPricesAndImages(filteredDbData, priceData);
        console.log(mapped)

        setHotels(mapped);
      } catch (err) {
        console.error("Failed to sync or fetch hotels:", err);
        setHotels([]);
      } finally {
        setLoading(false);
      }
    };

    syncAndFetchHotels();
  }, [cityParam, stateParam, guestsParam, checkinParam, checkoutParam, rooms]);

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
  // FIX LATER

  const sortedHotels = [...hotels].sort((a, b) => {
    let primary = 0;

    if (sortBy === "rating") {
      primary =
        sortOrder === "asc"
          ? a.star_rating - b.star_rating
          : b.star_rating - a.star_rating;
    } else if (sortBy === "price") {
      primary = sortOrder === "asc" ? a.price - b.price : b.price - a.price;
      //primary = 0
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

  // Map section
  const [mapHotel, setMapHotel] = useState<HotelsListType | null>(null);

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

  // const handleFilterChange = async () => {
  //   if (!destinationId) return;
  //   try {
  //     console.log(rawFilters.priceRanges);
  //     const queryParams = new URLSearchParams();

  //     // Always include city parameter for filtering
  //     queryParams.append("city", cityParam);
  //     if (stateParam) queryParams.append("state", stateParam);

  //     if (rawFilters.starRatings.length > 0) {
  //       queryParams.append(
  //         "rawStarRatings",
  //         rawFilters.starRatings.map(Number).join(",")
  //       );
  //     }

  //     if (rawFilters.guestRatings.length > 0) {
  //       queryParams.append(
  //         "rawGuestRatings",
  //         rawFilters.guestRatings.join(",")
  //       );
  //     }

  //     if (rawFilters.guestRatingRange) {
  //       queryParams.append(
  //         "guestRatingMin",
  //         rawFilters.guestRatingRange[0].toString()
  //       );
  //       queryParams.append(
  //         "guestRatingMax",
  //         rawFilters.guestRatingRange[1].toString()
  //       );
  //     }

  //     if (rawFilters.priceRanges.length > 0) {
  //       queryParams.append("rawPriceRanges", rawFilters.priceRanges.join(","));
  //     }

  //     const dbRes = await fetch(
  //       `http://localhost:3000/hotels/getFilteredHotels?${queryParams.toString()}`
  //     );

  //     if (!dbRes.ok) throw new Error("DB fetch failed");
  //     const dbData = await dbRes.json();
  //     console.log("Hotels fetched from DB:", dbData);

  //     const priceParams = new URLSearchParams({
  //       city: cityParam,
  //       state: stateParam,
  //       destination_id: destinationId,
  //       checkin: checkinParam,
  //       checkout: checkoutParam,
  //       guests: (guestsParam as string).trim(),
  //       rooms: rooms.toString(),
  //       currency: "SGD"
  //     });
  //     console.log(
  //       "Final price URL HotelLists:",
  //       `http://localhost:3000/hotels/getHotelPrices?${priceParams.toString()}`
  //     );
  //     const priceRes = await fetch(
  //       `http://localhost:3000/hotels/getHotelPrices?${priceParams}`
  //     );
  //     if (!priceRes.ok) throw new Error("Failed to fetch prices");
  //     const priceData = await priceRes.json();
  //     console.log("Fetched prices:", priceData);

  //     // Map prices by hotel id
  //     const priceMap = new Map<string, number>();
  //     for (const hotel of priceData || []) {
  //       //console.log(hotel.id, hotel.lowest_converted_price);
  //       priceMap.set(hotel.id, hotel.lowest_converted_price);
  //     }
  //     console.log(priceMap);

  //     // Apply the same image mapping logic as the initial fetch
  //     const filteredDbData = dbData.filter((hotel: any) =>
  //       priceMap.has(hotel.id)
  //     );
  //     console.log(
  //       "Filtered DB Data IDs:",
  //       filteredDbData.map((h: any) => h.id)
  //     );

  //     // Map hotel data with better image logic
  //     const mapped = mapHotelsWithPricesAndImages(filteredDbData, priceData);
  //     setHotels(mapped);
  //     console.log(mapped);
  //   } catch (err) {
  //     console.error("Failed to fetch filtered hotels:", err);
  //   }
  // };

  const handleFilterChange = async () => {
  if (!destinationId) return;
  try {
    const queryParams = new URLSearchParams();

    // Always include city and state params
    queryParams.append("city", cityParam);
    if (stateParam) queryParams.append("state", stateParam);

    // Add checkin/checkout/guests/rooms for price filtering
    queryParams.append("checkin", checkinParam);
    queryParams.append("checkout", checkoutParam);
    queryParams.append("guests", (guestsParam as string).trim());
    queryParams.append("rooms", rooms.toString());

    if (rawFilters.starRatings.length > 0) {
      queryParams.append(
        "rawStarRatings",
        rawFilters.starRatings.map(Number).join(",")
      );
    }

    if (rawFilters.guestRatings.length > 0) {
      queryParams.append("guestRatingMin", rawFilters.guestRatingRange[0].toString());
      queryParams.append("guestRatingMax", rawFilters.guestRatingRange[1].toString());
    }

    if (rawFilters.priceRanges.length > 0) {
      queryParams.append("rawPriceRanges", rawFilters.priceRanges.join(","));
    }

    const dbRes = await fetch(
      `http://localhost:3000/hotels/getFilteredHotels?${queryParams.toString()}`
    );

    //const dbRes = await fetch(dbUrl.toString());
    if (!dbRes.ok) throw new Error("DB fetch failed");
    const dbData = await dbRes.json();

    console.log("First hotel from DB:", dbData[0]);


    // Step 3: Fetch prices from external or internal API
    const priceParams = new URLSearchParams({
      city: cityParam,
      state: stateParam,
      destination_id: destinationId,
      checkin: checkinParam,
      checkout: checkoutParam,
      guests: guestsParam.trim(),
      rooms: rooms.toString(),
      lang: "en_US",
      currency: "SGD",
      partner_id: "1089",
      landing_page: "wl-acme-earn",
      product_type: "earn",
    });
    const priceRes = await fetch(
      `http://localhost:3000/api/hotels/prices?${priceParams.toString()}`
    );
    if (!priceRes.ok) throw new Error("Failed to fetch prices");
    const priceData = await priceRes.json();
    console.log(priceData)

    // Step 4: Map prices by hotel ID for quick lookup
    const priceMap = new Map<string, number>();
    for (const p of priceData || []) {
      console.log(p)
      priceMap.set(p.id, p.lowest_converted_price);
    }
    console.log(priceMap)

    console.log("DB hotels:", dbData);
    console.log("PriceMap keys:", [...priceMap.keys()]);

    // Step 5: Filter DB hotels to only those with price info
    const filteredDbData = dbData.filter((hotel: any) => priceMap.has(hotel.hotel_id));
    console.log(filteredDbData)

    // Step 6: Map hotels with prices and images
    const mapped = mapHotelsWithPricesAndImages(filteredDbData, priceData);
    console.log(mapped)

    setHotels(mapped);

    // if (!res.ok) throw new Error("DB fetch failed");
    // const dbData = await res.json();
    // console.log("Filtered hotels from DB:", dbData);


    // // map images and set hotels state
    // const mapped = mapHotelsWithPricesAndImagesFilter(dbData);
    // setHotels(mapped);
  } catch (err) {
    console.error("Failed to fetch filtered hotels:", err);
  }
};

  useEffect(() => {
    handleFilterChange();
  }, [cityParam, stateParam, guestsParam, checkinParam, checkoutParam]);

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
  }, [cityParam, stateParam, guestsParam, checkinParam, checkoutParam]);

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
                      city={cityParam}
                      state={stateParam}
                      checkin={checkinParam}
                      checkout={checkoutParam}
                      guests={guestsParam}
                      setShowMap={() => setMapHotel(hotel)}
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
        {mapHotel && (
          <MapComponent
            hotels={currentHotels}
            selectedHotel={mapHotel}
            rooms={rooms}
            nights={nights}
            forceExpanded={true}
            onClose={() => setMapHotel(null)}
          />
        )}
      </Container>
    </section>
  );
};

export default HotelLists;