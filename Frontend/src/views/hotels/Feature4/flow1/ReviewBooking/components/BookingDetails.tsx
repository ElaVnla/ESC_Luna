import { Container } from 'react-bootstrap';
import { Wizard, useWizard } from 'react-use-wizard';
import Step1 from './HotelAndRoomDetails/Step1';
import Step2 from './UserAndSpecialRequest/Step2';
import Step3Wrapper from './MakePayment/step3Wrapper'; // payment step (now Step 4 in the wizard)
import { useForm, FormProvider } from 'react-hook-form';
import { useEffect, useState } from 'react';
import VerifyEmail from '../../VerifyEmail';

// Header component for the stepper navigation
const Header = () => {
  const { goToStep, activeStep } = useWizard();

  return (
    <div className="bs-stepper-header pb-6" role="tablist">
      {/* Step 1: Hotel & Room */}
      <div className={`step ${activeStep === 0 && 'active'}`} onClick={() => goToStep(0)}>
        <div className="text-center">
          <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger1" aria-controls="step-1">
            <span className="bs-stepper-circle">1</span>
          </button>
          <h6 className="bs-stepper-label d-none d-md-block">Hotel & Room</h6>
        </div>
      </div>
      <div className="line" />
      {/* Step 2: Guests */}
      <div className={`step ${activeStep === 1 && 'active'}`} onClick={() => goToStep(1)}>
        <div className="text-center">
          <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger2" aria-controls="step-2">
            <span className="bs-stepper-circle">2</span>
          </button>
          <h6 className="bs-stepper-label d-none d-md-block">Guests</h6>
        </div>
      </div>
      <div className="line" />
      {/* Step 3: Verify Email */}
      <div className={`step ${activeStep === 2 && 'active'}`}>
        <div className="text-center">
          <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger3" aria-controls="step-3">
            <span className="bs-stepper-circle">3</span>
          </button>
          <h6 className="bs-stepper-label d-none d-md-block">Verify Email</h6>
        </div>
      </div>
      <div className="line" />
      {/* Step 4: Make Payment */}
      <div className={`step ${activeStep === 3 && 'active'}`}>
        <div className="text-center">
          <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger4" aria-controls="step-4">
            <span className="bs-stepper-circle">4</span>
          </button>
          <h6 className="bs-stepper-label d-none d-md-block">Make Payment</h6>
        </div>
      </div>
    </div>
  );
};

// Main booking details component for the review booking flow
const BookingDetails = ({
  hotelData: propHotelData,
  roomData: propRoomData,
  hotelParams: propHotelParams,
}: {
  hotelData: any;
  roomData: any;
  hotelParams: any;
}) => {
  // Set up react-hook-form methods
  const methods = useForm({ mode: 'onBlur' });
  const { control } = methods;

  // Use props or fallback to sessionStorage for hotel, room, and params data
  const [hotelData] = useState(() =>
    propHotelData ??
    JSON.parse(sessionStorage.getItem('hotel_booking_details') || 'null')?.hotelData ??
    null
  );
  const [roomData] = useState(() =>
    propRoomData ??
    JSON.parse(sessionStorage.getItem('hotel_booking_details') || 'null')?.roomData ??
    null
  );
  const [hotelParams] = useState(() =>
    propHotelParams ??
    JSON.parse(sessionStorage.getItem('hotel_booking_details') || 'null')?.hotelParams ??
    null
  );

  // If any required data is missing, show error message
  if (!hotelData || !roomData || !hotelParams) {
    return (
      <div className="text-center mt-5">
        <h4>Missing booking data</h4>
        <p>Please start your booking again.</p>
      </div>
    );
  }

  // Render the booking wizard with all steps
  return (
    <FormProvider {...methods}>
      <section>
        <Container className="bs-stepper stepper-outline">
          <Wizard header={<Header />}>
            {/* Step 1: Hotel & Room Details */}
            <Step1 control={control} hotelData={hotelData} roomData={roomData} hotelParams={hotelParams} />
            {/* Step 2: Guest Details & Special Requests */}
            <Step2 control={control} hotelData={hotelData} roomData={roomData} hotelParams={hotelParams} />
            {/* Step 3: Email Verification */}
            <VerifyEmail />
            {/* Step 4: Payment */}
            <Step3Wrapper control={control} hotelData={hotelData} roomData={roomData} hotelParams={hotelParams} />
          </Wizard>
        </Container>
      </section>
    </FormProvider>
  );
};

export default BookingDetails;
