import { currency } from '@/states'
import { Button, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Image, Row } from 'react-bootstrap'
import { BsGeoAlt, BsInfoCircle, BsPencilSquare, BsSlashCircle, BsThreeDotsVertical } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import type { HotelType } from '../types'

const HotelCard = ({ hotel }: { hotel: HotelType }) => {
  const { address, image, name, price } = hotel

  return (
    <Card className="shadow p-3">
      <Row className="g-4">
        <Col md={3}>
          <Image src={image} className="rounded-2" alt="Card image" />
        </Col>

        <Col md={9}>
          <CardBody className="position-relative d-flex flex-column p-0 h-100">
            <Dropdown drop="down-centered" className="list-inline-item position-absolute top-0 end-0">
              <DropdownToggle as={Link} to="" className="arrow-none btn btn-sm btn-round btn-light">
                <BsThreeDotsVertical />
              </DropdownToggle>

              <DropdownMenu align="end" className="min-w-auto shadow" aria-labelledby="dropdownAction1">
               
                  <DropdownItem className="small" href="">
                    <BsInfoCircle className=" me-2" />
                    Report
                  </DropdownItem>
              
                  <DropdownItem className="small" href="">
                    <BsSlashCircle className=" me-2" />
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

            <div className="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
              <div className="d-flex align-items-center">
                <h5 className="fw-bold mb-0 me-1">
                  {currency}
                  {price}
                </h5>
                <span className="mb-0 me-2">/day</span>
              </div>

              <div className="hstack gap-2 mt-3 mt-sm-0">
                <Button variant="primary-soft" size="sm" className="px-2 mb-0 flex-centered">
                  <BsPencilSquare className=" fa-fw" />
                </Button>
                <Button variant="danger-soft" size="sm" className="px-2 mb-0 flex-centered">
                  <BsSlashCircle className=" fa-fw" />
                </Button>
              </div>
            </div>
          </CardBody>
        </Col>
      </Row>
    </Card>
  )
}

export default HotelCard
