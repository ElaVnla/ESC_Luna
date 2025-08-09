import { useWizard } from 'react-use-wizard';
import GuestDetails from './GuestDetails';
import MainGuestDetails from './MainGuestDetails';
import { Row, Col, Button } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Step1Props } from '../types';
import { useEffect } from 'react';

// ScrollToTop component to ensure the page starts at the top
const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

const Step2 = ({ control, hotelParams, hotelData, roomData }: Step1Props) => {
  const { previousStep, nextStep } = useWizard();
  const { getValues, trigger } = useFormContext();

  const handleNext = async () => {
    const totalGuests = hotelParams.guests
      .split('|')
      .reduce((acc: number, current: string) => acc + parseInt(current, 10), 0);

    const guestValidationFields = Array.from({ length: totalGuests - 1 }, (_, index) => [
      `guests[${index}].salutation`,
      `guests[${index}].first_name`,
      `guests[${index}].last_name`,
      `guests[${index}].email`,
      `guests[${index}].phone_number`,
      `guests[${index}].country`,
      `guests[${index}].date_of_birth`,
    ]).flat();

    const isValid = await trigger([
      'customer.salutation',
      'customer.first_name',
      'customer.last_name',
      'customer.billing_address',
      'customer.email',
      'customer.phone_number',
      'customer.country',
      'customer.date_of_birth',
      ...guestValidationFields,
    ]);

    if (!isValid) {
      toast.error('Please complete all required fields.');
      return;
    }

    // ✅ Save main guest + guest list + booking context to sessionStorage
    const formData = getValues();
    const guestInfo = {
      customer: formData?.customer ?? null,
      guests: formData?.guests ?? [],
    };

    try {
      sessionStorage.setItem('hotel_guest_info', JSON.stringify(guestInfo));
      console.log('Guest info saved to sessionStorage:', guestInfo);
      sessionStorage.setItem(
        'hotel_booking_details',
        JSON.stringify({ hotelData, roomData, hotelParams })
      );
    } catch (e) {
      console.error('Failed to write sessionStorage:', e);
    }

    // 👉 proceed to the Verify Email wizard step
    nextStep();
  };

  return (
    <div className="vstack gap-4">
      <ScrollToTop />
      <Row className="g-4">
        <Col xs={12}>
          <MainGuestDetails />
          <GuestDetails
            hotelParams={hotelParams}
            totalGuests={
              hotelParams.guests.split('|').reduce((acc: number, current: string) => acc + parseInt(current, 10), 0) - 1
            }
          />
        </Col>
      </Row>

      <div className="hstack gap-2 flex-wrap justify-content-between">
        <Button onClick={() => previousStep()} variant="secondary" className="mb-0">
          Previous
        </Button>
        <Button onClick={handleNext} variant="primary" className="mb-0">
          Verify Email
        </Button>
      </div>
    </div>
  );
};

export default Step2;
