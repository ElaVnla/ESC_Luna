import { type ReactNode } from 'react'
import { type IconType } from 'react-icons'

export type CategorySlide = {
  name: string
  image: ReactNode
}

export type PlaceType = {
  id: number
  category: {
    name: string
    icon: IconType
  }
  image: string
  name: string
  address?: string
  phoneNo?: string
  price?: number
  recommended?: boolean
  open?: boolean
}

export type AboutType = {
  title: string
  image: ReactNode
  description: string
}

export type TestimonialType = {
  image: string
  description: string
  rating: number
  name: string
  position: string
}

export type CityType = {
  name: string
  image: string
  listing: number
}

export type OfferCardType = {
  title: string
  subTitle: string
  image?: string
  code?: string
  variant?: string
}

export type NotificationType = {
  title: string
  content?: string
  time: string
}
