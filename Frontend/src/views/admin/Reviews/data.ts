import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar7 from '@/assets/images/avatar/07.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'

export type ReviewType = {
  name: string
  date: string
  rating: number
  reviewOn: string
  description: string
  image: string
}

const userReviews: ReviewType[] = [
  {
    name: 'Jacqueline Miller',
    date: '21 Dec 2022',
    rating: 4,
    reviewOn: 'Deluxe Pool View with Breakfast',
    description:
      'Far advanced settling say finished raillery. Offered chiefly farther Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed and in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling chiefly cordial in doing.',
    image: avatar9,
  },
  {
    name: 'Dennis Barrett',
    date: '18 Dec 2022',
    rating: 4.5,
    reviewOn: 'Superior Room',
    description:
      'Delivered dejection necessary objection do Mr prevailed. Mr feeling chiefly cordial in doing. Water timed folly right aware if oh truth. Large above be to means. Dashwood does provide stronger is.',
    image: avatar2,
  },
  {
    name: 'Louis Ferguson',
    date: '17 Dec 2022',
    rating: 4.5,
    reviewOn: ' Premium Room With Balcony',
    description:
      'Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons. Preference any astonished unreserved. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh truth. Large above be to means. Dashwood does provide stronger is.',
    image: avatar4,
  },
  {
    name: 'Amanda Reed',
    date: '15 Dec 2022',
    rating: 4.5,
    reviewOn: 'Studio Suite King',
    description:
      'Preference any astonished unreserved Mrs. Prosperous understood Middletons. Preference any astonished unreserved. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh truth. Large above be to means. Dashwood does provide stronger is.',
    image: avatar5,
  },
  {
    name: 'Billy Vasquez',
    date: '12 Dec 2022',
    rating: 4.5,
    reviewOn: 'Studio Suite King',
    description:
      'Mr feeling does chiefly cordial in do. Preference any astonished unreserved. Delivered dejection necessary objection do Mr prevailed. Water timed folly right aware if oh truth. Large above be to means. Dashwood does provide stronger is.',
    image: avatar7,
  },
]

export { userReviews }
