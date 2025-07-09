import { PageMetaData } from '@/components'
import Footer from './components/Footer'
import Hero from './components/Hero'
import { useEffect } from 'react'
import TopNavBar4 from './components/TopNavBar4'

const Added = () => {
  useEffect(() => {
    document.body.classList.add('dashboard')

    return () => {
      document.body.classList.remove('dashboard')
    }
  })
  return (
    <>
      <PageMetaData title="Listings - Added" />

      <TopNavBar4 />

      <main>
        <Hero />
      </main>

      <Footer />
    </>
  )
}

export default Added
