import { Col, Container, Row } from 'react-bootstrap'
import BookingSignIn from './BookingSignIn'
import PaymentOption from './PaymentOption'
import PriceSummary from './PriceSummary'
import TourReview from './TourReview/index'
import TravelerInformation from './TravelerInformation'

import { Wizard, useWizard } from 'react-use-wizard'

const Header = () => {

  const { goToStep, activeStep } = useWizard()

  return (
    
    <div className="bs-stepper-header pb-4" role="tablist">
      <div className={`step ${activeStep === 0 && 'active'}`} onClick={() => goToStep(0)}>
        <div className="text-center">
          <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger1" aria-controls="step-1">
            <span className="bs-stepper-circle">1</span>
          </button>
          <h6 className="bs-stepper-label d-none d-md-block">Tour Review</h6>
        </div>
      </div>
      <div className="line" />
      <div className={`step ${activeStep === 1 && 'active'}`} onClick={() => goToStep(1)}>
        <div className="text-center">
          <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger2" aria-controls="step-2">
            <span className="bs-stepper-circle">2</span>
          </button>
          <h6 className="bs-stepper-label d-none d-md-block">Traveler Info</h6>
        </div>
      </div>
      <div className="line" />
      <div className={`step ${activeStep === 2 && 'active'}`} onClick={() => goToStep(2)}>
        <div className="text-center">
          <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger3" aria-controls="step-3">
            <span className="bs-stepper-circle">3</span>
          </button>
          <h6 className="bs-stepper-label d-none d-md-block">Make Payment</h6>
        </div>
      </div>
    </div>
  )
}

const TourBookingDetails = () => {

  return (
    <section>
      <Container className="bs-stepper stepper-outline">
        <Wizard header={<Header />}>
          <Row className="g-4">
            <Col xl={8}>
              <div>
                <TourReview />
              </div>
            </Col>
            <Col as="aside" xl={4}>
              <div className="vstack gap-4">
                <PriceSummary />

                <BookingSignIn />
              </div>
            </Col>
          </Row>

          <Row className="g-4">
            <Col xl={8}>
              <div>
                <TravelerInformation />
              </div>
            </Col>
            <Col as="aside" xl={4}>
              <div className="vstack gap-4">
                <PriceSummary />

                <BookingSignIn />
              </div>
            </Col>
          </Row>

          <Row className="g-4">
            <Col xl={8}>
              <div>
                <PaymentOption />
              </div>
            </Col>
            <Col as="aside" xl={4}>
              <div className="vstack gap-4">
                <PriceSummary />

                <BookingSignIn />
              </div>
            </Col>
          </Row>
        </Wizard>
      </Container>
    </section>
  )
}

export default TourBookingDetails
