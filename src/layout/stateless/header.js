import React from 'react';
import './header.sass';
import SerachBar from './search-bar';

const Header = props => {
  return (
    <div className="wrapper-header">
      <header>
        <div className="logo">
          <img src="../../../images/logo.svg" alt="Pokedex"/>
        </div>
        {/* <SerachBar /> */}
        <a href="" className="collected-p">
          {/* <i className="fas fa-archive"></i> */}
          <span>Collected Pokemons</span>
        </a>
      </header>
    </div>
  )
}

export default Header;