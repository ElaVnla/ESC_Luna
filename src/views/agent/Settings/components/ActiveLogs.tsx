import { Button, Card, CardBody, CardHeader } from 'react-bootstrap'
import { activeLogs } from '../data'

const ActiveLogs = () => {
  return (
    <Card className="border">
      <CardHeader className="border-bottom">
        <h5 className="card-header-title">Active Logs</h5>
      </CardHeader>
      <CardBody>
        <div className="table-responsive border-0">
          <table className="table align-middle p-4 mb-0 table-hover">
            <thead className="table-light">
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
                    <td> {active.browser} </td>
                    <td> {active.ip} </td>
                    <td> {active.time} </td>
                    <td>
                      {' '}
                      <Button variant="danger-soft" size="sm" className="me-1 mb-1 mb-md-0">
                        Sign out
                      </Button>{' '}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <form className="mt-4">
          <h6 className="mb-0">Active sessions</h6>
          <p className="mb-2">Selecting "Sign out" will sign you out from all devices except this one. This can take up to 10 minutes.</p>
          <Button variant="danger" size="sm" className="mb-0">
            Sign Out of all devices
          </Button>
        </form>
      </CardBody>
    </Card>
  )
}

export default ActiveLogs
