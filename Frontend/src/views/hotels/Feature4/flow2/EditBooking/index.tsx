import { PageMetaData } from '@/components'
import FooterWithLinks from '@/components/FooterWithLinks'
import Hero from './components/Hero'
import TopNavBar4 from '@/layouts/UserLayout/TopNavBar'
import EditGuestDetails from './components/EditGuestDetails'
import { FormProvider, useForm } from 'react-hook-form'

const EditBooking = () => {
  const methods = useForm({
    defaultValues: {
      customer: {
        salutation: '',
        first_name: '',
        last_name: '',
        billing_address: '',
        email: '',
        phone_number: '',
      },
      guests: [],
    }
  })

  return (
    <>
      <PageMetaData title="Tour - Booking" />

      <TopNavBar4 />

      <FormProvider {...methods}>
        <main>
          <Hero />
          <EditGuestDetails />
        </main>
      </FormProvider>

      <FooterWithLinks />
    </>
  )
}

export default EditBooking
