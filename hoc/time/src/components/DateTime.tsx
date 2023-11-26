import React from 'react'

const DateTime: React.FC<{date: string}> = ({ date }) => {
  return (
    <p className="date">{date}</p>
  )
}

export default DateTime