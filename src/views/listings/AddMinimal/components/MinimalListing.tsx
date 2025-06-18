import { Col, Container, Row } from 'react-bootstrap'
import OwnerDetail from './OwnerDetail'
import CabDetail from './CabDetail'
import DriverDetail from './DriverDetail'
import { Link } from 'react-router-dom'

const MinimalListing = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <form className="vstack gap-4">
              <OwnerDetail />

              <CabDetail />

              <DriverDetail />
              <div className="text-end">
                <Link to="/listings/added" className="btn btn-primary mb-0">
                  Add listing
                </Link>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MinimalListing
