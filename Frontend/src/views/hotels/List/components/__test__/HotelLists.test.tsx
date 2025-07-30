import React from "react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import { BrowserRouter } from "react-router-dom";
import HotelLists from "../HotelLists";

// Mock the useQuery hook specifically
vi.mock("@/hooks", () => ({
  useToggle: () => ({
    isOpen: false,
    toggle: vi.fn(),
  }),
}));

// Mock URLSearchParams for query parameter handling
const mockSearchParams = new URLSearchParams("?city=Singapore");
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useLocation: () => ({
      search: "?city=Singapore",
    }),
    // Add this if your component uses useSearchParams
    useSearchParams: () => [mockSearchParams],
    Link: ({ children, to, ...props }: any) =>
      React.createElement("a", { href: to, ...props }, children),
  };
});

// Mock dependencies
vi.mock("../HotelListCard", () => ({
  default: ({ hotel }: { hotel: any }) => (
    <div data-testid="hotel-card">
      <h3>{hotel.name}</h3>
      <p>{hotel.address}</p>
    </div>
  ),
}));

vi.mock("../HotelListFilter", () => ({
  default: () => <div data-testid="hotel-filter">Filter Component</div>,
}));

vi.mock("@/hooks", () => ({
  useToggle: () => ({
    isOpen: false,
    toggle: vi.fn(),
  }),
}));

// Mock fetch API
const mockHotelsData = [
  {
    id: "1",
    name: "Test Hotel 1",
    address: "Address 1",
    rating: 4.5,
    img_baseurl: "https://example.com/",
    img_suffix: ".jpg",
    image_count: 3,
    amenities: '["WiFi", "Pool"]',
  },
  {
    id: "2",
    name: "Test Hotel 2",
    address: "Address 2",
    rating: 3.8,
    img_baseurl: "https://example.com/",
    img_suffix: ".jpg",
    image_count: 2,
    amenities: '["WiFi", "Gym"]',
  },
  // Add more hotels to test pagination
  ...Array.from({ length: 15 }, (_, i) => ({
    id: `${i + 3}`,
    name: `Test Hotel ${i + 3}`,
    address: `Address ${i + 3}`,
    rating: 4.0,
    img_baseurl: "https://example.com/",
    img_suffix: ".jpg",
    image_count: 1,
    amenities: '["WiFi"]',
  })),
];

const mockFetch = vi.fn();
global.fetch = mockFetch;

