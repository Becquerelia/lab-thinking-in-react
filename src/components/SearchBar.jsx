import React from 'react'

function SearchBar(props) {
  const {search, handleSearch, handleCheckbox} = props
  return (
    <div>
        <h1>Search</h1>
        <form>
          <input type="search" value={search} onChange={handleSearch}/>
          <input type="checkbox" name="checkbox" onChange={handleCheckbox}/> Only show products in stock
        </form>        
    </div>
  )
}

export default SearchBar