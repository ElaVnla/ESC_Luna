import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import FlightListFilter from './FlightListFilter'
import FlightCard from './FlightCard'
import FlightCard2 from './FlightCard2'
import FlightCard3 from './FlightCard3'

import element5 from '@/assets/images/element/05.svg'
import FlightCard4 from './FlightCard4'
import { Link } from 'react-router-dom'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const FlightLists = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col xl={4} xxl={3}>
            <div className="d-none d-xl-block">
              <FlightListFilter />

              <div className="d-flex justify-content-between p-2 p-xl-0 mt-xl-4">
                <Button variant="link" className="p-0 mb-0">
                  Clear all
                </Button>
                <Button variant="primary" className="mb-0">
                  Filter Result
                </Button>
              </div>
            </div>
          </Col>
          <Col xl={8} xxl={9}>
            <div className="vstack gap-4">
              <FlightCard />

              <FlightCard2 />

              <FlightCard3 />

              <div className="bg-success bg-opacity-10 p-3 rounded-2 d-sm-flex justify-content-sm-between align-items-center">
                <div className="d-flex align-items-center mb-3 mb-sm-0">
                  <div className="position-relative z-index-1 me-2">
                    <Image src={element5} className="position-relative h-40px" />
                    <span className="smaller text-white position-absolute top-50 start-50 translate-middle">New</span>
                  </div>
                  <h6 className="mb-0 fw-normal">
                    Get <strong className="text-success">12% Off</strong> On Your First Flight
                  </h6>
                </div>
                <Button size="sm" variant="success" className="mb-0">
                  Login / Signup
                </Button>
              </div>

              <FlightCard4 />

              <nav className="d-flex justify-content-center" aria-label="navigation">
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
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FlightLists
