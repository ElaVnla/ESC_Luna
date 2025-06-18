import { Card, CardBody, CardHeader } from 'react-bootstrap'
import PaymentCards from './components/PaymentCards'
import AddCardForm from './components/AddCardForm'
import { PageMetaData } from '@/components'

const PaymentDetails = () => {
  return (
    <>
      <PageMetaData title="User Payment Details" />

      <Card className="bg-transparent border">
        <CardHeader className="bg-transparent border-bottom">
          <h4 className="card-header-title">Payment Details</h4>
        </CardHeader>

        <CardBody className="card-body p-2 p-sm-4">
          <h5>Saved Card</h5>

          <PaymentCards />

          <AddCardForm />
        </CardBody>
      </Card>
    </>
  )
}

export default PaymentDetails
