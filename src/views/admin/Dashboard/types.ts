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
  image: string
  price: number
}

export type RoomType = {
  name: string
  date: string
  image: string
  status: string
}

export type ArrivalType = {
  name: string
  image: string
  hotelInfo: string[]
}

export type ReviewType = {
  name: string
  image: string
  rating: number
  review: number
}
