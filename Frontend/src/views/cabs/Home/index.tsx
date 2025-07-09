import { PageMetaData } from '@/components'
import ActionBox from './components/ActionBox'
import Client from './components/Client'
import FAQs from './components/FAQs'
import FooterWithLinks from './components/FooterWithLinks'
import Hero from './components/Hero'
import TopNavBar from './components/TopNavBar'
import Vehicles from './components/Vehicles'
import WhyChooseUs from './components/WhyChooseUs'

const CabHome = () => {
  return (
    <>
      <PageMetaData title="Cab - Home" />

      <TopNavBar />

      <main>
        <Hero />
        <Vehicles />
        <WhyChooseUs />
        <ActionBox />
        <FAQs />
        <Client />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default CabHome
