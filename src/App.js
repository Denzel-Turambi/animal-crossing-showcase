import './App.css';
import { useState, useEffect } from 'react';
import { getFishData } from './ApiCalls';
import Fishes from './Fishes';
import Focus from './Focus';
import SavedFishes from './SavedFishes';
import Nav from './Nav';
import { Router, Routes, Route } from 'react-router-dom';

function App() {
  const [fishes, setFishes] = useState([]);
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    getFishData()
    .then(data => setFishes(data))
  }, [])

  const toggleSaved = (newFish) => {
    const isFishSaved = saved.some((fish) => fish.name === newFish.name);
    console.log('1', isFishSaved)
    if (!isFishSaved) {
      setSaved([...saved, newFish]);
      }
    }
    console.log('SAVED', saved)

  return (
    <main>
      <Nav /> 
      <section className='all-fish-display'>
        <Routes>
          <Route path ="/" element={ 
            <Fishes fishes={fishes}/>
          } />
          <Route path = "/:name" element={
            <Focus toggleSaved={toggleSaved} saved={saved}/>
          } />
          <Route path='/saved-fishes' element={
            <SavedFishes />
          } />
        </Routes>
      </section>
    </main>
  );
}

export default App;
