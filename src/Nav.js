import { NavLink } from "react-router-dom";

function Nav() {

  return (
    <nav className='nav'>
      <NavLink to={'/'} style={{textDecoration:'none'}}>
        <h1 className ='logo-title'>Animal Crossings: Fishipedia</h1>
      </NavLink>
      <NavLink to={'/saved-fishes'}>
        <button>Saved Fishes</button>
      </NavLink>
    </nav> 
  )
}

export default Nav;