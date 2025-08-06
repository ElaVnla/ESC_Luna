import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import HotelLists from "../HotelLists";
import { HotelsListType } from "../../utils/HotelTypes";

// Mock the hooks module
const mockToggle = vi.fn();
vi.mock("@/hooks", () => ({
  useToggle: () => ({
    isOpen: false,
    toggle: mockToggle,
    show: vi.fn(),
    hide: vi.fn(),
  }),
}));

// Mock the states module
vi.mock("@/states", () => ({
  currency: "$",
  useLayoutContext: () => ({ dir: "ltr" }),
}));

// Mock react-router-dom hooks
const mockNavigate = vi.fn();
const mockLocation = {
  search:
    "?city=Singapore%2C%20Singapore&checkin=2024-01-15&checkout=2024-01-17&guests=2",
  pathname: "/hotels/list",
};

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => mockLocation,
  };
});

// Mock child components to avoid complex dependencies
vi.mock("../HotelListCard", () => ({
  default: ({ hotel }: { hotel: HotelsListType }) => (
    <div data-testid="hotel-card">
      <h3>{hotel.name}</h3>
      <p>{hotel.address}</p>
      <span data-testid="hotel-price">${hotel.price}</span>
      <span data-testid="hotel-star-rating">{hotel.star_rating}</span>
      <span data-testid="hotel-guest-rating">{hotel.guest_rating}</span>
    </div>
  ),
}));

vi.mock("../HotelListFilter", () => ({
  default: ({ filters, setFilters }: any) => (
    <div data-testid="hotel-filter">
      <button
        data-testid="mock-filter-button"
        onClick={() =>
          setFilters({
            ...filters,
            starRatings: ["4"],
          })
        }
      >
        Mock Filter
      </button>
    </div>
  ),
}));

// Mock Bootstrap components that might cause issues
vi.mock("react-bootstrap", () => ({
  Container: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Row: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Col: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Button: ({ children, onClick, ...props }: any) => (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  ),
  Offcanvas: ({ children, show, ...props }: any) =>
    show ? <div {...props}>{children}</div> : null,
  OffcanvasHeader: ({ children, ...props }: any) => (
    <div {...props}>{children}</div>
  ),
  OffcanvasBody: ({ children, ...props }: any) => (
    <div {...props}>{children}</div>
  ),
}));

// Mock icons
vi.mock("react-icons/bs", () => ({
  BsExclamationOctagonFill: () => <span>!</span>,
  BsGridFill: () => <span>Grid</span>,
  BsListUl: () => <span>List</span>,
}));

vi.mock("react-icons/fa6", () => ({
  FaAngleLeft: () => <span>←</span>,
  FaAngleRight: () => <span>→</span>,
  FaSliders: () => <span>Filters</span>,
}));

// Mock fetch API
const mockFetch = vi.fn();
global.fetch = mockFetch;

const mockHotelsData = [
  {
    id: "hotel1",
    name: "Luxury Hotel Singapore",
    address: "123 Marina Bay, Singapore",
    star_rating: 5,
    guest_rating: 4.8,
    amenities: '["WiFi", "Pool", "Gym"]',
    img_baseurl: "https://example.com/",
    img_suffix: ".jpg",
    image_count: 3,
    default_img_index: 0,
  },
  {
    id: "hotel2",
    name: "Budget Inn Singapore",
    address: "456 Orchard Road, Singapore",
    star_rating: 3,
    guest_rating: 4.2,
    amenities: '["WiFi", "AC"]',
    img_baseurl: "https://example.com/",
    img_suffix: ".jpg",
    image_count: 2,
    default_img_index: 1,
  },
];

const mockPricesData = [
  { id: "hotel1", lowest_converted_price: 250 },
  { id: "hotel2", lowest_converted_price: 120 },
];

const setupMockFetch = () => {
  mockFetch
    .mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ destinationId: "dest123" }),
    })
    .mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockHotelsData),
    })
    .mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockPricesData),
    });
};

