import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../contexts/CartContext';

const StyledNavbar = styled.div`
  display: flex;
  width: 95vw;
  justify-content: space-between;  
  position: fixed;
  top: 0;
  left:0;
  z-index:100;
  padding: 2rem;
  background-color: #43dfdb;
`;

const StyledLink = styled(Link)`
  color:black;
  position: relative;
`

const TotalItems = styled.span`
  position: absolute;
  color: white;
  height: 20px;
  width: 20px;
  top: -14px;
  left: 20px;
  color: black;
  background-color: white;
  border: 1px solid black;
  border-radius: 50%;
  font-size: .9rem;

`



export const Navbar = () => {
  const { cartTotalItems } = useContext(CartContext)
  return (
    <StyledNavbar >
      <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='cart' aria-label='cart'>
        <TotalItems>{ cartTotalItems }</TotalItems>
        <FontAwesomeIcon icon={faCartShopping} size="xl" />
      </StyledLink>
    </StyledNavbar>
  )
}
