import React, { Component } from 'react';
import Pokedex from './pokedex.png';
import './about.css'

export default class About extends Component {
  render() {
    return (
      <div>
        <img src={Pokedex} alt="pokedex" className="pokeDexImg"/>
        <p>The Pokédex (Japanese: ポケモン図鑑 illustrated Pokémon encyclopedia) is a digital encyclopedia created by Professor Oak as an invaluable tool to Trainers in the Pokémon world. It gives information about all Pokémon in the world that are contained in its database, although it differs in how it acquires and presents information over the different media.</p>
      </div>
    )
  }
}
