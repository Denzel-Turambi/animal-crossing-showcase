import { useState, useEffect } from "react";
import { getSingleFish } from "./ApiCalls";
import { useParams } from "react-router-dom";
import './Focus.css'

function Focus(props) {
  const [selectedFish, setSelectedFish] = useState({})

  const {name} = useParams();

  useEffect(() => {
    getSingleFish(name)
    .then(data => setSelectedFish(data))
    .catch(error => {
      if(error.status === 500) {
        props.setError('Oops! Looks like there is a server error.');
      } else {
        props.setError(error);
      }
    })
  }, [name])

  if(props.error){
    return(<h1 className ="error-message" >{"An error occurred while fetching data."}</h1>);
  }

  return (
    <section className="focus-display">
      <div className="focus-fish">
        <img className="fish-icon" src={selectedFish.image_url}></img>
        <h1 className="fish-name">{selectedFish.name}</h1>
      </div>
      <div className="focus-details">
        <div className="focus-text">
          <p><strong>Location:</strong> {selectedFish.location}</p>
          <p><strong>sell to C.J.:</strong> {selectedFish.sell_cj} Bells</p>
          <p><strong>sell to Nook:</strong> {selectedFish.sell_nook} Bells</p>
          <p><strong>Tank Length:</strong> {selectedFish.tank_length} Units</p>
          <p><strong>Tank Width:</strong> {selectedFish.tank_width} Units</p>
        </div>
        <div className="focus-image">
          <p><strong>In-Game Render:</strong></p>
          <img className ="fish-image" src={selectedFish.render_url}/>
        </div>
      </div>
      <button onClick={() => props.toggleSaved(selectedFish)}>Save Fish</button>
    </section>
  )
}

export default Focus;