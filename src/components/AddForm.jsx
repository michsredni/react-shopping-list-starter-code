import { useState } from "react"

function AddForm(props) {

  const [nameInputValue, setnameInputValue] = useState("")
  const [price, setPrice] = useState(0)

  const handleNameChange = (event) => {
  console.log(event.target.value)

  let inputValue = event.target.value

  setnameInputValue(inputValue)
  }
  const handlePriceChange = (event) => setPrice (event.target.value)
  const handleAddProduct = (event) => {
    event.preventDefault() //detener cualquier ejecución automatica del formulario. Esto pasa cuando se tiene un botón en el html dentro del <form/>

    //agregando un nuevo producto en tipo de data objeto
    const newProduct ={
      name: nameInputValue,
      price: price,
      isPurchased: false
    }
    console.log(newProduct)

    //* opción 1
    const clone = [...props.allProducts]
    clone.push(newProduct)
    props.setAllProducts(clone)
    
    //* opción 2:
    //props.setAllProducts([...props.allProducts, newProduct ])
  }

  return (
    <div className="add-form container">
      
      <h2>Add Form</h2>

      <form onSubmit={handleAddProduct}>

        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" onChange={handleNameChange} value={nameInputValue}/>
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input type="number" name="price" onChange={handlePriceChange} value={price}/>
        </div>

        <button>Add</button>

      </form>

    </div>
  )
}

export default AddForm