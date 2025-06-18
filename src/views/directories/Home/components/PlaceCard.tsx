import { useToggle } from '@/hooks'
import { currency } from '@/states'
import clsx from 'clsx'
import { Card, CardBody, CardFooter, Image } from 'react-bootstrap'
import { BsArrowRight, BsPinMapFill, BsTelephoneFill } from 'react-icons/bs'
import { FaRegHeart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import type { PlaceType } from '../types'

const PlaceCard = ({ place }: { place: PlaceType }) => {
  const { isOpen, toggle } = useToggle()
  const Icon = place.category.icon

  return (
    <Card className="shadow h-100">
      <div className="position-relative">
        <Image src={place.image} className="card-img-top" alt="Card image" />
        <div className="card-img-overlay p-3 z-index-1">
          <div className="items-center">
            <div className="badge text-bg-dark me-1">
              <div className="items-center">
                <Icon className="fa-solid fa-fw text-warning me-1" /> {place.category.name}
              </div>
            </div>
            <div className={clsx(place.open ? 'text-bg-success' : 'text-bg-danger', 'badge')}>{place.open ? 'Open' : 'Closed'}</div>
          </div>
        </div>
      </div>
      <CardBody>
        {place.recommended && <div className="badge bg-danger bg-opacity-10 text-danger mb-2">Recommended</div>}

        <h5 className="card-title me-2">
          <Link to="/directories/detail">{place.name}</Link>
        </h5>

        {place.price && (
          <p className="mb-0">
            Starts at{' '}
            <span className="text-success">
              {currency}
              {place.price}
            </span>{' '}
            for 1 person
          </p>
        )}

        {(place.address || place.phoneNo) && (
          <ul className="list-group list-group-borderless mb-0">
            {place.address && (
              <li className="list-group-item small pb-0 items-center gap-1">
                <BsPinMapFill className=" fa-fw h6 small mb-0" /> {place.address}
              </li>
            )}
            {place.phoneNo && (
              <li className="list-group-item small pb-0 items-center gap-1">
                <BsTelephoneFill className=" fa-fw h6 small mb-0" /> {place.phoneNo}
              </li>
            )}
          </ul>
        )}
      </CardBody>
      <CardFooter className="border-top">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/directories/detail" className="btn btn-link p-0 mb-0 items-center">
            View detail
            <BsArrowRight className=" ms-1" />
          </Link>
          <Link to="" className="h6 mb-0 z-index-2" onClick={toggle}>
            {isOpen ? <FaHeart fill="red" /> : <FaRegHeart />}{' '}
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

export default PlaceCard
