import React, { useContext } from 'react'
import useFetch from '../hooks/useFetch'
import { CartContext } from '../contexts/CartContext'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

export const Cart = () => {
  const { data, isLoading, error} = useFetch('https://fakestoreapi.com/products?limit=9')
  
  const { cart, addToCart, removeFromCart  } = useContext(CartContext)
  
  const CartContainer = styled.div`
  display: grid;
  justify-content: start;
  padding: 100px;
  `

  const CartItem = styled.div`
    display: flex;
    gap: 10px;
  `

  const ItemDesc = styled.div`
    div:first-child {
      font-weight: bold;
    }

  `

  const Quantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;

    span {
      margin-right: 10px;
    }

    button {
      overflow:hidden;
      text-align:center;
      height: 20px;
      padding: 5px;
      border: 1px solid black;
      border-radius: 20px;
      display:flex;
      justify-content:center;
      align-items: center;
    }
  `

  const CartImage = styled.img`
    max-width: 150px;
    max-height: 150px;
    object-fit: cover;
  `

  const StyledHeader = styled.h2`
    width: 100vw;
    text-align:center;
  `

  if (isLoading) return <div>loading...</div>

  if (error) return <div>{error}</div>

  if (!data || !Array.isArray(data)) return <div>No products available</div>


  return (
    <>
      <StyledHeader>Your Cart</StyledHeader>
      <CartContainer>
        {cart.length  ? (
          cart.map((item) => {
            const product = data.find((product) => product.id === item.id)
            return product ? (
              <CartItem key={product.id}>
                <CartImage src={product.image}></CartImage>
                <ItemDesc>
                  <div>{product.title}</div>
                  <Quantity>
                    <span>Quantity: {item.amount}</span>
                    <button onClick={() => removeFromCart(item.id)}><FontAwesomeIcon icon={faMinus} /></button>
                    <button onClick={() => addToCart(item.id)}><FontAwesomeIcon icon={faPlus} /></button>
                  </Quantity>
                </ItemDesc>
              </CartItem>
            ) : 'No Products Available'
          })
        ) : 'No items in cart'}
      </CartContainer>
    </>

  )
}
