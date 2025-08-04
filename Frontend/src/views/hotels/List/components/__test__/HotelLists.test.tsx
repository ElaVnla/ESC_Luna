import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/vitest";
import HotelLists from "../HotelLists";

// Mock external dependencies
vi.mock("@/hooks", () => ({
  useToggle: () => ({ isOpen: false, toggle: vi.fn() }),
}));

vi.mock("@/components", () => ({
  TinySlider: ({ children }: any) => (
    <div data-testid="tiny-slider">{children}</div>
  ),
}));

// Mock child components
vi.mock("../HotelListCard", () => ({
  default: ({ hotel }: any) => (
    <div data-testid="hotel-card">
      <h3>{hotel.name}</h3>
      <p>{hotel.address}</p>
      <span>${hotel.price}</span>
    </div>
  ),
}));

vi.mock("../HotelListFilter", () => ({
  default: ({ onFilterChange }: any) => (
    <div data-testid="hotel-filter">
      <button
        onClick={() =>
          onFilterChange({
            starRatings: ["4"],
            guestRatings: [],
            priceRanges: [],
          })
        }
      >
        Apply 4-star filter
      </button>
    </div>
  ),
}));

// Mock fetch globally
const mockFetch = vi.fn();
global.fetch = mockFetch;

// Test wrapper with router
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

// Test data setup
const mockHotels = [
  {
    id: "1",
    name: "Test Hotel 1",
    address: "123 Test St",
    images: ["image1.jpg", "image2.jpg"],
    rating: 4.5,
    amenities: ["WiFi", "Pool"],
    price: 150,
  },
  {
    id: "2",
    name: "Test Hotel 2",
    address: "456 Test Ave",
    images: ["image3.jpg"],
    rating: 3.8,
    amenities: ["WiFi"],
    price: 120,
  },
];

const mockSyncResponse = { destinationId: "dest123" };
const mockPriceResponse = [
  { id: "1", lowest_converted_price: 150 },
  { id: "2", lowest_converted_price: 120 },
];

