import { usePureCounter } from '@/hooks'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Counter = () => {
  usePureCounter()

  return (
    <section className="pt-0">
      <Container>
        <Row className="g-4 align-items-center">
          <Col sm={6} md={3}>
            <h4 className="mb-0">Numbers In Worldwide</h4>
          </Col>
          <Col sm={6} md={3}>
            <Card className="card-body text-center bg-light">
              <div className="d-flex justify-content-center">
                <h3 className="purecounter text-orange mb-0" data-purecounter-start={0} data-purecounter-end={28} data-purecounter-delay={300}>
                  0
                </h3>
                <span className="h3 text-orange mb-0">M+</span>
              </div>
              <h6 className="fw-normal mb-0">Total Users</h6>
            </Card>
          </Col>
          <Col sm={6} md={3}>
            <Card className="card-body text-center bg-light">
              <div className="d-flex justify-content-center">
                <h3 className="purecounter text-info mb-0" data-purecounter-start={0} data-purecounter-end={51} data-purecounter-delay={300}>
                  0
                </h3>
                <span className="h3 text-info mb-0">M+</span>
              </div>
              <h6 className="fw-normal mb-0">Total Listing</h6>
            </Card>
          </Col>
          <Col sm={6} md={3}>
            <Card className="card-body text-center bg-light">
              <div className="d-flex justify-content-center">
                <h3 className="purecounter text-primary mb-0" data-purecounter-start={0} data-purecounter-end={41} data-purecounter-delay={300}>
                  0
                </h3>
                <span className="h3 text-primary mb-0">+</span>
              </div>
              <h6 className="fw-normal mb-0">Languages</h6>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Counter
