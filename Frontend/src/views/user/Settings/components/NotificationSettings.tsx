import { Button, Card, CardHeader } from 'react-bootstrap'

const NotificationSettings = () => {
  return (
    <Card className="border">
      <CardHeader className="border-bottom">
        <h4 className="card-header-title">Notification Settings</h4>
      </CardHeader>

      <form className="card-body">
        <div className="mb-4">
          <label className="form-label">
            Newsletter<span className="text-danger">*</span>
          </label>
          <div className="d-flex gap-2 gap-sm-4 flex-wrap">
            <div className="form-check radio-bg-light">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Daily
              </label>
            </div>
            <div className="form-check radio-bg-light">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Twice a week
              </label>
            </div>
            <div className="form-check radio-bg-light">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                Weekly
              </label>
            </div>
            <div className="form-check radio-bg-light">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
              <label className="form-check-label" htmlFor="flexRadioDefault4">
                Never
              </label>
            </div>
          </div>
        </div>

        <div className="form-check form-switch form-check-md d-flex justify-content-between mb-4">
          <label className="form-check-label ps-0 pe-4" htmlFor="checkPrivacy1">
            Notify me via email when logging in
          </label>
          <input className="form-check-input flex-shrink-0" type="checkbox" id="checkPrivacy1" defaultChecked />
        </div>

        <div className="form-check form-switch form-check-md d-flex justify-content-between mb-4">
          <label className="form-check-label ps-0 pe-4" htmlFor="checkPrivacy2">
            I would like to receive booking assist reminders
          </label>
          <input className="form-check-input flex-shrink-0" type="checkbox" id="checkPrivacy2" defaultChecked />
        </div>

        <div className="form-check form-switch form-check-md d-flex justify-content-between mb-4">
          <label className="form-check-label ps-0 pe-4" htmlFor="checkPrivacy3">
            I would like to receive emails about Booking promotions
          </label>
          <input className="form-check-input flex-shrink-0" type="checkbox" id="checkPrivacy3" defaultChecked />
        </div>

        <div className="form-check form-switch form-check-md d-flex justify-content-between mb-4">
          <label className="form-check-label ps-0 pe-4" htmlFor="checkPrivacy7">
            I would like to know about information and offers related to my upcoming trip
          </label>
          <input className="form-check-input flex-shrink-0" type="checkbox" id="checkPrivacy7" defaultChecked />
        </div>

        <div className="form-check form-switch form-check-md d-flex justify-content-between mb-4">
          <label className="form-check-label ps-0 pe-4" htmlFor="checkPrivacy4">
            Show your profile publicly
          </label>
          <input className="form-check-input flex-shrink-0" type="checkbox" id="checkPrivacy4" />
        </div>

        <div className="form-check form-switch form-check-md d-flex justify-content-between mb-4">
          <label className="form-check-label ps-0 pe-4" htmlFor="checkPrivacy6">
            Send SMS confirmation for all online payments
          </label>
          <input className="form-check-input flex-shrink-0" type="checkbox" id="checkPrivacy6" />
        </div>

        <div className="form-check form-switch form-check-md d-flex justify-content-between mb-4">
          <label className="form-check-label ps-0 pe-4" htmlFor="checkPrivacy5">
            Check which device(s) access your account
          </label>
          <input className="form-check-input flex-shrink-0" type="checkbox" id="checkPrivacy5" defaultChecked />
        </div>

        <div className="d-sm-flex justify-content-end">
          <Button type="button" variant="primary" size="sm" className="me-2 mb-0">
            Save changes
          </Button>
          <Button size="sm" variant="outline-secondary" className="mb-0">
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default NotificationSettings
