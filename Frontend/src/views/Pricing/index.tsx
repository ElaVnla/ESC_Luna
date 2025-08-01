import { PageMetaData } from '@/components'
import ActionBox from './components/ActionBox'
import Companies from './components/Companies'
import PricingFAQs from './components/PricingFAQs'
import PricingPlans from './components/PricingPlans'
import TopNavBar11 from './components/TopNavBar11'

const Pricing = () => {
  return (
    <>
      <PageMetaData title="Pricing" />

      <TopNavBar11 />

      <main>
        <PricingPlans />
        <Companies />
        <PricingFAQs />
        <ActionBox />
      </main>
    </>
  )
}

export default Pricing
