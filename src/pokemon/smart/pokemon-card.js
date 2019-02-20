import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PokemonCardLayout from '../stateless/pokemon-card-layout';
import PokemonCaptured from './pokemon-list-captured';

class PokemonCard extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      imageUrl: '',
      pokemonIndex: ''
    }
  }

  componentDidMount() {
    const { name, url } = this.props.pokemon;

    const pokemonIndex = url.split('/')[url.split("/").length -2];

    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({
      name: name, 
      imageUrl: imageUrl,
      pokemonIndex: pokemonIndex
    })
  }

  render() {
    return (
        <Link to={`pokemon/${this.state.pokemonIndex}`}>
          <PokemonCardLayout name={this.state.name} image={this.state.imageUrl} />
        </Link>
    )
  }
}

export default  PokemonCard;