import React, { createContext, useState } from 'react'

const CartContext = createContext()


export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [cartTotalItems, setCartTotalItems] = useState(null)
  const [cartTotalPrice, setCartTotalPrice] = useState(null)

  const addToCart = (itemId) => {
    setCartTotalItems((prevTotal) => prevTotal + 1)
    setCart((prevCart) => {
      const itemExists = prevCart.find(item => item.id === itemId)
      console.log(cartTotalItems)

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

  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const toRemove = prevCart.findIndex((item) => item.id === itemId)
      setCartTotalItems((prevTotal) => prevTotal - 1)

      if (prevCart[toRemove].amount > 1) {
        prevCart[toRemove].amount -= 1
        return [...prevCart]
      }
      const newCart = prevCart.split(0, toRemove)
      newCart.concat(prevCart.split(toRemove + 1, prevCart.length))
      return [...newCart]
      
    })
  }

  return (
    <CartContext.Provider value={{cart,cartTotalPrice, cartTotalItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export {CartContext}