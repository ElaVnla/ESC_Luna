import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

import blog13 from '@/assets/images/blog/13.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'

const Hero = () => {
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const title = params.get('title')

  return (
    <section className="py-0">
      <Container>
        <Row className="g-4">
          <div className="col-12">
            <Image src={blog13} className="rounded-3" />
          </div>
          <Col xs={11} lg={10} className="mx-auto position-relative mt-n5 mt-sm-n7 mt-md-n8">
            <div className="bg-mode shadow rounded-3 p-4">
              <div className="badge text-bg-success mb-2">Hotel service</div>
              <h1 className="fs-3">{title ?? "Ten unconventional tips about startups that you can't learn from books"}</h1>
              <p className="mb-2">
                Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons in conviction
                an uncommonly do.{' '}
              </p>
              <ul className="nav nav-divider align-items-center">
                <li className="nav-item">
                  <div className="nav-link">
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-sm">
                        <Image className="avatar-img rounded-circle" src={avatar9} alt="avatar" />
                      </div>
                      <div className="ms-2">
                        <h6 className="mb-0">
                          <Link to="">Lori Stevens</Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">Nov 15, 2022</li>
                <li className="nav-item">5 min read</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
