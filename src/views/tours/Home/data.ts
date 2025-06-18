import tour1 from '@/assets/images/category/tour/01.jpg'
import tour2 from '@/assets/images/category/tour/02.jpg'
import tour3 from '@/assets/images/category/tour/03.jpg'
import tour4 from '@/assets/images/category/tour/04.jpg'

import category13 from '@/assets/images/category/hotel/nearby/13.jpg'
import category14 from '@/assets/images/category/hotel/nearby/14.jpg'
import category15 from '@/assets/images/category/hotel/nearby/15.jpg'
import category16 from '@/assets/images/category/hotel/nearby/16.jpg'
import category17 from '@/assets/images/category/hotel/nearby/17.jpg'
import category18 from '@/assets/images/category/hotel/nearby/18.jpg'
import category19 from '@/assets/images/category/hotel/nearby/19.jpg'
import category20 from '@/assets/images/category/hotel/nearby/20.jpg'

import avatar1 from '@/assets/images/team/01.jpg'
import avatar2 from '@/assets/images/team/02.jpg'

export type TourPackageType = {
  name: string
  price: number
  type: string
  rating: number
  days: number
  nights: number
  image: string
}

type CategoryType = {
  name: string
  image: string
  places: string
}

type SliderType = {
  name: string
  description: string
  image: string
}

export type NotificationType = {
  title: string
  content?: string
  time: string
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

const tourPackages: TourPackageType[] = [
  {
    name: 'Lombok, Indonesia',
    type: 'Adventure',
    price: 1385,
    days: 5,
    nights: 6,
    rating: 4.3,
    image: tour4,
  },
  {
    name: 'Northern Lights Escape',
    type: 'History',
    price: 2569,
    days: 8,
    nights: 7,
    rating: 4.5,
    image: tour2,
  },
  {
    name: 'Essential Egypt',
    type: 'Desert',
    price: 1885,
    days: 9,
    nights: 8,
    rating: 4.2,
    image: tour3,
  },
  {
    name: 'Phi Phi Islands',
    type: 'Beach',
    price: 3585,
    days: 9,
    nights: 8,
    rating: 4.6,
    image: tour1,
  },
]

const topCategories: CategoryType[] = [
  {
    name: 'Beach',
    places: '4,568',
    image: category20,
  },
  {
    name: 'Heritage',
    places: '2,845',
    image: category19,
  },
  {
    name: 'Desert',
    places: '1,587',
    image: category18,
  },
  {
    name: 'Tower',
    places: '986',
    image: category17,
  },
  {
    name: 'Mountain',
    places: '786',
    image: category16,
  },
  {
    name: 'Safari',
    places: '568',
    image: category15,
  },
  {
    name: 'Temple',
    places: '256',
    image: category14,
  },
  {
    name: 'Festival',
    places: '654',
    image: category13,
  },
]

const testimonialSlides: SliderType[] = [
  {
    name: 'Louis Ferguson',
    description: 'Farther-related bed and passage comfort civilly.',
    image: avatar1,
  },
  {
    name: 'Lori Stevens',
    description: 'Farther-related bed and passage comfort civilly.',
    image: avatar2,
  },
]

export { tourPackages, topCategories, testimonialSlides }
