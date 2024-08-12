import { useEffect, useState } from 'react'

import * as petService from './services/petService'

import PetList from "./component/PetList"

const App = () => {

    const [petList, setPetList] = useState([])

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
      <PetList petList={petList} />
    </div>
  )
}

export default App