import { Button, Card, CardBody, CardHeader, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TextFormInput } from '@/components'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import visaCard from '@/assets/images/element/visa.svg'
import mastercard from '@/assets/images/element/mastercard.svg'
import expresscard from '@/assets/images/element/expresscard.svg'

const paymentCards = [visaCard, mastercard, expresscard]

const BookingPayment = () => {
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
        <h4 className="mb-0">How would you like to pay?</h4>
      </CardHeader>
      <CardBody className="p-4">
        <div className="d-sm-flex align-items-center mb-3">
          <h6 className="mb-2 mb-sm-0">We Accept:</h6>
          <ul className="list-inline my-0 ms-sm-3">
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
        <form onSubmit={handleSubmit(() => {})} className="row g-3">
          <Col xs={12}>
            <label className="form-label">Card Number</label>
            <div className="position-relative">
              <TextFormInput control={control} name="cardNo" type="text" maxLength={14} placeholder="XXXX XXXX XXXX XXXX" combinedInput />
              <img src={visaCard} className="w-30px position-absolute top-50 end-0 translate-middle-y me-2 d-none d-sm-block" />
            </div>
          </Col>
          <Col md={6}>
            <label className="form-label">Expiration Date</label>
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
            <Button type="submit" variant="primary" className="mb-0">
              Pay Now
            </Button>
          </Col>
        </form>
      </CardBody>
    </Card>
  )
}

export default BookingPayment
