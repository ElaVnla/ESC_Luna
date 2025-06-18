import { useToggle } from '@/hooks'
import { Button, Col, Collapse, Image, Row } from 'react-bootstrap'
import { BsTrash3 } from 'react-icons/bs'
import { FaPaperPlane, FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import type { ReviewType } from '../data'

const ReviewCard = ({ reviewDetail }: { reviewDetail: ReviewType }) => {
  const { date, description, image, name, rating, reviewOn } = reviewDetail
  const { isOpen, toggle } = useToggle()

  return (
    <Row className="g-3 g-lg-4">
      <Col md={4} xxl={3}>
        <div className="d-flex align-items-center">
          <div className="avatar avatar-xl me-2 flex-shrink-0">
            <Image className="avatar-img rounded-circle" src={image} alt="avatar" />
          </div>
          <div className="ms-2">
            <h5 className="mb-1">{name}</h5>
            <p className="mb-0">{date}</p>
          </div>
        </div>
      </Col>
      <Col md={8} xxl={9}>
        <ul className="list-inline mb-2">
          {Array.from(new Array(Math.floor(rating))).map((_star, idx) => (
            <li key={idx} className="list-inline-item me-1 small">
              <FaStar size={18} className="text-warning" />
            </li>
          ))}
          {!Number.isInteger(rating) && (
            <li className="list-inline-item me-1 small">
              <FaStarHalfAlt size={17} className="text-warning" />
            </li>
          )}
          {rating < 5 &&
            Array.from(new Array(5 - Math.ceil(rating))).map((_val, idx) => (
              <li key={idx} className="list-inline-item me-1 small">
                <FaRegStar className="text-warning" size={18} />
              </li>
            ))}
        </ul>
        <h6>
          <span className="text-body fw-light">Review on:</span> {reviewOn}
        </h6>
        <p>{description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Button variant="primary-soft me-1" size="sm" className="mb-0">
              Direct message
            </Button>
            <Link onClick={toggle} className="btn btn-sm btn-light mb-0" to="">
              Reply
            </Link>
          </div>
          <Link to="" className="text-primary-hover items-center">
            <BsTrash3 className="me-1" />
            Delete
          </Link>
        </div>
        <Collapse in={isOpen}>
          <div>
            <div className="d-flex mt-3">
              <textarea className="form-control mb-0" placeholder="Add a comment..." rows={2} spellCheck="false" defaultValue={''} />
              <Button variant="primary" size="sm" className="ms-2 px-4 mb-0 flex-shrink-0 flex-centered">
                <FaPaperPlane size={21} />
              </Button>
            </div>
          </div>
        </Collapse>
      </Col>
    </Row>
  )
}

export default ReviewCard
