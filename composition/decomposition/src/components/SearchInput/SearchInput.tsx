import React from 'react'

type SearchInputProps = {
  handlerSearch: (event: React.FormEvent) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ handlerSearch }) => {
  return (
    <form onSubmit={handlerSearch}>
      <input type="text" />
      <input type="submit" value="Найти" />
    </form>
  )
}

export default SearchInput