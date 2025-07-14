import { PageMetaData } from '@/components'
import TopNavBar from '@/layouts/UserLayout/TopNavBar'
import Footer from '@/layouts/UserLayout/Footer'
import Hero from './components/Hero'
import FooterWithLinks from '@/components/FooterWithLinks'
import TwoFactorAuth from './components/TwoFactorAuth'

const VerifyEmail = () => {
  return (
    <>
      <PageMetaData title="Hotel - Review Booking" />

      <main>
        <TopNavBar />
        <Hero />
        <TwoFactorAuth />
      </main>

      <FooterWithLinks />
      <Footer />
    </>
  )
}

export default VerifyEmail
