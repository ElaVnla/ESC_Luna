import { type IconType } from 'react-icons'
import { BsLightningChargeFill, BsSendFill } from 'react-icons/bs'
import { FaRocket } from 'react-icons/fa'

type PricingType = {
  planName: string
  monthlyPrice: number
  yearlyPrice: number
  icon: IconType
  tag: string
  feature: {
    name: string
    available?: boolean
  }[]
}

type FAQType = {
  title: string
  description: string
}

const pricingPlans: PricingType[] = [
  {
    planName: 'Standard',
    monthlyPrice: 20,
    yearlyPrice: 570,
    icon: BsLightningChargeFill,
    tag: 'Most Popular',
    feature: [
      {
        name: 'Up to 05 users monthly',
        available: true,
      },
      {
        name: 'Free 5 host & domain',
        available: true,
      },
      {
        name: 'Custom infrastructure',
        available: true,
      },
      {
        name: 'Access to all our room',
        available: true,
      },
      {
        name: '24/7 dedicated Support',
        available: false,
      },
      {
        name: 'Unlimited updates',
        available: false,
      },
      {
        name: 'Landing pages & Web widgets',
        available: false,
      },
    ],
  },
  {
    planName: 'Professional',
    monthlyPrice: 59,
    yearlyPrice: 840,
    icon: FaRocket,
    tag: 'Recommended',
    feature: [
      {
        name: 'Up to 05 users monthly',
        available: true,
      },
      {
        name: 'Free 5 host & domain',
        available: true,
      },
      {
        name: 'Custom infrastructure',
        available: true,
      },
      {
        name: 'Access to all our room',
        available: true,
      },
      {
        name: '24/7 dedicated Support',
        available: true,
      },
      {
        name: 'Unlimited updates',
        available: false,
      },
      {
        name: 'Landing pages & Web widgets',
        available: false,
      },
    ],
  },
  {
    planName: 'Premium',
    monthlyPrice: 99,
    yearlyPrice: 999,
    icon: BsSendFill,
    tag: 'Best Value',
    feature: [
      {
        name: 'Up to 05 users monthly',
        available: true,
      },
      {
        name: 'Free 5 host & domain',
        available: true,
      },
      {
        name: 'Custom infrastructure',
        available: true,
      },
      {
        name: 'Access to all our room',
        available: true,
      },
      {
        name: '24/7 dedicated Support',
        available: true,
      },
      {
        name: 'Unlimited updates',
        available: true,
      },
      {
        name: 'Landing pages & Web widgets',
        available: true,
      },
    ],
  },
]

const pricingFAQs: FAQType[] = [
  {
    title: 'Do you provide customer support?',
    description:
      'Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected the resolving agreement perceived at an. Comfort reached gay perhaps chamber his six detract besides add.',
  },
  {
    title: 'What is your privacy policy?',
    description:
      'Two before narrow not relied how except moment myself Dejection assurance mrs led certainly So gate at no only none open Betrayed at properly it of graceful on Dinner abroad am depart ye turned hearts as me wished Therefore allowance too perfectly gentleman supposing man his.',
  },
  {
    title: 'Is there a money-back guarantee?',
    description:
      'Picture for attempt joy excited ten carried manners talking how. Suspicion neglected the resolving agreement perceived at an. Comfort reached gay perhaps chamber his six detract besides add.',
  },
  {
    title: "What's the difference between monthly and annual plans?",
    description:
      'Started several mistake joy say painful removed reached end. State burst think end are its. Arrived off she elderly beloved him affixed noisier yet. Tickets regard to up he hardly. View four has said do men saw find dear shy. Talent men wicket add garden.',
  },
  {
    title: 'How can I buy your software?',
    description:
      'Lose john poor same it case do year we Full how way even the sigh Extremely nor furniture fat questions now provision incommode preserved Our side fail to find like now Discovered traveling for insensible partiality unpleasing.',
  },
  {
    title: 'What happens after the trial ends?',
    description:
      'Preference any astonished unreserved Mrs. Prosperous understood Middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly.',
  },
]

export { pricingPlans, pricingFAQs }
