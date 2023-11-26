import React, { ReactNode } from 'react';

type CardProps = {
  image?: string,
  children: ReactNode
}

const Card: React.FC<CardProps> = ({ image, children }) => {
  return (
    <div className="card">
      {
        image &&
        <img src={image} className="card-img-top" alt=""/>
      }
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

export default Card