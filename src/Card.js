import './Card.css';
import { Link } from 'react-router-dom';

function Card({name, img, id}) {

  return (
    <Link to={`/${name}`}>
    <div className="card" id={id}>
      <img src={img} alt={name}/>
    </div>
    </Link>
  )

}

export default Card;