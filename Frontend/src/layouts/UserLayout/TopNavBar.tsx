import { AppMenu, LogoBox } from '@/components'
import { useScrollEvent, useToggle } from '@/hooks'
import { useAuthContext, useLayoutContext, type LayoutState } from '@/states'
import { toSentenceCase } from '@/utils'
import clsx from 'clsx'
import {
  Button,
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
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap'
import { type IconType } from 'react-icons'
import { BsBell, BsBookmarkCheck, BsCircleHalf, BsGear, BsHeart, BsInfoCircle, BsLightningCharge, BsMoonStars, BsPower, BsSun } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { notificationData } from './data'

import avatar1 from '@/assets/images/avatar/01.jpg'

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
  // {
  //   icon: BsCircleHalf,
  //   theme: 'auto',
  // },
]

const TopNavBar = () => {
  const { scrollY } = useScrollEvent()
  const { isOpen, toggle } = useToggle()
  const { theme, updateTheme } = useLayoutContext()

  return (
    <header className={clsx('navbar-light header-sticky', { 'header-sticky-on': scrollY >= 400 })}>
      <Navbar expand="lg">
        <Container>
          <LogoBox />
          {/* This the burger menu when website size change */}
          <button
            onClick={toggle}
            className="navbar-toggler ms-auto mx-3 me-md-0 p-0 p-sm-2"
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

          {/* <AppMenu mobileMenuOpen={isOpen} /> */}
          <ul className="navbar-nav navbar-nav-scroll ms-auto">
            <li className="nav-item">
              <Link to="/hotels/list" className="nav-link">
                View Hotels
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/hotels/verify-booking" className="nav-link">
                My Booking
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center ms-3">
                <div className="d-flex gap-2">
                  {themeModes.map((mode, idx) => {
                    const Icon = mode.icon
                    return (
                      <OverlayTrigger key={mode.theme + idx} overlay={<Tooltip>{toSentenceCase(mode.theme)}</Tooltip>}>
                        <button
                          onClick={() => updateTheme(mode.theme)}
                          type="button"
                          className={clsx('btn btn-sm btn-light text-primary-hover', {
                            active: theme === mode.theme,
                            'border-primary': theme === mode.theme,
                          })}
                        >
                          <Icon />
                        </button>
                      </OverlayTrigger>
                    )
                  })}
                </div>
              </li>

          </ul>
        </Container>
      </Navbar>
    </header>
  )
}

export default TopNavBar