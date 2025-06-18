import { NavItem, NavLink } from 'react-bootstrap'
import { BsBriefcase, BsHouseDoor, BsPercent, BsPersonCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="navbar navbar-mobile">
      <ul className="navbar-nav">
        <NavItem>
          <NavLink active as={Link} to="/">
            <BsHouseDoor className=" fa-fw" />
            <span className="mb-0 nav-text">Home</span>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink as={Link} to="/user/bookings">
            <BsBriefcase className=" fa-fw" />
            <span className="mb-0 nav-text">My Trips</span>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink as={Link} to="/offer-detail">
            <BsPercent className=" fa-fw" />
            <span className="mb-0 nav-text">Offer</span>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink as={Link} to="/user/profile">
            <BsPersonCircle className=" fa-fw" />
            <span className="mb-0 nav-text">Account</span>
          </NavLink>
        </NavItem>
      </ul>
    </div>
  )
}

export default Footer
