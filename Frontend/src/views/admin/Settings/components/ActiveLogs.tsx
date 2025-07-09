import { Button, Card, CardBody, CardHeader, Col } from 'react-bootstrap'
import { activeLogs } from '../data'

const ActiveLogs = () => {
  return (
    <Col lg={6}>
      <div className="bg-light rounded-3 p-4 mb-3">
        <div className="d-md-flex justify-content-between align-items-center">
          <div>
            <h6 className="h5">Activity Logs</h6>
            <p className="mb-1 mb-md-0">You can save your all activity logs including unusual activity detected.</p>
          </div>

          <div className="form-check form-switch form-check-md mb-0">
            <input className="form-check-input" type="checkbox" id="checkPrivacy9" defaultChecked />
          </div>
        </div>
      </div>

      <div className="bg-light rounded-3 p-4 mb-3">
        <div className="d-md-flex justify-content-between align-items-center flex-wrap">
          <div>
            <h6 className="h5">Change Password</h6>
            <p className="mb-1 mb-md-0">Set a unique password to protect your account.</p>
          </div>

          <div>
            <Button variant="primary" className="mb-1">
              Change Password
            </Button>
            <p className="mb-0 small h6">Last change 10 Aug 2020</p>
          </div>
        </div>
      </div>

      <div className="bg-light rounded-3 p-4">
        <div className="d-md-flex justify-content-between align-items-center">
          <div>
            <h6 className="h5">2 Step Verification</h6>
            <p className="mb-1 mb-md-0">
              Secure your account with 2 Step security. When it is activated you will need to enter not only your password, but also a special code
              using app. You can receive this code by in mobile app.
            </p>
          </div>
          <div className="form-check form-switch form-check-md mb-0">
            <input className="form-check-input" type="checkbox" id="checkPrivacy13" defaultChecked />
          </div>
        </div>
      </div>

      <Card className="shadow mt-4">
        <CardHeader className="border-bottom">
          <h5 className="card-header-title">Active Logs</h5>
        </CardHeader>

        <CardBody>
          <div className="table-responsive border-0">
            <table className="table align-middle p-4 mb-0 table-hover">
              <thead className="table-dark">
                <tr>
                  <th scope="col" className="border-0 rounded-start">
                    Browser
                  </th>
                  <th scope="col" className="border-0">
                    IP
                  </th>
                  <th scope="col" className="border-0">
                    Time
                  </th>
                  <th scope="col" className="border-0 rounded-end">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {activeLogs.map((active, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{active.browser}</td>
                      <td>{active.ip}</td>
                      <td>{active.time}</td>
                      <td>
                        <Button variant="danger-soft" size="sm" className="me-1 mb-1 mb-md-0">
                          Sign out
                        </Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ActiveLogs
