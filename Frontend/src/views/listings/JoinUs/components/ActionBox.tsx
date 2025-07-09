import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import element22 from '@/assets/images/element/22.svg'

const ActionBox = () => {
  return (
    <section>
      <Container>
        <Row className="g-4">
          <Col xs={12}>
            <Card className="card-body shadow p-4">
              <Row className="g-4 justify-content-between align-items-center">
                <Col sm={3} lg={2}>
                  <Image src={element22} />
                </Col>
                <Col sm={9} lg={6} xl={7}>
                  <h4>Why did you choose us</h4>
                  <p className="mb-0">Water timed folly right aware if oh truth. Large above be to means. Dashwood does provide stronger is.</p>
                </Col>
                <Col lg={3} xxl={2} className="d-grid">
                  <Button variant="primary" className="mb-0">
                    Become a host
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ActionBox
