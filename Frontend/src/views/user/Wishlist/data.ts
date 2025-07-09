import hotel1 from '@/assets/images/category/hotel/4by3/10.jpg'
import hotel2 from '@/assets/images/category/hotel/4by3/11.jpg'

export type WishCardType = {
  name: string
  address: string
  rating: number
  price: number
  image: string
}

const wishListCards: WishCardType[] = [
  {
    name: 'Pride moon Village Resort & Spa',
    address: '31J W Spark Street, California - 24578',
    rating: 4.5,
    price: 980,
    image: hotel1,
  },
  {
    name: 'Royal Beach Resort',
    address: 'Manhattan street, London - 24578',
    rating: 4.5,
    price: 540,
    image: hotel2,
  },
]

export { wishListCards }
