import React from 'react'
import ShopCard from './ShopCard'

export default function CardsView({ cards }) {
  return (
      <ul className='cards-view'>
        {cards.map((card) => (
          <ShopCard card={card} />
        ))}
      </ul>
  )
}
