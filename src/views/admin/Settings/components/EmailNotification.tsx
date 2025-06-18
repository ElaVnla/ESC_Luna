import { Card, CardBody, CardHeader } from 'react-bootstrap'

const EmailNotification = () => {
  return (
    <Card className="shadow mb-4">
      <CardHeader className="border-bottom">
        <h5 className="card-title mb-0">Email notification</h5>
      </CardHeader>

      <CardBody className="vstack gap-4">
        <div className="d-md-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-0">News and updates</h6>
            <small>News about product and feature updates</small>
          </div>

          <div className="form-check form-switch form-check-md mb-0">
            <input className="form-check-input" type="checkbox" id="checkPrivacy1" defaultChecked />
          </div>
        </div>

        <div className="d-md-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-0">Tips and tutorials</h6>
            <small>Tips on getting more out of unlimited</small>
          </div>

          <div className="form-check form-switch form-check-md mb-0">
            <input className="form-check-input" type="checkbox" id="checkPrivacy2" defaultChecked />
          </div>
        </div>

        <div className="d-md-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-0">User research</h6>
            <small>Tips on getting more out of unlimited</small>
          </div>

          <div className="form-check form-switch form-check-md mb-0">
            <input className="form-check-input" type="checkbox" id="checkPrivacy3" />
          </div>
        </div>

        <div className="d-md-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-0">Comments</h6>
            <small>Comments on your post and replies to comments</small>
          </div>

          <div className="form-check form-switch form-check-md mb-0">
            <input className="form-check-input" type="checkbox" id="checkPrivacy4" />
          </div>
        </div>

        <div className="d-md-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-0">Reminders</h6>
            <small>I would like to receive booking assistance reminders</small>
          </div>

          <div className="form-check form-switch form-check-md mb-0">
            <input className="form-check-input" type="checkbox" id="checkPrivacy5" />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default EmailNotification
