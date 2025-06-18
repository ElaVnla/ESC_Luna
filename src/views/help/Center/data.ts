import { type IconType } from 'react-icons'
import { BsEmojiSmile, BsInfoCircle, BsLayers } from 'react-icons/bs'

type HelpCenterType = {
  title: string
  icon: IconType
  variant: string
  services: string[]
}

type HelpFAQType = {
  title: string
  description: string
}

type ArticleSlideType = {
  title: string
  total: number
  time: string
  like: number
  comment: number
}

const helpServices: HelpCenterType[] = [
  {
    title: 'Get Started',
    icon: BsEmojiSmile,
    variant: 'text-success',
    services: ['Gulp and Customization', 'Color Scheme and Logo Settings', 'Dark mode, RTL Version, and Lazy Load', 'Updates and Support'],
  },
  {
    title: 'Account Setup',
    icon: BsLayers,
    variant: 'text-warning',
    services: [
      'Connecting to your Account',
      'Edit your profile information',
      'Connecting to other Social Media Accounts',
      'Adding your profile picture',
      'Describing your store',
    ],
  },
  {
    title: 'Other Topics',
    icon: BsInfoCircle,
    variant: 'text-info',
    services: ['Security & Privacy', 'Author, Publisher & Admin Guides', 'Pricing plans', 'Sales Tax & Regulatory Fees', 'Promotions & Deals'],
  },
]

const helpFaqs: HelpFAQType[] = [
  {
    title: 'How can we help?',
    description:
      'Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived.',
  },
  {
    title: 'How to edit my Profile?',
    description:
      'What deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.',
  },
  {
    title: 'How much should I offer the sellers?',
    description:
      'Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.',
  },
  {
    title: 'Installation Guide',
    description:
      'What deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. At the moment, we only accept Credit/Debit cards and Paypal payments. Paypal is the easiest way to make payments online. While checking out your order. Be sure to fill in correct details for fast & hassle-free payment processing.',
  },
  {
    title: 'Additional Options and Services',
    description:
      'Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.',
  },
  {
    title: 'What is the difference between a college and a university?',
    description:
      'Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.',
  },
]

const articleSlides: ArticleSlideType[] = [
  {
    title: 'Upgrade Gulp 3 to Gulp 4 the gulp file.js workflow',
    total: 10,
    time: '15 min ago',
    like: 10,
    comment: 25,
  },
  {
    title: 'Supporting Customer With Inbox',
    total: 5,
    time: '25 min ago',
    like: 5,
    comment: 8,
  },
  {
    title: 'Sending Effective Emails to customer',
    total: 3,
    time: '2 hour ago',
    like: 2,
    comment: 5,
  },
  {
    title: 'Upgrade Gulp 3 to Gulp 4 the gulp file.js workflow  ',
    total: 10,
    time: '15 min ago',
    like: 10,
    comment: 25,
  },
  {
    title: 'Supporting Customer With Inbox',
    total: 5,
    time: '25 min ago',
    like: 5,
    comment: 8,
  },
  {
    title: 'Sending Effective Emails to customer',
    total: 3,
    time: '2 hour ago',
    like: 2,
    comment: 5,
  },
]

export { helpServices, helpFaqs, articleSlides }
