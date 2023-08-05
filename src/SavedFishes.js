import { NavLink } from "react-router-dom";
import SavedFishCard from "./SavedFishCard";
import PropTypes from 'prop-types';

function SavedFishes(props) {

  const deleteSaved = (event) => {
    console.log(event.target)
    const target = event.target
    if (target && target.id) {
      let filterSaved = props.saved.filter(fish => fish.name !== target.id);
      props.setSaved(filterSaved);
    }
  };

  const allSavedFishes = props.saved;
  const savedCards = allSavedFishes.map(fish => {
    return (
      <div key={fish.name}>
        <SavedFishCard 
        name={fish.name}
        img={fish.image_url}
        id={fish.name}
        deleteSaved={deleteSaved}
        />
      </div>
    )
  })

  return (
    <div className="fish-container">
      {savedCards}
    </div>
  )
}

export default SavedFishes;

SavedFishes.propTypes = {
  props: PropTypes.shape({
   saved: PropTypes.array.isRequired,
   setSaved: PropTypes.func.isRequired
  })
}