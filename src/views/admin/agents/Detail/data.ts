import { FaHotel } from 'react-icons/fa'
import { FaCalendarDays, FaMoneyBillTrendUp } from 'react-icons/fa6'
import type { HotelType, StatisticType } from './types'

import hotel10 from '@/assets/images/category/hotel/4by3/10.jpg'
import hotel9 from '@/assets/images/category/hotel/4by3/09.jpg'
import hotel8 from '@/assets/images/category/hotel/4by3/08.jpg'
import hotel7 from '@/assets/images/category/hotel/4by3/07.jpg'

const statisticsData: StatisticType[] = [
  {
    title: 'Total Hotels',
    state: '04',
    icon: FaHotel,
    variant: 'primary',
  },
  {
    title: 'Booking this month',
    state: '56',
    icon: FaCalendarDays,
    variant: 'warning',
  },
  {
    title: 'Earning this month',
    state: '$2486.95',
    icon: FaMoneyBillTrendUp,
    variant: 'success',
  },
]

const hotelsList: HotelType[] = [
  {
    name: 'Pride moon Village Resort & Spa',
    address: '31J W Spark Street, California - 24578',
    price: 1586,
    image: hotel10,
  },
  {
    name: 'Courtyard by Marriott New York',
    address: '258 W jimmy Street, New york - 24578',
    price: 1025,
    image: hotel8,
  },
  {
    name: 'Park Plaza Lodge Hotel',
    address: '31J W Spark Street, California - 24578',
    price: 958,
    image: hotel9,
  },
  {
    name: 'Royal Beach Resort',
    address: '589 J Wall Street, London - 24578',
    price: 1005,
    image: hotel7,
  },
]
export { statisticsData, hotelsList }
