import { SelectFormInput } from '@/components'
import { Col, Nav, NavItem, NavLink, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { userReviews } from '../data'
import { Fragment } from 'react'
import ReviewCard from './ReviewCard'

const AllReviews = () => {
  return (
    <>
      <Row className="g-4 justify-content-between align-items-center">
        <Col lg={5}>
          <Nav defaultActiveKey="1" className="nav nav-pills-shadow nav-responsive" role="tablist">
            <NavItem>
              <NavLink eventKey="1" className="mb-0 me-sm-2" role="tab">
                All Reviews
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="2" className="mb-0 me-sm-2" tabIndex={-1} role="tab">
                Published
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="3" className="mb-0" tabIndex={-1} role="tab">
                Deleted
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col md={6} lg={3}>
          <form>
            <SelectFormInput className="form-select js-choice" aria-label=".form-select-sm">
              <option value={-1}>Sort by hotels</option>
              <option>Pride moon Village Resort &amp; Spa</option>
              <option>Courtyard by Marriott New York</option>
              <option>Park Plaza Lodge Hotel</option>
              <option>Royal Beach Resort</option>
            </SelectFormInput>
          </form>
        </Col>
      </Row>

      <div className="vstack gap-4 mt-5">
        {userReviews.map((review, idx) => (
          <Fragment key={idx}>
            <ReviewCard reviewDetail={review} />

            {userReviews.length - 1 != idx && <hr className="m-0" />}
          </Fragment>
        ))}

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
      </div>
    </>
  )
}

export default AllReviews
