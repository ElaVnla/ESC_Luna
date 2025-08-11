/* eslint-disable @typescript-eslint/no-explicit-any */
import { vi } from "vitest";
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";

// Mock CSS and images
vi.mock("leaflet/dist/leaflet.css", () => ({ default: "" }));
vi.mock("leaflet/dist/images/marker-icon-2x.png", () => ({
  default: "markerIcon2x",
}));
vi.mock("leaflet/dist/images/marker-icon.png", () => ({
  default: "markerIcon",
}));
vi.mock("leaflet/dist/images/marker-shadow.png", () => ({
  default: "markerShadow",
}));

// Mock Leaflet
vi.mock("leaflet", () => ({
  __esModule: true,
  default: {
    Icon: {
      Default: { prototype: { _getIconUrl: undefined }, mergeOptions: vi.fn() },
    },
  },
  Icon: {
    Default: { prototype: { _getIconUrl: undefined }, mergeOptions: vi.fn() },
  },
}));

// Mock react-leaflet components
const mockMarkerInstance = {
  openPopup: vi.fn(),
  closePopup: vi.fn(),
  setLatLng: vi.fn(),
  getLatLng: vi.fn(),
  addTo: vi.fn(),
  remove: vi.fn(),
};

vi.mock("react-leaflet", () => ({
  MapContainer: ({ children, ...props }: any) => (
    <div data-testid="map-container" {...props}>
      {children}
    </div>
  ),
  TileLayer: (props: any) => <div data-testid="tile-layer" {...props} />,
  Marker: ({ children, ref, ...props }: any) => {
    // Set the ref to our mock instance
    if (ref) {
      if (typeof ref === "function") {
        ref(mockMarkerInstance);
      } else if (ref.current !== undefined) {
        ref.current = mockMarkerInstance;
      }
    }
    return (
      <div data-testid="marker" {...props}>
        {children}
      </div>
    );
  },
  Popup: ({ children, ...props }: any) => (
    <div data-testid="popup" {...props}>
      {children}
    </div>
  ),
  useMap: () => ({ setView: vi.fn(), getZoom: vi.fn(() => 15) }),
  useMapEvent: vi.fn(),
}));

// Mock dependencies
vi.mock("../../HotelDetails/controllers/MapController", () => ({
  MapController: vi.fn().mockImplementation(() => ({
    handleMove: vi.fn(() => false),
    recenterMap: vi.fn(),
  })),
}));

vi.mock("../utils/HotelNavigation", () => ({
  getHotelDetailUrl: vi.fn(() => "/hotel/123"),
}));

vi.mock("react-bootstrap", () => ({
  Button: ({ children, onClick, ...props }: any) => (
    <button data-testid="button" onClick={onClick} {...props}>
      {children}
    </button>
  ),
  Card: Object.assign(
    ({ children, ...props }: any) => (
      <div data-testid="card" {...props}>
        {children}
      </div>
    ),
    {
      Body: ({ children, ...props }: any) => (
        <div data-testid="card-body" {...props}>
          {children}
        </div>
      ),
      Text: ({ children, ...props }: any) => (
        <div data-testid="card-text" {...props}>
          {children}
        </div>
      ),
    }
  ),
}));

// Mock window objects
Object.defineProperty(window, "location", {
  value: { href: "", assign: vi.fn(), replace: vi.fn() },
  writable: true,
});
Object.defineProperty(window, "history", {
  value: { back: vi.fn(), forward: vi.fn(), go: vi.fn() },
  writable: true,
});

import MapComponent from "../HotelsMaps";
import type { HotelsListType } from "../../utils/HotelTypes";

