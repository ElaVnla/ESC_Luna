import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaStar, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { teamMembers } from '../data'

const Teams = () => {
  return (
    <section className="py-0">
      <Container>
        <Row className="g-4">
          {teamMembers.map((member, idx) => {
            return (
              <Col key={idx} sm={6} md={4} xl={3}>
                <Card className="card-img-scale card-element-hover overflow-hidden bg-transparent">
                  <div className="card-img-scale-wrapper rounded-3">
                    <Image src={member.image} className="card-img" />
                    <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                      <span className="badge text-bg-white items-center">
                        <FaStar size={14} className="text-warning me-2" />
                        4.3
                      </span>
                      <div className="btn-group hover-element d-flex mt-auto">
                        <Link to="" className="btn btn-white">
                          <FaFacebookF className="text-facebook" />
                        </Link>
                        <Link to="" className="btn btn-white">
                          <FaInstagram className="text-instagram" />
                        </Link>
                        <Link to="" className="btn btn-white">
                          <FaTwitter className="text-twitter" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <CardBody className="px-2 pb-0">
                    <h5 className="card-title mb-1">
                      <Link to="">{member.name}</Link>
                    </h5>
                    <span>{member.position}</span>
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

export default Teams
