import './App.css'
import React, { useState, useEffect } from 'react'
import getAllStarships from './services/sw-api'
import StarshipCard from './cards'


const App = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    getAllStarships()
      .then(data => setStarships(data.results))
  }, [])
  return(
    <div>
      <h1>Star Wars Starships</h1>
      <div className =  "container">
        {starships.map((ship, i) => {   
          return(
            <StarshipCard name = {ship.name} key={i}/>
          )
        })}
      </div>
    </div>
  )
}

export default App