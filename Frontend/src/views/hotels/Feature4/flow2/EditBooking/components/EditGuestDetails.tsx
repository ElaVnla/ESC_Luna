import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import MainGuestDetails from './MainGuestDetails';
import GuestDetails from './GuestDetails';

type ApiGuest = {
  id: number;
  guest_type: string;
  salutation: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  country: string;
  date_of_birth?: string | null;
};

const toYMD = (v: any): string => {
  if (!v) return '';
  const s = String(v);
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return '';
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
    d.getDate()
  ).padStart(2, '0')}`;
};

const EditGuestDetails = () => {
  const methods = useFormContext();
  const { reset, getValues } = methods;

  useEffect(() => {
    const stored = sessionStorage.getItem('pendingBooking');
    if (!stored) return;

    let bookingId: string | null = null;
    try {
      const parsed = JSON.parse(stored);
      bookingId = parsed?.bookingId ?? null;
    } catch {}
    if (!bookingId) return;

    Promise.all([
      fetch(`http://localhost:3000/customers/${bookingId}`).then(r => r.json()),
      fetch(`http://localhost:3000/guests/${bookingId}`).then(r => r.json()),
    ])
      .then(([customer, guests]: [any, ApiGuest[]]) => {
        reset({
          customer: {
            salutation: customer?.salutation ?? '',
            first_name: customer?.first_name ?? '',
            last_name: customer?.last_name ?? '',
            billing_address: customer?.billing_address ?? '',
            email: customer?.email ?? '',
            phone_number: customer?.phone_number ?? '',
            country: customer?.country ?? '',
            date_of_birth: toYMD(customer?.date_of_birth),
          },
          guests: Array.isArray(guests)
            ? guests.map(g => ({
                salutation: g.salutation ?? '',
                first_name: g.first_name ?? '',
                last_name: g.last_name ?? '',
                email: g.email ?? '',
                phone_number: g.phone_number ?? '',
                country: g.country ?? '',
                date_of_birth: toYMD(g.date_of_birth),
                guest_type: g.guest_type ?? 'guest',
                id: g.id,
              }))
            : [],
        });
      })
      .catch(err => {
        console.error('Failed to fetch guest data for edit:', err);
      });
  }, [reset]);

  const guestData = getValues('guests') || [];

  return (
    <Container>
      <div className="vstack gap-4">
        <Row className="g-4">
          <Col xs={12}>
            <MainGuestDetails />
            {guestData.length > 0 && <GuestDetails guests={guestData} />}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default EditGuestDetails;
