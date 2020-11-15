import React, { Component } from 'react';
import Pokemon from './Pokemon';



class PokemonList extends Component {
  render () {
    return (
   
      <div className='PokemonList'>
       {this.props.pokemons.map((pokemon, index) => 
        <Pokemon key={index} pokemon={pokemon} />
        )}
         </div>

    )
  }
}



export default PokemonList;