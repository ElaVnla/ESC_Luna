import { AppMenu, LogoBox } from '@/components'
import { useScrollEvent, useToggle } from '@/hooks'
import { useLayoutContext, type LayoutState } from '@/states'
import { toSentenceCase } from '@/utils'
import clsx from 'clsx'
import { Alert, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Navbar } from 'react-bootstrap'
import { type IconType } from 'react-icons'
import { BsBrightnessHighFill, BsCircleHalf, BsMoonStarsFill, BsSearch } from 'react-icons/bs'
import { FaRightToBracket } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

type ThemeModeType = {
  theme: LayoutState['theme']
  icon: IconType
}

const themeModes: ThemeModeType[] = [
  {
    icon: BsBrightnessHighFill,
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

const TopNavBar5 = () => {
  const { scrollY } = useScrollEvent()
  const { isOpen, toggle } = useToggle()
  const { isOpen: showAlert, hide: hideToggle } = useToggle(true)
  const { theme, updateTheme } = useLayoutContext()

  return (
    <div>
      <Alert
        variant="warning"
        show={showAlert}
        className="py-2 m-0 bg-primary border-0 rounded-0 alert-dismissible fade show text-center overflow-hidden"
        role="alert"
      >
        <p className="text-white m-0">
          Traveling internationally? Get update information on COVID-19 travel guidance and restrictions
          <Link to="" className="btn btn-xs btn-dark ms-2 mb-0">
            Learn more!
          </Link>
        </p>
        <button type="button" onClick={hideToggle} className="btn-close btn-close-white opacity-9 p-3" data-bs-dismiss="alert" aria-label="Close" />
      </Alert>
      <header className={clsx('navbar-light header-sticky', { 'header-sticky-on': scrollY >= 400 })}>
        <Navbar expand="xl">
          <Container>
            <LogoBox />
            <button
              onClick={toggle}
              className="navbar-toggler ms-auto mx-3 me-xl-0 p-0 p-sm-1"
              type="button"
              aria-controls="navbarCollapse"
              aria-expanded={isOpen}
              data-bs-toggle="collapse"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-animation">
                <span />
                <span />
                <span />
              </span>
            </button>

            <AppMenu startBookingMenu showExtraPages mobileMenuOpen={isOpen} />

            <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto">
              <Dropdown className="nav-item dropdown px-2">
                <DropdownToggle as="button" className="btn btn-link text-warning lh-3 p-0 mb-0 arrow-none" type="button" aria-expanded="false">
                  <BsCircleHalf size={20} />
                </DropdownToggle>
                <DropdownMenu align={'end'} className="min-w-auto" aria-labelledby="bd-theme">
                  {(themeModes ?? []).map((mode, idx) => {
                    const Icon = mode.icon
                    return (
                      <li className={clsx(themeModes.length - 1 !== idx && 'mb-1')} key={mode.theme + idx}>
                        <DropdownItem
                          onClick={() => updateTheme(mode.theme)}
                          type="button"
                          className={clsx('d-flex align-items-center', { active: theme === mode.theme })}
                        >
                          <Icon />
                          &nbsp;&nbsp;
                          {toSentenceCase(mode.theme)}
                        </DropdownItem>
                      </li>
                    )
                  })}
                </DropdownMenu>
              </Dropdown>
              <Dropdown className="nav-item nav-search me-2" align={'end'}>
                <DropdownToggle
                  as={Link}
                  className="nav-link mb-0 py-0 arrow-none"
                  role="button"
                  to=""
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                  data-bs-display="static"
                >
                  <BsSearch className=" fs-5"> </BsSearch>
                </DropdownToggle>
                <DropdownMenu className="shadow rounded p-2" aria-labelledby="navSearch" renderOnMount>
                  <form className="input-group">
                    <input className="form-control border-primary" type="search" placeholder="Search..." aria-label="Search" />
                    <button className="btn btn-primary m-0" type="submit">
                      Search
                    </button>
                  </form>
                </DropdownMenu>
              </Dropdown>
              <li className="nav-item ms-2 d-none d-sm-block">
                <button className="btn btn-sm btn-primary-soft mb-0 items-center">
                  <FaRightToBracket className="me-2" />
                  Sign Up
                </button>
              </li>
            </ul>
          </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default TopNavBar5
