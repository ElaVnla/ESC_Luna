/* eslint-disable @typescript-eslint/no-explicit-any */
import { vi } from 'vitest';


// mock a useToggle hook
vi.mock('@/hooks', async () => {
    // Use real react
  const React = await vi.importActual<typeof import('react')>('react');
  return {
    useToggle: () => {
      const [isOpen, setIsOpen] = React.useState(false);
      return {
        isOpen,
        toggle: () => setIsOpen((prev) => !prev),
      };
    },
  };
});

// intercept react router dom 
vi.mock(import("react-router-dom"), async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
        Link: ({ children, to, ...props }: any) => <a href={to} {...props}>{children}</a>,
    BrowserRouter: actual.BrowserRouter,
  }
})

// Replace other components with dummies
vi.mock('@/views/hotels/HotelDetails/components/HotelMaps', () => ({
  default: () => <div data-testid="map-component" />,
}));
vi.mock('@/views/hotels/HotelDetails/components/HotelPolicies', () => ({
  default: () => <div data-testid="hotel-policies" />,
}));
vi.mock('@/views/hotels/HotelDetails/components/RoomOptions', () => ({
  default: () => <div data-testid="room-options" />,
}));


import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import AboutHotel from '@/views/hotels/HotelDetails/components/AboutHotel';
import { BrowserRouter } from 'react-router-dom';

// Mock data
const mockHotelData = {
  name: 'Hotel Test',
  address: '123 Sample Street',
  checkin_time: '2:00 PM',
  latitude: 1.3521,
  longitude: 103.8198,
  description:
    'Welcome to our hotel. Distances are displayed to the nearest 0.1 mile and kilometer. <br /> Some extra information.<br />The nearest airports are: Airport A (1 km), Airport B (2 km)',
  amenities: {
    airCondtioning: true,
    miniBarInRoom: true,
  },
  amenities_ratings: [
    { name: 'Cleanliness', score: 8.7 },
    { name: 'Comfort', score: 9.1 },
  ],
};

const mockRoomData = {
  rooms: [
    {
      roomAdditionalInfo: 'No smoking allowed',
    },
  ],
};

describe('AboutHotel Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders hotel description and toggles see more/less', () => {
    render(
      <BrowserRouter>
        <AboutHotel hotelData={mockHotelData} roomData={mockRoomData} />
      </BrowserRouter>
    );

    // Main words should render
    expect(screen.getByText('Main Highlights')).toBeInTheDocument();
    expect(screen.getByText(/Welcome to our hotel/i)).toBeInTheDocument();

    // Only "See more" should be visible initially
    const toggleButton = screen.getByRole('button', { name: /see more/i });
    expect(toggleButton).toBeInTheDocument();

    // Click to expand
    fireEvent.click(toggleButton);

    // "See less" should be visible now
    expect(screen.getByText(/see less/i)).toBeInTheDocument();

    // Nearest airports should be visible
    expect(screen.getByText(/The nearest airports are:/i)).toBeInTheDocument();
  });
});
