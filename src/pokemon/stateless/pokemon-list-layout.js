import React from 'react';
import './pokemon-list-layout.sass';

const PokemonListLayout = props => {
  return (
    <div className="wrapper-list">
      {props.children}
    </div>
  )
}

export default PokemonListLayout;
