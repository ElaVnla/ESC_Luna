import { type ReactNode } from 'react'
import { type IconType } from 'react-icons'
import { BsChat, BsCheckLg } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'

type ActivityType = {
  title: ReactNode
  date: string
  icon?: IconType
  variant?: string
  image?: string
}

const recentActivities: ActivityType[] = [
  {
    title: (
      <h6 className="fw-light m-0">
        Your listing{' '}
        <Link to="" className="text-primary">
          Courtyard by Marriott New York{' '}
        </Link>
        has been approved
      </h6>
    ),
    date: '2 Days ago',
    icon: BsCheckLg,
    variant: 'text-bg-success',
  },
  {
    title: (
      <h6 className="fw-light m-0">
        Louis Ferguson booked your <span className="fw-bold">Hotel Baljees Regency </span>Hotel room
      </h6>
    ),
    date: '15 Nov 2022',
    image: avatar4,
  },
  {
    title: (
      <h6 className="fw-light m-0">
        Someone left a review on <span className="fw-bold">Park Plaza Lodge Hotel </span> listing
      </h6>
    ),
    date: '13 Nov 2022',
    icon: BsChat,
    variant: 'text-bg-info',
  },
  {
    title: <h6 className="fw-light m-0">Your payment received successfully</h6>,
    date: '13 Nov 2022',
    icon: BsCheckLg,
    variant: 'text-bg-success',
  },
  {
    title: (
      <h6 className="fw-light m-0">
        Amanda Reed Cancel booking in{' '}
        <Link to="" className="text-primary">
          Courtyard by Marriott New York{' '}
        </Link>
        hotel
      </h6>
    ),
    date: '11 Nov 2022',
    image: avatar5,
  },
  {
    title: (
      <h6 className="fw-light m-0">
        Lori Stevens booked your <span className="fw-bold">Pride moon Village Resort &amp; Spa </span>Hotel room
      </h6>
    ),
    date: '10 Nov 2022',
    image: avatar9,
  },
]

export { recentActivities }
