import { PageMetaData } from '@/components'
import ActionBox from './components/ActionBox'
import AllFAQs from './components/AllFAQs'
import FooterWithLinks from './components/FooterWithLinks'
import Hero from './components/Hero'
import TopNavBar11 from './components/TopNavBar11'

const FAQs = () => {
  return (
    <>
      <PageMetaData title="FAQs" />

      <TopNavBar11 />

      <main>
        <Hero />
        <AllFAQs />
        <ActionBox />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default FAQs
