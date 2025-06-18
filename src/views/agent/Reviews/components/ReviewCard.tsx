import { GlightBox } from '@/components'
import { useToggle } from '@/hooks'
import { Button, Col, Collapse, Image, Row } from 'react-bootstrap'
import { BsInfoCircle, BsReply } from 'react-icons/bs'
import { FaPaperPlane, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { type ReviewType } from '../data'

const ReviewCard = ({ review }: { review: ReviewType }) => {
  const { isOpen, toggle } = useToggle()

  return (
    <div className="bg-light rounded p-3">
      <div className="d-sm-flex justify-content-between">
        <div className="d-sm-flex align-items-center mb-3">
          <Image className="avatar avatar-md rounded-circle float-start me-3" src={review.avatar} alt="avatar" />
          <div>
            <h6 className="m-0">{review.name}</h6>
            <span className="me-3 small">{review.time}</span>
          </div>
        </div>
        <ul className="list-inline mb-2 mb-sm-0">
          {Array.from(new Array(Math.floor(review.rating))).map((_star, idx) => (
            <li key={idx} className="list-inline-item me-1">
              <FaStar size={18} className="text-warning" />
            </li>
          ))}
          {!Number.isInteger(review.rating) && (
            <li className="list-inline-item me-1">
              <FaStarHalfAlt size={18} className="text-warning" />
            </li>
          )}
          {review.rating < 5 &&
            Array.from(new Array(5 - Math.ceil(review.rating))).map((_val, idx) => (
              <li key={idx} className="list-inline-item me-1">
                <FaStar size={18} />
              </li>
            ))}
        </ul>
      </div>
      <h6 className="fw-normal">
        <span className="text-body">Review on:&nbsp;</span>
        {review.reviewOn}
      </h6>
      <p>{review.description}</p>
      {review.images && (
        <Row className="g-4">
          {review.images.map((image, idx) => {
            return (
              <Col key={idx} xs={4} sm={3} lg={2}>
                <GlightBox image={image} data-glightbox data-gallery="gallery">
                  <Image src={image} className="rounded" />
                </GlightBox>
              </Col>
            )
          })}
        </Row>
      )}
      <div className="mt-3">
        <div className="d-flex justify-content-between align-items-center">
          <Button variant="primary-soft" size="sm" className="mb-0 items-center" onClick={toggle}>
            <BsReply className="me-1" />
            Reply
          </Button>
          <Link to="" className="text-primary-hover text-reset small mb-0 items-center">
            <BsInfoCircle className="me-1" />
            Report
          </Link>
        </div>
        <Collapse in={isOpen}>
          <div>
            <div className="d-flex mt-3">
              <textarea className="form-control mb-0" placeholder="Add a comment..." rows={2} spellCheck="false" defaultValue={''} />
              <Button variant="primary-soft" size="sm" className="ms-2 px-4 mb-0 flex-shrink-0">
                <FaPaperPlane className=" fs-5" />
              </Button>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default ReviewCard
