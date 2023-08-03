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
      <nav>
        <h1>Animal Crossings: Fishipedia</h1>
        <Fishes fishes={fishes}/>
      </nav>
    </main>
  );
}

export default App;
