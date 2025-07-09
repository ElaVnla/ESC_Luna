import { NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import logoLightSvg from '@/assets/images/logo-light.svg'
import logoSvg from '@/assets/images/logo.svg'

type LogoBoxType = {
  imgClassName?: string
  onlyDark?: boolean
}

const LogoBox = ({ imgClassName, onlyDark }: LogoBoxType) => {
  return (
    <NavbarBrand as={Link} to="/">
      <img className={clsx(!onlyDark && 'light-mode-item', 'navbar-brand-item', imgClassName)} src={logoSvg} alt="logo" />
      {!onlyDark && <img className={clsx('dark-mode-item navbar-brand-item', imgClassName)} src={logoLightSvg} alt="logo" />}
    </NavbarBrand>
  )
}

export default LogoBox
