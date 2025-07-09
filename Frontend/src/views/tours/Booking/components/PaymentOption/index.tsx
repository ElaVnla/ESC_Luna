import { Button, Card, CardBody, CardHeader, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import expresscard from '@/assets/images/element/expresscard.svg'
import mastercard from '@/assets/images/element/mastercard.svg'
import paypal from '@/assets/images/element/paypal.svg'
import visa from '@/assets/images/element/visa.svg'
import { useWizard } from 'react-use-wizard'


const paymentCards = [visa, mastercard, expresscard]

const PaymentOption = () => {

   const { previousStep } = useWizard()

  return (
      <div className="vstack gap-4">
        <h4 className="mb-0">Payment options</h4>
        <hr className="my-0" />
        <Card className="border">
          <CardHeader className="border-bottom d-sm-flex justify-content-between align-items-center">
            <h5 className="mb-2 mb-sm-0">Credit or Debit Card</h5>
            <ul className="list-inline my-0">
              {paymentCards.map((card, idx) => (
                <li key={idx} className="list-inline-item">
                  {' '}
                  <Link to="">
                    <Image src={card} className="h-30px" />
                  </Link>
                </li>
              ))}
            </ul>
          </CardHeader>
          <CardBody>
            <Row className="g-4">
              <Col xs={12}>
                <label className="form-label">Card Number</label>
                <div className="position-relative form-control-bg-light">
                  <input type="text" className="form-control" maxLength={14} placeholder="XXXX XXXX XXXX XXXX" />
                  <Image src={visa} className="w-30px position-absolute top-50 end-0 translate-middle-y me-2 d-none d-sm-block" />
                </div>
              </Col>
              <Col md={4}>
                <label className="form-label">Expiration Month</label>
                <div className="form-control-bg-light">
                  <input type="text" className="form-control" maxLength={2} />
                </div>
              </Col>
              <Col md={4}>
                <label className="form-label">Expiration Year</label>
                <div className="form-control-bg-light">
                  <input type="text" className="form-control" maxLength={4} />
                </div>
              </Col>
              <Col md={4}>
                <label className="form-label">CVV / CVC</label>
                <div className="form-control-bg-light">
                  <input type="text" className="form-control" maxLength={3} placeholder="XXX" />
                </div>
              </Col>
              <Col xs={12}>
                <label className="form-label">Name of the cardholder</label>
                <div className="form-control-bg-light">
                  <input type="text" className="form-control" aria-label="name of the cardholder" />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card className="border">
          <CardHeader className="border-bottom">
            <h5 className="mb-0">Pay with Paypal</h5>
          </CardHeader>
          <CardBody className="text-center">
            <Image src={paypal} className="h-70px mb-3" />
            <p className="mb-3">
              <strong>Tips:</strong> Simply click on the payment button below to proceed to the PayPal payment page.
            </p>
            <Link to="" className="btn btn-sm btn-outline-primary mb-0">
              Pay with Paypal
            </Link>
          </CardBody>
        </Card>
        <div className="d-flex justify-content-between">
          <Button onClick={() => previousStep()} variant="secondary" className="prev-btn mb-0">
            Previous
          </Button>
          <Button variant="success" className="next-btn mb-0">
            Pay now
          </Button>
        </div>
      </div>
  )
}

export default PaymentOption
