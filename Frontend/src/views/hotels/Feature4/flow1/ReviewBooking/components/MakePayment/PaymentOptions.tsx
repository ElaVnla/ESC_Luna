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


  return (
    <Card className="shadow">
      <CardHeader className="border-bottom p-4">
        <h4 className="card-title mb-0 items-center">
          <BsWalletFill className=" me-2" />
          Payment Options
        </h4>
      </CardHeader>
      <CardBody className="p-4 pb-0">
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
              <Link to="">
                <Image src={card} className="h-30px" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CARD PAYMENT FORM */}
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
      </form>
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
