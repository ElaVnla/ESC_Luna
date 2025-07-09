import { Card, CardBody, CardFooter, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Image } from 'react-bootstrap'
import { FaBed, FaBuilding } from 'react-icons/fa'
import { BsInfoCircle, BsSlashCircle, BsStarFill, BsThreeDotsVertical } from 'react-icons/bs'
import { currency } from '@/states'
import { Link } from 'react-router-dom'
import type { BookingType } from '../types'

const BookingCard = ({ booking }: { booking: BookingType }) => {
  const { bed, floor, image, name, price, rating } = booking
  return (
    <Card className="shadow h-100">
      <div className="position-relative">
        <Image src={image} className="card-img-top" alt="Card image" />
        <div className="card-img-overlay d-flex flex-column p-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="badge text-bg-dark">
              <BsStarFill className=" fa-fw me-2 text-warning" />
              {rating}
            </div>
            <Dropdown className="list-inline-item">
              <DropdownToggle as="a" className="arrow-none btn btn-sm btn-round btn-light" role="button">
                <BsThreeDotsVertical />
              </DropdownToggle>
              <DropdownMenu align="end" className="min-w-auto shadow rounded small" aria-labelledby="dropdownAction1">
            
                  <DropdownItem href="">
                    <BsInfoCircle className=" me-2" />
                    Report
                  </DropdownItem>
             
                  <DropdownItem href="">
                    <BsSlashCircle className=" me-2" />
                    Disable
                  </DropdownItem>
               
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
      <CardBody className="px-3">
        <h5 className="card-title mb-1">
          <Link to="/admin/bookings/detail">{name}</Link>
        </h5>
        <ul className="list-group list-group-borderless small mt-2 mb-0">
          <li className="list-group-item pb-0 items-center">
            <FaBuilding size={14} className="me-2" />
            {floor}
          </li>
          <li className="list-group-item pb-0 items-center">
            <FaBed size={14} className="me-2" />
            {bed}
          </li>
        </ul>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="hstack gap-2 mb-2">
          <h6 className="fw-normal mb-0">
            {currency}
            {price}
          </h6>
          <small>/per person</small>
        </div>
        <Link to="/admin/bookings/detail" className="btn btn-sm btn-primary-soft mb-0 w-100">
          View detail
        </Link>
      </CardFooter>
    </Card>
  )
}

export default BookingCard
