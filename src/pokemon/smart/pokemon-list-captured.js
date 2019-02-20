import React, {Component} from 'react';

class PokemonCaptured extends Component {
  constructor() {
    super();
    this.state = {
      pokemonIndex: '',
      pokemonsCaptured: []
    }
  }

  componentDidMount() {
    
  }
  
  handleSelected = event => {
    console.log(this.props.pokemonIndex);
    this.setState({
      pokemonsCaptured: this.props.pokemonIndex
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSelected}>Capture it</button>
      </div>
    )
  }
}

export default PokemonCaptured;
