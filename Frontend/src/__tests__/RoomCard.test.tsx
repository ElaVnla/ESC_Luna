/* eslint-disable @typescript-eslint/no-explicit-any */
import { vi } from 'vitest';

vi.mock('@/components', () => ({
  TinySlider: ({ children }: any) => <div data-testid="tiny-slider">{children}</div>,
}));

vi.mock('@/hooks', async () => {
  const React = await vi.importActual<typeof import('react')>('react');
  return {
    useToggle: () => {
      const [isOpen, setIsOpen] = React.useState(false);
      return {
        isOpen,
        toggle: () => setIsOpen(prev => !prev),
      };
    },
  };
});

vi.mock('@/states', () => ({
  useLayoutContext: () => ({ dir: 'ltr' }),
}));


vi.mock(import("react-router-dom"), async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
        Link: ({ children, to, ...props }: any) => <a href={to} {...props}>{children}</a>,
    BrowserRouter: actual.BrowserRouter,
  }
})

import React from 'react';
import { describe, it, expect} from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RoomCard from '@/views/hotels/HotelDetails/components/RoomCard';

// Mock data
const mockRoomCardProps = {
  name: 'Deluxe Room',
  price: 200,
  features: '<p>Feature</p>',
  count: 2,
  images: [
    { url: 'img1.jpg', high_resolution_url: 'highres1.jpg' },
    { url: 'img2.jpg', high_resolution_url: 'highres2.jpg' },
  ],
  amenities: ['WiFi', 'TV', 'AC', 'Mini Bar', 'Safe'],
  schemes: ['Refundable'],

  hotelData: {
    id: 'hotel-123',
    name: 'Mock Hotel',
    address: '456 Mock Street',
    address1: '456 Mock Street',
    checkin_time: '3:00 PM',
    latitude: 1.3521,
    longitude: 103.8198,
    description: 'A great place.',
    imageCount: 3,
    rating: 4.2,
    amenities: {
      airConditioning: true,
      miniBarInRoom: true,
    },
    amenities_ratings: [],
  },

  roomDataf4: {
    features: '<p>Test room feature</p>',
    roomAdditionalInfo: '<p>No smoking</p>',
  },
};


describe('RoomCard Component', () => {
  it('renders room information and responds to interactions', () => {
    render(
      <BrowserRouter>
        <RoomCard id={0} {...mockRoomCardProps} />
      </BrowserRouter>
    );

    // Heading and amenities
    expect(screen.getByText('Deluxe Room')).toBeInTheDocument();
    expect(screen.getByText('WiFi')).toBeInTheDocument();

    // Price
    expect(screen.getByText('$200')).toBeInTheDocument();

    // "Select Room" button
    const selectBtn = screen.getByRole('button', { name: /select room/i });
    expect(selectBtn).toBeInTheDocument();

    // "View more details" link toggles modal
    const viewMore = screen.getByText(/view more details/i);
    expect(viewMore).toBeInTheDocument();

    fireEvent.click(viewMore);
    expect(screen.getByText(/room details/i)).toBeInTheDocument();
  });
});
