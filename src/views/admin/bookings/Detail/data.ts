import { type IconType } from 'react-icons'
import { FaBed, FaRegClone } from 'react-icons/fa'
import { FaArrowRightArrowLeft, FaMountainSun, FaStairs } from 'react-icons/fa6'

import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'

type RoomFeatureType = {
  feature: {
    label: string
    name: string
  }
  icon: IconType
}

type BookingDetailType = {
  name: string
  checkIn: string
  checkOut: string
  guest: number
  amount: number
  payment: 'Full payment' | 'On Property' | 'Half payment'
  image: string
}

const roomFeatures: RoomFeatureType[] = [
  {
    feature: {
      label: 'Type',
      name: 'King Suit',
    },
    icon: FaBed,
  },
  {
    feature: {
      label: 'Side',
      name: 'Left Side',
    },
    icon: FaArrowRightArrowLeft,
  },
  {
    feature: {
      label: 'Floor',
      name: '3rd Floor (T5)',
    },
    icon: FaStairs,
  },
  {
    feature: {
      label: 'View',
      name: 'Sea View',
    },
    icon: FaMountainSun,
  },
  {
    feature: {
      label: 'Size',
      name: '250 Sqft',
    },
    icon: FaRegClone,
  },
]

const bookingDetailList: BookingDetailType[] = [
  {
    name: 'Lori Stevens',
    checkIn: '18 Dec 2022',
    checkOut: '22 Dec 2022',
    guest: 4,
    amount: 1025,
    payment: 'Full payment',
    image: avatar9,
  },
  {
    name: 'Billy Vasquez',
    checkIn: '23 Dec 2022',
    checkOut: '26 Dec 2022',
    guest: 3,
    amount: 847,
    payment: 'Half payment',
    image: avatar2,
  },
  {
    name: 'Carolyn Ortiz',
    checkIn: '2 Jan 2022',
    checkOut: '5 Jan 2022',
    guest: 2,
    amount: 900,
    payment: 'On Property',
    image: avatar1,
  },
  {
    name: 'Louis Ferguson',
    checkIn: '6 Jan 2022',
    checkOut: '10 Jan 2022',
    guest: 5,
    amount: 1458,
    payment: 'Full payment',
    image: avatar3,
  },
  {
    name: 'Dennis Barrett',
    checkIn: '11 Jan 2022',
    checkOut: '14 Jan 2022',
    guest: 2,
    amount: 879,
    payment: 'Half payment',
    image: avatar4,
  },
  {
    name: 'Frances Guerrero',
    checkIn: '15 Jan 2022',
    checkOut: '19 Jan 2022',
    guest: 4,
    amount: 1254,
    payment: 'Full payment',
    image: avatar5,
  },
  {
    name: 'Carolyn Ortiz',
    checkIn: '20 Jan 2022',
    checkOut: '25 Jan 2022',
    guest: 3,
    amount: 1080,
    payment: 'Full payment',
    image: avatar6,
  },
]

export { roomFeatures, bookingDetailList }
