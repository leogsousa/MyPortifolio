import React, { useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import Burger from './Burger'
import MenuContext from '../contexts/MenuContext';

const MenuContainer = styled.div`
  height: 20vh;
  background-color: #000;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  box-shadow: 0 0 2px 0 #69696977;
  @media only screen and (max-width: 690px) {
    div{
      display: none;
    }
    justify-content: space-between;
    height: 10vh;
  }
`
const MenuItem = styled.div`
  font-size: 20px;
  margin: 20px;
  cursor: pointer;
  transition: 1s;
`
const MenuLogo = styled.h2`
  margin: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 690px) {
    flex-direction: row;
    margin: 0 14px;
  }
`
const FirstName = styled.span`
  font-size: 100%;
  margin: 0;
  padding: 0;
  color: #0062cc;
  font-weight: 300;
  @media only screen and (max-width: 690px) {
    font-size: 30px;
    margin-right: 8px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 24px;
  }
`
const LastName = styled.span`
  font-size: 50px;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 690px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 24px;
  }
`
const ToogleMenu = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 2px 0 #69696977;
  @media only screen and (min-width: 690px) {
    display: none;
  }
`

function Menu() {
  const history = useHistory()
  const { showMenu, setShowMenu } = useContext(MenuContext);

  const goToHome = () => {
    history.push("/")
  }
  const goToAcquirements = () => {
    history.push("/acquirements")
  }
  const goToProjects = () => {
    history.push("/projects")
  }
  const goToContacts = () => {
    history.push("/contacts")
  }

  const showMenuItems = () => {
    setShowMenu(!showMenu)
  }

  console.log(showMenu)

  return (
    <MenuContainer>
      <MenuItem onClick={goToHome}><span>Home</span></MenuItem>
      <MenuItem onClick={goToAcquirements}><span>Acquirements</span></MenuItem>
      <MenuLogo>
        <FirstName>L E O N A R D O</FirstName>
        <LastName>GOMES</LastName>
      </MenuLogo>
      <MenuItem onClick={goToProjects}><span>Projects</span></MenuItem>
      <MenuItem onClick={goToContacts}><span>Contacts</span></MenuItem>
      <ToogleMenu onClick={showMenuItems}>
        <Burger></Burger>
      </ToogleMenu>
    </MenuContainer>
  )
}

export default Menu