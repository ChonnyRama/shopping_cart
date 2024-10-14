import React, { createContext, useState } from 'react'

const CartContext = createContext()


export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [cartTotalItems, setCartTotalItems] = useState(0)
  const [cartTotalPrice, setCartTotalPrice] = useState(0)

  const addToCart = (itemId) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find(item => item.id === itemId)

      if (itemExists) {
        return prevCart.map(item => (
          item.id === itemId
            ? {...item, amount: item.amount + 1}
            : item
        ))
      }
      return [...prevCart, {id: itemId, amount: 1}]
    })
    setCartTotalItems((prevTotal) => prevTotal + 1)
  }

  const removeFromCart = (itemId) => {
    setCartTotalItems((prevTotal) => prevTotal > 1 ? prevTotal -1 : 0)
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === itemId)
      if (itemIndex === -1) return prevCart

      const updatedCart = [...prevCart]
      if (updatedCart[itemIndex].amount > 1) {
        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          amount: updatedCart[itemIndex].amount -1
        }
        return updatedCart
      } else {
        return updatedCart.filter((item, index) => index !== itemIndex)
      }
    })
  }

  return (
    <CartContext.Provider value={{cart,cartTotalPrice, cartTotalItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export {CartContext}