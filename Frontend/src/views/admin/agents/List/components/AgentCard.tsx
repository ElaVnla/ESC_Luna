import { Card, CardBody, CardFooter, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Image } from 'react-bootstrap'
import { BsEnvelope, BsGeoAlt, BsPencilSquare, BsThreeDots, BsTrash } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { type AgentCardType } from '../data'

const AgentCard = ({ agent }: { agent: AgentCardType }) => {
  const { location, name, rating, totalListing, image, textAvatar } = agent

  return (
    <Card className="border h-100">
      <Dropdown className="position-absolute top-0 end-0 m-3">
        <DropdownToggle as={Link} to="" className="btn btn-sm btn-light btn-round small mb-0 arrow-none flex-centered">
          <BsThreeDots className="" />
        </DropdownToggle>

        <DropdownMenu align="end" className="dropdown-w-sm min-w-auto shadow rounded" aria-labelledby="dropdownShare1">
    
            <DropdownItem href="">
              <BsPencilSquare className="me-2" />
              Edit
            </DropdownItem>
       
            <DropdownItem href="">
              <BsTrash className="me-2" />
              Remove
            </DropdownItem>
      
        </DropdownMenu>
      </Dropdown>
      <CardBody className="text-center pb-0">
        <div className="avatar avatar-xl flex-shrink-0 mb-3">
          {image && <Image className="avatar-img rounded-circle" src={image} alt="avatar" />}

          {textAvatar && (
            <div className={`avatar-img rounded-circle bg-${textAvatar.variant} bg-opacity-10`}>
              <span className={`text-${textAvatar.variant} position-absolute top-50 start-50 translate-middle fw-bold`}>{textAvatar.label}</span>
            </div>
          )}
        </div>
        <h5 className="mb-1">{name}</h5>
        <small className="flex-centered">
          <BsGeoAlt className="me-1" />
          {location}
        </small>
        <div className="d-flex justify-content-between mt-3">
          <h6 className="mb-0 small">
            <span className="fw-light">Total listings:</span> {totalListing}
          </h6>
          <h6 className="mb-0 small items-center">
            {rating}
            <FaStar size={16} className="text-warning ms-1" />
          </h6>
        </div>
      </CardBody>
      <CardFooter className="d-flex gap-3 align-items-center">
        <Link to="/admin/agents/detail" className="btn btn-sm btn-primary-soft mb-0 w-100">
          View detail
        </Link>
        <Link to="" className="btn btn-sm btn-light flex-shrink-0 mb-0 flex-centered">
          <BsEnvelope />
        </Link>
      </CardFooter>
    </Card>
  )
}

export default AgentCard
