import React, { createContext, useState } from 'react'

const CartContext = createContext()


export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

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
  }

  return (
    <CartContext.Provider value={{cart, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}
