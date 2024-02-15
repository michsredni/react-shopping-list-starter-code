
function AddForm() {
  return (
    <div className="add-form">
      
      <h2>Add Form</h2>

      <form>

        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name"/>
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input type="number" name="price"/>
        </div>

        <button>Add</button>

      </form>

    </div>
  )
}

export default AddForm