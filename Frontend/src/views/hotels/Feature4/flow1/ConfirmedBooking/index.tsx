import { PageMetaData } from '@/components';
import TopNavBar from '@/layouts/UserLayout/TopNavBar';
import { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Hero from './components/Hero';

const ConfirmedBooking = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState<any>(null);
   const storedData = sessionStorage.getItem('booking_summary');
  useEffect(() => {
   
    console.log("CONFIRMED BOOKING PAGE RESULT: ", booking);
  console.log("CONFIRMED Booking session : ", storedData);
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        setBooking(parsed);
      } catch (err) {
        console.error('Invalid JSON format:', err);
      }
    }
  }, []);

  if (!booking) return <p>Loading booking details...</p>;

  return (
    <>
      <PageMetaData title="Hotel - Review Booking" />
      <main>
        <TopNavBar />
        <Hero />
        <Container>
          <div className="vstack gap-4">
            <Row className="g-4"></Row>
            <div className="container mt-5 d-flex justify-content-center">
              <Card style={{ maxWidth: '600px', width: '100%' }} className="shadow">
                <CardBody>
                  <p><strong>Booking ID:</strong> {booking.bookingId?.booking_reference || 'N/A'}</p>
                  <p><strong>Check-in:</strong> {booking.checkIn || 'N/A'}</p>
                  <p><strong>Check-out:</strong> {booking.checkOut || 'N/A'}</p>
                  <p><strong>Rooms & Guests:</strong> {booking.roomName || 'N/A'}</p>
                  <p><strong>Total Price:</strong> ${booking.totalPrice || 'N/A'}</p>

                  <div className="d-flex justify-content-center mt-4">
                    <Button variant="primary" onClick={() => navigate('/hotels/home')}>
                      Go back Home
                    </Button>
                  </div>
                </CardBody>

              </Card>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default ConfirmedBooking;
