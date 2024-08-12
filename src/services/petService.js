const index = async () => {
    try {
        const res = await fetch('http://localhost:3000/pets')
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const create = async (formData) => {
    try {
        const res = await fetch('http://localhost:3000/pets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const updatePet = async (formData, petId) => {
    try {
      const res = await fetch(`http://localhost:3000/pets/${petId}`, {
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

export {
    index,
    create,
    updatePet
}