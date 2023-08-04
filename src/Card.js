import './Card.css';
import { NavLink, Link } from 'react-router-dom';

function Card({name, img, id}) {

  return (
    <NavLink to={`/${name}`}>
    <div className="card" id={id}>
      <img src={img} alt={name}/>
    </div>
    </NavLink>
  )

}

export default Card;