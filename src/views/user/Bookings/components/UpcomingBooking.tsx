import { bookingCards } from '../data'
import BookingCard from './BookingCard'

const UpcomingBooking = () => {
  return (
    <>
      <h6>Completed booking (2)</h6>

      {bookingCards.map((booking, idx) => {
        return <BookingCard key={idx} booking={booking} />
      })}
    </>
  )
}

export default UpcomingBooking
