import React from 'react';
import './pokemon-layout.sass';
import { Link } from 'react-router-dom';

const PokemonLayout = props => {
  return (
    <div className="wrapper-pokemon" 
      style={props.selected
        ? {border: "1px solid #15e298"}
        : {border: "1px solid transparent"}
      }
    >
      <div className="header-detail">
        <Link to='/'>
          <div className="nav-prev">
            <i className="fas fa-chevron-left"></i>
            <span>Home</span>
          </div>
        </Link>
        <div className="select-pokemon">
          {/* <span 
            className="btn-select"
            onClick={props.handleSelectedClick}
            style={props.selected 
              ? {background:"#15e298"} 
              : {
                  background:"transparent",
                  border: "1px solid #15e298",
                  color: "#15e298"
              }} 
          >
            {props.selected
              ? "Deselect Pokemon"
              : "Select Pokemon"
            } 
          </span> */}
        </div>
      </div>
      <div className="genearl-info">
        <div className="image-name">
          <img src={props.image} alt={props.name}/>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </div>
        <div className="desc">
          <ul>
            <li>HP: <span>{props.stats.hp}</span></li>
            <li>Attack: <span>{props.stats.attack}</span></li>
            <li>Defense: <span>{props.stats.defense}</span></li>
            <li>Speed: <span>{props.stats.speed}</span></li>
            <li>Special Attack: <span>{props.stats.specialAttack}</span></li>
            <li>Special Defense: <span>{props.stats.specialDefense}</span></li>
          </ul>
        </div>
      </div>
      <div className="profile">
        <h2>Profile</h2>
        <div className="wrapper-profile">
          <div className="left">
            <p>Height: {props.height}</p>
            <p>Weight: {props.weight}</p>
            <p>Egg Groups: {props.eggGroups}</p>
            <p>Gender Ratio Female: {props.genderRatioFemale}</p>
            <p>Gender Ratio Male: {props.genderRatioMale}</p>
            <p>Hatch Steps: {props.hatchSteps}</p>
          </div>
          <div className="right">
            <p>EVS: {props.evs}</p>
            <div className="abilities">
              <h4>Abilities: </h4>
              {
                props.abilities.map((ability, key) => {
                  return <span key={key}>{ability}</span>
                })
              }
            </div>
            <div className="types">
              <h4>Types: </h4>
              {
                props.types.map((type, key) => {
                  return <span key={key}>{type}</span>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonLayout;
