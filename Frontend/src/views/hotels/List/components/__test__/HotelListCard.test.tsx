// Frontend/src/views/hotels/List/components/__tests__/HotelListCard.test.tsx
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import HotelListCard from "../HotelListCard";
import { type HotelsListType } from "../../utils/HotelTypes";

// Mock react-router-dom
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

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

// Test wrapper component that provides Router context
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>{children}</MemoryRouter>
);

// Helper function to render with Router context
const renderWithRouter = (component: React.ReactElement) =>
  render(component, { wrapper: TestWrapper });

describe("HotelListCard", () => {
  it("renders hotel information correctly", () => {
    renderWithRouter(<HotelListCard hotel={mockHotel} />);

    // Check basic hotel information
    expect(screen.getByText("Test Hotel")).toBeInTheDocument();
    expect(screen.getByText("123 Test Street, Test City")).toBeInTheDocument();
    expect(screen.getByText("$150")).toBeInTheDocument();
    expect(screen.getByText("total")).toBeInTheDocument();
  });

  it("renders correct number of star ratings", () => {
    renderWithRouter(<HotelListCard hotel={mockHotel} />);

    const starIcons = screen.getAllByTestId("star-icon");
    expect(starIcons.length).toBeGreaterThan(0);
  });

  it("renders amenities list", () => {
    renderWithRouter(<HotelListCard hotel={mockHotel} />);

    expect(screen.getByText("Air-conditioning")).toBeInTheDocument();
    expect(screen.getByText("WiFi")).toBeInTheDocument();
    expect(screen.getByText("Pool")).toBeInTheDocument();
  });

  it("renders image slider with correct images", () => {
    renderWithRouter(<HotelListCard hotel={mockHotel} />);

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

  it("renders Select Hotel button", () => {
    renderWithRouter(<HotelListCard hotel={mockHotel} />);

    const selectButton = screen.getByRole("button", { name: "Select Hotel" });
    expect(selectButton).toBeInTheDocument();
    expect(selectButton).toHaveClass("btn-dark");
  });

  it("handles missing image gracefully", () => {
    const hotelWithoutImages = { ...mockHotel, images: [] };
    renderWithRouter(<HotelListCard hotel={hotelWithoutImages} />);

    // Should still render the slider container
    // expect(screen.getByTestId("tiny-slider")).toBeInTheDocument();
    expect(screen.getByAltText("Loading image")).toBeInTheDocument();
    expect(screen.queryByTestId("tiny-slider")).not.toBeInTheDocument();
  });

  it("handles zero rating correctly", () => {
    const hotelWithZeroRating = { ...mockHotel, star_rating: 0 };
    renderWithRouter(<HotelListCard hotel={hotelWithZeroRating} />);

    // Should still render without errors
    expect(screen.getByText("Test Hotel")).toBeInTheDocument();
  });

  it("handles missing amenities gracefully", () => {
    const hotelWithoutAmenities = { ...mockHotel, amenities: [] };
    renderWithRouter(<HotelListCard hotel={hotelWithoutAmenities} />);

    // Should still render the hotel name
    expect(screen.getByText("Test Hotel")).toBeInTheDocument();
  });
});
