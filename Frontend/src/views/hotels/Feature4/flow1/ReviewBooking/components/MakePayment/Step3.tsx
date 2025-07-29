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
  const { getValues } = useFormContext();
  const { guests } = useGuestCount();
  const navigate = useNavigate();

  const handleProceed = () => {
    const formData = getValues();

    const payload = {
      booking: {
        id: `BOOK-${Date.now()}`, // Temporary ID (real one set after email verify)
        destination_id: '',        // 🟡 Placeholder (from Feature 3)
        hotel_id: '',              // 🟡 Placeholder
        room_id: '',               // 🟡 Placeholder
        start_date: '',            // 🟡 Placeholder (from Feature 3 — check-in)
        end_date: '',              // 🟡 Placeholder (from Feature 3 — check-out)
        adults: guests.adults,
        children: guests.children,
        message_to_hotel: formData.booking?.message_to_hotel || '',
        num_nights: formData.booking?.num_nights || 1,
        price: formData.booking?.price || 0,
      },
      customer: formData.customer,
      guests: formData.guests,
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
