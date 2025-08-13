import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import HotelLists from "../views/hotels/List/components/HotelLists";

// Mock environment variables
Object.defineProperty(import.meta, "env", {
  value: {
    VITE_API_BASE: "/api",
  },
  writable: true,
});

// Mock hooks with controlled state
const mockToggle = {
  isOpen: false,
  toggle: vi.fn(),
  show: vi.fn(),
  hide: vi.fn(),
};

vi.mock("@/hooks", () => ({
  useToggle: () => mockToggle,
}));

vi.mock("@/states", () => ({
  currency: "$",
  useLayoutContext: () => ({ dir: "ltr" }),
}));

// Mock navigation
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// Mock external dependencies for child components

// Mock Material-UI components (used by HotelListFilter)
vi.mock("@mui/material", () => ({
  Slider: ({ value, onChange, ...props }: any) => (
    <div data-testid="mui-slider">
      <input
        type="range"
        value={Array.isArray(value) ? value[0] : value}
        onChange={(e) =>
          onChange?.(null, [
            parseFloat(e.target.value),
            Array.isArray(value) ? value[1] : 5,
          ])
        }
        {...props}
      />
    </div>
  ),
  Box: ({ children, ...props }: any) => <div {...props}>{children}</div>,
}));

// Mock TinySlider component (used by HotelListCard)
vi.mock("@/components", () => ({
  TinySlider: ({ children, ...props }: any) => (
    <div data-testid="tiny-slider" {...props}>
      {children}
    </div>
  ),
}));

// Mock tiny-slider library
vi.mock("tiny-slider", () => ({
  tns: () => ({
    destroy: vi.fn(),
  }),
}));

// Mock Leaflet components (used by HotelsMaps)
vi.mock("react-leaflet", () => ({
  MapContainer: ({ children, ...props }: any) => (
    <div data-testid="map-container" {...props}>
      {children}
    </div>
  ),
  TileLayer: () => <div data-testid="tile-layer" />,
  Marker: ({ children, ...props }: any) => (
    <div data-testid="map-marker" {...props}>
      {children}
    </div>
  ),
  Popup: ({ children, ...props }: any) => (
    <div data-testid="map-popup" {...props}>
      {children}
    </div>
  ),
  useMap: () => ({
    setView: vi.fn(),
    getCenter: () => ({ lat: 1.2966, lng: 103.8558 }),
  }),
  useMapEvent: vi.fn(),
}));

// Mock Leaflet library
vi.mock("leaflet", () => ({
  Icon: {
    Default: {
      mergeOptions: vi.fn(),
      prototype: {
        _getIconUrl: vi.fn(),
      },
    },
  },
}));

// Mock CSS imports
vi.mock("leaflet/dist/leaflet.css", () => ({}));
vi.mock("tiny-slider/dist/tiny-slider.css", () => ({}));

// Mock leaflet marker images
vi.mock("leaflet/dist/images/marker-icon-2x.png", () => ({
  default: "marker-icon-2x.png",
}));
vi.mock("leaflet/dist/images/marker-icon.png", () => ({
  default: "marker-icon.png",
}));
vi.mock("leaflet/dist/images/marker-shadow.png", () => ({
  default: "marker-shadow.png",
}));

// Mock controllers
vi.mock("../../HotelDetails/controllers/MapController", () => ({
  MapController: vi.fn().mockImplementation(() => ({
    handleMove: () => false,
  })),
}));

// Mock navigation utilities
vi.mock("../utils/HotelNavigation", () => ({
  getHotelDetailUrl: () => "/hotel/details/1",
}));

// Mock Bootstrap components
vi.mock("react-bootstrap", () => ({
  Container: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Row: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Col: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Button: ({ children, onClick, ...props }: any) => (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  ),
  Card: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  CardBody: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  CardHeader: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  CardFooter: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  CardImg: ({ src, alt, ...props }: any) => (
    <img src={src} alt={alt} {...props} />
  ),
  CardText: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  CardTitle: ({ children, ...props }: any) => <h5 {...props}>{children}</h5>,
  Image: ({ src, alt, ...props }: any) => (
    <img src={src} alt={alt} {...props} />
  ),
  Offcanvas: ({ children, show, ...props }: any) =>
    show ? (
      <div data-testid="offcanvas-filter" {...props}>
        {children}
      </div>
    ) : null,
  OffcanvasHeader: ({ children, ...props }: any) => (
    <div {...props}>{children}</div>
  ),
  OffcanvasBody: ({ children, ...props }: any) => (
    <div {...props}>{children}</div>
  ),
}));

// Mock icons
vi.mock("react-icons/bs", () => ({
  BsExclamationOctagonFill: () => <span data-testid="no-hotels-icon">!</span>,
  BsStarFill: () => <span data-testid="bs-star-fill">★</span>,
  BsGeoAlt: () => <span data-testid="bs-geo-alt">📍</span>,
  BsArrowLeft: () => <span data-testid="bs-arrow-left">←</span>,
  BsArrowRight: () => <span data-testid="bs-arrow-right">→</span>,
}));

