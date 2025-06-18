import TourFlightDetail from './TourFlightDetail'
import TourCard from './TourCard'
import HotelDetail from './HotelDetail'
import TransferDetail from './TransferDetail'
import CancellationBooking from './CancellationBooking'
import { Button } from 'react-bootstrap'
import { useWizard } from 'react-use-wizard'

const TourReview = () => {

  const { nextStep } = useWizard()
  
  return (
    <div className="vstack gap-4">
      <h4 className="mb-0">Tour Review</h4>
      <hr className="my-0" />

      <TourCard />

      <TourFlightDetail />

      <HotelDetail />

      <TransferDetail />

      <CancellationBooking />
      <div className="text-end">
        <Button onClick={() => nextStep()} variant="primary" className="next-btn mb-0">
          Next
        </Button>
      </div>
    </div>
  )
}

export default TourReview
