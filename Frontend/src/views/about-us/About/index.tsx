import { PageMetaData } from '@/components'
import FooterWithLinks from './components/FooterWithLinks'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import OurTeam from './components/OurTeam'
import TopNavBar11 from './components/TopNavBar11'

const About = () => {
  return (
    <>
      <PageMetaData title="About us" />

      <TopNavBar11 />

      <main>
        <Hero />
        <OurStory />
        <OurTeam />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default About
