import { Card, CardBody, CardFooter, CardHeader } from 'react-bootstrap'
import { userReviews } from '../data'
import ReviewCard from './ReviewCard'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const UserReviews = () => {
  return (
    <Card className="border rounded-3">
      <CardHeader className="border-bottom">
        <h5 className="card-header-title">User Reviews</h5>
      </CardHeader>
      <CardBody>
        {userReviews.map((review, idx) => {
          return (
            <Fragment key={idx}>
              <ReviewCard review={review} />
              {userReviews.length - 1 != idx && <hr />}
            </Fragment>
          )
        })}
      </CardBody>
      <CardFooter className="pt-0">
        <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
          <p className="mb-sm-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
          <nav className="mb-sm-0 d-flex justify-content-center" aria-label="navigation">
            <ul className="pagination pagination-sm pagination-primary-soft mb-0">
              <li className="page-item disabled">
                <Link className="page-link" to="" tabIndex={-1}>
                  Prev
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="">
                  1
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="">
                  2
                </Link>
              </li>
              <li className="page-item disabled">
                <Link className="page-link" to="">
                  ..
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="">
                  15
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </CardFooter>
    </Card>
  )
}

export default UserReviews
