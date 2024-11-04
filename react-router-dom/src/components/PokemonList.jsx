import { Link } from 'react-router-dom' // We will turn each pokemon into a clickable link showing their details

const PokemonList = (props) => {
    
    return (
      <>
        <h2>Pokemon</h2>
        {/* List of pokemon */}
        <ul>
          {props.pokemon.map((currentPokemon) => (

            <li key={currentPokemon.name}>
              {/* Dynamic list of links! Sends you to specific pokemon by ID */}
              <Link to={`/pokemon/${currentPokemon._id}`}>
                {currentPokemon.name}
              </Link>
              </li>

          ))}
        </ul>
      </>
    )
  }
  
  export default PokemonList
  