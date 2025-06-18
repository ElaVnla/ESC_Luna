import { AppMenu } from '@/components'
import { useToggle } from '@/hooks'
import { type LayoutState, useAuthContext, useLayoutContext } from '@/states'
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
  Image,
  ListGroup,
  ListGroupItem,
  Navbar,
} from 'react-bootstrap'
import { type IconType } from 'react-icons'
import { BsBell, BsBookmarkCheck, BsCircleHalf, BsGear, BsHeart, BsInfoCircle, BsMoonStarsFill, BsPower, BsSunFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import { notificationData } from '../data'
import logoLight from '@/assets/images/logo-light.svg'
import avatar1 from '@/assets/images/avatar/01.jpg'

type ThemeModeType = {
  theme: LayoutState['theme']
  icon: IconType
}

const ThemeToggler = () => {
  const { theme, updateTheme } = useLayoutContext()

  const themeModes: ThemeModeType[] = [
    {
      icon: BsSunFill,
      theme: 'light',
    },
    {
      icon: BsMoonStarsFill,
      theme: 'dark',
    },
    {
      icon: BsCircleHalf,
      theme: 'auto',
    },
  ]

  return (
    <Dropdown className="nav-item ms-3">
      <DropdownToggle
        className="nav-notification lh-0 btn btn-light p-0 mb-0 arrow-none"
        type="button"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        data-bs-display="static"
      >
        <BsCircleHalf size={16} />
      </DropdownToggle>
      <DropdownMenu align={'end'} className="min-w-auto">
        {(themeModes ?? []).map((mode, idx) => {
          const Icon = mode.icon
          return (
            <li className="mb-1" key={idx}>
              <DropdownItem
                type="button"
                onClick={() => updateTheme(mode.theme)}
                className={clsx('d-flex align-items-center', { active: theme === mode.theme })}
              >
                <Icon size={16} className="me-1" />
                {toSentenceCase(mode.theme)}
              </DropdownItem>
            </li>
          )
        })}
      </DropdownMenu>
    </Dropdown>
  )
}

const TopNavBar6 = () => {
  const { isOpen, toggle } = useToggle()
  const { removeSession } = useAuthContext()
  return (
    <header className="header-transparent">
      <Navbar expand="xl" className="navbar navbar-dark">
        <Container>
          <Link className="navbar-brand" to="">
            <Image className="navbar-brand-item" src={logoLight} alt="logo" />
          </Link>
          <button
            onClick={toggle}
            className="navbar-toggler ms-auto me-3 p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-animation">
              <span />
              <span />
              <span />
            </span>
          </button>

          <AppMenu showExtraPages mobileMenuOpen={isOpen} />

          <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto">
            <Dropdown className="nav-item  ms-0 ms-md-3">
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
            <ThemeToggler />
            <Dropdown className="nav-item ms-3">
              <DropdownToggle as={Link} to="" className="arrow-none avatar avatar-sm p-0">
                <Image className="avatar-img rounded-2" src={avatar1} alt="avatar" />
              </DropdownToggle>
              <DropdownMenu align={'end'} className="dropdown-animation shadow pt-3" aria-labelledby="profileDropdown" renderOnMount>
                <li className="px-3 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="avatar me-3">
                      <Image className="avatar-img rounded-circle shadow" src={avatar1} alt="avatar" />
                    </div>
                    <div>
                      <h6 className="h6 mt-2 mt-sm-0 mb-1">Lori Ferguson</h6>
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
            
              </DropdownMenu>
            </Dropdown>
          </ul>
        </Container>
      </Navbar>
    </header>
  )
}

export default TopNavBar6
