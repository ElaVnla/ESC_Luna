import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import HotelListFilter from "../views/hotels/List/components/HotelListFilter";

// Mock the states module
vi.mock("@/states", () => ({
  currency: "$",
}));

// Mock the hooks module
vi.mock("@/hooks", () => ({
  useToggle: () => [false, vi.fn()],
}));

describe("HotelListFilter", () => {
  const mockFilters = {
    starRatings: [],
    guestRatings: [],
    priceRanges: [],
    guestRatingRange: [0, 5] as [number, number],
  };

  const mockSetFilters = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all filter sections", () => {
    render(
      <HotelListFilter filters={mockFilters} setFilters={mockSetFilters} />
    );

    expect(screen.getByText("Star Ratings")).toBeInTheDocument();
    expect(screen.getByText("Guest Rating")).toBeInTheDocument();
    expect(screen.getByText("Price range")).toBeInTheDocument();
  });

  describe("Star Ratings Filter", () => {
    it("renders all star rating options", () => {
      render(
        <HotelListFilter filters={mockFilters} setFilters={mockSetFilters} />
      );

      for (let i = 1; i <= 5; i++) {
        expect(screen.getByLabelText(i.toString())).toBeInTheDocument();
      }
    });

    it("handles star rating selection", async () => {
      const user = userEvent.setup();
      render(
        <HotelListFilter filters={mockFilters} setFilters={mockSetFilters} />
      );

      const star3Checkbox = screen.getByLabelText("3");
      await user.click(star3Checkbox);

      expect(mockSetFilters).toHaveBeenCalledWith({
        ...mockFilters,
        starRatings: ["3"],
      });
    });

    it("shows selected star ratings as checked", () => {
      const filtersWithStars = {
        ...mockFilters,
        starRatings: ["3", "4"],
      };

      render(
        <HotelListFilter
          filters={filtersWithStars}
          setFilters={mockSetFilters}
        />
      );

      expect(screen.getByLabelText("3")).toBeChecked();
      expect(screen.getByLabelText("4")).toBeChecked();
      expect(screen.getByLabelText("1")).not.toBeChecked();
    });

    it("handles deselecting star ratings", async () => {
      const user = userEvent.setup();
      const filtersWithStars = {
        ...mockFilters,
        starRatings: ["3", "4"],
      };

      render(
        <HotelListFilter
          filters={filtersWithStars}
          setFilters={mockSetFilters}
        />
      );

      const star3Checkbox = screen.getByLabelText("3");
      await user.click(star3Checkbox);

      expect(mockSetFilters).toHaveBeenCalledWith({
        ...filtersWithStars,
        starRatings: ["4"],
      });
    });
  });

  describe("Guest Rating Filter", () => {
    it("displays current guest rating range", () => {
      const filtersWithRange = {
        ...mockFilters,
        guestRatingRange: [2.5, 4.8] as [number, number],
      };

      render(
        <HotelListFilter
          filters={filtersWithRange}
          setFilters={mockSetFilters}
        />
      );

      expect(screen.getByText("2.5")).toBeInTheDocument();
      expect(screen.getByText("4.8")).toBeInTheDocument();
    });

    it("renders guest rating slider", () => {
      render(
        <HotelListFilter filters={mockFilters} setFilters={mockSetFilters} />
      );

      const sliders = screen.getAllByRole("slider", {
        name: "Guest Rating Range",
      });
      expect(sliders).toHaveLength(2); // left thumb is one slider, right thumb is another slider
    });

    it("displays star icons above guest rating slider", () => {
      render(
        <HotelListFilter filters={mockFilters} setFilters={mockSetFilters} />
      );

      // Check for the presence of star icons by looking for SVG elements in the guest rating section
      const guestRatingSection = screen
        .getByText("Guest Rating")
        .closest("div");
      const starIcons = guestRatingSection?.querySelectorAll("svg");
      expect(starIcons).toHaveLength(2); // Should have 2 star icons (min and max)
    });
  });

  describe("Price Range Filter", () => {
    const priceRanges = [
      { id: "0-500", label: "Up to $500" },
      { id: "500-1000", label: "$500 - $1000" },
      { id: "1000-1500", label: "$1000 - $1500" },
      { id: "1500-2000", label: "$1500 - $2000" },
      { id: "2000+", label: "$2000+" },
    ];

    it("renders all price range options", () => {
      render(
        <HotelListFilter filters={mockFilters} setFilters={mockSetFilters} />
      );

      priceRanges.forEach(({ label }) => {
        expect(screen.getByText(label)).toBeInTheDocument();
      });
    });

    it("handles price range selection", async () => {
      const user = userEvent.setup();
      render(
        <HotelListFilter filters={mockFilters} setFilters={mockSetFilters} />
      );

      const priceCheckbox = screen.getByLabelText("$500 - $1000");
      await user.click(priceCheckbox);

      expect(mockSetFilters).toHaveBeenCalledWith({
        ...mockFilters,
        priceRanges: ["500-1000"],
      });
    });

    it("shows selected price ranges as checked", () => {
      const filtersWithPrices = {
        ...mockFilters,
        priceRanges: ["500-1000", "1000-1500"],
      };

      render(
        <HotelListFilter
          filters={filtersWithPrices}
          setFilters={mockSetFilters}
        />
      );

      expect(screen.getByLabelText("$500 - $1000")).toBeChecked();
      expect(screen.getByLabelText("$1000 - $1500")).toBeChecked();
      expect(screen.getByLabelText("Up to $500")).not.toBeChecked();
    });

    it("handles deselecting price ranges", async () => {
      const user = userEvent.setup();
      const filtersWithPrices = {
        ...mockFilters,
        priceRanges: ["500-1000", "1000-1500"],
      };

      render(
        <HotelListFilter
          filters={filtersWithPrices}
          setFilters={mockSetFilters}
        />
      );

      const priceCheckbox = screen.getByLabelText("$500 - $1000");
      await user.click(priceCheckbox);

      expect(mockSetFilters).toHaveBeenCalledWith({
        ...filtersWithPrices,
        priceRanges: ["1000-1500"],
      });
    });
  });

  describe("Filter State Management", () => {
    it("handles multiple filter selections simultaneously", async () => {
      const user = userEvent.setup();
      render(
        <HotelListFilter filters={mockFilters} setFilters={mockSetFilters} />
      );

      // Select star rating
      const star4Checkbox = screen.getByLabelText("4");
      await user.click(star4Checkbox);

      // Select price range
      const priceCheckbox = screen.getByLabelText("$1000 - $1500");
      await user.click(priceCheckbox);

      expect(mockSetFilters).toHaveBeenCalledTimes(2);
    });

    it("preserves other filter values when updating one filter type", async () => {
      const user = userEvent.setup();
      const existingFilters = {
        starRatings: ["4"],
        guestRatings: [],
        priceRanges: ["500-1000"],
        guestRatingRange: [2.0, 4.5] as [number, number],
      };

      render(
        <HotelListFilter
          filters={existingFilters}
          setFilters={mockSetFilters}
        />
      );

      const star5Checkbox = screen.getByLabelText("5");
      await user.click(star5Checkbox);

      expect(mockSetFilters).toHaveBeenCalledWith({
        ...existingFilters,
        starRatings: ["4", "5"],
      });
    });
  });

  describe("Accessibility", () => {
    it("has proper form structure", () => {
      const { container } = render(
        <HotelListFilter filters={mockFilters} setFilters={mockSetFilters} />
      );

      const form = container.querySelector("form");
      expect(form).toBeInTheDocument();
      expect(form).toHaveClass("rounded-3", "shadow");
    });

    it("has proper labels for all checkboxes", () => {
      render(
        <HotelListFilter filters={mockFilters} setFilters={mockSetFilters} />
      );

      // Star rating checkboxes
      for (let i = 1; i <= 5; i++) {
        const checkbox = screen.getByLabelText(i.toString());
        expect(checkbox).toHaveAttribute("type", "checkbox");
      }

      // Price range checkboxes
      const priceLabels = [
        "Up to $500",
        "$500 - $1000",
        "$1000 - $1500",
        "$1500 - $2000",
        "$2000+",
      ];

      priceLabels.forEach((label) => {
        const checkbox = screen.getByLabelText(label);
        expect(checkbox).toHaveAttribute("type", "checkbox");
      });
    });
  });

  describe("Component Rendering", () => {
    it("renders without crashing", () => {
      expect(() => {
        render(
          <HotelListFilter filters={mockFilters} setFilters={mockSetFilters} />
        );
      }).not.toThrow();
    });

    it("has proper CSS classes for styling", () => {
      const { container } = render(
        <HotelListFilter filters={mockFilters} setFilters={mockSetFilters} />
      );

      const form = container.querySelector("form");
      expect(form).toHaveClass("rounded-3", "shadow");
    });
  });

  describe("Edge Cases", () => {
    it("handles empty filters object gracefully", () => {
      const emptyFilters = {
        starRatings: [],
        guestRatings: [],
        priceRanges: [],
        guestRatingRange: [0, 5] as [number, number],
      };

      expect(() => {
        render(
          <HotelListFilter filters={emptyFilters} setFilters={mockSetFilters} />
        );
      }).not.toThrow();
    });

    it("handles missing guestRatingRange gracefully", () => {
      const filtersWithoutRange = {
        starRatings: [],
        guestRatings: [],
        priceRanges: [],
        guestRatingRange: undefined as any,
      };

      expect(() => {
        render(
          <HotelListFilter
            filters={filtersWithoutRange}
            setFilters={mockSetFilters}
          />
        );
      }).not.toThrow();
    });

    it("displays default guest rating range when values are missing", () => {
      const filtersWithNullRange = {
        starRatings: [],
        guestRatings: [],
        priceRanges: [],
        guestRatingRange: null as any,
      };

      render(
        <HotelListFilter
          filters={filtersWithNullRange}
          setFilters={mockSetFilters}
        />
      );

      // Should default to 0.0 and 5.0
      expect(screen.getByText(0.0)).toBeInTheDocument();
      expect(screen.getByText(5.0)).toBeInTheDocument();
    });
  });
});