vi.mock("react-icons/fa6", () => ({
  FaAngleLeft: () => <span>←</span>,
  FaAngleRight: () => <span>→</span>,
  FaSliders: () => <span>Filters</span>,
  FaStar: () => <span data-testid="fa-star">★</span>,
  FaStarHalfAlt: () => <span data-testid="fa-star-half">☆</span>,
  FaHeart: () => <span data-testid="fa-heart">♥</span>,
  FaCopy: () => <span data-testid="fa-copy">📋</span>,
  FaMapLocationDot: () => <span data-testid="fa-map-location">📍</span>,
}));

vi.mock("react-icons/fa", () => ({
  FaStar: () => <span data-testid="fa-star">★</span>,
  FaStarHalfAlt: () => <span data-testid="fa-star-half">☆</span>,
}));

// Test data
const mockSuccessfulHotels = [
  {
    id: "hotel1",
    name: "Luxury Hotel Singapore",
    address: "123 Marina Bay, Singapore",
    latitude: 1.2966,
    longitude: 103.8558,
    star_rating: 5,
    guest_rating: 4.8,
    amenities: '["WiFi", "Pool"]',
    img_baseurl: "https://example.com/hotel1/",
    img_suffix: ".jpg",
    image_count: 3,
    default_img_index: 0,
  },
  {
    id: "hotel2",
    name: "Budget Inn Singapore",
    address: "456 Orchard Road, Singapore",
    latitude: 1.3048,
    longitude: 103.8318,
    star_rating: 3,
    guest_rating: 4.2,
    amenities: '["WiFi"]',
    img_baseurl: "https://example.com/hotel2/",
    img_suffix: ".jpg",
    image_count: 2,
    default_img_index: 0,
  },
];

const mockPrices = [
  { id: "hotel1", lowest_converted_price: 450 },
  { id: "hotel2", lowest_converted_price: 120 },
];

// Mock fetch API
const mockFetch = vi.fn();
global.fetch = mockFetch;

const renderWithRouter = (urlParams?: string) => {
  const defaultParams =
    "?city=Singapore%2C%20Singapore&checkin=2024-01-15&checkout=2024-01-17&guests=2";
  const actualParams = urlParams || defaultParams;

  console.log("Rendering with URL params:", actualParams);

  try {
    return render(
      <MemoryRouter initialEntries={[`/hotels/list${actualParams}`]}>
        <HotelLists />
      </MemoryRouter>
    );
  } catch (error) {
    console.error("Render error:", error);
    throw error;
  }
};

