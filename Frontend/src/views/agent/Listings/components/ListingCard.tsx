import { Button, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Image, Row } from 'react-bootstrap'
import { BsGeoAlt, BsInfoCircle, BsPencilSquare, BsSlashCircle, BsThreeDotsVertical, BsTrash3 } from 'react-icons/bs'
import { type RoomListType } from '../data'
import { Link } from 'react-router-dom'
import { currency } from '@/states'

const ListingCard = ({ roomListCard }: { roomListCard: RoomListType }) => {
  const { address, image, name, price } = roomListCard
  return (
    <Card className="border p-2">
      <Row className="g-4">
        <Col md={3} lg={2}>
          <Image src={image} className="card-img rounded-2" alt="Card image" />
        </Col>
        <Col md={9} lg={10}>
          <CardBody className="position-relative d-flex flex-column p-0 h-100">
            <Dropdown className="list-inline-item position-absolute top-0 end-0">
              <DropdownToggle as={Link} to="" className="arrow-none btn btn-sm btn-round btn-light">
                <BsThreeDotsVertical />
              </DropdownToggle>
              <DropdownMenu align="end" className="min-w-auto shadow rounded" aria-labelledby="dropdownAction2">
           
                  <DropdownItem className="items-center">
                    <BsInfoCircle className="me-1" />
                    Report
                  </DropdownItem>
             
                  <DropdownItem className="items-center">
                    <BsSlashCircle className="me-1" />
                    Disable
                  </DropdownItem>
                
              </DropdownMenu>
            </Dropdown>
            <h5 className="card-title mb-0 me-5">
              <Link to="/hotels/detail">{name}</Link>
            </h5>
            <small>
              <BsGeoAlt className=" me-2" />
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
                <Button variant="primary" size="sm" className="mb-0 items-center">
                  <BsPencilSquare className=" fa-fw me-1" />
                  Edit
                </Button>
                <Button variant="danger" size="sm" className="mb-0 items-center">
                  <BsTrash3 className=" fa-fw me-1" />
                  Delete
                </Button>
              </div>
            </div>
          </CardBody>
        </Col>
      </Row>
    </Card>
  )
}

export default ListingCard
