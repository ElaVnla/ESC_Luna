import { PageMetaData } from '@/components'
import TopNavBar from '@/layouts/UserLayout/TopNavBar'
import Footer from '@/layouts/UserLayout/Footer'
import Hero from './components/Hero'
import FooterWithLinks from '@/components/FooterWithLinks'
import TwoFactorAuth from './components/TwoFactorAuth'
import { useWizard } from 'react-use-wizard'
import { Button } from 'react-bootstrap'

const VerifyEmail = () => {
  return (
    <>
      <PageMetaData title="Hotel - Review Booking" />

      <main>
        <TwoFactorAuth />
      </main>
    </>
  )
}

export default VerifyEmail
