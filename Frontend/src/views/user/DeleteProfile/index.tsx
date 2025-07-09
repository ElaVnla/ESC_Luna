import { PageMetaData } from '@/components'
import { Card, CardBody, CardHeader } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DeleteProfile = () => {
  return (
    <>
      <PageMetaData title="Delete User Profile" />

      <Card className="border">
        <CardHeader className="border-bottom">
          <h4 className="card-header-title">Delete Account</h4>
        </CardHeader>

        <CardBody>
          <h6>Before you go...</h6>
          <ul>
            <li>
              Take a backup of your data <Link to="">Here</Link>{' '}
            </li>
            <li>If you delete your account, you will lose your all data.</li>
          </ul>
          <div className="form-check form-check-md my-4">
            <input className="form-check-input" type="checkbox" id="deleteaccountCheck" />
            <label className="form-check-label" htmlFor="deleteaccountCheck">
              Yes, I'd like to delete my account
            </label>
          </div>
          <Link to="" className="btn btn-success-soft btn-sm mb-2 mb-sm-0 me-1">
            Keep my account
          </Link>
          <Link to="" className="btn btn-danger btn-sm mb-0">
            Delete my account
          </Link>
        </CardBody>
      </Card>
    </>
  )
}

export default DeleteProfile
