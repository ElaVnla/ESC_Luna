import { AppMenu, LogoBox } from '@/components'
import { useToggle } from '@/hooks'
import { useAuthContext, useLayoutContext, type LayoutState } from '@/states'
import { toSentenceCase } from '@/utils'
import clsx from 'clsx'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  ListGroup,
  ListGroupItem,
  Nav,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap'
import { type IconType } from 'react-icons'
import { BsBell, BsBookmarkCheck, BsCircleHalf, BsGear, BsHeart, BsInfoCircle, BsMoonStars, BsPower, BsSun } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import avatar1 from '@/assets/images/avatar/01.jpg'
import { notificationData } from '../data'

type ThemeModeType = {
  theme: LayoutState['theme']
  icon: IconType
}

const themeModes: ThemeModeType[] = [
  {
    icon: BsSun,
    theme: 'light',
  },
  {
    icon: BsMoonStars,
    theme: 'dark',
  },
  {
    icon: BsCircleHalf,
    theme: 'auto',
  },
]
const TopNavBar7 = () => {
  const { removeSession } = useAuthContext()
  const { theme, updateTheme } = useLayoutContext()
  const { isOpen, toggle } = useToggle()

  return (
    <Navbar expand="xl" className="navbar-light">
      <Container>
        <LogoBox />
        <button onClick={toggle} className="navbar-toggler ms-auto mx-3 p-0 p-sm-2" aria-expanded={isOpen} data-bs-toggle="collapse" type="button">
          <span className="navbar-toggler-animation">
            <span />
            <span />
            <span />
          </span>
        </button>

        <div className={'z-1 ms-auto'}>
          <AppMenu mobileMenuOpen={isOpen} showExtraPages />
        </div>

        <Nav as="ul" className="flex-row align-items-center list-unstyled ms-xl-auto">
          <Dropdown className="nav-item me-3">
            <DropdownToggle
              as={Link}
              to=""
              className="arrow-none nav-notification btn btn-light p-0 mb-0"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="outside"
            >
              <BsBell className=" fa-fw" />
            </DropdownToggle>
            <span className="notif-badge animation-blink" />
            <DropdownMenu align="end" className="dropdown-animation dropdown-menu-size-md shadow-lg p-0" renderOnMount>
              <Card className="bg-transparent">
                <CardHeader className="bg-transparent d-flex justify-content-between align-items-center border-bottom">
                  <h6 className="m-0">
                    Notifications <span className="badge bg-danger bg-opacity-10 text-danger ms-2">4 new</span>
                  </h6>
                  <Link className="small" to="">
                    Clear all
                  </Link>
                </CardHeader>

                <CardBody className="p-0">
                  <ListGroup className="list-group-flush list-unstyled p-2">
                    {(notificationData ?? []).map((notification, idx) => (
                      <li key={idx}>
                        <ListGroupItem  className={clsx('list-group-item-action rounded border-0 mb-1 p-3', { 'notif-unread': idx === 0 })}>
                          <h6 className="mb-2">{notification.title}</h6>
                          {notification.content && <p className="mb-0 small">{notification.content}</p>}
                          <span>{notification.time}</span>
                        </ListGroupItem>
                      </li>
                    ))}
                  </ListGroup>
                </CardBody>

                <CardFooter className="bg-transparent text-center border-top">
                  <Link to="" className="btn btn-sm btn-link mb-0 p-0">
                    See all incoming activity
                  </Link>
                </CardFooter>
              </Card>
            </DropdownMenu>
          </Dropdown>
          <Dropdown className="nav-item  dropdown" autoClose="outside">
            <DropdownToggle className="avatar avatar-sm p-0 arrow-none mb-0 border-0" id="profileDropdown" role="button">
              <img className="avatar-img rounded-2" src={avatar1} alt="avatar" />
            </DropdownToggle>
            <DropdownMenu align={'end'} className="dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown" renderOnMount>
              <li className="px-3 mb-3">
                <div className="d-flex align-items-center">
                  <div className="avatar me-3">
                    <img className="avatar-img rounded-circle shadow" src={avatar1} alt="avatar" />
                  </div>
                  <div>
                    <h6 className="h6 mt-2 mt-sm-0">Lori Ferguson</h6>
                    <p className="small m-0">example@gmail.com</p>
                  </div>
                </div>
              </li>
      
                <DropdownDivider />
              
                <DropdownItem>
                  <BsBookmarkCheck className=" fa-fw me-2" />
                  My Bookings
                </DropdownItem>
            
                <DropdownItem>
                  <BsHeart className=" fa-fw me-2" />
                  My Wishlist
                </DropdownItem>
            
                <DropdownItem>
                  <BsGear className=" fa-fw me-2" />
                  Settings
                </DropdownItem>
            
                <DropdownItem>
                  <BsInfoCircle className=" fa-fw me-2" />
                  Help Center
                </DropdownItem>
             
                <DropdownItem className="bg-danger-soft-hover" onClick={removeSession}>
                  <BsPower className=" fa-fw me-2" />
                  Sign Out
                </DropdownItem>
            
                <DropdownDivider />
           
              <li>
                <div className="nav-pills-primary-soft theme-icon-active d-flex justify-content-between align-items-center p-2 pb-0">
                  <span>Mode:</span>
                  {(themeModes ?? []).map((mode, idx) => {
                    const Icon = mode.icon
                    return (
                      <OverlayTrigger key={mode.theme + idx} overlay={<Tooltip>{toSentenceCase(mode.theme)}</Tooltip>}>
                        <button
                          onClick={() => updateTheme(mode.theme)}
                          type="button"
                          className={clsx('btn btn-link nav-link text-primary-hover mb-0 p-0', { active: theme === mode.theme })}
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-title="Light"
                        >
                          <Icon />
                        </button>
                      </OverlayTrigger>
                    )
                  })}
                </div>
              </li>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default TopNavBar7
