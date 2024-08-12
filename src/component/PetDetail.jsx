const PetDetail = props => {
  if (!props.selected) {
    return <h2>No details to display</h2>
  } else {
    return (
      <div>
        <h1>{props.selected.name}</h1>
        <h2>Breed: {props.selected.breed}</h2>
        <h2>Age: {props.selected.age}</h2>
      </div>
    )
  }
}

export default PetDetail
