import React from 'react'

export default function Toolbar({ filters, selected, onSelectFilter }) {

  return (
    <div>
      {filters.map(filter => {
        return <button onClick={onSelectFilter}>{filter}</button>
      })}
    </div>
  )
}
