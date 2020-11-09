import React from 'react';
import './App.css';
import pokemons from './data';
import PokemonList from './PokemonList';



function App() {
  return (
    <div className='App'>
      <h1>Pokedex do Caputo</h1>
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

export default App;
