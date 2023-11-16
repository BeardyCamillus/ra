import React from 'react'
import AddToCartButton from './AddToCartButton'

export default function ShopItem({ item }) {
  return (
    <li className='shop-item'>
      <img src={item.img} />
      <h2 >{item.name}</h2>
      <h3 >{item.color}</h3>
      <span >${item.price}</span>
      <AddToCartButton />
    </li>
  )
}
