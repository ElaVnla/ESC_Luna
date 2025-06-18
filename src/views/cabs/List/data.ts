import vehicle1 from '@/assets/images/category/cab/seadan.svg'
import vehicle2 from '@/assets/images/category/cab/lux.svg'
import vehicle3 from '@/assets/images/category/cab/suv.svg'
import vehicle4 from '@/assets/images/category/cab/suv-2.svg'

export type CabListType = {
  id: number
  name: string
  image: string
  keyFeatures: string[]
  rating: number
  sale: string
  price: number
  salePrice: number
  features: string[]
  notes: string[]
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

const cabsLists: CabListType[] = [
  {
    id: 1,
    name: 'Camry, Accord',
    keyFeatures: ['SEDAN', 'AC', '4 Seats'],
    rating: 4.5,
    features: ['600Kms included. After that $15/Kms', '2 luggage bags ', 'Diesel Car'],
    notes: ['Free Cancellation, till 1 hour of Pick up', 'Free waiting up to 45 minutes'],
    price: 250,
    sale: '4% Off',
    salePrice: 210,
    image: vehicle1,
  },
  {
    id: 2,
    name: 'Audi, BMW',
    keyFeatures: ['LUX', 'AC', '4 Seats'],
    rating: 4.5,
    features: ['600Kms included. After that $15/Kms', '2 luggage bags ', 'Diesel Car'],
    notes: ['Free Cancellation, till 1 hour of Pick up', 'Free waiting up to 45 minutes'],
    price: 550,
    sale: '2% Off',
    salePrice: 500,
    image: vehicle2,
  },
  {
    id: 3,
    name: 'Ertiga, Xylo',
    keyFeatures: ['SUV', 'AC', '6 Seats'],
    rating: 4.5,
    features: ['600Kms included. After that $15/Kms', '2 luggage bags ', 'Diesel Car'],
    notes: ['Free Cancellation, till 1 hour of Pick up', 'Free waiting up to 45 minutes'],
    price: 400,
    sale: '10% Off',
    salePrice: 350,
    image: vehicle3,
  },
  {
    id: 4,
    name: 'Suv, Innova Crysta',
    keyFeatures: ['SUV', 'AC', '4 Seats'],
    rating: 4.3,
    features: ['600Kms included. After that $15/Kms', '2 luggage bags ', 'Diesel Car'],
    notes: ['Free Cancellation, till 1 hour of Pick up', 'Free waiting up to 45 minutes'],
    price: 650,
    sale: '15% Off',
    salePrice: 480,
    image: vehicle4,
  },
]

export { cabsLists }
