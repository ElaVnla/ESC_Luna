import { bookingHomeMenuItems } from '@/assets/data'
import { findAllParent, findMenuItem, getAppMenuItems, getMenuItemFromURL, type MenuItemType } from '@/helpers/menu'
import { buyLink, supportLink } from '@/states'
import clsx from 'clsx'
import { Fragment, useCallback, useEffect, useState } from 'react'
import { Collapse, Dropdown, DropdownDivider, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import { BsCloudDownloadFill, BsLifePreserver } from 'react-icons/bs'
import { FaAngleDown, FaChevronDown, FaEllipsis, FaHotel, FaSuitcaseRolling } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'

type SubMenus = {
  item: MenuItemType
  itemClassName?: string
  linkClassName?: string
  activeMenuItems?: Array<string>
  level: number
}

type AppMenuProps = {
  showExtraPages?: boolean
  startBookingMenu?: boolean
  mobileMenuOpen: boolean
  menuClassName?: string
}

const MenuItemWithChildren = ({ item, activeMenuItems, itemClassName, linkClassName, level }: SubMenus) => {
  const level1 = level === 1
  return (
    <Dropdown className={itemClassName} drop={level >= 2 ? 'end' : undefined}>
      <DropdownToggle as={Link} className={linkClassName} to="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {item.label}
        {level1 ? <FaChevronDown size={12} /> : <FaEllipsis size={14} />}
      </DropdownToggle>
      <DropdownMenu aria-labelledby="listingMenu" data-bs-popper="none" renderOnMount>
        {(item.children ?? []).map((child, idx) => (
          <Fragment key={idx + child.key + idx}>
            {child.children ? (
              <MenuItemWithChildren
                item={child}
                level={level + 1}
                activeMenuItems={activeMenuItems}
                itemClassName="dropdown-submenu"
                linkClassName={clsx('dropdown-item dropdown-toggle arrow-none d-flex align-items-center justify-content-between', {
                  active: activeMenuItems?.includes(child.key),
                })}
              />
            ) : (
              <MenuItem item={child} level={level + 1} linkClassName={clsx(activeMenuItems?.includes(child.key) && 'active')} />
            )}
          </Fragment>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

const MenuItem = ({ item, linkClassName, level }: SubMenus) => {
  return (
      <MenuItemLink item={item} linkClassName={linkClassName} level={level + 1} />
  )
}

const MenuItemLink = ({ item, linkClassName }: SubMenus) => {
  return (
    <DropdownItem as={Link} to={item.url ?? ''} target={item.target} className={linkClassName}>
      {item.label}
    </DropdownItem>
  )
}

const AppMenu = ({ showExtraPages, startBookingMenu, mobileMenuOpen, menuClassName }: AppMenuProps) => {
  const [activeMenuItems, setActiveMenuItems] = useState<string[]>([])

  const menuItems = getAppMenuItems()

  const { pathname } = useLocation()

  /**
   * activate the menuitems
   */
  const activeMenu = useCallback(() => {
    const matchingMenuItem = getMenuItemFromURL(menuItems, pathname)

    if (matchingMenuItem) {
      const activeMt = findMenuItem(menuItems, matchingMenuItem.key)
      if (activeMt) {
        setActiveMenuItems([activeMt.key, ...findAllParent(menuItems, activeMt)])
      }
    }
  }, [pathname, menuItems])

  useEffect(() => {
    activeMenu()
  }, [activeMenu, menuItems])

  return (
    <Collapse in={mobileMenuOpen} className="navbar-collapse">
      <div>
        {startBookingMenu && (
          <ul className="navbar-nav navbar-nav-scroll me-auto">
            <Dropdown className="nav-item">
              <DropdownToggle
                as={Link}
                className="nav-link rounded px-3 py-3 py-xl-0 arrow-none flex-centered gap-1"
                to=""
                id="categoryMenu"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="me-auto items-center gap-1">
                  <FaSuitcaseRolling /> Travelers
                </span>
                <FaAngleDown size={12} />
              </DropdownToggle>
              <DropdownMenu aria-labelledby="categoryMenu" renderOnMount>
                {(bookingHomeMenuItems ?? []).map((item, idx) => {
                  const Icon = item.icon ?? FaHotel
                  const activeItem = item.url == pathname
                  return (
                    <li className="mb-1" key={item.key + idx}>
                      <Link
                        to={item.url ?? ''}
                        className={clsx('dropdown-item bg-light-hover d-flex align-items-center rounded p-2', { active: activeItem })}
                      >
                        <div className="icon-md bg-primary bg-opacity-10 rounded text-primary flex-shrink-0">
                          <Icon />
                        </div>
                        <div className="ms-2">
                          <h6 className="mb-0">{item.label}</h6>
                          <p className="small mb-0 text-body">Small description here</p>
                        </div>
                      </Link>
                    </li>
                  )
                })}
              </DropdownMenu>
            </Dropdown>
          </ul>
        )}

        <ul className={clsx('navbar-nav navbar-nav-scroll me-auto', menuClassName)}>
          {(menuItems ?? []).map((item, idx) => {
            return (
              <Fragment key={item.key + idx}>
                {item.children ? (
                  <MenuItemWithChildren
                    item={item}
                    activeMenuItems={activeMenuItems}
                    level={1}
                    itemClassName="nav-item"
                    linkClassName={clsx('nav-link arrow-none d-flex align-items-center gap-1 justify-content-between', { active: activeMenuItems.includes(item.key) })}
                  />
                ) : (
                  <MenuItem item={item} level={1} linkClassName={clsx(activeMenuItems.includes(item.key) && 'active')} />
                )}
              </Fragment>
            )
          })}

          {showExtraPages && (
            <Dropdown className="nav-item">
              <DropdownToggle
                as={Link}
                className="nav-link arrow-none"
                to=""
                id="advanceMenu"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FaEllipsis />
              </DropdownToggle>
              <DropdownMenu className="min-w-auto" data-bs-popper="none" renderOnMount>
               
                  <DropdownItem href={supportLink}>
                    <BsLifePreserver className="text-warning fa-fw bi me-2" />
                    Support
                  </DropdownItem>
              
                  <DropdownDivider />
              
                  <DropdownItem href={buyLink} target="_blank">
                    <BsCloudDownloadFill className="text-success fa-fw bi me-2" />
                    Buy Booking!
                  </DropdownItem>
              
              </DropdownMenu>
            </Dropdown>
          )}
        </ul>
      </div>
    </Collapse>
  )
}

export default AppMenu
