import hotel1 from '@/assets/images/category/hotel/4by3/01.jpg'
import hotel2 from '@/assets/images/category/hotel/4by3/02.jpg'
import hotel3 from '@/assets/images/category/hotel/4by3/03.jpg'
import hotel4 from '@/assets/images/category/hotel/4by3/04.jpg'
import hotel5 from '@/assets/images/category/hotel/4by3/05.jpg'
import hotel7 from '@/assets/images/category/hotel/4by3/07.jpg'
import hotel8 from '@/assets/images/category/hotel/4by3/08.jpg'
import hotel9 from '@/assets/images/category/hotel/4by3/09.jpg'
import hotel10 from '@/assets/images/category/hotel/4by3/10.jpg'

export type NotificationType = {
  title: string
  content?: string
  time: string
}

export type HotelsGridType = {
  id: number
  name: string
  sale?: string
  images: string[]
  rating: number
  feature: string[]
  price: number
}

const hotels: HotelsGridType[] = [
  {
    id: 1,
    name: 'Hotel Baljees Regency',
    sale: '30% Off',
    images: [hotel9, hotel2, hotel3, hotel1],
    rating: 4.5,
    feature: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 750,
  },
  {
    id: 2,
    name: 'Courtyard by Marriott New York',
    images: [hotel10],
    rating: 4,
    feature: ['Air Conditioning ', 'Wifi', 'Pool', 'Kitchen'],
    price: 1200,
  },
  {
    id: 3,
    name: 'Club Quarters Hotel',
    images: [hotel8],
    rating: 4.8,
    feature: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 980,
  },
  {
    id: 4,
    name: 'Beverly Hills Marriott',
    images: [hotel7],
    rating: 4.8,
    feature: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 1400,
  },
  {
    id: 5,
    name: 'Courtyard by Marriott New York',
    images: [hotel2],
    rating: 4.5,
    feature: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 680,
  },
  {
    id: 6,
    name: 'Park Plaza Lodge Hotel',
    images: [hotel5],
    rating: 4.4,
    feature: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 740,
  },
  {
    id: 7,
    name: 'Royal Beach Resort',
    images: [hotel4],
    rating: 4,
    feature: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 570,
  },
  {
    id: 8,
    name: 'Pride moon Village Resort & Spa',
    images: [hotel3],
    rating: 3.8,
    feature: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 896,
  },
  {
    id: 9,
    name: 'Carina Beach Resort',
    images: [hotel1],
    rating: 4,
    feature: ['Air Conditioning ', 'Wifi', 'Kitchen', 'Pool'],
    price: 475,
  },
]

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

export { hotels }
