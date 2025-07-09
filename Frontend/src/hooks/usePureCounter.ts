import PureCounter from '@srexi/purecounterjs'
import { useEffect } from 'react'

const usePureCounter = () => {
  useEffect(() => {
    new PureCounter()
  })
}

export default usePureCounter
