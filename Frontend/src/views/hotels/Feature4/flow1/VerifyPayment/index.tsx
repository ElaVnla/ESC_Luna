import { PageMetaData } from '@/components'
import TopNavBar from '@/layouts/UserLayout/TopNavBar'
import Footer from '@/layouts/UserLayout/Footer'
import Hero from './components/Hero'
import FooterWithLinks from '@/components/FooterWithLinks'
import { Verify } from 'crypto'
import PaynebtSuccessCard from './components/PaymentSuccessCard'

const VerifyPayment = () => {
  return (
    <>
      <PageMetaData title="Hotel - Review Booking" />

      <main>
        <TopNavBar />
        <Hero />
        <PaynebtSuccessCard />
      </main>

      <FooterWithLinks />
      <Footer />
    </>
  )
}

export default VerifyPayment
