import { Card } from 'react-bootstrap'
import { type StatisticType } from '../data'
import clsx from 'clsx'

const StatisticsCard = ({ statistic }: { statistic: StatisticType }) => {
  const { icon, state, title, variant } = statistic
  const Icon = icon

  return (
    <Card className="card-body border">
      <div className="items-center">
        <div className={clsx('icon-xl rounded-3 text-white flex-centered', variant)}>
          <Icon />
        </div>
        <div className="ms-3">
          <h4>{state}</h4>
          <span>{title}</span>
        </div>
      </div>
    </Card>
  )
}

export default StatisticsCard
