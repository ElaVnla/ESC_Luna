import { Col, Container, Image, Row } from 'react-bootstrap'
import { BsArrowRightCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'

const ActionBox = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="bg-light p-4 p-sm-5 rounded-3">
          <Row className="g-3 g-xl-4 align-items-center">
            <Col xl={8}>
              <div className="d-sm-flex align-items-center mb-2">
                <h3 className="mb-2 mb-sm-0">Still, have a question?</h3>
                <ul className="avatar-group mb-0 ms-sm-3">
                  {[avatar1, avatar2, avatar3, avatar5, avatar6].map((image, idx) => {
                    return (
                      <li key={idx} className="avatar avatar-xs">
                        <Image className="avatar-img rounded-circle" src={image} alt="avatar" />
                      </li>
                    )
                  })}
                </ul>
              </div>
              <p className="mb-0">He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy.</p>
            </Col>
            <div className="col-xl-4 text-xl-end">
              <Link to="/pages/contact" className="btn btn-primary mb-0">
                <span className="items-center">
                  Contact us
                  <BsArrowRightCircle className="ms-2" />
                </span>
              </Link>
            </div>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default ActionBox
