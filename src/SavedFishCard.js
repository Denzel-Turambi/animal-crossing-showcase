import PropTypes from 'prop-types';

function SavedFishCard({name, img, id, deleteSaved}) {
  
  return (
    <div className="card" id={id}>
      <img src={img} alt={name} />
      <button id={id} onClick={(event) => deleteSaved(event)}>x</button>
    </div>
  )
}

export default SavedFishCard;

SavedFishCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteSaved: PropTypes.func.isRequired
}