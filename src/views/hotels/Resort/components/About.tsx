import { Button, Col, Container, Row } from 'react-bootstrap'
import { BsPinMap, BsStar, BsWallet, BsXOctagon } from 'react-icons/bs'
import { FaStarHalfAlt } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'

const About = () => {
  return (
    <div className="pt-5 pt-md-8 pb-0">
      <Container className="z-index-9">
        <Row>
          <Col lg={10} className="m-auto text-center">
            <h2>Here is a tribute to good life!</h2>
            <p className="lead">
              Size-like body someone had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her
              ask own. Praise effects wish change way and any wanted. Lively use looked latter regard had. Do he it part more last in. We understand
              that theory is important to build a solid foundation, we understand that theory alone isn't going to get the job done so that's why this
              is packed with practical hands-on examples that you can follow step by step.
            </p>
            <ul className="list-inline hstack gap-4 flex-wrap justify-content-center mt-4">
              <li className="list-inline-item">
                <h5 className="mb-0 fw-normal items-center">
                  <BsStar className=" fa-fw text-warning me-1" />
                  Have High Rating
                </h5>
              </li>
              <li className="list-inline-item">
                <h5 className="mb-0 fw-normal items-center">
                  <BsPinMap className=" fa-fw text-primary me-1" />
                  Best Locations
                </h5>
              </li>
              <li className="list-inline-item">
                <h5 className="mb-0 fw-normal items-center">
                  <BsXOctagon className=" fa-fw text-danger me-1" />
                  Free Cancellation
                </h5>
              </li>
              <li className="list-inline-item">
                <h5 className="mb-0 fw-normal items-center">
                  <BsWallet className="fa-fw text-success me-1" />
                  Payment Options
                </h5>
              </li>
            </ul>
            <div className="d-sm-flex justify-content-center align-items-center mt-4">
              <div className="d-flex justify-content-center align-items-center text-start me-0 me-sm-4">
                <h3 className="me-2 mb-0">4.5</h3>
                <div>
                  <ul className="list-inline mb-0">
                    {Array.from(new Array(4)).map((_val, idx) => (
                      <li key={idx} className="list-inline-item me-1 small">
                        <FaStar size={15} className="text-warning" />
                      </li>
                    ))}
                    <li className="list-inline-item me-1 small">
                      <FaStarHalfAlt size={15} className="text-warning" />
                    </li>
                  </ul>
                  <p className="mb-0 small">Clients Love Us!</p>
                </div>
              </div>
              <div>
                {' '}
                <Button size="lg" variant="dark" href="" className="mb-0">
                  Explore now
                </Button>{' '}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
