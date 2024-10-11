import React, { createContext, useState } from 'react'

const CartContext = createContext()


export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (itemId) => {
    
  }

  return (
    <CartContext.Provider value={{}}>
      {children}
    </CartContext.Provider>
  )
}
