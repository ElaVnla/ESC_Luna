import { type IconType } from 'react-icons'
import { BsCashCoin, BsCreditCard2Back, BsTags, BsWallet, BsWifi } from 'react-icons/bs'
import {
  FaBolt,
  FaCity,
  FaDumbbell,
  FaEllipsis,
  FaGolfBallTee,
  FaGopuram,
  FaMountainSun,
  FaPersonShelter,
  FaPersonSwimming,
  FaSpa,
  FaUmbrellaBeach,
  FaUtensils,
  FaWifi,
} from 'react-icons/fa6'

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

type HotelCategoryType = {
  name: string
  icon: IconType
}

type HotelFeatureType = {
  name: string
  icon: IconType
  variant: string
}

type HotelServiceType = {
  name: string
  icon: IconType
}

type NearbyPlaceType = {
  image: string
  name: string
  travelTime: string
}

const hotelDestinations: string[] = ['New York', 'California', 'New Jersey', 'Canada', 'Las vegas', 'London', 'Singapore', 'Malaysia', 'manhattan']

const hotelTypes: string[] = ['All', 'Hotels', 'Villas', 'Palace', 'Resorts', 'Restaurants']

const hotelCategories: HotelCategoryType[] = [
  {
    name: 'Beach',
    icon: FaUmbrellaBeach,
  },
  {
    name: 'City',
    icon: FaCity,
  },
  {
    name: 'Spa',
    icon: FaSpa,
  },
  {
    name: 'Wildlife',
    icon: FaMountainSun,
  },
  {
    name: 'Golf',
    icon: FaGolfBallTee,
  },
  {
    name: 'Heritage',
    icon: FaGopuram,
  },
]

const hotelFacilities: string[] = [
  'Banquet',
  ' Conference and meeting',
  'Fitness room',
  'Health club',
  'Sauna and steam bath',
  'Luggage storage',
  'Summer terrace',
  'Non-smoking rooms',
]

const hotelFeatures: HotelFeatureType[] = [
  {
    name: ' Best Rate Guaranteed',
    icon: BsCashCoin,
    variant: 'text-info',
  },
  {
    name: 'Payment at Hotel',
    icon: BsCreditCard2Back,
    variant: 'text-warning',
  },
  {
    name: 'Exclusive Members Rewards',
    icon: BsWallet,
    variant: 'text-success',
  },
  {
    name: 'WIFI Access',
    icon: BsWifi,
    variant: 'text-danger',
  },
  {
    name: 'No Hidden Charges',
    icon: BsTags,
    variant: 'text-orange',
  },
]

const hotelServices: HotelServiceType[] = [
  {
    name: 'Free Wifi',
    icon: FaWifi,
  },
  {
    name: 'Swimming Pool',
    icon: FaPersonSwimming,
  },
  {
    name: 'Private Workshop',
    icon: FaPersonShelter,
  },
  {
    name: 'Breakfast',
    icon: FaUtensils,
  },
  {
    name: 'Free Electricity',
    icon: FaBolt,
  },
  {
    name: 'Gym Space',
    icon: FaDumbbell,
  },
  {
    name: 'Spa',
    icon: FaSpa,
  },
  {
    name: 'Other Services',
    icon: FaEllipsis,
  },
]

const nearbyPlacesData: NearbyPlaceType[] = [
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

export { hotelCategories, hotelDestinations, hotelFacilities, hotelFeatures, hotelServices, hotelTypes, nearbyPlacesData }
