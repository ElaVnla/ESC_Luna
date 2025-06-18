import { Card, CardBody, CardTitle, Col, Container, Image, Row } from 'react-bootstrap'

import blog1 from '@/assets/images/blog/01.jpg'
import { Link } from 'react-router-dom'
import { blogs } from '../data'

const BlogsAndNews = () => {
  return (
    <section>
      <Container>
        <Row className="mb-3 mb-sm-4">
          <Col xs={12} className="text-center">
            <h2 className="mb-0">Latest Blogs &amp; News</h2>
          </Col>
        </Row>
        <Row className="g-4 g-xl-5 justify-content-between">
          <Col md={6}>
            <Card className="bg-transparent">
              <Image src={blog1} className="card-img" />
              <CardBody className="px-3">
                <h4>
                  <Link to="/blogs/detail" className="stretched-link">
                    10 Ways on How to Improve your Hotel Operations
                  </Link>
                </h4>
              </CardBody>
            </Card>
          </Col>

          <Col md={6}>
            {blogs.map((blog, idx) => {
              return (
                <Card key={idx} className="bg-transparent mb-4 mb-md-5">
                  <Row className="align-items-center">
                    <Col sm={4}>
                      <Image src={blog.image} className="card-img" />
                    </Col>
                    <Col sm={8}>
                      <CardBody className="p-sm-0">
                        <CardTitle as="h5">
                          <Link to={`/blogs/detail?title=${blog.title}`} className="stretched-link">
                            {blog.title}
                          </Link>
                        </CardTitle>
                        <p className="mb-0">{blog.name}</p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              )
            })}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BlogsAndNews
