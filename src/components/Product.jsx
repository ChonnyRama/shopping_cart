import React from 'react'
import styled from 'styled-components'

const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height:100%;
`;

const Image = styled.img`
width:250px;
max-height:400px;
object-fit: contain;
flex-grow:1;
`

const ProductButton = styled.button`
  background: gray;
  margin-top:auto;
`

const ProductInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

`



export const Product = ({data}) => {
  return (
    <StyledProduct>
      <Image src={data.image}></Image>
      <ProductInfo>
        <p>{data.title}</p>
        <p>${ data.price}</p>
      </ProductInfo>
      <ProductButton role="button">Add to Cart</ProductButton>
    </StyledProduct>
  )
}
