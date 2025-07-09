import { Card } from 'react-bootstrap'
import type { StatisticType } from '../types'

const StatisticWidget = ({ statistic }: { statistic: StatisticType }) => {
  const { icon, state, title, variant } = statistic
  const Icon = icon
  return (
    <Card className={`card-body bg-${variant} bg-opacity-10 border border-${variant} border-opacity-25 p-4 h-100`}>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h4 className="mb-0">{state}</h4>
          <span className="h6 fw-light mb-0">{title}</span>
        </div>
        <div className={`icon-lg rounded-circle bg-${variant} text-white mb-0`}>
          <Icon size={24} />
        </div>
      </div>
    </Card>
  )
}

export default StatisticWidget
