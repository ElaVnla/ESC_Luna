import { useEffect, useState } from 'react';
import { useWizard } from 'react-use-wizard';
import PriceSummary from '../HotelAndRoomDetails/PriceSummary';
import { Button, Col, Row } from 'react-bootstrap';
import type { Step1Props } from '../types';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

interface Step3WithSecretProps extends Step1Props {
  clientSecret: string;
}

// currencies without fractional units
const ZERO_DECIMAL = ['jpy', 'krw', 'vnd'];

const Step3 = ({ control, roomData: propRoom, hotelData: propHotel }: Step3WithSecretProps) => {
  const { goToStep } = useWizard();
  const { getValues, trigger } = useFormContext();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [hotelData, setHotelData] = useState<any>(propHotel);
  const [roomData, setRoomData] = useState<any>(propRoom);
  const [hotelParams, setHotelParams] = useState<any>(null);
  const [cardholderName, setCardholderName] = useState<string>('');

  useEffect(() => {
    try {
      const bookingDetails = JSON.parse(sessionStorage.getItem('hotel_booking_details') || 'null');
      if (bookingDetails) {
        setHotelData((prev: any) => prev || bookingDetails.hotelData);
        setRoomData((prev: any) => prev || bookingDetails.roomData);
        setHotelParams(bookingDetails.hotelParams); // contains guests
      }
      const formData = getValues();
      if (formData?.cardHolderName) setCardholderName(formData.cardHolderName);
    } catch (e) {
      console.error('Failed to load session data:', e);
    }
  }, [getValues]);

  const getGuestsFromParams = (params: any): number => {
    const raw = params?.guests;
    if (raw == null) return 1; // safe default
    if (typeof raw === 'number') return Math.max(1, raw);
    const m = String(raw).match(/\d+/);
    const n = m ? parseInt(m[0], 10) : NaN;
    return Number.isNaN(n) ? 1 : Math.max(1, n);
  };

  const calcNights = (start: string, end: string) => {
    try {
      const s = new Date(start);
      const e = new Date(end);
      // normalize to midnight local to avoid DST off-by-one
      s.setHours(0,0,0,0);
      e.setHours(0,0,0,0);
      const ms = e.getTime() - s.getTime();
      const nights = Math.max(1, Math.ceil(ms / (1000 * 60 * 60 * 24)));
      return nights;
    } catch {
      return 1;
    }
  };

  const buildFallbackPayload = () => {
    // Build minimal payload from what we have on this page
    const form = getValues();
    const totalGuests = getGuestsFromParams(hotelParams);
    const bookingId = form?.booking?.id || `BOOK-${Date.now()}`;

    const start = form?.booking?.start_date || '2025-01-01';
    const end   = form?.booking?.end_date   || '2025-01-03';

    const currencyCode =
      roomData?.included_taxes_and_fees_in_currency?.[0]?.currency?.toUpperCase?.() ||
      roomData?.excluded_taxes_and_fees_currency?.toUpperCase?.() ||
      'SGD';

    const payload = {
      hotel: {
        name: hotelData?.name || propHotel?.name || '',
        address: hotelData?.address || propHotel?.address || '',
      },
      customer: {
        salutation: form?.customer?.salutation || '',
        first_name: form?.customer?.first_name || '',
        last_name: form?.customer?.last_name || '',
        email: form?.customer?.email || '',
        phone_number: form?.customer?.phone_number || '',
        billing_address: form?.customer?.billing_address || '',
        country: form?.customer?.country || '',
        date_of_birth: form?.customer?.date_of_birth || '',
        booking_id: bookingId,
      },
      booking: {
        id: bookingId,
        destination_id: propHotel?.original_metadata?.city || 'sg01',
        hotel_id: propHotel?.id || 'hotel01',
        room_id: propRoom?.type || 'room01',
        start_date: start,
        end_date: end,
        num_nights: calcNights(start, end),           // ✅ set nights
        price: roomData?.converted_price ?? roomData?.price ?? 0,
        currency: currencyCode,
        guests_total: totalGuests, // single total (incl main)
      },
      guests: [], // add remaining guests here if you collect them elsewhere
    };

    sessionStorage.setItem('booking_payload', JSON.stringify(payload));
    return payload;
  };

  const handleProceed = async () => {
    const ok = await trigger(['cardHolderName']).catch(() => false);
    if (!ok) {
      toast.error('Please fill in cardholder name before proceeding.');
      return;
    }
    if (!stripe || !elements) {
      toast.error('Stripe is not loaded. Please try again.');
      return;
    }

    // 1) confirm payment
    const result = await stripe.confirmPayment({ elements, redirect: 'if_required' });
    if (result.error) {
      console.error(result.error.message);
      toast.error(`Payment failed: ${result.error.message}. Please try again.`);
      return;
    }
    if (result.paymentIntent?.status !== 'succeeded') {
      toast.warning('Payment not completed. Please try again.');
      return;
    }

    const chargedAmount = result.paymentIntent.amount;     // smallest unit
    const chargedCurrency = result.paymentIntent.currency; // e.g. 'sgd'
    const stripePaymentIntentId = result.paymentIntent.id;

    try {
      // 2) get or build booking payload
      let raw: any;
      const stored = sessionStorage.getItem('booking_payload');
      raw = stored ? JSON.parse(stored) : buildFallbackPayload();

      const totalGuests = getGuestsFromParams(hotelParams);

      const displayPrice =
        raw?.booking?.price ??
        roomData?.converted_price ??
        roomData?.price ??
        0;

      const currencyUpper =
        (raw?.booking?.currency || chargedCurrency || 'SGD').toUpperCase();

      const nights = calcNights(raw.booking.start_date, raw.booking.end_date);

      const payload = {
        ...raw,
        booking: {
          ...raw.booking,
          price: displayPrice,
          currency: currencyUpper,
          guests_total: totalGuests,
          num_nights: nights,                 // ✅ ensure not null
        },
      };

      // 3) create booking
      const bookingRes = await fetch('http://localhost:3000/bookings/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!bookingRes.ok) throw new Error('Booking failed');
      const confirmed = await bookingRes.json();

      const bookingId =
        confirmed?.booking?.id ||
        confirmed?.booking_id ||
        confirmed?.booking_reference ||
        raw?.booking?.id ||
        `BOOK-${Date.now()}`;

      // 4) store payment record
      const payment_reference = `PAY-${Date.now()}`;
      await fetch('http://localhost:3000/payments/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          booking_id: bookingId,
          payment_reference,
          stripe_payment_intent_id: stripePaymentIntentId,
          amount: chargedAmount,
          currency: chargedCurrency,
          status: 'succeeded',
          encrypted_cardholder_name: cardholderName || getValues()?.cardHolderName || null,
        }),
      });

      // 5) send confirmation email
      const humanAmount = ZERO_DECIMAL.includes(chargedCurrency)
        ? chargedAmount
        : (chargedAmount / 100).toFixed(2);

      await fetch('http://localhost:3000/email/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          booking: {
            hotel: { name: raw.hotel?.name, address: raw.hotel?.address },
            booking: {
              start_date: payload.booking.start_date,
              end_date: payload.booking.end_date,
              guests_total: totalGuests,
              num_nights: payload.booking.num_nights,      // ✅ include in email payload too (optional)
            },
            guests: { total: totalGuests },
            price: { totalPaid: humanAmount, currency: chargedCurrency?.toUpperCase() || currencyUpper },
            mainGuest: {
              email: raw.customer?.email,
              salutation: raw.customer?.salutation,
              first_name: raw.customer?.first_name,
              last_name: raw.customer?.last_name,
              country: raw.customer?.country,
              date_of_birth: raw.customer?.date_of_birth,
            },
            booking_reference: confirmed?.booking_reference || bookingId,
          },
        }),
      });

      // 6) save summary for confirmation page
      const summaryForUI = {
        bookingId: confirmed?.booking_reference || bookingId,
        checkIn: payload.booking.start_date,
        checkOut: payload.booking.end_date,
        guestsTotal: totalGuests,
        totalPaid: humanAmount,
        currency: chargedCurrency?.toUpperCase() || currencyUpper,
        num_nights: payload.booking.num_nights,
      };
      sessionStorage.setItem('booking_summary', JSON.stringify(summaryForUI));

      toast.success('Payment successful! Booking confirmed.');
      navigate('/hotels/confirmed-booking');
    } catch (e) {
      console.error('❌ Post-payment flow failed:', e);
      toast.error('Payment went through, but finalizing booking failed. Please try again.');
    }
  };

  return (
    <div className="vstack gap-4">
      <Row className="g-4">
        <Col xs={8}>
          <div className="card shadow p-4">
            <h5 className="mb-4">Card Details</h5>
            <PaymentElement options={{ layout: 'tabs' }} />
          </div>
        </Col>

        <Col as="aside" xl={4}>
          <Row className="g-4">
            <Col md={6} xl={12}>
              <PriceSummary
                control={control}
                hotelData={hotelData}
                roomData={roomData}
                guests={getGuestsFromParams(hotelParams)}
                hotelParams={hotelParams}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="d-flex justify-content-between">
        <button onClick={() => goToStep(1)} className="btn btn-secondary prev-btn mb-0">
          Previous
        </button>
        <Button onClick={handleProceed} className="btn btn-success mb-0">
          Proceed with payment
        </Button>
      </div>
    </div>
  );
};

export default Step3;
