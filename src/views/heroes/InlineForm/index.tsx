import { PageMetaData } from '@/components'
import FooterWithLinks from './components/FooterWithLinks'
import Hero from './components/Hero'
import TopNavBar8 from './components/TopNavBar8'

const InlineForm = () => {
  return (
    <>
      <PageMetaData title="Hero - Inline Form" />

      <TopNavBar8 />

      <main>
        <Hero />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default InlineForm
