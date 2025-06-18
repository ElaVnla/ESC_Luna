import { Card } from 'react-bootstrap'
import type { StatisticType } from '../types'

const StatisticWidget = ({ statistic }: { statistic: StatisticType }) => {
  const { icon, state, title, variant } = statistic
  const Icon = icon
  return (
    <Card className={`card-body border border-${variant} bg-${variant} bg-opacity-10 border-opacity-25 p-4 h-100`}>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h3 className="mb-0 fw-bold">{state}</h3>
          <span className="mb-0 h6 fw-light">{title}</span>
        </div>
        <div className={`icon-lg rounded-circle flex-shrink-0 bg-${variant} text-white mb-0 flex-centered`}>
          <Icon size={19} />
        </div>
      </div>
    </Card>
  )
}

export default StatisticWidget