// Wrapper component for router context
const RouterWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe("HotelLists", () => {
  beforeEach(() => {
    // Reset mocks before each test
    mockFetch.mockClear();
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockHotelsData,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders hotel list component correctly", async () => {
    render(
      <RouterWrapper>
        <HotelLists />
      </RouterWrapper>
    );

    // Just check for basic elements that should always be there
    await waitFor(
      () => {
        expect(screen.getByText("Show filters")).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  it("fetches hotels data on component mount", async () => {
    render(
      <RouterWrapper>
        <HotelLists />
      </RouterWrapper>
    );

    // Verify fetch was called with correct URL
    expect(mockFetch).toHaveBeenCalledWith(
      "http://localhost:3000/hotels/getHotelsByCity?city=Singapore"
    );

    // Wait for hotels to be rendered
    await waitFor(() => {
      expect(screen.getByText("Test Hotel 1")).toBeInTheDocument();
      expect(screen.getByText("Test Hotel 2")).toBeInTheDocument();
    });
  });

  it("fetches hotels for different city from URL params", async () => {
    // Mock different city in URL
    Object.defineProperty(window, "location", {
      value: {
        search: "?city=Tokyo",
      },
      writable: true,
    });

    render(
      <RouterWrapper>
        <HotelLists />
      </RouterWrapper>
    );

    expect(mockFetch).toHaveBeenCalledWith(
      "http://localhost:3000/hotels/getHotelsByCity?city=Tokyo"
    );
  });

  it("uses default city when no city param provided", async () => {
    Object.defineProperty(window, "location", {
      value: {
        search: "",
      },
      writable: true,
    });

    render(
      <RouterWrapper>
        <HotelLists />
      </RouterWrapper>
    );

    expect(mockFetch).toHaveBeenCalledWith(
      "http://localhost:3000/hotels/getHotelsByCity?city=Singapore"
    );
  });

  it("renders filter components", async () => {
    render(
      <RouterWrapper>
        <HotelLists />
      </RouterWrapper>
    );

    // Check desktop filter
    expect(screen.getByTestId("hotel-filter")).toBeInTheDocument();

    // Check filter buttons
    expect(screen.getByText("Clear all")).toBeInTheDocument();
    expect(screen.getByText("Filter Result")).toBeInTheDocument();
  });

  it("displays correct number of hotels per page", async () => {
    render(
      <RouterWrapper>
        <HotelLists />
      </RouterWrapper>
    );

    await waitFor(() => {
      const hotelCards = screen.getAllByTestId("hotel-card");
      expect(hotelCards).toHaveLength(10); // First page should show 10 hotels
    });
  });

  it("implements pagination correctly", async () => {
    const user = userEvent.setup();
    render(
      <RouterWrapper>
        <HotelLists />
      </RouterWrapper>
    );

    await waitFor(() => {
      expect(screen.getByText("Test Hotel 1")).toBeInTheDocument();
    });

    // Check pagination buttons exist
    const nextButton = screen.getByRole("button", { name: /next/i });
    const page2Button = screen.getByRole("button", { name: "2" });

    expect(nextButton).toBeInTheDocument();
    expect(page2Button).toBeInTheDocument();

    // Click page 2
    await user.click(page2Button);

    // Should show different hotels on page 2
    await waitFor(() => {
      expect(screen.getByText("Test Hotel 11")).toBeInTheDocument();
    });
  });

  it("disables previous button on first page", async () => {
    render(
      <RouterWrapper>
        <HotelLists />
      </RouterWrapper>
    );

    await waitFor(() => {
      const prevButton = screen.getByRole("button", { name: /previous/i });
      expect(prevButton.closest("li")).toHaveClass("disabled");
    });
  });

  it("disables next button on last page", async () => {
    const user = userEvent.setup();
    render(
      <RouterWrapper>
        <HotelLists />
      </RouterWrapper>
    );

    await waitFor(() => {
      expect(screen.getByText("Test Hotel 1")).toBeInTheDocument();
    });

    // Navigate to last page
    const lastPageButton = screen.getByRole("button", { name: "2" });
    await user.click(lastPageButton);

    await waitFor(() => {
      const nextButton = screen.getByRole("button", { name: /next/i });
      expect(nextButton.closest("li")).toHaveClass("disabled");
    });
  });

  it("processes hotel images correctly", async () => {
    render(
      <RouterWrapper>
        <HotelLists />
      </RouterWrapper>
    );

    await waitFor(() => {
      expect(screen.getByText("Test Hotel 1")).toBeInTheDocument();
    });

    // Console logs should show image processing
    expect(console.log).toHaveBeenCalledWith(
      "Hotel data:",
      expect.any(String),
      expect.any(String),
      expect.any(String),
      expect.any(Number)
    );
  });

  it("handles fetch error gracefully", async () => {
    mockFetch.mockRejectedValueOnce(new Error("Network error"));

    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <RouterWrapper>
        <HotelLists />
      </RouterWrapper>
    );

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        "Failed to load hotels:",
        expect.any(Error)
      );
    });

    consoleSpy.mockRestore();
  });

  it("shows mobile filter button", () => {
    render(
      <RouterWrapper>
        <HotelLists />
      </RouterWrapper>
    );

    const mobileFilterButton = screen.getByText("Show filters");
    expect(mobileFilterButton).toBeInTheDocument();
    expect(mobileFilterButton).toHaveClass("d-xl-none");
  });

  it("renders navigation pills with correct links", () => {
    render(
      <RouterWrapper>
        <HotelLists />
      </RouterWrapper>
    );

    const listViewLink = screen.getByRole("link", { name: /list/i });
    const gridViewLink = screen.getByRole("link", { name: /grid/i });

    expect(listViewLink).toHaveAttribute("href", "/hotels/list");
    expect(gridViewLink).toHaveAttribute("href", "/hotels/grid");
  });

  it("applies active class to list view", () => {
    render(
      <RouterWrapper>
        <HotelLists />
      </RouterWrapper>
    );

    const listViewLink = screen.getByRole("link", { name: /list/i });
    expect(listViewLink).toHaveClass("active");
  });

  it("processes amenities JSON correctly", async () => {
    render(
      <RouterWrapper>
        <HotelLists />
      </RouterWrapper>
    );

    await waitFor(() => {
      expect(screen.getByText("Test Hotel 1")).toBeInTheDocument();
    });

    // The component should parse amenities JSON without errors
    expect(mockFetch).toHaveBeenCalled();
  });

  it("generates fallback images when no images available", async () => {
    const hotelWithoutImages = {
      ...mockHotelsData[0],
      img_baseurl: null,
      img_suffix: null,
      image_count: 0,
    };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [hotelWithoutImages],
    });

    render(
      <RouterWrapper>
        <HotelLists />
      </RouterWrapper>
    );

    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith(
        expect.stringContaining("No images found"),
        expect.anything()
      );
    });
  });

  it("scrolls to hotel list when changing pages", async () => {
    const user = userEvent.setup();
    const scrollIntoViewMock = vi.fn();

    // Mock scrollIntoView
    Element.prototype.scrollIntoView = scrollIntoViewMock;

    render(
      <RouterWrapper>
        <HotelLists />
      </RouterWrapper>
    );

    await waitFor(() => {
      expect(screen.getByText("Test Hotel 1")).toBeInTheDocument();
    });

    const page2Button = screen.getByRole("button", { name: "2" });
    await user.click(page2Button);

    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: "smooth",
    });
  });
});
