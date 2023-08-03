import Card from "./Card";

function Fishes(props) {
  console.log(props.fishes)
  const allFishes = props.fishes;
  const fishCards = allFishes.map(fish => {
    return (
      <div>
        <Card 
        name={fish.name}
        img={fish.image_url}
        id={fish.name}
        // title={filteredMovie.title}
        // img={filteredMovie.poster_path}
        // rating={filteredMovie.average_rating}
        // id={filteredMovie.id}
        // key={filteredMovie.id}
        />
      </div>
    )
  })
  return(
    <div className="fish-container">
      {fishCards}
    </div>
  )
}

export default Fishes;