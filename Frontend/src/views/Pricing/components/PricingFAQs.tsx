import { Card, Col, Container, Row } from 'react-bootstrap'
import { pricingFAQs } from '../data'

const PricingFAQs = () => {
  return (
    <section className="pt-0">
      <Container className="mt-4">
        <Row className="mb-4 mb-md-5">
          <Col xs={12} className="text-center">
            <h2>Frequently Asked Questions</h2>
            <p className="mb-0">Perceived end knowledge certainly day sweetness why cordially</p>
          </Col>
        </Row>
        <Row className="g-4 g-md-5">
          {pricingFAQs.map((faq, idx) => {
            return (
              <Col key={idx} md={6} lg={4}>
                <Card className="card-body border bg-transparent h-100 p-4">
                  <h6>{faq.title}</h6>
                  <p className="mb-0">{faq.description}</p>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default PricingFAQs
