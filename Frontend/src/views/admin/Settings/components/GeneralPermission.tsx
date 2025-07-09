import { Card, CardBody, CardHeader } from 'react-bootstrap'

const GeneralPermission = () => {
  return (
    <Card className="shadow">
      <CardHeader className="border-bottom">
        <h5 className="card-title mb-0">General Permission</h5>
      </CardHeader>

      <CardBody className="vstack gap-4">
        <div className="d-md-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-0">Notify on updates and activity</h6>
            <small>You'll be notified when anyone shares a report or invite you to a projects</small>
          </div>

          <div className="form-check form-switch form-check-md mb-0">
            <input className="form-check-input" type="checkbox" id="checkPrivacy6" defaultChecked />
          </div>
        </div>

        <div className="d-md-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-0">Send weekly digest</h6>
            <small>A weekly update on changes in theme statement and more</small>
          </div>

          <div className="form-check form-switch form-check-md mb-0">
            <input className="form-check-input" type="checkbox" id="checkPrivacy7" />
          </div>
        </div>

        <div className="d-md-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-0">Collaborators</h6>
            <small>I would like to receive booking assistance reminders</small>
          </div>

          <div className="form-check form-switch form-check-md mb-0">
            <input className="form-check-input" type="checkbox" id="checkPrivacy8" />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default GeneralPermission
