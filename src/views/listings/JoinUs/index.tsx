import { PageMetaData } from '@/components'
import ActionBox from './components/ActionBox'
import Benefits from './components/Benefits'
import Counter from './components/Counter'
import FooterWithLinks from './components/FooterWithLinks'
import Hero from './components/Hero'
import Testimonial from './components/Testimonial'
import TopNavBar4 from './components/TopNavBar4'

const JoinUs = () => {
  return (
    <>
      <PageMetaData title="Listings - Join Us" />

      <TopNavBar4 />

      <main>
        <Hero />
        <Counter />
        <Benefits />
        <Testimonial />
        <ActionBox />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default JoinUs
