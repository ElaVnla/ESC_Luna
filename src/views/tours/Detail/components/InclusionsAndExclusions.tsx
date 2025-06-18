import { Card, CardBody, CardHeader } from 'react-bootstrap'
import { FaCheck, FaTimes } from 'react-icons/fa'

const inclusions = [
  'Comfortable stay for 4 nights in your preferred category Hotels',
  'Professional English speaking guide to help you explore the cities',
  'Breakfast is included as mentioned in Itinerary.',
  'Per Peron rate on twin sharing basis',
  'Entrance Tickets to Genting Indoor Theme Park',
  'All Tours & Transfers on Seat In Coach Basis',
  'Visit Bali Safari & Marine Park with Jungle Hopper Pass',
]

const exclusions = [
  'Lunch and dinner are not included in CP plans',
  'Any other services not specifically mentioned in the inclusions',
  'Medical and Travel insurance',
  'Airfare is not included',
  'Early Check-In & Late Check-Out',
  'Anything which is not specified in Inclusions',
]

const InclusionsAndExclusions = () => {
  return (
    <Card className="bg-transparent p-0">
      <CardHeader className="bg-transparent border-bottom p-0 pb-3">
        <h3 className="mb-0">Inclusions &amp; Exclusions</h3>
      </CardHeader>
      <CardBody className="p-0 pt-3">
        <h5>Inclusion</h5>
        <ul className="list-group list-group-borderless mb-3">
          {inclusions.map((inclusion, idx) => (
            <li className="list-group-item d-flex mb-0" key={idx}>
              <FaCheck className="text-success me-2" />
              <span className="h6 fw-normal">{inclusion}</span>
            </li>
          ))}
        </ul>
        <h5>Exclusion</h5>
        <ul className="list-group list-group-borderless mb-3">
          {exclusions.map((exclusion, idx) => {
            return (
              <li key={idx} className="list-group-item d-flex mb-0">
                <FaTimes className="text-danger me-2" />
                <span className="h6 fw-normal">{exclusion}</span>
              </li>
            )
          })}
        </ul>
      </CardBody>
    </Card>
  )
}

export default InclusionsAndExclusions
