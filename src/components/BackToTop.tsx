import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

const BackToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false)

  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setShowScrollTop(true)
    } else {
      setShowScrollTop(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={clsx('back-top', { 'back-top-show': showScrollTop })} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <FaArrowUpLong />
    </div>
  )
}

export default BackToTop
