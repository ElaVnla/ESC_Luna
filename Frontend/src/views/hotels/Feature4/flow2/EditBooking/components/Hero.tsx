import { Button, Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import { BsHouse } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import element17 from '@/assets/images/element/17.svg'

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="py-0">
      <Container>
        <Row className="mt-4 align-items-center">
          <Col xs={12}>
            <Card className="overflow-hidden px-sm-5">
              <Row className="align-items-center g-4">
                <Col sm={9} className=''>
                  <CardBody>
                    <h1 className="m-0 h2 card-title">Edit guest details</h1>
                  </CardBody>
                </Col>
                <div className="col-sm-3 text-end d-none d-sm-block">
                  <Button variant="secondary" className="next-btn mb-0 m-2" onClick={() => window.history.back()}>
                    <i className="bi bi-arrow-left me-1" />
                    Back
                  </Button>
                  <Button onClick={() => navigate('/hotels/display-booking')} variant="primary" className="next-btn mb-0 m-2">
                    Update
                  </Button>
                </div>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
