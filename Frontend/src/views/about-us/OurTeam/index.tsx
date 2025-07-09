import { PageMetaData } from '@/components'
import ActionBox from './components/ActionBox'
import FooterWithLinks from './components/FooterWithLinks'
import Hero from './components/Hero'
import Teams from './components/Teams'
import TopNavBar11 from './components/TopNavBar11'

const OurTeam = () => {
  return (
    <>
      <PageMetaData title="Our Team" />

      <TopNavBar11 />

      <main>
        <Hero />
        <Teams />
        <ActionBox />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default OurTeam
