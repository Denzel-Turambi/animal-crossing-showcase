import './Card.css';

function Card({name, img, id}) {

  return (
    <div className="card" id={id}>
      <img src={img} alt={name}/>
    </div>
  )

}

export default Card;