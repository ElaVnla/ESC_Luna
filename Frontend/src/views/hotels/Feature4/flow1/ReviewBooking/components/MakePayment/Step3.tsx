import { Wizard, useWizard } from 'react-use-wizard';
import OfferAndDiscounts from '../HotelAndRoomDetails/OfferAndDiscounts';
import PriceSummary from '../HotelAndRoomDetails/PriceSummary';
import PaymentOptions from './PaymentOptions';
import { Button, Col, Row } from 'react-bootstrap';
import type { Step1Props } from '../types';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { useGuestCount } from '../../contexts/GuestCountContext';
import { toast } from 'react-toastify';
import { encrypt } from '@/utils/encryption'; // ✅ NEW

const Step3 = ({ control, roomData, hotelData }: Step1Props) => {
  const { previousStep } = useWizard();
  const { getValues, trigger } = useFormContext();
  const { guests } = useGuestCount();
  const navigate = useNavigate();

  const handleProceed = async () => {
    const isValid = await trigger([
      'cardNo',
      'expiryMonth',
      'expiryYear',
      'cvv',
      'cardHolderName',
    ]);

    if (!isValid) {
      toast.error('Please fill in all required payment fields before proceeding.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    const formData = getValues();
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

    // ✅ Encrypt card details
    const encryptedPayment = {
      payment_reference: `PAY-${Date.now()}`,
      encrypted_card_number: encrypt(formData.cardNo?.toString() || ''),
      encrypted_expiry: encrypt(`${formData.expiryMonth}/${formData.expiryYear}`),
      encrypted_cardholder_name: encrypt(formData.cardHolderName || ''),
    };

    const payload2 = {
      hotel: {
        name: hotelData.name,
        address: hotelData.address,
        rating: hotelData.rating,
        amenities: Object.keys(hotelData.amenities || {}),
        image_url: hotelData.cloudflare_image_url || '',
        description: hotelData.description,
      },
      room: {
        name: roomData.type || roomData.roomNormalizedDescription || 'Standard Room',
        amenities: roomData.amenities,
        price: roomData.price,
        images: roomData.images
      },
      customer: formData.customer,
      mainGuest: {
        title: formData.customer?.title || 'Mr',
        firstName: formData.customer?.first_name,
        lastName: formData.customer?.last_name,
        country: formData.customer?.country,
        email: formData.customer?.email,
        mobile: formData.customer?.phone_number,
      },
      booking: {
        id: bookingId,
        destination_id: '',
        hotel_id: hotelData.id,
        room_id: roomData.key,
        start_date: '',
        end_date: '',
        adults: guests.adults,
        children: guests.children,
        message_to_hotel: formData.special_request?.shortDescription || '',
        num_nights: formData.booking?.num_nights || 1,
        price: formData.booking?.price || 999.99,
        currency: formData.booking?.currency || 'SGD' // ✅ ADD THIS LINEx`
      },
      guests: allGuests,
      price: {
        totalPaid: roomData.price,
      },
      payment: encryptedPayment, // ✅ encrypted instead of masked
      start_date: formData.booking?.start_date,
      end_date: formData.booking?.end_date,
      specialRequests: formData.special_request?.shortDescription || '',
    };

    sessionStorage.setItem('booking_payload', JSON.stringify(payload2));
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
