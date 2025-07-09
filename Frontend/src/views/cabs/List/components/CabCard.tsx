import { Button, Card, CardBody, CardFooter, Col, Image, Row } from 'react-bootstrap'
import { BsCheckCircle } from 'react-icons/bs'
import { FaStarHalfAlt } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { type CabListType } from '../data'
import { currency } from '@/states'

const CabCard = ({ cab }: { cab: CabListType }) => {
  return (
    <Card className="border p-4">
      <CardBody className="p-0">
        <Row className="g-2 g-sm-4 mb-4">
          <Col md={4} xl={3}>
            <div className="bg-light rounded-3 px-4 py-5">
              <Image src={cab.image} />
            </div>
          </Col>
          <Col sm={6} md={4} xl={6}>
            <h4 className="card-title mb-2">
              <Link to="/cabs/detail" className="stretched-link">
                {cab.name}
              </Link>
            </h4>
            <ul className="nav nav-divider h6 fw-normal mb-2">
              {cab.keyFeatures.map((feature, idx) => (
                <li key={idx} className="nav-item">
                  {feature}
                </li>
              ))}
            </ul>
            <ul className="list-inline mb-0">
              <li className="list-inline-item h6 fw-normal me-1 mb-0">{cab.rating}</li>
              {Array.from(new Array(Math.floor(cab.rating))).map((_star, idx) => (
                <li key={idx} className="list-inline-item me-1">
                  <FaStar size={18} className="text-warning" />
                </li>
              ))}
              {!Number.isInteger(cab.rating) && (
                <li className="list-inline-item me-1">
                  <FaStarHalfAlt size={18} className="text-warning" />
                </li>
              )}
              {cab.rating < 5 &&
                Array.from(new Array(5 - Math.ceil(cab.rating))).map((_val, idx) => (
                  <li key={idx} className="list-inline-item me-1">
                    <FaStar size={18} />
                  </li>
                ))}
            </ul>
          </Col>
          <Col sm={6} md={4} xl={3} className="text-sm-end">
            <p className="text-danger mb-0">{cab.sale}</p>
            <ul className="list-inline mb-1">
              <li className="list-inline-item text-decoration-line-through me-2">
                {currency}
                {cab.price}
              </li>
              <li className="list-inline-item h5 mb-0">
                {currency}
                {cab.salePrice}
              </li>
            </ul>
            <Button variant="dark" className="mb-0">
              Book Now
            </Button>
          </Col>
        </Row>
      </CardBody>
      <CardFooter className="border-top p-0 pt-3">
        <Row>
          <Col md={6}>
            <ul className="list-group list-group-borderless mb-0">
              {cab.features.map((feature, idx) => (
                <li key={idx} className="list-group-item d-flex pb-0 mb-0">
                  <span className="h6 fw-normal mb-0">
                    <BsCheckCircle className=" me-2" />
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </Col>
          <Col md={6}>
            <ul className="list-group list-group-borderless mb-0">
              {cab.notes.map((note, idx) => {
                return (
                  <li key={idx} className="list-group-item d-flex h6 fw-light text-success pb-0 mb-0">
                    {note}
                  </li>
                )
              })}
            </ul>
          </Col>
        </Row>
      </CardFooter>
    </Card>
  )
}

export default CabCard
