import React, { useContext } from 'react';
import styled from 'styled-components';
import MenuContext from '../contexts/MenuContext';

export const StyledBurger = styled.button`
  position: absolute;
  right: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: #FFF;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ showMenu }) => showMenu ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ showMenu }) => showMenu ? '0' : '1'};
    }

    :nth-child(3) {
      transform: ${({ showMenu }) => showMenu ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media only screen and (min-width: 690px) {
    span{
      display: none;
    }
  }

`

const Burger = () => {
  const { showMenu } = useContext(MenuContext);

  return (
    <StyledBurger showMenu={showMenu} >
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

export default Burger;