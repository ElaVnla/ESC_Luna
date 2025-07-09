import { Fragment } from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap'
import { BsGraphUp } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'

const StatisticCards = () => {
  return (
    <Row className="g-4 g-xl-5 mb-5">
      <Col md={6} lg={4}>
        <div className="bg-light p-4 rounded text-center">
          <h6 className="fw-normal">Total Reviews</h6>
          <div className="flex-centered">
            <h2 className="mb-0 me-2">11.01K</h2>
            <div className="badge bg-success bg-opacity-10 text-success items-center gap-1">
              21% <BsGraphUp />
            </div>
          </div>
          <p className="mb-0">Growth in reviews this year</p>
        </div>
      </Col>
      <Col md={6} lg={4}>
        <div className="bg-light p-4 rounded text-center">
          <h6 className="fw-normal">Average Rating</h6>
          <div className="flex-centered">
            <h2 className="mb-0 me-2">4.0</h2>
            <ul className="list-inline mb-1">
              {Array.from(new Array(4)).map((_val, idx) => (
                <li className="list-inline-item me-1" key={idx}>
                  <FaStar size={18} className="text-warning" />
                </li>
              ))}

              <li className="list-inline-item">
                <FaStar size={18} className="text-secondary" />
              </li>
            </ul>
          </div>
          <p className="mb-0">Average rating on this year</p>
        </div>
      </Col>
      <Col lg={4}>
        <div className="bg-light p-4 rounded">
          <Row className="gx-3 g-0 align-items-center">
            {[85, 75, 60, 35, 15].map((progress, idx) => {
              return (
                <Fragment key={idx}>
                  <Col xs={9} sm={10}>
                    <ProgressBar variant="warning" className="progress-xs bg-warning bg-opacity-15" now={progress} />
                  </Col>

                  <Col xs={3} sm={2} className="text-end">
                    <small className="h6 fw-light mb-0">{progress}%</small>
                  </Col>
                </Fragment>
              )
            })}
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export default StatisticCards
