import hotel2 from '@/assets/images/category/hotel/4by3/02.jpg'
import hotel3 from '@/assets/images/category/hotel/4by3/03.jpg'
import hotel5 from '@/assets/images/category/hotel/4by3/05.jpg'

export type NotificationType = {
  title: string
  content?: string
  time: string
}

type CompareListingType = {
  name: string
  image: string
  price: number
}

export const notificationData: NotificationType[] = [
  {
    title: 'New! Booking flights from New York ✈️',
    content: 'Find the flexible ticket on flights around the world. Start searching today',
    time: '05 Feb 2024',
  },
  {
    title: 'Sunshine saving are here 🌞 save 30% or more on a stay',
    time: '24 Aug 2024',
  },
]

export const compareListings: CompareListingType[] = [
  {
    name: 'Courtyard by Marriott New York',
    image: hotel2,
    price: 750,
  },
  {
    name: 'Club Quarters Hotel',
    image: hotel3,
    price: 800,
  },
  {
    name: 'Pride moon Village Resort & Spa',
    image: hotel5,
    price: 1000,
  },
]
