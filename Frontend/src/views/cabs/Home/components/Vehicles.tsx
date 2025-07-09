import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { cabVehicles } from '../data'

const Vehicles = () => {
  return (
    <section className="pt-0 pt-md-5">
      <Container>
        <Row className="mb-4">
          <div className="col-12 text-center">
            <h2 className="mb-0">Our Awesome Vehicles</h2>
          </div>
        </Row>
        <Row className="g-4">
          {cabVehicles.map((vehicle, idx) => {
            return (
              <Col key={idx} sm={4} xl={2}>
                <Card className="shadow text-center align-items-center h-100 p-4">
                  <div className="icon-xxl bg-light rounded-circle">
                    <Image src={vehicle.image} className="w-90px" />
                  </div>
                  <CardBody className="px-0 pb-0">
                    <h5 className="card-title">
                      <Link to="" className="stretched-link">
                        {vehicle.name}
                      </Link>
                    </h5>
                    <span>
                      ({vehicle.availableCar} {vehicle.name}s)
                    </span>
                  </CardBody>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Vehicles
