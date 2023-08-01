import './App.css';
import { useState } from 'react';
import { getFishData } from './ApiCalls';

function App() {
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    getFishData()
    .then(data => setFishes(data))
  }, [])

  return (
    <nav>
      <h1>Animal Crossings: Fishipedia</h1>
    </nav>
  );
}

export default App;
