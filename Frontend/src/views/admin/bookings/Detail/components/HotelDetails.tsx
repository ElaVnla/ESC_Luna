import { Col, Image, Row } from 'react-bootstrap'
import { BsFullscreen, BsGeoAlt, BsPencilSquare } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { GlightBox } from '@/components'
import { currency } from '@/states'

import room2 from '@/assets/images/category/hotel/4by3/02.jpg'
import room3 from '@/assets/images/category/hotel/4by3/03.jpg'
import room4 from '@/assets/images/category/hotel/4by3/04.jpg'
import room5 from '@/assets/images/category/hotel/4by3/05.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'
import { roomFeatures } from '../data'

const roomImages = [room2, room3, room4, room5]

const HotelDetails = () => {
  return (
    <>
      <Row>
        <Col xs={12} className="mb-4 mb-sm-5">
          <div className="d-sm-flex justify-content-between align-items-center">
            <h1 className="h3 mb-2 mb-sm-0">Premium Room With Balcony</h1>
            <Link to="" className="btn btn-primary-soft text-nowrap mb-0">
              <div className='items-center gap-2'>
                <div>
                  <BsPencilSquare />
                </div> Edit Room
              </div>
            </Link>
          </div>
        </Col>
      </Row>

      <Row className="g-4 g-xl-5">
        <Col xxl={6}>
          <Row className="g-2 g-sm-4">
            {roomImages.map((image, idx) => {
              return (
                <Col xs={6} key={idx}>
                  <GlightBox data-glightbox data-gallery="gallery" image={image}>
                    <div className="card card-element-hover card-overlay-hover overflow-hidden">
                      <Image src={image} className="rounded-3" />
                      <div className="hover-element w-100 h-100">
                        <BsFullscreen
                          size={32}
                          className=" text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                        />
                      </div>
                    </div>
                  </GlightBox>
                </Col>
              )
            })}
          </Row>
        </Col>

        <Col xxl={6}>
          <h4>
            <span className="fw-light">Hotel: </span>Courtyard by Marriott New York
          </h4>
          <p className="fw-bold items-center">
            <BsGeoAlt className=" me-2" />
            5855 W Century Blvd, Los Angeles - 90045{' '}
          </p>
          <p className="mb-4">
            Tolerably behavior may admit daughters offending her ask own. Praise effect wishes to change way and any wanted. Lively use looked latter
            regard had. Does he part last
          </p>

          <Row className="g-4">
            {roomFeatures.map((item, idx) => {
              const Icon = item.icon
              return (
                <Col key={idx} sm={6} md={4}>
                  <div className="d-flex align-items-center">
                    <div className="icon-lg bg-primary bg-opacity-10 text-primary rounded-2">
                      <Icon size={24} className="mb-1" />
                    </div>
                    <div className="ms-2">
                      <small>{item.feature.label}</small>
                      <h6 className="mb-0 mt-1">{item.feature.name}</h6>
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>

          <div className="bg-light border border-secondary border-opacity-25 p-3 rounded d-inline-block mt-4">
            <h6 className="small">Current Reservation:</h6>
            <div className="d-sm-flex align-items-center">
              <div className="avatar avatar-xs flex-shrink-0">
                <img className="avatar-img rounded-circle" src={avatar9} alt="avatar" />
              </div>
              <h6 className="mb-0 ms-2">Lori Stevens</h6>
            </div>
            <div className="hstack gap-4 gap-md-5 flex-wrap mt-2">
              <div>
                <small>Check-in:</small>
                <h6 className="fw-normal mb-0">18 Dec 2022 9:00AM</h6>
              </div>
              <div>
                <small>Check-out:</small>
                <h6 className="fw-normal mb-0">22 Dec 2022 8:00PM</h6>
              </div>
              <div>
                <small>Total Amount:</small>
                <h6 className="text-success mb-0">{currency}1528</h6>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default HotelDetails
