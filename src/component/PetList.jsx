const PetList = props => {

    const pets = props.petList.map((pet) => {
        return <a onClick={() => props.updateSelected(pet)}><li>{pet.name}</li></a>
    })

  return (
    <div>
      <h2>Pet List</h2>
      {!props.petList.length ? 
        <h2>No Pets Yet!</h2> :
        <ul>{pets}</ul>
      }
    </div>
  )
}

export default PetList
