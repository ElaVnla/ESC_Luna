import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormLabel,
  Image,
  Row,
} from 'react-bootstrap'
import { BsCreditCard, BsWalletFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useFormContext } from 'react-hook-form' // ✅ use global context
import { TextFormInput } from '@/components'

import visaCard from '@/assets/images/element/visa.svg'
import masterCard from '@/assets/images/element/mastercard.svg'
import expressCard from '@/assets/images/element/expresscard.svg'

const paymentCards = [visaCard, masterCard, expressCard]

const PaymentOptions = () => {
  const { control } = useFormContext() // ✅ use parent's context

  return (
    <Card className="shadow">
      <CardHeader className="border-bottom p-4">
        <h4 className="card-title mb-0 items-center">
          <BsWalletFill className="me-2" />
          Payment Options
        </h4>
      </CardHeader>
      <CardBody className="p-4 pb-0">
        <Accordion defaultActiveKey="1" className="accordion-icon accordion-bg-light" id="accordioncircle">
          <AccordionItem eventKey="1" className="mb-3">
            <AccordionHeader as="h6" id="heading-1">
              <BsCreditCard className="text-primary me-2" />
              <span className="me-5">Credit or Debit Card</span>
            </AccordionHeader>
            <AccordionBody>
              <div className="d-sm-flex justify-content-sm-between my-3">
                <h6 className="mb-2 mb-sm-0">We Accept:</h6>
                <ul className="list-inline my-0">
                  {paymentCards.map((card, idx) => (
                    <li key={idx} className="list-inline-item">
                      <Link to="">
                        <Image src={card} className="h-30px" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ✅ Replaced <form> with plain <div> */}
              <div className="g-3 row">
                <Col xs={12}>
                  <FormLabel>Card Number *</FormLabel>
                  <div className="position-relative">
                    <TextFormInput
                      control={control}
                      name="cardNo"
                      type="text"
                      rules={{
                        required: 'Card number is required',
                        pattern: {
                          value: /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/,
                          message: 'Card number must be 16 digits',
                        },
                      }}
                      maxLength={19}
                      placeholder="XXXX XXXX XXXX XXXX"
                      combinedInput
                    />
                    <img
                      src={visaCard}
                      className="w-30px position-absolute top-50 end-0 translate-middle-y me-2 d-none d-sm-block"
                    />
                  </div>
                </Col>

                <Col md={6}>
                  <FormLabel>Expiration date *</FormLabel>
                  <div className="input-group">
                    <TextFormInput
                      maxLength={2}
                      placeholder="MM"
                      control={control}
                      name="expiryMonth"
                      rules={{
                        required: 'Expiry month is required',
                        pattern: {
                          value: /^(0?[1-9]|1[0-2])$/,
                          message: 'Enter a valid month (01–12)',
                        },
                      }}
                      combinedInput
                    />
                    <TextFormInput
                      maxLength={4}
                      placeholder="YYYY"
                      control={control}
                      name="expiryYear"
                      rules={{
                        required: 'Expiry year is required',
                        pattern: {
                          value: /^\d{4}$/,
                          message: 'Enter a 4-digit year',
                        },
                        validate: (value) =>
                          parseInt(value || '0', 10) >= new Date().getFullYear() ||
                          'Year must be this year or later',
                      }}
                      combinedInput
                    />
                  </div>
                </Col>

                <TextFormInput
                  containerClass="col-md-6"
                  control={control}
                  name="cvv"
                  label="CVV / CVC *"
                  rules={{
                    required: 'CVV is required',
                    pattern: {
                      value: /^\d{3,4}$/,
                      message: 'Enter a 3 or 4 digit CVV',
                    },
                  }}
                  maxLength={4}
                  placeholder="e.g. 123"
                />

                <TextFormInput
                  containerClass="col-12"
                  label="Name on Card *"
                  control={control}
                  name="cardHolderName"
                  placeholder="Enter card holder name"
                  rules={{
                    required: 'Cardholder name is required',
                  }}
                />
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
