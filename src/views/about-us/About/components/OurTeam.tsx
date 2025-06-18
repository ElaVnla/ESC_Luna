import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ourTeams } from '../data'

const OurTeam = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="mb-4">
          <Col xs={12}>
            <h2 className="mb-0">Our Team</h2>
          </Col>
        </Row>
        <Row className="g-4">
          {ourTeams.map((team, idx) => {
            return (
              <Col key={idx} sm={6} lg={3}>
                <Card className="card-element-hover bg-transparent">
                  <div className="position-relative">
                    <Image src={team.image} className="card-img" />
                    <div className="card-img-overlay hover-element d-flex p-3">
                      <div className="btn-group mt-auto">
                        <Link to="" className="btn btn-white mb-0">
                          <FaFacebookF className="text-facebook" />
                        </Link>
                        <Link to="" className="btn btn-white mb-0">
                          <FaInstagram className="text-instagram" />
                        </Link>
                        <Link to="" className="btn btn-white mb-0">
                          <FaTwitter className="text-twitter" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <CardBody className="px-2 pb-0">
                    <h5 className="card-title">
                      <Link to="">{team.name}</Link>
                    </h5>
                    <span>{team.position}</span>
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

export default OurTeam
