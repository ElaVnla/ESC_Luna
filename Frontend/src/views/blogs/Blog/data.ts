import blog5 from '@/assets/images/blog/05.jpg'
import blog6 from '@/assets/images/blog/06.jpg'
import blog8 from '@/assets/images/blog/08.jpg'

type BlogType = {
  title: string
  date: string
  image: string
}

const blogs: BlogType[] = [
  {
    title: 'Bad habits that people in the business industry need to quit',
    date: 'Sep 01, 2022',
    image: blog5,
  },
  {
    title: 'Around the web: 20 fabulous info graphics about business',
    date: 'Sep 15, 2022',
    image: blog6,
  },
  {
    title: "Ten unconventional tips about startups that you can't learn from books",
    date: 'Sep 28, 2022',
    image: blog8,
  },
]

export { blogs }
