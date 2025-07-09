import { Button, Col, Container, Image, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from 'react-bootstrap'
import { FaSliders } from 'react-icons/fa6'

import element10 from '@/assets/images/element/10.svg'
import element11 from '@/assets/images/element/11.svg'
import FlightListFilter from './FlightListFilter'
import { useToggle } from '@/hooks'

const NoticeBoard = () => {
  const { isOpen, toggle } = useToggle()
  return (
    <section className="pt-0">
      <Container className="position-relative">
        <Row>
          <Col xs={12}>
            <div className="d-sm-flex justify-content-sm-between align-items-center">
              <div className="mb-3 mb-sm-0">
                <h1 className="fs-3">09 Flight Available</h1>
                <ul className="nav nav-divider h6 mb-0">
                  <li className="nav-item">25 Jan</li>
                  <li className="nav-item">1 Stop</li>
                </ul>
              </div>
              <Button variant="primary" onClick={toggle} className="d-xl-none mb-0" type="button">
                <FaSliders className="me-1" /> Show filters
              </Button>
            </div>
          </Col>
        </Row>
        <div className="bg-primary bg-opacity-10 rounded-3 overflow-hidden mt-4 p-4">
          <Row className="g-4 align-items-center">
            <Col xs={6} md={3} className="text-center order-1">
              <Image src={element11} className="mb-n5" />
            </Col>
            <Col md={6} className="order-md-2">
              <h4>International Guideline</h4>
              <p className="mb-2">COVID safety measures adopted by various countries including VISA restrictions, quarantine rules, etc.</p>
              <Button size="sm" variant="primary" className="mb-0">
                View Guidelines
              </Button>
            </Col>
            <Col xs={6} md={3} className="text-center order-3">
              <Image src={element10} className="mb-n5" />
            </Col>
          </Row>
        </div>
      </Container>

      {/* List Filter offcanvas */}
      <Offcanvas
        placement="end"
        show={isOpen}
        onHide={toggle}
        className="offcanvas-xl"
        tabIndex={-1}
        id="offcanvasSidebar"
        aria-labelledby="offcanvasSidebarLabel"
      >
        <OffcanvasHeader>
          <h5 className="offcanvas-title" id="offcanvasSidebarLabel">
            Advance Filters
          </h5>
          <button type="button" className="btn-close" onClick={toggle} />
        </OffcanvasHeader>
        <OffcanvasBody className="flex-column p-3 p-xl-0">
          <FlightListFilter />
        </OffcanvasBody>
        <div className="d-flex justify-content-between p-2 p-xl-0 mt-xl-4">
          <Button variant="link" className="p-0 mb-0">
            Clear all
          </Button>
          <Button variant="primary" className="mb-0">
            Filter Result
          </Button>
        </div>
      </Offcanvas>
    </section>
  )
}

export default NoticeBoard
