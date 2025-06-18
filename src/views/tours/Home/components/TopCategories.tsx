import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { topCategories } from '../data'

const TopCategories = () => {
  return (
    <section className="pt-0 pt-md-5">
      <Container>
        <Row className="mb-3 mb-sm-4">
          <div className="col-12 text-center">
            <h2 className="mb-0">Top Categories</h2>
          </div>
        </Row>
        <Row className="g-4 g-xl-5">
          {topCategories.map((category, idx) => {
            return (
              <Col key={idx} sm={6} lg={4} xl={3}>
                <Row className="g-2 g-md-3 align-items-center position-relative">
                  <Col md={6}>
                    <Image src={category.image} className="rounded-3" />
                  </Col>
                  <Col md={6}>
                    <div className="p-2 p-md-0">
                      <h5 className="mb-1">
                        <Link to="" className="stretched-link">
                          {category.name}
                        </Link>
                      </h5>
                      <span>{category.places} Places</span>
                    </div>
                  </Col>
                </Row>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default TopCategories
