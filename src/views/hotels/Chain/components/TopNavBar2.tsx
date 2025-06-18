import { useToggle } from '@/hooks'
import { useLayoutContext, type LayoutState } from '@/states'
import { splitArray, toSentenceCase } from '@/utils'
import clsx from 'clsx'
import { Button, Col, Collapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Image, Navbar, Row } from 'react-bootstrap'
import { type IconType } from 'react-icons'
import {
  BsBriefcase,
  BsBrightnessHighFill,
  BsCircleHalf,
  BsFillPatchCheckFill,
  BsGlobe,
  BsGrid3X3Gap,
  BsInfoCircle,
  BsListUl,
  BsMoonStarsFill,
  BsPinMapFill,
} from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { hotelCategories, hotelDestinations, hotelFacilities, hotelTypes } from '../data'
import HotelsFilter from './HotelsFilter'

import bgImg5 from '@/assets/images/bg/05.jpg'
import frFlag from '@/assets/images/flags/fr.svg'
import grFlag from '@/assets/images/flags/gr.svg'
import spFlag from '@/assets/images/flags/sp.svg'
import ukFlag from '@/assets/images/flags/uk.svg'
import hotelLogoLight from '@/assets/images/logo-hotel-light.svg'
import hotelLogo from '@/assets/images/logo-hotel.svg'

type flag = {
  flagImg: string
  name: string
}

type ThemeModeType = {
  theme: LayoutState['theme']
  icon: IconType
}

const flags: flag[] = [
  {
    flagImg: ukFlag,
    name: 'English',
  },
  {
    flagImg: spFlag,
    name: 'Español',
  },
  {
    flagImg: frFlag,
    name: 'Français',
  },
  {
    flagImg: grFlag,
    name: 'Deutsch',
  },
]

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

const destinationChunks = splitArray(hotelDestinations, 2)

