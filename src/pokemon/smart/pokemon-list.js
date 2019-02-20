import React, { Component } from 'react';
import PokemonListLayout from '../stateless/pokemon-list-layout';
import PokemonCard from './pokemon-card';

class PokemonList extends Component {
  constructor() {
    super();
    this.state = {
      url: 'https://pokeapi.co/api/v2/pokemon',
      pokemons: []
    }
  }

  componentDidMount() {
    fetch(this.state.url,{method: 'GET'})
    .then(res => res.json())
    .then(data => {
      this.setState({pokemons: data.results})
    })
  }

  render() {
    return (
      <PokemonListLayout>
        {this.state.pokemons ? (
          this.state.pokemons.map((pokemon, key) => {
            return (
              <PokemonCard key={key} pokemon={pokemon} addPokemonCapture={this.addPokemonCapture} />
            )
          })
        ) : (
          <h2>Loading pokemons</h2>
        )}
      </PokemonListLayout>
    )
  }
}

export default PokemonList;
