// src/components/PokemonDetails.jsx
import { useParams } from "react-router-dom"; //Required to access specific ID of selected Pokemon

const PokemonDetails = (props) => {
    console.log(props); // Always verify that any props are being passed correctly!

    // Pull the ID of selected Pokemon into a variable
    const { pokemonId } = useParams()
    console.log('Pokemon ID:', pokemonId)

    // Locates pokemon with find(), so we can render data of that Pokemon only!
    const singlePokemon = props.pokemon.find((poke) => 
        poke._id === Number(pokemonId)); /* Finds pokemon by its ID, must convert to number */
    console.log('Pokemon Object:', singlePokemon)

    return (
      <>
        <h2>Details of {singlePokemon.name}</h2>
        {/* This is a detail list tag, key value pairs, google it */}
        <dl>
          <dt>Weight (kg)</dt>
          <dd>{singlePokemon.weight}</dd>
          <dt>Height (cm)</dt>
          <dd>{singlePokemon.height}</dd>
        </dl>
      </>
    );
  };
  
  export default PokemonDetails;
  