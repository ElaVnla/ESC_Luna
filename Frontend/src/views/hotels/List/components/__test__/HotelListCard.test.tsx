// Frontend/src/views/hotels/List/components/__tests__/HotelListCard.test.tsx
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import HotelListCard from "../HotelListCard";
import { type HotelsListType } from "../../data";

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
  rating: 4.5,
  amenities: ["Air-conditioning", "WiFi", "Pool"],
  price: 150,
  //sale: "20% OFF",
  //schemes: ["Free Cancellation", "Breakfast Included"],
};

const mockHotelWithoutSale: HotelsListType = {
  ...mockHotel,
  //sale: undefined,
  //schemes: undefined,
};

describe("HotelListCard", () => {
  it("renders hotel information correctly", () => {
    render(<HotelListCard hotel={mockHotel} />);

    // Check basic hotel information
    expect(screen.getByText("Test Hotel")).toBeInTheDocument();
    expect(screen.getByText("123 Test Street, Test City")).toBeInTheDocument();
    expect(screen.getByText("$150")).toBeInTheDocument();
    //expect(screen.getByText("/day")).toBeInTheDocument();
  });

  it("displays sale badge when sale is present", () => {
    render(<HotelListCard hotel={mockHotel} />);

    expect(screen.getByText("20% OFF")).toBeInTheDocument();
    expect(screen.getByText("$1000")).toBeInTheDocument(); // strikethrough price
  });

  it("does not display sale badge when sale is not present", () => {
    render(<HotelListCard hotel={mockHotelWithoutSale} />);

    expect(screen.queryByText("20% OFF")).not.toBeInTheDocument();
    expect(screen.queryByText("$1000")).not.toBeInTheDocument();
  });

  it("renders correct number of star ratings", () => {
    render(<HotelListCard hotel={mockHotel} />);

    // For 4.5 rating: 4 full stars + 1 half star = 5 star icons total
    const starIcons = screen.getAllByTestId("star-icon");
    expect(starIcons.length).toBeGreaterThan(0);
  });

  it("renders amenities list", () => {
    render(<HotelListCard hotel={mockHotel} />);

    expect(screen.getByText("Air-conditioning")).toBeInTheDocument();
    expect(screen.getByText("WiFi")).toBeInTheDocument();
    expect(screen.getByText("Pool")).toBeInTheDocument();
  });

  /*
  it("renders schemes when available", () => {
    render(<HotelListCard hotel={mockHotel} />);

    expect(screen.getByText("Free Cancellation")).toBeInTheDocument();
    expect(screen.getByText("Breakfast Included")).toBeInTheDocument();
  });
*/

  /*
  it('shows "Non Refundable" when no schemes are available', () => {
    render(<HotelListCard hotel={mockHotelWithoutSale} />);

    expect(screen.getByText("Non Refundable")).toBeInTheDocument();
  });
*/

  it("renders image slider with correct images", () => {
    render(<HotelListCard hotel={mockHotel} />);

    // Check that TinySlider is rendered
    expect(screen.getByTestId("tiny-slider")).toBeInTheDocument();

    // Check that images are rendered
    const images = screen.getAllByAltText("Card image");
    expect(images).toHaveLength(5);
    expect(images[0]).toHaveAttribute(
      "src",
      "https://d2ey9sqrvkqdfs.cloudfront.net/050G/0.jpg"
    );
  });

  it("renders hotel name as a link to details page", () => {
    render(<HotelListCard hotel={mockHotel} />);

    const hotelLink = screen.getByRole("link", { name: "Test Hotel" });
    expect(hotelLink).toHaveAttribute("href", "/hotels/detail");
  });

  it("renders Select Room button", () => {
    render(<HotelListCard hotel={mockHotel} />);

    const selectButton = screen.getByRole("button", { name: "Select Room" });
    expect(selectButton).toBeInTheDocument();
    expect(selectButton).toHaveClass("btn-dark");
  });

  /*
  it("renders favorite and share buttons", () => {
    render(<HotelListCard hotel={mockHotel} />);

    // Favorite button (icon only, so query by role)
    const favoriteButton = screen.getByRole("button", {
      description: /heart|favorite/i,
    });
    expect(favoriteButton).toBeInTheDocument();

    // Share button
    const shareButton = screen.getByLabelText("Share hotel");
    expect(shareButton).toBeInTheDocument();
  });
*/

  /*
  it("opens share dropdown when clicked", async () => {
    const user = userEvent.setup();
    render(<HotelListCard hotel={mockHotel} />);

    const shareButton = screen.getByLabelText("Share hotel");
    await user.click(shareButton);

    // Check that dropdown items appear
    expect(screen.getByText("Twitter")).toBeInTheDocument();
    expect(screen.getByText("Facebook")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("Copy link")).toBeInTheDocument();
  });
*/

  it("handles missing image gracefully", () => {
    const hotelWithoutImages = { ...mockHotel, images: [] };
    render(<HotelListCard hotel={hotelWithoutImages} />);

    // Should still render the slider container
    expect(screen.getByTestId("tiny-slider")).toBeInTheDocument();
  });

  it("handles zero rating correctly", () => {
    const hotelWithZeroRating = { ...mockHotel, rating: 0 };
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
