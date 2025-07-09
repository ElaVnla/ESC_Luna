import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import blog10 from '@/assets/images/blog/10.jpg'
import { BsArrowUpRight, BsCalendar2Plus } from 'react-icons/bs'
import { blogs } from '../data'
import { Fragment } from 'react'

const BlogList = () => {
  return (
    <section className="pt-4 pt-md-5">
      <Container>
        <Row className="mb-5">
          <Col xs={12} className="text-center">
            <h1 className="display-1 mb-0">The Blog</h1>
          </Col>
        </Row>
        <Row className="g-4">
          <Col lg={6}>
            <Card className="bg-transparent mb-4 mb-sm-0">
              <div className="position-relative">
                <Image src={blog10} className="card-img" />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  <Link to="" className="badge bg-dark">
                    Adventure
                  </Link>
                </div>
              </div>
              <div className="card-body px-3 pb-0">
                <span className="items-center">
                  <BsCalendar2Plus className="me-2" />
                  April 28, 2022
                </span>
                <h5 className="card-title">
                  <Link to="/blogs/detail">7 common mistakes everyone makes while traveling</Link>
                </h5>
                <p className="mb-0">Prospective agents should start broadly and then narrow their list down to.</p>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <h6 className="mb-0">
                    By <Link to="">Joan Wallace</Link>
                  </h6>
                  <Link to="/blogs/detail" className="btn btn-link p-0 mb-0 items-center gap-1">
                    Read more <BsArrowUpRight />
                  </Link>
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={6} className="ps-lg-5">
            <div className="vstack gap-4">
              {blogs.map((blog, idx) => {
                return (
                  <Fragment key={idx}>
                    <Card className="bg-transparent">
                      <Row className="g-3 g-sm-4 align-items-sm-center">
                        <Col xs={4}>
                          <Image src={blog.image} className="card-img" />
                        </Col>
                        <Col xs={8}>
                          <CardBody className="p-0">
                            <h5 className="card-title mb-sm-3">
                              <Link to={`/blogs/detail?title=${blog.title}`} className="stretched-link">
                                {blog.title}
                              </Link>
                            </h5>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="small items-center">
                                <BsCalendar2Plus className=" me-2" />
                                {blog.date}
                              </span>
                              <Link to="/blogs/detail" className="btn btn-link p-0 mb-0 items-center gap-1">
                                Read more <BsArrowUpRight />
                              </Link>
                            </div>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                    {blogs.length - 1 !== idx && <hr className="my-0" />}
                  </Fragment>
                )
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BlogList
