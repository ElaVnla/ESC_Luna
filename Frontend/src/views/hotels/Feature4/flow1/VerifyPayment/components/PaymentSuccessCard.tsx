import { useNavigate } from 'react-router-dom'
import { Card, CardBody, Container, Button, Image } from 'react-bootstrap'
import successCard from '@/assets/images/card_image.png'
import checkmark from '@/assets/images/payment_card_success.png'

const PaymentSuccessCard = () => {
  const navigate = useNavigate();

  const handleCompleteBooking = async () => {
    try {
      const stored = sessionStorage.getItem('booking_payload');
      if (!stored) throw new Error('Missing booking payload');
      const raw = JSON.parse(stored);

      const payload = {
        ...raw,
        booking: {
          ...raw.booking,
          destination_id: raw.booking.destination_id || 'sg01',
          hotel_id: raw.booking.hotel_id || 'diH7',
          room_id: raw.booking.room_id || 'rm01',
          start_date: raw.booking.start_date || '2025-01-01',
          end_date: raw.booking.end_date || '2025-01-03',
          price: raw.booking.price || 999.99
        },
        guests: raw.guests || []
      };

      const res = await fetch('http://localhost:3000/bookings/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Booking failed');

      const confirmedBooking = await res.json();
      sessionStorage.setItem('confirmed_booking', JSON.stringify(confirmedBooking));

      // Send confirmation email
      await fetch('http://localhost:3000/email/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ booking: confirmedBooking }),
      });

      navigate('/hotels/confirmed-booking');
    } catch (err) {
      console.error('Booking flow failed:', err);
      alert('Booking failed. Please try again.');
    }
  };

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
              Your payment was successful! We will send you a confirmation email with the details of your booking.
            </p>
            <Button onClick={handleCompleteBooking} className="btn btn-success mb-0">
              Complete Booking
            </Button>
          </CardBody>
        </Card>
      </Container>
    </section>
  );
};

export default PaymentSuccessCard;
