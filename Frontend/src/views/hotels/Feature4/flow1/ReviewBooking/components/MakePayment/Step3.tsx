import { Wizard, useWizard } from 'react-use-wizard';
import OfferAndDiscounts from '../HotelAndRoomDetails/OfferAndDiscounts';
import PriceSummary from '../HotelAndRoomDetails/PriceSummary';
import PaymentOptions from './PaymentOptions';
import { Button, Col, Row } from 'react-bootstrap';
import type { Step1Props } from '../types';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { useGuestCount } from '../../contexts/GuestCountContext';


const Step3 = ({ control }: Step1Props) => {
  const { previousStep } = useWizard();
  const { getValues, trigger } = useFormContext();
  const { guests } = useGuestCount();
  const navigate = useNavigate();

  const handleProceed = async () => {
    const isValid = await trigger(); // Ensures guest fields are collected
  
    if (!isValid) {
      console.warn("Form is invalid");
      return;
    }
  
    const formData = getValues();
    console.log("✅ guest formData:", formData.guests); // 🔍 Debug here
    console.log("✅ adult guests:", formData.guests?.adults);
    console.log("✅ child guests:", formData.guests?.children);
  
    const bookingId = `BOOK-${Date.now()}`;
    const allGuests = [
      ...(formData.guests?.adults?.map((g: any) => ({
        ...g,
        guest_type: 'adult',
        booking_id: bookingId,
      })) || []),
      ...(formData.guests?.children?.map((g: any) => ({
        ...g,
        guest_type: 'child',
        booking_id: bookingId,
      })) || []),
    ];
  
    console.log("✅ transformed guests for backend:", allGuests);
  

    const payload = {
      booking: {
        id: bookingId, // Temporary ID (real one set after email verify)
        destination_id: '',        // 🟡 Placeholder (from Feature 3)
        hotel_id: '',              // 🟡 Placeholder
        room_id: '',               // 🟡 Placeholder
        start_date: '',            // 🟡 Placeholder (from Feature 3 — check-in)
        end_date: '',              // 🟡 Placeholder (from Feature 3 — check-out)
        adults: guests.adults,
        children: guests.children,
        message_to_hotel: formData.booking?.message_to_hotel || '',
        num_nights: formData.booking?.num_nights || 1,
        price: formData.booking?.price || 999.99, // 🟡 Placeholder until Feature 3 is wired
      },
      customer: formData.customer,
      guests: allGuests,
      payment: {
        payment_reference: `PAY-${Date.now()}`,
        masked_card_number: formData.cardNo?.toString().slice(-4).padStart(16, '*') || '**** **** **** 1234',
      },
    };

    // Store in session to use later
    sessionStorage.setItem('booking_payload', JSON.stringify(payload));
    navigate('/hotels/verify-email');
  };

  return (
    <div className="vstack gap-4">
      <Row className="g-4">
        <Col xs={8}>
          <PaymentOptions />
        </Col>
        <Col as="aside" xl={4}>
          <Row className="g-4">
            <Col md={6} xl={12}>
              <PriceSummary />
            </Col>
            <Col md={6} xl={12}>
              <OfferAndDiscounts />
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="d-flex justify-content-between">
        <button onClick={() => previousStep()} className="btn btn-secondary prev-btn mb-0">
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
