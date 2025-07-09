import { Card, CardBody, CardHeader } from 'react-bootstrap'

const WorkingHours = () => {
  return (
    <Card className="shadow">
      <CardHeader className="border-bottom">
        <h5 className="mb-0">Working Hours</h5>
      </CardHeader>
      <CardBody>
        <ul className="list-group list-group-borderless mb-0">
          <li className="list-group-item d-flex justify-content-between">
            <span>Monday</span>
            <span>Day off</span>
          </li>
          <li className="list-group-item py-0">
            <hr className="my-1" />
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Tuesday</span>
            <span>9:00 AM to 8:00 PM</span>
          </li>
          <li className="list-group-item py-0">
            <hr className="my-1" />
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Wednesday</span>
            <span>9:00 AM to 8:00 PM</span>
          </li>
          <li className="list-group-item py-0">
            <hr className="my-1" />
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Thursday</span>
            <span>9:00 AM to 8:00 PM</span>
          </li>
          <li className="list-group-item py-0">
            <hr className="my-1" />
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Friday</span>
            <span>9:00 AM to 8:00 PM</span>
          </li>
          <li className="list-group-item py-0">
            <hr className="my-1" />
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Saturday</span>
            <span>Open all day</span>
          </li>
          <li className="list-group-item py-0">
            <hr className="my-1" />
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Sunday</span>
            <span>Open all day</span>
          </li>
        </ul>
      </CardBody>
    </Card>
  )
}

export default WorkingHours
