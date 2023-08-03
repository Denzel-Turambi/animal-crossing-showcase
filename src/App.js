import './App.css';
import { useState, useEffect } from 'react';
import { getFishData } from './ApiCalls';
import Fishes from './Fishes';
import dummyFish from './dummyData';

function App() {
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    getFishData()
    .then(data => setFishes(data))
  }, [])
  // console.log(fishes)

  return (
    <main>
      <nav className='nav'>
        <h1 className ='logo-title'>Animal Crossings: Fishipedia</h1>
      </nav>
      <Fishes fishes={fishes}/>
    </main>
  );
}

export default App;
