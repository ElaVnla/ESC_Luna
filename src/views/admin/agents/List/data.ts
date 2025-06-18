import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import avatar7 from '@/assets/images/avatar/07.jpg'
import avatar8 from '@/assets/images/avatar/08.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'

export type AgentCardType = {
  name: string
  location: string
  totalListing: number
  rating: number
  image?: string
  textAvatar?: {
    label: string
    variant: string
  }
}

const agentsList: AgentCardType[] = [
  {
    name: 'Lori Stevens',
    location: 'Los Angeles, USA',
    totalListing: 4,
    rating: 4.5,
    image: avatar9,
  },
  {
    name: 'Carolyn Ortiz',
    location: 'New York, USA',
    totalListing: 2,
    rating: 4.3,
    image: avatar1,
  },
  {
    name: 'Helios Beach Resort',
    location: 'California, USA',
    totalListing: 3,
    rating: 3.9,
    textAvatar: {
      label: 'HB',
      variant: 'primary',
    },
  },
  {
    name: 'Dennis Barrett',
    location: 'London, England',
    totalListing: 5,
    rating: 4.2,
    image: avatar3,
  },
  {
    name: 'Park Plaza Lodge Hotel',
    location: 'Berlin, Germany',
    totalListing: 1,
    rating: 4.8,
    textAvatar: {
      label: 'PPL',
      variant: 'danger',
    },
  },
  {
    name: 'Jacqueline Miller',
    location: 'Hanover, Germany',
    totalListing: 2,
    rating: 4.1,
    image: avatar5,
  },
  {
    name: 'Amanda Reed',
    location: 'Tokyo, Japan',
    totalListing: 4,
    rating: 4.5,
    image: avatar6,
  },
  {
    name: 'Louis Ferguson',
    location: 'Yokohama, Japan',
    totalListing: 3,
    rating: 4,
    image: avatar7,
  },
  {
    name: 'Joan Wallace',
    location: 'Mumbai, India',
    totalListing: 2,
    rating: 5.0,
    image: avatar8,
  },
  {
    name: 'Dennis Stevens',
    location: 'Los Angeles, USA',
    totalListing: 4,
    rating: 4.5,
    image: avatar10,
  },
]

export { agentsList }
