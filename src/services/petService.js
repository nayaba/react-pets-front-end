const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`

// You should also have .env file with this inside:
// VITE_BACK_END_SERVER_URL='http://localhost:3000'

// Don't forget to add .env to your .gitignore file!!!

const index = async () => {
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const create = async formData => {
  console.log(formData)
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const updatePet = async (formData, petId) => {
  try {
    const res = await fetch(`${BASE_URL}/${petId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deletePet = async petId => {
  try {
    const deletedPet = await fetch(`${BASE_URL}/${petId}`, {
      method: 'DELETE',
    })
    console.log('service: ', deletedPet)
    return deletedPet.json()
  } catch (error) {
    console.log(error)
  }
}

export { index, create, updatePet, deletePet }