const TopNavBar2 = () => {
  const { theme, updateTheme } = useLayoutContext()
  const { isOpen, toggle } = useToggle()

  return (
    <div className="navbar-light py-3">
      <Navbar expand="lg">
        <div className="container d-block">
          <Row className="align-items-center">
            <Col xs={4}>
              <Link className="navbar-brand" to="/">
                <img className="light-mode-item navbar-brand-item d-inline h-40px h-md-60px" src={hotelLogo} alt="logo" />
                <img className="dark-mode-item navbar-brand-item d-inline h-40px h-md-60px" src={hotelLogoLight} alt="logo" />
              </Link>
            </Col>
            <Col xs={8}>
              <div className="align-items-center justify-content-end d-none d-lg-flex">
                <ul className="nav border-bottom">
                  <Dropdown as="li" className="nav-item">
                    <DropdownToggle
                      as={Link}
                      className="nav-link small pb-2 arrow-none"
                      role="button"
                      to=""
                      id="languageDropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <BsGlobe className="fa-fw me-2" />
                      Language
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-animation dropdown-menu-end min-w-auto" aria-labelledby="languageDropdown">
                      {flags.map((flag, idx) => {
                        return (
                          <li key={idx}>
                            <DropdownItem className="me-4">
                              <Image className="fa-fw me-2" height={13} width={20} src={flag.flagImg} />
                              {flag.name}
                            </DropdownItem>
                          </li>
                        )
                      })}
                    </DropdownMenu>
                  </Dropdown>
                  <li className="nav-item">
                    <Link to="/user/bookings" className="nav-link small pb-2">
                      <BsBriefcase className="me-2" />
                      My Trip
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/help/center" className="nav-link small pb-2">
                      <BsInfoCircle className="me-2" />
                      Help
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/auth/sign-in" className="nav-link small pb-2">
                      <FaRegUser className="me-2" />
                      Sign In or Login
                    </Link>
                  </li>
                  <Dropdown className="nav-item dropdown">
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
                </ul>
              </div>
              <div className="d-sm-flex align-items-center justify-content-end">
                <Collapse in={isOpen}>
                  <div className="navbar-collapse z-1" id="navbarCollapse">
                    <ul className="navbar-nav navbar-nav-scroll ms-auto">
                      <Dropdown as="li" className="nav-item dropdown-fullwidth">
                        <DropdownToggle
                          as={Link}
                          className="d-flex align-items-center gap-2 arrow-none nav-link"
                          to=""
                          id="hotelMenu"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Find a hotel
                          <FaChevronDown size={12} />
                        </DropdownToggle>
                        <DropdownMenu aria-labelledby="hotelMenu" renderOnMount>
                          <div className="container">
                            <Row className="g-4 justify-content-between p-lg-3">
                              <Col lg={5}>
                                <h6 className="mb-3">
                                  <BsPinMapFill className="text-primary me-2" />
                                  Destination
                                </h6>
                                <hr className="my-2" />
                                {destinationChunks.map((chunk, idx) => {
                                  return (
                                    <Row key={idx}>
                                      {chunk.map((item, idx) => {
                                        return (
                                          <Col lg={6} key={idx}>
                                            <ul className="list-unstyled">
                                              <li>
                                                <DropdownItem>{item}</DropdownItem>
                                              </li>
                                            </ul>
                                          </Col>
                                        )
                                      })}
                                    </Row>
                                  )
                                })}
                              </Col>
                              <Col lg={3}>
                                <h6 className="mb-3">
                                  <BsListUl className="text-primary me-2" />
                                  Hotel type
                                </h6>
                                <hr className="my-2" />
                                <ul className="list-unstyled">
                                  {hotelTypes.map((item, idx) => {
                                    return (
                                      <li key={idx}>
                                        <DropdownItem>{item}</DropdownItem>
                                      </li>
                                    )
                                  })}
                                </ul>
                              </Col>
                              <Col lg={3}>
                                <h6 className="mb-3">
                                  <BsGrid3X3Gap className="text-primary me-2" />
                                  Category
                                </h6>
                                <hr className="my-2" />
                                <ul className="list-unstyled">
                                  {hotelCategories.map((category, idx) => {
                                    const Icon = category.icon
                                    return (
                                      <li key={idx}>
                                        <DropdownItem>
                                          <Icon className="fa-fw me-2" />
                                          {category.name}
                                        </DropdownItem>
                                      </li>
                                    )
                                  })}
                                </ul>
                              </Col>
                              <Col xs={12} className="col-12">
                                <div
                                  className="card overflow-hidden"
                                  style={{
                                    backgroundImage: `url(${bgImg5})`,
                                    backgroundPosition: 'center left',
                                    backgroundSize: 'cover',
                                  }}
                                >
                                  <div className="bg-overlay bg-dark opacity-5" />
                                  <div className="card-body d-lg-flex justify-content-between align-items-center position-relative z-index-9">
                                    <div className="mb-3 mb-lg-0">
                                      <h5 className="text-white">Enjoy Great Times with us</h5>
                                      <ul className="list-inline">
                                        <li className="list-inline-item text-white me-2">
                                          <BsFillPatchCheckFill className=" me-1" />
                                          Get 1000 bonus points on every stay
                                        </li>
                                        <li className="list-inline-item text-white me-2">
                                          <BsFillPatchCheckFill className=" me-1" />
                                          Earn through Dec 15
                                        </li>
                                        <li className="list-inline-item text-white">
                                          <BsFillPatchCheckFill className=" me-1" />
                                          Redeem for free night and more
                                        </li>
                                      </ul>
                                    </div>
                                    <Button className="btn btn-white mb-0">Register Now</Button>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </DropdownMenu>
                      </Dropdown>
                      <Dropdown className="nav-item">
                        <DropdownToggle
                          as={Link}
                          to=""
                          className="d-flex align-items-center gap-1 nav-link arrow-none"
                          id="pagesFacilities"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Hotel Facilities
                          <FaChevronDown size={12} />
                        </DropdownToggle>
                        <DropdownMenu aria-labelledby="pagesFacilities" renderOnMount>
                          {hotelFacilities.map((item, idx) => {
                            return (
                              <li key={idx}>
                                <DropdownItem>{item}</DropdownItem>
                              </li>
                            )
                          })}
                        </DropdownMenu>
                      </Dropdown>
                    </ul>
                  </div>
                </Collapse>
                <div className="d-flex align-items-center justify-content-end">
                  <button
                    onClick={toggle}
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarCollapse"
                    data-bs-toggle="collapse"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-animation">
                      <span />
                      <span />
                      <span />
                    </span>
                    <span className="d-none d-sm-inline-block small">&nbsp;Menu</span>
                  </button>
                  <Dropdown placement="right-start" className="nav-item dropdown form-control-bg-light">
                    <DropdownToggle
                      className="btn btn-sm btn-primary mb-0 arrow-none d-flex align-items-center me-1"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-auto-close="outside"
                    >
                      Book a stay <FaChevronDown size={12} className="ms-1" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 mt-2">
                      <HotelsFilter />
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Navbar>
    </div>
  )
}

export default TopNavBar2
