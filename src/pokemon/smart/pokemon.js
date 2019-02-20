import React, { Component } from 'react';
import PokemonLayout from '../stateless/pokemon-layout';

export default class Pokemon extends Component {
  constructor(){
    super();
    this.state = {
      selected: false,
      name: '',
      pokemonIndex: '',
      imageUrl: '',
      types: [],
      description: '',
      stats: {
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        specialAttack: '',
        specialDefense: ''
      },
      height: '',
      weight: '',
      eggGroups: '',
      abilities: [],
      genderRatioMale: '',
      genderRatioFemale: '',
      evs: '',
      hatchSteps: '',
    }
  }

  componentDidMount() {
    const { pokemonIndex } = this.props.match.params;

    //Url for pokemon information
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`;
    const pokemonSpecieUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}`;

    // Get pokémon Information
    fetch(pokemonUrl, {method: 'GET'})
    .then(res => res.json())
    .then(data => {
      let { hp, attack, defense, speed, specialAttack, specialDefense } = '';
      data.stats.map(stat => {
        switch (stat.stat.name) {
          case 'hp':
            hp = stat['base_stat'];
            break;
          case 'attack':
            attack = stat['base_stat'];
            break;
          case 'defense':
            defense = stat['base_stat'];
            break;
          case 'speed':
            speed = stat['base_stat'];
            break;
          case 'special-attack':
            specialAttack = stat['base_stat'];
            break;
          case 'special-defense':
            specialDefense = stat['base_stat'];
            break;
        }
      });
      const height = data.height;
      const weight = data.weight;
      const types = data.types.map(type => type.type.name);
      const abilities = data.abilities.map(ability => {
        return ability.ability.name
          .toLowerCase()
          .split('-')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
      }); 
      const evs = data.stats.filter(stat => {
        if (stat.effort > 0) {
          return true;
        } 
        return false;
      })
      .map(stat => {
        return `${stat.effort} ${stat.stat.name}`
          .toLowerCase()
          .split('-')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
      })
      .join(', ');
      this.setState({
        name: data.name,
        imageUrl: data.sprites.front_default,
        height,
        weight,
        types,
        abilities,
        evs,
        stats: {
          hp,
          attack,
          defense,
          speed, 
          specialAttack, 
          specialDefense

        }
      });
    });

    // Get Pokémon Description, Catch Rate, EggGroups, Gender Ration, Hatch Steps
    fetch(pokemonSpecieUrl, {method: 'GET'})
    .then(res => res.json())
    .then(data => {
      let description = '';
      data.flavor_text_entries.some(flavor => {
        if(flavor.language.name === 'en') {
          description = flavor.flavor_text;
          return;
        }
      });

      const femaleRate = data['gender_rate'];
      const genderRatioFemale = 12.5 * femaleRate;
      const genderRatioMale = 12.5 * (8-femaleRate);

      const catchRate = Math.round((100/255) * data['capture_rate']);

      const eggGroups = data['egg_groups'].map(group => {
        return group.name;
      });

      const hatchSteps = 255 * (data['hatch_counter'] + 1);

      this.setState({
        description,
        genderRatioFemale,
        genderRatioMale,
        eggGroups,
        hatchSteps
      });

    });
  }

  handleSelectedClick = event => {
    this.setState({
      selected: !this.state.selected
    });
    console.log(this.state.selected);
  }

  render() {
    return (
      <div>
        <PokemonLayout
          name={this.state.name} 
          image={this.state.imageUrl} 
          stats={this.state.stats}
          abilities={this.state.abilities}
          types={this.state.types}
          description={this.state.description}
          height={this.state.height}
          weight={this.state.weight}
          eggGroups={this.state.eggGroups}
          genderRatioFemale={this.state.genderRatioFemale}
          genderRatioMale={this.state.genderRatioMale}
          hatchSteps={this.state.hatchSteps}
          evs={this.state.evs}
          selected={this.state.selected}
          handleSelectedClick={this.handleSelectedClick}
          selected={this.state.selected}
        />
      </div>
    )
  }
}
