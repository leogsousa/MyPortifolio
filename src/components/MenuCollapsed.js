import React, { useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import MenuContext from '../contexts/MenuContext';

const MenuContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0A0A0EEF;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 4;
  position: fixed;
  top: 0;
  padding-top: 10vh;
  box-sizing: border-box;
  transition: 1s;
  transform: ${({ showMenu }) => showMenu ? 'translateX(0)' : 'translateX(-100%)'};
`
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  transition: 1s;
  margin: 14px 0;
`

function MenuCollapsed() {
  const history = useHistory()
  const { showMenu, setShowMenu } = useContext(MenuContext);

  const goToHome = () => {
    history.push("/")
    setShowMenu(!showMenu)
  }
  const goToAcquirements = () => {
    history.push("/acquirements")
    setShowMenu(!showMenu)
  }
  const goToProjects = () => {
    history.push("/projects")
    setShowMenu(!showMenu)
  }
  const goToContacts = () => {
    history.push("/contacts")
    setShowMenu(!showMenu)
  }

  return (
    <MenuContainer showMenu={showMenu}>
      <MenuItem onClick={goToHome}>Home</MenuItem>
      <MenuItem onClick={goToAcquirements}>Acquirements</MenuItem>
      <MenuItem onClick={goToProjects}>Projects</MenuItem>
      <MenuItem onClick={goToContacts}>Contacts</MenuItem>
    </MenuContainer>
  )
}

export default MenuCollapsed