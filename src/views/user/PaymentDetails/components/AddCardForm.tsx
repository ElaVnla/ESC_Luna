import { Button, Card, CardBody, CardHeader, Col, Image } from 'react-bootstrap'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import visaCard from '@/assets/images/element/visa.svg'
import { TextFormInput } from '@/components'

const AddCardForm = () => {
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
    <Card className="border mt-4">
      <CardHeader className="border-bottom">
        <h5 className="card-header-title">Add New Card</h5>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(() => {})} className="row text-start g-4">
          <Col xs={12}>
            <label className="form-label">
              Card Number<span className="text-danger">*</span>
            </label>
            <div className="position-relative">
              <TextFormInput control={control} name="cardNo" type="text" maxLength={14} placeholder="XXXX XXXX XXXX XXXX" combinedInput />
              <Image src={visaCard} className="w-40px position-absolute top-50 end-0 translate-middle-y me-2 d-none d-sm-block" />
            </div>
          </Col>

          <Col md={6}>
            <label className="form-label">
              Expiration Date<span className="text-danger">*</span>
            </label>
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
            <Button variant="primary" type="submit" className="mb-0">
              Add card
            </Button>
          </Col>
        </form>
      </CardBody>
    </Card>
  )
}

export default AddCardForm
