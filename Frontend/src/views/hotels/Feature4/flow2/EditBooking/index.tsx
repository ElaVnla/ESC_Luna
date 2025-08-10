// index.tsx (EditBooking)
import { useEffect } from 'react';
import { PageMetaData } from '@/components';
import FooterWithLinks from '@/components/FooterWithLinks';
import Hero from './components/Hero';
import TopNavBar4 from '@/layouts/UserLayout/TopNavBar';
import EditGuestDetails from './components/EditGuestDetails';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { FieldPath } from 'react-hook-form';

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

const EditBooking = () => {
  const methods = useForm<FormShape>({
    defaultValues: {
      customer: {
        salutation: '',
        first_name: '',
        last_name: '',
        billing_address: '',
        email: '',
        phone_number: '',
        country: '',
        date_of_birth: '',
      },
      guests: [],
    },
    mode: 'onBlur',
  });

  // Early sanity check for session key
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

  const handleSave = async () => {
  // Build guest field paths with the correct type
  const g = methods.getValues('guests') || [];
  const guestFields: FieldPath<FormShape>[] = [];
  g.forEach((_, i) => {
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
  // ...

    if (!ok) {
      toast.error('Please resolve the highlighted fields before saving.');
      return;
    }

    // Grab bookingId
    let bookingId: string | null = null;
    try {
      const raw = sessionStorage.getItem('pendingBooking');
      bookingId = raw ? JSON.parse(raw)?.bookingId : null;
    } catch {
      // ignore
    }
    if (!bookingId) {
      toast.error('Missing booking ID. Please reopen this booking.');
      return;
    }

    // Build payloads
    // const { customer, guests } = methods.getValues();

    // // Save with simple PUTs; adjust endpoints if your API differs
    // try {
    //   toast.info('Saving changes…', { toastId: 'saving' });

    //   const [custRes, guestsRes] = await Promise.all([
    //     fetch(`http://localhost:3000/customers/${bookingId}`, {
    //       method: 'PUT',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({ ...customer, booking_id: bookingId }),
    //     }),
    //     fetch(`http://localhost:3000/guests/${bookingId}`, {
    //       method: 'PUT',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({ booking_id: bookingId, guests }),
    //     }),
    //   ]);

    //   if (!custRes.ok) {
    //     const t = await custRes.text();
    //     throw new Error(`Customer update failed (${custRes.status}) ${t || ''}`);
    //   }
    //   if (!guestsRes.ok) {
    //     const t = await guestsRes.text();
    //     throw new Error(`Guests update failed (${guestsRes.status}) ${t || ''}`);
    //   }

    //   toast.dismiss('saving');
    //   toast.success('Guest details saved successfully.');
    // } catch (err: any) {
    //   toast.dismiss('saving');
    //   toast.error(err?.message || 'Failed to save guest details.');
    // }
  };

  return (
    <>
      <PageMetaData title="Edit Booking – Guests" />
      <TopNavBar4 />

      <FormProvider {...methods}>
        <main>
          <Hero />
          <EditGuestDetails />

          {/* Action bar */}
          {/* <Container className="pb-4">
            <div className="d-flex justify-content-end gap-2">
              <Button variant="primary" onClick={handleSave}>
                Save changes
              </Button>
            </div>
          </Container> */}
        </main>
      </FormProvider>

      {/* Toasts */}
      <ToastContainer position="top-right" autoClose={3500} />
    </>
  );
};

export default EditBooking;
