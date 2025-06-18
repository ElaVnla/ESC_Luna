import { SelectFormInput, TextFormInput } from '@/components'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Card, CardBody, CardHeader, Col, FormLabel, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import TravelerAlert from './TravelerAlert'
import { useWizard } from 'react-use-wizard'
import Flatpicker from '@/components/Flatpicker'


const TravelerInformation = () => {
  const travelerFormSchema = yup.object({
    fName: yup.string().required('Please enter your first name'),
    lName: yup.string().required('Please enter your last name'),
    passportNo: yup.number().required('Please enter your passport no'),
    mobileNo: yup.number().required('Please enter your mobile no'),
    email: yup.string().email().required('Please enter your email'),
  })

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(travelerFormSchema),
  })

  const handleFormSubmit = handleSubmit(() => {})

  const { previousStep} = useWizard()
  

  return (
    <form onSubmit={handleFormSubmit} className="vstack gap-4">
      <h4 className="mb-0">Traveler Detail</h4>
      <hr className="my-0" />

      <TravelerAlert />

      <Card className="border">
        <CardHeader className="border-bottom">
          <h5 className="mb-0">Traveler 1</h5>
        </CardHeader>
        <CardBody>
          <Row className="g-4">
            <Col md={2}>
              <FormLabel>Title</FormLabel>
              <div className="form-control-bg-light">
                <SelectFormInput className="form-select form-select-sm js-choice border-0">
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                </SelectFormInput>
              </div>
            </Col>
            <Col md={5}>
              <TextFormInput name="fName" type="text" label="First Name" containerClass="form-control-bg-light" control={control} />
            </Col>
            <Col md={5}>
              <TextFormInput name="lName" type="text" label="Last name" containerClass="form-control-bg-light" control={control} />
            </Col>
            <Col md={6}>
              <div className="form-control-bg-light">
                <FormLabel>Date of birth</FormLabel>

                <Flatpicker />
              </div>
            </Col>
            <Col md={6}>
              <TextFormInput name="passportNo" type="text" label="Passport number" containerClass="form-control-bg-light" control={control} />
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card className="border">
        <CardHeader className="border-bottom">
          <h5 className="mb-0">Traveler 2</h5>
        </CardHeader>
        <CardBody>
          <Row className="g-4">
            <Col md={2}>
              <FormLabel>Title</FormLabel>
              <div className="form-control-bg-light">
                <SelectFormInput className="form-select form-select-sm js-choice border-0">
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                </SelectFormInput>
              </div>
            </Col>
            <Col md={5}>
              <TextFormInput name="fName" type="text" label="First Name" containerClass="form-control-bg-light" control={control} />
            </Col>
            <Col md={5}>
              <TextFormInput name="lName" type="text" label="Last name" containerClass="form-control-bg-light" control={control} />
            </Col>
            <Col md={6}>
              <div className="form-control-bg-light">
                <FormLabel>Date of birth</FormLabel>

                <Flatpicker />
              </div>
            </Col>
            <Col md={6}>
              <TextFormInput name="passportNo" type="text" label="Passport number" containerClass="form-control-bg-light" control={control} />
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card className="border">
        <CardHeader className="border-bottom">
          <h5 className="mb-0">Your booking detail will be sent here</h5>
        </CardHeader>
        <CardBody>
          <Row className="g-4">
            <Col md={6}>
              <TextFormInput name="mobileNo" type="text" label="Mobile Number" containerClass="form-control-bg-light" control={control} />
            </Col>
            <Col md={6}>
              <TextFormInput name="email" type="text" label="Email id" containerClass="form-control-bg-light" control={control} />
            </Col>
          </Row>
        </CardBody>
      </Card>
      <div className="hstack gap-2 flex-wrap justify-content-between">
        <Button onClick={() => previousStep()} variant="secondary" className="prev-btn mb-0">
          Previous
        </Button>
        <Button variant="primary" type="submit" className="btn btn-primary next-btn mb-0">
          Continue to payment
        </Button>
      </div>
    </form>
  )
}

export default TravelerInformation
