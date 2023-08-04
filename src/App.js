import './App.css';
import { useState, useEffect } from 'react';
import { getFishData } from './ApiCalls';
import Fishes from './Fishes';
import Focus from './Focus';
import { Router, Routes, Route } from 'react-router-dom';

function App() {
  const [fishes, setFishes] = useState([]);
  // const [singleFishname, setSingleFishName] = useState('')

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
      <section className='all-fish-display'>
        <Routes>
          <Route path ="/" element={ 
            <Fishes fishes={fishes}/>
          } />
          <Route path = "/:name" element={
            <Focus/>
          } />
        </Routes>
      </section>
    </main>
  );
}

export default App;
