import client7 from '@/assets/images/client/07.svg'
import client8 from '@/assets/images/client/08.svg'
import client9 from '@/assets/images/client/09.svg'

import flight1 from '@/assets/images/category/flight/01.jpg'
import flight2 from '@/assets/images/category/flight/02.jpg'
import flight3 from '@/assets/images/category/flight/03.jpg'
import flight4 from '@/assets/images/category/flight/04.jpg'

import blog2 from '@/assets/images/blog/02.jpg'
import blog3 from '@/assets/images/blog/03.jpg'
import blog4 from '@/assets/images/blog/04.jpg'

export type OffersType = {
  logo: string
  offer: string
  flightType: string
  variant: string
  percentageOff?: boolean
  couponCode: string
}

export type DestinationType = {
  name: string
  rating: number
  flightInterval: string
  information?: string
  image: string
}

type BlogType = {
  title: string
  name: string
  image: string
}

const spacialOffers: OffersType[] = [
  {
    logo: client7,
    offer: '899 off',
    flightType: 'On Domestic Flights',
    variant: 'bg-success',
    couponCode: '8B99OFF',
  },
  {
    logo: client8,
    offer: '13% off',
    percentageOff: true,
    flightType: 'On Domestic Flights',
    variant: 'bg-danger',
    couponCode: '13PO7FF',
  },
  {
    logo: client9,
    offer: '2,400 off',
    flightType: 'On International Flights',
    variant: 'bg-info',
    couponCode: 'LOG165F',
  },
]

const popularDestinations: DestinationType[] = [
  {
    name: 'Thailand',
    rating: 4.3,
    flightInterval: 'The next flight is on 26th Dec',
    information: 'COVID-19 test required Vaccinated travelers can visit',
    image: flight1,
  },
  {
    name: 'Hong Kong',
    rating: 4.6,
    flightInterval: 'Daily 1 flight',
    image: flight3,
  },
  {
    name: 'Maldives',
    rating: 4.3,
    flightInterval: '2 flights every week',
    information: 'Vaccinated travelers can visit. Masks required',
    image: flight2,
  },
  {
    name: 'Switzerland',
    rating: 4.3,
    flightInterval: 'Filling fast, next available flight on 2nd Oct',
    image: flight4,
  },
]

const blogs: BlogType[] = [
  {
    title: 'Story of water world adventure',
    name: 'Jacqueline Miller',
    image: blog2,
  },
  {
    title: 'How Hotel Technology Can Help Small Hotel Businesses',
    name: 'Frances Guerrero',
    image: blog3,
  },
  {
    title: 'Hotel Service - Become a Guide for Your Guests',
    name: 'Louis Ferguson',
    image: blog4,
  },
]

export { spacialOffers, popularDestinations, blogs }
