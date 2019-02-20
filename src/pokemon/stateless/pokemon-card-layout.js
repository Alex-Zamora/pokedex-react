import React from 'react';
import './pokemon-card-layout.sass';

const PokemonCardLayout = props => {
  return (
    <div className="pokemon-card">
      <img src={props.image} alt="{props.name}"/>
      <div className="desc">
        <h2 className="name"> {props.name}</h2>
      </div>
    </div>
  )
}

export default PokemonCardLayout;
