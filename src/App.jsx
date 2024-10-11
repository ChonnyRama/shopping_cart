import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetch from './hooks/useFetch'
import styled from 'styled-components'
import { Product } from './components/Product'

const Loading = styled.div`
  font-size:5rem;
`

const MainHeader = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 50px;
`

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 40px;
`

function App() {
  const { data, isLoading, error } = useFetch('https://fakestoreapi.com/products?limit=9')
  
  return (
    <>
      <MainHeader role='heading'>Sample Shopfront</MainHeader>
      {isLoading && (
        <Loading>Loading...</Loading>
      )}
      {
        error && (
          <Loading>{error}</Loading>
        )
      }  
      {data && (
        <ProductContainer>
          {data.map((item, index) => (
            <Product
              key={index}
              data={item}
            />
          ))}
        </ProductContainer>
        
      )}
    </>
  )
}

export default App