const renderHotelLists = () => {
  return render(
    <MemoryRouter
      initialEntries={[
        "/hotels/list?city=Singapore%2C%20Singapore&checkin=2024-01-15&checkout=2024-01-17&guests=2",
      ]}
    >
      <HotelLists />
    </MemoryRouter>
  );
};

describe("HotelLists", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    setupMockFetch();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("Component Rendering", () => {
    it("renders without crashing", () => {
      expect(() => renderHotelLists()).not.toThrow();
    });

    it("renders loading state initially", () => {
      renderHotelLists();
      expect(screen.getByText("Loading hotels...")).toBeInTheDocument();
    });

    it("renders filter button for mobile view", () => {
      renderHotelLists();
      expect(screen.getByText("Show filters")).toBeInTheDocument();
    });

    it("renders sort dropdown", () => {
      renderHotelLists();
      expect(screen.getByLabelText("Sort by:")).toBeInTheDocument();
    });
  });

  describe("Hotel Data Fetching", () => {
    it("fetches hotels on component mount", async () => {
      renderHotelLists();

      await waitFor(() => {
        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringContaining("api/hotels/syncByCity")
        );
      });

      await waitFor(() => {
        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringContaining("hotels/getHotelsByCity")
        );
      });

      await waitFor(() => {
        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringContaining("api/hotels/prices")
        );
      });
    });

    it("displays hotels after successful fetch", async () => {
      renderHotelLists();

      await waitFor(
        () => {
          expect(
            screen.getByText("Luxury Hotel Singapore")
          ).toBeInTheDocument();
        },
        { timeout: 3000 }
      );

      await waitFor(
        () => {
          expect(screen.getByText("Budget Inn Singapore")).toBeInTheDocument();
        },
        { timeout: 3000 }
      );
    });

    it("displays no hotels message when no data is returned", async () => {
      mockFetch.mockReset();
      mockFetch
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve({ destinationId: "dest123" }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve([]),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve([]),
        });

      renderHotelLists();

      await waitFor(
        () => {
          expect(screen.getByText("No hotels found.")).toBeInTheDocument();
        },
        { timeout: 3000 }
      );
    });

    it("handles fetch errors gracefully", async () => {
      mockFetch.mockReset();
      mockFetch.mockRejectedValueOnce(new Error("Network error"));

      renderHotelLists();

      await waitFor(
        () => {
          expect(screen.getByText("No hotels found.")).toBeInTheDocument();
        },
        { timeout: 3000 }
      );
    });
  });

  describe("Sorting Functionality", () => {
    it("changes sort option when dropdown value changes", async () => {
      const user = userEvent.setup();
      renderHotelLists();

      await waitFor(
        () => {
          expect(
            screen.getByText("Luxury Hotel Singapore")
          ).toBeInTheDocument();
        },
        { timeout: 3000 }
      );

      const sortSelect = screen.getByLabelText("Sort by:");
      await user.selectOptions(sortSelect, "price-asc");

      expect(sortSelect).toHaveValue("price-asc");
    });

    it("sorts hotels by price ascending", async () => {
      const user = userEvent.setup();
      renderHotelLists();

      await waitFor(
        () => {
          expect(
            screen.getByText("Luxury Hotel Singapore")
          ).toBeInTheDocument();
        },
        { timeout: 3000 }
      );

      const sortSelect = screen.getByLabelText("Sort by:");
      await user.selectOptions(sortSelect, "price-asc");

      // Budget Inn ($120) should appear before Luxury Hotel ($250)
      const hotelCards = screen.getAllByTestId("hotel-card");
      expect(hotelCards[0]).toHaveTextContent("Budget Inn Singapore");
      expect(hotelCards[1]).toHaveTextContent("Luxury Hotel Singapore");
    });

    it("sorts hotels by star rating descending by default", async () => {
      renderHotelLists();

      await waitFor(
        () => {
          expect(
            screen.getByText("Luxury Hotel Singapore")
          ).toBeInTheDocument();
        },
        { timeout: 3000 }
      );

      // Luxury Hotel (5 stars) should appear before Budget Inn (3 stars)
      const hotelCards = screen.getAllByTestId("hotel-card");
      expect(hotelCards[0]).toHaveTextContent("Luxury Hotel Singapore");
      expect(hotelCards[1]).toHaveTextContent("Budget Inn Singapore");
    });
  });

  describe("Filter Functionality", () => {
    it("renders filter component", async () => {
      renderHotelLists();

      await waitFor(
        () => {
          expect(screen.getByTestId("hotel-filter")).toBeInTheDocument();
        },
        { timeout: 3000 }
      );
    });

    it("has clear all filters button", async () => {
      renderHotelLists();

      await waitFor(
        () => {
          expect(screen.getAllByText("Clear all")[0]).toBeInTheDocument();
        },
        { timeout: 3000 }
      );
    });

    it("has filter result button", async () => {
      renderHotelLists();

      await waitFor(
        () => {
          expect(screen.getAllByText("Filter Result")[0]).toBeInTheDocument();
        },
        { timeout: 3000 }
      );
    });
  });

  describe("Error Handling", () => {
    it("handles sync API failure", async () => {
      mockFetch.mockReset();
      mockFetch.mockRejectedValueOnce(new Error("Sync failed"));

      renderHotelLists();

      await waitFor(
        () => {
          expect(screen.queryByText("No hotels found.")).toBeInTheDocument();
        },
        { timeout: 3000 }
      );
    });

    it("handles hotel fetch API failure", async () => {
      mockFetch.mockReset();
      mockFetch
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve({ destinationId: "dest123" }),
        })
        .mockRejectedValueOnce(new Error("Hotel fetch failed"));

      renderHotelLists();

      await waitFor(
        () => {
          expect(screen.getByText("No hotels found.")).toBeInTheDocument();
        },
        { timeout: 3000 }
      );
    });

    it("handles price fetch API failure", async () => {
      mockFetch.mockReset();
      mockFetch
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve({ destinationId: "dest123" }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(mockHotelsData),
        })
        .mockRejectedValueOnce(new Error("Price fetch failed"));

      renderHotelLists();

      await waitFor(
        () => {
          expect(screen.getByText("No hotels found.")).toBeInTheDocument();
        },
        { timeout: 3000 }
      );
    });
  });

  describe("Hotel Data Processing", () => {
    it("processes hotel images correctly", async () => {
      renderHotelLists();

      await waitFor(
        () => {
          expect(
            screen.getByText("Luxury Hotel Singapore")
          ).toBeInTheDocument();
        },
        { timeout: 3000 }
      );

      // Hotel cards should be rendered with processed data
      const hotelCards = screen.getAllByTestId("hotel-card");
      expect(hotelCards).toHaveLength(2);
    });

    it("filters out hotels without price data", async () => {
      mockFetch.mockReset();
      mockFetch
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve({ destinationId: "dest123" }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(mockHotelsData),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve([mockPricesData[0]]), // Only one price
        });

      renderHotelLists();

      await waitFor(
        () => {
          expect(
            screen.getByText("Luxury Hotel Singapore")
          ).toBeInTheDocument();
        },
        { timeout: 3000 }
      );

      // Should only show the hotel with price data
      const hotelCards = screen.getAllByTestId("hotel-card");
      expect(hotelCards).toHaveLength(1);
    });
  });

  describe("URL Parameters", () => {
    it("uses URL parameters for search query", async () => {
      renderHotelLists();

      // Wait for all fetch calls to complete
      await waitFor(
        () => {
          expect(mockFetch).toHaveBeenCalledTimes(3);
        },
        { timeout: 3000 }
      );

      // Check sync API call (only contains city)
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining(
          "api/hotels/syncByCity?city=Singapore%2C%20Singapore"
        )
      );

      // Check hotels fetch call (contains city, guests, checkin, checkout)
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining("hotels/getHotelsByCity")
      );
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining("checkin=2024-01-15")
      );
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining("checkout=2024-01-17")
      );
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining("guests=2")
      );

      // Check prices API call (contains all parameters)
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining("api/hotels/prices")
      );
    });
  });
});
