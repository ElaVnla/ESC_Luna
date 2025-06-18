import { Card, CardBody, CardTitle, Image, OverlayTrigger, Popover, PopoverBody } from 'react-bootstrap'
import { BsInfoCircle } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { type DestinationType } from '../data'

const PopularDestinationCard = ({ flightInterval, image, name, rating, information }: DestinationType) => {
  return (
    <Card className="card-img-scale overflow-hidden bg-transparent">
      {information && (
        <div className="position-absolute top-0 end-0 p-3 z-index-9">
          <OverlayTrigger
            trigger="focus"
            placement="left-start"
            overlay={
              <Popover>
                <PopoverBody>{information}</PopoverBody>{' '}
              </Popover>
            }
          >
            <a tabIndex={0} className="mb-0 btn btn-white btn-round d-flex align-items-center justify-content-center">
              <BsInfoCircle />
            </a>
          </OverlayTrigger>
        </div>
      )}
      <div className="card-img-scale-wrapper rounded-3">
        <Image src={image} className="card-img" alt="hotel image" />
      </div>
      <CardBody className="px-2">
        <div className="d-flex justify-content-between align-items-center">
          <CardTitle as="h5">
            <Link to="/flights/list" className="stretched-link">
              {name}
            </Link>
          </CardTitle>
          <h6 className="mb-0">
            {rating}
            <FaStar size={18} className="text-warning ms-1" />
          </h6>
        </div>
        <span className="mb-0">{flightInterval}</span>
      </CardBody>
    </Card>
  )
}

export default PopularDestinationCard
