import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Alert,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormLabel,
  Image,
  Row,
} from 'react-bootstrap'
import { BsCreditCard, BsGlobe2, BsPaypal, BsWalletFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa6'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { currency } from '@/states'
import { SelectFormInput, TextFormInput } from '@/components'
import { useToggle } from '@/hooks'

import element16 from '@/assets/images/element/16.svg'
import visaCard from '@/assets/images/element/visa.svg'
import masterCard from '@/assets/images/element/mastercard.svg'
import expressCard from '@/assets/images/element/expresscard.svg'
import element12 from '@/assets/images/element/12.svg'
import americaBank from '@/assets/images/element/13.svg'
import japanBank from '@/assets/images/element/15.svg'
import vivivBank from '@/assets/images/element/14.svg'
import paypal from '@/assets/images/element/paypal.svg'

const paymentCards = [visaCard, masterCard, expressCard]

const PaymentOptions = () => {
  const paymentSchema = yup.object({
    cardNo: yup.number().required('Please enter your card number'),
    expiryMonth: yup.number().required('Please enter your card expiration month'),
    expiryYear: yup.number().required('Please enter your card expiration year'),
    cvv: yup.number().required('Please enter your card CVV number'),
    cardHolderName: yup.string().required('Please enter card holder name'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(paymentSchema),
  })

  const { isOpen, toggle } = useToggle(true)

  return (
    <Card className="shadow">
      <CardHeader className="border-bottom p-4">
        <h4 className="card-title mb-0 items-center">
          <BsWalletFill className=" me-2" />
          Payment Options
        </h4>
      </CardHeader>
      <CardBody className="p-4 pb-0">
        <div className="bg-primary bg-opacity-10 rounded-3 mb-4 p-3">
          <div className="d-md-flex justify-content-md-between align-items-center">
            <div className="d-sm-flex align-items-center mb-2 mb-md-0">
              <Image src={element16} className="h-50px" />
              <div className="ms-sm-3 mt-2 mt-sm-0">
                <h5 className="card-title mb-0">Get Additional Discount</h5>
                <p className="mb-0">Login to access saved payments and discounts!</p>
              </div>
            </div>
            <Button variant="primary" href="/auth/sign-in" className="mb-0">
              Login now
            </Button>
          </div>
        </div>
        <Accordion defaultActiveKey="1" className="accordion-icon accordion-bg-light" id="accordioncircle">
          <AccordionItem eventKey="1" className="mb-3">
            <AccordionHeader as="h6" id="heading-1">
              <BsCreditCard className=" text-primary me-2" /> <span className="me-5">Credit or Debit Card</span>
            </AccordionHeader>
            <AccordionBody>
              <div className="d-sm-flex justify-content-sm-between my-3">
                <h6 className="mb-2 mb-sm-0">We Accept:</h6>
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
              </div>
              <form onSubmit={handleSubmit(() => {})} className="g-3 row">
                <Col xs={12}>
                  <FormLabel>Card Number *</FormLabel>
                  <div className="position-relative">
                    <TextFormInput control={control} name="cardNo" type="text" maxLength={14} placeholder="XXXX XXXX XXXX XXXX" combinedInput />
                    <img src={visaCard} className="w-30px position-absolute top-50 end-0 translate-middle-y me-2 d-none d-sm-block" />
                  </div>
                </Col>

                <Col md={6}>
                  <FormLabel>Expiration date *</FormLabel>
                  <div className="input-group">
                    <TextFormInput maxLength={2} placeholder="Month" control={control} name="expiryMonth" combinedInput />
                    <TextFormInput maxLength={4} placeholder="Year" control={control} name="expiryYear" combinedInput />
                  </div>
                </Col>

                <TextFormInput containerClass="col-md-6" control={control} name="cvv" label="CVV / CVC *" maxLength={3} placeholder="xxx" />

                <TextFormInput
                  containerClass="col-12"
                  label="Name on Card *"
                  control={control}
                  name="cardHolderName"
                  placeholder="Enter card holder name"
                />

                <Col xs={12}>
                  <Alert show={isOpen} onClose={toggle} variant="success" className="fade my-3" role="alert" dismissible>
                    <div className="d-sm-flex align-items-center mb-3">
                      <Image src={element12} className="w-40px me-3 mb-2 mb-sm-0" />
                      <h5 className="alert-heading mb-0">{currency}50,000 Covid Cover &amp; More</h5>
                    </div>
                    <p className="mb-2">
                      Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see
                      how spacing within an alert works with this kind of content.
                    </p>
                    <div className="d-sm-flex align-items-center">
                      <Button variant="success" className="mb-2 mb-sm-0 me-3">
                        <FaPlus className="me-2" />
                        Add
                      </Button>
                      <h6 className="mb-0">{currency}69 per person</h6>
                    </div>
                  </Alert>
                </Col>

                <Col xs={12}>
                  <div className="d-sm-flex justify-content-sm-between align-items-center">
                    <h4>
                      {currency}1800 <span className="small fs-6">Due now</span>
                    </h4>
                    <Button variant="primary" type="submit" className="mb-0">
                      Pay Now
                    </Button>
                  </div>
                </Col>
              </form>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="2" className="mb-3">
            <AccordionHeader as="h6" id="heading-2">
              <BsGlobe2 className=" text-primary me-2" /> <span className="me-5">Pay with Net Banking</span>
            </AccordionHeader>
            <AccordionBody>
              <Row as={'form'} className="row g-3 mt-1">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    {' '}
                    <h6 className="mb-0">Popular Banks:</h6>{' '}
                  </li>
                  <li className="list-inline-item">
                    <input type="radio" className="btn-check" name="options" id="option1" />
                    <label className="btn btn-light btn-primary-soft-check" htmlFor="option1">
                      <Image src={americaBank} className="h-20px me-2" />
                      Bank of America
                    </label>
                  </li>
                  <li className="list-inline-item">
                    <input type="radio" className="btn-check" name="options" id="option2" />
                    <label className="btn btn-light btn-primary-soft-check" htmlFor="option2">
                      <Image src={japanBank} className="h-20px me-2" />
                      Bank of Japan
                    </label>
                  </li>
                  <li className="list-inline-item">
                    <input type="radio" className="btn-check" name="options" id="option3" />
                    <label className="btn btn-light btn-primary-soft-check" htmlFor="option3">
                      <Image src={vivivBank} className="h-20px me-2" />
                      VIVIV Bank
                    </label>
                  </li>
                </ul>
                <p className="mb-1">In order to complete your transaction, we will transfer you over to Booking secure servers.</p>
                <p className="my-0">Select your bank from the drop-down list and click proceed to continue with your payment.</p>
                <Col md={6}>
                  <SelectFormInput className="form-select form-select-sm js-choice border-0">
                    <option value={-1}>Please choose one</option>
                    <option>Bank of America</option>
                    <option>Bank of India</option>
                    <option>Bank of London</option>
                  </SelectFormInput>
                </Col>
                <div className="d-grid">
                  <Button variant="success" className="mb-0">
                    Pay {currency}1800
                  </Button>
                </div>
              </Row>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="3" className="mb-3">
            <AccordionHeader as="h6" id="heading-3">
              <BsPaypal className=" text-primary me-2" />
              <span className="me-5">Pay with Paypal</span>
            </AccordionHeader>
            <AccordionBody>
              <div className="card card-body border align-items-center text-center mt-4">
                <Image src={paypal} className="h-70px mb-3" />
                <p className="mb-3">
                  <strong>Tips:</strong> Simply click on the payment button below to proceed to the PayPal payment page.
                </p>
                <Button variant="outline-primary" size="sm" className="mb-0">
                  Pay with paypal
                </Button>
              </div>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </CardBody>
      <div className="card-footer p-4 pt-0">
        <p className="mb-0">
          By processing, You accept Booking <Link to="">Terms of Services</Link> and <Link to="">Policy</Link>
        </p>
      </div>
    </Card>
  )
}

export default PaymentOptions
