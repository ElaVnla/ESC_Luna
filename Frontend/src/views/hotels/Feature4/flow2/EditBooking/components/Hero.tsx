import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';

const Hero = () => {
  const navigate = useNavigate();
  const { getValues } = useFormContext();

  type GuestInput = {
    salutation: string;
    first_name: string;
    last_name: string;
    country: string;
    email: string;
    phone_number: string;
    guest_type: string;
  };

  const handleUpdate = async () => {
    const stored = sessionStorage.getItem('pendingBooking');
    if (!stored) return alert('Booking ID not found.');
  
    let parsed: any;
    try {
      parsed = JSON.parse(stored);
      if (typeof parsed === 'string') parsed = JSON.parse(parsed);
    } catch (err) {
      console.error('Failed to parse pendingBooking in EditBooking:', err);
      alert('Invalid session data.');
      return;
    }
  
    const bookingId = parsed?.bookingId;
    if (!bookingId) {
      alert('Missing booking ID.');
      return;
    }
  
    const formData = getValues();
  
    try {
      // 🔄 Update Customer
      const customerRes = await fetch(`http://localhost:3000/customers/${bookingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData.customer),
      });
  
      if (!customerRes.ok) throw new Error(`Customer update failed: ${customerRes.status}`);
  
      // 🔄 Update Guests
      const guestsRes = await fetch(`http://localhost:3000/guests/${bookingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          guests: formData.guests.map((g: GuestInput) => ({ ...g, booking_id: bookingId }))
        }),
      });
  
      if (!guestsRes.ok) throw new Error(`Guests update failed: ${guestsRes.status}`);
  
      alert('Booking updated successfully!');
      navigate('/hotels/display-booking');
    } catch (err) {
      console.error('Update failed:', err);
      alert('Failed to update booking. Please try again.');
    }
  };
  

  return (
    <section className="py-0">
      <Container>
        <Row className="mt-4 align-items-center">
          <Col xs={12}>
            <Card className="overflow-hidden px-sm-5">
              <Row className="align-items-center g-4">
                <Col sm={9}>
                  <CardBody>
                    <h1 className="m-0 h2 card-title">Edit guest details</h1>
                  </CardBody>
                </Col>
                <div className="col-sm-3 text-end d-none d-sm-block">
                  <Button variant="secondary" className="next-btn mb-0 m-2" onClick={() => window.history.back()}>
                    <i className="bi bi-arrow-left me-1" />
                    Back
                  </Button>
                  <Button onClick={handleUpdate} variant="primary" className="next-btn mb-0 m-2">
                    Update
                  </Button>
                </div>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
