import { FaHotel } from 'react-icons/fa'
import { type BookingCardType as BookingType } from '../data'
import BookingCard from './BookingCard'

const cancelBooking: BookingType = {
  id: 'CGDSUAHA12548',
  flightType: 'AC',
  icon: FaHotel,
  timing: [
    {
      label: 'Check in time',
      name: 'Tue 05 Aug 12:00 AM',
    },
    {
      label: 'Check out time',
      name: 'Tue 12 Aug 4:00 PM',
    },
    {
      label: 'Booked by',
      name: 'Frances Guerrero',
    },
  ],
  travelRoute: 'Courtyard by Marriott New York',
  cancelled: true,
}

const CancelledBooking = () => {
  return (
    <>
      <h6>Cancelled booking (1)</h6>
      <BookingCard booking={cancelBooking} />
    </>
  )
}

export default CancelledBooking
