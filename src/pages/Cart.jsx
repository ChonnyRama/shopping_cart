import React from 'react'
import {useFetch} from '../hooks/useFetch'

export const Cart = () => {
  const {fetch, isLoading} = useFetch('https://fakestoreapi.com/products?limit=5')
  return (
    <div>Cart</div>
  )
}
