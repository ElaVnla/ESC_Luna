import { type ReactNode } from 'react'
import { type IconType } from 'react-icons'

export type StatisticType = {
  title: string
  state: number
  progress: number
  variant: string
  icon: IconType
  status: ReactNode
}

export type BookingType = {
  name: string
  floor: string
  bed: string
  rating: number
  price: number
  image: string
}
