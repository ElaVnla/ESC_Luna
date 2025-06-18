import { TextFormInput } from '@/components'
import { Card, CardBody, CardHeader, Col } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const TripDetail = () => {
  const { control } = useForm({
    defaultValues: {
      address: '36 new resort, New York',
      dropAddress: 'street profit, New York',
      name: '',
      email: '',
      mobileNo: '',
    },
  })
  return (
    <Card className="border">
      <CardHeader className="border-bottom bg-transparent">
        <h4 className="mb-0">Trip Details</h4>
      </CardHeader>
      <CardBody>
        <form className="row g-4">
          <Col md={6}>
            <TextFormInput
              name="address"
              label="Pickup Address"
              placeholder="Enter exact pick up address"
              containerClass="form-control-bg-light"
              className="form-control-lg"
              control={control}
              helpText="This will help our cab driver reach you on time."
            />
          </Col>
          <Col md={6}>
            <TextFormInput
              name="dropAddress"
              label="Drop Address"
              placeholder="Enter drop address"
              containerClass="form-control-bg-light"
              className="form-control-lg"
              control={control}
            />
          </Col>
          <h5 className="mb-0 mt-4">Traveler Information</h5>
          <Col md={4}>
            <label className="form-label">Gender</label>
            <div>
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked />
                <label className="btn btn-lg btn-light btn-dark-bg-check mb-0" htmlFor="btnradio1">
                  Male
                </label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                <label className="btn btn-lg btn-light btn-dark-bg-check mb-0" htmlFor="btnradio2">
                  Female
                </label>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <TextFormInput
              name="name"
              label="Name"
              containerClass="form-control-bg-light"
              className="form-control-lg"
              placeholder="Enter your name"
              control={control}
            />
          </Col>
          <Col md={6}>
            <TextFormInput
              name="email"
              label="Email id"
              type="email"
              containerClass="form-control-bg-light"
              className="form-control-lg"
              placeholder="Enter your email"
              control={control}
            />
          </Col>
          <Col md={6}>
            <TextFormInput
              name="mobileNo"
              label="Mobile number"
              containerClass="form-control-bg-light"
              className="form-control-lg"
              placeholder="Enter your mobile number"
              control={control}
            />
          </Col>
        </form>
      </CardBody>
    </Card>
  )
}

export default TripDetail
