import clsx from 'clsx'
import { Card, OverlayTrigger, Popover, PopoverBody } from 'react-bootstrap'
import { BsArrowUp, BsInfoCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { StatisticType } from '../data'

const StatisticWidget = ({ statistic }: { statistic: StatisticType }) => {
  const { change, changeLabel, link, state, title, variant, tag } = statistic
  return (
    <Card className="card-body border p-4 h-100">
      <h6>
        {title}
        {tag && (
          <OverlayTrigger
            trigger="click"
            overlay={
              <Popover>
                <PopoverBody>{tag}</PopoverBody>{' '}
              </Popover>
            }
          >
            <span>
              <BsInfoCircleFill className="ms-1 bi small" />
            </span>
          </OverlayTrigger>
        )}
      </h6>
      <h2 className={variant}>{state}</h2>
      <p className="mb-2 items-center">
        <span className={clsx('me-1 items-center', tag ? 'text-primary' : 'text-danger')}>
          {change}
          {tag && <BsArrowUp />}
        </span>
        {changeLabel}
      </p>
      <div className="mt-auto text-primary-hover">
        <Link to="" className="text-decoration-underline p-0 mb-0">
          {link}
        </Link>
      </div>
    </Card>
  )
}

export default StatisticWidget
