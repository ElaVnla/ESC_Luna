import hotelNearby1 from '@/assets/images/category/hotel/nearby/01.jpg'
import hotelNearby2 from '@/assets/images/category/hotel/nearby/02.jpg'
import hotelNearby3 from '@/assets/images/category/hotel/nearby/03.jpg'
import hotelNearby4 from '@/assets/images/category/hotel/nearby/04.jpg'
import hotelNearby5 from '@/assets/images/category/hotel/nearby/05.jpg'
import hotelNearby6 from '@/assets/images/category/hotel/nearby/06.jpg'
import hotelNearby7 from '@/assets/images/category/hotel/nearby/07.jpg'
import hotelNearby8 from '@/assets/images/category/hotel/nearby/08.jpg'
import hotelNearby9 from '@/assets/images/category/hotel/nearby/09.jpg'
import hotelNearby10 from '@/assets/images/category/hotel/nearby/10.jpg'
import hotelNearby11 from '@/assets/images/category/hotel/nearby/11.jpg'

import hotel1 from '@/assets/images/category/hotel/01.jpg'
import hotel2 from '@/assets/images/category/hotel/02.jpg'
import hotel3 from '@/assets/images/category/hotel/03.jpg'
import hotel4 from '@/assets/images/category/hotel/04.jpg'

import type { FeaturedHotelType, NearbyPlaceType, NotificationType } from './type'

export const nearbyPlacesData: NearbyPlaceType[] = [
  {
    image: hotelNearby1,
    name: 'San Francisco',
    travelTime: '13 mins drive',
  },
  {
    image: hotelNearby2,
    name: 'Los Angeles',
    travelTime: '25 mins drive',
  },
  {
    image: hotelNearby3,
    name: 'Miami',
    travelTime: '45 mins drive',
  },
  {
    image: hotelNearby4,
    name: 'Sanjosh',
    travelTime: '55 mins drive',
  },
  {
    image: hotelNearby5,
    name: 'New York',
    travelTime: '1 hour drive',
  },
  {
    image: hotelNearby6,
    name: 'North Justen',
    travelTime: '2 hours drive',
  },
  {
    image: hotelNearby7,
    name: 'Rio',
    travelTime: '20 mins drive',
  },
  {
    image: hotelNearby8,
    name: 'Las Vegas',
    travelTime: '3 hours drive',
  },
  {
    image: hotelNearby9,
    name: 'Texas',
    travelTime: '55 mins drive',
  },
  {
    image: hotelNearby10,
    name: 'Chicago',
    travelTime: '13 mins drive',
  },
  {
    image: hotelNearby11,
    name: 'New Keagan',
    travelTime: '35 mins drive',
  },
  {
    image: hotelNearby1,
    name: 'Oslo',
    travelTime: '1 hour 13 mins drive',
  },
]

export const featuredHotelsData: FeaturedHotelType[] = [
  {
    location: 'New York',
    image: hotel1,
    name: 'Baga Comfort',
    price: 455,
    ratings: 4.5,
  },
  {
    location: 'California',
    image: hotel2,
    name: 'New Apollo Hotel',
    price: 585,
    ratings: 4.8,
  },
  {
    location: 'Los Angeles',
    image: hotel3,
    name: 'New Age Hotel',
    price: 385,
    ratings: 4.6,
  },
  {
    location: 'Chicago',
    image: hotel4,
    name: 'Helios Beach Resort',
    price: 665,
    ratings: 4.8,
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
