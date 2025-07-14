type FlightDetailType = {
  time: string
  tag: string
  placeName: string
}

export type FlightRouteDetailType = {
  departure: FlightDetailType
  arrival: FlightDetailType
  travelDuration: string
}

export type HotelDetailType = {
  name: string
  room: string
  date: string
  rating: number
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

const tourFlightDetail: FlightRouteDetailType[] = [
  {
    departure: {
      tag: 'CDG',
      time: '2:50 pm',
      placeName: 'New York',
    },
    arrival: {
      tag: 'JFK',
      placeName: 'JFK',
      time: '7:35 pm',
    },
    travelDuration: '5hr 50min',
  },
  {
    departure: {
      tag: 'JFK',
      time: '5:50 am',
      placeName: 'Malaysia ',
    },
    arrival: {
      tag: 'CDG',
      placeName: 'New York',
      time: '11:35 am',
    },
    travelDuration: '5hr 50min',
  },
]

const hotelDetails: HotelDetailType[] = [
  {
    name: 'Courtyard by Marriott New York',
    room: 'Deluxe Pool View with Breakfast',
    date: '12 April 2022',
    rating: 4.5,
  },
  {
    name: 'Park Plaza Lodge Hotel',
    room: 'Deluxe Pool View with Breakfast',
    date: '14 April 2022',
    rating: 3.5,
  },
  {
    name: 'Pride moon Village Resort & Spa',
    room: 'Deluxe Pool View with Breakfast',
    date: '16 April 2022',
    rating: 4,
  },
]

export { tourFlightDetail, hotelDetails }
