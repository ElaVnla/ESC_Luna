import { useToggle, useViewPort } from '@/hooks'
import { Button, Col, Container, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Row } from 'react-bootstrap'
import { FaSlidersH } from 'react-icons/fa'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Sticky from 'react-sticky-el'
import CabCard from './CabCard'
import CabsAlert from './CabsAlert'
import CabsListFilter from './CabsListFilter'

import { cabsLists } from '../data'

const CabCardList = () => {
  const { isOpen, toggle } = useToggle()
  const { width } = useViewPort()

  return (
    <>
      <section className="pt-6">
        <Container className="position-relative">
          <Row>
            <Col xs={12}>
              <div className="d-sm-flex justify-content-sm-between align-items-center">
                <div className="mb-2 mb-sm-0">
                  <h1 className="fs-3 mb-2">5 Cabs Available</h1>
                  <ul className="nav nav-divider h6 mb-0">
                    <li className="nav-item">One-way trip</li>
                    <li className="nav-item">152 kms</li>
                    <li className="nav-item">2 Adults</li>
                  </ul>
                </div>
                <Button
                  onClick={toggle}
                  variant="primary"
                  className="btn btn-primary-soft btn-primary-check d-xl-none mb-0"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasSidebar"
                  aria-controls="offcanvasSidebar"
                >
                  <FaSlidersH className="me-1" /> Show filters
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container data-sticky-container>
          <Row>
            <Col as="aside" xl={4} xxl={3}>
              <Sticky topOffset={80} boundaryElement="div.container" hideOnBoundaryHit={false} stickyStyle={{ transition: '0.2s all linear' }} disabled={width <= 1199}>
                <div className="d-none d-xl-block">
                  <CabsListFilter />
                  <div className="d-flex justify-content-between p-2 p-xl-0 mt-xl-4">
                    <button className="btn btn-link p-0 mb-0">Clear all</button>
                    <button className="btn btn-primary mb-0">Filter Result</button>
                  </div>
                </div>
                <Offcanvas
                  show={isOpen}
                  onHide={toggle}
                  placement="end"
                  className="offcanvas-xl"
                  tabIndex={-1}
                  id="offcanvasSidebar"
                  aria-labelledby="offcanvasSidebarLabel"
                >
                  <OffcanvasHeader>
                    <OffcanvasTitle as="h5" id="offcanvasSidebarLabel">
                      Advance Filters
                    </OffcanvasTitle>
                    <button type="button" className="btn-close" onClick={toggle} />
                  </OffcanvasHeader>
                  <OffcanvasBody className="flex-column p-3 p-xl-0">
                    <CabsListFilter />
                  </OffcanvasBody>
                  <div className="d-flex justify-content-between p-2 p-xl-0 mt-xl-4">
                    <button className="btn btn-link p-0 mb-0">Clear all</button>
                    <button className="btn btn-primary mb-0">Filter Result</button>
                  </div>
                </Offcanvas>
              </Sticky>
            </Col>
            <Col xl={8} xxl={9}>
              <div className="vstack gap-4">
                <CabsAlert />

                {cabsLists.map((cab, idx) => (
                  <CabCard key={idx} cab={cab} />
                ))}

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
    </>
  )
}

export default CabCardList
