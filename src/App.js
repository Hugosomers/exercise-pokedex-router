import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> Pokedex </h1>
        <nav>
          <Link to="/"> Home </Link>
        </nav>
      </div>
      <Switch>
        <Route exact path="/" render={() => (<Pokedex pokemons={pokemons} />)}/>
        <Route path="/pokemons/:id" render={(props) => <PokemonDetails {...props} info={pokemons}/> }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;