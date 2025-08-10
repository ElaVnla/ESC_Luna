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

// Step3 component for payment and booking confirmation
const Step3 = ({ control, roomData: propRoom, hotelData: propHotel}: Step3WithSecretProps) => {
  const { goToStep } = useWizard();
  const { getValues, trigger } = useFormContext();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  // State for hotel, room, params, and cardholder name
  const [hotelData, setHotelData] = useState<any>(propHotel);
  const [roomData, setRoomData] = useState<any>(propRoom);
  const [hotelParams, setHotelParams] = useState<any>(null);
  const [cardholderName, setCardholderName] = useState<string>('');

  // Get special request from form
  const getSpecialRequest = () => {
    const form = getValues();
    return form?.special_request?.shortDescription?.trim() || null;
  };

  // Load booking details and cardholder name from sessionStorage on mount
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

  // Parse guests from params
  const getGuestsFromParams = (params: any): number => {
    const raw = params?.guests;
    if (raw == null) return 1; // safe default
    if (typeof raw === 'number') return Math.max(1, raw);
    const m = String(raw).match(/\d+/);
    const n = m ? parseInt(m[0], 10) : NaN;
    return Number.isNaN(n) ? 1 : Math.max(1, n);
  };

  // Calculate nights between two dates
  const calcNights = (start: string, end: string) => {
    try {
      const s = new Date(start);
      const e = new Date(end);
      s.setHours(0,0,0,0);
      e.setHours(0,0,0,0);
      const ms = e.getTime() - s.getTime();
      const nights = Math.max(1, Math.ceil(ms / (1000 * 60 * 60 * 24)));
      return nights;
    } catch {
      return 1;
    }
  };

  // Read guest info from sessionStorage
  const readStoredGuestInfo = () => {
    try {
      const raw = sessionStorage.getItem('hotel_guest_info');
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.error('Failed to parse hotel_guest_info:', e);
      return null;
    }
  };

  // Build fallback booking payload if not present in sessionStorage
  const buildFallbackPayload = (form: any, bookingId: string) => {
    const start = hotelParams?.checkIn || '2025-01-01';
    const end   = hotelParams?.checkOut || '2025-01-03';

    const currencyCode =
      roomData?.included_taxes_and_fees_in_currency?.[0]?.currency?.toUpperCase?.() ||
      roomData?.excluded_taxes_and_fees_currency?.toUpperCase?.() ||
      'SGD';

    // Prefer Step‑2 customer/guests if present
    const stored = readStoredGuestInfo();
    const customer = stored?.customer ?? {
      salutation: form?.customer?.salutation || '',
      first_name: form?.customer?.first_name || '',
      last_name: form?.customer?.last_name || '',
      email: form?.customer?.email || '',
      phone_number: form?.customer?.phone_number || '',
      billing_address: form?.customer?.billing_address || '',
      country: form?.customer?.country || '',
      date_of_birth: form?.customer?.date_of_birth || '',
      booking_id: bookingId,
    };

    const guests = Array.isArray(stored?.guests) ? stored!.guests : [];

    console.log("GUESTS ABOUT TO PASS TO API: ", guests);

    const payload = {
      hotel: {
        name: hotelData?.name || propHotel?.name || '',
        address: hotelData?.address || propHotel?.address || '',
      },
      customer,
      booking: {
        id: bookingId,
        destination_id: hotelParams?.destinationId || 'hotel01',
        hotel_id: hotelParams?.hotelId || 'sg01',
        room_id: roomData?.key || 'room01',
        start_date: start,
        end_date: end,
        num_nights: calcNights(start, end),
        price: roomData?.converted_price ?? roomData?.price ?? 0,
        currency: currencyCode,
        guests_total: hotelParams?.guests || "0",
        message_to_hotel: getSpecialRequest(),
      },
      guests, // include the Step‑2 guests
    };

    sessionStorage.setItem('booking_payload', JSON.stringify(payload));
    return payload;
  };

  // Handle payment and booking confirmation
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

    const form = getValues();
    // Generate bookingId if not present
    const bookingId =
      form?.booking?.id ||
      (() => {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, "0");
        const month = now.toLocaleString("en-US", { month: "short" }).toLowerCase();
        const year = now.getFullYear();
        const timestamp = now.getTime();
        const randomNum = Math.floor(100 + Math.random() * 900);
        return `BK-${day}${month}${year}-${timestamp}-${randomNum}`;
      })();

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

    const chargedAmount = result.paymentIntent.amount;
    const chargedCurrency = result.paymentIntent.currency;
    const stripePaymentIntentId = result.paymentIntent.id;

    try {
      // 2) get or build booking payload
      let raw: any;
      const storedPayloadStr = sessionStorage.getItem('booking_payload');
      console.log("from step2: ", storedPayloadStr);
      raw = storedPayloadStr ? JSON.parse(storedPayloadStr) : buildFallbackPayload(form, bookingId);

      console.log('retrieve from session RAW: ', raw);
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
          guests_total: hotelParams?.guests || "0",
          num_nights: nights,
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

      console.log("before passing to payment api: ", {
        bookingId
      });

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

      // 5) send confirmation email (includes guests + phone_number)
      const humanAmount = ZERO_DECIMAL.includes(chargedCurrency)
        ? chargedAmount
        : (chargedAmount / 100).toFixed(2);

      const otherGuests = Array.isArray(raw?.guests)
        ? raw.guests.map((g: any, i: number) => ({
            index: i + 1,
            salutation: g?.salutation || '',
            first_name: g?.first_name || '',
            last_name: g?.last_name || '',
          }))
        : [];

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
              num_nights: payload.booking.num_nights,
            },
            guests: { 
              total: hotelParams.guests,
              otherGuests,
            },
            price: { totalPaid: humanAmount, currency: chargedCurrency?.toUpperCase() || currencyUpper },
            mainGuest: {
              email: raw.customer?.email,
              salutation: raw.customer?.salutation,
              first_name: raw.customer?.first_name,
              last_name: raw.customer?.last_name,
              phone_number: raw.customer?.phone_number || '',
              country: raw.customer?.country,
              date_of_birth: raw.customer?.date_of_birth,
            },
            booking_reference: confirmed?.booking_reference || bookingId,
          },
        }),
      });

      // Helper to pick hi-res images from room images
      const pickHiResImages = (imgs: any): string[] | null => {
        if (!Array.isArray(imgs)) return null;
        return imgs
          .map((img: any) =>
            typeof img === 'string'
              ? img
              : (img?.high_resolution_url || img?.url)
          )
          .filter(Boolean);
      };

      // Map room data for upsert
      const mapRoomForUpsert = (hotelId: string, room: any) => ({
        id: String(room?.key),
        hotel_id: String(hotelId),
        room_type: room?.roomDescription ?? null,
        normalized_description: room?.roomNormalizedDescription ?? null,
        description: room?.description ?? room?.roomDescription ?? null,
        long_description: room?.long_description ?? null,
        amenities: Array.isArray(room?.amenities) ? room.amenities : null,
        price:
          typeof room?.converted_price === 'number'
            ? room.converted_price
            : (typeof room?.price === 'number' ? room.price : null),
        images: pickHiResImages(room?.images),
        booking_key: bookingId,
      });

      // Upsert room info to backend
      await fetch('http://localhost:3000/rooms/upsert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mapRoomForUpsert(hotelData.id, propRoom)),
      });

      toast.success('Payment successful! Booking confirmed.');

      sessionStorage.clear();
      // 6) save summary for confirmation page
      const summaryForUI = {
        bookingId: confirmed?.booking_reference || bookingId,
        checkIn: payload.booking.start_date,
        checkOut: payload.booking.end_date,
        guestsTotal: hotelParams.guests,
        totalPaid: humanAmount,
        currency: chargedCurrency?.toUpperCase() || currencyUpper,
        num_nights: payload.booking.num_nights,
      };

      sessionStorage.setItem('booking_summary', JSON.stringify(summaryForUI));
      
      navigate('/hotels/confirmed-booking');
    } catch (e) {
      console.error('Post-payment flow failed:', e);
      toast.error('Payment went through, but finalizing booking failed. Please try again.');
    }
  };

  return (
    <div className="vstack gap-4">
      <Row className="g-4">
        <Col xs={8}>
          {/* Card for Stripe payment element */}
          <div className="card shadow p-4">
            <h5 className="mb-4">Card Details</h5>
            <PaymentElement options={{ layout: 'tabs' }} />
          </div>
        </Col>

        <Col as="aside" xl={4}>
          <Row className="g-4">
            <Col md={6} xl={12}>
              {/* Price summary section */}
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
        {/* Button to go back to previous step */}
        <button onClick={() => goToStep(1)} className="btn btn-secondary prev-btn mb-0">
          Previous
        </button>
        {/* Button to proceed with payment */}
        <Button onClick={handleProceed} className="btn btn-success mb-0">
          Proceed with payment
        </Button>
      </div>
    </div>
  );
};

export default Step3;
