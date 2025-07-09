import img1 from '@/assets/images/category/hotel/resort/3by4/01.jpg'
import img2 from '@/assets/images/category/hotel/resort/3by4/02.jpg'
import img3 from '@/assets/images/category/hotel/resort/3by4/03.jpg'
import img4 from '@/assets/images/category/hotel/resort/3by4/04.jpg'
import img5 from '@/assets/images/category/hotel/resort/3by4/05.jpg'
import img6 from '@/assets/images/category/hotel/resort/3by4/06.jpg'
import img7 from '@/assets/images/category/hotel/resort/3by4/07.jpg'

import resort1 from '@/assets/images/category/hotel/resort/01.jpg'
import resort2 from '@/assets/images/category/hotel/resort/02.jpg'
import resort3 from '@/assets/images/category/hotel/resort/03.jpg'

import offer1 from '@/assets/images/offer/02.jpg'
import offer3 from '@/assets/images/offer/03.jpg'
import offer7 from '@/assets/images/offer/07.jpg'
import offer4 from '@/assets/images/offer/04.jpg'
import offer6 from '@/assets/images/offer/06.jpg'

import avatar9 from '@/assets/images/avatar/09.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'

type TestimonialType = {
  title: string
  description: string
  image: string
}

type RoomSlideType = {
  name: string
  description: string
  sqfoot: string
  sqm: string
  image: string
  feature: string[]
}

type MonthlyOfferType = {
  title: string
  image: string
}

type TestimonialReviewType = {
  name: string
  avatar: string
  description: string
}

const testimonialData: TestimonialType[] = [
  {
    title: 'Spa & Wellness',
    description: 'We focus a great deal on the understanding of behavioral psychology and influence',
    image: img1,
  },
  {
    title: 'Wedding & Romance',
    description: "Understand that theory alone isn't going to get the job done.",
    image: img2,
  },
  {
    title: 'Activities',
    description: 'Tolerably behavior may admit daughters offending effect wishes change way and any wanted.',
    image: img3,
  },
  {
    title: 'Event Calendar',
    description: 'Praise effect wishes change way and any wanted behavioral psychology and influence',
    image: img4,
  },
  {
    title: 'Dining',
    description: 'Focus a great deal on the understanding of behavioral psychology and influence',
    image: img5,
  },
  {
    title: 'Fitness Center',
    description: 'Praise effect wishes change way and any wanted.',
    image: img6,
  },
  {
    title: 'Shop',
    description: 'Do he it part more last in. We understand that theory is important',
    image: img7,
  },
]

const roomSlides: RoomSlideType[] = [
  {
    name: 'One Bedroom Ocean Suit',
    description: 'Lively use looked latter regard had. We understand that theory is important to build a solid foundation',
    sqfoot: '847-900',
    sqm: '79-84',
    image: resort1,
    feature: ['Ocean View', 'Living Roof', 'Outdoor Soaking Tub'],
  },
  {
    name: 'The Entertainment Suite',
    description: 'Lively use looked latter regard had. We understand that theory is important to build a solid foundation',
    sqfoot: '847-900',
    sqm: '79-84',
    image: resort3,
    feature: ['Ocean View', 'Living Roof', 'Private Deck'],
  },
  {
    name: 'The Penthouse Suite',
    description: 'Lively use looked latter regard had. We understand that theory is important to build a solid foundation',
    sqfoot: '789-850',
    sqm: '78-85',
    image: resort2,
    feature: ['Indoor Tub', 'Private Deck', 'Freestanding'],
  },
]

const monthlyOffers: MonthlyOfferType[] = [
  {
    title: 'Pass Holder Package',
    image: offer1,
  },
  {
    title: 'More Sun, More Fun',
    image: offer3,
  },
  {
    title: 'A Stay That Gives Back',
    image: offer7,
  },
  {
    title: 'Elevate Your Stay',
    image: offer4,
  },
  {
    title: 'Spa Package Offer',
    image: offer6,
  },
]

const testimonialReviewSlides: TestimonialReviewType[] = [
  {
    name: 'Lori Stevens',
    avatar: avatar9,
    description:
      'Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed in laughing',
  },
  {
    name: 'Carolyn Ortiz',
    avatar: avatar5,
    description: 'Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous an uncommonly do.',
  },
]

export { testimonialData, roomSlides, monthlyOffers, testimonialReviewSlides }
