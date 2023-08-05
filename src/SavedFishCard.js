function SavedFishCard({name, img, id, deleteSaved}) {
  
  return (
    <div className="card" id={id}>
      <img src={img} alt={name} />
      <button id={id} onClick={(event) => deleteSaved(event)}>x</button>
    </div>
  )
}

export default SavedFishCard;