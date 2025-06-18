import { Fragment } from 'react'
import { Card, CardBody, CardHeader, Image } from 'react-bootstrap'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { hotelReviews } from '../data'

const Reviews = () => {
  return (
    <Card className="shadow h-100">
      <CardHeader className="border-bottom d-flex justify-content-between align-items-center p-3">
        <h5 className="card-header-title">Reviews</h5>
        <Link to="" className="btn btn-link p-0 mb-0">
          View all
        </Link>
      </CardHeader>

      <CardBody className="p-3">
        {hotelReviews.map((hotel, idx) => {
          return (
            <Fragment key={idx}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                  <div className="flex-shrink-0">
                    <Image src={hotel.image} className="rounded h-60px" />
                  </div>
                  <div className="ms-sm-3 mt-2 mt-sm-0">
                    <h6 className="mb-1">{hotel.name}</h6>
                    <ul className="list-inline smaller mb-0">
                      {Array.from(new Array(Math.floor(hotel.rating))).map((_star, idx) => (
                        <li key={idx} className="list-inline-item me-1">
                          <FaStar size={12} className="text-warning" />
                        </li>
                      ))}
                      {!Number.isInteger(hotel.rating) && (
                        <li className="list-inline-item me-1">
                          <FaStarHalfAlt size={12} className="text-warning" />
                        </li>
                      )}
                      {hotel.rating < 5 &&
                        Array.from(new Array(5 - Math.ceil(hotel.rating))).map((_val, idx) => (
                          <li key={idx} className="list-inline-item me-1">
                            <FaStar size={12} />
                          </li>
                        ))}
                      <li className="list-inline-item me-0">({hotel.review} reviews)</li>
                    </ul>
                  </div>
                </div>
                <Link to="" className="btn btn-sm btn-light flex-shrink-0 mb-0 ms-3">
                  View
                </Link>
              </div>
              {hotelReviews.length - 1 != idx && <hr />}
            </Fragment>
          )
        })}
      </CardBody>
    </Card>
  )
}

export default Reviews
