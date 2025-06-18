import { Card, CardBody, Image, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { BsPencilSquare } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'
import { getUserMenuItems } from '@/helpers/menu'
import { FaSignOutAlt } from 'react-icons/fa'
import clsx from 'clsx'
import { useAuthContext } from '@/states'

import avatar1 from '@/assets/images/avatar/01.jpg'

const LeftPanel = () => {
  const { pathname } = useLocation()
  const { removeSession } = useAuthContext()
  const menuItems = getUserMenuItems()

  return (
    <Card className="bg-light w-100">
      <div className="position-absolute top-0 end-0 p-3">
        <OverlayTrigger overlay={<Tooltip>Edit profile</Tooltip>} placement="top">
          <span>
            <BsPencilSquare />
          </span>
        </OverlayTrigger>
      </div>
      <CardBody className="p-3">
        <div className="text-center mb-3">
          <div className="avatar avatar-xl mb-2">
            <Image className="avatar-img rounded-circle border border-2 border-white" src={avatar1} />
          </div>
          <h6 className="mb-0">Jacqueline Miller</h6>
          <Link to="" className="text-reset text-primary-hover small">
            hello@gmail.com
          </Link>
          <hr />
        </div>
        <ul className="nav nav-pills-primary-soft flex-column">
          {menuItems.map((item, idx) => {
            const Icon = item.icon
            const activeItem = item.url == pathname
            return (
              item.url &&
              Icon && (
                <li key={idx} className="nav-item">
                  <Link className={clsx('nav-link items-center', { active: activeItem })} to={item.url}>
                    <Icon className=" fa-fw me-2" />
                    {item.label}
                  </Link>
                </li>
              )
            )
          })}
          <li role="button" className="nav-item" onClick={removeSession}>
            <Link className="nav-link text-danger bg-danger-soft-hover" to="">
              <FaSignOutAlt className="me-2" />
              Sign Out
            </Link>
          </li>
        </ul>
      </CardBody>
    </Card>
  )
}

export default LeftPanel
