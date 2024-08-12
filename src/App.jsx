import { useEffect, useState } from 'react'

import * as petService from './services/petService'

import PetList from './component/PetList'
import PetDetail from './component/PetDetail'
import PetForm from './component/PetForm'

const App = () => {
  const [petList, setPetList] = useState([])
  const [selected, setSelected] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const updateSelected = pet => {
    setSelected(pet)
  }

  const handleFormView = (pet) => {
    if (!pet.name) setSelected(null)
    setIsFormOpen(!isFormOpen)
  }

  const handleAddPet = async formData => {
    try {
      const newPet = await petService.create(formData)
      setPetList([newPet, ...petList])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const data = await petService.index()
        setPetList(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPets()
  }, [])

  return (
    <div>
      <PetList
        petList={petList}
        updateSelected={updateSelected}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />
      {isFormOpen ? (
        <PetForm handleAddPet={handleAddPet} selected={selected} />
      ) : (
        <PetDetail selected={selected} handleFormView={handleFormView} />
      )}
    </div>
  )
}

export default App
