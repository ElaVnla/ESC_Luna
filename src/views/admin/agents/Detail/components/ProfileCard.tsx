import { Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Image } from 'react-bootstrap'
import { BsEnvelopeFill, BsGeoAltFill, BsPencilSquare, BsSkype, BsTelephoneFill, BsThreeDots, BsTrash } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

import avatar5 from '@/assets/images/avatar/05.jpg'

const ProfileCard = () => {
  return (
    <Card className="bg-light">
      <Dropdown className="position-absolute top-0 end-0 m-3">
        <DropdownToggle as={Link} to="" className="arrow-none btn btn-sm btn-white btn-round lh-lg mb-0" role="button">
          <BsThreeDots />
        </DropdownToggle>
        <DropdownMenu align="end" className="dropdown-w-sm min-w-auto shadow rounded" aria-labelledby="dropdownShare1">
          <DropdownItem href="">
            <BsPencilSquare className="  fa-fw me-2" />
            Edit
          </DropdownItem>

          <DropdownItem href="">
            <BsTrash className=" fa-fw me-2" />
            Remove
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <CardBody className="text-center">
        <div className="avatar avatar-xl flex-shrink-0 mb-3">
          <Image className="avatar-img rounded-circle" src={avatar5} alt="avatar" />
        </div>

        <h5 className="mb-2">Jacqueline Miller</h5>
        <ul className="list-inline small mb-0">
          {Array.from(new Array(4)).map((_val, idx) => (
            <li className="list-inline-item me-1" key={idx}>
              <FaStar size={16} className="text-warning" />
            </li>
          ))}
          <li className="list-inline-item">
            <FaStarHalfAlt className="text-warning" />
          </li>
        </ul>
      </CardBody>

      <div className="card-footer bg-light border-top">
        <h6 className="mb-3">Contact Details</h6>

        <div className="d-flex align-items-center mb-3">
          <div className="icon-md bg-mode h6 mb-0 rounded-circle flex-shrink-0 flex-centered">
            <BsEnvelopeFill />
          </div>
          <div className="ms-2">
            <small>Email id</small>
            <h6 className="fw-normal small mb-0">
              <Link to="mailto:hello@gmail.com">hello@gmail.com</Link>
            </h6>
          </div>
        </div>

        <div className="d-flex align-items-center mb-3">
          <div className="icon-md bg-mode h6 mb-0 rounded-circle flex-shrink-0 flex-centered">
            <BsTelephoneFill />
          </div>
          <div className="ms-2">
            <small>Phone</small>
            <h6 className="fw-normal small mb-0">
              <Link to="">+1(404) 586-854</Link>
            </h6>
          </div>
        </div>

        <div className="d-flex align-items-center mb-3">
          <div className="icon-md bg-mode h6 mb-0 rounded-circle flex-shrink-0 flex-centered">
            <BsGeoAltFill />
          </div>
          <div className="ms-2">
            <small>Address</small>
            <h6 className="fw-normal small mb-0">225 Cherry Street #56, New York</h6>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="icon-md bg-mode h6 mb-0 rounded-circle flex-shrink-0 flex-centered">
            <BsSkype />
          </div>
          <div className="ms-2">
            <small>Skype</small>
            <h6 className="fw-normal small mb-0">@Jacqueline56</h6>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProfileCard
