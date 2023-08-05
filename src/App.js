import './App.css';
import { useState, useEffect } from 'react';
import { getFishData } from './ApiCalls';
import Fishes from './Fishes';
import Focus from './Focus';
import SavedFishes from './SavedFishes';
import PageNotFound from './PageNotFound';
import Nav from './Nav';
import { Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [fishes, setFishes] = useState([]);
  const [saved, setSaved] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getFishData()
    .then(data => setFishes(data))
    .catch(error => {
      if(error.status === 500) {
        setError('Oops! Looks like there is a server error.');
      } else {
        setError(error);
      }
    })
  }, [])

  const toggleSaved = (newFish) => {
    const isFishSaved = saved.some((fish) => fish.name === newFish.name);
    console.log('1', isFishSaved)
    if (!isFishSaved) {
      setSaved([...saved, newFish]);
      }
    }
    console.log('SAVED', saved)

    if(error){
      return(<h1 className ="error-message" >{"An error occurred while fetching data."}</h1>);
    }

  return (
    <main>
      <Nav /> 
      <section className='all-fish-display'>
        <Routes>
          <Route path ="/" element={ 
            <Fishes fishes={fishes}/>
          } />
          <Route path = "/fish/:name" element={
            <Focus toggleSaved={toggleSaved} saved={saved} error={error} setError={setError}/>
          } />
          <Route path='/saved-fishes' element={
            <SavedFishes saved={saved} setSaved={setSaved}/>
          } />
          <Route path="/404" element={<PageNotFound/>}/>
          <Route path="*" element={<Navigate to= "/404"/>}/>
        </Routes>
      </section>
    </main>
  );
}

export default App;
