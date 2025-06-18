import { type IconType } from 'react-icons'
import { BsBarChartLineFill, BsGraphUpArrow, BsJournals, BsStar } from 'react-icons/bs'

export type StatisticType = {
  title: string
  state: string
  icon: IconType
  variant: string
}

export type UpcomingBookingType = {
  id: number
  name: string
  type: string
  date: string
  status: string
  payment: string
}

const statistics: StatisticType[] = [
  {
    title: 'Total Listings',
    state: '56',
    icon: BsJournals,
    variant: 'bg-success',
  },
  {
    title: 'Earning',
    state: '$2,55,365',
    icon: BsGraphUpArrow,
    variant: 'bg-info',
  },
  {
    title: 'Visitors',
    state: '15K',
    icon: BsBarChartLineFill,
    variant: 'bg-warning',
  },
  {
    title: 'Total Reviews',
    state: '12K',
    icon: BsStar,
    variant: 'bg-primary',
  },
]

const upcomingBookings: UpcomingBookingType[] = [
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
    name: 'Room With Free Cancellation | Breakfast + Lunch',
    type: 'Free Cancellation',
    date: 'Nov 28 - 30',
    status: 'Reserved',
    payment: 'Full Payment',
  },
]

export { statistics, upcomingBookings }
