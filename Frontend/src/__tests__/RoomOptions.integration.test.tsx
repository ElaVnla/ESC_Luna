import { render, screen } from '@testing-library/react'
import RoomOptions from '../views/hotels/HotelDetails/components/RoomOptions'
import { test, expect, describe } from 'vitest' 

import { MemoryRouter } from 'react-router-dom' 

const mockRoomData = {
  rooms: [
    {
      roomDescription: 'Deluxe King Room',
      free_cancellation: true,
      base_rate_in_currency: 120,
      long_description: 'Spacious room with king bed',
      images: ['room1.jpg'],
      amenities: ['WiFi', 'Air Conditioning'],
      roomAdditionalInfo: {
        breakfastInfo: 'Breakfast included',
      },
    },
    {
      roomDescription: 'Deluxe King Room',
      free_cancellation: false,
      base_rate_in_currency: 130,
      long_description: 'Spacious room with king bed',
      images: ['room2.jpg'],
      amenities: ['WiFi', 'Air Conditioning'],
      roomAdditionalInfo: {
        breakfastInfo: '',
      },
    },
    {
      roomDescription: 'Standard Twin Room',
      free_cancellation: true,
      base_rate_in_currency: 100,
      long_description: 'Compact room with two beds',
      images: ['room3.jpg'],
      amenities: ['WiFi'],
      roomAdditionalInfo: {
        breakfastInfo: 'Free buffet',
      },
    },
  ],
};



const mockHotelData = {
  name: 'Hotel Test',
  address: '123 Sample Street',
  checkin_time: '2:00 PM',
  latitude: 1.3521,
  longitude: 103.8198,
  description: 'A description',
  amenities: {
    airCondtioning: true,
    miniBarInRoom: true,
  },
  amenities_ratings: [],
};

vi.mock('../views/hotels/HotelDetails/components/RoomCard', () => ({
  default: ({ name, price, schemes, count }: any) => (
    <div data-testid="room-card">
      <h4>{name}</h4>
      <p>{`$${price}`}</p>
      <p>{schemes.join(', ')}</p>
      <p>{`${count} rooms`}</p>
    </div>
  ),
}))


test('renders all unique room types exactly once', () => {
  render(
    <MemoryRouter>
      <RoomOptions roomData={mockRoomData} hotelData={mockHotelData} />
    </MemoryRouter>
  )

  expect(screen.getByText('Deluxe King Room')).toBeInTheDocument()
  expect(screen.getByText('Standard Twin Room')).toBeInTheDocument()
})

test('displays correct room count for each room type', () => {
    render(
    <MemoryRouter>
      <RoomOptions roomData={mockRoomData} hotelData={mockHotelData} />
    </MemoryRouter>
  )

  expect(screen.getByText('2 rooms')).toBeInTheDocument() // Deluxe King Room appears twice
  expect(screen.getByText('1 rooms')).toBeInTheDocument() // Standard Twin Room once
})

test('room schemes are labelled correctly', () => {
    render(
    <MemoryRouter>
      <RoomOptions roomData={mockRoomData} hotelData={mockHotelData} />
    </MemoryRouter>
  )

  expect(screen.getAllByText(/Free Cancellation/i)).toHaveLength(2)
  expect(screen.getAllByText(/Free Breakfast Provided/i)).toHaveLength(2)

})
