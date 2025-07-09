import { Card, CardBody, CardHeader, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { roomNotifications } from '../data'
import { Fragment } from 'react'

const RoomNotifications = () => {
  return (
    <Card className="shadow h-100">
      <CardHeader className="border-bottom d-flex justify-content-between align-items-center">
        <h5 className="card-header-title">Room Notifications</h5>
        <Link to="" className="btn btn-link p-0 mb-0">
          View all
        </Link>
      </CardHeader>

      <CardBody>
        {roomNotifications.map((room, idx) => {
          return (
            <Fragment key={idx}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                  <div className="flex-shrink-0">
                    <Image src={room.image} className="rounded h-60px" />
                  </div>

                  <div className="ms-sm-3 mt-2 mt-sm-0">
                    <h6 className="mb-1">{room.name}</h6>
                    <ul className="nav nav-divider small">
                      <li className="nav-item">{room.date}</li>
                      <li className="nav-item">
                        <span className={room.status == 'Booking cancel' ? 'text-danger' : 'text-success'}>{room.status}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link to="" className="btn btn-sm btn-light flex-shrink-0 mb-0 ms-3">
                  View
                </Link>
              </div>
              {roomNotifications.length - 1 != idx && <hr />}
            </Fragment>
          )
        })}
      </CardBody>
    </Card>
  )
}

export default RoomNotifications
