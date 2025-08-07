import { Col, Container, Row } from 'react-bootstrap'
import { hotels } from '../data'
import HotelGridCard from './HotelGridCard'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const HotelGridLayout = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="g-4">
          {hotels.map((hotel, idx) => {
            return (
              <Col key={idx} md={6} xl={4}>
                <HotelGridCard
                  id={hotel.id}
                  name={hotel.name}
                  price={hotel.price}
                  feature={hotel.feature}
                  images={hotel.images}
                  rating={hotel.rating}
                  sale={hotel.sale}
                />
              </Col>
            )
          })}
        </Row>
        <Row>
          <Col xs={12}>
            <nav className="mt-4 d-flex justify-content-center" aria-label="navigation">
              <ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                <li className="page-item mb-0">
                  <Link className="page-link" to="" tabIndex={-1}>
                    <FaAngleLeft />
                  </Link>
                </li>
                <li className="page-item mb-0">
                  <Link className="page-link" to="">
                    1
                  </Link>
                </li>
                <li className="page-item mb-0 active">
                  <Link className="page-link" to="">
                    2
                  </Link>
                </li>
                <li className="page-item mb-0">
                  <Link className="page-link" to="">
                    ..
                  </Link>
                </li>
                <li className="page-item mb-0">
                  <Link className="page-link" to="">
                    6
                  </Link>
                </li>
                <li className="page-item mb-0">
                  <Link className="page-link" to="">
                    <FaAngleRight />
                  </Link>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HotelGridLayout