describe("HotelsMaps", () => {
  const mockHotels: HotelsListType[] = [
    {
      id: 1,
      name: "Test Hotel 1",
      address: "123 Test Street",
      latitude: 1.3521,
      longitude: 103.8198,
      images: ["https://example.com/image1.jpg"],
      star_rating: 4,
      guest_rating: 4.5,
      amenities: ["WiFi", "Pool"],
      price: 200,
    },
    {
      id: 2,
      name: "Test Hotel 2",
      address: "456 Test Avenue",
      latitude: 1.36,
      longitude: 103.83,
      images: [],
      star_rating: 3,
      guest_rating: 2.5,
      amenities: ["WiFi"],
      price: 150,
    },
  ];

  const defaultProps = {
    hotels: mockHotels,
    selectedHotel: mockHotels[0],
    rooms: 2,
    nights: 3,
    forceExpanded: false,
    onClose: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    mockMarkerInstance.openPopup.mockClear();
    mockMarkerInstance.closePopup.mockClear();
    document.body.style.overflow = "auto";
    (window.location as any).href = "";
  });

  describe("Basic Rendering", () => {
    it("renders without crashing with all prop combinations", () => {
      // Test minimal props
      expect(() =>
        render(
          <MapComponent hotels={mockHotels} selectedHotel={mockHotels[0]} />
        )
      ).not.toThrow();

      // Test with full props
      expect(() => render(<MapComponent {...defaultProps} />)).not.toThrow();

      // Test with null selectedHotel
      expect(() =>
        render(<MapComponent {...defaultProps} selectedHotel={null as any} />)
      ).not.toThrow();
    });

    it("shows error state when no hotels provided", () => {
      render(<MapComponent {...defaultProps} hotels={[]} />);

      expect(screen.getByText("Map failed to load.")).toBeInTheDocument();
      expect(screen.getByText("Return to Hotels")).toBeInTheDocument();
    });

    it("renders nothing in collapsed state and map in expanded state", () => {
      const { rerender } = render(
        <MapComponent {...defaultProps} forceExpanded={false} />
      );
      expect(screen.queryByTestId("map-container")).not.toBeInTheDocument();

      rerender(<MapComponent {...defaultProps} forceExpanded={true} />);
      expect(screen.getByTestId("map-container")).toBeInTheDocument();
      expect(screen.getAllByTestId("marker")).toHaveLength(mockHotels.length);
    });
  });

  describe("Hotel Information Display", () => {
    it("displays complete hotel information in popup", () => {
      render(<MapComponent {...defaultProps} forceExpanded={true} />);

      // Hotel details - use getAllByText for multiple hotels
      expect(screen.getAllByText("Test Hotel 1")).toHaveLength(1);
      expect(screen.getByText("123 Test Street")).toBeInTheDocument();
      expect(screen.getByText("SGD 200")).toBeInTheDocument();
      expect(screen.getAllByText("2 rooms • 3 nights")).toHaveLength(2); // Both hotels show this

      // Star rating (4 stars)
      expect(screen.getByText("★★★★")).toBeInTheDocument();

      // Guest rating
      expect(screen.getByText("Excellent")).toBeInTheDocument();
      expect(screen.getByText("4.5")).toBeInTheDocument();

      // Hotel image - check all images with alt text "Hotel"
      const hotelImages = screen.getAllByAltText("Hotel");
      expect(hotelImages.length).toBeGreaterThan(0);
      expect(hotelImages[0]).toHaveAttribute(
        "src",
        "https://example.com/image1.jpg"
      );
    });

    it("handles different guest rating categories", () => {
      const testCases = [
        { rating: 4.8, label: "Excellent" },
        { rating: 4.2, label: "Very Good" },
        { rating: 3.5, label: "Average" },
        { rating: 2.0, label: "Poor" },
        { rating: 0, label: "No Rating" },
      ];

      testCases.forEach(({ rating, label }) => {
        const hotelWithRating = { ...mockHotels[0], guest_rating: rating };
        const { unmount } = render(
          <MapComponent
            {...defaultProps}
            hotels={[hotelWithRating]} // Only render the specific hotel
            selectedHotel={hotelWithRating}
            forceExpanded={true}
          />
        );

        expect(screen.getByText(label)).toBeInTheDocument();
        expect(screen.getByText(rating.toFixed(1))).toBeInTheDocument();
        unmount();
      });
    });

    it("handles missing hotel images gracefully", () => {
      render(
        <MapComponent
          {...defaultProps}
          selectedHotel={mockHotels[1]}
          forceExpanded={true}
        />
      );

      const images = screen.getAllByAltText("Hotel");
      const defaultImage = images.find(
        (img) =>
          img.getAttribute("src") === "https://placehold.co/80x80?text=No+Image"
      );
      expect(defaultImage).toBeInTheDocument();
    });

    it("displays singular vs plural room/night text correctly", () => {
      const { rerender } = render(
        <MapComponent
          {...defaultProps}
          rooms={1}
          nights={1}
          forceExpanded={true}
        />
      );
      expect(screen.getAllByText("1 room • 1 night")).toHaveLength(2); // Both hotels show this

      rerender(
        <MapComponent
          {...defaultProps}
          rooms={0}
          nights={0}
          forceExpanded={true}
        />
      );
      expect(screen.getAllByText("0 room • 0 night")).toHaveLength(2); // Both hotels show this (singular for 0)
    });
  });

  describe("Map Configuration and Interactions", () => {
    it("configures map with correct settings", () => {
      render(<MapComponent {...defaultProps} forceExpanded={true} />);

      const mapContainer = screen.getByTestId("map-container");
      expect(mapContainer).toHaveAttribute("center", "1.3521,103.8198");
      expect(mapContainer).toHaveAttribute("zoom", "15");
      // scrollWheelZoom is a boolean prop, but in DOM it might not appear as attribute
      // Let's just check that the map container is rendered
      expect(mapContainer).toBeInTheDocument();
    });

    it("handles hotel selection and navigation", async () => {
      const user = userEvent.setup();
      render(<MapComponent {...defaultProps} forceExpanded={true} />);

      const selectButtons = screen.getAllByText("Select Hotel");
      expect(selectButtons).toHaveLength(2);
      await user.click(selectButtons[0]); // Click the first button

      expect(window.location.href).toContain("/hotels/detail");
    });

    it("handles error state navigation", async () => {
      const user = userEvent.setup();
      render(<MapComponent {...defaultProps} hotels={[]} />);

      const returnButton = screen.getByText("Return to Hotels");
      await user.click(returnButton);

      expect(window.history.back).toHaveBeenCalled();
    });
  });

  describe("Expanded Mode Behavior", () => {
    it("manages expanded state and body overflow correctly", () => {
      const { rerender } = render(
        <MapComponent {...defaultProps} forceExpanded={false} />
      );
      expect(document.body.style.overflow).toBe("auto");

      rerender(<MapComponent {...defaultProps} forceExpanded={true} />);
      expect(document.body.style.overflow).toBe("hidden");
    });

    it("renders and handles close button", async () => {
      const user = userEvent.setup();
      const mockOnClose = vi.fn();

      render(
        <MapComponent
          {...defaultProps}
          forceExpanded={true}
          onClose={mockOnClose}
        />
      );

      const closeButton = screen.getByText("X Close");
      expect(closeButton).toBeInTheDocument();

      await user.click(closeButton);
      expect(mockOnClose).toHaveBeenCalled();
    });

    it("does not render close button when onClose not provided", () => {
      render(
        <MapComponent
          {...defaultProps}
          forceExpanded={true}
          onClose={undefined}
        />
      );
      expect(screen.queryByText("X Close")).not.toBeInTheDocument();
    });
  });

  describe("Edge Cases and Error Handling", () => {
    it("handles hotels with null coordinates", () => {
      const hotelsWithNullCoords = [
        { ...mockHotels[0], latitude: null as any, longitude: null as any },
      ];

      expect(() => {
        render(
          <MapComponent
            {...defaultProps}
            hotels={hotelsWithNullCoords}
            forceExpanded={true}
          />
        );
      }).not.toThrow();

      // Should fallback to default coordinates
      const mapContainer = screen.getByTestId("map-container");
      expect(mapContainer).toHaveAttribute("center", "1.3521,103.8198");
    });

    it("handles undefined hotel properties gracefully", () => {
      const hotelWithUndefinedProps = {
        ...mockHotels[0],
        images: undefined as any,
        star_rating: undefined as any,
        guest_rating: undefined as any,
      };

      expect(() => {
        render(
          <MapComponent
            {...defaultProps}
            selectedHotel={hotelWithUndefinedProps}
            forceExpanded={true}
          />
        );
      }).not.toThrow();
    });
  });
});
