import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import HomeLayout from '../stateless/home-layout';
import Header from '../../layout/stateless/header';
import PokemonList from '../../pokemon/smart/pokemon-list';
import Pokemon from '../../pokemon/smart/pokemon';

class Home extends Component {

  render() {
    return (
      <Router>
        <HomeLayout>
          <Header />
          <Switch>
            <Route exact path="/" component={PokemonList} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
          </Switch>
        </HomeLayout>
      </Router>
    )
  }
}

export default Home;