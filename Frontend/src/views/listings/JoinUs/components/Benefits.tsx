import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import { benefits } from '../data'

const Benefits = () => {
  return (
    <section className="pt-0 pt-md-5">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="bg-light p-4 p-sm-5 rounded-3">
              <h2 className="fs-3 text-center mb-4 mb-sm-5">Why Working with us</h2>
              <Row className="g-4">
                {benefits.map((benefit, idx) => {
                  return (
                    <Col md={6} key={idx}>
                      <Card className="card-body p-4">
                        <div>
                          <Image src={benefit.image} className="h-70px mb-3" />
                        </div>
                        <h5>{benefit.title}</h5>
                        <p className="mb-0">{benefit.description}</p>
                      </Card>
                    </Col>
                  )
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Benefits
