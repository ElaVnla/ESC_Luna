import { Col, Container, Row } from 'react-bootstrap'
import { Wizard, useWizard } from 'react-use-wizard'
import HotelInformation from './HotelAndRoomDetails/HotelInformation'
import LoginAdvantages from './HotelAndRoomDetails/LoginAdvantages'
import OfferAndDiscounts from './HotelAndRoomDetails/OfferAndDiscounts'
import PriceSummary from './HotelAndRoomDetails/PriceSummary'
import PaymentOptions from './MakePayment/PaymentOptions'
import GuestDetails from './UserAndSpecialRequest/GuestDetails'
import Step1 from './HotelAndRoomDetails/Step1'
import Step2 from './UserAndSpecialRequest/Step2'
import Step3 from './MakePayment/Step3'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
//tonie added this 
import { FormProvider } from 'react-hook-form'


const Header = () => {

  const { goToStep, activeStep } = useWizard()

  return (
    
    <div className="bs-stepper-header pb-6" role="tablist">
      <div className={`step ${activeStep === 0 && 'active'}`} onClick={() => goToStep(0)}>
        <div className="text-center">
          <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger1" aria-controls="step-1">
            <span className="bs-stepper-circle">1</span>
          </button>
          <h6 className="bs-stepper-label d-none d-md-block">Hotel & Room Details</h6>
        </div>
      </div>
      <div className="line" />
      <div className={`step ${activeStep === 1 && 'active'}`} onClick={() => goToStep(1)}>
        <div className="text-center">
          <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger2" aria-controls="step-2">
            <span className="bs-stepper-circle">2</span>
          </button>
          <h6 className="bs-stepper-label d-none d-md-block">Guest Details</h6>
        </div>
      </div>
      <div className="line" />
      <div className={`step ${activeStep === 2 && 'active'}`} onClick={() => goToStep(2)}>
        <div className="text-center">
          <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger3" aria-controls="step-3">
            <span className="bs-stepper-circle">3</span>
          </button>
          <h6 className="bs-stepper-label d-none d-md-block">Make Payment</h6>
        </div>
      </div>
    </div>
  )
}

const BookingDetails = () => {

  const listingSchema = yup.object({
    listingName: yup.string().required('Please enter your listing name'),
    usageType: yup.string().required('Please select usage type'),
    shortDescription: yup.string().required('Please enter a short description'),
    thumbnailImage: yup.mixed().required('Thumbnail Image is required'),
  })

  // const { control } = useForm({
  //   resolver: yupResolver(listingSchema),
  // })

  const methods = useForm({ mode: 'onBlur' })
  const { control, handleSubmit, getValues } = methods


  return (
    <FormProvider {...methods} >
    <section>
      <Container className="bs-stepper stepper-outline">
        <Wizard header={<Header />}>
          <Step1 control={control} />
          <Step2 control={control} />
          <Step3 control={control} />
        </Wizard>
      </Container>
    </section>
    </FormProvider>
  )
}
export default BookingDetails
