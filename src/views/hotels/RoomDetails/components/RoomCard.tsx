import { GlightBox } from '@/components'
import { currency } from '@/states'
import { Button, Card, CardBody, Col, Image, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { FaBed, FaSquare, FaTableCellsLarge } from 'react-icons/fa6'

import { type HotelRoomType } from '../data'

const RoomCard = ({ images, name, price, sqfeet }: HotelRoomType) => {
  return (
    <Card className="border bg-transparent p-3">
      <Row className="g-3 g-md-4">
        <Col md={4}>
          <div className="position-relative">
            <Image src={images[0]} className="card-img" />
            <div className="card-img-overlay">
              <GlightBox image={images[0]} className="badge bg-dark stretched-link" data-glightbox data-gallery="gallery">
                {images.length} Photos <BsArrowRight />
              </GlightBox>
            </div>

            {(images ?? []).map((img, idx) => (
              <GlightBox key={idx} image={img} className="stretched-link z-index-9" />
            ))}
          </div>
        </Col>
        <Col md={8}>
          <CardBody className="d-flex flex-column p-0 h-100">
            <h5 className="card-title">{name}</h5>
            <ul className="nav small nav-divider mb-0">
              <li className="nav-item mb-0">
                <FaSquare className="me-1" />
                {sqfeet} sq.ft
              </li>
              <li className="nav-item mb-0">
                <FaTableCellsLarge className="me-1" />
                City view
              </li>
              <li className="nav-item mb-0">
                <FaBed className="me-1" />
                King Bed
              </li>
            </ul>
            <div className="d-flex justify-content-between align-items-center mt-2 mt-md-auto">
              <div className="d-flex text-success">
                <h6 className="h5 mb-0 text-success">
                  {currency}
                  {price}
                </h6>
                <span className="fw-light">/per night</span>
              </div>
              <Button size="sm" variant="dark" href="" className="mb-0">
                Select room
              </Button>
            </div>
          </CardBody>
        </Col>
      </Row>
    </Card>
  )
}

export default RoomCard
