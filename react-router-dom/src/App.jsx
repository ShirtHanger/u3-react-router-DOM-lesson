// src/App.jsx
import { useState } from 'react'
import PokemonList from './components/PokemonList'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom' // Enables client-sided routes, NO page refresh 

const initialState = [
  { _id: 1, name: 'bulbasaur', weight_in_lbs: 69, height: 7 },
  { _id: 2, name: 'ivysaur', weight_in_lbs: 130, height: 10 },
  { _id: 3, name: 'venusaur', weight_in_lbs: 1000, height: 20 },
  { _id: 4, name: 'charmander', weight_in_lbs: 85, height: 6 },
  { _id: 5, name: 'charmeleon', weight_in_lbs: 190, height: 11 }
]

const App = () => {
  const [pokemon, setPokemon] = useState(initialState)

  return (
    <>
      <h1>Pokemon!</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        {/* When you click on the "Pokemon" link, list of pokemon shows! */}
        <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
      </Routes>
    </>
  )
}

export default App
