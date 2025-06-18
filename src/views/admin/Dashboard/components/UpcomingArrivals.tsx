import { Card, CardBody, CardHeader, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { upcomingArrivals } from '../data'
import { Fragment } from 'react'
import { FaChevronRight } from 'react-icons/fa'

const UpcomingArrivals = () => {
  return (
    <Card className="shadow h-100">
      <CardHeader className="border-bottom d-flex justify-content-between align-items-center p-3">
        <h5 className="card-header-title">Upcoming Arrivals</h5>
        <Link to="" className="btn btn-link p-0 mb-0">
          View all
        </Link>
      </CardHeader>

      <CardBody className="p-3">
        {upcomingArrivals.map((item, idx) => {
          return (
            <Fragment key={idx}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                  <div className="avatar avatar-md flex-shrink-0">
                    <Image className="avatar-img rounded-circle" src={item.image} alt="avatar" />
                  </div>

                  <div className="ms-sm-2 mt-2 mt-sm-0">
                    <h6 className="mb-1">{item.name}</h6>
                    <ul className="nav nav-divider small">
                      {item.hotelInfo.map((item, idx) => (
                        <li key={idx} className="nav-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link to="" className="btn btn-sm btn-light mb-0 ms-3 px-2">
                  <FaChevronRight className="fa-fw" />
                </Link>
              </div>
              {upcomingArrivals.length - 1 != idx && <hr />}
            </Fragment>
          )
        })}
      </CardBody>
    </Card>
  )
}

export default UpcomingArrivals
