import { Card, CardBody, CardHeader } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { FaCheckCircle } from 'react-icons/fa'

const TourOverview = () => {
  const aboutTour = [
    'Guidelines issued by the State-Government are to be followed. Social distancing to be maintained. Frequent hand sanitization and use of mask recommended.',
    'No purse as fully me or point. Kindness owns whatever betrayed her moreover procured replying for and.',
    'International / Domestic flights are not included in the package.',
    'Started several mistakes joy say painful removed reached end. State burst think end are its.',
    'Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous.',
    'Acuteness abilities ask can offending furnished fulfilled sex. The difference in the cost shall be borne by the client in case of any amendment in the package due to an increase in the number of guests',
  ]

  const tourHighlights = [
    'Experience a delightful tropical getaway with a luxurious stay and witness the picture-perfect beaches, charming waterfalls and so much more',
    'Dependent on so extremely delivered by. Yet no jokes worse her why. Bed one supposing breakfast day fulfilled off depending questions.',
    'Whatever boy her exertion his extended. Ecstatic followed handsome drawings entirely Mrs one yet outweigh.',
    'Meant balls it if up doubt small purse. Required his you put the outlived answered position. A pleasure exertion if believed provided to.',
    'All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in.',
  ]

  return (
    <Card className="bg-transparent p-0">
      <CardHeader className="bg-transparent border-bottom p-0 pb-3">
        <h3 className="mb-0">Overview</h3>
      </CardHeader>
      <CardBody className="p-0 pt-3">
        <p className="mb-4">
          Bali, also known as the land of gods has plenty to offer to travelers from across the globe. As it so contrasted oh estimating instrument.
          Size like body some one had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask
          own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in. We understand that
          theory is important to build a solid foundation, we understand that theory alone isn’t going to get the job done so that’s why this is
          packed with practical hands-on examples that you can follow step by step.
        </p>
        <h5>Tour Info</h5>
        <ul className="list-group list-group-borderless mb-4">
          <li className="list-group-item">
            <span className="h6 mb-0 me-1">Place Covered: </span>
            <span className="h6 fw-light mb-0">Bali - Ubud</span>
          </li>
          <li className="list-group-item">
            <span className="h6 mb-0 me-1">Duration: </span>
            <span className="h6 fw-light mb-0">5 Days, 4 Nights</span>
          </li>
          <li className="list-group-item">
            <span className="h6 mb-0 me-1">Start Point: </span>
            <span className="h6 fw-light mb-0">Ngurah International Airport</span>
          </li>
          <li className="list-group-item">
            <span className="h6 mb-0 me-1">End Point: </span>
            <span className="h6 fw-light mb-0">Ngurah International Airport</span>
          </li>
        </ul>
        <h5>Tour Highlights</h5>
        <ul className="list-group list-group-borderless mb-4">
          {tourHighlights.map((item, idx) => (
            <li key={idx} className="list-group-item h6 fw-light d-flex mb-0">
              <div>
                <BsArrowRight className=" me-2" />
                {item}
              </div>
            </li>
          ))}
        </ul>
        <h5>More About The Beautiful Bali with Malaysia Tour</h5>
        <ul className="list-group list-group-borderless mb-0">
          {aboutTour.map((item, idx) => (
            <li key={idx} className="list-group-item h6 fw-light d-flex mb-0">
              <div>
                <FaCheckCircle className="text-success me-2" />
                {item}
              </div>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  )
}

export default TourOverview
