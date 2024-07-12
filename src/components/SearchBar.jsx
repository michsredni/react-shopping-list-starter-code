import { useState } from "react"

function SearchBar(props) {

  const handleInputChange = (event) => props.setsearchValue(event.target.value)

  return (
    <div className="search-bar container">
      
      <h2>Search Bar</h2>
        
      <input type="text" onChange={handleInputChange} value={props.searchValue}/>

    </div>
  )
}

export default SearchBar