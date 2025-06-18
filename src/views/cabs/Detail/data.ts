import vehicle1 from '@/assets/images/category/cab/seadan.svg'

export type CabCardType = {
  id: number
  name: string
  image: string
  keyFeatures: string[]
  rating: number
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

const cabData: CabCardType = {
  id: 1,
  name: 'Camry, Accord',
  keyFeatures: ['SEDAN', 'AC', '4 Seats'],
  rating: 4.5,
  features: ['600Kms included. After that $15/Kms', '2 luggage bags ', 'Diesel Car'],
  notes: ['Free Cancellation, till 1 hour of Pick up', 'Free waiting up to 45 minutes'],
  image: vehicle1,
}

export { cabData }
