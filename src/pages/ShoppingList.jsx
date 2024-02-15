import AddForm from "../components/AddForm";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

// this data is just for testing the initial rendering of data
import testProducts from "../assets/data/testProducts.json";

import { useState } from "react";

function ShoppingList() {

  const [ allProducts, setAllProducts ] = useState(testProducts) 
  // initial state. change to empty array when done with add functionality

  return (
    <div>

      <h1>Shopping List</h1>

      {/* all elements of the shopping list will be here */}
      
      {allProducts.map((eachProduct) => {
        return (
          <div className="product-card">
            <h3>{eachProduct.name}</h3>
            <p><b>Price:</b> {eachProduct.price}€</p>
            <p>{eachProduct.isPurchased === true ? "✅ Purchased" : "🟡 Pending"}</p>
          </div>
        )
      })}

    </div>
  )
}

export default ShoppingList