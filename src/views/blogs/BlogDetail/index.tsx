import { PageMetaData } from '@/components'
import BlogDetails from './components/BlogDetails'
import FooterWithLinks from './components/FooterWithLinks'
import Hero from './components/Hero'
import TopNavBar11 from './components/TopNavBar11'

const BlogDetail = () => {
  return (
    <>
      <PageMetaData title="Blog Details" />

      <TopNavBar11 />

      <main>
        <Hero />
        <BlogDetails />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default BlogDetail
