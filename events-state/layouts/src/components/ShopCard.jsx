import React from 'react'
import AddToCartButton from './AddToCartButton'

export default function ShopCard({ card }) {
  return (
    <li className='shop-card' style={{ backgroundImage: `url(${card.img})` }}>
      <div>
        <div>
          <h2>{card.name}</h2>
          <h3 >{card.color}</h3>
        </div>
        <div>
          <span>${card.price}</span>
          <AddToCartButton />
        </div>
      </div>
    </li>
  )
}
