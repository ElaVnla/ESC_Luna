import { PageMetaData } from '@/components'
import BlogList from './components/BlogList'
import FooterWithLinks from './components/FooterWithLinks'
import LatestArticle from './components/LatestArticle'
import Newsletter from './components/Newsletter'
import TopNavBar11 from './components/TopNavBar11'

const Blog = () => {
  return (
    <>
      <PageMetaData title="Blog" />

      <TopNavBar11 />

      <main>
        <BlogList />
        <LatestArticle />
        <Newsletter />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default Blog
