import { type IconType } from 'react-icons'

export type StatisticType = {
  title: string
  state: string
  icon: IconType
  variant: string
}

export type HotelType = {
  name: string
  address: string
  price: number
  image: string
}
