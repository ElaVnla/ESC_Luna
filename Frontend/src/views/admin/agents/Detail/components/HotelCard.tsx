import { currency } from '@/states'
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Image, Row } from 'react-bootstrap'
import { BsEye, BsGeoAlt, BsInfoCircle, BsSlashCircle, BsThreeDotsVertical } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import type { HotelType } from '../types'

const HotelCard = ({ hotel }: { hotel: HotelType }) => {
  const { address, image, name, price } = hotel

  return (
    <Card className="shadow p-3">
      <Row className="g-4">
        <Col sm={3}>
          <Image src={image} className="rounded-2" alt="Card image" />
        </Col>
        <Col sm={9}>
          <CardBody className="position-relative d-flex flex-column p-0 h-100">
            <Dropdown className="list-inline-item position-absolute top-0 end-0">
              <DropdownToggle as={Link} to="" className="btn btn-sm btn-round btn-light arrow-none" role="button">
                <BsThreeDotsVertical />
              </DropdownToggle>
              <DropdownMenu align="end" className="min-w-auto shadow rounded" aria-labelledby="dropdownAction1">
               
                  <DropdownItem href="">
                    <BsInfoCircle className=" me-1" />
                    Report
                  </DropdownItem>
              
                  <DropdownItem href="">
                    <BsSlashCircle className=" me-1" />
                    Disable
                  </DropdownItem>
            
              </DropdownMenu>
            </Dropdown>
            <h5 className="card-title mb-0 me-5">
              <Link to="/hotels/detail">{name}</Link>
            </h5>
            <small className="items-center">
              <BsGeoAlt className="me-2" />
              {address}
            </small>
            <div className="d-flex justify-content-between align-items-center mt-3 mt-md-auto">
              <div className="d-flex align-items-center">
                <h5 className="fw-bold mb-0 me-1">
                  {currency}
                  {price}
                </h5>
                <span className="mb-0 me-2">/day</span>
              </div>
              <Link to="" className="btn btn-sm btn-primary px-2 mb-0 items-center gap-1">
                <BsEye className="me-1" />
                View
              </Link>
            </div>
          </CardBody>
        </Col>
      </Row>
    </Card>
  )
}

export default HotelCard
