import { type IconType } from 'react-icons'
import { BsCalendar, BsClock, BsPerson, BsScissors } from 'react-icons/bs'
import { FaSpa } from 'react-icons/fa'

export type DirectoryDealType = {
  category: {
    name: string
    icon: IconType
  }
  name: string
  price: number
  sale: string
  salePrice: number
  valid: {
    icon: IconType
    label: string
  }[]
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

const directoryDeals: DirectoryDealType[] = [
  {
    category: {
      name: 'Salon',
      icon: BsScissors,
    },
    name: 'Monsoon Offer: Men: Global Hair Color With Free Manicure / Pedicure / Haircut',
    price: 1800,
    salePrice: 1500,
    sale: '40% off',
    valid: [
      {
        icon: BsPerson,
        label: '1 Male',
      },
      {
        icon: BsCalendar,
        label: 'Mon - Fri',
      },
      {
        icon: BsClock,
        label: '11 AM - 6 PM',
      },
    ],
  },
  {
    category: {
      name: 'Spa',
      icon: FaSpa,
    },
    name: 'Women Special Offer (Aroma Therapy - 30 min)',
    price: 900,
    salePrice: 820,
    sale: '30% off',
    valid: [
      {
        icon: BsPerson,
        label: '1 Female',
      },
      {
        icon: BsCalendar,
        label: 'Mon - Fri',
      },
      {
        icon: BsClock,
        label: '11 AM - 6 PM',
      },
    ],
  },
]

export { directoryDeals }
