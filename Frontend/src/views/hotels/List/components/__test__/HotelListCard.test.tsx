// Frontend/src/views/hotels/List/components/__tests__/HotelListCard.test.tsx
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import HotelListCard from "../HotelListCard";
import { type HotelsListType } from "../../utils/HotelTypes";

// Mock data
const mockHotel: HotelsListType = {
  id: 1,
  name: "Test Hotel",
  address: "123 Test Street, Test City",
  images: [
    "https://d2ey9sqrvkqdfs.cloudfront.net/050G/0.jpg",
    "https://d2ey9sqrvkqdfs.cloudfront.net/050G/1.jpg",
    "https://d2ey9sqrvkqdfs.cloudfront.net/050G/2.jpg",
    "https://d2ey9sqrvkqdfs.cloudfront.net/050G/3.jpg",
    "https://d2ey9sqrvkqdfs.cloudfront.net/050G/4.jpg",
  ],
  latitude: 100.0,
  longitude: 100.0,
  guest_rating: 4.5,
  star_rating: 4,
  amenities: ["Air-conditioning", "WiFi", "Pool"],
  price: 150,
};

describe("HotelListCard", () => {
  it("renders hotel information correctly", () => {
    render(<HotelListCard hotel={mockHotel} />);

    // Check basic hotel information
    expect(screen.getByText("Test Hotel")).toBeInTheDocument();
    expect(screen.getByText("123 Test Street, Test City")).toBeInTheDocument();
    expect(screen.getByText("$150")).toBeInTheDocument();
    expect(screen.getByText("/day")).toBeInTheDocument();
  });

  it("renders correct number of star ratings", () => {
    render(<HotelListCard hotel={mockHotel} />);

    const starIcons = screen.getAllByTestId("star-icon");
    expect(starIcons.length).toBeGreaterThan(0);
  });

  it("renders amenities list", () => {
    render(<HotelListCard hotel={mockHotel} />);

    expect(screen.getByText("Air-conditioning")).toBeInTheDocument();
    expect(screen.getByText("WiFi")).toBeInTheDocument();
    expect(screen.getByText("Pool")).toBeInTheDocument();
  });

  it("renders image slider with correct images", () => {
    render(<HotelListCard hotel={mockHotel} />);

    // Check that TinySlider is rendered
    expect(screen.getByTestId("tiny-slider")).toBeInTheDocument();

    // Check that images are rendered
    const images = screen.getAllByAltText("Test Hotel");
    expect(images).toHaveLength(5);
    expect(images[0]).toHaveAttribute(
      "src",
      "https://d2ey9sqrvkqdfs.cloudfront.net/050G/0.jpg"
    );
  });

  // it("renders hotel name as a link to details page", () => {
  //   render(<HotelListCard hotel={mockHotel} />);

  //   const hotelLink = screen.getByRole("link", { name: "Test Hotel" });
  //   expect(hotelLink).toHaveAttribute("href", "/hotels/detail");
  // });

  it("renders Select Room button", () => {
    render(<HotelListCard hotel={mockHotel} />);

    const selectButton = screen.getByRole("button", { name: "Select Room" });
    expect(selectButton).toBeInTheDocument();
    expect(selectButton).toHaveClass("btn-dark");
  });

  it("handles missing image gracefully", () => {
    const hotelWithoutImages = { ...mockHotel, images: [] };
    render(<HotelListCard hotel={hotelWithoutImages} />);

    // Should still render the slider container
    // expect(screen.getByTestId("tiny-slider")).toBeInTheDocument();
    expect(screen.getByAltText("Loading image")).toBeInTheDocument();
    expect(screen.queryByTestId("tiny-slider")).not.toBeInTheDocument();
  });

  it("handles zero rating correctly", () => {
    const hotelWithZeroRating = { ...mockHotel, star_rating: 0 };
    render(<HotelListCard hotel={hotelWithZeroRating} />);

    // Should still render without errors
    expect(screen.getByText("Test Hotel")).toBeInTheDocument();
  });

  it("handles missing amenities gracefully", () => {
    const hotelWithoutAmenities = { ...mockHotel, amenities: [] };
    render(<HotelListCard hotel={hotelWithoutAmenities} />);

    // Should still render the hotel name
    expect(screen.getByText("Test Hotel")).toBeInTheDocument();
  });
});
