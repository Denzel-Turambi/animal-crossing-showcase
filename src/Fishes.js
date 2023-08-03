import Card from "./Card";
import './Fishes.css';

function Fishes(props) {
  console.log(props.fishes)
  const allFishes = props.fishes;
  const fishCards = allFishes.map(fish => {
    return (
      <div className="card-container" key={fish.name}>
        <Card 
        name={fish.name}
        img={fish.image_url}
        id={fish.name}
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