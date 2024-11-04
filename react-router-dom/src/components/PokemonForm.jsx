// src/components/PokemonForm.jsx

/* This is basically a CREATE form, user can insert Pokemon into the list */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Allows navigation on clicks and stuff


const initialState = {
  name: '',
  weight: 0,
  height: 0,
}

const PokemonForm = (props) => {
    
  const [formData, setFormData] = useState(initialState)
  const navigate = useNavigate(); // Allows navigation on clicks and stuff

  function handleSubmit (event) {
    event.preventDefault()
    props.addPokemon(formData)
    setFormData(initialState)
    navigate('/pokemon') // Navigates to new page
  }

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value })
  }

  return (
    <main>
      <h2>New Pokemon</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default PokemonForm
