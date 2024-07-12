import { useState } from "react";

import AddForm from "../components/AddForm";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

// this data is just for testing the initial rendering of data
import testProducts from "../data/testProducts.json";

function ShoppingList() {

  const [ allProducts, setAllProducts ] = useState(testProducts) 
  // initial state. change to empty array when done with add functionality

  const [searchValue, setsearchValue] = useState("")

  return (
    <>

      <h1>Shopping List</h1>
      <AddForm allProducts={allProducts} setAllProducts={setAllProducts}/>

      <SearchBar searchValue={searchValue} setsearchValue={setsearchValue}/>

      <ProductList allProducts={allProducts} searchValue={searchValue}/>
    

    </>
  )
}

export default ShoppingList