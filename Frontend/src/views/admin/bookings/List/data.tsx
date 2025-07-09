import { BsBoxArrowInRight, BsBoxArrowRight, BsDoorOpen, BsXCircle } from 'react-icons/bs'
import type { BookingType, StatisticType } from './types'

import image1 from '@/assets/images/category/hotel/4by3/01.jpg'
import image2 from '@/assets/images/category/hotel/4by3/02.jpg'
import image3 from '@/assets/images/category/hotel/4by3/03.jpg'
import image4 from '@/assets/images/category/hotel/4by3/04.jpg'
import image5 from '@/assets/images/category/hotel/4by3/05.jpg'
import image6 from '@/assets/images/category/hotel/4by3/06.jpg'
import image8 from '@/assets/images/category/hotel/4by3/08.jpg'
import image9 from '@/assets/images/category/hotel/4by3/09.jpg'
import image11 from '@/assets/images/category/hotel/4by3/11.jpg'
import image12 from '@/assets/images/category/hotel/4by3/12.jpg'

const statisticData: StatisticType[] = [
  {
    title: 'New Booked Rooms',
    state: 56,
    progress: 60,
    variant: 'primary',
    icon: BsDoorOpen,
    status: (
      <span>
        <span className="text-primary">16 new rooms booked</span> today
      </span>
    ),
  },
  {
    title: 'Cancelled Rooms',
    state: 12,
    progress: 60,
    variant: 'danger',
    icon: BsXCircle,
    status: (
      <span>
        <span className="text-danger">2 canceled rooms</span> today
      </span>
    ),
  },
  {
    title: 'Check-in',
    state: 20,
    progress: 60,
    variant: 'success',
    icon: BsBoxArrowInRight,
    status: (
      <span>
        <span className="text-success">45 reservation</span> incoming
      </span>
    ),
  },
  {
    title: 'Check-out',
    state: 28,
    progress: 60,
    variant: 'orange',
    icon: BsBoxArrowRight,
    status: (
      <span>
        <span className="text-orange">30 reservation</span> outgoing
      </span>
    ),
  },
]

const bookingLists: BookingType[] = [
  {
    name: 'Deluxe Pool View with Breakfast',
    floor: 'Ground Floor: G5',
    bed: 'Double Bed',
    rating: 4.5,
    price: 1500,
    image: image2,
  },
  {
    name: 'Premium Room With Balcony',
    floor: 'First Floor: F3',
    bed: 'Single Bed',
    rating: 4.0,
    price: 750,
    image: image3,
  },
  {
    name: 'Deluxe Pool View',
    floor: 'Ground Floor: G3',
    bed: 'Family Bed',
    rating: 4.2,
    price: 895,
    image: image4,
  },
  {
    name: 'Superior Room',
    floor: 'First Floor: F5',
    bed: 'King Bed',
    rating: 4.0,
    price: 750,
    image: image5,
  },
  {
    name: 'Studio Suite King',
    floor: 'Fifth Floor: Ft3',
    bed: 'Double Bed',
    rating: 4.0,
    price: 1458,
    image: image6,
  },
  {
    name: 'Rock Family Suite',
    floor: 'Second Floor: S4',
    bed: 'Single Bed',
    rating: 4.6,
    price: 1020,
    image: image8,
  },
  {
    name: 'Luxury Room with Balcony',
    floor: 'Third Floor: T2',
    bed: 'Family Bed',
    rating: 4.6,
    price: 847,
    image: image9,
  },
  {
    name: 'Premium Room With Balcony',
    floor: 'Third Floor: T4',
    bed: 'Family Bed',
    rating: 3.9,
    price: 995,
    image: image1,
  },
  {
    name: 'Deluxe Room Twin Bed With Balcony',
    floor: 'Fifth Floor: Ft1',
    bed: 'Double Bed',
    rating: 4.8,
    price: 1650,
    image: image11,
  },
  {
    name: 'Rock Family Suite',
    floor: 'Second Floor: S4',
    bed: 'King Bed',
    rating: 4.6,
    price: 1420,
    image: image12,
  },
]

export { bookingLists, statisticData }
