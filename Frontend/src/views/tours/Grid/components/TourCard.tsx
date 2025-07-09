import { currency } from '@/states'
import { Card, CardBody, CardFooter, CardTitle, Image } from 'react-bootstrap'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaHotel, FaPersonSkating, FaPlane } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { type TourCardType } from '../data'

const TourCard = ({ tour }: { tour: TourCardType }) => {
  const { benefits, date, days, name, nights, price, type, sale, image } = tour

  return (
    <Card className="card-hover-shadow pb-0 h-100">
      <div className="position-relative">
        <Image src={image} className="card-img-top" alt="Card image" />
        <div className="card-img-overlay d-flex flex-column p-4 z-index-1">
          <div className="d-flex gap-1">
            {sale && <span className="badge text-bg-danger">{sale}</span>}

            <span className="badge text-bg-dark">{type}</span>
          </div>
          <div className="w-100 mt-auto">
            <span className="badge text-bg-white fs-6">
              {days} days / {nights} nights
            </span>
          </div>
        </div>
      </div>
      <CardBody className="px-3">
        <CardTitle as="h5" className="mb-0">
          <Link to="/tours/detail" className="stretched-link">
            {name}
          </Link>
        </CardTitle>
        <span className="small items-center">
          <FaCalendarAlt className="me-2" />
          {date}
        </span>
        <ul className="nav nav-divider mt-3 mb-0">
          {benefits.flight && (
            <li className="nav-item h6 fw-normal mb-0">
              <FaPlane className="text-orange me-2" />
              {benefits.flight} Flight
            </li>
          )}
          {benefits.hotel && (
            <li className="nav-item h6 fw-normal mb-0">
              <FaHotel className="text-info me-2" />
              {benefits.hotel} Hotel
            </li>
          )}
          {benefits.activities && (
            <li className="nav-item h6 fw-normal mb-0">
              <FaPersonSkating className="text-danger me-2" />
              {benefits.activities} Activities
            </li>
          )}
        </ul>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="d-sm-flex justify-content-sm-between align-items-center flex-wrap">
          <div className="hstack gap-2">
            <h5 className="fw-normal text-success mb-0">
              {currency}
              {price}
            </h5>
            <small>/per person</small>
            {sale && <span className="text-decoration-line-through">{currency}1800</span>}
          </div>
          <div className="mt-2 mt-sm-0">
            <Link to="/tours/detail" className="btn btn-sm btn-primary mb-0">
              View Details
            </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default TourCard
