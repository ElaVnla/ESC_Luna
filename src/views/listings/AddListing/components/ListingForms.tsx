import { yupResolver } from '@hookform/resolvers/yup'
import { Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

import { Wizard, useWizard } from 'react-use-wizard'

const Header = () => {
  const { goToStep,activeStep } = useWizard()

  return (
    <div className="bs-stepper-header pb-5" role="tablist">
      <div className={`step ${activeStep === 0 && 'active'}`} onClick={() => goToStep(0)}>
        <div className="text-center">
          <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger1" aria-controls="step-1">
            <span className="bs-stepper-circle">1</span>
          </button>
          <h6 className="bs-stepper-label d-none d-md-block">Basic Information</h6>
        </div>
      </div>
      <div className="line" />

      <div className={`step ${activeStep === 1 && 'active'}`} onClick={() => goToStep(1)}>
        <div className="text-center">
          <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger2" aria-controls="step-2">
            <span className="bs-stepper-circle">2</span>
          </button>
          <h6 className="bs-stepper-label d-none d-md-block">Detailed Information</h6>
        </div>
      </div>
      <div className="line" />

      <div className={`step ${activeStep === 2 && 'active'}`} onClick={() => goToStep(2)}>
        <div className="text-center">
          <button type="button" className="btn btn-link step-trigger mb-0" role="tab" id="steppertrigger3" aria-controls="step-3">
            <span className="bs-stepper-circle">3</span>
          </button>
          <h6 className="bs-stepper-label d-none d-md-block">Price &amp; Policy</h6>
        </div>
      </div>
    </div>
  )
}


const ListingForms = () => {

  const listingSchema = yup.object({
    listingName: yup.string().required('Please enter your listing name'),
    usageType: yup.string().required('Please select usage type'),
    shortDescription: yup.string().required('Please enter a short description'),
    thumbnailImage: yup.mixed().required('Thumbnail Image is required'),
  })

  const { control } = useForm({
    resolver: yupResolver(listingSchema),
  })

  return (
    <section>
      <Container>
        <div className="bs-stepper stepper-outline">
          <Wizard header={<Header />}>
            <Step1 control={control} />
            <Step2 control={control} />
            <Step3 control={control} />
          </Wizard>
        </div>
      </Container>
    </section>
  )
}

export default ListingForms
