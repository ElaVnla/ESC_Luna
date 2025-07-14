import { Card, CardBody, Container, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import successCard from '@/assets/images/card_image.png' // replace with your actual image
import checkmark from '@/assets/images/payment_card_success.png'

const PaymentSuccessCard = () => {
  return (
    <section className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="text-center shadow-sm p-4" style={{ maxWidth: '400px', borderRadius: '12px' }}>
          <div className="position-relative">
            <Image src={successCard} fluid style={{ maxWidth: '80%' }} />
            <Image
              src={checkmark}
              alt="Success"
              style={{
                width: '80px',
                position: 'absolute',
                right: '20px',
                bottom: '10px',
              }}
            />
          </div>

          <CardBody>
            <h4 className="my-3 fw-bold">Payment Successful</h4>
            <p className="text-muted mb-4">
              Your payment was successful! We will be sending you a confirmation email with the details of your booking.
            </p>
            <Link to="/hotels/confirmed-booking" className="btn btn-success mb-0">
                Complete Booking
            </Link>
          </CardBody>
        </Card>
      </Container>
    </section>
  )
}

export default PaymentSuccessCard
