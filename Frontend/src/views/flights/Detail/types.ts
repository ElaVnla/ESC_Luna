type FlightDetailType = {
  time: string
  date: string
  tag: string
  terminal: string
  airportName: string
}

export type RouteInfoType = {
  departure: FlightDetailType
  arrival: FlightDetailType
  travelDuration: string
  flightChange?: string
}

export type NotificationType = {
  title: string
  content?: string
  time: string
}
