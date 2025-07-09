import { LogoBox } from '@/components'
import { useScrollEvent } from '@/hooks'
import clsx from 'clsx'
import { Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Image, Navbar } from 'react-bootstrap'
import { BsCloudDownloadFill, BsGlobe } from 'react-icons/bs'
import { FaRightToBracket } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import flagfr from '@/assets/images/flags/fr.svg'
import flaggr from '@/assets/images/flags/gr.svg'
import flagsp from '@/assets/images/flags/sp.svg'
import flaguk from '@/assets/images/flags/uk.svg'

const TopNavBar9 = () => {
  const { scrollY } = useScrollEvent()
  return (
    <header className={clsx('navbar-light header-sticky', { 'header-sticky-on': scrollY >= 400 })}>
      <Navbar expand="xl">
        <Container>
          <LogoBox />
          <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto">
            <li className="nav-item align-items-center d-none d-sm-flex position-relative me-sm-3">
              <Link to="" className="icon-md btn btn-light mb-0 p-0 flex-shrink-0">
                <BsCloudDownloadFill />
              </Link>
              <div className="ms-2 d-none d-md-block">
                <h6 className="mb-0">
                  <Link to="" className="stretched-link">
                    Download the app
                  </Link>
                </h6>
                <p className="small mb-0 text-body">Get exciting welcome offers</p>
              </div>
            </li>
            <Dropdown className="nav-item">
              <DropdownToggle as={Link} className="arrow-none icon-md btn btn-light mb-0 p-0 flex-centered" to="">
                <BsGlobe />
              </DropdownToggle>
              <DropdownMenu className="dropdown-animation dropdown-menu-end min-w-auto mt-2" aria-labelledby="languageDropdown">
             
                  <DropdownItem className="me-4" href="">
                    <Image className="fa-fw me-2 country-flag" src={flaguk} />
                    English
                  </DropdownItem>{' '}
           
                  <DropdownItem className="me-4" href="">
                    <Image className="fa-fw me-2 country-flag" src={flagsp} />
                    Español
                  </DropdownItem>{' '}
            
                  <DropdownItem className="me-4" href="">
                    <Image className="fa-fw me-2 country-flag" src={flagfr} />
                    Français
                  </DropdownItem>{' '}
             
                  <DropdownItem className="me-4" href="">
                    <Image className="fa-fw me-2 country-flag" src={flaggr} />
                    Deutsch
                  </DropdownItem>{' '}
               
              </DropdownMenu>
            </Dropdown>
            <li className="nav-item ms-3">
              <Link to="/auth/sign-up" className="btn btn-sm btn-primary mb-0">
                <FaRightToBracket className="me-2" />
                Sign up
              </Link>
            </li>
          </ul>
        </Container>
      </Navbar>
    </header>
  )
}

export default TopNavBar9
