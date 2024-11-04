// src/App.jsx
import { useState } from 'react'
import PokemonList from './components/PokemonList'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom' // Enables client-sided routes, NO page refresh 
import PokemonDetails from './components/PokemonDetails';


const pokemonArray = [
  { _id: 1, name: 'bulbasaur', weight: 6.9, height: 71.1 },
  { _id: 2, name: 'ivysaur', weight: 13, height: 100 },
  { _id: 3, name: 'venusaur', weight: 100, height: 200.7 },
  { _id: 4, name: 'charmander', weight: 8.5, height: 60.96 },
  { _id: 5, name: 'charmeleon', weight: 19, height: 109.2 }
]

const App = () => {
  const [pokemon, setPokemon] = useState(pokemonArray)

  return (
    <>
      <h1>Pokemon!</h1>
      <NavBar />
      <Routes>

        <Route path="/" element={<h2>Home Page</h2>} />
        {/* When you click on the "Pokemon" link, list of pokemon shows! */}
        <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
        <Route /* Route for specific pokemon details, when you click on Pokemon Link */
          path="/pokemon/:pokemonId"
          element={<PokemonDetails pokemon={pokemon} />}
        />
        
        {/* CATCH-ALL DEFAULT ROUTE, for errors */}
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  )
}

export default App
