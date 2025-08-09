import { Container } from 'react-bootstrap';
import { Wizard, useWizard } from 'react-use-wizard';
import Step1 from './HotelAndRoomDetails/Step1';
import Step2 from './UserAndSpecialRequest/Step2';
import Step3Wrapper from './MakePayment/step3Wrapper'; // payment step (now Step 4 in the wizard)
import { useForm, FormProvider } from 'react-hook-form';
import { useEffect, useState } from 'react';
import VerifyEmail from '../../VerifyEmail';

const Header = () => {
  const { goToStep, activeStep } = useWizard();

  return (
    <div className="bs-stepper-header pb-6" role="tablist">
      <div className={`step ${activeStep === 0 && 'active'}`} onClick={() => goToStep(0)}>
        <div className="text-center">
          <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger1" aria-controls="step-1">
            <span className="bs-stepper-circle">1</span>
          </button>
          <h6 className="bs-stepper-label d-none d-md-block">Hotel & Room</h6>
        </div>
      </div>
      <div className="line" />
      <div className={`step ${activeStep === 1 && 'active'}`} onClick={() => goToStep(1)}>
        <div className="text-center">
          <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger2" aria-controls="step-2">
            <span className="bs-stepper-circle">2</span>
          </button>
          <h6 className="bs-stepper-label d-none d-md-block">Guests</h6>
        </div>
      </div>
      <div className="line" />
      <div className={`step ${activeStep === 2 && 'active'}`}>
        <div className="text-center">
          <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger3" aria-controls="step-3">
            <span className="bs-stepper-circle">3</span>
          </button>
          <h6 className="bs-stepper-label d-none d-md-block">Verify Email</h6>
        </div>
      </div>
      <div className="line" />
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

const BookingDetails = ({
  hotelData: propHotelData,
  roomData: propRoomData,
  hotelParams: propHotelParams,
}: {
  hotelData: any;
  roomData: any;
  hotelParams: any;
}) => {
  const methods = useForm({ mode: 'onBlur' });
  const { control } = methods;

  // if these are also saved in session, keep the props as defaults:
  const [hotelData] = useState(() => propHotelData ?? JSON.parse(sessionStorage.getItem('hotel_booking_details') || 'null')?.hotelData ?? null);
  const [roomData] = useState(() => propRoomData ?? JSON.parse(sessionStorage.getItem('hotel_booking_details') || 'null')?.roomData ?? null);
  const [hotelParams] = useState(() => propHotelParams ?? JSON.parse(sessionStorage.getItem('hotel_booking_details') || 'null')?.hotelParams ?? null);

  if (!hotelData || !roomData || !hotelParams) {
    return (
      <div className="text-center mt-5">
        <h4>Missing booking data</h4>
        <p>Please start your booking again.</p>
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <section>
        <Container className="bs-stepper stepper-outline">
          <Wizard header={<Header />}>
            <Step1 control={control} hotelData={hotelData} roomData={roomData} hotelParams={hotelParams} />
            <Step2 control={control} hotelData={hotelData} roomData={roomData} hotelParams={hotelParams} />
            {/* NEW: Email verification is step 3 in the wizard */}
            <VerifyEmail />
            {/* Payment is now step 4 in the wizard */}
            <Step3Wrapper control={control} hotelData={hotelData} roomData={roomData} hotelParams={hotelParams} />
          </Wizard>
        </Container>
      </section>
    </FormProvider>
  );
};

export default BookingDetails;
