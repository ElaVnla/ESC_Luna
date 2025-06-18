import { LogoBox } from '@/components'
import { useScrollEvent, useToggle } from '@/hooks'
import { useAuthContext, useLayoutContext, type LayoutState } from '@/states'
import { toSentenceCase } from '@/utils'
import clsx from 'clsx'
import {
  Container,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Image,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap'
import { type IconType } from 'react-icons'
import { BsBookmarkCheck, BsCircleHalf, BsGear, BsHeart, BsInfoCircle, BsMoonStars, BsPower, BsSun } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import HelpMenu from './HelpMenu'

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
  {
    icon: BsCircleHalf,
    theme: 'auto',
  },
]

const TopNavBar = () => {
  const { isOpen, toggle } = useToggle()
  const { theme, updateTheme } = useLayoutContext()
  const { removeSession } = useAuthContext()
  const { scrollY } = useScrollEvent()

  return (
    <header className={clsx('navbar-light header-sticky', { 'header-sticky-on': scrollY >= 400 })}>
      <Navbar expand="xl">
        <Container>
          <LogoBox />
          <button
            onClick={toggle}
            className="navbar-toggler ms-auto"
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

          <HelpMenu mobileMenuOpen={isOpen} />

          <Dropdown className="nav nav-item ms-2">
            <DropdownToggle as={Link} to="" className="arrow-none avatar avatar-sm p-0" href="">
              <Image className="avatar-img rounded-2" src={avatar1} alt="avatar" />
            </DropdownToggle>
            <DropdownMenu align={'end'} className="dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown" renderOnMount>
              <li className="px-3 mb-3">
                <div className="d-flex align-items-center">
                  <div className="avatar me-3">
                    <Image className="avatar-img rounded-circle shadow" src={avatar1} alt="avatar" />
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
        </Container>
      </Navbar>
    </header>
  )
}

export default TopNavBar
