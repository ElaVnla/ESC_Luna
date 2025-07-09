import { Card, CardBody, CardFooter, Col, Image, Row } from 'react-bootstrap'
import { type CabCardType as CabCardType } from '../data'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { BsCheckCircle } from 'react-icons/bs'

import sedan from '@/assets/images/category/cab/seadan.svg'

const CabCard = ({ cab }: { cab: CabCardType }) => {
  return (
    <Card className="border p-4">
      <CardBody className="p-0">
        <Row className="g-4 align-items-center">
          <Col md={4}>
            <div className="bg-light rounded-3 px-4 py-5">
              <Image src={sedan} />
            </div>
          </Col>
          <Col md={8}>
            <div className="d-sm-flex justify-content-sm-between">
              <div>
                <h4 className="card-title mb-2">{cab.name}</h4>
                <ul className="nav nav-divider h6 fw-normal mb-2">
                  {cab.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="nav-item">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="list-inline mb-0 mt-1">
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
            </div>
            <ul className="list-group list-group-borderless mt-2 mb-0">
              {cab.features.map((feature, idx) => (
                <li key={idx} className="list-group-item d-flex pb-0 mb-0">
                  <span className="h6 fw-normal mb-0 items-center">
                    <BsCheckCircle className=" me-2" />
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </CardBody>
      <CardFooter className="p-0 pt-4">
        <div className="hstack gap-3 flex-wrap">
          {cab.notes.map((note, idx) => {
            return (
              <h6 key={idx} className="bg-success bg-opacity-10 text-success fw-light rounded-2 d-inline-block mb-0 py-2 px-4">
                {note}
              </h6>
            )
          })}
        </div>
      </CardFooter>
    </Card>
  )
}

export default CabCard
