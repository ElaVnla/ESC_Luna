import { currency } from "@/states";
import { BsStarFill } from "react-icons/bs";
import { Slider, Box } from "@mui/material";
import { FaStar } from "react-icons/fa";
import { HotelListFilterProps } from "../utils/HotelTypes";

const minDistance = 0.1;

const HotelListFilter = ({ filters, setFilters }: HotelListFilterProps) => {
  const minRating = filters?.guestRatingRange?.[0] ?? 0;
  const maxRating = filters?.guestRatingRange?.[1] ?? 5;
  console.log(minRating);
  console.log(maxRating);

  const handleCheckboxChange = (
    id: string,
    list: string[],
    key: keyof typeof filters
  ) => {
    const updatedList = list.includes(id)
      ? list.filter((item) => item !== id)
      : [...list, id];
    setFilters({ ...filters, [key]: updatedList });
  };

  const handleGuestRatingChange = (
    _: Event,
    newValue: number[],
    activeThumb: number
  ) => {
    const [min, max] = filters.guestRatingRange;

    if (!Array.isArray(newValue)) return;

    if (activeThumb === 0) {
      const newMin = Math.min(newValue[0], max - minDistance);
      setFilters((prev) => ({ ...prev, guestRatingRange: [newMin, max] }));
    } else {
      const newMax = Math.max(newValue[1], min + minDistance);
      setFilters((prev) => ({ ...prev, guestRatingRange: [min, newMax] }));
    }
  };

  return (
    <form className="rounded-3 shadow">
      <hr className="my-0" />
      <div className="card card-body rounded-0 p-4">
        <h6 className="mb-2">Star Ratings</h6>
        <ul className="list-inline mb-0 g-3">
          {["1", "2", "3", "4", "5"].map((star) => (
            <li className="list-inline-item mb-0" key={star}>
              <input
                type="checkbox"
                className="btn-check"
                id={`star-${star}`}
                checked={filters.starRatings.includes(star)}
                onChange={() =>
                  handleCheckboxChange(star, filters.starRatings, "starRatings")
                }
              />
              <label
                className="btn btn-sm btn-light btn-primary-soft-check items-center"
                htmlFor={`star-${star}`}
              >
                {star}
                <BsStarFill />
              </label>
            </li>
          ))}
        </ul>
      </div>

      <hr className="my-0" />
      <div className="card card-body rounded-0 p-4">
        <h6 className="mb-2">Guest Rating</h6>
        <span className="fw-bold">
          {minRating.toFixed(1)} <FaStar color="#ffc107" /> –{" "}
          {maxRating.toFixed(1)} <FaStar color="#ffc107" />
        </span>
        <Box sx={{ width: 1, mt: 2 }}>
          <Slider
            getAriaLabel={() => "Guest Rating Range"}
            value={filters.guestRatingRange}
            onChange={handleGuestRatingChange}
            step={0.1}
            min={0}
            max={5}
            valueLabelDisplay="auto"
            disableSwap
          />
        </Box>
      </div>

      <hr className="my-0" />
      <div className="card card-body rounded-0 p-4">
        <h6 className="mb-2">Price range</h6>
        <div className="col-12">
          {[
            { id: "0-500", label: `Up to ${currency}500` },
            { id: "500-1000", label: `${currency}500 - ${currency}1000` },
            { id: "1000-1500", label: `${currency}1000 - ${currency}1500` },
            { id: "1500-2000", label: `${currency}1500 - ${currency}2000` },
            { id: "2000+", label: `${currency}2000+` },
          ].map(({ id, label }) => (
            <div className="form-check" key={id}>
              <input
                className="form-check-input"
                type="checkbox"
                id={`priceRange${id}`}
                checked={filters.priceRanges.includes(id)}
                onChange={() =>
                  handleCheckboxChange(id, filters.priceRanges, "priceRanges")
                }
              />
              <label className="form-check-label" htmlFor={`priceRange${id}`}>
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default HotelListFilter;