import vehicle1 from '@/assets/images/category/cab/seadan.svg'
import vehicle2 from '@/assets/images/category/cab/micro.svg'
import vehicle3 from '@/assets/images/category/cab/suv.svg'
import vehicle4 from '@/assets/images/category/cab/suv-2.svg'
import vehicle5 from '@/assets/images/category/cab/pickup.svg'
import vehicle6 from '@/assets/images/category/cab/coupe.svg'
import { type IconType } from 'react-icons'
import { BsLifePreserver, BsLightningFill } from 'react-icons/bs'
import { FaCar, FaLeaf, FaWheelchair, FaWifi } from 'react-icons/fa6'

type CabVehicleType = {
  image: string
  name: string
  availableCar: number
}

type FeatureType = {
  icon: IconType
  variant: string
  title: string
  description: string
}

type FAQType = {
  title: string
  description: string
}

export type NotificationType = {
  title: string
  content?: string
  time: string
}

export const notificationData: NotificationType[] = [
  {
    title: 'New! Booking flights from New York ✈️',
    content: 'Find the flexible ticket on flights around the world. Start searching today',
    time: '05 Feb 2024',
  },
  {
    title: 'Sunshine saving are here 🌞 save 30% or more on a stay',
    time: '24 Aug 2024',
  },
]

const cabVehicles: CabVehicleType[] = [
  {
    image: vehicle1,
    name: 'Sedan',
    availableCar: 6,
  },
  {
    image: vehicle2,
    name: 'Micro',
    availableCar: 8,
  },
  {
    image: vehicle3,
    name: 'Micro',
    availableCar: 8,
  },
  {
    image: vehicle4,
    name: 'CUV',
    availableCar: 4,
  },
  {
    image: vehicle5,
    name: 'Pick up',
    availableCar: 3,
  },
  {
    image: vehicle6,
    name: 'Coupe',
    availableCar: 9,
  },
]

const cabsFeatures: FeatureType[] = [
  {
    title: 'Advance Booking',
    description: 'Happiness prosperous impression had conviction For every delay in they Extremity now.',
    variant: 'bg-primary text-primary',
    icon: BsLightningFill,
  },
  {
    title: 'Economical Trip',
    description: 'Extremity now strangers contained breakfast him discourse additions Sincerity.',
    variant: 'bg-success text-success',
    icon: FaLeaf,
  },
  {
    title: 'Secure and Safer',
    description: 'Perpetual extremity now strangers contained breakfast him discourse additions.',
    variant: 'bg-warning text-warning',
    icon: BsLifePreserver,
  },
  {
    title: 'Vehicle Options',
    description: 'The Prosperous impression had conviction For every delay in they Extremity now',
    variant: 'bg-danger text-danger',
    icon: FaCar,
  },
  {
    title: 'Cab Entertainment',
    description: 'Extremity now strangers contained breakfast him discourse additions Sincerity.',
    variant: 'bg-orange text-orange',
    icon: FaWifi,
  },
  {
    title: 'Polite Driver',
    description: 'Perpetual extremity now strangers contained breakfast him discourse additions.',
    variant: 'bg-info text-info',
    icon: FaWheelchair,
  },
]

const faqContents: FAQType[] = [
  {
    title: 'How Does it Work?',
    description:
      'Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived.',
  },
  {
    title: 'What are monthly tracked users?',
    description:
      'What deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.',
  },
  {
    title: 'What if I go with my prepaid monthly',
    description:
      'Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.',
  },
  {
    title: "What's the difference between cabs and taxi",
    description:
      'What deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. At the moment, we only accept Credit/Debit cards and Paypal payments. Paypal is the easiest way to make payments online. While checking out your order. Be sure to fill in correct details for fast & hassle-free payment processing.',
  },
  {
    title: 'How can I check the fare for my Booking ride?',
    description:
      'Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.',
  },
  {
    title: "Do and Don'ts - Tips for a Safe Trip",
    description:
      'Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.',
  },
]

export { cabVehicles, cabsFeatures, faqContents }
