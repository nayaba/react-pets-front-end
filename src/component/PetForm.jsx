import { useState } from 'react'

const PetForm = (props) => {
  const initialState = {
    name: '',
    age: '',
    breed: '',
  }

  const [formData, setFormData] = useState(initialState)

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleAddPet(formData)
    setFormData(initialState)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="breed">Breed: </label>
        <input
          type="text"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Add New Pet</button>
      </form>
    </div>
  )
}

export default PetForm
