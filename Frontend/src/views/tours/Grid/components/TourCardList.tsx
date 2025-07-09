import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import TourCard from './TourCard'

import { tourCards } from '../data'
import { SelectFormInput } from '@/components'

const TourCardList = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="g-4 align-items-center justify-content-between mb-4">
          <Col xs={12} xl={8}>
            <h5 className="mb-0">Showing 1-7 of 32 result</h5>
          </Col>
          <Col xl={2}>
            <form className="form-control-bg-light">
              <SelectFormInput className="form-select js-choice">
                <option value={-1}>Most Viewed</option>
                <option>Recently search</option>
                <option>Most popular</option>
                <option>Top rated</option>
              </SelectFormInput>
            </form>
          </Col>
        </Row>
        <Row className="g-4">
          {tourCards.map((tour, idx) => {
            return (
              <Col md={6} xl={4} key={idx}>
                <TourCard tour={tour} />
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

export default TourCardList
