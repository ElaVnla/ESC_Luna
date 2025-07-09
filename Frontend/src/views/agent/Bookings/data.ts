export type Booking = {
  id: number
  name: string
  type: string
  date: string
  status: string
  payment: string
}

const bookings: Booking[] = [
  {
    id: 1,
    name: 'Deluxe Pool View',
    type: 'With Breakfast',
    date: 'Nov 22 - 25',
    status: 'Booked',
    payment: 'Full payment',
  },
  {
    id: 2,
    name: 'Deluxe Pool View with Breakfast',
    type: 'Free Cancellation | Breakfast only',
    date: 'Nov 24 - 28',
    status: 'Booked',
    payment: 'On Property',
  },
  {
    id: 3,
    name: 'Luxury Room with Balcony',
    type: 'Free Cancellation | Breakfast + Lunch/Dinner',
    date: 'Nov 24 - 28',
    status: 'Reserved',
    payment: 'Half Payment',
  },
  {
    id: 4,
    name: 'Deluxe Room Twin Bed With Balcony',
    type: 'Free Cancellation',
    date: 'Nov 28 - 30',
    status: 'Booked',
    payment: 'Full Payment',
  },
  {
    id: 5,
    name: 'Deluxe Room Twin Bed With Balcony',
    type: 'Free Cancellation | Breakfast only',
    date: 'Nov 28 - 30',
    status: 'Available',
    payment: 'On Property',
  },
  {
    id: 6,
    name: 'Premium Room With Balcony',
    type: 'Free Cancellation | Breakfast only',
    date: 'Nov 14 - 18',
    status: 'Cancel',
    payment: 'Half Payment',
  },
  {
    id: 7,
    name: 'Deluxe Room King Bed with Balcony',
    type: 'Free Cancellation',
    date: 'Nov 28 - 30',
    status: 'Reserved',
    payment: 'Full Payment',
  },
  {
    id: 8,
    name: 'Superior Room',
    type: 'With Breakfast',
    date: 'Nov 22 - 25',
    status: 'Booked',
    payment: 'Full Payment',
  },
  {
    id: 9,
    name: 'Studio Suite King',
    type: 'Free Cancellation | Breakfast only',
    date: 'Nov 21 - 24',
    status: 'Reserved',
    payment: 'Half Payment',
  },
  {
    id: 10,
    name: 'Rock Family Suite',
    type: 'Free Cancellation | Breakfast + Lunch/Dinner',
    date: 'Dec 02 - 06',
    status: 'Booked',
    payment: 'Full Payment',
  },
]

export { bookings }