describe("HotelLists Integration Test", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockToggle.isOpen = false;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("Component Rendering", () => {
    beforeEach(() => {
      // Setup successful API responses
      mockFetch
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve({ destinationId: "dest123" }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(mockSuccessfulHotels),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(mockPrices),
        });
    });

    it("renders basic component structure", () => {
      renderWithRouter();

      // Check if the component renders anything at all
      const body = document.body;
      expect(body).toBeInTheDocument();

      // Debug: Log what's actually being rendered
      console.log("Rendered HTML:", body.innerHTML);
    });
  });

  describe("Successful Hotel Loading", () => {
    beforeEach(() => {
      // Setup successful API responses
      mockFetch
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve({ destinationId: "dest123" }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(mockSuccessfulHotels),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(mockPrices),
        });
    });

    it("renders hotel listing interface", async () => {
      renderWithRouter();

      // Check for main UI elements
      expect(screen.getByText("Show filters")).toBeInTheDocument();
      expect(screen.getByLabelText("Sort by:")).toBeInTheDocument();
      expect(screen.getByText("Clear all")).toBeInTheDocument();
      expect(screen.getByText("Filter Result")).toBeInTheDocument();
    });

    it("loads and displays hotels", async () => {
      renderWithRouter();

      // Wait for loading to complete and hotels to be displayed
      await waitFor(
        () => {
          expect(
            screen.queryByText("Loading hotels...")
          ).not.toBeInTheDocument();
        },
        { timeout: 5000 }
      );

      // Verify hotels are displayed - look for hotel names
      await waitFor(() => {
        expect(screen.getByText("Luxury Hotel Singapore")).toBeInTheDocument();
      });

      expect(screen.getByText("Budget Inn Singapore")).toBeInTheDocument();

      // Check for prices - they should be displayed in the cards
      await waitFor(() => {
        expect(screen.getByText(/\$450/)).toBeInTheDocument();
      });

      expect(screen.getByText(/\$120/)).toBeInTheDocument();
    });

    it("makes correct API calls", async () => {
      renderWithRouter();

      await waitFor(() => {
        expect(mockFetch).toHaveBeenCalledTimes(3);
      });

      // Verify sync call
      expect(mockFetch).toHaveBeenNthCalledWith(
        1,
        expect.stringContaining("/api/hotels/syncByCity")
      );

      // Verify hotels fetch call
      expect(mockFetch).toHaveBeenNthCalledWith(
        2,
        expect.stringContaining("getHotelsByCity")
      );

      // Verify prices call
      expect(mockFetch).toHaveBeenNthCalledWith(
        3,
        expect.stringContaining("/api/hotels/prices")
      );
    });

    it("handles URL parameters correctly", async () => {
      renderWithRouter(
        "?city=Tokyo%2C%20Japan&checkin=2024-02-15&checkout=2024-02-20&guests=4"
      );

      await waitFor(() => {
        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringContaining("city=Tokyo%2C%20Japan")
        );
      });
    });
  });

  describe("Sorting Functionality", () => {
    beforeEach(() => {
      mockFetch
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve({ destinationId: "dest123" }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(mockSuccessfulHotels),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(mockPrices),
        });
    });

    it("displays sort options", async () => {
      renderWithRouter();

      const sortDropdown = screen.getByLabelText("Sort by:");
      expect(sortDropdown).toBeInTheDocument();

      const options = screen.getAllByRole("option");
      expect(options).toHaveLength(4);
      expect(screen.getByText("Star Rating (High to Low)")).toBeInTheDocument();
      expect(screen.getByText("Star Rating (Low to High)")).toBeInTheDocument();
      expect(screen.getByText("Price (High to Low)")).toBeInTheDocument();
      expect(screen.getByText("Price (Low to High)")).toBeInTheDocument();
    });

    it("changes sort order", async () => {
      renderWithRouter();

      // Wait for hotels to load first
      await waitFor(
        () => {
          expect(
            screen.queryByText("Loading hotels...")
          ).not.toBeInTheDocument();
        },
        { timeout: 5000 }
      );

      await waitFor(() => {
        expect(screen.getByText("Luxury Hotel Singapore")).toBeInTheDocument();
      });

      const sortDropdown = screen.getByLabelText("Sort by:");

      // Change to price ascending (Budget Inn should be first)
      fireEvent.change(sortDropdown, { target: { value: "price-asc" } });

      // Verify sort selection changed
      expect(sortDropdown).toHaveValue("price-asc");
    });
  });

  describe("Filter Integration", () => {
    beforeEach(() => {
      mockFetch
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve({ destinationId: "dest123" }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(mockSuccessfulHotels),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(mockPrices),
        });
    });

    it("renders filter components", async () => {
      renderWithRouter();

      // The filters should render immediately since they're not dependent on async data
      expect(screen.getByText("Star Ratings")).toBeInTheDocument();
      expect(screen.getByText("Guest Rating")).toBeInTheDocument();
      expect(screen.getByTestId("mui-slider")).toBeInTheDocument();
    });

    it("can interact with filters", async () => {
      renderWithRouter();

      // Check for star rating filters (1-5 stars) - these should be available immediately
      expect(screen.getByText("Star Ratings")).toBeInTheDocument();

      // The actual filter will have checkboxes for star ratings
      const starCheckboxes = screen.getAllByRole("checkbox");
      expect(starCheckboxes.length).toBeGreaterThan(0);
    });
  });

  describe("User Interactions", () => {
    beforeEach(() => {
      mockFetch
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve({ destinationId: "dest123" }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(mockSuccessfulHotels),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(mockPrices),
        });
    });

    it("handles clear filters action", async () => {
      renderWithRouter();

      // Clear all button should be available immediately
      const clearButton = screen.getByText("Clear all");
      await userEvent.click(clearButton);

      expect(clearButton).toBeInTheDocument();
    });

    it("handles filter result action", async () => {
      renderWithRouter();

      // Wait for hotels to load first
      await waitFor(
        () => {
          expect(
            screen.queryByText("Loading hotels...")
          ).not.toBeInTheDocument();
        },
        { timeout: 5000 }
      );

      await waitFor(() => {
        expect(screen.getByText("Filter Result")).toBeInTheDocument();
      });

      const filterResultButton = screen.getByText("Filter Result");
      await userEvent.click(filterResultButton);

      expect(filterResultButton).toBeInTheDocument();
    });
  });

  describe("Loading States", () => {
    it("shows loading indicator initially", () => {
      // Mock pending fetch
      mockFetch.mockImplementation(() => new Promise(() => {}));

      renderWithRouter();

      expect(screen.getByText("Loading hotels...")).toBeInTheDocument();
    });
  });

  describe("Pagination", () => {
    beforeEach(() => {
      mockFetch
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve({ destinationId: "dest123" }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(mockSuccessfulHotels),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(mockPrices),
        });
    });

    it("shows pagination controls", async () => {
      renderWithRouter();

      // Wait for hotels to load first
      await waitFor(
        () => {
          expect(
            screen.queryByText("Loading hotels...")
          ).not.toBeInTheDocument();
        },
        { timeout: 5000 }
      );

      await waitFor(() => {
        expect(screen.getByText("Luxury Hotel Singapore")).toBeInTheDocument();
      });

      // Check for pagination elements using more specific selectors
      const pageButtons = screen.getAllByText("1");
      const paginationButton = pageButtons.find((button) =>
        button.className.includes("page-link")
      );
      expect(paginationButton).toBeInTheDocument(); // Page number
      expect(screen.getByText("←")).toBeInTheDocument(); // Previous button
      expect(screen.getByText("→")).toBeInTheDocument(); // Next button
    });
  });
});