// Core functionality tests
describe("HotelLists", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock URL search params
    Object.defineProperty(window, "location", {
      value: {
        search:
          "?city=Singapore&state=&guests=2&checkin=2024-01-01&checkout=2024-01-02",
        pathname: "/hotels/list",
      },
    });
  });

  it("renders loading state initially", () => {
    mockFetch.mockResolvedValueOnce({ ok: true, json: () => mockSyncResponse });

    render(
      <TestWrapper>
        <HotelLists />
      </TestWrapper>
    );

    expect(screen.getByText("Loading hotels...")).toBeInTheDocument();
  });

  it("renders hotels after successful data fetch", async () => {
    // Mock the three API calls in sequence
    mockFetch
      .mockResolvedValueOnce({ ok: true, json: () => mockSyncResponse })
      .mockResolvedValueOnce({ ok: true, json: () => mockHotels })
      .mockResolvedValueOnce({ ok: true, json: () => mockPriceResponse });

    render(
      <TestWrapper>
        <HotelLists />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(screen.getAllByTestId("hotel-card").length).toBe(2);
    });
    expect(screen.getByText("Test Hotel 1")).toBeInTheDocument();
    expect(screen.getByText("Test Hotel 2")).toBeInTheDocument();

    expect(screen.queryByText("Loading hotels...")).not.toBeInTheDocument();
  });

  it("renders 'No hotels found' when no data is returned", async () => {
    mockFetch
      .mockResolvedValueOnce({ ok: true, json: () => mockSyncResponse })
      .mockResolvedValueOnce({ ok: true, json: () => [] })
      .mockResolvedValueOnce({ ok: true, json: () => [] });

    render(
      <TestWrapper>
        <HotelLists />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(screen.getByText("No hotels found.")).toBeInTheDocument();
    });
  });

  it("handles API errors gracefully", async () => {
    mockFetch.mockRejectedValueOnce(new Error("API Error"));

    render(
      <TestWrapper>
        <HotelLists />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(screen.getByText("No hotels found.")).toBeInTheDocument();
    });
  });

  // Pagination tests
  // it("renders pagination when there are multiple pages", async () => {
  //   const manyHotels = Array.from({ length: 25 }, (_, i) => ({
  //     id: `${i + 1}`,
  //     name: `Hotel ${i + 1}`,
  //     address: `Address ${i + 1}`,
  //     images: ["image.jpg"],
  //     rating: 4,
  //     amenities: ["WiFi"],
  //     price: 100 + i,
  //   }));

  //   mockFetch
  //     .mockResolvedValueOnce({ ok: true, json: () => mockSyncResponse })
  //     .mockResolvedValueOnce({ ok: true, json: () => manyHotels })
  //     .mockResolvedValueOnce({
  //       ok: true,
  //       json: () =>
  //         manyHotels.map((h) => ({
  //           id: h.id,
  //           lowest_converted_price: h.price,
  //         })),
  //     });

  //   render(
  //     <TestWrapper>
  //       <HotelLists />
  //     </TestWrapper>
  //   );

  //   await waitFor(() => {
  //     expect(screen.getByText("Hotel 1")).toBeInTheDocument();
  //   });

  //   // Should show pagination
  //   expect(screen.getByText("2")).toBeInTheDocument();
  //   expect(screen.getByText("3")).toBeInTheDocument();
  // });

  // it("navigates to next page when next button is clicked", async () => {
  //   const manyHotels = Array.from({ length: 15 }, (_, i) => ({
  //     id: `${i + 1}`,
  //     name: `Hotel ${i + 1}`,
  //     address: `Address ${i + 1}`,
  //     images: ["image.jpg"],
  //     rating: 4,
  //     amenities: ["WiFi"],
  //     price: 100 + i,
  //   }));

  //   mockFetch
  //     .mockResolvedValueOnce({ ok: true, json: () => mockSyncResponse })
  //     .mockResolvedValueOnce({ ok: true, json: () => manyHotels })
  //     .mockResolvedValueOnce({
  //       ok: true,
  //       json: () =>
  //         manyHotels.map((h) => ({
  //           id: h.id,
  //           lowest_converted_price: h.price,
  //         })),
  //     });

  //   render(
  //     <TestWrapper>
  //       <HotelLists />
  //     </TestWrapper>
  //   );

  //   await waitFor(() => {
  //     expect(screen.getByText("Hotel 1")).toBeInTheDocument();
  //   });

  //   // Click next page
  //   const nextButton = screen.getByRole("button", { name: /next/i });
  //   fireEvent.click(nextButton);

  //   // Should show hotels from page 2
  //   expect(screen.getByText("Hotel 11")).toBeInTheDocument();
  //   expect(screen.queryByText("Hotel 1")).not.toBeInTheDocument();
  // });

  // Filter functionality tests

  // it("applies filters when filter is changed", async () => {
  //   mockFetch
  //     .mockResolvedValueOnce({ ok: true, json: () => mockSyncResponse })
  //     .mockResolvedValueOnce({ ok: true, json: () => mockHotels })
  //     .mockResolvedValueOnce({ ok: true, json: () => mockPriceResponse })
  //     .mockResolvedValueOnce({ ok: true, json: () => [mockHotels[0]] }); // Filtered result

  //   render(
  //     <TestWrapper>
  //       <HotelLists />
  //     </TestWrapper>
  //   );

  //   await waitFor(() => {
  //     expect(screen.getByText("Test Hotel 1")).toBeInTheDocument();
  //   });

  //   // Apply filter
  //   const filterButton = screen.getByText("Apply 4-star filter");
  //   fireEvent.click(filterButton);

  //   await waitFor(() => {
  //     expect(mockFetch).toHaveBeenCalledWith(
  //       expect.stringContaining("getFilteredHotels")
  //     );
  //   });
  // });

  // it("resets to page 1 when filters are applied", async () => {
  //   // Setup with multiple pages first
  //   const manyHotels = Array.from({ length: 15 }, (_, i) => ({
  //     id: `${i + 1}`,
  //     name: `Hotel ${i + 1}`,
  //     address: `Address ${i + 1}`,
  //     images: ["image.jpg"],
  //     rating: 4,
  //     amenities: ["WiFi"],
  //     price: 100 + i,
  //   }));

  //   mockFetch
  //     .mockResolvedValueOnce({ ok: true, json: () => mockSyncResponse })
  //     .mockResolvedValueOnce({ ok: true, json: () => manyHotels })
  //     .mockResolvedValueOnce({
  //       ok: true,
  //       json: () =>
  //         manyHotels.map((h) => ({
  //           id: h.id,
  //           lowest_converted_price: h.price,
  //         })),
  //     })
  //     .mockResolvedValueOnce({ ok: true, json: () => [manyHotels[0]] });

  //   render(
  //     <TestWrapper>
  //       <HotelLists />
  //     </TestWrapper>
  //   );

  //   await waitFor(() => {
  //     expect(screen.getByText("Hotel 1")).toBeInTheDocument();
  //   });

  //   // Go to page 2
  //   const nextButton = screen.getByRole("button", { name: /next/i });
  //   fireEvent.click(nextButton);

  //   await waitFor(() => {
  //     expect(screen.getByText("Hotel 11")).toBeInTheDocument();
  //   });

  //   // Apply filter - should reset to page 1
  //   const filterButton = screen.getByText("Apply 4-star filter");
  //   fireEvent.click(filterButton);

  //   await waitFor(() => {
  //     expect(screen.getByText("Hotel 1")).toBeInTheDocument();
  //   });
  // });

  // UI component tests

  it("renders filter toggle button on mobile", () => {
    render(
      <TestWrapper>
        <HotelLists />
      </TestWrapper>
    );

    expect(screen.getByText("Show filters")).toBeInTheDocument();
  });

  // it("renders view toggle buttons", () => {
  //   render(
  //     <TestWrapper>
  //       <HotelLists />
  //     </TestWrapper>
  //   );

  //   expect(
  //     screen.getByRole("link", { name: /list view/i })
  //   ).toBeInTheDocument();
  //   expect(
  //     screen.getByRole("link", { name: /grid view/i })
  //   ).toBeInTheDocument();
  // });

  // it("renders clear all and filter result buttons", () => {
  //   render(
  //     <TestWrapper>
  //       <HotelLists />
  //     </TestWrapper>
  //   );

  //   expect(screen.getAllByText("Clear all")).toHaveLength(2); // Desktop and mobile
  //   expect(screen.getAllByText("Filter Result")).toHaveLength(2);
  // });

  // Edge cases and error handling

  // it("handles missing query parameters gracefully", () => {
  //   Object.defineProperty(window, "location", {
  //     value: { search: "", pathname: "/hotels/list" },
  //   });

  //   render(
  //     <TestWrapper>
  //       <HotelLists />
  //     </TestWrapper>
  //   );

  //   // Should use default values
  //   expect(mockFetch).toHaveBeenCalledWith(
  //     expect.stringContaining("Singapore%2C%20Singapore")
  //   );
  // });

  // it("filters hotels without price data", async () => {
  //   mockFetch
  //     .mockResolvedValueOnce({ ok: true, json: () => mockSyncResponse })
  //     .mockResolvedValueOnce({ ok: true, json: () => mockHotels })
  //     .mockResolvedValueOnce({
  //       ok: true,
  //       json: () => [{ id: "1", lowest_converted_price: 150 }],
  //     }); // Only one hotel has price

  //   render(
  //     <TestWrapper>
  //       <HotelLists />
  //     </TestWrapper>
  //   );

  //   await waitFor(() => {
  //     expect(screen.getByText("Test Hotel 1")).toBeInTheDocument();
  //     expect(screen.queryByText("Test Hotel 2")).not.toBeInTheDocument(); // Filtered out
  //   });
  // });
});
