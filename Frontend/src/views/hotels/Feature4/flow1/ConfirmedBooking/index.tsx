import { PageMetaData } from '@/components';
import TopNavBar from '@/layouts/UserLayout/TopNavBar';
import { useEffect, useState } from 'react';
import { Card, CardBody, Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Hero from './components/Hero';

const currencySymbolMap: Record<string, string> = {
  SGD: 'S$', USD: '$', EUR: '€', GBP: '£', JPY: '¥', KRW: '₩', VND: '₫',
  AUD: 'A$', CAD: 'C$', MYR: 'RM', THB: '฿', IDR: 'Rp',
};

const formatMoney = (amount: number, code?: string) => {
  const c = (code || 'SGD').toUpperCase();
  const symbol = currencySymbolMap[c] || `${c} `;
  return `${symbol}${Number(amount).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

type BookingSummary = {
  bookingId?: string;
  checkIn?: string;
  checkOut?: string;
  guestsTotal?: string;  // raw string e.g. "2|2"
  totalPaid?: number;    // base rate we saved
  currency?: string;     // base rate currency
  num_nights?: number;
};

const ConfirmedBooking = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState<BookingSummary | null>(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem('booking_summary');
    if (storedData) {
      try {
        const parsed: BookingSummary = JSON.parse(storedData);
        setBooking(parsed);
      } catch (err) {
        console.error('Invalid JSON format for booking_summary:', err);
      }
    }
    // optional: clear after render if desired
    // sessionStorage.removeItem('booking_summary');
  }, []);

  if (!booking) return <p>Loading booking details...</p>;

  const guestsLabel = booking.guestsTotal ?? 'N/A';
  const priceLabel =
    booking.totalPaid != null
      ? formatMoney(Number(booking.totalPaid), booking.currency)
      : 'N/A';

  return (
    <>
      <PageMetaData title="Hotel - Booking Confirmed" />
      <main>
        <TopNavBar />
        <Hero />
        <Container>
          <div className="vstack gap-4">
            <Row className="g-4"></Row>
            <div className="container mt-5 d-flex justify-content-center">
              <Card style={{ maxWidth: '600px', width: '100%' }} className="shadow">
                <CardBody>
                  <p><strong>Booking ID:</strong> {booking.bookingId || 'N/A'}</p>
                  <p><strong>Check-in:</strong> {booking.checkIn || 'N/A'}</p>
                  <p><strong>Check-out:</strong> {booking.checkOut || 'N/A'}</p>
                  <p><strong>Rooms & Guests:</strong> {guestsLabel}</p>
                  <p><strong>Total Price:</strong> {priceLabel}</p>

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
