import { MenuContainer, MenuItem, MenuItemContainer } from "./styled-components"

import React from "react"

const Menu = () => {
  const menuItems = ["about", "experience", "contact"]
  const renderItem = (name: string) => {
    return (
      <MenuItemContainer key={name}>
        <MenuItem>{name}</MenuItem>
      </MenuItemContainer>
    )
  }

  return (
    <MenuContainer>
      {menuItems.map(menuItem => renderItem(menuItem))}
    </MenuContainer>
  )
}

export default Menu
