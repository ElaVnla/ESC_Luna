export type NotificationType = {
  title: string
  content?: string
  time: string
}

export type NearbyPlaceType = {
  image: string
  name: string
  travelTime: string
}

export type FeaturedHotelType = {
  location: string
  image: string
  name: string
  price: number
  ratings: number
}
