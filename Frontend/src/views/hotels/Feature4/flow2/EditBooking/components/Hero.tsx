import { useEffect } from 'react';
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useFormContext, type FieldPath } from 'react-hook-form';
import { toast } from 'react-toastify';

type FormShape = {
  customer: {
    salutation: string;
    first_name: string;
    last_name: string;
    billing_address: string;
    email: string;
    phone_number: string;
    country?: string;
    date_of_birth?: string;
  };
  guests: Array<{
    salutation: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    country: string;
    date_of_birth?: string;
    guest_type?: string;
  }>;
};

const Hero = () => {
  const navigate = useNavigate();
  const methods = useFormContext<FormShape>();
  const { getValues } = methods;

  // Check session for booking context on mount
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('pendingBooking');
      if (!raw) {
        toast.error('No booking in progress. Please start from your booking list.');
        return;
      }
      const parsed = JSON.parse(raw);
      if (!parsed?.bookingId) {
        toast.error('Invalid booking context. Please reopen this booking.');
      }
    } catch {
      toast.error('Failed to read booking context from session.');
    }
  }, []);

  // Handle update button click
  const handleUpdate = async () => {
    // Build the list of guest fields to validate
    const guestValues = getValues('guests') || [];
    const guestFields: FieldPath<FormShape>[] = [];
    guestValues.forEach((_, i) => {
      guestFields.push(
        `guests.${i}.salutation` as FieldPath<FormShape>,
        `guests.${i}.first_name` as FieldPath<FormShape>,
        `guests.${i}.last_name` as FieldPath<FormShape>,
        `guests.${i}.email` as FieldPath<FormShape>,
        `guests.${i}.phone_number` as FieldPath<FormShape>,
        `guests.${i}.country` as FieldPath<FormShape>,
        `guests.${i}.date_of_birth` as FieldPath<FormShape>,
      );
    });

    // Validate all required fields
    const ok = await methods.trigger([
      'customer.salutation',
      'customer.first_name',
      'customer.last_name',
      'customer.billing_address',
      'customer.email',
      'customer.phone_number',
      'customer.country',
      'customer.date_of_birth',
      ...guestFields,
    ] as FieldPath<FormShape>[]);

    if (!ok) {
      toast.error('Please resolve the highlighted fields before saving.');
      return;
    }

    // Get bookingId from session
    let bookingId: string | null = null;
    try {
      const raw = sessionStorage.getItem('pendingBooking');
      bookingId = raw ? JSON.parse(raw)?.bookingId : null;
    } catch {
      /* ignore */
    }
    if (!bookingId) {
      toast.error('Missing booking ID. Please reopen this booking.');
      return;
    }

    // Get customer and guests data from form
    const { customer, guests } = getValues();

    try {
      toast.info('Saving changes…', { toastId: 'saving' });

      // Update customer info
      const custRes = await fetch(`http://localhost:3000/customers/${bookingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...customer, booking_id: bookingId }),
      });

      if (!custRes.ok) {
        const t = await custRes.text();
        throw new Error(`Customer update failed (${custRes.status}) ${t || ''}`);
      }

      // Update guests info (bulk)
      const guestsRes = await fetch(`http://localhost:3000/guests/${bookingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ booking_id: bookingId, guests }),
      });

      if (!guestsRes.ok) {
        const t = await guestsRes.text();
        throw new Error(`Guests update failed (${guestsRes.status}) ${t || ''}`);
      }

      toast.dismiss('saving');
      toast.success('Booking updated successfully!');
      navigate('/hotels/display-booking');
    } catch (err: any) {
      toast.dismiss('saving');
      console.error('Update failed:', err);
      toast.error(err?.message || 'Failed to update booking. Please try again.');
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
                  <Button
                    variant="secondary"
                    className="next-btn mb-0 m-2"
                    onClick={() => window.history.back()}
                  >
                    <i className="bi bi-arrow-left me-1" />
                    Back
                  </Button>
                  <Button
                    onClick={handleUpdate}
                    variant="primary"
                    className="next-btn mb-0 m-2"
                  >
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
