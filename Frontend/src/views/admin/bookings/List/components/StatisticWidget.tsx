import { Card, ProgressBar } from 'react-bootstrap'
import type { StatisticType } from '../types'

const StatisticWidget = ({ statistic }: { statistic: StatisticType }) => {
  const { icon, progress, state, status, title, variant } = statistic
  const Icon = icon

  return (
    <Card className="card-body shadow p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="me-2">
          <span>{title}</span>
          <h3 className="mb-0 mt-2">{state}</h3>
        </div>

        <div className={`icon-lg rounded-circle flex-shrink-0 bg-${variant} bg-opacity-10 text-${variant} mb-0 flex-centered`}>
          <Icon />
        </div>
      </div>

      <ProgressBar now={progress} variant={variant} className={`progress-xs bg-${variant} bg-opacity-10 mb-2`} />
      {status}
    </Card>
  )
}

export default StatisticWidget
