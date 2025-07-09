import { ADMIN_MENU_ITEMS, AGENT_MENU_ITEMS, APP_MENU_ITEMS, HELP_MENU_ITEMS, USER_PROFILE_MENU_ITEMS } from '@/assets/data'
import { type HTMLAttributeAnchorTarget } from 'react'
import { type IconType } from 'react-icons'

export type MenuItemType = {
  key: string
  label: string
  isTitle?: boolean
  url?: string
  target?: HTMLAttributeAnchorTarget
  children?: MenuItemType[]
  parentKey?: string
  icon?: IconType
}

export const getUserMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return USER_PROFILE_MENU_ITEMS
}

export const getAgentMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return AGENT_MENU_ITEMS
}

export const getAdminMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return ADMIN_MENU_ITEMS
}

export const getHelpMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return HELP_MENU_ITEMS
}

export const getAppMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return APP_MENU_ITEMS
}

export const findAllParent = (menuItems: MenuItemType[], menuItem: MenuItemType): string[] => {
  let parents: string[] = []
  const parent = findMenuItem(menuItems, menuItem.parentKey)

  if (parent) {
    parents.push(parent.key)
    if (parent.parentKey) {
      parents = [...parents, ...findAllParent(menuItems, parent)]
    }
  }
  return parents
}

export const getMenuItemFromURL = (items: MenuItemType | MenuItemType[], url: string): MenuItemType | undefined => {
  if (items instanceof Array) {
    for (const item of items) {
      const foundItem = getMenuItemFromURL(item, url)
      if (foundItem) return foundItem
    }
  } else {
    if (items.url == url) return items
    if (items.children != null) {
      for (const item of items.children) {
        if (item.children != null) {
          const foundItem = getMenuItemFromURL(item.children, url)
          if (foundItem) return foundItem
        } else if (item.url == url) return item
      }
    }
  }
}

export const findMenuItem = (menuItems: MenuItemType[] | undefined, menuItemKey: MenuItemType['key'] | undefined): MenuItemType | null => {
  if (menuItems && menuItemKey) {
    for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i].key === menuItemKey) {
        return menuItems[i]
      }
      const found = findMenuItem(menuItems[i].children, menuItemKey)
      if (found) return found
    }
  }
  return null
}
