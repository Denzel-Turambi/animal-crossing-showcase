import { useState, useEffect } from "react";
import { getSingleFish } from "./ApiCalls";
import { useParams } from "react-router-dom";

function Focus() {
  const [selectedFish, setSelectedFish] = useState({})

  const {name} = useParams();
  console.log('NAME', name)

  useEffect(() => {
    getSingleFish(name)
    .then(data => setSelectedFish(data))
  }, [name])

  console.log('FISH', selectedFish)

  return (
    <h1>{selectedFish.name}</h1>
  )
}

export default Focus;