import { Card, Col, Container, Row } from 'react-bootstrap'
import clsx from 'clsx'

import { cabsFeatures } from '../data'

const WhyChooseUs = () => {
  return (
    <section className="pt-0 pt-xl-5">
      <Container>
        <Row className="mb-3 mb-sm-4">
          <Col xs={12} className="text-center">
            <h2>Why Choose Us</h2>
          </Col>
        </Row>
        <Row className="g-4">
          {cabsFeatures.map((item, idx) => {
            const Icon = item.icon
            return (
              <Col key={idx} sm={6} lg={4}>
                <Card className="card-body shadow p-4 h-100">
                  <div className={clsx(item.variant, 'icon-lg bg-opacity-10 rounded-circle mb-4 flex-centered')}>
                    <Icon className="fs-5" />
                  </div>
                  <h5>{item.title}</h5>
                  <p className="mb-0">{item.description}</p>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default WhyChooseUs
