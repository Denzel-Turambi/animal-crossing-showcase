import './Card.css';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Card({name, img, id}) {

  return (
    <NavLink to={`/fish/${name}`}>
    <div className="card" id={id}>
      <img src={img} alt={name}/>
    </div>
    </NavLink>
  )

}

export default Card;

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}