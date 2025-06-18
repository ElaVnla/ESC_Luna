import img1 from '@/assets/images/element/beach.svg'
import img2 from '@/assets/images/element/island.svg'
import img3 from '@/assets/images/element/pool.svg'
import img4 from '@/assets/images/element/camping.svg'
import img5 from '@/assets/images/element/cabin.svg'
import img6 from '@/assets/images/element/lake.svg'
import img7 from '@/assets/images/element/park.svg'
import img8 from '@/assets/images/element/cave.svg'
import img9 from '@/assets/images/element/surf.svg'
import img10 from '@/assets/images/element/farm.svg'
import img11 from '@/assets/images/element/tower.svg'
import img12 from '@/assets/images/element/desert.svg'

type TripCategoryType = {
  name: string
  image: string
}

const tripCategories: TripCategoryType[] = [
  {
    name: 'Beaches',
    image: img1,
  },
  {
    name: 'Islands',
    image: img2,
  },
  {
    name: 'Amazing Pools',
    image: img3,
  },
  {
    name: 'Camping',
    image: img4,
  },
  {
    name: 'Cabin',
    image: img5,
  },
  {
    name: 'Lake Front',
    image: img6,
  },
  {
    name: 'National Park',
    image: img7,
  },
  {
    name: 'Caves',
    image: img8,
  },
  {
    name: 'Surfing',
    image: img9,
  },
  {
    name: 'Farms',
    image: img10,
  },
  {
    name: 'Towers',
    image: img11,
  },
  {
    name: 'Desert',
    image: img12,
  },
]

export { tripCategories }
