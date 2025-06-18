import { Container, Row } from 'react-bootstrap'
import TourPackageCard from './TourPackageCard'
import { tourPackages } from '../data'

const TourPackages = () => {
  return (
    <section className="pt-0 pt-md-5">
      <Container>
        <Row className="mb-4">
          <div className="col-12 text-center">
            <h2 className="mb-0">Our Best Packages</h2>
          </div>
        </Row>
        <Row className="g-4">
          <TourPackageCard tourPackages={tourPackages} />
        </Row>
      </Container>
    </section>
  )
}

export default TourPackages
