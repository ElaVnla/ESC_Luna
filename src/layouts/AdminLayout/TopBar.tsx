import { useLayoutContext, type LayoutState, useAuthContext } from '@/states'
import { toSentenceCase } from '@/utils'
import clsx from 'clsx'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Collapse,
  Container,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Image,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap'
import { type IconType } from 'react-icons'
import {
  BsBell,
  BsBookmarkCheck,
  BsCircleHalf,
  BsGear,
  BsHeart,
  BsInfoCircle,
  BsList,
  BsMoonStarsFill,
  BsPower,
  BsSearch,
  BsSunFill,
} from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { useToggle } from '@/hooks'
import { Link } from 'react-router-dom'

import logoIcon from '@/assets/images/logo-icon.svg'
import avatar1 from '@/assets/images/avatar/01.jpg'
import { notificationData } from './data'

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
              <DropdownItem
                key={idx}
                type="button"
                onClick={() => updateTheme(mode.theme)}
                className={clsx('d-flex align-items-center mb-1', { active: theme === mode.theme })}>
                <Icon size={16} className="me-1" />
                {toSentenceCase(mode.theme)}
              </DropdownItem>
          )
        })}
      </DropdownMenu>
    </Dropdown>
  )
}

const TopBar = ({ toggle }: { toggle: () => void }) => {
  const { removeSession } = useAuthContext()
  const { isOpen: searchOpen, toggle: toggleSearch } = useToggle()

  return (
    <nav className="navbar top-bar navbar-light py-0 py-xl-3">
      <Container fluid className="p-0">
        <div className="d-flex align-items-center w-100">
          <div className="d-flex align-items-center d-xl-none">
            <Link className="navbar-brand" to="/">
              <Image className="navbar-brand-item h-40px" src={logoIcon} />
            </Link>
          </div>
          <div className="navbar-expand-xl sidebar-offcanvas-menu">
            <button
              onClick={toggle}
              className="navbar-toggler me-auto p-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasSidebar"
              aria-controls="offcanvasSidebar"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-bs-auto-close="outside"
            >
              <BsList className=" text-primary fa-fw" data-bs-target="#offcanvasMenu" />
            </button>
          </div>
          <div className="navbar-expand-lg ms-auto ms-xl-0">
            <button
              onClick={toggleSearch}
              className="navbar-toggler ms-auto p-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTopContent"
              aria-controls="navbarTopContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <BsSearch />
            </button>

            <Collapse in={searchOpen}>
              <div className="navbar-collapse w-100 z-index-1">
                <div className='nav-item w-100'>
                  <div className='nav my-3 my-xl-0 flex-nowrap align-items-center'>
                    <form className="position-relative w-100">
                      <input className="form-control bg-light pe-5" type="search" placeholder="Search" aria-label="Search" />
                      <button className="bg-transparent px-2 py-0 border-0 position-absolute top-50 end-0 translate-middle-y" type="submit">
                        <FaSearch className="mb-1 text-primary" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto">
            <ThemeToggler />

            <Dropdown className="nav-item ms-3">
              <DropdownToggle as={Link} to="" className="nav-notification btn btn-light p-0 mb-0 arrow-none">
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
            
                  {' '}
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
        </div>
      </Container>
    </nav>
  )
}

export default TopBar
